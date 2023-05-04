import React, {useState, useEffect, useRef} from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import type {PropsWithChildren} from 'react';

const BEHAVIOR = Platform.OS === 'ios' ? 'padding' : undefined;

type KeyboardAvoidingViewProps = PropsWithChildren<RNKeyboardAvoidingViewProps>;

const KeyboardAvoidingView = ({
  children,
  ...props
}: KeyboardAvoidingViewProps): JSX.Element => {
  const [offset, setOffset] = useState<number>(0);
  const mountedRef = useRef<boolean>(true);

  useEffect(() => {
    Navigation.constants().then(({statusBarHeight, topBarHeight}) => {
      if (mountedRef.current) {
        setOffset(
          Platform.OS === 'ios' ? topBarHeight : statusBarHeight + topBarHeight,
        );
      }
    });
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <RNKeyboardAvoidingView
      style={styles.root}
      keyboardVerticalOffset={offset}
      behavior={BEHAVIOR}
      {...props}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default KeyboardAvoidingView;
