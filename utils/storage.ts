import { GainsData } from '@/types/gains';

const STORAGE_KEY = 'bni-gains-data';

export const saveGains = (data: GainsData): string => {
    const id = data.id || generateId();
    const timestamp = new Date().toISOString();

    const gainsWithMeta: GainsData = {
        ...data,
        id,
        createdAt: data.createdAt || timestamp,
        updatedAt: timestamp,
    };

    const allGains = getAllGains();
    const existingIndex = allGains.findIndex(g => g.id === id);

    if (existingIndex >= 0) {
        allGains[existingIndex] = gainsWithMeta;
    } else {
        allGains.push(gainsWithMeta);
    }

    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allGains));
    }

    return id;
};

export const loadGains = (id: string): GainsData | null => {
    const allGains = getAllGains();
    return allGains.find(g => g.id === id) || null;
};

export const getAllGains = (): GainsData[] => {
    if (typeof window === 'undefined') return [];

    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error('Error loading gains:', error);
        return [];
    }
};

export const deleteGains = (id: string): void => {
    const allGains = getAllGains();
    const filtered = allGains.filter(g => g.id !== id);

    if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    }
};

export const generateId = (): string => {
    return `gains-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const exportToJSON = (data: GainsData): void => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gains-${data.companyInfo.name || 'export'}-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

export const importFromJSON = (file: File): Promise<GainsData> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target?.result as string);
                resolve(data);
            } catch (error) {
                reject(new Error('Invalid JSON file'));
            }
        };
        reader.onerror = () => reject(new Error('Error reading file'));
        reader.readAsText(file);
    });
};
