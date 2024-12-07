import React from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import main from '../../assets/styles/main';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={main.textBold}>Home Screen</Text>
        </View>
    );
};

export default Home;