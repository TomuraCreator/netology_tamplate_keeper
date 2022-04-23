export default abstract class Person {
    constructor(protected first_name: String, protected last_name: String) {}

    get firstName(): String {
        return this.first_name;
    }

    get lastName(): String {
        return this.last_name;
    }
}