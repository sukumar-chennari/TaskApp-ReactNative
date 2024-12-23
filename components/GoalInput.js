import { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

function GoalInput(props) {
  const [enteredTask, setEnteredTask] = useState('');
  const thisTaskHandler = () => {
    props.taskHandler(enteredTask);
    setEnteredTask('');
    props.modalHandler(false);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter the task to do"
          onChangeText={(currentTask) => {
            setEnteredTask(currentTask);
          }}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Task" onPress={thisTaskHandler} color="#4CAF50" />
          <Button
            title="Cancel"
            onPress={() => props.cancelHandler(false)}
            color="#F44336"
          />
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF9E5',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});
