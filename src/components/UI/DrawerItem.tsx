import * as React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
export type DrawerItemProps = {
  title: string;
  focused?: boolean;
  iconName: string;
  iconColor: string;
  onPress: () => void;
  style?: any;
};

const DrawerItem: React.FC<DrawerItemProps> = ({
  title,
  focused,
  iconName,
  iconColor,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity style={{...styles.container, ...style}} onPress={onPress}>
      <Icon name={iconName} color={focused ? '#FFF' : iconColor} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 18,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
  },
});
