import React from "react";
import { motion } from "framer-motion";
import parse from "html-react-parser";

import styles from "./Card.module.css";

function Card({ card }) {
  return (
    <motion.div
      layoutId={`card-${card.quote}`}
      draggable={false}
      className={styles.card}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 60,
      }}
    >
      <h4 className={styles.topic}>{card.topic}</h4>
      <p>
        {parse(card.quote)}
        <br />
        {card.book != "" && (
          <>
            - {card.author}
            {", "}
            <i>
              {card.book} p. {card.pageNumber}
            </i>
          </>
        )}
      </p>
    </motion.div>
  );
}

export default Card;
