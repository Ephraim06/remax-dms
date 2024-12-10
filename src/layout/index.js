import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';

const Layout = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        display: 'flex',
      }}>
      <Sidebar />
      <Navbar />
      <Box
        sx={{
          paddingLeft: { md: '250px', xs: '60px' },
          paddingRight: '20px',
          paddingTop: '70px',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
        }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
