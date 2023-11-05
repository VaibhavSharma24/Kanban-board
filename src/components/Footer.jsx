import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} ~By Vaibhav Sharma</p>
    </footer>
  );
}

export default Footer;
