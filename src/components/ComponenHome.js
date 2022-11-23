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

const ComponenHome = ({ navigation }) => {

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

    //ham thay doi so pice
    const setPriceString = (val) => {
        let str = '';
        let a = val.toString();
        let x = 0;
        if (a.length > 3) {
            let i = 0;
            for (var key of a) {
                if ((a.length - i < 2)) {
                    str += key + "";
                    continue
                }

                switch (a.length % 3) {
                    case 1:
                        x++;
                        if (x == 1) {
                            str += key + ",";
                        }
                        else {
                            str += key + "";
                        }

                        if (x == 3) {
                            x = 0;
                        }
                        break;
                    case 2:
                        x++;
                        if (x == 2) {
                            str += key + ",";
                        }
                        else {
                            str += key + "";
                        }

                        if (x == 3) {
                            x = 0;
                        }
                        break;
                    case 0:
                        x++;
                        if (x == 3) {
                            str += key + ",";
                        }
                        else {
                            str += key + "";
                        }

                        if (x == 3) {
                            x = 0;
                        }
                        break;

                    default:
                        str += key;
                        break;
                }
                i++;
            }
        }

        return str;
    }
    //
    const renderGuitar = ({ item }) => {
        let str_price = setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));

        // call detail Item
        const getCallDetail = () => {
            navigation.navigate('ComponentDetail', { item , z_index:1});
        }

        return (
            <View style={[, {
                width: 160,
                minHeight: 200,
                backgroundColor: '#fff',
                borderRadius: 10,
                paddingTop: 20,
                alignItems: 'center',
                marginRight: 15,
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

    /**
     * render item cho flash sale
     */
    const renderItemSale = ({ item }) => {

        let str_priceSale = setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));
        let str_price = setPriceString(Math.floor(item.price));

        // call detail Item
        const getCallDetail = () => {
            navigation.navigate('ComponentDetail', { item: item, z_index:1 });
        }
        //

        if (item.sale < 15) {
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
                <Image style={[, { width: 110, height: 110 }]} source={{ uri: item.img }} />
                <View style={[styles.flex_1, { marginVertical: 5 }]} >
                    <TouchableOpacity onPress={() => getCallDetail()}>
                        <Text style={[, { fontWeight: 'bold', fontSize: 15 }]}  >{item.name}</Text>
                    </TouchableOpacity>
                    <Text style={[, { textDecorationLine: 'line-through', opacity: 0.5, marginTop: 5, }]} >$ {str_price}</Text>
                    <View style={[styles.row, {}]} >
                        <Text style={[, { color: color.color_main, fontWeight: 'bold' }]} >$ {str_priceSale}</Text>
                        <Text style={[, { fontSize: 11, marginTop: 2, }]} > ( {item.sale}% ) </Text>
                    </View>
                    <View style={[styles.row, { alignItems: 'center', }]} >
                        <IconMaterialCommunityIcons style={[, {}]} name='fire' size={18} color={"#ff4747"} />
                        <Text style={[styles.flex_1, { fontSize: 12 }]} >{spConlai()} products left</Text>
                        <TouchableOpacity style={[, {}]} >
                            <Text style={[, { backgroundColor: '#000', color: '#fff', padding: 10, paddingHorizontal: 18, borderRadius: 10, marginRight: 5 }]} >Buy</Text>
                        </TouchableOpacity>
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
            {/*  */}
            <View style={[styles.row, {
                marginTop: 5,
                alignItems: 'center',
            }]}  >
                <View style={[styles.row, styles.flex_1, {
                    alignItems: 'center',
                    backgroundColor: '#f9f9f9',
                    borderRadius: 12,
                }]}  >
                    <IconFontAwesome style={[, { padding: 8, paddingHorizontal: 10, margin: 5, backgroundColor: '#fff', borderRadius: 20 }]} name='search' size={20} color='#000' />
                    <TextInput style={[styles.flex_1, { padding: 10, fontSize: 15, }]} placeholder='Search your guitar' />
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('ComponentCart')}}>
                    <IconMaterialCommunityIcons style={[, {
                        marginLeft: 18,
                        padding: 8, backgroundColor: '#fff',
                        borderRadius: 20,
                    }]} name='cart-variant' size={22} color='#000' />
                </TouchableOpacity>
                <View style={[, {
                    padding: 5,
                    backgroundColor: '#f00',
                    borderRadius: 5,

                    position: 'absolute',
                    top: 7,
                    right: 2,
                }]}  >

                </View>
            </View>


            {/*  */}
            <View style={[, {
                // backgroundColor:'#0ff',
                marginTop: 15,
            }]} >
                <View style={[styles.row, {
                    justifyContent: 'space-between',
                    marginVertical: 5
                }]} >
                    <Text style={[, { fontSize: 16, fontWeight: 'bold', }]} >Out Product</Text>
                    <Text style={[, { fontSize: 12, color: color.color_main, }]} >See All</Text>
                </View>

                {/* Chưa xong - them flatList */}
                <View style={[styles.row, {
                    alignItems: 'center',
                    marginTop: 12,
                }]} >
                    <Text style={[styles.listProduct, styles.listProduct1, {}]} >All</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Electric guitar</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Acoustic guitar</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Guitar classic</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >All</Text>
                </View>
            </View>

            {/* list item */}
            <View style={[styles.row, {
                marginTop: 20,
            }]} >
                {/* item */}
                {/* <View style={[, {
                    width: 160,
                    minHeight: 200,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    paddingTop: 20,
                    alignItems: 'center',
                    marginRight:15,
                }]} >
                    <Image style={[, { width: 150, height: 150, }]} source={{ uri: z_item.img }} />
                    <View style={[, { padding: 10 }]}  >
                        <Text style={[, {
                            fontSize: 12,
                            fontWeight: 'bold',
                        }]} >{z_item.name}</Text>
                        <Text style={[, {
                            fontSize: 13,
                            color: color.color_main,
                            marginTop: 10,
                        }]} >$ {z_item.price}</Text>
                    </View>

                    <TouchableOpacity style={[, {
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }]} 
                    
                    >
                        <IconMaterialCommunityIcons name='heart' size={25} color='#f00' />
                    </TouchableOpacity>
                </View> */}

                <FlatList
                    horizontal={true}
                    data={dbGuitar}
                    keyExtractor={item => item.id}
                    renderItem={renderGuitar}
                />

            </View>

            {/*  */}
            <View style={[styles.flex_1, {
                marginTop: 20,
            }]} >
                <View style={[styles.row, {
                    alignItems: 'center',
                    marginBottom: 15,
                }]} >
                    {/* Chua xong can chayj tgian */}
                    <Text style={[, { fontWeight: 'bold', marginRight: 15 }]} >Flash Sale</Text>
                    <Text style={[, { padding: 5, paddingHorizontal: 7, backgroundColor: color.color_main, marginRight: 5, borderRadius: 10, }]} >01</Text>
                    <Text style={[, { padding: 5, paddingHorizontal: 7, backgroundColor: color.color_main, marginRight: 5, borderRadius: 10, }]} >24</Text>
                    <Text style={[, { padding: 5, paddingHorizontal: 7, backgroundColor: color.color_main, marginRight: 5, borderRadius: 10, }]} >59</Text>
                    <Text style={[styles.flex_1, { textAlign: 'right', fontSize: 12, color: color.color_main }]} >See All</Text>
                </View>

                {/* <View style={[styles.row, {
                    backgroundColor: '#fff',
                    padding: 5,
                    borderRadius: 10,
                    alignItems: 'center',
                    marginTop: 15,
                }]} >
                    <Image style={[, { width: 110, height: 110 }]} source={{ uri: z_item.img }} />
                    <View style={[styles.flex_1, {}]} >
                        <Text style={[, { fontWeight: 'bold', fontSize: 15 }]}  >{z_item.name}</Text>
                        <Text style={[, { textDecorationLine: 'line-through', opacity: 0.5, marginTop: 5, }]} >$ {z_item.price}</Text>
                        <View style={[styles.row, {}]} >
                            <Text style={[, { color: color.color_main, fontWeight: 'bold' }]} >$ {z_item.price - (z_item.price * z_item.sale / 100)}</Text>
                            <Text style={[, { fontSize: 11, marginTop: 2, }]} > ( {z_item.sale}% ) </Text>
                        </View>
                        <View style={[styles.row, { alignItems: 'center', }]} >
                            <IconMaterialCommunityIcons style={[, {}]} name='fire' size={18} color={"#ff4747"} />
                            <Text style={[styles.flex_1, { fontSize: 12 }]} >{spConlai()} products left</Text>
                            <TouchableOpacity style={[, {}]} >
                                <Text style={[, { backgroundColor: '#000', color: '#fff', padding: 10, paddingHorizontal: 18, borderRadius: 10, marginRight: 5 }]} >Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
                <FlatList
                    data={dbGuitar}
                    keyExtractor={item => item.id}
                    renderItem={renderItemSale}
                />

            </View>

            <View style={[styles.row, {
                backgroundColor: '#000',
                marginTop: 5,
                borderRadius: 10,
                justifyContent: 'space-around'

            }]}  >
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    >
                    <View style={styleMenuBarStyle(1)}></View>
                    <IconMaterialCommunityIcons name={styleMenuBarName === 1 ? 'home' : 'home-outline'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    
                    onPress={() => {navigation.navigate('ComponentFavourite')}}
                >
                    <View style={styleMenuBarStyle(2)}></View>
                    <IconFontAwesome name={styleMenuBarName === 2 ? 'heart' : 'heart-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    >
                    <View style={styleMenuBarStyle(3)}></View>
                    <IconAntDesign name={styleMenuBarName === 3 ? 'downsquare' : 'down-square-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
                <TouchableOpacity style={[, { padding: 8, paddingHorizontal: 10, alignItems: 'center' }]}    
                    onPress={() => {navigation.navigate('ComponentProfile')}}
                >
                    <View style={styleMenuBarStyle(4)}></View>
                    <IconFontAwesome name={styleMenuBarName === 4 ? 'user' : 'user-o'} size={25} color={'#eee'} />
                </TouchableOpacity>
            </View>


        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponenHome;