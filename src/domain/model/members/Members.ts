export class Members {

    constructor(private members: Member[]) {
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

