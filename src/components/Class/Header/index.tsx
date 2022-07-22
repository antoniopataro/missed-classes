import { useNavigation } from "@react-navigation/native";

import leftArrow from "../../../assets/leftArrow.png";

import { Container, TopContainer, Button, Image, H5, H5Presence, BottomContainer, H1 } from "./styles";

interface HeaderProps {
  name: string;
  presence: number;
  requiredPresence: number;
}

function Header({ name, presence, requiredPresence }: HeaderProps) {
  const navigation = useNavigation();

  const handlePresenceColor = (presence: number, requiredPresence: number) => {
    const safetyMargin = (100 - requiredPresence) / 2;

    if (presence < requiredPresence) {
      return "#E14237";
    } else if (presence < requiredPresence + safetyMargin) {
      return "#EFA433";
    } else {
      return "#549D32";
    }
  };

  return (
    <Container>
      <TopContainer>
        <Button onPress={() => navigation.navigate("Home")}>
          <Image source={leftArrow} width={23} height={29} />
        </Button>
        <H5>Aulas</H5>
        <H5></H5>
      </TopContainer>
      <BottomContainer>
        <H1>{name}</H1>
        <H5Presence color={handlePresenceColor(presence, requiredPresence)}>{presence}%</H5Presence>
      </BottomContainer>
    </Container>
  );
}

export default Header;
