import React from "react";
import Card from "../Card";

import styles from "./CardDisplay.module.css";

function CardDisplay({ card }) {
  return (
    <section className={styles.display}>
      <div className={styles.wrapper}>
        {card.map((card) => (
          <Card key={card.quote} card={card} display={true}></Card>
        ))}
      </div>
    </section>
  );
}

export default CardDisplay;
