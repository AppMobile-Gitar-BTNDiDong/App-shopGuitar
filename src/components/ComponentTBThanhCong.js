import { View, Text, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';

const ComponentTBThanhCong = ({ navigation }) => {
    return (
        <View style={[styles.flex_1, styles.viewCenterTop, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]} >
            <StatusBar />
            {/*  */}
            <Text style={[, {
                fontWeight: '600',
                fontSize: 18,
                marginTop: 20,
                marginBottom: 10,
            }]}   >Successful</Text>

            <View style={[styles.flex_3, styles.viewCenter, {}]}  >
                <Image style={[, { width: 250, height: 250 }]} source={require('../images/bg_congrats.webp')} />
            </View>
            <View style={[styles.flex_4, styles.viewCenterTop, {}]}  >
                <View style={[styles.flex_1, styles.viewCenterTop, {}]}  >
                    <Text style={[, {
                        fontWeight: '600',
                        fontSize: 18,
                    }]}  >Successful order</Text>
                    <Text style={[, {
                        opacity: 0.6,
                        textAlign: 'center',
                        marginTop: 20,
                        fontSize: 13,
                        marginHorizontal: 20,
                    }]}  >You have successful order guitar, you can shop again or you can see your shipping</Text>

                </View>
                <View style={[styles.flex_1, {
                    justifyContent: 'space-evenly',
                }]}  >
                    <TouchableOpacity onPress={() => navigation.navigate('ComponenHome')}  >
                        <Text style={[, {
                            padding: 10,
                            backgroundColor: '#000',
                            color: '#fff',
                            fontWeight: '500',
                            paddingHorizontal: 80,
                            borderRadius: 10,
                        }]}  >Back to home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Đang cập nhật !!!')}  >
                        <Text style={[, {
                            padding: 10,
                            backgroundColor: '#fff',
                            fontWeight: '500',
                            paddingHorizontal: 80,
                            borderRadius: 10,
                            borderWidth: 0.5, 
                            borderColor: '#8c8c8c',
                        }]}  >Package status</Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentTBThanhCong')} /> */}

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentTBThanhCong;