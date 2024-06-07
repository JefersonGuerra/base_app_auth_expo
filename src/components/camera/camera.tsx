import { useRef } from 'react'
import { View, Text, TouchableOpacity, Button, Modal, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { CameraView, useCameraPermissions, CameraType, FlashMode } from 'expo-camera'
import ImagePicker from 'react-native-image-crop-picker';

import CameraFlip from '../../assets/img/cameraFlip'
import TakePicture from '../../assets/img/takePicture'
import Flash from '../../assets/img/flash'
import FlashOff from '../../assets/img/flashOff'
import Trash from '../../assets/img/trash'
import Check from '../../assets/img/check'


export default function Camera({ visible, imageResult }: Props) {

    const cameraRef = useRef<any>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [flashMode, setFlashMode] = useState<FlashMode>("off");
    const [permission, requestPermission] = useCameraPermissions();
    const [picture, setPicture] = useState<string>('');

    const [modalPicture, setModalPicture] = useState<boolean>(false);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={true}
            >
                <View className="flex-1 justify-center items-center">
                    <Text className="mb-5">We need your permission to show the camera</Text>
                    <Button onPress={requestPermission} title="grant permission" />
                </View>
            </Modal>
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
            const options = { quality: 1 };
            setPicture('');
            setModalPicture(true);
            const data = await cameraRef.current.takePictureAsync(options);
            setPicture(data.uri);
        }
    };

    const cropperImag = () => {
        ImagePicker.openCropper({
            mediaType: 'photo',
            path: picture,
            width: 300,
            height: 300
        }).then(image => {
            imageResult && imageResult(image);
            setModalPicture(false);
            visible && visible();
        });
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            onRequestClose={visible}
        >
            <CameraView className='w-full h-[100vh] flex-1 flex-row'
                ref={cameraRef}
                facing={facing}
                flash={flashMode}
            >
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
                            {flashMode === "on" ?
                                <Flash className='mt-2' />
                                :
                                <FlashOff className='mt-2' />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </CameraView>
            {
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalPicture}
                >
                    <View className='w-full h-[100vh] bg-white opacity-90 absolute z-[-1]'></View>
                    <View className='flex-1 justify-center items-center'>
                        <View className='w-full px-5'>
                            {!picture ?
                                <View className="w-full h-[100vh] flex justify-center items-center">
                                    <ActivityIndicator size="large" />
                                </View>
                                :
                                <>
                                    <Image className='w-full h-[500px]' source={{ uri: picture }} />
                                    <View className='w-full flex flex-row space-x-5 justify-center items-center py-3'>
                                        <View className='w-full h-[64px] absolute bg-red-600 top-0 opacity-70'></View>
                                        <TouchableOpacity className='w-10 h-10 bg-white rounded-full flex justify-center items-center' onPress={() => setModalPicture(false)}>
                                            <Trash className='mt-1' />
                                        </TouchableOpacity>
                                        <TouchableOpacity className='w-10 h-10 bg-white rounded-full flex justify-center items-center' onPress={() => { cropperImag() }}>
                                            <Check className='mt-2' />
                                        </TouchableOpacity>
                                    </View>
                                </>
                            }
                        </View>
                    </View>
                </Modal>
            }
        </Modal >
    )
}

interface Props {
    visible?(): void,
    imageResult?(param: object): void,
}