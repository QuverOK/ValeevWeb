import { navigationList } from "../model/navigationList";
import { HeaderLayout } from "../ui/layout";
import { HeaderLogo } from "../ui/logo";
import { RightsideContainer } from "../ui/rightside-container";

export const Header = () => {
  return (
    <HeaderLayout>
      <HeaderLogo>Danila Valeev</HeaderLogo>  
      <RightsideContainer navigationList={navigationList} />
    </HeaderLayout>
  );
};
