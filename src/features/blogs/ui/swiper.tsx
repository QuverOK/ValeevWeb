import { BlogsCard } from "../ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";

// ! CHANGE ANY TYPE
export const BlogsSwiper = ({ cards }: { cards: any }) => {
  return (
    <Swiper
      spaceBetween={32}
      centeredSlides={true}
      slidesPerView={1}
      autoplay={{ delay: 2500 }}
      breakpoints={{
        600: {
          centeredSlides: false,
          slidesPerView: 2,
          spaceBetween: 10,
          autoplay: false,
        },
        644: {
          centeredSlides: false,
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      }}
      mousewheel={true}
      modules={[Mousewheel, Autoplay]}
    >
      {cards.map((card) => (
        <SwiperSlide key={card.id}>
          <BlogsCard
            categories={[{ id: "1", name: "React", color: "#000" }]}
            date={card.creationDate}
            title={card.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
