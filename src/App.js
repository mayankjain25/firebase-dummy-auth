import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ForgotPassword from './components/ForgotPassword'
import {UserAuthContextProvider} from './contexts/UserAuthContext'
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route 
                path="/home" 
                element={
                  <ProtectedRoute >
                    <Home />
                  </ProtectedRoute>
                } 
              />
              
            </Routes>
          </UserAuthContextProvider>
          </Col>
        </Row>
        <Row>

        
        </Row>
      </Container>

    </div>
  );
}

export default App;
