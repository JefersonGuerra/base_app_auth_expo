import { Slot } from 'expo-router';
import { SessionProvider } from "../context/Auth";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function Root() {

    const [loaded, error] = useFonts({
        montserratlight: require('../../assets/fonts/montserratlight.otf'),
        montserratbold: require('../../assets/fonts/montserratbold.otf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <SessionProvider>
            <Slot />
        </SessionProvider>
    );
}