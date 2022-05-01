export default abstract class Person {
    protected first_name: string;
    protected last_name: string;

    constructor(first_name: string, last_name: string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }

    public get firstName(): string {
        return this.first_name;
    } 
}