import MaleBear from "../assets/MaleBear.gif";
import BuzzFeed from "../assets/BuzzFeed.gif";
import sad from "../assets/sad.gif";
import { useState } from "react";
import "../Pages/style.css";

const Landing = () => {
  const [position, setPosition] = useState({ top: "50", left: "150" });
  const [hoverCount, setHoverCount] = useState(0);
  const [picture, setPicture] = useState(MaleBear);
  const [text, setText] = useState("Will you be my Valentine?");
  const [animation, setAnimation] = useState("");
  const [hid, setHid] = useState("true");
  const [showNoButton, setShowNoButton] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [size, setSize] = useState("w-20 h-12");
  const [textSize, setTextSize] = useState("text-xl");

  const moveButton = () => {
    setHoverCount(hoverCount + 1);
    if (hoverCount == 5) {
      setText("I’ll just go cry in the corner. You may click No now. 😔");
      setPicture(sad);
      setSize("w-16 h-12");
      setTextSize("text-lg");
      return;
    }
    if (hoverCount == 6) {
      setText("Just kidding. 😂. I can’t lose you. 😌");
      setPicture(MaleBear);
      setSize("w-12 h-8");
      setTextSize("text-md");
    }
    if (hoverCount == 8) {
      setText("Stop running! Just say YES! 😂❤️");
      setPicture(MaleBear);
      setSize("w-6 h-5");
      setTextSize("text-sm");
    }
    if (hoverCount >= 10) {
      setFadeOut(true);
    }

    if (hid) {
      setHid("hidden");
    }
    const xLocation = Math.random() * 250;
    const yLocation = Math.random() * 150;
    setPosition({ top: `${yLocation}%`, left: `${xLocation}%` });
  };
  const handleYesClick = () => {
    setPicture(BuzzFeed); // ✅ Change GIF
    setText("I knew it! We are made for each other 🤍"); // ✅ Change text

    // ✅ Start fade-out effect
    setFadeOut(true);

    // ✅ Hide the "No" button after fade-out animation ends (0.5s)
    setTimeout(() => {
      setShowNoButton(false);
    }, 500);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <h1 className="text-3xl font-bold text-white transition-all ease-in-out">
        {text}
      </h1>
      <img className=" max-w-80 w-56 h-54" src={picture} alt="Male Bear" />
      <div className="relative w-[200px] h-[100px] ">
        {showNoButton && (
          <button
            className={`aabsolute bottom-5 left-10 bg-green-400 w-20 h-12 text-black border-2 font-medium border-black transition-all duration-500 ease-in-out hover:h-16 hover:w-24 hover:text-xl ${animation}`}
            onClick={handleYesClick}
            onMouseEnter={() => setAnimation("animate-wiggle")}
            onMouseLeave={() => setAnimation("")}
          >
            Yes
          </button>
        )}
        {showNoButton && (
          <button
            className={`no-button absolute bg-red-400 text-black border-2 font-medium border-black transition-opacity duration-500 ease-in-out ${textSize} ${
              fadeOut ? "opacity-0" : "opacity-100"
            }
            ${size}`}
            style={{ top: position.top, left: position.left }}
            onMouseEnter={moveButton}
            onClick={moveButton}
          >
            No
          </button>
        )}
      </div>
    </div>
  );
};

export default Landing;
