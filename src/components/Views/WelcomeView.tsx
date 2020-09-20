import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export type WelcomeViewProps = {
  onDone: () => void;
  renderItem: (item: any) => any;
  slides: any;
  onSkip: () => any;
};

const WelcomeView: React.FC<WelcomeViewProps> = ({
  onDone,
  renderItem,
  slides,
  onSkip,
}) => {
  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={renderItem}
        data={slides}
        onDone={onDone}
        showPrevButton={true}
        showSkipButton={true}
        onSkip={onSkip}
      />
    </View>
  );
};

export default WelcomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
