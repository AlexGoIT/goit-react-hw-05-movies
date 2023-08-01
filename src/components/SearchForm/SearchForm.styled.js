import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 22px;
  padding: 4px;
  border-radius: 4px 0 0 4px;
  border: 1px solid #c2c2c2;
  border-right: none;
  outline: none;
`;

export const SearchButton = styled.button`
  height: 32px;
  text-transform: uppercase;
  border-radius: 0 4px 4px 0;
  border: 1px solid #c2c2c2;
  border-left: none;
  outline: none;
  cursor: pointer;
`;
