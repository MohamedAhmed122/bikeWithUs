import React, { useState } from 'react';
import { Button, FlatList, Modal, TouchableWithoutFeedback, View, Text } from 'react-native';

// import { Text } from 'react-native-paper';
import { FontAwesome6 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { PickerItem } from './PickerItem';
import { PickerItemType } from '../../types/common';
import styles from './styles';
import { theme } from '../../theme';

interface Props {
  items: Array<PickerItemType>;
  selectedItems: Array<PickerItemType> | []; // Change to array of selected items
  setSelectedItems(items: Array<PickerItemType>): void; // Function to set selected items
  placeholder: string;
  inverted?: boolean;
}

export const AppPicker: React.FC<Props> = ({
  items,
  selectedItems,
  setSelectedItems,
  placeholder,
  inverted = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleItemPress = (item: PickerItemType) => {
    // Toggle selection of the item
    const isSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);
    if (isSelected) {
      const updatedItems = selectedItems.filter((selectedItem) => selectedItem.id !== item.id);
      setSelectedItems(updatedItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.pickerContainer}>
          <FontAwesome6 name="user-circle" size={24} color="gray" />

          <View style={styles.colorInputContainer}>
            <Text style={styles.pickerText}>
              {selectedItems?.length > 0
                ? selectedItems?.map((item) => item.label).join(', ')
                : placeholder}
            </Text>
            {inverted && (
              <View
                style={[
                  styles.colorView,
                  {
                    backgroundColor:
                      selectedItems?.length > 0 ? selectedItems[0]?.color : theme.colors.background,
                  },
                ]}
              />
            )}
          </View>
          <Entypo name="chevron-down" size={24} color="gray" />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={{ marginTop: 20 }}>
            <Button title="close" onPress={() => setModalVisible(false)} />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                color={item.color}
                image={item.image}
                // @ts-expect-error
                icon={item.icon}
                selected={selectedItems?.some((selectedItem) => selectedItem.id === item.id)}
                onPress={() => handleItemPress(item)}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
};
