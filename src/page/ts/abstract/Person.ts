import { getter } from "@org-formation/tombok";

export default abstract class Person {
    @getter
    protected first_name: String;
    @getter
    protected last_name: String;

    constructor(first_name: String, last_name: String) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}