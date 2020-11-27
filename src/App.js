import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container} from 'react-bootstrap';

import Login from './components/containers/Login'
import NotFound from './components/containers/NotFound'
import Dashboard from './components/containers/Dashboard'
import ProtectedRoute from './routers/protected.route'


function App() {
    return (

        <Router>
            <Container>
                <div className="App">
                    <main>
                        <Switch>
                            <ProtectedRoute exact path="/" component={Dashboard} />
                            <Route path="/login" component={Login} />
                            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                            <Route path="*" component={NotFound} />
                        </Switch>
                    </main>
                </div>
            </Container>
        </Router>

    );
}

export default App;
