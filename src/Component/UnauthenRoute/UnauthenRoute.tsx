import React from "react";
import { Route } from "react-router-dom";

export default function UnauthenticatedRoute({ children, exact, path, ...rest }: any) {

  return (
    <Route exact={exact} path={path}>
      {React.cloneElement(children, { ...rest })}
    </Route>
  );
}
