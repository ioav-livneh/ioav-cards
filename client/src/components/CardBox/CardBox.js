import React from "react";
import { motion } from "framer-motion";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./CardBox.module.css";
import Card from "../Card";

function CardBox({ cards, handleRemoveCard }) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(null);
  let letters = [];

  return (
    <section className={styles.display}>
      <div
        className={styles.wrapper}
        onMouseLeave={() => {
          setHighlightedIndex(null);
        }}
      >
        <h2>{cards.length} Notecards</h2>
        <div>
          <div className={styles.allCards}>
            <ol>
              {cards.map((card, cardIndex) => {
                let height = "3vw"; //38px
                if (cardIndex === highlightedIndex) {
                  height = "12vw"; //150px
                }
                let newDivider = false;
                if (!letters.includes(card.topic[0])) {
                  letters.push(card.topic[0]);
                  newDivider = true;
                }
                return (
                  <>
                    {newDivider == true && (
                      <li key={card.topic[0]} style={{ height: "3vw" }}>
                        <motion.button
                          layout="position"
                          className={styles.cardBtn}
                          style={{ left: `${letters.length * 3.7 - 3.7}%` }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 60,
                          }}
                        >
                          <Card card={card} divider={true}></Card>
                          <VisuallyHidden>
                            Remove {card.topic[0]}
                          </VisuallyHidden>
                        </motion.button>
                      </li>
                    )}
                    <li
                      key={card._id}
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
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardBox;
