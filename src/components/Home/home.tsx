import Box from '@mui/material/Box'
import SelfieIcon from './selfie-icon';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <>
        <Box 
        display="flex"
        justifyContent="center"
        >
            <SelfieIcon />
        </ Box>
        <Box
        display="flex"
        justifyContent="center"
        m="2rem"
        >
            <Typography variant="h5">
        Daniela
      </Typography>
        </Box>
        </>
    )
}

export default Home;

