import React from 'react';
import cn from 'classnames';
import { useHistory, Link } from 'react-router-dom';
import { Box, Text } from '@pinua/uikit';
import { Footer, Logo } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import i18n from 'i18n';

import styles from './footer.scss';

const MainFooter = () => {
  const history = useHistory();

  function handleClick() {
    history.push('/');
  }
  return (
    <Footer>
      <Box className={cn(styles.itemWrapper)} wrap={true}>
        <Box className={cn(styles.footerLogo)} direction="column">
          <Logo onClick={handleClick} />
          <Text className={cn(styles.copyright)}>{i18n.t('footer.copyright')}</Text>
        </Box>
        <Box className={cn(styles.footerLinksWrapper)} wrap={true}>
          <Link to="/hospitals" className={cn(styles.footerLinks)}>
            {i18n.t('footer.hospitals')}
          </Link>
          <Link to="/solutions" className={cn(styles.footerLinks)}>
            {i18n.t('footer.solutions')}
          </Link>
          <Link to="/about" className={cn(styles.footerLinks)}>
            {i18n.t('footer.about')}
          </Link>
          <Link to="/contacts" className={cn(styles.footerLinks)}>
            {i18n.t('footer.contacts')}
          </Link>
          <Link to="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.login')}
          </Link>
          <Link to="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.rights')}
          </Link>
        </Box>
        <Box direction="column">
          <Link to="#" className={cn(styles.footerLinks, styles.footerSocialLinkMargin)}>
            <FontAwesomeIcon icon={faFacebook} className={cn(styles.iconMargin)} />
            {i18n.t('footer.social.facebook')}
          </Link>
          <Link to="#" className={cn(styles.footerLinks)}>
            <FontAwesomeIcon icon={faGithub} className={cn(styles.iconMargin)} />
            {i18n.t('footer.social.git')}
          </Link>
        </Box>
        <Box className={cn(styles.license)} justify="center">
          <Text className={cn(styles.license)}>
            {i18n.t('footer.license')} &nbsp;
            <Link to="#" className={cn(styles.licenseLink)}>
              {i18n.t('footer.licenseLink')}
            </Link>
            {i18n.t('footer.licenseSub')}
          </Text>
        </Box>
      </Box>
    </Footer>
  );
};

export default MainFooter;
