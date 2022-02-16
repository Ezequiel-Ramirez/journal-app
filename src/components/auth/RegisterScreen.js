import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
     const {msgError} = useSelector( state => state.ui );

    const [formValues, handleInputChange] = useForm({
        name: 'Ezequiel',
        email: 'kekel22@hotmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password, password2);
        isFormValid();
    }

    const isFormValid = () => {
        if (name.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === '') {
            dispatch(setError('Todos los campos son obligatorios'));
            return false;
        } else {
            if (password !== password2) {
                dispatch(setError('Passwords do not match'));
                return false;
            } else {
                if (password.length < 5) {
                    dispatch(setError('PASSWORD_TOO_SHORT'));
                    return false;
                } else {
                    if (password.length > 12) {
                        dispatch(setError('PASSWORD_TOO_LONG'));
                        return false;
                    } else {
                        if (!validator.isEmail(email)) {
                            dispatch(setError('INVALID_EMAIL'));
                            return false;
                        }
                    }
                }
            }
        }
        dispatch(removeError());
        return true;
    }



    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>
            {msgError && <div className="auth__alert-error">{msgError}</div>}
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"

                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
