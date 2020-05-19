import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';
import { Header, DesktopMenu, Logo, MobileMenu } from '@pinua/common/components';

import HeaderButtons from './buttons';

import styles from './header.scss';

const MainHeader = ({ history, location: { pathname }, links, onClose, isMenuOpen, toggleMenu, ...props }) => {
  const toggleMobileMenu = toggle => () => {
    toggleMenu(toggle);
    onClose && onClose();
  };

  const handleLogin = useCallback(() => {
    history.push('/login');
  }, [history]);

  const handleSignUp = useCallback(() => {
    console.log('sign up pressed');
  }, []);

  const handleNavigateHome = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Media query={{ maxWidth: TABLET_MAX_WIDTH }}>
      {matches =>
        matches ? (
          <Header
            showBurgerMenu
            onBurgerMenuPress={toggleMobileMenu(true)}
            right={
              <HeaderButtons
                sizes="s"
                direction="row"
                onLogin={handleLogin}
                onRegister={handleSignUp}
                className={styles.tabletButtons}
              />
            }
          >
            <>
              <Box fullWidth justify="center" align="center">
                <Logo onClick={handleNavigateHome} />
              </Box>
              <MobileMenu path={pathname} onClose={toggleMobileMenu(false)} isOpen={isMenuOpen} links={links}>
                <HeaderButtons sizes="s" direction="column" onLogin={handleLogin} onRegister={handleSignUp} />
              </MobileMenu>
            </>
          </Header>
        ) : (
          <Box top="m">
            <Header
              left={<Logo onClick={handleNavigateHome} />}
              right={<HeaderButtons sizes="s" direction="row" onLogin={handleLogin} onRegister={handleSignUp} />}
            >
              <DesktopMenu path={pathname} links={links} />
            </Header>
          </Box>
        )
      }
    </Media>
  );
};

MainHeader.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  links: PropTypes.array,
  onClose: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default memo(MainHeader);
