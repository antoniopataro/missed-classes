import { SetStateAction } from "react";
import searchIcon from "../../../assets/searchIcon.png";

import { Container, InputContainer, Image, Input } from "./styles";

interface SearchbarProps {
  searchbarInput: string;
  setSearchbarInput: React.Dispatch<React.SetStateAction<string>>;
}

function Searchbar({ searchbarInput, setSearchbarInput }: SearchbarProps) {
  return (
    <Container>
      <InputContainer>
        <Image source={searchIcon} width={16} height={16} />
        <Input
          placeholder="Pesquisar..."
          editable={true}
          onChangeText={(text) => setSearchbarInput(text)}
          value={searchbarInput}
        />
      </InputContainer>
    </Container>
  );
}

export default Searchbar;
