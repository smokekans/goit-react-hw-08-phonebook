import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isLoggerIn, isRefreshed } from '../../redux/auth/authSelectors';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';

export const Header = () => {
  const userIsLoggerIn = useSelector(isLoggerIn);
  const userIsRefreshed = useSelector(isRefreshed);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <ContactsIcon fontSize="medium" color="inherit" sx={{ mr: 2 }} />
          <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
            PhoneBook App
          </Typography>
          {userIsLoggerIn || userIsRefreshed ? <UserMenu /> : <Navigation />}
        </Toolbar>
      </AppBar>
    </>
  );
};
