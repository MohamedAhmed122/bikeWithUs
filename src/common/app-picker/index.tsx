import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { PickerItem } from './PickerItem';
import { PickerItemType } from '../../types/common';
import styles from './styles';

interface Props {
  items: Array<PickerItemType>;
  selectedItem: PickerItemType;
  setSelectedItem(item: PickerItemType): void;
  placeholder: string;
  inverted?: boolean;
}

export const AppPicker: React.FC<Props> = ({
  items,
  selectedItem,
  setSelectedItem,
  placeholder,
  inverted = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.pickerContainer}>
          <Entypo name="list" size={24} color="gray" />
          <View style={styles.colorInputContainer}>
            <Text style={styles.pickerText}>
              {selectedItem ? selectedItem.label : placeholder}
            </Text>
            {inverted && (
              <View
                style={[
                  styles.colorView,
                  { backgroundColor: selectedItem?.color },
                ]}
              />
            )}
          </View>
          <Entypo name="chevron-down" size={24} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            // horizontal={true}
            numColumns={4}
            contentContainerStyle={styles.listContainer}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                color={item.color}
                // @ts-expect-error
                icon={item.icon}
                onPress={() => {
                  setModalVisible(false);
                  setSelectedItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};
