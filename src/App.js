import React from "react";
import Drawer from "./components/drawer";
import routes from "./routes.config.json";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Drawer routes={routes} />
    </div>
  );
}
