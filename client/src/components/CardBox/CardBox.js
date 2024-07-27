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
            let height = 30; //or 40 or 13

            if (cardIndex === highlightedIndex) {
              height = 200;
            }
            // if (
            //   cardIndex - 1 === highlightedIndex ||
            //   cardIndex + 1 === highlightedIndex
            // ) {
            //   height = 40;
            // }
            // if (
            //   cardIndex - 2 === highlightedIndex ||
            //   cardIndex + 2 === highlightedIndex
            // ) {
            //   height = 35;
            // }
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
