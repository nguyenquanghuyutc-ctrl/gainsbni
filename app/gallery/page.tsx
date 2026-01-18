'use client';

import React from 'react';
import GainsGallery from '@/components/GainsGallery';
import { Folder } from 'lucide-react';

export default function GalleryPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold text-gradient mb-3 flex items-center gap-3">
                    <Folder className="w-10 h-10 text-red-600" />
                    Thư viện Gains
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                    Quản lý tất cả các bảng Gains đã tạo
                </p>
            </div>

            {/* Gallery Component */}
            <div className="animate-slide-up">
                <GainsGallery />
            </div>
        </div>
    );
}
