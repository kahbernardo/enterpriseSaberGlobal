import styled, { css } from 'styled-components';
import themes from 'themes/index';

const cssActive = css`
  font-weight: 900;
  font-size: 19px;
  font-family: ${themes.fontFamily.koulen};
  letter-spacing: 2.76px;
  color: ${themes.colors.v8};

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

const cssDesactive = css`
  font-weight: 100;
  letter-spacing: 2.76px;
  font-family: ${themes.fontFamily.koulen};
  font-size: 19px;
  color: #272727;

  &:hover {
    color: #a457ed;
  }

  &:active {
    color: #64368e;
  }
`;

export const Container = styled.div`
  display: flex;
  height: fit-content;
  width: 80%;
  flex-direction: column;
  position: relative;
`;
export const InnerContainer = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  border-bottom: 1px solid #325e70;
  margin: 25px;
`;

interface IButton {
  active: boolean;
}

export const Button = styled.div<IButton>`
  display: flex;
  cursor: pointer;
  margin: 8px 30px;
  text-transform: uppercase;
  ${(p: IButton) => (p.active == true ? cssActive : cssDesactive)};
  color: #565656;
  font-family: ${themes.fontFamily.koulen};
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 180px;
  padding: 5px 0;
  padding-left: 20px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin: 0 20px;
  flex-direction: column;

  cursor: pointer;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    color: #21bdfa;
  }
`;

export const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 20px;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &:hover {
    color: #21bdfa;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 5px 10px;
  margin-left: 200px input {
    border: none;
    outline: none;
    margin-left: 5px;
  }
`;

export const Title = styled.div`
  display: flex;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #545454;
  text-align: center;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  display: flex;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #545454;
  text-align: justify;
`;
export const Link = styled.div`
  display: flex;
  font-size: 20px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #0a69ae;
  text-align: right;
  position: absolute;
  right: 10px;
  bottom: 40px;
`;
export const ImageContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const Image = styled.img`
  width: calc(100% / 3 - 8px);
  height: auto;
  object-fit: cover;
`;
