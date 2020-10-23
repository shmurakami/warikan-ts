import {Members} from "./members/Members";
import {MemberPaymentTypes} from "./members/MemberPaymentTypes";
import {DifferenceAmountAdjustmentType} from "./DifferenceAmountAdjustmentType";

export class PartyName {

    constructor(private name: string) {
    }

    get value() {
        return this.name
    }
}

export class Party {

    constructor(
        private name: PartyName,
        private members: Members,
        private memberPaymentTypes: MemberPaymentTypes,
        private differenceAmountAdjustmentType ?: DifferenceAmountAdjustmentType
    ) {
    }

    charge() {
        return 0
    }
}