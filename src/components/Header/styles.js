import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  height: 105px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;
  padding: 0 80px;
  > h1 {
    height: 42px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
    padding: 42px 0;
  }
`;

export const Search = styled.div`
   width: 50%;
   padding: 24px 64px 0;
`;

export const Profile = styled.div`
 > div {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  line-height: 24px;
  a {
    text-align: right;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
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
`;