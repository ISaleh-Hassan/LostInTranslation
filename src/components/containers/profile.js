import React, { useEffect, useState } from 'react';
import { getStorage, setStorage } from '../../utils/localStorage';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card } from 'react-bootstrap';

const Profile = () => {

    const [history, setHistory] = useState([]);


    useEffect(() => {
        let history = getStorage('userHistory');
        if (!history) {
            setHistory([]);
        }
        else {
            setHistory(history);
        }
    }, [])

    const onClearHistoryClicked = e => {
        setHistory([]);
        setStorage('userHistory', []);
        console.log(getStorage('userHistory'));
    }

    return (
        <>
            <div>
                <Button className="m-3" variant="danger" type="button" onClick={onClearHistoryClicked}>Clear History</Button>
            </div>
            <div>
                <h1>Search History</h1>
                <div>
                    {history.map((s, index) =>
                        <div key={index}>
                            <Card className="m-3">
                                <Card.Header>{s.sentence}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <span>
                                            {s.arr.map((sign, index) =>
                                                <img src={sign.sprite} alt="this is a sign" key={index}></img>
                                            )}
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Profile;