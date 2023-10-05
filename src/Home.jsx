import { useState, useLayoutEffect, useRef } from "react";
import iceOne from "./assets/img/ice1.png";
import iceTwo from "./assets/img/ice2.png";
import iceThree from "./assets/img/ice3.png";
import UP from "./assets/icon/up.png";
import Speaker from "./assets/icon/speaker.png";
import Mute from "./assets/icon/mute.png";
import OpenedMenu from "./assets/icon/openedMenu.png";
import ClosedMenu from "./assets/icon/closedMenu.png";
import Song from "./assets/song.mp3";
import "./Home.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [count, setCount] = useState(1);
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const nextpage = () => {
    if (count < 3) {
      setCount(count + 1);
    }
  };
  const prevpage = () => {
    if (count >= 2) {
      setCount(count - 1);
    }
  };

  const { scrollYProgress } = useScroll();

  let y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const menuToggle = () => {
    setMenuDisplayed(!menuDisplayed);
  };
  return (
    <main>
      <nav>
        <div className="logo">
          <h1>CreamyIce</h1>
        </div>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Shop</p>
          </li>
          <li>
            <p>Collection</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
        <button onClick={menuToggle}>
          <img src={OpenedMenu} alt="hamburger menu" />
        </button>
      </nav>
      <audio src={Song} autoPlay loop ref={audioRef} />
      <button className="muteBtn" type="button" onClick={togglePlay}>
        {!isPlaying ? (
          <img src={Mute} alt="mute icon" width={24} height={24} />
        ) : (
          <img src={Speaker} alt="speaker icon" width={24} height={24} />
        )}
      </button>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{
          y: count === 1 ? 0 : -1000,
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "anticipate",
          duration: 1,
        }}
        className="container"
      >
        <div className="top_1">
          <h1>
            <span>The best</span> things in life are sweet,
          </h1>
        </div>
        <div className="bottom_1 one">
          <button>
            <p>Shop with Us</p>
          </button>
        </div>
        <img src={iceOne} alt="vanilla ice-cream" className="iceCream" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{
          y: count === 2 ? "-100vh" : count > 2 ? -2000 : 0,
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "anticipate",
          duration: 1,
        }}
        className="container"
      >
        <div className="top_1">
          <motion.h1 style={{ y }}>
            <span>May melt</span> your heart.
          </motion.h1>
        </div>
        <div className="bottom_1 two">
          <button>
            <p>Ice-cream collections</p>
          </button>
        </div>
        <motion.img
          initial={{ y: 500 }}
          animate={{ y: 0 }}
          src={iceTwo}
          alt="vanilla ice-cream"
          className="iceCream"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{
          y: count === 3 ? "-200vh" : 0,
          x: 0,
          opacity: 1,
        }}
        transition={{
          ease: "anticipate",
          duration: 1,
        }}
        className="container"
      >
        <div className="top_1">
          <h1>
            <span>I{"’"}ll stop</span> the world and melt with you.
          </h1>
        </div>
        <div className="bottom_1 three">
          <button>
            <p>Playground</p>
          </button>
        </div>
        <img src={iceThree} alt="vanilla ice-cream" className="iceCream" />
      </motion.div>
      <div className="btnContainer">
        <button onClick={prevpage} type="button">
          {count !== 1 && <img src={UP} alt="up icon" />}
        </button>
        <button onClick={nextpage} type="button">
          {count !== 3 && (
            <img src={UP} alt="down icon" style={{ transform: "scale(-1)" }} />
          )}
        </button>
      </div>
      <motion.div
        animate={{ y: menuDisplayed ? 0 : -1000 }}
        transition={{
          duration: 0.6,
          ease: "linear",
        }}
        className="menu"
      >
        <div className="navbar">
          <div className="logo">
            <h1>CreamyIce</h1>
          </div>
          <button onClick={menuToggle}>
            <img src={ClosedMenu} alt="hamburger menu" />
          </button>
        </div>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Shop</p>
          </li>
          <li>
            <p>Collection</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
      </motion.div>
    </main>
  );
};

export default Home;
