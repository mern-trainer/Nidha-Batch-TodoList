// Formik => Form management library 

import { useState } from "react"
import { useFormik } from "formik"

const Formik = () => {
    
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: ({ username, password }) => {
            if (username == "" && password == "") {
                return {
                    username: "Username is required",
                    password: "Password is required"
                }
            }
            if (username == "") {
                return {
                    username: "Username is required"
                }
            }
            if (username.length < 4) {
                return {
                    username: "Username min. 4 char."
                }
            }
            if (username.length > 16) {
                return {
                    username: "Username max. 16 char."
                }
            }
            if (password == "") {
                return {
                    password: "Password is required"
                }
            }
            if (password.length < 8) {
                return {
                    password: "Passsword min. 8 char."
                }
            }
            if (password.length > 16) {
                return {
                    password: "Password max. 16 char."
                }
            }
        }
    })

    return <div className="d-flex justify-content-center mt-5">
        <form className="d-flex w-50 flex-column gap-3" onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.username} className="w-100 border-0 p-2" style={{outline: 0}} type="text" placeholder="Enter username" name="username"/>
            {formik.errors.username && <span className="text-sm text-danger fst-italic">{formik.errors.username}</span>}
            <input onChange={formik.handleChange} value={formik.values.password} className="w-100 border-0 p-2" style={{ outline: 0 }} type="password" placeholder="Enter password" name="password" />
            {formik.errors.password && <span className="text-sm text-danger fst-italic">{formik.errors.password}</span>}
            <button type="submit" className="btn btn-success w-100 p-2 border-0">Login</button>
        </form>
    </div>
}

export default Formik