import LocalStorageService from "../localStorageHepler";

describe("LocalStorageService", () => {
    beforeEach(() => {
        localStorage.clear(); // Очищаем localStorage перед каждым тестом
    });

    describe("getItem", () => {
        it("should return null if the item is not found in localStorage", () => {
            const localStorageService = new LocalStorageService();
            const item = localStorageService.getItem("planets");
            expect(item).toBeNull();
        });

        it("should return the parsed item if it exists in localStorage", () => {
            const data = { id: "1", name: "Planet 1" };
            localStorage.setItem("planets", JSON.stringify(data));
            const localStorageService = new LocalStorageService();
            const item = localStorageService.getItem("planets");
            expect(item).toEqual(data);
        });
    });

    describe("setItem", () => {
        it("should set the item in localStorage", () => {
            const data = { id: "1", name: "Planet 1" };
            const localStorageService = new LocalStorageService();
            localStorageService.setItem("planets", data.id, data);
            const storedItem = localStorage.getItem("planets");
            expect(storedItem).toEqual(JSON.stringify({ "1": data }));
        });

        it("should merge the new item with existing data in localStorage", () => {
            const existingData = { "1": { id: "1", name: "Planet 1" } };
            localStorage.setItem("planets", JSON.stringify(existingData));

            const newData = { id: "2", name: "Planet 2" };
            const localStorageService = new LocalStorageService();
            localStorageService.setItem("planets", newData.id, newData);

            const storedItem = localStorage.getItem("planets");
            const expectedData = { ...existingData, "2": newData };
            expect(storedItem).toEqual(JSON.stringify(expectedData));
        });
    });
});