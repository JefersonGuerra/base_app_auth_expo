import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="sign-in" options={{ title: "LOGIN" }} />
            <Stack.Screen name="sign-up" options={{ title: "REGISTER" }} />
        </Stack >
    )
}