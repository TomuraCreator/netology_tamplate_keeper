export default class Exercise {
    constructor(private nameOfWork: string) {}

    get getNameOfWork(): String {
        return this.nameOfWork;
    }
}