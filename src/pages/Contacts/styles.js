import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
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

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 120px;
  margin-right: 120px;
  margin-bottom: 150px;
`;

export const ListAttributes = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 14px;
  margin-left: 10px;
  justify-content: space-between;
`;

export const Attribute = styled.div`
  flex: 1;
  max-width: 319px;
  strong {
    font-size: 16px;
  }

  span {
    text-align: left;
    color: #666666;
    font-size: 16px;
  }
`;

export const LastAttribute = styled.div`
  margin-left: auto;
  margin-right: 10px;
  strong {
    font-size: 16px;
  }

  span {
    text-align: left;
    color: #666666;
    font-size: 16px;
  }
`;

export const Contact = styled.div`
  display: flex;
  background: #ffffff;
  margin-bottom: 20px;
  height: 57px;
  align-items: center;
  border-radius: 4px;
`;

export const AsideContact = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  flex: 1;
`;

export const Scroll = styled(PerfectScrollbar)``;
