export class Amount {
    constructor(private _value: number) {
        if (_value < 0) {
            throw new Error("Amount must be positive value")
        }
    }

    get value(): number {
        return this._value
    }
}
