import { View, Text, Button, StatusBar, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';
import data from '../database/data';
import xuly from '../config/xuly';
import dataServer from '../database/dataServer';

const ComponentFavourite = ({ navigation }) => {

    //
    const [dbGuitar, setDbGuitar] = useState([]);

    //
    let { z_item, listItem } = data; // listData:  data ALL 

    //
    useEffect(() => {
        let db = []; // data Favourite

        listItem.forEach(item  => {
            if (item.favourite == true) {
                db.push(item)
            }
        })

        setDbGuitar(db)
    // let listData = dataServer.findAll();
    // console.log("🚀 ~ file: ComponenHome.js ~ line 21 ~ ComponenHome ~ listData", listData)

    }, [])

    /**
     * render item cho favourite
     */
    const renderItemFavourite = ({ item }) => {

        // let str_priceSale = setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));
        let str_price = xuly.setPriceString(Math.floor(item.price));

        // call detail Item
        const getCallDetail = () => {
            navigation.navigate('ComponentDetail', { item: item });
        }
        //

        return (
            <View style={[, {
                width: 150,
                minHeight: 200,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingTop: 20,
                alignItems: 'center',
                marginRight: 15,
                marginBottom: 15,
            }]} >
                <Image style={[, { width: 150, height: 150, }]} source={{ uri: item.img }} />
                <View style={[, { padding: 10, }]}  >
                    <TouchableOpacity onPress={() => getCallDetail()}>
                        <Text style={[, {
                            fontSize: 12,
                            fontWeight: 'bold',
                        }]} >{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={[, {
                        fontSize: 13,
                        color: color.color_main,
                        marginTop: 10,
                    }]} >$ {str_price}</Text>
                </View>

                <TouchableOpacity style={[, {
                    position: 'absolute',
                    top: 10,
                    right: 10,
                }]}

                >
                    <IconMaterialCommunityIcons name={item.favourite ? 'heart' : 'heart-outline'} size={25} color={item.favourite ? '#f00' : '#000'} />
                </TouchableOpacity>
            </View>
           
        )
    }

    // menu bar
    let styleMenuBarName = 2;
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
        }]}>
            <StatusBar />
            <View style={[styles.row, { marginTop: 5, alignItems: 'center', marginBottom: 10, }]} >
                <TouchableOpacity onPress={() => { navigation.navigate('ComponenHome') }}>
                    <IconFontAwesome style={[, { padding: 5, paddingHorizontal: 12, backgroundColor: '#fff', borderRadius: 20, }]} name='angle-left' size={22} color={'#000'} />
                </TouchableOpacity>
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: 'bold', fontSize: 20 }]} >Favourite</Text>
                <TouchableOpacity >
                </TouchableOpacity>
            </View>
            <View style={[styles.flex_1, {
                marginTop: 15,
                marginLeft: 5,
            }]} >

                <FlatList
                    data={dbGuitar}
                    keyExtractor={item => item.id}
                    renderItem={renderItemFavourite}
                    numColumns={2}
                />

            </View>

            <View style={[styles.row, {
                backgroundColor: '#000',
                marginTop: 5,
                borderRadius: 10,
                justifyContent: 'space-around',

            }]}  >
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}  
                onPress={() => {navigation.navigate('ComponenHome')}}  >
                    <View style={styleMenuBarStyle(1)}></View>
                    <IconMaterialCommunityIcons name={styleMenuBarName === 1 ? 'home' : 'home-outline'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    >
                    <View style={styleMenuBarStyle(2)}></View>
                    <IconFontAwesome name={styleMenuBarName === 2 ? 'heart' : 'heart-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    >
                    <View style={styleMenuBarStyle(3)}></View>
                    <IconAntDesign name={styleMenuBarName === 3 ? 'downsquare' : 'down-square-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity 
                style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    
                    onPress={() => {navigation.navigate('ComponentProfile')}}
                >
                    <View style={styleMenuBarStyle(4)}></View>
                    <IconFontAwesome name={styleMenuBarName === 4 ? 'user' : 'user-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default ComponentFavourite;