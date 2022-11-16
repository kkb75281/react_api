import React from "react";

const UnsplashBtn = ({ onSearch }) => {
  const onClick1 = () => {
    onSearch("kpop");
  };
  const onClick2 = () => {
    onSearch("pop");
  };
  const onClick3 = () => {
    onSearch("발라드");
  };
  const onClick4 = () => {
    onSearch("랩");
  };
  const onClick5 = () => {
    onSearch("댄스");
  };

  return (
    <div className="youtube__btn">
      <div className="container">
        {/* <input
          ref={inputRef}
          placeholder="검색하세요!"
          onKeyPress={onKeyPress}
        /> */}
        <button type="submit" onClick={onClick1}>
          kpop
        </button>
        <button type="submit" onClick={onClick2}>
          pop
        </button>
        <button type="submit" onClick={onClick3}>
          발라드
        </button>
        <button type="submit" onClick={onClick4}>
          랩
        </button>
        <button type="submit" onClick={onClick5}>
          댄스
        </button>
      </div>
    </div>
  );
};

export default UnsplashBtn;
