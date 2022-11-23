import { View, Text, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import styles from '../themes/styles';
import color from '../themes/color';

const ComponentProfile = ({ navigation }) => {
    // menu bar
    let styleMenuBarName = 4;
    // let styleMenuBarStyle = styles.menuClick;
    let styleMenuBarStyle = (val) => {
        if (val === styleMenuBarName) {
            return styles.menuClick;
        }
        return null;
    };

    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]} >
            <StatusBar />
            {/*  */}
            <View style={[styles.row, { marginTop: 5, alignItems: 'center', marginBottom: 10, }]} >
                <TouchableOpacity onPress={() => { navigation.navigate('ComponenHome') }}>
                    <IconFontAwesome style={[, { padding: 5, paddingHorizontal: 12, backgroundColor: '#fff', borderRadius: 20, }]} name='angle-left' size={22} color={'#000'} />
                </TouchableOpacity>
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: 'bold', fontSize: 20 }]} >Profile</Text>
                <TouchableOpacity >
                    <Ionicons style={[, { padding: 5, paddingHorizontal: 12, backgroundColor: '#fff', borderRadius: 20, }]} name="notifications-outline" size={22} color={'#000'} />
                </TouchableOpacity>
            </View>
            {/*  */}
            <View style={{ padding: 15, alignItems: 'center', flexDirection: "column" }}>
                <Image source={require("../images/img_scr12_user.png")} style={{ height: 85, width: 85, borderRadius: 15, }} />
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Jimmy</Text>
                <Text style={{ color: "lightgray", fontWeight: 'bold' }}>jimmy@gmail.com</Text>

            </View>
            {/*  */}
            <View style={[styles.flex_1, { marginTop: 20, }]}  >
                <TouchableOpacity style={[styles.row, {
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                >
                    <MaterialCommunityIcons style={{ marginLeft: 20 }} name="order-bool-descending" size={30} color="black" />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginLeft: 15,
                            fontSize: 17
                        }]}   >Order History</Text>
                    </View>
                    <IconFontAwesome style={[, { marginRight: 10, }]} name='angle-right' size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 2 */}
                <TouchableOpacity style={[styles.row, {
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                >
                    <Ionicons style={{ marginLeft: 20 }} name="notifications-outline" size={30} color="black" />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginLeft: 15,
                            fontSize: 17
                        }]}   >Notification settings</Text>
                    </View>
                    <IconFontAwesome style={[, { marginRight: 10, }]} name='angle-right' size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 3  */}
                <TouchableOpacity style={[styles.row, {
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                >
                    <Ionicons style={{ marginLeft: 20 }} name="settings-outline" size={30} color="black" />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginLeft: 15,
                            fontSize: 17
                        }]}   >Account settings</Text>
                    </View>
                    <IconFontAwesome style={[, { marginRight: 10, }]} name='angle-right' size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 4 */}
                <TouchableOpacity style={[styles.row, {
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                >
                    <Ionicons style={{ marginLeft: 20 }} name="chatbubble-ellipses-outline" size={30} color="black" />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginLeft: 15,
                            fontSize: 17
                        }]}   >FAQ</Text>
                    </View>
                    <IconFontAwesome style={[, { marginRight: 10, }]} name='angle-right' size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 5 */}
                <TouchableOpacity style={[styles.row, {
                    height: 60,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                >
                    <Ionicons style={{ marginLeft: 20 }} name="power" size={30} color="black" />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginLeft: 15,
                            fontSize: 17
                        }]}   >Logout</Text>
                    </View>
                    <IconFontAwesome style={[, { marginRight: 10, }]} name='angle-right' size={25} color={'#000'} />
                </TouchableOpacity>
            </View>

            {/*  */}

            <View style={[styles.row, {
                backgroundColor: '#000',
                marginTop: 5,
                borderRadius: 10,
                justifyContent: 'space-around'

            }]}  >
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}
                    onPress={() => { navigation.navigate('ComponenHome') }}  >
                    <View style={styleMenuBarStyle(1)}></View>
                    <IconMaterialCommunityIcons name={styleMenuBarName === 1 ? 'home' : 'home-outline'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}
                    onPress={() => { navigation.navigate('ComponentFavourite') }}
                >
                    <View style={styleMenuBarStyle(2)}></View>
                    <IconFontAwesome name={styleMenuBarName === 2 ? 'heart' : 'heart-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}
                    onPress={() => { navigation.navigate('ComponentContactUs') }}
                >
                    <View style={styleMenuBarStyle(3)}></View>
                    <IconAntDesign name={styleMenuBarName === 3 ? 'downsquare' : 'down-square-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}
                    onPress={() => { navigation.navigate('ComponentProfile') }}
                >
                    <View style={styleMenuBarStyle(4)}></View>
                    <IconFontAwesome name={styleMenuBarName === 4 ? 'user' : 'user-o'} size={26} color={'#eee'} />
                </TouchableOpacity>
            </View>




            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentAddress')} /> */}

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentProfile;