import React, { Suspense, lazy } from "react";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Router() {
  const routes = [
    {
      path: "/dashboard",
      component: lazy(() => import("./routes/dashboard/"))
    }
  ];
  return (
    <BrowserRouter>
      <App>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map((props, key) => (
              <Route {...props} key={key} />
            ))}
          </Switch>
        </Suspense>
      </App>
    </BrowserRouter>
  );
}

export default Router;
