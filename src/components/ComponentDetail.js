import { View, Text, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';
import xuly from '../config/xuly';

const ComponentDetail = ({ route, navigation }) => {
    let { item, z_index } = route.params;
        
    let str_price = xuly.setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));
// {  }

    //
    const callGoBack = () => {
        if (z_index === 1 ) {
            navigation.navigate('ComponenHome')
        }
        else if (z_index === 2) {
            navigation.navigate('ComponentFavourite')
        }
    }


    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]} >
            <StatusBar />
            {/*  */}
            <View style={[styles.row, {
                alignItems: 'center',
                marginTop: 5,
            }]} >
                <TouchableOpacity onPress={() => callGoBack()}>
                    <IconFontAwesome style={[, {
                        padding: 5,
                        backgroundColor: '#fff',
                        paddingHorizontal: 13,
                        borderRadius: 20,
                    }]} name='angle-left' size={25} color={'#000'} />
                </TouchableOpacity>
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: 'bold' }]}   >Detail</Text>
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
                    top: 5,
                    right: 2,
                }]}  ></View>
            </View>

            {/*  */}
            <Image style={[, { width: '100%', height: 320, marginTop: 20, borderRadius: 15, }]} source={{ uri: item.img }} />

            {/*  */}
            <View style={[, {
                marginTop: 20,
            }]}  >
                <Text style={[, { color: '#ff6c5c' }]}  >Electric</Text>
                <Text style={[, { fontWeight: 'bold', fontSize: 20, width: '70%', marginTop: 7, }]}  >{item.name}</Text>
                <View style={[styles.row, { alignItems: 'center', marginTop: 10, }]}  >
                    <IconFontAwesome style={[, {}]} name='star' size={20} color={'#ffa200'} />
                    <Text style={[, { fontSize: 13, opacity: 0.5, color: '#000', fontWeight: '500' }]}  > 4,8 | 25k Sold</Text>
                </View>
                <View style={[styles.row, {
                    position: 'absolute',
                    top: 25,
                    right: 5,

                }]}>
                    <Text style={[, {
                        color: color.color_main,
                        fontSize: 25,
                    }]} >{str_price}</Text>
                    <Text style={{ color: color.color_main }}> $</Text>
                </View>
            </View>

            {/*  */}
            <View style={[, {
                marginTop: 20,
            }]}>
                <Text style={[, { fontWeight: 'bold' }]}>Product Description</Text>
                <Text style={[, { marginTop: 5, opacity: 0.6 }]}>
                    A guitar is a stringed musical instrument, traditionally made of wood and using animal gut, nylon or steel strings and distinguished from other stringed instruments by making and tuning. </Text>
            </View>

            {/*  */}
            <TouchableOpacity style={[styles.flex_1, styles.viewCenter, {}]}
                onPress={() => { alert('Thêm vào giỏ hàng thành công!!') }}
            >
                <Text style={[, {
                    padding: 10,
                    backgroundColor: '#000',
                    color: '#fff',
                    fontWeight: '600',
                    width: '80%',
                    textAlign: 'center',
                    borderRadius: 10,
                }]}  >Add to cart</Text>
            </TouchableOpacity>

            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentCart')} /> */}

        </View >
    )
}
///                        style={[  ,{}]}              ///


export default ComponentDetail;