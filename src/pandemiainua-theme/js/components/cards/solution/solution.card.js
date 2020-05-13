import React, { memo, useCallback, useState } from 'react';
import cn from 'classnames';
import { Box, Text } from '@pinua/uikit';
import { Card, Grid } from '@pinua/common/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';

import i18n from 'i18n';

import Title, { titleProps } from './title';
import Description, { descriptionProps } from './description';
import Configuration, { configurationProps } from './configuration';

import styles from './solution.card.scss';

const SolutionCard = ({
  className,
  name,
  description,
  attachment,
  code,
  definition,
  images,
  instruction,
  mainImage,
  materials,
  tools,
  comment,
  approvedBy,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const toggleCard = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const renderImages = useCallback(() => {
    return images.map(({ id, image }, idx) => (
      <img className={styles.image} key={`${id}-${idx}`} src={image} alt="Solution image" />
    ));
  }, [images]);

  return (
    <Card className={cn(styles.solutionCard, className)} direction="column" bottom="s">
      <Box fullWidth direction="column">
        <Title code={code} image={mainImage} name={name} open={open} onClick={toggleCard} />
        <Box
          className={cn(styles.content, {
            [styles.open]: !!open
          })}
          fullWidth
          padding="m"
        >
          <Box className={styles.left} direction="column">
            <Box className={styles.images} direction="column">
              <Grid>{renderImages()}</Grid>
            </Box>
            <Configuration tools={tools} materials={materials} approvedBy={approvedBy} />
            <Text
              className={styles.source}
              top="s"
              size="s"
              color="navigational"
              component="a"
              target="_blank"
              href={attachment}
            >
              <Box padding="s">
                <FontAwesomeIcon className={styles.sourceIcon} icon={faFileArchive} />
                {i18n.t('common.download')}
              </Box>
            </Text>
          </Box>
          <Box className={styles.right} direction="column">
            <Description description={description} definition={description} instruction={instruction} />
            <Box fullWidth bottom="m" justify="start" align="start" direction="column" padding="s">
              <Text size="m" bold align="left" bottom="s">
                {i18n.t('solutions.comment')}
              </Text>
              <Text color="info" size="s" align="left">
                {comment}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

SolutionCard.propTypes = {
  ...titleProps,
  ...descriptionProps,
  ...configurationProps
};

export default memo(SolutionCard);
