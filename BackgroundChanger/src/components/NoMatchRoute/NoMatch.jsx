import { Link } from 'react-router-dom';
import { Box, Typography, Container } from '@mui/material';
import illuminatiGif from '../../assets/gif/illuminati.gif';
import { GenerateButton } from '../ParaGenerator/GenerateButton';

export function NoMatch() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Box mb={4}>
          <img src={illuminatiGif} alt="Illuminati" style={{ maxWidth: '100%' }} />
        </Box>
        <Typography variant="h4" component="h1" gutterBottom>
          Citizen! You&apos;ve stumbled too far.
        </Typography>
        <Typography variant="body1" paragraph>
          The shadow government
          thanks you for your curiosity, But you must return as soon as possible!
        </Typography>
        <Box component={Link} to={"/Login"}>
        <GenerateButton name="Return to sanctioned content" Link/>
        </Box>
      </Box>
    </Container>
  );
}