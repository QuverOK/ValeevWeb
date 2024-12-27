import { Box } from "@mui/material";
import { HeaderNavigation } from "../ui/navigation";
// import { HeaderThemeSwitcher } from "../ui/theme-switcher";
import { NavigationItem } from "../../../shared/model/navigationList";

type RightsideContainerProps = {
  navigationList: NavigationItem[];
};

export const RightsideContainer = ({
  navigationList,
}: RightsideContainerProps) => {
  return (
    <Box display="flex" alignItems="center" gap={"25px"}>
      <HeaderNavigation navigationList={navigationList} />
      {/* <HeaderThemeSwitcher /> */}
    </Box>
  );
};
