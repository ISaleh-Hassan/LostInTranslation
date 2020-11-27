import React, { useEffect, useState } from 'react';
import Profile from './profile';
import Translator from './Translator';
import auth from '../../utils/auth'
import { getStorage } from '../../utils/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Button } from 'react-bootstrap';

const Dashboard = (props) => {

    const [showTranslator, setShowTranslator] = useState(true);
    const [showProfile, setShowProfile] = useState(false);

    const hadleLogOut = () => {

        if (auth.isAuthenticated) {
            auth.logout(() => {
                props.history.push("/login");
            });
        }
    }

    useEffect(() => {
        setShowProfile(false);
        setShowTranslator(true);
    }, []);

    const renderProfile = () => {
        setShowTranslator(false);
        setShowProfile(true);
    }

    const renderTranslator = () => {
        setShowProfile(false);
        setShowTranslator(true);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/dashboard">
                    Lost in translation
                        </Navbar.Brand>
                <div className="ml-auto">
                    <Button onClick={renderTranslator} className="mr-3" variant="primary">Translator</Button>
                    <Button onClick={renderProfile} className="mr-3" variant="info">Profile: {getStorage('ra_session') }</Button>
                    <Button className="ml-3" variant="warning" onClick={hadleLogOut}>Logout</Button>
                </div>
            </Navbar>
            {showTranslator ? <Translator /> : null}
            {showProfile ? <Profile /> : null}
        </div>
    )
}
export default Dashboard;