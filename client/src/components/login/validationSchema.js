import * as yup from "yup"


const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
};


export const loginSchema = yup.object()
    .shape(
        {
            email: yup.string()
                .email("Invalid email format")
                .required("This field is required"),
            password: yup.string()
                .required("This field is required")
        }
    ).required()

export const signUpSchema = yup.object()
    .shape(
        {
            name : yup.string()
                            .required("this field is required"),
            email: yup.string()
                .email("Invalid email format")
                .required("This field is required"),
            password: yup.string()
                .required("This field is required")
                .min(8, "Password must have at least 8 characters")
                .matches(/[0-9]/, getCharacterValidationError("digit"))
                .matches(/[a-z]/, getCharacterValidationError("lowercase"))
                .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
            age : yup.string()
                .required("this field is required"),
            height: yup.string()
                .required("this field is required"),
            weight: yup.string()
                .required("this field is required"),
            isCKD: yup.string()
                .required("this field is required"),
            activityLevel : yup.string()
            .required("this field is required"),
        }
    ).required() 
