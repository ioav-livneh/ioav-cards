import React from "react";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <h1>ioav.cards</h1>
        </a>
      </div>
      <div className={styles.links}>
        <a href="/library">
          <h3>Library / Antilibrary</h3>
        </a>
      </div>
    </header>
  );
}

export default Header;
