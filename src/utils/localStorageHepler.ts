class LocalStorageService {
    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item as string) : null;
    }

    setItem<T>(key: string, id: string, value: T): void {
        const existingData = this.getItem<T>(key);
        const newItem = { ...existingData, [id]: value };
        localStorage?.setItem(key, JSON.stringify(newItem));
    }
}

export default LocalStorageService;
