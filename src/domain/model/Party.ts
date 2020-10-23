export class PartyName {

    constructor(private name: string) {
    }

    get value() {
        return this.name
    }
}

export class MemberName {

    constructor(private name: string) {
    }

    get value() {
        return this.name
    }
}

export class Member {

    constructor(private name: MemberName, secretaryType: SecretaryType) {
    }
}

export class SecretaryType {

    constructor(private _value: any) {
    }

    get value() {
        return this._value
    }
}

export class MemberPaymentTypes {

    constructor(private _value: any) {
    }

    get value() {
        return this._value
    }
}

export class Members {

    constructor(private members: Member[]) {
    }
}

export class DifferenceAmountAdjustmentType {

    constructor(private _value: any) {
    }

    get value() {
        return this._value
    }
}


export class Party {

    constructor(
        private name: PartyName,
        private members: Members,
        private memberPaymentTypes: MemberPaymentTypes,
        private differenceAmountAdjustmentType: DifferenceAmountAdjustmentType|null
    ) {
    }
}