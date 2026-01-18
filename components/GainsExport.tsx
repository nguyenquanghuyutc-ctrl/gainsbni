'use client';

import React, { useState } from 'react';
import { Download, FileImage, FileText, Loader2 } from 'lucide-react';
import { exportToPNG, exportToJPG, exportToPDF } from '@/utils/export';
import { GainsData } from '@/types/gains';

interface GainsExportProps {
    data: GainsData;
}

export default function GainsExport({ data }: GainsExportProps) {
    const [exporting, setExporting] = useState<string | null>(null);

    const handleExport = async (type: 'png' | 'jpg' | 'pdf') => {
        setExporting(type);
        try {
            const filename = `gains-${data.companyInfo.memberName || 'export'}-${Date.now()}`;

            if (type === 'png') {
                await exportToPNG('gains-preview', filename);
            } else if (type === 'jpg') {
                await exportToJPG('gains-preview', filename);
            } else {
                await exportToPDF('gains-preview', filename);
            }
        } catch (error) {
            console.error('Export error:', error);
            alert('Có lỗi xảy ra khi xuất file. Vui lòng thử lại!');
        } finally {
            setExporting(null);
        }
    };

    return (
        <div className="card p-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Download className="w-6 h-6 text-red-600" />
                Xuất bảng Gains
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                    onClick={() => handleExport('png')}
                    disabled={exporting !== null}
                    className="btn-primary flex items-center justify-center gap-2"
                >
                    {exporting === 'png' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <FileImage className="w-5 h-5" />
                    )}
                    Xuất PNG
                </button>

                <button
                    onClick={() => handleExport('jpg')}
                    disabled={exporting !== null}
                    className="btn-primary flex items-center justify-center gap-2"
                >
                    {exporting === 'jpg' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <FileImage className="w-5 h-5" />
                    )}
                    Xuất JPG
                </button>

                <button
                    onClick={() => handleExport('pdf')}
                    disabled={exporting !== null}
                    className="btn-secondary flex items-center justify-center gap-2"
                >
                    {exporting === 'pdf' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <FileText className="w-5 h-5" />
                    )}
                    Xuất PDF
                </button>
            </div>

            {exporting && (
                <div className="text-center text-sm text-slate-600 dark:text-slate-400 animate-pulse">
                    Đang xuất file {exporting.toUpperCase()}...
                </div>
            )}
        </div>
    );
}
