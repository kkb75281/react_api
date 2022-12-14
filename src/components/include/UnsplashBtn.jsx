import React from "react";

// const unsplashInfo = [
//   { text: "spring" },
//   { text: "summer" },
//   { text: "fall" },
//   { text: "winter" },
//   { text: "soccer" },
//   { text: "space" },
//   { text: "pretty" },
// ];

// const UnsplashText = ({ text }) => {
//   return { text };
// };

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("sky");
  };
  const onClick2 = () => {
    onSearch("ocean");
  };
  const onClick3 = () => {
    onSearch("space");
  };
  const onClick4 = () => {
    onSearch("christmas");
  };
  const onClick5 = () => {
    onSearch("winter");
  };
  const onClick6 = () => {
    onSearch("creative");
  };
  const onClick7 = () => {
    onSearch("forest");
  };

  // e.target.innerHTML

  return (
    <div className="unsplash__btn">
      <div className="container">
        <button type="submit" onClick={onClick1}>
          {/* {unsplashInfo.map((text, index) => (
            <UnsplashText key={index} text={text.text} />
          ))} */}
          sky
        </button>
        <button type="submit" onClick={onClick2}>
          ocean
        </button>
        <button type="submit" onClick={onClick3}>
          space
        </button>
        <button type="submit" onClick={onClick4}>
          christmas
        </button>
        <button type="submit" onClick={onClick5}>
          winter
        </button>
        <button type="submit" onClick={onClick6}>
          creative
        </button>
        <button type="submit" onClick={onClick7}>
          forest
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
