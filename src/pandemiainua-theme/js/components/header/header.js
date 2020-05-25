import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@pinua/uikit';
import { Media, TABLET_MAX_WIDTH } from '@pinua/utils';
import { Header, DesktopMenu, Logo, MobileMenu } from '@pinua/common/components';

import HeaderButtons from './buttons';

import styles from './header.scss';

const MainHeader = ({
  history,
  location: { pathname },
  isLoggedIn,
  links,
  onClose,
  isMenuOpen,
  toggleMenu,
  ...props
}) => {
  const toggleMobileMenu = toggle => () => {
    toggleMenu(toggle);
    onClose && onClose();
  };

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
            right={<HeaderButtons isLoggedIn={isLoggedIn} sizes="s" direction="row" className={styles.tabletButtons} />}
          >
            <>
              <Box fullWidth justify="center" align="center">
                <Logo onClick={handleNavigateHome} />
              </Box>
              <MobileMenu path={pathname} onClose={toggleMobileMenu(false)} isOpen={isMenuOpen} links={links}>
                <HeaderButtons isLoggedIn={isLoggedIn} sizes="s" direction="column" />
              </MobileMenu>
            </>
          </Header>
        ) : (
          <Box top="m">
            <Header
              left={<Logo onClick={handleNavigateHome} />}
              right={<HeaderButtons isLoggedIn={isLoggedIn} sizes="s" direction="row" />}
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
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object,
  history: PropTypes.object,
  links: PropTypes.array,
  onClose: PropTypes.func,
  isMenuOpen: PropTypes.bool,
  toggleMenu: PropTypes.func
};

export default memo(MainHeader);
