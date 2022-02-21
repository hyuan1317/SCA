import { Flex } from '@rebass/grid';
import Paragraph from 'shared-components/Typography/Paragraph';
import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import SortButton from 'shared-components/SortButton';
import {
  StyledBox,
  StyledCategoryShows,
  TextWrapper,
  ShowsWrapper,
  Header,
} from './styled';
import CategoryShowCard from '../CategoryShowCard';

const SortOptions = [
  {
    key: 'SORT A-Z',
    value: 'SORT A-Z',
  },
  {
    key: 'SORT Z-A',
    value: 'SORT Z-A',
  },
];

function CategoryShows({ shows, description }) {
  const [showList, setShowList] = useState(shows);
  const showsNumber = shows.length;

  const handleOnSort = useCallback(
    (sortMethod) => {
      const sortedShowList = [...shows];

      switch (sortMethod) {
        case 'SORT A-Z':
          sortedShowList.sort((a, b) => (a.name > b.name ? 1 : -1));
          break;
        case 'SORT Z-A':
          sortedShowList.sort((a, b) => (b.name > a.name ? 1 : -1));
          break;
        default:
      }

      setShowList(sortedShowList);
    },
    [shows]
  );

  return (
    <StyledCategoryShows>
      <Header>
        <Paragraph
          text={`${showsNumber} Podcasts`}
          variant="xl"
          fontWeight={700}
        />
        <SortButton onOptionClick={handleOnSort} options={SortOptions} />
      </Header>
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
        {showList.map((show) => (
          <CategoryShowCard key={show.id} show={show} />
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
