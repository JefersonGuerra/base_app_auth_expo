import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useSession } from "../../context/Auth";

import ButtonTouchableOpacityDefault from "../../components/button/buttonTouchableOpacityDefault";

export default function Index() {

  const { Logout, user } = useSession();

  return (
    <View>
      <View className="w-full float-left justify-center items-center mt-5">
        <View className="w-[150px] h-[150px] float-left rounded-[150px] overflow-hidden flex justify-center items-center">
          <Image className="min-w-[150px] min-h-[150px]" source={{ uri: user?.image }} />
        </View>
      </View>
      <Text className="w-full float-left text-[20px] text-center mt-5">{user?.name}</Text>
      <Text className="w-full float-left text-[15px] text-center mt-5">{user?.email}</Text>
      <View className="w-full flex justify-center items-center mt-5">
        <ButtonTouchableOpacityDefault label="LOGOUT" onPress={() => Logout()} />
      </View>
    </View>
  );
}