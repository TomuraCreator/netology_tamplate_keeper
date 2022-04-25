export default abstract class Person {
    constructor(protected first_name: string,
         protected last_name: string) {}

    get firstName(): string {
        return this.first_name;
    }

    get lastName(): string {
        return this.last_name;
    }
}