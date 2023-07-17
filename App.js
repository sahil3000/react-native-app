import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import User from './components/User';
import InputForm from './components/InputForm';
import UsingFlatList from './components/listing/UsingFlatList';
import CustomListing from './components/listing/CustomListing';
import DynamicGrid from './components/grid/DynamicGrid';
import ResponseDesign from './components/grid/ResponseDesign';

export default function App() {
  return (
    <>
      {/* <User/> */}
      {/* <InputForm/> */}

      {/* listing */}
      {/* <UsingFlatList/> */}
      {/* <CustomListing/> */}


      {/* grid */}
      {/* <DynamicGrid/> */}
      <ResponseDesign/>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 40
//   },
// });
