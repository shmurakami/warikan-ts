import {PaymentGrade} from "./PaymentGrade";

export class MemberName {

    constructor(private name: string) {
    }

    get value() {
        return this.name
    }
}

export class Member {

    constructor(private _name: MemberName, private _paymentGrade: PaymentGrade) {
    }

    get name(): string {
        return this._name.value
    }

    get paymentGrade(): PaymentGrade {
        return this._paymentGrade
    }
}

export class Members {

    constructor(private _members: Member[]) {
        if (_members.length < 1) {
            throw new Error("member must be greater than 0")
        }
    }

    countByGrade(): Map<PaymentGrade, number> {
        const map = new Map()
        map.set(PaymentGrade.High, 0)
        map.set(PaymentGrade.Normal, 0)
        map.set(PaymentGrade.Low, 0)

        this._members.forEach(member => {
            map.set(member.paymentGrade, map.get(member.paymentGrade) + 1)
        })
        return map
    }

    get members(): Member[] {
        return this._members
    }

    get count(): number {
        return this._members.length
    }
}

