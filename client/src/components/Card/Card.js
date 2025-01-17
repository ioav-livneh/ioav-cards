import React from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Card.module.css";

function Card({ card, display, divider }) {
  if (divider == true) {
    return (
      <motion.div
        layoutId={`card-${card.topic[0]}`}
        draggable={false}
        className={styles.divider}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 60,
        }}
      >
        <VisuallyHidden>{card.topic[0]}</VisuallyHidden>
        <h4 className={styles.topic}>{card.topic[0]}</h4>
        <p className={styles.topic}>
          <br />
          <br />
          <br />
          <br />
          <br />
        </p>
      </motion.div>
    );
  }
  return (
    <motion.div
      layoutId={`card-${card._id}`}
      draggable={false}
      className={
        display == true ? `${styles.display} ${styles.card}` : styles.card
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 60,
      }}
    >
      <VisuallyHidden>{card._id}</VisuallyHidden>

      <h4 className={styles.topic}>{card.topic}</h4>

      <p>
        {parse(card.quote)}
        <br />
        <br />
        {card.book != "" && (
          <>
            - {card.author}
            {", "}
            <i>
              {card.book}{" "}
              {card.pageNumber != "" && (
                <span>
                  p.
                  {card.pageNumber.map((item, index) => (
                    <>
                      {item} {index + 1 == card.pageNumber.length ? "" : ","}{" "}
                    </>
                  ))}
                </span>
              )}
            </i>
          </>
        )}
      </p>
    </motion.div>
  );
}

export default Card;
