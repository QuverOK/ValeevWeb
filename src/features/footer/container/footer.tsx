import { socialList } from "@/shared";
import { FooterCopy } from "../ui/copy";
import { FooterLayout } from "../ui/layout";
import { FooterSocialList } from "../ui/socialList";

export const Footer = () => {
  const socials = socialList;

  return (
    <FooterLayout>
      <FooterCopy>© 2024</FooterCopy>
      <FooterSocialList socials={socials} />
    </FooterLayout>
  );
};
