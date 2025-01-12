import React from 'react';
import { Modal as RNModal, StyleSheet, View } from 'react-native';
import { cls } from './styles';

/**
 *
 * @param {{visible: boolean, onOpen?: () => void, children: any}} props
 * @returns
 */
const Modal = ({ children, visible, onOpen }) => {
  return (
    <RNModal visible={visible} onShow={onOpen} transparent animationType="fade">
      <View style={cls('absolute', 'w_full', 'h_full', styles.backdrop)} />
      {children}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Modal;
