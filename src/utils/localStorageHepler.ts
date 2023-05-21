class LocalStorageService {
    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return JSON.parse(item as string);
    }

    setItem<T>(key: string, id: string, value: T): void {
        const existingData = this.getItem<T>(key);
        const newItem = { ...existingData, [id]: value };
        localStorage.setItem(key, JSON.stringify(newItem));
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}

export default LocalStorageService;
