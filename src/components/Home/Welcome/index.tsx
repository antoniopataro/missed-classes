import React, { useContext } from "react";

import { ClassesContext } from "../../../contexts/ClassesProvider";

import { Container, H1, YellowH1 } from "./styles";

function Welcome() {
  const { classes } = useContext(ClassesContext);

  const missedClassesArray = classes.map((item) => item.missedClasses);
  const totalMissedClasses = missedClassesArray.reduce((acc, value) => acc + value, 0);

  const canMissValues = classes.map((item) => item.totalClasses * (1 - item.requiredPresence / 100));
  const canMissAverage = canMissValues.reduce((acc, value) => acc + value, 0) / classes.length;

  const handlePresenceColor = () => {
    const safetyMargin = canMissAverage / 2;

    if (totalMissedClasses > canMissAverage) {
      return "#E14237";
    } else if (totalMissedClasses > safetyMargin) {
      return "#EFA433";
    } else {
      return "#549D32";
    }
  };

  return (
    <Container>
      <H1>
        Você faltou a <YellowH1 color={handlePresenceColor()}>{totalMissedClasses} aulas</YellowH1> nesse percurso.
      </H1>
    </Container>
  );
}

export default Welcome;
