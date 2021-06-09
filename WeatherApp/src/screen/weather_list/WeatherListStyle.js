import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
    }, mainContainerProgress: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }, weatherItem: {
        height: 75,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, weatherItemColumn1: {
        justifyContent: 'space-between'
    }, weatherItemColumn2: {
        alignItems: 'center',
        justifyContent: 'center'
    }, city: {
        fontSize: 20,
        fontFamily: 'Roboto-Regular'
    }, weatherStatus: {
        fontSize: 13,
        fontFamily: 'Roboto-Regular'
    }, weatherTemp: {
        fontSize: 23,
        fontFamily: 'Roboto-Medium',
        marginEnd:5
    },weatherTemp1: {
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        marginEnd:10
    }, itemSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#edeceb"
    }
});

export default styles;