import React, { useEffect, useState } from "react";
import { fromEvent } from "rxjs";
import { BrowserRouter } from "react-router-dom";
import portada from "../public/asset/img/react.png";
import "./root.css";
import { Link } from "react-router-dom";
function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) {
    return parts.pop().split(";").shift();
  }
}

function validateBorderFn() {
  var bordered$ = fromEvent(window, "isBordered");
  const [border, setBorder] = useState(
    getCookie("bordered") === "no" ? false : true
  );
  useEffect(() => {
    const validateBorder = bordered$.subscribe(async (x) => {
      console.log("☻☺ --> React event listener");
      setBorder(x["detail"]["answer"]);
    });
    return () => {
      validateBorder;
    };
  }, []);
  return border;
}

export default function Root(props) {
  let classNameLnk = "link-secondary";
  let classNameContainer = "card card-1";
  let bordered = classNameContainer + " bordered";
  let notBordered = classNameContainer + " not-bordered";
  let isBordered = validateBorderFn();
  const posLnk = {
    margin: "auto",
  };
  const elemento = (
    <BrowserRouter>
      <section id={"card"} className={isBordered ? bordered : notBordered}>
        <h1 style={{ textAlign: "center" }}>React Demo</h1>
        <figure style={{ margin: "auto" }}>
          <img
            src={portada}
            alt="imagen escultura"
            style={{ width: 100, height: 100, display: "block" }}
          />
        </figure>
        <Link to="/mf-main/" className={classNameLnk}>
          Ir a Album
        </Link>
        <Link to="/mf-cats/info" className={classNameLnk}>
          Ir a Gatos
        </Link>
      </section>
    </BrowserRouter>
  );
  return elemento;
}
