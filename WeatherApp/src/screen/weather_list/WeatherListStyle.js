import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        height: Dimensions.get('window').height,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;