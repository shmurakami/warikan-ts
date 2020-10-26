import {Members} from "./members/Members";

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

    calculateCharge() {
        return 0
    }
}