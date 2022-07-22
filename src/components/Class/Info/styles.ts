import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex-direction: column;

  width: 100%;

  padding: 0 50px;
  padding-top: 60px;
  padding-bottom: 30px;
`;

const InfoContainer = styled.View`
  flex-direction: row;

  align-items: center;
`;

const H3 = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #303238;

  margin-top: 16px;
`;

const H3Input = styled.TextInput`
  font-size: 14px;
  font-weight: 500;
  color: #303238;

  margin-left: 4px;

  text-decoration: underline;
`;

const H4 = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`;

const RemoveButton = styled.TouchableOpacity``;

export { Container, InfoContainer, H3, H3Input, H4, RemoveButton };
