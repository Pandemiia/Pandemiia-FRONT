import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header, MainFooter } from 'components';

// import { Text } from '@pinua/uikit';
// import i18n from 'i18n';

import styles from './app.scss';

class App extends PureComponent {
  static propTypes = {
    links: PropTypes.array,
    location: PropTypes.object
  };

  render() {
    const { children, links } = this.props;

    return (
      <div className={styles.wrapper}>
        <Header links={links} />
        {children}
        <MainFooter />
      </div>
    );
  }
}

export default App;
