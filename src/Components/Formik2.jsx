// Formik => Form management library 

import { useState } from "react"
import { useFormik } from "formik"
import { object, ref, string } from "yup"

const Formik2 = () => {
    
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: object().shape({
            username: string()
                .required("Username is required")
                .min(4, "Min 4 char.")
                .max(12, "Max 12 char."),
            password: string()
                .required("Password is required")
                .min(8, "Min 8 char.")
                .max(16, "Max 16 char."),
            confirm_password: string()
                .required("Confirm password is required")
                .min(8, "Min 8 char.")
                .max(16, "Max 16 char.")
                .oneOf([ref("password")], "Password does not match!")
        })
    })

    return <div className="d-flex justify-content-center mt-5">
        <form className="d-flex w-50 flex-column gap-3" onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.username} className="w-100 border-0 p-2" style={{outline: 0}} type="text" placeholder="Enter username" name="username"/>
            {formik.errors.username && <span className="text-sm text-danger fst-italic">{formik.errors.username}</span>}
            <input onChange={formik.handleChange} value={formik.values.password} className="w-100 border-0 p-2" style={{ outline: 0 }} type="password" placeholder="Enter password" name="password" />
            {formik.errors.password && <span className="text-sm text-danger fst-italic">{formik.errors.password}</span>}
            <input onChange={formik.handleChange} value={formik.values.confirm_password} className="w-100 border-0 p-2" style={{ outline: 0 }} type="password" placeholder="Enter confirm password" name="confirm_password" />
            {formik.errors.confirm_password && <span className="text-sm text-danger fst-italic">{formik.errors.confirm_password}</span>}
            <button type="submit" className="btn btn-success w-100 p-2 border-0">Login</button>
        </form>
    </div>
}

export default Formik2