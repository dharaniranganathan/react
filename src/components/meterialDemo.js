import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const MaterialDemo = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: '', // for Select
            terms: false, // for Checkbox
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            let errors = {};

            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Password is required';
            }

            if (!values.role) {
                errors.role = 'Role is required';
            }

            if (!values.terms) {
                errors.terms = 'You must accept the terms and conditions';
            }

            return errors;
        }
    });

    return (
        <div className="container mt-5">
            <h2>Login Form</h2>
            <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        required
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </div>
                <div className="mb-3">
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        required
                        id="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </div>
                <div className="mb-3">
                    <FormControl fullWidth variant="outlined" error={formik.touched.role && Boolean(formik.errors.role)}>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role"
                            name="role"
                            value={formik.values.role}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            label="Role"
                            required
                        >
                            <MenuItem value="">Select Role</MenuItem>
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                            <MenuItem value="guest">Guest</MenuItem>
                        </Select>
                        {formik.touched.role && Boolean(formik.errors.role) && (
                            <div className="text-danger">{formik.errors.role}</div>
                        )}
                    </FormControl>
                </div>
                <div className="mb-3">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formik.values.terms}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name="terms"
                                color="primary"
                            />
                        }
                        label="I accept the terms and conditions"
                    />
                    {formik.touched.terms && Boolean(formik.errors.terms) && (
                        <div className="text-danger">{formik.errors.terms}</div>
                    )}
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default MaterialDemo;
