import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/Header';

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

const phoneRegExp = /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;

const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});




const Form = () => {
    const isNonMobile = useMediaQuery("min-width:600px")

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (<Box m="20px">
        <Header title="CREATE USER" subtitle="Create a new user profile" />

        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box
                        display="grid"
                        gap="30px"
                        mt="20px"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        <TextField
                            fullWidth
                            variant='filled'
                            type="text"
                            label="First Name"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.firstName}
                            name="firstName"
                            error={!!touched.firstName && !!errors.firstName}//!! means forced to convert in boolean
                            helperText={touched.firstName && errors.firstName}
                            sx={{ gridColumn: "span 2 !important" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type="text"
                            label="Last Name"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.lastName}
                            name="lastName"
                            error={!!touched.lastName && !!errors.lastName}//!! means forced to convert in boolean
                            helperText={touched.lastName && errors.lastName}
                            sx={{ gridColumn: "span 2 !important" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type="text"
                            label="Email"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={!!touched.email && !!errors.email}//!! means forced to convert in boolean
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type="number"
                            label="Contact Number"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.contact}
                            name="contact"
                            error={!!touched.contact && !!errors.contact}//!! means forced to convert in boolean
                            helperText={touched.contact && errors.contact}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type="text"
                            label="Address 1"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.address1}
                            name="address1"
                            error={!!touched.address1 && !!errors.address1}//!! means forced to convert in boolean
                            helperText={touched.address1 && errors.address1}
                            sx={{ gridColumn: "span 4" }}
                        />
                        <TextField
                            fullWidth
                            variant='filled'
                            type="text"
                            label="Address 2"
                            onBlur={handleBlur}//this fun will run when we touch out of it
                            onChange={handleChange}
                            value={values.address2}
                            name="address2"
                            error={!!touched.address2 && !!errors.address2}//!! means forced to convert in boolean
                            helperText={touched.address2 && errors.address2}
                            sx={{ gridColumn: "span 4" }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button
                            type='submit'
                            color='secondary'
                            variant='contained'
                        >
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
        </Formik>
    </Box>)
}

export default Form;