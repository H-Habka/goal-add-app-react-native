import { Button, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useState } from "react";
import { GoalInput, GoalListItems } from "./components";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, removeGoal } from "./redux/goalSlice";

import { StatusBar } from "expo-status-bar";

function App() {
    const [ModalVisibility, setModalVisibility] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <StatusBar style="inverted" />
            <View style={[tw`pt-10 px-3 flex-col h-full bg-gray-500`]}>
                <View style={[tw`mb-4`]}>
                    <Button
                        title="Show Modal"
                        onPress={() => setModalVisibility(true)}
                    />
                </View>
                <GoalInput
                    ModalVisibility={ModalVisibility}
                    setModalVisibility={setModalVisibility}
                />
                <GoalListItems />
            </View>
        </>
    );
}

export default function AppWrapper() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
