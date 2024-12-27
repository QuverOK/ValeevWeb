import { UiSectionTitle } from "@/shared";
import { ProjectsLayout } from "../ui/layout";
import { ProjectsCardContainer } from "../ui/card-container";
import { ProjectsCard } from "../ui/card";

const cards = [
  {
    id: "1",
    title: "TODOAPP",
    description:
      "В этом проекте я попрактиковал и впервые использовал RTK, RTK Query, а также перенес проект полностью на TypeScript",
    link: "projects/todoapp",
  },
  {
    id: "2",
    title: "Danila Valeev",
    description:
      "В этом проекте я попрактиковал и впервые использовал RTK, RTK Query, а также перенес проект полностью на TypeScript",
    link: "projects/website",
  },
];

export const Projects = () => {
  return (
    <ProjectsLayout>
      <UiSectionTitle>Проекты</UiSectionTitle>
      <ProjectsCardContainer>
        {cards.map((card) => (
          <ProjectsCard
            key={card.id}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </ProjectsCardContainer>
    </ProjectsLayout>
  );
};
