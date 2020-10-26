import {Member, MemberName} from "../members/Members";
import {Amount} from "./Amount";

export class PaymentAmount {

    constructor(private member: Member, private amount: Amount) {
    }

    memberName(): string {
        return this.member.name
    }

    amountValue(): number {
        return this.amount.value
    }
}

export class PaymentAmounts {
    constructor(private paymentAmounts: PaymentAmount[]) {
    }

    toJson(): object {
        const obj = {}
        this.paymentAmounts.forEach(paymentAmount => {
            obj[paymentAmount.memberName()] = paymentAmount.amountValue()
        })
        return obj
    }

}