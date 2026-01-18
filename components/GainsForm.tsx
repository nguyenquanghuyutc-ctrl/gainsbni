'use client';

import React, { useState } from 'react';
import { GainsData } from '@/types/gains';
import { Building2, Target, Briefcase, Trophy, TrendingUp, Heart, Users, Award } from 'lucide-react';

interface GainsFormProps {
    data: GainsData;
    onChange: (data: GainsData) => void;
}

export default function GainsForm({ data, onChange }: GainsFormProps) {
    const [logoPreview, setLogoPreview] = useState<string>(data.companyInfo.logo || '');
    const [photoPreview, setPhotoPreview] = useState<string>(data.companyInfo.memberPhoto || '');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'logo' | 'photo') => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                if (type === 'logo') {
                    setLogoPreview(result);
                    onChange({
                        ...data,
                        companyInfo: { ...data.companyInfo, logo: result }
                    });
                } else {
                    setPhotoPreview(result);
                    onChange({
                        ...data,
                        companyInfo: { ...data.companyInfo, memberPhoto: result }
                    });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const updateField = (section: keyof GainsData, field: string, value: any) => {
        onChange({
            ...data,
            [section]: {
                ...(data[section] as any),
                [field]: value
            }
        });
    };

    const addArrayItem = (section: keyof GainsData, field: string) => {
        const current = (data[section] as any)[field] || [];
        updateField(section, field, [...current, '']);
    };

    const updateArrayItem = (section: keyof GainsData, field: string, index: number, value: string) => {
        const current = [...((data[section] as any)[field] || [])];
        current[index] = value;
        updateField(section, field, current);
    };

    const removeArrayItem = (section: keyof GainsData, field: string, index: number) => {
        const current = [...((data[section] as any)[field] || [])];
        current.splice(index, 1);
        updateField(section, field, current);
    };

    const addAchievement = () => {
        onChange({
            ...data,
            achievements: [...data.achievements, { description: '' }]
        });
    };

    const updateAchievement = (index: number, description: string) => {
        const updated = [...data.achievements];
        updated[index] = { description };
        onChange({ ...data, achievements: updated });
    };

    const removeAchievement = (index: number) => {
        const updated = [...data.achievements];
        updated.splice(index, 1);
        onChange({ ...data, achievements: updated });
    };

    const addSuccessTransfer = () => {
        onChange({
            ...data,
            successTransfers: [...data.successTransfers, { count: 0, description: '' }]
        });
    };

    const updateSuccessTransfer = (index: number, field: 'count' | 'description', value: any) => {
        const updated = [...data.successTransfers];
        updated[index] = { ...updated[index], [field]: value };
        onChange({ ...data, successTransfers: updated });
    };

    const removeSuccessTransfer = (index: number) => {
        const updated = [...data.successTransfers];
        updated.splice(index, 1);
        onChange({ ...data, successTransfers: updated });
    };

    return (
        <div className="space-y-6">
            {/* Company Info Section */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Building2 className="w-7 h-7 text-red-600" />
                    <span>Thông tin Doanh nghiệp</span>
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="label">Tên thành viên</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="VD: NGUYỄN QUANG A"
                            value={data.companyInfo.memberName}
                            onChange={(e) => updateField('companyInfo', 'memberName', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Tên công ty</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="VD: CÔNG TY TNHH ABC"
                            value={data.companyInfo.name}
                            onChange={(e) => updateField('companyInfo', 'name', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Số điện thoại</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="VD: 097xxxx"
                                value={data.companyInfo.phone}
                                onChange={(e) => updateField('companyInfo', 'phone', e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="label">Địa chỉ</label>
                            <input
                                type="text"
                                className="input-field"
                                placeholder="VD: 123 Đường ABC, Quận XYZ"
                                value={data.companyInfo.address}
                                onChange={(e) => updateField('companyInfo', 'address', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">Logo công ty</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="input-field"
                                onChange={(e) => handleImageUpload(e, 'logo')}
                            />
                            {logoPreview && (
                                <div className="mt-2 w-24 h-24 border-2 border-slate-200 rounded-lg overflow-hidden">
                                    <img src={logoPreview} alt="Logo preview" className="w-full h-full object-contain" />
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="label">Ảnh đại diện</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="input-field"
                                onChange={(e) => handleImageUpload(e, 'photo')}
                            />
                            {photoPreview && (
                                <div className="mt-2 w-24 h-24 border-2 border-slate-200 rounded-full overflow-hidden">
                                    <img src={photoPreview} alt="Photo preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Short-term Goals */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Target className="w-7 h-7 text-red-600" />
                    <span>Mục tiêu ngắn hạn</span>
                </h2>

                <div className="space-y-3">
                    {data.shortTermGoals.items.map((goal, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder={`Mục tiêu ${index + 1}`}
                                value={goal}
                                onChange={(e) => updateArrayItem('shortTermGoals', 'items', index, e.target.value)}
                            />
                            <button
                                onClick={() => removeArrayItem('shortTermGoals', 'items', index)}
                                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addArrayItem('shortTermGoals', 'items')}
                        className="btn-outline w-full"
                    >
                        + Thêm mục tiêu
                    </button>
                </div>
            </section>

            {/* Industry */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Briefcase className="w-7 h-7 text-red-600" />
                    <span>Ngành nghề</span>
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="label">Mô tả ngành nghề</label>
                        <textarea
                            className="input-field min-h-[100px]"
                            placeholder="Mô tả về ngành nghề của bạn..."
                            value={data.industry.description}
                            onChange={(e) => updateField('industry', 'description', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Dịch vụ cung cấp</label>
                        {data.industry.services.map((service, index) => (
                            <div key={index} className="flex gap-2 mb-3">
                                <input
                                    type="text"
                                    className="input-field flex-1"
                                    placeholder={`Dịch vụ ${index + 1}`}
                                    value={service}
                                    onChange={(e) => updateArrayItem('industry', 'services', index, e.target.value)}
                                />
                                <button
                                    onClick={() => removeArrayItem('industry', 'services', index)}
                                    className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                                >
                                    Xóa
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => addArrayItem('industry', 'services')}
                            className="btn-outline w-full"
                        >
                            + Thêm dịch vụ
                        </button>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Trophy className="w-7 h-7 text-red-600" />
                    <span>Kỹ năng / Thành tích</span>
                </h2>

                <div className="space-y-3">
                    {data.achievements.map((achievement, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder={`Thành tích ${index + 1}`}
                                value={achievement.description}
                                onChange={(e) => updateAchievement(index, e.target.value)}
                            />
                            <button
                                onClick={() => removeAchievement(index)}
                                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={addAchievement}
                        className="btn-outline w-full"
                    >
                        + Thêm thành tích
                    </button>
                </div>
            </section>

            {/* Success Transfers */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <TrendingUp className="w-7 h-7 text-red-600" />
                    <span>Thành tựu</span>
                </h2>

                <div className="space-y-3">
                    {data.successTransfers.map((transfer, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="number"
                                className="input-field w-20"
                                placeholder="SL"
                                value={transfer.count}
                                onChange={(e) => updateSuccessTransfer(index, 'count', parseInt(e.target.value) || 0)}
                            />
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder="Mô tả thành tựu"
                                value={transfer.description}
                                onChange={(e) => updateSuccessTransfer(index, 'description', e.target.value)}
                            />
                            <button
                                onClick={() => removeSuccessTransfer(index)}
                                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={addSuccessTransfer}
                        className="btn-outline w-full"
                    >
                        + Thêm thành tựu
                    </button>
                </div>
            </section>

            {/* Interests */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Heart className="w-7 h-7 text-red-600" />
                    <span>Sở thích</span>
                </h2>

                <div className="space-y-3">
                    {data.interests.items.map((interest, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder={`Sở thích ${index + 1}`}
                                value={interest}
                                onChange={(e) => updateArrayItem('interests', 'items', index, e.target.value)}
                            />
                            <button
                                onClick={() => removeArrayItem('interests', 'items', index)}
                                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addArrayItem('interests', 'items')}
                        className="btn-outline w-full"
                    >
                        + Thêm sở thích
                    </button>
                </div>
            </section>

            {/* Network */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Users className="w-7 h-7 text-red-600" />
                    <span>Mạng lưới mối quan hệ</span>
                </h2>

                <div className="space-y-3">
                    {data.network.items.map((item, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                className="input-field flex-1"
                                placeholder={`Mối quan hệ ${index + 1}`}
                                value={item}
                                onChange={(e) => updateArrayItem('network', 'items', index, e.target.value)}
                            />
                            <button
                                onClick={() => removeArrayItem('network', 'items', index)}
                                className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={() => addArrayItem('network', 'items')}
                        className="btn-outline w-full"
                    >
                        + Thêm mối quan hệ
                    </button>
                </div>
            </section>

            {/* BNI Info */}
            <section className="card p-6 animate-fade-in">
                <h2 className="section-title">
                    <Award className="w-7 h-7 text-red-600" />
                    <span>Thông tin BNI</span>
                </h2>

                <div className="space-y-4">
                    <div>
                        <label className="label">Vai trò</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="VD: Thành viên ĐẠO TẠO"
                            value={data.bniInfo.role}
                            onChange={(e) => updateField('bniInfo', 'role', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Tên Chapter</label>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="VD: BNI Panda Chapter"
                            value={data.bniInfo.chapter}
                            onChange={(e) => updateField('bniInfo', 'chapter', e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="label">Mô tả Chapter</label>
                        <textarea
                            className="input-field min-h-[80px]"
                            placeholder="Mô tả về chapter của bạn..."
                            value={data.bniInfo.chapterDescription}
                            onChange={(e) => updateField('bniInfo', 'chapterDescription', e.target.value)}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
