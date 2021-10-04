import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import RegisterScreen from "./screen/RegisterScreen";
import LoginScreen from "./screen/LoginScreen";
import JoinScreen from "./screen/JoinScreen";
import ContactScreen from "./screen/ContactScreen";
import AdminScreen from "./screen/AdminScreen";
function App() {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen}></Route>
      <Route exact path="/user/register" component={RegisterScreen}></Route>
      <Route exact path="/user/login" component={LoginScreen}></Route>
      <Route exact path="/join" component={JoinScreen}></Route>
      <Route exact path="/contact" component={ContactScreen}></Route>
      <Route exact path="/admin" component={AdminScreen}></Route>
    </Router>
  );
}

export default App;
