import { AppBar, Container, Toolbar } from "@mui/material";

type HeaderLayoutProps = {
  children: React.ReactNode;
};

const appBarStyles = {
  boxShadow: 0,
  bgcolor: "transparent",
  mt: "20px",
  position: "initial",
};

const toolBarStyles = {
  py: 2.5,
  justifyContent: "space-between",
};

export const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <AppBar sx={appBarStyles}>
      <Container>
        <Toolbar sx={toolBarStyles}>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};
