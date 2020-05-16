import React from 'react';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';
import { Footer, Logo } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import i18n from 'i18n';

import styles from './footer.scss';

const MainFooter = () => {
  return (
    <Footer>
      <Box className={cn(styles.itemWrapper)} wrap="wrap">
        <Box className={cn(styles.footerLogo)} direction="column">
          <Logo />
          <Text className={cn(styles.copyright)}>{i18n.t('footer.copyright')}</Text>
        </Box>
        <Box className={cn(styles.footerLinksWrapper)} wrap="wrap">
          <a href="/hospitals" className={cn(styles.footerLinks)}>
            {i18n.t('footer.hospitals')}
          </a>
          <a href="/solutions" className={cn(styles.footerLinks)}>
            {i18n.t('footer.solutions')}
          </a>
          <a href="/about" className={cn(styles.footerLinks)}>
            {i18n.t('footer.about')}
          </a>
          <a href="/contacts" className={cn(styles.footerLinks)}>
            {i18n.t('footer.contacts')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.login')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.rights')}
          </a>
        </Box>
        <Box direction="column">
          <a href="#" className={cn(styles.footerLinks, styles.footerSocialLinkMargin)}>
            <FontAwesomeIcon icon={faFacebook} className={cn(styles.iconMargin)} />
            {i18n.t('footer.social.facebook')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            <FontAwesomeIcon icon={faGithub} className={cn(styles.iconMargin)} />
            {i18n.t('footer.social.git')}
          </a>
        </Box>
        <Box className={cn(styles.license)} justify="center">
          <a href="#" className={cn(styles.licenseLink)}>
            {i18n.t('footer.license')}
          </a>
        </Box>
      </Box>
    </Footer>
  );
};

export default MainFooter;
