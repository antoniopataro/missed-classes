import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 0 50px;
  padding-top: 30px;
`;

const LeftContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

const Image = styled.Image``;

const TextContainer = styled.View`
  flex-direction: column;

  margin-left: 18px;
`;

const H2 = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #303238;
`;

const H4 = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`;

const Settings = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  padding: 8px;

  aspect-ratio: 1;

  border-radius: 4px;
`;

export { Container, LeftContainer, Image, TextContainer, H2, H4, Settings };
