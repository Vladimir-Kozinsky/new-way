import classNames from 'classnames';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import Button from '../../common/buttons/Button';
import Input from '../../common/Input';
import s from './Auth.module.scss';
import { signIn } from './../../store/reducers/authReducer';
import { connect } from "react-redux";

interface Values {
    email: string;
    password: string;
}

type MyProps = {
    signIn: ({ email, password }: Values) => void
}

class Auth extends React.Component<MyProps> {
    render(): React.ReactNode {
        return (
            <div className={s.auth__container}>
                <div className={s.background__circle}></div>
                <div className={s.auth}>
                    <h4 className={classNames(s.auth__header, s.auth__header__welcome)}>Welcome back!</h4>
                    <h3 className={classNames(s.auth__header, s.auth__header__signin)}>Sign in to your account</h3>
                    <h5 className={classNames(s.auth__header, s.auth__header__signup)}>Don't have an account? <a>Sign Up</a></h5>
                    <Formik
                        initialValues={{
                            email: '',
                            password: ''
                        }}
                        onSubmit={(
                            values: Values,
                            { setSubmitting }: FormikHelpers<Values>
                        ) => {
                            this.props.signIn({ email: '123@gmail.com', password: '123' });
                        }}
                    >
                        <Form className={s.auth__form}>
                            <Input type="email" id="email" name="email" placeholder="john@acme.com" />
                            <Input type="password" id="password" name="password" placeholder="Password" />
                            <Button text="Login" color="green" btnType="submit" />
                        </Form>
                    </Formik>
                </div >
            </div>
        )
    }
}

const mapDispatchToProps = { signIn };

export default connect(null, mapDispatchToProps)(Auth);
