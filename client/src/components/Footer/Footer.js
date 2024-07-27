import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Got any book recommendations for me or just want to say hi? <br />
        <a href="mailto:ioavlivneh@gmail.com">I'd love to hear from you!</a>
      </p>
      {/* <p>
        If you have any good quotes you want to share or reading
        recommendations, please send them my way to at this email
      </p> */}
    </footer>
  );
}

export default Footer;
