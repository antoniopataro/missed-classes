import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: column;

  width: 100%;

  padding: 0 50px;
  padding-top: 30px;
`;

const TopContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

const Button = styled.TouchableOpacity`
  aspect-ratio: 1;

  align-items: center;
  justify-content: center;

  padding: 8px;

  border-radius: 4px;
`;

const Image = styled.Image``;

const H5 = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #808080;
`;

interface H5PresenceProps {
  color: string;
}

const H5Presence = styled.Text<H5PresenceProps>`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.color};
`;

const BottomContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  margin-top: 41px;
`;

const H1 = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #303238;

  padding-right: 30px;
`;

export { Container, TopContainer, Button, Image, H5, H5Presence, BottomContainer, H1 };
