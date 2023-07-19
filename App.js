import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import User from './components/User';
import InputForm from './components/InputForm';
import UsingFlatList from './components/listing/UsingFlatList';
import CustomListing from './components/listing/CustomListing';
import DynamicGrid from './components/grid/DynamicGrid';
import ResponseDesign from './components/grid/ResponseDesign';
import TouchableHighlight from './components/Buttons/TouchableHighlight';
import CustomRadioButton from './components/Buttons/CustomRadioButton';
import ActivtyInticatorExample from './components/activityInticator/ActivtyInticatorExample';
import ModalComponent from './components/modal/ModalComponent';
import StatusBarComponent from './components/statusBar/StatusBarComponent';
import PressableComponent from './components/Buttons/PressableComponent';
import CustomModal from './components/modal/CustomModal';

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
      {/* <ResponseDesign/> */}

      {/* button */}
      {/* <TouchableHighlight/> */}
      {/* <CustomRadioButton/> */}
      {/* <PressableComponent/> */}

      {/* loader */}
      {/* <ActivtyInticatorExample/> */}

      {/* modal */}
      {/* <ModalComponent/> */}
      <CustomModal/>

      {/* status bar */}
      {/* <StatusBarComponent/> */}

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
