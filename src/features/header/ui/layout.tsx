import { AppBar, Container, Toolbar } from "@mui/material";

type HeaderLayoutProps = {
  children: React.ReactNode;
};
export const HeaderLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", mt: "20px" }}>
      <Container>
        <Toolbar
          sx={{
            py: 2.5,
            justifyContent: "space-between",
          }}
        >
          {children}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
