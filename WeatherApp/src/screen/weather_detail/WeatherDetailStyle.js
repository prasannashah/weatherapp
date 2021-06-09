import { Dimensions, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    }, smallText: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Roboto-Regular',
        marginTop: 10
    }, city: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Roboto-Bold'
    }, map: {
        width: Dimensions.get('window').width,
        height: '60%'
    }, weatherTemp: {
        fontSize: 30,
        fontFamily: 'Roboto-Medium',
        marginEnd: 5,
    }, tempView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    }
});

export default styles;