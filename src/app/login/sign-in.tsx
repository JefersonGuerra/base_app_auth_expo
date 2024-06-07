import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { useSession } from "../../context/Auth";
import { router } from 'expo-router';

import ButtonTouchableOpacityDefault from "../../components/button/buttonTouchableOpacityDefault"

export default function SignIn() {

    const { Login } = useSession();

    const [loading, setLoading] = useState<boolean>(false);

    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const handleLogin = async () => {
        setLoading(true);
        await Login(email, password);
        setLoading(false);
    }

    return (
        loading ?
            <View className="w-full h-[100vh] flex justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
            :
            <ScrollView>
                <View className="w-full h-[100vh] flex justify-center items-center px-[20px] gap-y-2">
                    <TextInput inputMode="email" placeholder="E-mail" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-montserratlight" onChangeText={(value) => setEmail(value)} />
                    <TextInput secureTextEntry placeholder="Senha" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-montserratlight mb-5" onChangeText={(value) => setPassword(value)} />
                    <ButtonTouchableOpacityDefault label="SIGN IN" onPress={() => { handleLogin() }} />
                    <TouchableOpacity onPress={() => { router.navigate("login/sign-up") }}>
                        <Text>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    )
}