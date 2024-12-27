import { UiSectionTitle } from "@/shared";
import { ProjectsLayout } from "../ui/layout";
import { ProjectsCardContainer } from "../ui/card-container";
import { ProjectsCard } from "../ui/card";
import { Posts } from "@/entities/post/model/get";

export const Projects = () => {
  const projects = Posts.filter((post) => post.postTypeId === "1");

  return (
    <ProjectsLayout>
      <UiSectionTitle>Проекты</UiSectionTitle>
      <ProjectsCardContainer>
        {projects.map((card) => (
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
