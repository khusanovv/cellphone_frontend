import "./styles/App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import Home from "./routes/home-page/Home.jsx";
import AdminPanel from "./routes/admin-page/AdminPanel";
import { useSelector } from "react-redux";
// import General from './components/general/General';
import Login from "./routes/login-page/Login";
import SignUp from "./routes/signup-page/SignUp";
// import NotFound from "./routes/not-found/NotFound";
import Profile from "./routes/profile-page/Profile";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const themeState = useSelector((state) => state.themeState);
  return (
    <Router>
      <div className={!themeState ? "darkmain" : "lightmain"}>
        <Switch>
          <Route exact path="/" component={() => <Home api="category/" />}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/admin" component={AdminPanel}/>
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
