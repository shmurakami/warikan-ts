import {Amount} from "./Amount";

export class ChargeAmount {

    constructor(private _value: Amount) {
    }

    // member countとかにするべきか
    average(count: number): number {
        // TODO 0 divide
        return this._value.value / count
    }
}