import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const userAuthReducer = useSelector((state) => state.userAuthReducer);
    const location = useLocation();
    console.log("authLogin", userAuthReducer);
  
    return userAuthReducer ? (
      <Route {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: location }
        }}
      />
    );
};

export default PrivateRoute;