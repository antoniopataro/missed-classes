import React, { useContext } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { Dimensions, ScrollView, StatusBar } from "react-native";

import Header from "../../components/Class/Header";
import Classes from "../../components/Class/Classes";
import Info from "../../components/Class/Info";

import { ClassesContext, ClassProps } from "../../contexts/ClassesProvider";

import { Container } from "./styles";

function Class() {
  const navigation = useNavigation();

  const { classes } = useContext(ClassesContext);

  const route = useRoute();

  const params = route.params?.params!;
  const id = params?.id;

  const currentClass: ClassProps = classes.filter((item) => item.id === id)[0];

  const viewWidth = Dimensions.get("window").width;
  const viewHeight = Dimensions.get("window").height;

  if (!currentClass) {
    navigation.navigate("Home");
    return null;
  }

  return (
    <ScrollView>
      <Container viewHeight={viewHeight} viewWidth={viewWidth}>
        <StatusBar hidden />
        <Header
          name={currentClass.name}
          presence={currentClass.presence}
          requiredPresence={currentClass.requiredPresence}
        />
        <Classes missedClasses={currentClass.missedClasses} id={currentClass.id} />
        <Info
          requiredPresence={currentClass.requiredPresence}
          totalClasses={currentClass.totalClasses}
          id={currentClass.id}
        />
      </Container>
    </ScrollView>
  );
}

export default Class;
