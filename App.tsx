import React from 'react';
import { View, Text } from 'react-native';
import { Button, LinearProgress } from '@rneui/themed';

const LinearProgressAPI: React.FunctionComponent = () => {
const [progress, setProgress] = React.useState(0);


// The issue is from LinearProgress, but it is the dependency we downloaded. 
// May want to refer to ProgressBarAndroid from https://github.com/react-native-progress-view/progress-bar-android
// to see how the progress prop accept float values.

React.useEffect(() => {
  let subs = true;
  if (progress < 1 && progress !== 0) {
    setTimeout(() => {
      if (subs) {
        setProgress(progress + 0.1);
      }
    }, 100);
  }
  return () => {
    subs = false;
  };
}, [progress]);

return (
  <View>
    <View
      style={{
        margin: 10,
      }}
    >
      <Text>Indeterminate Variant </Text>
      <LinearProgress style={{ marginVertical: 10 }} />
      <Text>Indeterminate Variant with color</Text>
      <LinearProgress style={{ marginVertical: 10 }} color="red" />
      <Text>Determinate Variant</Text>
      <LinearProgress
        style={{ marginVertical: 10 }}
        value={progress}
        variant="determinate"
      />

      <Button
        disabled={progress > 0}
        onPress={() => {
          setProgress(0.0001);
        }}
        title={'Start Progress'}
        containerStyle={{ margin: 10 }}
      />
      <Button
        disabled={progress === 0}
        onPress={() => {
          setProgress(0);
        }}
        title={'Restart'}
        containerStyle={{ margin: 10 }}
      />
    </View>
  </View>
);
};

export default LinearProgressAPI;