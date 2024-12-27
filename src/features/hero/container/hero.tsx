import { Box, Typography } from "@mui/material";
import { HeroLayout } from "../ui/layout";
import { HeroContainerText } from "../ui/text-container";
import { HeroText } from "../ui/text";

export const Hero = () => {
  return (
    <HeroLayout>
      <HeroContainerText>
        <HeroText textAlign="left">Твори</HeroText>
        <HeroText textAlign="center">Наслаждайся</HeroText>
        <HeroText textAlign="right">Учись</HeroText>
      </HeroContainerText>
    </HeroLayout>
  );
};
