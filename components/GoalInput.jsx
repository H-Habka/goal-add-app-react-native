import { View, TextInput, Button, Modal,Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { addGoal } from "../redux/goalSlice";

const GoalInput = ({ ModalVisibility, setModalVisibility}) => {
    const [goal, setGoal] = useState("");

    const dispatch = useDispatch()

    const handleInputChange = (value) => {
        setGoal(value);
    };

    const handleAddingGoal = () => {
        if (goal) {
            dispatch(addGoal(goal));
            setModalVisibility(false)
            setGoal("");
        }
    };
    const handleCancelPress = ()=> {
        setModalVisibility(false)
    }
    return (
        <Modal visible={ModalVisibility} animationType="slide" >
            <View
                style={[
                    tw`flex-col w-full justify-center h-full p-2 mx-auto bg-blue-900`,
                ]}
            >
                <Image source={require("../assets/images/goal2.png")} style={[tw`w-44 h-44 mx-auto mb-2`]}/>
                <TextInput
                    value={goal}
                    onChangeText={handleInputChange}
                    style={[tw`bg-gray-100 border w-full rounded p-1 bg-gray-400 border-gray-400 text-white`]}
                    placeholder="Your Course Goal"
                />
                <View style={[tw`flex-row mt-3 justify-around`]}>
                    <View style={[tw`w-2/5`]}>
                        <Button onPress={handleAddingGoal} title="add Goal" />
                    </View>
                    <View style={[tw`w-2/5`]}>
                        <Button title="cansel" color="#F34655" onPress={handleCancelPress} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
