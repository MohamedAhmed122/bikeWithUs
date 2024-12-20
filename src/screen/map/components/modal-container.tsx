import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import React from 'react';
import { Portal, Modal } from 'react-native-paper';
import { AppButton } from '../../../common/app-button';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../../theme';

type Props = {
  modalStyle?: StyleProp<ViewStyle>;
  title: string;
  onClose(): void;
  visible: boolean;
  onSubmitModal?(): void;
  children: JSX.Element;
};

export default function ModalContainer({
  modalStyle,
  title,
  onClose,
  children,
  visible,
  onSubmitModal,
}: Props) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={[styles.modalContainer, modalStyle]}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{title}</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="cancel" size={24} color={theme.colors.darkGray} />
          </Pressable>
        </View>
        <>{children}</>
        {onSubmitModal && <AppButton title="Submit" onPress={onSubmitModal} />}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 14,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 19,
  },
  modalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
