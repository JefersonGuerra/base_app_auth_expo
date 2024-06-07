import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonTouchableOpacityDefault({ onPress, label }: Props) {
    return (
        <TouchableOpacity className="w-[204px] h-[35px] float-left bg-color_3 rounded-[6px] flex items-center justify-center" onPress={() => { onPress() }}>
            <Text className="text-[14px] text-[#FFFFFF] text-center">{label}</Text>
        </TouchableOpacity>
    )
}

interface Props {
    onPress(): void,
    label?: string
}