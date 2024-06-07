import React from "react";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./CardBox.module.css";
import Card from "../Card";

function CardBox({ cards, handleRemoveCard }) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);

  return (
    <>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>{cards.length} Notecards</h2>
        <ol className={styles.cards}>
          {cards.map((card, cardIndex) => {
            const reverseCardIndex = cards.length - cardIndex - 1;

            let height = Math.max(60 - reverseCardIndex * 5, 35);

            if (cardIndex === highlightedIndex) {
              height = 120;
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
    </>
  );
}

export default CardBox;
