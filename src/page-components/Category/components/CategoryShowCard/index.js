import React from 'react';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import {
  StyledCategoryCard,
  ShowCardImage,
  ShowCardTitleWrapper,
  ShowCardDescriptionWrapper,
} from './styled';

function CategoryShowCard(props) {
  const {
    show: {
      name,
      description,
      images: {
        squareLarge: { url },
      },
    },
  } = props;

  return (
    <StyledCategoryCard>
      <ShowCardImage src={url} />
      <ShowCardTitleWrapper>
        <Paragraph linesToShow={1} text={name} variant="m" />
      </ShowCardTitleWrapper>
      <ShowCardDescriptionWrapper>
        <Paragraph linesToShow={3} text={description} variant="s" />
      </ShowCardDescriptionWrapper>
    </StyledCategoryCard>
  );
}

CategoryShowCard.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.shape({
      squareLarge: PropTypes.shape({
        url: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default CategoryShowCard;
