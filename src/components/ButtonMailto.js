import React from "react";
// import { Link } from "react-router-dom";

const ButtonMailto= ({ email, subject, body, ...props }) => {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  };
export default ButtonMailto;