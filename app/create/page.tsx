'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import GainsForm from '@/components/GainsForm';
import GainsPreview from '@/components/GainsPreview';
import GainsExport from '@/components/GainsExport';
import { GainsData, createEmptyGainsData } from '@/types/gains';
import { saveGains, loadGains } from '@/utils/storage';
import { Save, Eye, FileEdit } from 'lucide-react';

function CreatePageContent() {
    const searchParams = useSearchParams();
    const [gainsData, setGainsData] = useState<GainsData>(createEmptyGainsData());
    const [showPreview, setShowPreview] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [lastSaved, setLastSaved] = useState<Date | null>(null);

    useEffect(() => {
        const id = searchParams.get('id');
        if (id) {
            const loaded = loadGains(id);
            if (loaded) {
                setGainsData(loaded);
            }
        }
    }, [searchParams]);

    const handleSave = () => {
        setIsSaving(true);
        try {
            saveGains(gainsData);
            setLastSaved(new Date());
            setTimeout(() => setIsSaving(false), 500);
        } catch (error) {
            console.error('Error saving:', error);
            alert('Có lỗi xảy ra khi lưu. Vui lòng thử lại!');
            setIsSaving(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold text-gradient mb-3">
                    Tạo bảng Gains 2.0
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Điền thông tin bên dưới và xem preview bên phải
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up">
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="btn-primary flex items-center gap-2"
                >
                    <Save className={`w-5 h-5 ${isSaving ? 'animate-spin' : ''}`} />
                    {isSaving ? 'Đang lưu...' : 'Lưu Gains'}
                </button>

                <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="btn-outline flex items-center gap-2 md:hidden"
                >
                    {showPreview ? <FileEdit className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    {showPreview ? 'Xem Form' : 'Xem Preview'}
                </button>

                {lastSaved && (
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Đã lưu lúc {lastSaved.toLocaleTimeString('vi-VN')}
                    </div>
                )}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className={`${showPreview ? 'hidden lg:block' : 'block'} animate-fade-in`}>
                    <GainsForm data={gainsData} onChange={setGainsData} />
                </div>

                {/* Preview Section */}
                <div className={`${showPreview ? 'block' : 'hidden lg:block'} space-y-6 animate-fade-in`}>
                    <div className="sticky top-24 space-y-6">
                        {/* Export Buttons */}
                        <GainsExport data={gainsData} />

                        {/* Preview Card */}
                        <div className="card p-6">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-red-600" />
                                Preview
                            </h3>

                            <div className="overflow-auto max-h-[800px] border-2 border-slate-200 dark:border-slate-700 rounded-lg">
                                <div className="transform scale-[0.6] origin-top-left" style={{ width: '166.67%' }}>
                                    <GainsPreview data={gainsData} />
                                </div>
                            </div>

                            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 text-center">
                                * Preview có thể khác một chút so với file xuất ra
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tips Section */}
            <div className="card p-6 mt-12 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">💡 Mẹo nhỏ</h3>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li>• Nhớ lưu thường xuyên để không mất dữ liệu</li>
                    <li>• Upload logo và ảnh đại diện có độ phân giải cao để file xuất ra đẹp hơn</li>
                    <li>• Điền đầy đủ thông tin để bảng Gains trông chuyên nghiệp nhất</li>
                    <li>• Bạn có thể quay lại chỉnh sửa bất cứ lúc nào từ trang Thư viện</li>
                </ul>
            </div>
        </div>
    );
}

export default function CreatePage() {
    return (
        <Suspense fallback={
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <div className="inline-block w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-slate-600">Đang tải...</p>
                </div>
            </div>
        }>
            <CreatePageContent />
        </Suspense>
    );
}
