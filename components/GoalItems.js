import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItems(props) {
  return (
    <View style={styles.task}>
      <Pressable
        android_ripple={{ color: '#DDD' }}
        onPress={() => props.deleteTaskHandler(props.index)}
      >
        <Text style={styles.text}> {props.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItems;

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});
