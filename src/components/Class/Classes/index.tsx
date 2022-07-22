import React, { useContext } from "react";

import { ClassesContext } from "../../../contexts/ClassesProvider";

import removeIcon from "../../../assets/Class/removeIcon.png";
import addIcon from "../../../assets/Class/addIcon.png";

import { Container, TopContainer, H1, H4, BottomContainer, RemoveButton, AddButton, Image } from "./styles";
import { useEffect } from "react";

interface ClassesProps {
  missedClasses: number;
  id: string;
}

function Classes({ missedClasses, id }: ClassesProps) {
  const { addMissedClass, removeMissedClass } = useContext(ClassesContext);

  return (
    <Container>
      <TopContainer>
        <H1>{missedClasses}</H1>
        <H4>aulas perdidas</H4>
      </TopContainer>
      <BottomContainer>
        <RemoveButton onPress={() => removeMissedClass(id)}>
          <Image source={removeIcon} />
        </RemoveButton>
        <AddButton onPress={() => addMissedClass(id)}>
          <Image source={addIcon} />
        </AddButton>
      </BottomContainer>
    </Container>
  );
}

export default Classes;
