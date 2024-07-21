import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#ffffff' },
    background: { default: '#f0f0f0' }
  }
});

const navItems = [
  { name: 'Background Changer', path: '/BackgroundChanger' },
  { name: 'Para Generator', path: '/ParaGenerator' },
  { name: 'Github Info Card', path: '/GithubInfoCard' },
  { name: 'Login', path: '/Login' },
];

export function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{ color: 'secondary.main' }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}