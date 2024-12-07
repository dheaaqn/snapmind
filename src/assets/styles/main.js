import { StyleSheet } from 'react-native';
import { colors } from './colors';

const main = StyleSheet.create({
    textRegular: {
        fontFamily: 'Lexend-Light',
        fontSize: 16,
        color: colors.black
    },
    textBold: {
        fontFamily: 'Lexend-Bold',
        fontSize: 16,
        color: colors.black
    }
});

export default main;