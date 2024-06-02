import { useRef } from 'react'
import { View, Text, TouchableOpacity, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { CameraView, useCameraPermissions, CameraType } from 'expo-camera'
import CameraFlip from '../../assets/img/cameraFlip'
import TakePicture from '../../assets/img/takePicture'

export default function Camera({ status }: Props) {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<any>(null);
    const [picture, setPicture] = useState<string>();
    const [modalPicture, setModalPicture] = useState<boolean>(false);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture = async () => {
        if (cameraRef) {
            const data = await cameraRef.current.takePictureAsync();
            console.log(data);
            setPicture(data.uri);
            setModalPicture(true);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={status}
        >
            <CameraView className='w-full h-[100vh] flex-1 flex-row' facing={facing} ref={cameraRef}>
                <View className='w-full h-16 mb-5 flex self-end justify-center items-center'>
                    <TouchableOpacity className='w-10 h-10 mt-5 ml-3 self-start absolute' onPress={toggleCameraFacing}>
                        <View className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <CameraFlip className='mt-2' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-16 h-16 bg-white mt-5 ml-3 rounded-full flex justify-center items-center absolute' onPress={takePicture}>
                        <TakePicture className='mt-3' />
                    </TouchableOpacity>
                </View>
            </CameraView>
            {
                picture &&
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={modalPicture}
                >
                    <View className='flex-1 justify-center items-center'>
                        <TouchableOpacity className='w-16 h-16 bg-red-600' onPress={() => setModalPicture(false)}></TouchableOpacity>
                        <Image className='w-full h-[500px]' source={{ uri: picture }} />
                    </View>
                </Modal>
            }
        </Modal>
    )
}

interface Props {
    status: boolean,
}