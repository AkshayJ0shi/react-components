// npm i formik yup
import React from 'react'
import { useFormik } from "formik"
import * as You from "yup"

const Form = () => {

    const formik = useFormik({
        initialValues :{
            firstName : "",
            lastName : "",
            email : ""
        },
        validationSchema : Yup.object({
            firstName : Yup.string().max(15, "First name cannot be above 15 characters").required("This is required"),
            lastName : Yup.string().max(10, "Last name cannot be above 10 characters"),
            email : Yup.string().email("Invalid email address").required("Email is required")
        }),
        onSubmit : (values) => {

        }
    })

    console.log()

    return (
        <form onSubmit={formik.handleSubmit}>
            <input 
            type="text"
            name='firstName'
            id='firstName'
            placeholder='First name'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName && <div>{formik.errors.firstName}</div>}

            <input
            type="text" 
            name='lastName'
            id='lastName'
            placeholder='Last name'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            />
            {formik.touched.lastName && formik.errors.lastName && <div>{formik.errors.lastName}</div>}

            <input
            type="text"
            name='email'
            id='email'
            placeholder='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}

            />
            {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

            <button>Submit</button>
        </form>
    )
}

export default Form