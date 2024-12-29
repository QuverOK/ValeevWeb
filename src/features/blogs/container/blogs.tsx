"use client";
import { UiSectionTitle } from "@/shared";
import { BlogsLayout } from "../ui/layout";
import { BlogsCardsLayout } from "../ui/cardsLayout";
import { BlogsSwiper } from "../ui/swiper";

import { blogs as blogPosts } from "@/entities/mock";

export const Blogs = () => {
  const cards = [...blogPosts].sort(
    (postA, postB) =>
      new Date(postB.creationDate).getTime() -
      new Date(postA.creationDate).getTime(),
  ); // !TEMP

  return (
    <BlogsLayout>
      <UiSectionTitle>Статьи</UiSectionTitle>
      <BlogsCardsLayout>
        <BlogsSwiper cards={cards} />
      </BlogsCardsLayout>
    </BlogsLayout>
  );
};
