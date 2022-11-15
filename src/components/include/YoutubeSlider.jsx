import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

function YoutubeRan({ random }) {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${random.id.videoId}`}>
        <img
          src={random.snippet.thumbnails.medium.url}
          alt={random.snippet.description}
        />
      </a>
    </li>
  );
}

const YoutubeSlider = ({ random }) => {
  return (
    <section className="youtube__popular">
      <div className="container">
        <div className="youtube__inner">
        <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        initialSlide={"3"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
            {random.map((random, index) =>
              index < 10 ? (
                <SwiperSlide key={index}>
                  <YoutubeRan key={index} random={random} index={index} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSlider;
