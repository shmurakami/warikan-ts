import {PaymentGrade} from "./PaymentGrade";

export class MemberName {

    constructor(private name: string) {
    }

    get value() {
        return this.name
    }
}

export class Member {

    constructor(private name: MemberName, private paymentGrade: PaymentGrade) {
    }
}

export class Members {

    constructor(private members: Member[]) {
    }
}

