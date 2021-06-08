import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center'
    },
    splashTitle: {
        color:'#00804A',
        fontSize:40,
        fontFamily:'Roboto-Medium'
    },
});

export default styles;