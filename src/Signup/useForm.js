import { useState } from "react";
import Validation from "./Validation";
import SignupForm from "./SignupForm";


const useForm = (submitForm) => {
    const [values, setValues] = useState({
        name: "",
        id: "",
        password: "",
        grade: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
        if (Validation.values==true){
            SignupForm(submit);
        }
    };

        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }

        return Object.keys(errors).length;
    };

    // useEffect(() => {
    //     if (Object.keys(errors).length === 0 && dataIsCorrect) {
    //         submitForm(true);
    //     }
    // }, [errors]);

    return { handleChange, handleFormSubmit, errors, values };
};

export default useForm;
