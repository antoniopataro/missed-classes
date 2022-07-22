import profilePicturePlaceholder from "../../../assets/profilePicturePlaceholder.png";
import settingsIcon from "../../../assets/settingsIcon.png";

import { Container, LeftContainer, Image, TextContainer, H2, H4, Settings } from "./styles";

function Header() {
  return (
    <Container>
      <LeftContainer>
        <Image source={profilePicturePlaceholder} width={50} height={50} />
        <TextContainer>
          <H4>Bem vindo,</H4>
          <H2>Antônio Pataro</H2>
        </TextContainer>
      </LeftContainer>
      {/* <Settings>
        <Image source={settingsIcon} width={50} height={50} />
      </Settings> */}
    </Container>
  );
}

export default Header;
