import { UiSectionTitle } from "@/shared";
import { ProjectsLayout } from "../ui/layout";
import { ProjectsCardContainer } from "../ui/card-container";
import { ProjectsCard } from "../ui/card";
import { projects as projectPosts } from "@/entities/mock/model/get";

export const Projects = () => {
  const cards = projectPosts; // !TEMP

  return (
    <ProjectsLayout>
      <UiSectionTitle>Проекты</UiSectionTitle>
      <ProjectsCardContainer>
        {cards.map((card) => (
          <ProjectsCard
            key={card.id}
            title={card.name}
            description={card.description}
            link={card.githubLink}
          />
        ))}
      </ProjectsCardContainer>
    </ProjectsLayout>
  );
};
