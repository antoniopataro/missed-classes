import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;

  margin-top: 60px;

  padding: 0 50px;
`;

const InputContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;
  padding: 12px;

  border: 1px solid #d9d9d9;
  border-radius: 10px;

  background-color: #fff;
`;

const Image = styled.Image``;

const Input = styled.TextInput`
  height: 18px;

  margin: 0 12px;
`;

export { Container, InputContainer, Image, Input };
