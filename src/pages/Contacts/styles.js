import styled from 'styled-components';
import { lighten } from 'polished';

export const InitialContent = styled.div`
  margin-top: 10px;
  margin-left: 120px;
  margin-right: 120px;
  display: flex;
  align-items: center;

  strong {
    margin: 0 0;
    font-size: 20px;
  }
`;

export const ButtonContent = styled.div`
  margin-left: auto;

  button {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    margin: 5px 0 0;
    width: 142px;
    height: 36px;
    background: #284160;
    color: #fff;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.04, '#284160')};
    }

    strong {
      color: #fff;
      font-size: 20px;
      margin: 0 5px 0 0px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 120px;
  margin-right: 120px;
  justify-content: space-between;
`;
