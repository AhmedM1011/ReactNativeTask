import React, { useEffect } from 'react'
// import dynamicLinks from '@react-native-firebase/dynamic-links';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { HomeRoutes } from './src/navigation/Navigation';

const App = () => {
  console.log("App running");

  // const HandleDeepLinking = () => {
  //   const { navigate } = useNavigation()
  //   const handleDynamicLinks = async (link) => {
  //     console.log('Foreground link handling:', link)
  //     let productId = link.url.split('=').pop()
  //     console.log('productId:', productId,)
  //     navigate('ProductDetail', { productId: productId })
  //   }
  //   useEffect(() => {
  //     const unsubscribe = dynamicLinks().onLink(handleDynamicLinks)
  //     return () => unsubscribe()
  //   }, [])

  //   return null
  // }

  return (

    <NavigationContainer>
      {/* <HandleDeepLinking /> */ }
      <HomeRoutes />
    </NavigationContainer>
  )
}

export default App