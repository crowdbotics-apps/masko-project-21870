
import { Alert } from 'react-native';
import { translate }  from 'src/utils/translation';

function showErrorAlert(message){
    setTimeout(() => {
      Alert.alert(
        translate("ErrorPopUpHead") ,
        message,
        [
          { text: translate('PopUpOkButton') , onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }

  function showSuccessAlert(message){
    setTimeout(() => {
      Alert.alert(
        translate("SuccessPopUpHead") ,
        message,
        [
          { text: translate('PopUpOkButton'), onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }

  function showConfirmDialog(message,onConfirmPress, onCancelPress){
    setTimeout(() => {
      Alert.alert(
        translate('ConfirmPopUpHead'),
        message,
        [
          { text: translate('PopUpCancelButton') , onPress: () => onCancelPress() },
          { text: translate('PopUpConfirmButton'), onPress: () => onConfirmPress() }
        ],
        { cancelable: false }
      );
    }, 100);
    
  }


export { showErrorAlert, showSuccessAlert, showConfirmDialog }
