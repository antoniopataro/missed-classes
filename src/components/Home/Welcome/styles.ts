import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;

  padding: 0 50px;
  margin-top: 30px;
`;

const H1 = styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: #303238;
`;

interface YellowH1Props {
  color: string;
}

const YellowH1 = styled.Text<YellowH1Props>`
  color: ${(props) => props.color};
`;

export { Container, H1, YellowH1 };
