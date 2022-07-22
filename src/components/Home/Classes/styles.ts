import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;

  margin-top: 60px;

  padding: 0 50px;
  padding-bottom: 30px;
`;

const H2 = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #303238;
`;

const H3 = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #303238;
`;

interface H3PresenceProps {
  color: string;
}

const H3Presence = styled.Text<H3PresenceProps>`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.color};
`;

const ClassContainer = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;

  padding: 15px 0;

  border: 1px solid transparent;
  border-bottom-color: #d9d9d9;
`;

const ClassInfo = styled.View`
  position: absolute;
  right: 0;

  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  background-color: #f9f9fb;
`;

const Arrow = styled.Image`
  margin-left: 12px;
`;

const NewClassContainer = styled.View`
  flex-direction: row;

  width: 100%;

  align-items: center;

  padding: 12px;
`;

const Image = styled.Image``;

const Input = styled.TextInput`
  height: 18px;

  margin: 0 12px;
`;

export { Container, H2, H3, H3Presence, ClassContainer, ClassInfo, Arrow, NewClassContainer, Image, Input };
