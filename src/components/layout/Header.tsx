import React, { FC, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from 'react-router-dom';

interface LinkTabProps {
  label?: string;
  pathname: string;
}

function a11yProps(index: number) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

const Header: FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  // console.log(location.pathname);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(pathname === '/' ? 0 : 1);
  }, [pathname]);

  function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        component={'a'}
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
          console.log(event);

          // setValue(event.)
          navigate(props.pathname);
        }}
        {...props}
      />
    );
  }

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            sx={{
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Currency
          </Typography>
          <Typography
            variant="h3"
            noWrap
            sx={{
              marginRight: '20px',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Exchange
          </Typography>

          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="Header Menu"
            textColor="inherit"
            indicatorColor="primary"
          >
            <LinkTab
              label="CURRENCY CONVERTER"
              pathname="/"
              {...a11yProps(0)}
            />
            <LinkTab
              label="VIEW CONVERSION HISTORY"
              pathname="/history"
              {...a11yProps(1)}
            />
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
