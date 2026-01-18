import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPNG = async (
    elementId: string,
    filename: string = 'gains'
): Promise<void> => {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error('Element not found');
    }

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 794,
            height: 1123,
        });

        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (error) {
        console.error('Error exporting to PNG:', error);
        throw error;
    }
};

export const exportToJPG = async (
    elementId: string,
    filename: string = 'gains'
): Promise<void> => {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error('Element not found');
    }

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 794,
            height: 1123,
        });

        const link = document.createElement('a');
        link.download = `${filename}.jpg`;
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
    } catch (error) {
        console.error('Error exporting to JPG:', error);
        throw error;
    }
};

export const exportToPDF = async (
    elementId: string,
    filename: string = 'gains'
): Promise<void> => {
    const element = document.getElementById(elementId);
    if (!element) {
        throw new Error('Element not found');
    }

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff',
            logging: false,
            width: 794,
            height: 1123,
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        // A4 size in mm: 210 x 297
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4',
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${filename}.pdf`);
    } catch (error) {
        console.error('Error exporting to PDF:', error);
        throw error;
    }
};

export const downloadFile = (blob: Blob, filename: string): void => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};
