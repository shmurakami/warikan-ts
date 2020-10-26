export class Amount {
    constructor(private value: number) {
        if (value < 0) {
            throw new Error("Amount must be positive value")
        }
    }
}
