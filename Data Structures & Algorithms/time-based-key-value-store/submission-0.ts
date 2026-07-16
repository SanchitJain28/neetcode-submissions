interface TimeMapValue {
    timestamp: number;
    value: string;
}

class TimeMap {
    private keyStore: Map<string, TimeMapValue[]>;
    constructor() {
        this.keyStore = new Map();
    }
    set(key: string, value: string, timestamp: number): void {
        const newValue = { value, timestamp };
        if (this.keyStore.has(key)) {
            this.keyStore.set(key, [...this.keyStore.get(key)!, newValue]);
        } else {
            this.keyStore.set(key, [newValue]);
        }
    }
    get(key: string, timestamp: number): string {
        const values = this.keyStore.get(key);
        if (!values) return "";
        let left = 0;
        let right = values.length - 1;
        let answer = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (values[mid].timestamp <= timestamp) {
                answer = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return answer === -1 ? "" : values[answer].value;
    }
}
