import React from 'react';
import { View, Text } from 'react-native';

const Home = () => {
    return (
        <View>
            <Text>Sign Up Screen</Text>
        </View>
    );
}

Home.navigationOptions = () => ({
    header: null
});

export default Home;