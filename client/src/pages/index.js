import React from "react";
import CardDisplay from "../components/CardDisplay";
import CardBox from "../components/CardBox";
import styles from "./index.module.css";

function index() {
  const [cards, setCards] = React.useState([]);

  const infoCard = {
    quote:
      "Welcome! This is my digital commonplace book. If you haven't heard the term before, it's an old-school note-taking method for readers to remember what they've read or for writer's to collect material. Borrowing from Ryan Holiday's <a href='https://www.youtube.com/watch?v=gT1EExZkzMM'>notecard system</a>, which he originally learned from Robert Greene." +
      "<br><br>" +
      "Each has a character limit of x, and all this information is stored on a MongoDB database. This website uses the MERN tech stack (Mongo, Express, React, Node), and runs on Next.js and is deployed using Vercel. I used Framer Motion for animations. I got visual inspiration from <a href='https://www.joyofreact.com/'>Josh Comeau's course</a>. I also included a library/antilibrary tab on this site inspired by <a href='https://maggieappleton.com/library'>Maggie Appleton</a> to keep a record of books I've read and want to read.",
    author: ["Ioav Livneh"],
    topic: ["Information"],
    book: "",
    pageNumber: null,
    selected: true,
  };

  React.useEffect(() => {
    fetch("http://localhost:8080/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setCards([infoCard, ...data]);
      });
  }, []);

  function toggleCard(toggledCard) {
    const nextCards = cards.map((card) => {
      cards.forEach((card) => {
        if (card.selected === true) {
          card.selected = !card.selected;
        }
      });

      if (card.quote !== toggledCard.quote) {
        return card;
      }

      return {
        ...card,
        selected: !toggledCard.selected,
      };
    });

    setCards(nextCards);
  }

  const selectedCard = cards.filter((card) => card.selected);
  const unselectedCards = cards.filter((card) => !card.selected);

  return (
    <div className={styles.wrapper}>
      <CardDisplay className={styles.display} card={selectedCard} />
      <CardBox cards={unselectedCards} handleRemoveCard={toggleCard} />
    </div>
  );
}

export default index;
