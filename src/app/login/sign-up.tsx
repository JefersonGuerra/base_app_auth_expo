import React, { useCallback, useState, useContext } from "react";
import { Text, View, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator, Image, ScrollView, Button, StyleSheet, Modal } from "react-native";
import { api } from "../../services/api";
import { useSession } from "../../context/Auth";
import Camera from "../../components/camera/camera";
const ImagePlaceholder = require("../../assets/img/image-placeholder.png");

export default function SignUp() {
    const { Login } = useSession();
    const [data, setData] = useState<any>();

    const [loading, setLoading] = useState<boolean>();
    const [imagePicker, setImagePicker] = useState<string>();
    const [camera, setCamera] = useState<JSX.Element>();

    const onChangeTextData = useCallback((key: string, value: string) => {

        setData({ ...data, ...{ [key]: value } });

    }, [data]);

    // const handleRegister = useCallback(async () => {

    //     if (!data?.name) return ToastAndroid.show('Preencha o campo Nome', ToastAndroid.LONG);
    //     if (!data?.email) return ToastAndroid.show('Preencha o campo E-mail', ToastAndroid.LONG);
    //     if (!data?.password) return ToastAndroid.show('Preencha o campo Senha', ToastAndroid.LONG);

    //     if (data?.password !== data?.repeatPassword) {
    //         ToastAndroid.show('Senhas diferentes', ToastAndroid.LONG);
    //     } else {
    //         setLoading(true);

    //         let formData = new FormData();

    //         Object.entries(data).map(([key, value]) => {
    //             formData.append(key, value);
    //         });

    //         formData.append('image', {
    //             uri: imagePicker.path,
    //             name: 'test.jpg',
    //             type: imagePicker.mime,
    //             size: imagePicker.size
    //         });

    //         await api.post(`/users`, formData, {
    //             headers: {
    //                 "Content-type": "multipart/form-data"
    //             },
    //             transformRequest: (formData) => {
    //                 return formData;
    //             },
    //         }).then(async function (response) {
    //             await Login(data?.email, data?.password);
    //             ToastAndroid.show(response?.data?.success ?? "Erro de conexão", ToastAndroid.LONG);
    //         }).catch(function (error) {
    //             ToastAndroid.show(error?.response?.data?.error ?? "Erro de conexão", ToastAndroid.LONG);
    //         }).finally(() => {
    //             setLoading(false);
    //         })
    //     }
    // }, [api, data]);

    const openCamera = (status: boolean) => {
        setCamera(<Camera status={status} />);
    }

    return (
        loading ?
            <View className="w-full h-[100vh] flex justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
            :
            <ScrollView>
                {camera}
                <View className="w-full h-[100vh] flex justify-center items-center px-[20px] gap-y-2">
                    <View className="w-full float-left justify-center items-center mt-5">
                        <TouchableOpacity className="w-[150px] h-[150px] float-left rounded-[150px] overflow-hidden flex justify-center items-center" onPress={() => { openCamera(true) }}>
                            {imagePicker ?
                                <Image className="min-w-[150px] min-h-[150px]" source={{ uri: imagePicker }} />
                                :
                                <Image className="w-full h-[150px] float-left" source={ImagePlaceholder} />
                            }
                        </TouchableOpacity>
                    </View>
                    <TextInput placeholder="Nome" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-[montserratlight]" onChangeText={(value) => onChangeTextData("name", value)} value={data?.name} />
                    <TextInput placeholder="E-mail" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-[montserratlight]" onChangeText={(value) => onChangeTextData("email", value)} value={data?.email} />
                    <TextInput secureTextEntry placeholder="Senha" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-[montserratlight]" onChangeText={(value) => onChangeTextData("password", value)} value={data?.password} />
                    <TextInput secureTextEntry placeholder="Confirme sua Senha" className="w-full h-[40px] border-[2px] border-color_2 rounded-[6px] pl-[11px] text-[15px] text-color_3 font-[montserratlight] mb-5" onChangeText={(value) => onChangeTextData("repeatPassword", value)} value={data?.repeatPassword} />
                </View>
            </ScrollView>
    )
}