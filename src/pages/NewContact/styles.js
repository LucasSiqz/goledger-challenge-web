import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: black;
        opacity: 0.4;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #284160;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.12, '#284160')};
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
`;
