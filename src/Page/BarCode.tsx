import React, { useState } from "react";
import { Camera } from "expo-camera";
import { View,StyleSheet, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
import CameraPermission from "../Component/Camerapermission";

const Barcode =()=>{
    const data = {name:'abc',price:'20',gst:'2%',qty:0}
    const [qrContent, setQrContent] = useState();
    const [hasPermission, setHasPermission] = useState<any>(null);
    const [scanned, setScanned] = useState(false);
    const [showScanner, setShowScanner] = useState(false);
    const[cart ,setCart] = useState<any>()
    
    const getCameraPermissions = async () => {
        setShowScanner(true)
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };
    const handleClose = async () => {
        setShowScanner(false)
        setScanned(false)
    };
    return(
        <View style={styles.container}>
       <View style={styles.qrContainer}>
          {!showScanner ? <View>
            <QRCode value={qrContent || undefined} size={200} /> 
            <Button title={"Scan"} onPress={getCameraPermissions} />
            </View> :
          <View style={styles.buttonContainer}>
            <CameraPermission scanned={scanned} setScanned={setScanned} setCart={setCart} cart={cart} setShowScanner={setShowScanner} />
            <View style={{marginBottom:20}}>
            <Button  title={"close"} onPress={handleClose} />
            </View>
          </View> }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      cameraStyle: {
        height: '100%',
      },
      cameraContainer: {
        height: '100%',
        width: '100%',
      },
      qrContainer: {
        width:'100%',
        height:'100%',

        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        marginTop: 20,
        height:'100%',
        backgroundColor:'rgba(0, 60, 49, 1)',
        width:'100%'
      },
    
})

export default Barcode;