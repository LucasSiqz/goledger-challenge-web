import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 2px solid #eee;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0;
  display: flex;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      margin-left: 10px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      font-size: 20px;
      color: #284160;
    }
  }
`;
