import styled from "styled-components/native";

interface ContainerProps {
  viewWidth: number;
  viewHeight: number;
}

const Container = styled.SafeAreaView<ContainerProps>`
  flex-direction: column;

  min-width: ${(props) => props.viewWidth}px;
  min-height: ${(props) => props.viewHeight}px;

  align-items: center;
  justify-content: flex-start;

  background-color: #f9f9fb;
`;

export { Container };
