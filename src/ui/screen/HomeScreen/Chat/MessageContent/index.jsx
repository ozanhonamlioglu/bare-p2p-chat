/**
 * In this component, we should avoid having states, instead children components should communicate through their refs.
 * The idea is prevent re-renderings as much as possible.
 */

import { View, Dimensions, StyleSheet } from 'react-native';
import React, { useCallback, useImperativeHandle, useMemo } from 'react';
import { cls } from 'ui/component/styles';
import MessageBubble from './MessageBubble';
import ScrollController from './ScrollController';
import useViewModel from './useViewModel';
import { DataProvider, LayoutProvider, RecyclerListView } from 'recyclerlistview';

const { width } = Dimensions.get('window');

/**
 *
 * @param {*} _ any
 * @param {import('react').ForwardedRef<{appendMessage: (msg: string, local: boolean) => void}>} ref
 * @returns
 */
const MessageContentRef = (_, ref) => {
  const {
    recyclerRef,
    scrollControllerRef,
    onScrollToBottom,
    handleScroll,
    messages,
    addNewMessage,
  } = useViewModel();

  useImperativeHandle(ref, () => ({
    appendMessage: addNewMessage,
  }));

  const dataProvider = useMemo(() => new DataProvider((r1, r2) => r1 !== r2), []);

  const renderItem = useCallback((_, item) => <MessageBubble data={item} />, []);

  const layoutProvider = useMemo(
    () =>
      new LayoutProvider(
        () => 0,
        (_, dim) => {
          dim.width = width;
          dim.height = 50;
        }
      ),
    []
  );

  return (
    <View style={cls('flex_1')}>
      <RecyclerListView
        layoutProvider={layoutProvider}
        dataProvider={dataProvider.cloneWithRows(messages)}
        rowRenderer={renderItem}
        style={styles.inverted}
        forceNonDeterministicRendering={true}
        onScroll={handleScroll}
        ref={recyclerRef}
      />
      <ScrollController ref={scrollControllerRef} onPress={onScrollToBottom} />
    </View>
  );
};

const styles = StyleSheet.create({
  inverted: {
    transform: [{ scaleY: -1 }],
  },
});

const MessageContent = React.forwardRef(MessageContentRef);
export default React.memo(MessageContent);
