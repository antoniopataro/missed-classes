import React, { useState, useContext } from "react";

import { ClassesContext } from "../../../contexts/ClassesProvider";

import { Container, InfoContainer, H3, H3Input, H4, RemoveButton } from "./styles";

interface InfoProps {
  requiredPresence: number;
  totalClasses: number;
  id: string;
}
function Info({ requiredPresence, totalClasses, id }: InfoProps) {
  const { updateRequiredPresence, updateTotalClasses, removeClass } = useContext(ClassesContext);

  const [requiredPresenceValue, setRequiredPresenceValue] = useState("");
  const [totalClassesValue, setTotalClassesValue] = useState("");

  function handleRequiredPresenceValue() {
    updateRequiredPresence(id, Number(requiredPresenceValue));
  }

  function handleTotalClassesValue() {
    updateTotalClasses(id, Number(totalClassesValue));
  }

  function handleRemoveClass(id: string) {
    removeClass(id);
  }

  return (
    <Container>
      <InfoContainer>
        <H4>Presença exigida:</H4>
        <H3Input
          keyboardType="numeric"
          placeholder={requiredPresence.toString()}
          onChangeText={(text) => setRequiredPresenceValue(text.replace(/[^0-9]/g, ""))}
          value={requiredPresenceValue}
          onSubmitEditing={handleRequiredPresenceValue}
        />
        <H4>%</H4>
      </InfoContainer>
      <InfoContainer>
        <H4>Número de aulas:</H4>
        <H3Input
          keyboardType="numeric"
          placeholder={totalClasses.toString()}
          onChangeText={(text) => setTotalClassesValue(text.replace(/[^0-9]/g, ""))}
          value={totalClassesValue}
          onSubmitEditing={handleTotalClassesValue}
        />
      </InfoContainer>
      <RemoveButton onPress={() => handleRemoveClass(id)}>
        <H3>Remover Aula</H3>
      </RemoveButton>
    </Container>
  );
}

export default Info;
