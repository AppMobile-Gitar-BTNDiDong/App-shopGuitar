import { View, Text, Button, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'

import styles from '../themes/styles';
import color from '../themes/color';
import data from '../database/data'

const ComponentContactUs = ({ navigation }) => {

    // data mau
    let z_item = {
        id: 19508981,
        name: 'Nguyễn văn Hoàng',
        email: 'hoangkc35@gmail.com'
    }
    let { listContactUs } = data;

    const [listUser, setListUser] = useState([])

    // 
    useEffect(() => {
        setListUser(listContactUs);

    }, [])


    /**
     *  render Item user
     */
    const renderItem = ({ item }) => {
        return (
            <View style={[, styles.row, {
                alignItems: 'center',
                marginVertical: 10,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingVertical: 10,
            }]}  >
                <Image style={[, { width: 100, height: 100, borderRadius: 10, }]} source={require('../images/img_scr13_avartar.png')} />
                <View style={[styles.flex_1, { marginLeft: 10, height: 100, justifyContent: 'space-evenly', }]} >
                    <Text  style={[  ,{fontWeight: 'bold'}]} >{item.id}</Text>
                    <Text  style={[  ,{fontWeight: 'bold'}]} >{item.name}</Text>
                    { item.email === "" ? "" :  <Text  style={[  ,{fontWeight: 'bold'}]} >{item.email}</Text>}
                </View>
            </View>
        )
    }

    // menu bar
    let styleMenuBarName = 3;
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

                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: 'bold', fontSize: 20 }]} >Contact Us</Text>

            </View>
            <View style={[styles.row, { height: 20, justifyContent: 'center' }]} >
                <Text  >Bài tập nhóm di động nâng cao</Text>
                <Text style={[, { fontWeight: 'bold' }]} > - thầy Tiến</Text>
            </View>

            {/*  */}
            <View style={[styles.flex_1, { margin: 20, }]}   >

                {/* <View style={[styles.flex_1, styles.row, {
                    alignItems: 'center',
                    marginVertical: 10,
                    paddingHorizontal: 10,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                }]}  >
                    <Image style={[, { width: 100, height: 100, borderRadius: 10, }]} source={require('../images/img_scr13_avartar.png')} />
                    <View style={[styles.flex_1, { marginLeft: 10, height: 100, justifyContent: 'space-evenly', }]} >
                        <Text>{z_item.id}</Text>
                        <Text>{z_item.name}</Text>
                        <Text>{z_item.email}</Text>
                    </View>
                </View> */}

                <FlatList data={listUser}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />


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

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentContactUs;