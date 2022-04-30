import Person from "../abstract/Person";

export default class Teacher extends Person {
    constructor(protected first_name: string,
        protected last_name: string,
        protected email: string) {
        super(first_name, last_name);
    }
}
