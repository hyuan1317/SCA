import styled from 'styled-components';
import { Box } from '@rebass/grid';

export const StyledCategoryCard = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ShowCardImage = styled.img`
  aspect-ratio: 1;
  margin-bottom: 10px;
  max-width: 100%;
`;

export const ShowCardTitleWrapper = styled.div`
  margin-bottom: 4px;
`;

export const ShowCardDescriptionWrapper = styled.div`
  color: gray;
`;
