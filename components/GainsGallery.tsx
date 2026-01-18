'use client';

import React, { useState, useEffect } from 'react';
import { GainsData } from '@/types/gains';
import { getAllGains, deleteGains } from '@/utils/storage';
import { Trash2, Edit, Eye } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function GainsGallery() {
    const [gainsList, setGainsList] = useState<GainsData[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    useEffect(() => {
        loadGains();
    }, []);

    const loadGains = () => {
        const all = getAllGains();
        setGainsList(all);
    };

    const handleDelete = (id: string) => {
        if (confirm('Bạn có chắc chắn muốn xóa bảng Gains này?')) {
            deleteGains(id);
            loadGains();
        }
    };

    const handleEdit = (id: string) => {
        router.push(`/create?id=${id}`);
    };

    const filteredGains = gainsList.filter(gains =>
        gains.companyInfo.memberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        gains.companyInfo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Search */}
            <div className="card p-4">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên thành viên hoặc công ty..."
                    className="input-field"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card p-6 text-center">
                    <div className="text-4xl font-bold text-red-600">{gainsList.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Tổng số bảng Gains</div>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-4xl font-bold text-amber-600">{filteredGains.length}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Kết quả tìm kiếm</div>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600">
                        {gainsList.length > 0 ? new Date(Math.max(...gainsList.map(g => new Date(g.updatedAt || 0).getTime()))).toLocaleDateString('vi-VN') : '-'}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mt-2">Cập nhật gần nhất</div>
                </div>
            </div>

            {/* Gallery Grid */}
            {filteredGains.length === 0 ? (
                <div className="card p-12 text-center">
                    <p className="text-xl text-slate-600 dark:text-slate-400">
                        {searchQuery ? 'Không tìm thấy kết quả phù hợp' : 'Chưa có bảng Gains nào'}
                    </p>
                    <button
                        onClick={() => router.push('/create')}
                        className="btn-primary mt-6"
                    >
                        Tạo bảng Gains đầu tiên
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGains.map((gains) => (
                        <div key={gains.id} className="card-hover p-6 group">
                            <div className="flex items-start gap-4 mb-4">
                                {gains.companyInfo.memberPhoto ? (
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-red-600 flex-shrink-0">
                                        <img
                                            src={gains.companyInfo.memberPhoto}
                                            alt={gains.companyInfo.memberName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                        {gains.companyInfo.memberName.charAt(0).toUpperCase()}
                                    </div>
                                )}

                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 truncate">
                                        {gains.companyInfo.memberName || 'Chưa có tên'}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                                        {gains.companyInfo.name || 'Chưa có công ty'}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">BNI:</span>
                                    <span className="truncate">{gains.bniInfo.chapter || 'Chưa có'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="font-semibold">Vai trò:</span>
                                    <span className="truncate">{gains.bniInfo.role || 'Chưa có'}</span>
                                </div>
                                <div className="text-xs text-slate-500">
                                    Cập nhật: {gains.updatedAt ? new Date(gains.updatedAt).toLocaleDateString('vi-VN') : 'N/A'}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(gains.id!)}
                                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Edit className="w-4 h-4" />
                                    Sửa
                                </button>
                                <button
                                    onClick={() => handleDelete(gains.id!)}
                                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
