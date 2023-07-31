import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
`;

export const AuthorWrapper = styled.div`
  display: flex;
`;

export const AutorNameBox = styled.div``;

export const Thumb = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 20px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ReviewContent = styled.p`
  text-align: justify;
`;
