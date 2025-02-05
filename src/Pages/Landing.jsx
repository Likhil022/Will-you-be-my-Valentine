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
  const moveButton = () => {
    setHoverCount(hoverCount + 1);
    if (hoverCount == 5) {
      setText(
        "I'm sorry, I'll leave you alone now.You may click no this time. 😔"
      );
      setPicture(sad);
      return;
    }
    if (hoverCount == 6) {
      setText("Just kidding! 😂. But Please say Yes 😌");
      setPicture(MaleBear);
      setAnimation("animate-pulse");
    }
    if (hoverCount == 8) {
      setText("Stop running! Just say YES! 😂❤️");
      setPicture(MaleBear);
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
    setText("I knew you'd say yes! 😘"); // ✅ Change text

    // ✅ Start fade-out effect
    setFadeOut(true);

    // ✅ Hide the "No" button after fade-out animation ends (0.5s)
    setTimeout(() => {
      setShowNoButton(false);
    }, 500);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-20">
      <h1 className="text-3xl font-bold text-slate-300 transition-all ease-in-out">
        {text}
      </h1>
      <img className=" max-w-80" src={picture} alt="Male Bear" />
      <div className="relative w-[200px] h-[100px] ">
        {/* <button
          className={`absolute bottom-5 left-10 bg-green-400  w-20 h-12  text-black border-2 font-medium  border-solid border-black transition-all duration-500 ease-in-out hover:h-16 hover:w-24 hover:text-xl ${animation}`}
          onClick={() => {
            handleYesClick();
          }}
          onMouseEnter={() => setAnimation("animate-wiggle")}
        >
          Yes
        </button> */}
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
            className={`no-button absolute bg-red-400 w-20 h-12 text-black border-2 font-medium border-black transition-opacity duration-500 ease-in-out ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
            style={{ top: position.top, left: position.left }}
            onMouseEnter={moveButton}
          >
            No
          </button>
        )}
      </div>
    </div>
  );
};

export default Landing;
