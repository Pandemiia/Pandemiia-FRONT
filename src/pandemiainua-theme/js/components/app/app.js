import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'components';

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
      </div>
    );
  }
}

export default App;