import styled from '@emotion/styled'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Item = styled.li`
    &:not(:last-child) {
      margin-bottom: 10px;
    }
`;