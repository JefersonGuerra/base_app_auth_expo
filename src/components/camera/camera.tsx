import { useRef } from 'react'
import { View, Text, TouchableOpacity, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import { CameraView, useCameraPermissions, CameraType, FlashMode } from 'expo-camera'
import CameraFlip from '../../assets/img/cameraFlip'
import TakePicture from '../../assets/img/takePicture'
import Flash from '../../assets/img/flash'

export default function Camera({ status }: Props) {

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef<any>(null);
    const [picture, setPicture] = useState<string>();
    const [modalPicture, setModalPicture] = useState<boolean>(false);
    const [flashMode, setFlashMode] = useState<FlashMode>("off");

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

    function toggleCameraFlash() {
        if (flashMode === "on") {
            setFlashMode("off")
        } else if (flashMode === "off") {
            setFlashMode("on")
        } else {
            setFlashMode("auto")
        }
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
            <CameraView className='w-full h-[100vh] flex-1 flex-row' facing={facing} ref={cameraRef} flash={flashMode}>
                <View className='w-full h-16 mb-5 flex justify-between items-center flex-row self-end'>
                    <TouchableOpacity className='w-10 h-10 ml-3' onPress={toggleCameraFacing}>
                        <View className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <CameraFlip className='mt-2' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity className='w-16 h-16 bg-white ml-3 rounded-full flex justify-center items-center' onPress={takePicture}>
                        <TakePicture className='mt-3' />
                    </TouchableOpacity>
                    <TouchableOpacity className='w-10 h-10 mr-3' onPress={toggleCameraFlash}>
                        <View className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                            <Flash className='mt-2' />
                        </View>
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