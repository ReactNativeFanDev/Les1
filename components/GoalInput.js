import React from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setenteredGoalText] = React.useState('');

    function goalInputHandler(enteredText) {
        setenteredGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');
    }
    return(
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={{uri: 'https://cdn.pixabay.com/photo/2020/06/16/21/07/bluetooth-5307292_960_720.png'}}/>
                <TextInput 
                    style={styles.TextInput} 
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },

        TextInput: {
            padding: 16,
            width: '100%',
            borderColor: '#e4d0ff',
            backgroundColor: '#e4d0ff',
            color: '#120438',
            borderRadius: 6,
            borderWidth: 1,
        },
        image: {
            width: 100,
            height: 100,
            margin: 20,
        },

        buttonContainer: {
            flexDirection: 'row',
            marginTop: 16,
        },
            button: {
                width: 100,
                marginHorizontal: 8,
            }
});