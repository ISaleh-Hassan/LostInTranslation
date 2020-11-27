import React from 'react';
import LoginForm from '../form/LoginForm'
import auth from '../../utils/auth'
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap';

const Login = (props) => {

    const history = useHistory();

    if (auth.isAuthenticated()) {
        history.push("/dashboard")
    }

    const hadleLoginComplete = (user) => {
        console.log('Triggered from LoginForm', user);
        auth.login(user, () => {
            history.push("/dashboard")
        });
    }

    return (

        <div>
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        Lost in translation
                        </Navbar.Brand>
                </Navbar>
            </header>
            <LoginForm complete={hadleLoginComplete} />
        </div>
    );

};
export default Login;