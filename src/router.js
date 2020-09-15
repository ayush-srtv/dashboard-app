import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Router() {
  const routes = [
    {
      path: "/dashboard",
      component: lazy(() => import("./routes/dashboard/"))
    }
  ];
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routes.map((props, key) => (
            <Route {...props} key={key} />
          ))}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Router;
