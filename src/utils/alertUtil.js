
import {Alert} from 'react-native';

function showErrorAlert(message){
    setTimeout(() => {
      Alert.alert(
        "Error",
        message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }

  function showSuccessAlert(message){
    setTimeout(() => {
      Alert.alert(
        "Success",
        message,
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }

  function showConfirmDialog(message,onConfirmPress, onCancelPress){
    setTimeout(() => {
      Alert.alert(
        "Confirmation",
        message,
        [
          { text: "Cancel", onPress: () => onCancelPress() },
          { text: "Confirm", onPress: () => onConfirmPress() }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }


export { showErrorAlert, showSuccessAlert, showConfirmDialog }
