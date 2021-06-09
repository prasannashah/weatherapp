import { Dimensions, StyleSheet } from 'react-native';
import Constant from '../../common/Constants.js';
const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashTitle: {
        color: Constant.COLOR.GREEN,
        fontSize: 40,
        fontFamily: 'Roboto-Medium'
    },
});

export default styles;