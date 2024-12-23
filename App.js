import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import { useState } from 'react';
import GoalItems from './components/GoalItems';

export default function App() {
  const [totalTasks, setTotalTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const modalHandler = (boolState) => {
    setModalVisible(boolState);
  };

  const cancelHandler = (state) => {
    modalHandler(state);
  };

  const taskHandler = (enteredTask) => {
    setTotalTasks((currentTasks) => {
      return [...currentTasks, enteredTask];
    });
  };

  const deleteTaskHandler = (indexToDelete) => {
    setTotalTasks((currentTasks) => {
      return currentTasks.filter((_, index) => index !== indexToDelete);
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/add-task.png')} />
      <Button
        title="Add a New Task"
        onPress={() => modalHandler(true)}
        color="#4CAF50"
      />
      {modalVisible && (
        <GoalInput
          visible={modalVisible}
          cancelHandler={cancelHandler}
          modalHandler={modalHandler}
          taskHandler={taskHandler}
        />
      )}

      <View style={styles.listContainer}>
        <FlatList
          data={totalTasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => (
            <GoalItems
              text={itemData.item}
              index={itemData.index}
              deleteTaskHandler={deleteTaskHandler}
            />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FDF6E3',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 20,
  },
});
