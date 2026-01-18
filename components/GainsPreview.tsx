'use client';

import React from 'react';
import { GainsData } from '@/types/gains';
import Image from 'next/image';

interface GainsPreviewProps {
    data: GainsData;
}

export default function GainsPreview({ data }: GainsPreviewProps) {
    const { companyInfo, shortTermGoals, industry, achievements, successTransfers, interests, network, bniInfo } = data;

    return (
        <div id="gains-preview" className="gains-preview relative overflow-hidden">
            {/* Header Section - Red background with avatar, title and logo */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-6 flex items-center gap-6">
                {/* Member Avatar - Left side */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    {companyInfo.memberPhoto ? (
                        <img src={companyInfo.memberPhoto} alt={companyInfo.memberName || 'Member'} className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-gray-300 text-xs text-center">Ảnh<br />thành viên</span>
                    )}
                </div>

                {/* Title - Center */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold tracking-wide">
                        {companyInfo.memberName || <span className="opacity-30">Nguyễn Văn A</span>}
                    </h1>
                    <p className="text-xl mt-1">Gains 2.0</p>
                </div>

                {/* Company Logo - Right side */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                    {companyInfo.logo ? (
                        <img src={companyInfo.logo} alt="Logo" className="w-full h-full object-contain" />
                    ) : (
                        <span className="text-gray-300 text-xs text-center px-2">Logo<br />Công ty</span>
                    )}
                </div>
            </div>

            {/* Main Content - Two columns */}
            <div className="grid grid-cols-2 gap-6 p-8" style={{ minHeight: '950px' }}>
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Company Info */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            THÔNG TIN DOANH NGHIỆP
                        </h2>
                        <div className="space-y-2 text-sm">
                            <p className="font-bold text-gray-800">
                                {companyInfo.name || <span className="opacity-30 font-normal italic">Công ty TNHH ABC</span>}
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-red-600">📞</span>
                                <span>{companyInfo.phone || <span className="opacity-30 italic">0901 234 567</span>}</span>
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-red-600">📍</span>
                                <span>{companyInfo.address || <span className="opacity-30 italic">123 Đường ABC, Quận XYZ</span>}</span>
                            </p>
                        </div>
                    </section>

                    {/* Short-term Goals */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            MỤC TIÊU
                        </h2>
                        <div className="text-sm space-y-1">
                            <p className="font-semibold">Mục tiêu ngắn hạn:</p>
                            {shortTermGoals.items.length > 0 && shortTermGoals.items.some(g => g.trim()) ? (
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    {shortTermGoals.items.filter(g => g.trim()).map((goal, idx) => (
                                        <li key={idx} className="text-gray-700">{goal}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="opacity-30 italic ml-2">Chưa có mục tiêu</p>
                            )}
                        </div>
                    </section>

                    {/* Industry */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            NGÀNH NGHỀ
                        </h2>
                        <div className="text-sm space-y-2">
                            {industry.description ? (
                                <p className="text-gray-700">{industry.description}</p>
                            ) : (
                                <p className="opacity-30 italic">Mô tả ngành nghề</p>
                            )}
                            {industry.services.length > 0 && industry.services.some(s => s.trim()) ? (
                                <ol className="list-decimal list-inside space-y-1 ml-2">
                                    {industry.services.filter(s => s.trim()).map((service, idx) => (
                                        <li key={idx} className="text-gray-700">{service}</li>
                                    ))}
                                </ol>
                            ) : (
                                <p className="opacity-30 italic ml-2">Danh sách dịch vụ</p>
                            )}
                        </div>
                    </section>

                    {/* Achievements & Expertise */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            KỸ NĂNG/THÀNH TÍCH
                        </h2>
                        <div className="text-sm space-y-2">
                            {achievements.length > 0 && achievements.some(a => a.description.trim()) ? (
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    {achievements.filter(a => a.description.trim()).map((achievement, idx) => (
                                        <li key={idx} className="text-gray-700">{achievement.description}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="opacity-30 italic">Kỹ năng và thành tích</p>
                            )}
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Success/Achievements */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            THÀNH TỰU
                        </h2>
                        <div className="text-sm space-y-2">
                            {successTransfers.length > 0 && successTransfers.some(t => t.description.trim()) ? (
                                <ul className="space-y-2">
                                    {successTransfers.filter(t => t.description.trim()).map((transfer, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-red-600 font-bold">{transfer.count > 0 ? `• ${transfer.count}x` : '•'}</span>
                                            <span className="text-gray-700">{transfer.description}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="opacity-30 italic">Các thành tựu đạt được</p>
                            )}
                        </div>
                    </section>

                    {/* Success Transfers */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            CÁC CHUYỂN THÀNH CÔNG
                        </h2>
                        <div className="text-sm">
                            <p className="text-gray-700">
                                Tôi cám ơn mọi BNI vì cùng thành công của mỗi thành viên trong chapter.
                                Sức mạnh của BNI là sức mạnh của chúng ta.
                            </p>
                        </div>
                    </section>

                    {/* Interests/Hobbies */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            SỞ THÍCH
                        </h2>
                        <div className="text-sm space-y-1">
                            {interests.items.length > 0 && interests.items.some(i => i.trim()) ? (
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    {interests.items.filter(i => i.trim()).map((interest, idx) => (
                                        <li key={idx} className="text-gray-700">{interest}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="opacity-30 italic">Sở thích cá nhân</p>
                            )}
                        </div>
                    </section>

                    {/* Network */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            MẠNG LƯỚI MỐI QUAN HỆ
                        </h2>
                        <div className="text-sm space-y-1">
                            {network.items.length > 0 && network.items.some(n => n.trim()) ? (
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    {network.items.filter(n => n.trim()).map((item, idx) => (
                                        <li key={idx} className="text-gray-700">{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="opacity-30 italic">Mạng lưới quan hệ</p>
                            )}
                        </div>
                    </section>

                    {/* BNI Info */}
                    <section>
                        <h2 className="text-red-700 font-bold text-lg mb-3 border-b-2 border-red-700 pb-1">
                            THÔNG TIN BNI
                        </h2>
                        <div className="text-sm space-y-2 text-gray-700">
                            <p>
                                <span className="font-semibold">Vai trò:</span> {bniInfo.role || <span className="opacity-30 italic">Vai trò trong chapter</span>}
                            </p>
                            <p>
                                <span className="font-semibold">Chapter:</span> {bniInfo.chapter || <span className="opacity-30 italic">Tên chapter</span>}
                            </p>
                            {bniInfo.chapterDescription ? (
                                <p>{bniInfo.chapterDescription}</p>
                            ) : (
                                <p className="opacity-30 italic">Mô tả về chapter</p>
                            )}
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer - BNI Logo with Dynamic Chapter */}
            <div className="absolute bottom-8 right-8">
                <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-center">
                    <div className="text-2xl">BNI</div>
                    <div className="text-sm font-normal uppercase">
                        {bniInfo.chapter || <span className="opacity-50">Chapter</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}
