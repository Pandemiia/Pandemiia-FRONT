import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18n';
import { Header, Menu } from '@pinua/common/components';
import Footer from '../footer/index';
import styles from './app.scss';

class App extends PureComponent {
  static propTypes = {
    isMenuOpen: PropTypes.bool,
    toggleMenu: PropTypes.func,
    links: PropTypes.array,
    location: PropTypes.object
  };

  toggleMenu = toggle => () => this.props.toggleMenu(toggle);

  render() {
    const {
      children,
      isMenuOpen,
      links,
      location: { pathname }
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <Header title={i18n.t('home.title')} onMenuClick={this.toggleMenu(true)} />
        <Menu path={pathname} onClose={this.toggleMenu(false)} isOpen={isMenuOpen} links={links} />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
