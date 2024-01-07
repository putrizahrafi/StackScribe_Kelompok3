import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Button, Box } from 'native-base';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONTS } from "../constants";

const CobaCamera = ({ navigation }) => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
  
    useEffect(() => {
      (async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
        setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
      })();
    }, []);
  
    if (hasCameraPermission === undefined) {
      return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
      return <Text>Permission for camera not granted. Please change this in settings.</Text>
    }
  
    let takePic = async () => {
      let options = {
        quality: 1,
        base64: true,
        exif: false
      };
  
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(newPhoto);
    };
  
    if (photo) {
      let sharePic = () => {
        shareAsync(photo.uri).then(() => {
          setPhoto(undefined);
        });
      };
  
      let savePhoto = () => {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
          setPhoto(undefined);
        });
      };
  
      return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-around', width: '80%' }}>
          <Box alignItems="center">
            <Button onPress={sharePic}>Share</Button>
        </Box>
          {hasMediaLibraryPermission ? 
          <Box alignItems="center">
          <Button onPress={savePhoto}>Save</Button>
        </Box>
          : undefined}
          <Box alignItems="center">
            <Button onPress={() => setPhoto(undefined)}>Discard</Button>
        </Box>
          </View>
        </SafeAreaView>
      );
    }
  
    return (
      <Camera style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }} ref={cameraRef}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Box alignItems="center" marginBottom={10}>
            <MaterialIcons
            name="camera"
            size={80}
            color={COLORS.black}
            onPress={takePic} />
        </Box>
        </View>
        <StatusBar style="auto" />
      </Camera>
    );
  }

export default CobaCamera