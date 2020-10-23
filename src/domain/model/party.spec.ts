import 'jest'
import {Party, PartyName} from "./Party";
import {Members} from "./members/Members";
import {MemberPaymentTypes} from "./members/MemberPaymentTypes";

describe('part', () => {
    it('chargeで請求金額が計算できる', () => {
        const party = new Party(new PartyName(""), new Members([]), new MemberPaymentTypes(null));
        expect(party.charge()).toBe(0)
    })
})