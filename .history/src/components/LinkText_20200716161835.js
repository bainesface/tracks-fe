import React from 'react';
import { Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

const LinkText = () => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Spacer>
        <Text style={styles.navigationText}>
          Already have an account? Log in instead
        </Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default LinkText;
