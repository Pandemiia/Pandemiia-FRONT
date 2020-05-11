import React, { memo, useCallback, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Box, CheckboxGroup, Text } from '@pinua/uikit';

import { ToggleScrollButtons, ToggleSelection } from './buttons';

import styles from './filter.scss';

const Filter = ({ className, title, children, width, data, onChange, itemsLength, isOpen, ...props }) => {
  const setDefaultItems = useCallback(() => {
    return data.length > itemsLength ? [...data].splice(0, itemsLength) : data;
  }, [data, itemsLength]);

  const [itemsData, setItems] = useState(data);
  const [value, setValue] = useState([]);
  const [open, setShowAll] = useState(isOpen);

  useEffect(() => {
    setItems(setDefaultItems());
  }, [setDefaultItems]);

  const handleChange = useCallback(
    e => {
      const {
        target: { value }
      } = e;
      setValue(value);
      onChange && onChange(value);
    },
    [onChange]
  );

  const handleShowAll = useCallback(() => {
    setItems(data);
    setShowAll(true);
  }, [data]);

  const handleHide = useCallback(() => {
    setItems(setDefaultItems());
    setShowAll(false);
  }, [setDefaultItems]);

  const handleSelectAll = useCallback(() => {
    const value = data.map(({ value }) => value);

    setValue(value);
    onChange && onChange(value);
  }, [data, onChange]);

  const handleClearAll = useCallback(() => {
    setValue([]);
    onChange && onChange([]);
  }, [onChange]);

  const checkboxOptions = useCallback(() => {
    return itemsData.map(({ total, ...rest }) => {
      return {
        ...rest,
        children: total ? (
          <Text left="s" className={styles.total} color="info" size="s" align="center">
            {total}
          </Text>
        ) : null
      };
    });
  }, [itemsData]);

  const renderActions = useCallback(() => {
    return <ToggleSelection onSelectAll={handleSelectAll} onClear={handleClearAll} />;
  }, [handleSelectAll, handleClearAll]);

  return (
    <Box width={width} className={cn(styles.filter, className)} direction="column">
      <Box fullWidth>
        <Text className={styles.title} size="s" align="left" bold>
          {title}
        </Text>
        {renderActions()}
      </Box>
      <Box direction="column">
        <>
          {children}
          <Box direction="column">
            <CheckboxGroup value={value} options={checkboxOptions()} onChange={handleChange} inline={false} />
            {data.length > itemsLength && (
              <ToggleScrollButtons isOpen={open} onShow={handleShowAll} onHide={handleHide} />
            )}
          </Box>
        </>
      </Box>
    </Box>
  );
};

Filter.propTypes = {
  data: PropTypes.array,
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  itemsLength: PropTypes.number,
  actions: PropTypes.node,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOf(['s', 'm', 'l', 'xl'])
};

Filter.defaultProps = {
  width: 'l',
  data: [],
  isOpen: false,
  itemsLength: 15
};

export default memo(Filter);
