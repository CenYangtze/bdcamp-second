import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@arco-design/web-react";
import "@arco-design/web-react/dist/css/arco.css";

export default function Nav() {
  return (
    <nav>
      <h1>My E-commerce Site</h1>
      <Button type="primary">Shop Now</Button>
    </nav>
  );
}