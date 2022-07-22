import React, { useState } from "react";

import Header from "../../components/Home/Header";
import Welcome from "../../components/Home/Welcome";
import Searchbar from "../../components/Home/Searchbar";
import Classes from "../../components/Home/Classes";

import { Dimensions, StatusBar, ScrollView } from "react-native";

import { Container } from "./styles";

function Home() {
  const [searchbarInput, setSearchbarInput] = useState("");

  const viewWidth = Dimensions.get("window").width;
  const viewHeight = Dimensions.get("window").height;

  return (
    <ScrollView automaticallyAdjustContentInsets={false}>
      <StatusBar hidden></StatusBar>
      <Container viewHeight={viewHeight} viewWidth={viewWidth}>
        <Header />
        <Welcome />
        <Searchbar searchbarInput={searchbarInput} setSearchbarInput={setSearchbarInput} />
        <Classes searchbarInput={searchbarInput} />
      </Container>
    </ScrollView>
  );
}

export default Home;
