import { Tabs } from "expo-router/tabs";
import { Text, Image } from "@gluestack-ui/themed";
import { StyleSheet, View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };


const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "home-outline";
              break;
            case "for-you":
              iconName = "document-text-outline";
              break;
            case "video":
              iconName = "videocam-outline";
              break;
            case "profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text mb="$2" color={focused ? "$black" : color} fontSize="$sm">
              {children}
            </Text>
          );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", ...noHead, 
        tabBarIcon: ({focused,color}) => {
            return (
              <Image
                w="$6"
                h="$6"
                alt="Search Icon"
                role="img"
                source={require('../home2.png')}
              />
            );
      }, }} />
      {/* <Tabs.Screen name="for-you" options={{ title: "For You", ...noHead }} /> */}
      <Tabs.Screen
          name="for-you"
          title="For You"
          options={{
            // title: 'For You',
            tabBarIcon: ({focused,color}) => {
              return (
                <Image
                  w="$6"
                  h="$6"
                  alt="Search Icon"
                  role="img"
                  source={require('../booksaved.png')}
                />
              );
            },
          }}
        />
      <Tabs.Screen name="video" options={{ title: "Video", ...noHead, 
        tabBarIcon: ({focused,color}) => {
          return (
            <Image
              w="$6"
              h="$6"
              alt="Search Icon"
              role="img"
              source={require('../edit.png')}
            />
          );
          },
      }} />
      <Tabs.Screen name="create" options={{ title: "Create", ...noHead,
        tabBarIcon: ({focused,color}) => {
          return (
            <Image
              w="$6"
              h="$6"
              alt="Search Icon"
              role="img"
              source={require('../Vector.png')}
            />
          );
          },
      }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", ...noHead }} />
    </Tabs>
  );
};

export default TabsLayout;
