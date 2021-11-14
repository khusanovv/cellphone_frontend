import React, { Suspense } from "react";
import "./AdminPanel.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import { BrowserRouter as  Route, Switch,useRouteMatch } from 'react-router-dom';
import { sidebar_data } from "../../static/static_data.js";
import ProfileHeader from "../../components/profile-header/ProfileHeader";
import Spinner from "../../components/spinner/Spinner";

function AdminPanel() {
  const { path } = useRouteMatch();
  return (
    <div className="admin__panel">
      <Sidebar />
      <div className="admin__container">
        <ProfileHeader/>
        <Suspense fallback={<Spinner/>}>
        {/* <Router> */}
          <Switch>
            {
              sidebar_data?.map(routes => 
              <Route exact={routes?.exact} key={routes.id} path={`${path}/${routes.route}`}>
                  {routes.component}
              </Route>
              )
            }
          </Switch>
        {/* </Router> */}
        </Suspense>
      </div>
    </div>
  );
}

export default AdminPanel;
