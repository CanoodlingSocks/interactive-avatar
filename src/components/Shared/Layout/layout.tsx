import Box from '@mui/material/Box';
import Header from './Header/header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/footer';


const Layout = () => {

    return (
        <>
    <Box height="100vh" display="flex" flexDirection="column">
        <Header />
        <Outlet />
    </Box>
    <Footer />
        </>
        )
    }

export default Layout;