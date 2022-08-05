import GoalItem from "./GoalItem";
import tw from "tailwind-react-native-classnames";
import {FlatList,View} from 'react-native'
import {useSelector} from 'react-redux'

const GoalListItems = () => {
    const goalsList = useSelector((state) => state.goalSlice.goals);
    return (
        <View style={[tw`mt-2 mx-auto border-t-2 pt-4 w-full`]}>
            {/* ScrollView */}
            <FlatList
                // alwaysBounceVertical={false}
                data={goalsList}
                // keyExtractor={(item)=>item}
                renderItem={(itemData) => {
                    return <GoalItem item={itemData.item}/>;
                }}
            ></FlatList>
        </View>
    );
};

export default GoalListItems;
