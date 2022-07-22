import React, { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

import { ClassesContext } from "../../../contexts/ClassesProvider";

import { v4 as uuid } from "uuid";

import arrowRight from "../../../assets/arrowRight.png";
import addIcon from "../../../assets/addIcon.png";

import {
  Container,
  H2,
  H3,
  H3Presence,
  ClassContainer,
  ClassInfo,
  Arrow,
  NewClassContainer,
  Image,
  Input,
} from "./styles";

import { ClassProps } from "../../../contexts/ClassesProvider";

interface ClassesComponentProps {
  searchbarInput: string;
}

function Classes({ searchbarInput }: ClassesComponentProps) {
  const navigation = useNavigation();

  const { classes, addClass } = useContext(ClassesContext);

  const [value, setValue] = useState("");

  function handleValue() {
    const newClass = {
      name: value,
      presence: 100,
      missedClasses: 0,
      requiredPresence: 75,
      totalClasses: 40,
      id: uuid(),
    };

    addClass(newClass);
    setValue("");
  }

  function handleNavigation(item: ClassProps) {
    navigation.navigate("Class", {
      params: item,
    });
  }

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

  const filteredClasses = classes.filter((item) => {
    if (item.name.toLowerCase().includes(searchbarInput.toLowerCase())) {
      return item;
    }
    return;
  });

  return (
    <Container>
      <H2>Aulas</H2>
      {filteredClasses.map((item) => (
        <ClassContainer key={item.id} onPress={() => handleNavigation(item)}>
          <H3>{item.name}</H3>
          <ClassInfo>
            <H3Presence color={handlePresenceColor(item.presence, item.requiredPresence)}>{item.presence}%</H3Presence>
            <Arrow source={arrowRight} width={12} height={12} />
          </ClassInfo>
        </ClassContainer>
      ))}
      <NewClassContainer>
        <Image source={addIcon} width={9} height={9} />
        <Input
          placeholder="Nova Aula..."
          onChangeText={(text) => setValue(text)}
          value={value}
          onSubmitEditing={handleValue}
        />
      </NewClassContainer>
    </Container>
  );
}

export default Classes;
