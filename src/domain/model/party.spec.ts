import 'jest'
import {Party, PartyDate, PartyName} from "./Party";
import {Member, MemberName, Members} from "./members/Members";
import {PaymentGrade} from "./members/PaymentGrade";
import {ChargeAmount} from "./amount/ChargeAmount";
import {Amount} from "./amount/Amount";
import {PaymentAmount, PaymentAmounts} from "./amount/PaymentAmount";

describe('part', () => {
    it('参加者ごとの支払い額が計算できる', () => {
        const partyName = new PartyName("party")
        const partyDate = new PartyDate("")

        const highMember1 = new Member(new MemberName("high-san"), PaymentGrade.High)
        const normalMember1 = new Member(new MemberName("normal-san1"), PaymentGrade.Normal)
        const normalMember2 = new Member(new MemberName("normal-san2"), PaymentGrade.Normal)
        const lowMember1 = new Member(new MemberName("low-san1"), PaymentGrade.Low)
        const lowMember2 = new Member(new MemberName("low-san2"), PaymentGrade.Low)
        const members = new Members([highMember1, normalMember1, normalMember2, lowMember1, lowMember2])
        const party = new Party(partyName, partyDate, members)

        const chargeAmount = new ChargeAmount(new Amount(20000))

        const expectResult = new PaymentAmounts([
            new PaymentAmount(highMember1, new Amount(5600)),
            new PaymentAmount(normalMember1, new Amount(4000)),
            new PaymentAmount(normalMember2, new Amount(4000)),
            new PaymentAmount(lowMember1, new Amount(3200)),
            new PaymentAmount(lowMember2, new Amount(3200)),
        ])
        expect(party.calculateCharge(chargeAmount).toJson()).toStrictEqual(expectResult.toJson())
    })
})
