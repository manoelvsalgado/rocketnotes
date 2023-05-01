import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 42px 0;
  }
`;

export const Search = styled.div`
   width: 100%;
   grid-area: search;
   padding: 24px 64px 0;
`;

export const Profile = styled(Link)`
display: flex;
align-items: right;
padding: 24px;

 > img {
  align-items: right;
  width: 56px;
  height: 56px;
  border-radius: 50%;
 }

 > div {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;

  a {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
   }

  strong {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
   }
  }
`;

export const Logout = styled.div`
  border: none;
  background: none;
  color: ${({ theme }) => theme.COLORS.WHITE};


  > svg {
    color:${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }
`;