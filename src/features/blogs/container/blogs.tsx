"use client";
import { UiSectionTitle } from "@/shared";
import { BlogsLayout } from "../ui/layout";
import { BlogsCardsLayout } from "../ui/cardsLayout";
import { BlogsCard } from "../ui/card";

import { blogs as blogPosts } from "@/entities/mock";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";

export const Blogs = () => {
  const cards = [...blogPosts].sort((postA, postB) => new Date(postB.creationDate).getTime() - new Date(postA.creationDate).getTime());   // !TEMP

  return (
    <BlogsLayout>
      <UiSectionTitle>Статьи</UiSectionTitle>
      <BlogsCardsLayout>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          mousewheel={true} 
          modules={[Mousewheel]} 
          onSwiper={(swiper) => console.log(swiper)}
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
      </BlogsCardsLayout>
    </BlogsLayout>
  );
};
