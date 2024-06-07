import { createContext, useState, useEffect, useCallback, useContext } from 'react';
import { api } from "../services/api";
import * as SecureStore from 'expo-secure-store';
import { ToastAndroid, View } from 'react-native';
import { router } from 'expo-router';

const AuthContext = createContext<{
    user: any
    setUser: React.Dispatch<React.SetStateAction<any | undefined>>
    Login(email: string | undefined, password: string | undefined): void
    Logout(): void
}>({
    user: undefined,
    setUser: () => {},
    Login: () => {},
    Logout: () => {}
});

export function SessionProvider(props: React.PropsWithChildren) {

    const [user, setUser] = useState<any | undefined>();
    const [loading, setLoading] = useState<boolean>(true);

    const getStogeContext = useCallback(async () => {
        const secureStoreToken = await SecureStore.getItemAsync('access_token');
        const secureStoreUser = await SecureStore.getItemAsync('user');

        if (secureStoreToken && secureStoreUser) {
            setUser(JSON.parse(secureStoreUser));
            api.defaults.headers.common['Authorization'] = `Bearer ${secureStoreToken}`;
        }

        setLoading(false);

    }, [api])

    const Login = async (email: string, password: string) => {
        await api.post('/login', {
            email,
            password
        }).then(async function (response) {
            const user = JSON.stringify(response.data.user);
            await SecureStore.setItemAsync('access_token', response.data.access_token);
            await SecureStore.setItemAsync('user', user);
            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
            setUser(JSON.parse(user));
            router.replace('/');
        }).catch(function (error) {
            ToastAndroid.show(error?.response?.data?.error ?? "Erro de conexão", ToastAndroid.LONG);
        })
    }

    const Logout = async () => {
        await SecureStore.deleteItemAsync('access_token');
        await SecureStore.deleteItemAsync('user');
        api.defaults.headers.common['Authorization'] = undefined;
        setUser(undefined);
    }


    useEffect(() => {
        getStogeContext();
    }, [getStogeContext])

    return (
        loading ?
            <View className="w-full h-[100vh] flex justify-center items-center"></View>
            :
            <AuthContext.Provider value={{ user, setUser, Login, Logout }}>
                {props.children}
            </AuthContext.Provider>
    );
}

export function useSession() {
    return useContext(AuthContext);
}