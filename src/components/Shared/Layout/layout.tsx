import Box from '@mui/material/Box';
import Header from './Header/header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/footer';

const styles = {
    container: {  
      backgroundSize: '100% 100%',
    },
  }

const Layout = () => (

    <Box 
    height="100vh" 
    display="flex" 
    flexDirection="column"
    style={styles.container}
    >
        <Header />
        <Box height="100vh">
        <Outlet />
        </Box>
        <Footer />
    </Box>
)

export default Layout;