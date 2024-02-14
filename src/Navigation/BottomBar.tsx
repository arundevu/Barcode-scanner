import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping,faBarcode } from "@fortawesome/free-solid-svg-icons";
import Barcode from "../Page/BarCode";
import Cart from "../Page/Cart";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
{/* <FontAwesomeIcon icon={faCartShopping} /> */}
{/* <FontAwesomeIcon icon={faBarcode} /> */}
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
    )
}

export default BottomBar;