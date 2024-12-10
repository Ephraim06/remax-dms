import {
  ChevronDown,
  NotificationsOutline,
  PersonCircle,
  SearchOutline,
  SettingsOutline,
  ShareSocialOutline,
} from 'react-ionicons';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

const Navbar = () => {
  return (
    <Box
      sx={{
        width: { md: 'calc(100% - 230px)', xs: 'calc(100% - 60px)' },
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '8px',
        paddingRight: '24px',
        height: '70px',
        top: 0,
        left: { md: '230px', xs: '60px' },
        borderBottom: '1px solid #d1d5db',
        backgroundColor: '#fff',
      }}>
      {/* Left Section: Board Name */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
        }}>
        <PersonCircle color='#fb923c' width='28px' height='28px' />
        <Typography
          variant='subtitle1'
          sx={{
            color: 'orange',
            fontWeight: 'bold',
            fontSize: { md: '1.125rem', xs: '0.875rem' },
            whiteSpace: 'nowrap',
          }}>
          Board Name
        </Typography>
        <ChevronDown color='#fb923c' width='16px' height='16px' />
      </Box>

      {/* Center Section: Search Bar */}
      <Box
        sx={{
          width: { md: '800px', xs: '130px' },
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          padding: '8px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
        <SearchOutline color='#999' />
        <InputBase
          placeholder='Search'
          sx={{
            width: '100%',
            backgroundColor: 'transparent',
            outline: 'none',
            fontSize: '0.9375rem',
          }}
        />
      </Box>

      {/* Right Section: Icons */}
      <Box
        sx={{
          display: { md: 'flex', xs: 'none' },
          alignItems: 'center',
          gap: '16px',
        }}>
        <IconButton
          sx={{ backgroundColor: '#f3f4f6', borderRadius: '50%', p: '8px' }}>
          <ShareSocialOutline color='#444' />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: '#f3f4f6', borderRadius: '50%', p: '8px' }}>
          <SettingsOutline color='#444' />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: '#f3f4f6', borderRadius: '50%', p: '8px' }}>
          <NotificationsOutline color='#444' />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
