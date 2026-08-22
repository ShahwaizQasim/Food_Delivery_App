import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodDeliveryScreen from '../screens/FoodDeliveryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderScreen from '../screens/OrderScreen';
import Footer from '../components/layout/Footer';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            tabBar={(props) => <Footer {...props} />} // React Navigation ko batayein ke yeh aapka custom footer hai
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name="Home" component={FoodDeliveryScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Order" component={OrderScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator