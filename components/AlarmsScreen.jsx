import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AlarmsScreen() {
  const colorScheme = useColorScheme();

  const [alarms, setAlarms] = useState([
    { id: '1', time: '07:00 AM' },
    { id: '2', time: '08:30 AM' },
  ]);

  const addAlarm = () => {
    const nextId = (alarms.length + 1).toString();
    setAlarms([...alarms, { id: nextId, time: 'New Alarm' }]);
  };

  const theme = {
    background: colorScheme === 'dark' ? '#051923' : '#00A6FB',
    card: colorScheme === 'dark' ? '#003554' : '#0582CA',
    text: colorScheme === 'dark' ? '#00A6FB' : '#003554',
    fab: '#006494',
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {alarms.length === 0 ? (
        <Text style={[styles.emptyText, { color: theme.text }]}>
          No alarms yet
        </Text>
      ) : (
        <FlatList
          data={alarms}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={[styles.alarmItem, { backgroundColor: theme.card }]}>
              <Text style={[styles.alarmText, { color: theme.text }]}>
                {item.time}
              </Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: theme.fab }]}
        onPress={addAlarm}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  emptyText: { textAlign: 'center', marginTop: 50, fontSize: 18 },
  alarmItem: {
    padding: 20,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  alarmText: { fontSize: 18 },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
});

export default AlarmsScreen;
