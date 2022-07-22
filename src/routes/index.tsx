import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Class from "../screens/Class";

const Stack = createStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Class" component={Class} />
    </Stack.Navigator>
  );
}

export default StackRoutes;
