import Teacher from "./Teacher";
import Context from "../Context";


export default class TeacherUtil {
    public static makeTeacher(): Teacher {
        const customerData: string = Context.getContext.getLocalStorage.getItem("customer_form_data");
        const parseCustomerData = JSON.parse(customerData);
        const {first_name, last_name} = parseCustomerData;
        return new Teacher(first_name, last_name);
    }
}