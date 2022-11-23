import { View, Text, Button, StatusBar, TextInput, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconFoundation from 'react-native-vector-icons/Foundation'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';
import data from '../database/data';
import dataServer from '../database/dataServer';

const ComponentFavourite = ({ navigation }) => {

    //
    const [dbGuitar, setDbGuitar] = useState([]);

    //
    let { z_item, listItem } = data;

    let spConlai = () => {
        return Math.floor(Math.random() * (100 - 50)) + 50;
    };

    //
    useEffect(() => {
        setDbGuitar(listItem)
    // let listData = dataServer.findAll();
    // console.log("🚀 ~ file: ComponenHome.js ~ line 21 ~ ComponenHome ~ listData", listData)


    }, [])

    /**
     * render item cho favourite
     */
    const renderItemFavourite = ({ item }) => {

        // let str_priceSale = setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));
        // let str_price = setPriceString(Math.floor(item.price));

        // call detail Item
        const getCallDetail = () => {
            navigation.navigate('ComponentDetail', { item: item });
        }
        //

        if (item.favourite == false) {
            return (
                <View></View>
            )
        }

        return (
            <View style={[styles.row, {
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 10,
                alignItems: 'center',
                marginBottom: 15,
            }]} >
                <View style={{flexDirection: 'column'}}>
                    <Image style={[, { width: 110, height: 110 }]} source={{ uri: item.img }} />
                    <View style={{marginVertical: 5, flexDirection:'column' }} >
                        <TouchableOpacity onPress={() => getCallDetail()}>
                            <Text style={[, { fontWeight: 'bold', fontSize: 13 }]}  >{item.name}</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[, { opacity: 0.5, marginTop: 5, color: 'brown' }]} >$ {item.price}</Text>
                            <TouchableOpacity style={[, {
                            position: 'absolute',
                            top: 10,
                            right: 10,
                        }]}>
                    <IconMaterialCommunityIcons name={item.favourite ? 'heart' : 'heart-outline'} size={25} color={item.favourite ? '#f00' : '#000'} />
                </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
           
        )
    }

    // menu bar
    let styleMenuBarName = 1;
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
                marginTop: 20,
                width: 150,
            }]} >

                <FlatList
                    // columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    // contentContainerStyle={{
                    //   marginTop: 10,
                    //   paddingBottom: 50,
                    // }}
                    // numColumns={2}
                    data={dbGuitar}
                    keyExtractor={item => item.id}
                    renderItem={renderItemFavourite}
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
                onPress={() => {navigation.navigate('ComponentProfile')}}>
                    <View style={styleMenuBarStyle(4)}></View>
                    <IconFontAwesome name={styleMenuBarName === 4 ? 'user' : 'user-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default ComponentFavourite;