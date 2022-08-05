import { Pressable, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import {useDispatch} from 'react-redux' 
import { removeGoal } from "../redux/goalSlice";

const GoalItem = ({ item }) => {
    const dispatch = useDispatch()
    const handleItemPress = (item) =>{
        dispatch(removeGoal(item))
    }

    return (
        <View
            style={[
                tw`my-1 bg-gray-300 rounded-2xl overflow-hidden`,
            ]}
        >
            <Pressable
                android_ripple={{ color: "transparent" }}
                onLongPress={handleItemPress.bind(this, item)}
                style={({pressed})=> pressed ?[tw`bg-gray-600`]: [tw`bg-gray-400`]}

            >
                <Text style={[tw`px-3 py-2 font-bold text-white text-lg`]}>{item}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;
