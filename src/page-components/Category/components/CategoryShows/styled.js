import styled from 'styled-components';
import { Box } from '@rebass/grid';
import spacing from 'styling/spacing';
import screen from 'styling/screen';

export const StyledCategoryShows = styled(Box)`
  background-color: ${(props) => props.theme.dark};
  border-radius: 26px;
  padding: ${spacing.m};

  ${screen.tablet} {
    padding: 15px;
  }
`;

export const StyledBox = styled(Box)`
  max-width: 100%;

  ${screen.mobile} {
    max-width: 480px;
  }

  ${screen.laptop} {
    max-width: 800px;
  }
`;
export const TextWrapper = styled.div`
  margin-bottom: 12px;

  ${screen.mobile} {
    margin-bottom: 0;
  }
`;
export const TitleWrapper = styled.div`
  margin: 10px 0 30px 0;
`;

export const ShowsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 40px;

  ${screen.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${screen.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${screen.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  ${screen.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
`;
