import { Redirect, Stack } from 'expo-router';
import { useSession } from "../../context/Auth";

export default function AppLayout() {

  const { user } = useSession();


  if (!user) {
    return <Redirect href="login/sign-in" />;
  }


  return (
    <Stack
    screenOptions={{
      headerShown: false,
    }}
    >
      <Stack.Screen name="index"/>
    </Stack>
  );
}