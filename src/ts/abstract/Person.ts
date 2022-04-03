export default abstract class Person {
    first_name: String;
    last_name: String;

    constructor(first_name: String, last_name: String) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    get firstName(): String {
        return this.first_name;
    }

    get lastName(): String {
        return this.last_name;
    }
}