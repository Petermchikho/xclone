import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAuth } from '@clerk/clerk-expo'

const TabsLayout = () => {
    const insets = useSafeAreaInsets();
    const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href="/(auth)" />;
  return (
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "#657786",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#E1E8ED",
          height: 60 + insets.bottom,
          paddingTop: 8,
          paddingBottom: 2+insets.bottom,
        },
        headerShown: false,
        tabBarLabelStyle: { 
            fontSize: 12,
            fontWeight:"500"
        },
      }}
    >
        <Tabs.Screen 
        name="index" 
        options={{ 
            tabBarIcon: ({color,size}) => <Feather name="home" color={color} size={size} />,
            headerShown: false,
            title: '' 
        }} 
            />
        <Tabs.Screen 
        name="search" 
        options={{ 
            tabBarIcon: ({color,size}) => <Feather name="search" color={color} size={size} />,
            headerShown: false,
            title: '' 
        }} 
            />

        <Tabs.Screen 
        name="notifications" 
        options={{ 
            tabBarIcon: ({color,size}) => <Feather name="bell" color={color} size={size} />,
            headerShown: false,
            title: '' 
        }} 
            />
        <Tabs.Screen 
        name="messages" 
        options={{ 
            tabBarIcon: ({color,size}) => <Feather name="mail" color={color} size={size} />,
            headerShown: false,
            title: '' 
        }} 
            />
        <Tabs.Screen 
        name="profile" 
        options={{ 
            tabBarIcon: ({color,size}) => <Feather name="user" color={color} size={size} />,
            headerShown: false,
            title: '' 
        }} 
            />
    </Tabs>
    
  )
}

export default TabsLayout