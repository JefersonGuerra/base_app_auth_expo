import { Redirect, Stack } from 'expo-router';
import { useSession } from "../../context/Auth";

export default function AppLayout() {

  const { user } = useSession();


  if (!user) {
    return <Redirect href="login/sign-up" />;
  }


  return <Stack screenOptions={{title: "HOME"}}/>;
}