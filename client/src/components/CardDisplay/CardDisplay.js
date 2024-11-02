import React from "react";
import Card from "../Card";
import Footer from "../Footer/Footer";
import styles from "./CardDisplay.module.css";

function CardDisplay({ card }) {
  return (
    <section className={styles.display}>
      <div className={styles.wrapper}>
        {card.map((card) => (
          <Card key={card.quote} card={card} display={true}></Card>
        ))}
      </div>
      <Footer />
    </section>
  );
}

export default CardDisplay;
