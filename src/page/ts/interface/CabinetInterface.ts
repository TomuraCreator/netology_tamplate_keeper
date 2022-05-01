import Exercise from "../model/Exercise";
import Student from "../model/Student";
import Teacher from "../model/Teacher";

export default interface CabinetInterface {
    getTeacher(): Teacher;
    getStudent(): Student;
    getExercise(): Exercise;
}