import styled from "styled-components/native";

const Container = styled.View`
  flex-direction: column;

  width: 100%;

  align-items: center;

  padding: 0 50px;
  padding-top: 30px;

  margin-top: 60px;
`;

const TopContainer = styled.View`
  flex-direction: column;

  width: 100%;

  align-items: center;
`;

const H1 = styled.Text`
  font-size: 48px;
  font-weight: 500;
  color: #e14237;
`;

const H4 = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #808080;
`;

const BottomContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: space-between;

  padding: 0 100px;
  margin-top: 30px;
`;

const RemoveButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;

  align-items: center;
  justify-content: center;

  border: 2px solid #303238;

  border-radius: 10px;
`;

const AddButton = styled.TouchableOpacity`
  width: 45px;
  height: 45px;

  align-items: center;
  justify-content: center;

  border: 2px solid #303238;

  border-radius: 10px;

  background-color: #303238;
`;

const Image = styled.Image``;

export { Container, TopContainer, H1, H4, BottomContainer, RemoveButton, AddButton, Image };
