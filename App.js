import React, { useState } from "react";
import { Button, View, Text, TextInput, Keyboard, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'moment';

const app = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(null);

  const showDatePicker = () => {
    Keyboard.dismiss();
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(Moment(date).format('DD-MM-YYYY'));
    hideDatePicker();
    Keyboard.dismiss();
  };

  return (
    <View>
      <Text style={{ marginTop: 50 }}></Text>
      <TouchableOpacity onPress={showDatePicker} >
        {/* <TextInput
          style={{}}
          value={date}
          placeholder={'Please input date'}
          editable={false}
        /> */}
        <Text>{date? date: 'Please input date'}</Text>
      </TouchableOpacity>

      {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default app;