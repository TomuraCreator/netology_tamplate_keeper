import Person from "../abstract/Person";

export default class Student extends Person{
    constructor(first_name: string, last_name: string) {
        super(first_name, last_name);
    }
}