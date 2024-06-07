import React from "react";
import Card from "../Card";

import styles from "./CardDisplay.module.css";

function CardDisplay({ card, ...delegated }) {
  return (
    <section {...delegated}>
      <div className={styles.wrapper}>
        {card.map((card) => (
          <Card key={card.quote} card={card}></Card>
        ))}
      </div>
    </section>
  );
}

export default CardDisplay;
