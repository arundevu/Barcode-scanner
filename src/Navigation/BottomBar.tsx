import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping,faBarcode } from "@fortawesome/free-solid-svg-icons";
import Barcode from "../Page/BarCode";
import Cart from "../Page/Cart";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
const BottomBar=()=>{
    const Tab = createMaterialBottomTabNavigator();
    const bottombarDatas = [
      { iconName: "Home", icon: faBarcode, screenName: Barcode },
      { iconName: "Cart", icon: faCartShopping, screenName: Cart },
     
    ];
    const product = useSelector((state: any) => {
      return state.data.product;
});
    return(
      <NavigationContainer >

        <Tab.Navigator
        initialRouteName="Home"
        activeColor={'white'}
        barStyle={{ backgroundColor: 'rgba(0, 60, 49, 1)' }}
        labeled={false}
      >
        {bottombarDatas.map((res, i) => {
          return (
            <Tab.Screen
              key={i}
              name={res.iconName}
              component={res.screenName}
              options={{
               tabBarBadge: res.iconName == 'Cart' && product.length,
                tabBarLabel: "",
                tabBarIcon: ({ focused }) => (
                  <FontAwesomeIcon
                    icon={res.icon}
                    size={24}
                    // color={focused ? COLORS.yellow01 : COLORS.light}
                    color={'yellow'}
                  />
                ),
              }}
             
            />

          );
        })}
      </Tab.Navigator>
      </NavigationContainer>
    )
}

export default BottomBar;