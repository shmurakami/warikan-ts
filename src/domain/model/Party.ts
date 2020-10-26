import {Members} from "./members/Members";
import {PaymentAmount, PaymentAmounts} from "./amount/PaymentAmount";
import {ChargeAmount} from "./amount/ChargeAmount";
import {PaymentGrade} from "./members/PaymentGrade";
import {Amount} from "./amount/Amount";

export class PartyName {

    constructor(private name: string) {
    }
}

export class PartyDate {
    constructor(private value: string) {
    }
}

export class Party {

    constructor(
        private name: PartyName,
        private date: PartyDate,
        private members: Members,
    ) {
    }

    calculateCharge(chargeAmount: ChargeAmount): PaymentAmounts {
        // TODO 高め、低めの参加者数が0だったら？
        const countByGrade = this.members.countByGrade()
        const countHigh = countByGrade.get(PaymentGrade.High)
        const countNormal = countByGrade.get(PaymentGrade.Normal)
        const countLow = countByGrade.get(PaymentGrade.Low)

        const average = chargeAmount.average(this.members.count)

        // 高め、低めのいい感じの値を出すのが難しそうなので
        // 低めの割合を0.8で固定して高めの人に残りを出させる
        const lowRatio = 0.8
        const low = average * lowRatio
        const highRatio = ((countHigh + countLow) - (countLow * lowRatio)) / countHigh
        const high = average * highRatio

        const toAmount = (paymentGrade: PaymentGrade): Amount => {
            if (paymentGrade === PaymentGrade.High) {
                return new Amount(high)
            }
            if (paymentGrade === PaymentGrade.Low) {
                return new Amount(low)
            }
            return new Amount(average)
        }

        return new PaymentAmounts(this.members.members.map(member => {
            return new PaymentAmount(member, toAmount(member.paymentGrade))
        }))
    }
}