import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledBox,
  StyledCategoryShows,
  TextWrapper,
  ShowsWrapper,
  TitleWrapper,
} from './styled';
import CategoryShowCard from '../CategoryShowCard';

function CategoryShows({ shows, description }) {
  const showsNumber = shows.length;

  return (
    <StyledCategoryShows>
      <TitleWrapper>
        <Paragraph
          text={`${showsNumber} Podcasts`}
          variant="xl"
          fontWeight={700}
        />
      </TitleWrapper>
      <Flex justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <StyledBox>
          {description && (
            <TextWrapper>
              <Paragraph text={description} variant="l" transparent />
            </TextWrapper>
          )}
        </StyledBox>
      </Flex>
      <ShowsWrapper>
        {shows.map((show) => (
          <CategoryShowCard key={show.name} show={show} />
        ))}
      </ShowsWrapper>
    </StyledCategoryShows>
  );
}

CategoryShows.propTypes = {
  shows: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      images: PropTypes.shape({
        squareLarge: PropTypes.shape({
          url: PropTypes.string,
        }),
      }),
    })
  ),
  description: PropTypes.string,
};

CategoryShows.defaultProps = {
  shows: [],
  description: null,
};

export default CategoryShows;
