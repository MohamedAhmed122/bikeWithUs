// import { Text, TouchableOpacity, View, StyleSheet, Permission } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import { Audio } from 'expo-av';
// import * as FileSystem from 'expo-file-system';
// import { FontAwesome } from '@expo/vector-icons';

// export default function App() {
//   const [recording, setRecording] = useState(null);
//   const [recordingStatus, setRecordingStatus] = useState('idle');
//   const [audioPermission, setAudioPermission] = useState(null);

//   useEffect(() => {
//     // Simply get recording permission upon first render
//     async function getPermission() {
//       await Audio.requestPermissionsAsync()
//         .then((permission: any) => {
//           console.log('Permission Granted: ' + permission.granted);
//           setAudioPermission(permission.granted);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     }

//     // Call function to get permission
//     getPermission();
//     // Cleanup upon first render
//     return () => {
//       if (recording) {
//         stopRecording();
//       }
//     };
//   }, []);

//   async function startRecording() {
//     try {
//       // needed for IoS
//       if (audioPermission) {
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: true,
//           playsInSilentModeIOS: true,
//         });
//       }

//       const newRecording = new Audio.Recording();
//       console.log('Starting Recording');
//     //   await newRecording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
//     await newRecording.prepareToRecordAsync(Audio.Recording)
//       await newRecording.startAsync();
//       setRecording(newRecording);
//       setRecordingStatus('recording');
//     } catch (error) {
//       console.error('Failed to start recording', error);
//     }
//   }

//   async function stopRecording() {
//     try {
//       if (recordingStatus === 'recording') {
//         console.log('Stopping Recording');
//         await recording.stopAndUnloadAsync();
//         const recordingUri = recording.getURI();

//         // Create a file name for the recording
//         const fileName = `recording-${Date.now()}.caf`;

//         // Move the recording to the new directory with the new file name
//         await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', {
//           intermediates: true,
//         });
//         await FileSystem.moveAsync({
//           from: recordingUri,
//           to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`,
//         });

//         // This is for simply playing the sound back
//         const playbackObject = new Audio.Sound();
//         await playbackObject.loadAsync({
//           uri: FileSystem.documentDirectory + 'recordings/' + `${fileName}`,
//         });
//         await playbackObject.playAsync();

//         // resert our states to record again
//         setRecording(null);
//         setRecordingStatus('stopped');
//       }
//     } catch (error) {
//       console.error('Failed to stop recording', error);
//     }
//   }

//   async function handleRecordButtonPress() {
//     if (recording) {
//       const audioUri = await stopRecording(recording);
//       if (audioUri) {
//         console.log('Saved audio file to', savedUri);
//       }
//     } else {
//       await startRecording();
//     }
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.button} onPress={handleRecordButtonPress}>
//         <FontAwesome name={recording ? 'stop-circle' : 'circle'} size={64} color="white" />
//       </TouchableOpacity>
//       <Text style={styles.recordingStatusText}>{`Recording status: ${recordingStatus}`}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: 128,
//     height: 128,
//     borderRadius: 64,
//     backgroundColor: 'red',
//   },
//   recordingStatusText: {
//     marginTop: 16,
//   },
// });

import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Recorder() {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  async function startRecording() {
    try {
      if (permissionResponse?.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording?.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording?.getURI();
    console.log('Recording stopped and stored at', uri);
  }

  return (
    <View style={styles.container}>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});