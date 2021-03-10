import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import BlankScreen19213476Navigator from '../features/BlankScreen19213476/navigator';
import ArticleList213459Navigator from '../features/ArticleList213459/navigator';
import ArticleList213458Navigator from '../features/ArticleList213458/navigator';
import ArticleList213457Navigator from '../features/ArticleList213457/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
BlankScreen19213476: { screen: BlankScreen19213476Navigator },
ArticleList213459: { screen: ArticleList213459Navigator },
ArticleList213458: { screen: ArticleList213458Navigator },
ArticleList213457: { screen: ArticleList213457Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
