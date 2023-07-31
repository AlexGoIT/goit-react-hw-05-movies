import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const Thumb = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 5px 0px rgba(34, 60, 80, 0.2);
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Character = styled.p`
  padding: 4px;
  font-size: 12px;
  font-style: italic;
  text-align: center;
`;

export const ActorName = styled.p`
  padding: 4px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
`;
