import React from "react";
import MuiGrid from "@material-ui/core/Grid";

function Grid({ children }) {
  return (
    <MuiGrid container>
      <MuiGrid item>{children}</MuiGrid>
    </MuiGrid>
  );
}

export default Grid;
