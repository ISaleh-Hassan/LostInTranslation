import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Row, Col } from 'react-bootstrap';

const LoginForm = props => {
    const [user, setUsername] = useState({});
    const [ validInput, setValidInput ] = useState(false);
    const [ invalidInputMessage, setInvalidInputMessage ] = useState('Please enter a username with atleast 3 characters.');

    const onLoginClicked = ev => {
        props.complete(user);
    };

    const onUsernameChanged = ev => {        
        let currentInput = ev.target.value;
        setUsername(currentInput);
        if (currentInput.length < 3) {
            setValidInput(false);
            setInvalidInputMessage('Please enter a username with atleast 3 characters.');
        } else if (currentInput.length > 15) {
            setValidInput(false);
            setInvalidInputMessage('Username cannot exceed 15 characters in length.');
        } else {
            setValidInput(true);
            for(let i = 0; i < currentInput.length; i++) {
                let currentChar = currentInput[i];
                if (!((currentChar >= 'a' && currentChar <= 'z') || (currentChar >= 'A' && currentChar <= 'Z' ))) {
                    setValidInput(false);
                    setInvalidInputMessage('Error: username may only contain letters.');
                }
            }
        }
    }

    return (
        <Form className="m-5">
            <Row>
                <Col sm={8}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter a username" onChange={onUsernameChanged} />
                    </Form.Group>
                </Col>
            </Row>
      
            <Row>
                <Col sm={6}>
                    <Button disabled={!validInput} type="button" onClick={onLoginClicked}>Login</Button>
                   { !validInput ? <p>{ invalidInputMessage }</p>: null}
                </Col>
            </Row>
        </Form>

    )
};

export default LoginForm;