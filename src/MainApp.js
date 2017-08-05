import React from 'react';
import { StyleSheet, Button, View, Alert} from 'react-native';

const MainApp = () => (
    <View style={styles.container}>
        <Button 
            style={styles.normalText} 
            title='Click Me'
            onPress={onButtonPress} />
    </View>
);

//Showing Alert on Button Press 
function onButtonPress(){
    alert('Button pressed!');
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    normalText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

export default MainApp;