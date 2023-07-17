import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setmodalIsVisible] = React.useState(false);
    const [courseGoals, setcourseGoals] = React.useState([]);

    function startAddGoalHandler() {
      setmodalIsVisible(true);
    }

    
    function endAddGoalHandler() {
      setmodalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
      setcourseGoals(currentcourseGoals => [
        ...currentcourseGoals, 
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      endAddGoalHandler();
    };

    function deleteGoalHandler(id) {
      setcourseGoals((currentcourseGoals) => {
        return currentcourseGoals.filter((goal) => goal.id !== id);
      })
    }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color="#a065ec" 
          onPress={startAddGoalHandler}
        />

        <GoalInput 
          visible={modalIsVisible} 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
        />


        <View style={styles.Lists}>

          <FlatList 
            data={courseGoals}  
            
            renderItem={(itemData) => {
              return (
                <GoalItem 
                  text={itemData.item.text} 
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 60,
  },
    Lists: {
      flex: 10,
    },
    goalItem: {
      margin: 8,
      padding: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    goalText: {
      color: 'white'
    },
});
