import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
  align-self: center;
`;

export const OptionsList = styled.div`
  position: absolute;
  z-index: 100;
  width: 150px;
  left: calc(50% - 73px);
  top: 100%;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '▲';
    position: absolute;
    left: 71px;
    top: -13px;
    width: 0;
    height: 0;
    color: #fff;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.25);
  }
`;

export const Option = styled.div`
  display: flex;
  align-content: center;
  p {
    font-size: 16px;
    margin-left: 10px;
    font-weight: lighter;
    color: #999999;
  }
`;

export const Divisor = styled.div`
  height: 1px;
  background: black;
  opacity: 0.1;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 140px;
`;
