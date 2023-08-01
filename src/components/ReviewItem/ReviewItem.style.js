import styled from 'styled-components';

export const Item = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorNameBox = styled.div``;

export const Thumb = styled.div`
  width: 45px;
  height: 45px;
  margin-right: 8px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
`;

export const ReviewContent = styled.p`
  padding: 10px 0;
  text-align: justify;
`;
