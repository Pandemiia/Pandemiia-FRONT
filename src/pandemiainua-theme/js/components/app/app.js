import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Footer } from '@pinua/common/components';
import { Header } from 'components';
import { Text } from '@pinua/uikit';
import i18n from 'i18n';

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
        <Footer>
          <Text>{i18n.t('footer.copyright')}</Text>
        </Footer>
      </div>
    );
  }
}

export default App;
