import React from "react";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./CardBox.module.css";
import Card from "../Card";

function CardBox({ cards, handleRemoveCard }) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);

  return (
    <section className={styles.display}>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>{cards.length} Notecards</h2>
        <div className={styles.allCards}>
          <ol>
            {cards.map((card, cardIndex) => {
              // const reverseCardIndex = cards.length - cardIndex - 1;
              let height = 35;

              // let height = Math.max(50 - reverseCardIndex * 5, 5);

              if (cardIndex === highlightedIndex) {
                height = 200;
              }
              return (
                <li
                  key={card.quote}
                  style={{ height }}
                  onMouseEnter={() => {
                    setHighlightedIndex(cardIndex);
                  }}
                >
                  <motion.button
                    layout="position"
                    className={styles.cardBtn}
                    onClick={() => handleRemoveCard(card)}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 60,
                    }}
                    onFocus={() => {
                      setHighlightedIndex(cardIndex);
                    }}
                  >
                    <Card card={card}></Card>
                    <VisuallyHidden>Remove {card.quote}</VisuallyHidden>
                  </motion.button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default CardBox;
