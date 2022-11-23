import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ComponentScreen1 from './src/components/ComponentScreen1';
import ComponentLogin from './src/components/ComponentLogin';
import ComponenHome from './src/components/ComponenHome';
import ComponentDetail from './src/components/ComponentDetail';
import ComponentCart from './src/components/ComponentCart';
import ComponentNhaGiaoHang from './src/components/ComponentNhaGiaoHang';
import ComponentAddress from './src/components/ComponentAddress';
import ComponentTBThanhCong from './src/components/ComponentTBThanhCong';
import ComponentFavourite from './src/components/ComponentFavourite';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ComponentScreen1" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="ComponentScreen1" component={ComponentScreen1} />
                <Stack.Screen name="ComponentLogin" component={ComponentLogin} />
                <Stack.Screen name="ComponenHome" component={ComponenHome} />
                <Stack.Screen name="ComponentDetail" component={ComponentDetail} />
                <Stack.Screen name="ComponentCart" component={ComponentCart} />
                <Stack.Screen name="ComponentNhaGiaoHang" component={ComponentNhaGiaoHang} />
                <Stack.Screen name="ComponentAddress" component={ComponentAddress} />
                <Stack.Screen name="ComponentTBThanhCong" component={ComponentTBThanhCong} />
                <Stack.Screen name="ComponentFavourite" component={ComponentFavourite} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


