import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

import StackRoutes from "./src/routes";

import ClassesProvider from "./src/contexts/ClassesProvider";

function App() {
  return (
    <NavigationContainer>
      <ClassesProvider>
        <StackRoutes />
      </ClassesProvider>
    </NavigationContainer>
  );
}

export default App;
