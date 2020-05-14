import React from 'react';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';
import { Footer, Logo } from '@pinua/common/components';

import i18n from 'i18n';

import styles from './footer.scss';

const MainFooter = () => {
  return (
    <Footer>
      <Box className={cn(styles.itemWrapper)} justify="between">
        <Box className={cn(styles.footerLogo)} direction="column">
          <Logo />
          <Text className={cn(styles.copyright)}>{i18n.t('footer.copyright')}</Text>
        </Box>
        <Box className={cn(styles.footerLinksWrapper)} wrap="wrap">
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.hospitals')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.solutions')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.about')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.contacts')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.login')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.rights')}
          </a>
        </Box>
        <Box wrap="wrap">
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.social.facebook')}
          </a>
          <a href="#" className={cn(styles.footerLinks)}>
            {i18n.t('footer.social.git')}
          </a>
        </Box>
        <Box>Весь контент доступний</Box>
      </Box>
    </Footer>
  );
};

export default MainFooter;
