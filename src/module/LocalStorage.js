export const saveToStorage = (values) => {
	if ("localStorage" in window) {
			let arrayOfItems = loadFromStorage(values.key);
			arrayOfItems.unshift(values.items);
			localStorage.setItem(values.key,JSON.stringify(arrayOfItems));		
	}
}

export const loadFromStorage = (key) => {
	if("localStorage" in window) {
		return JSON.parse(localStorage.getItem(key) || "[]");
	}
}