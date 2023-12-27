import * as React from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/icons/House.svg';
import SearchIcon from '../assets/icons/search.svg';
import BuilderIcon from '../assets/icons/buildcircle.svg';
import ProfileIcon from '../assets/icons/House.svg';
import { BuilderRoutes, HomeRoutes, ProfileRoutes, SearchRoutes } from './Navigation';
// import { HomeRoutes } from './Navigation';

const Tab = createBottomTabNavigator();

const TabIndicator = ({ position, width }) => {
    const indicatorStyle = {
        width: 6,
        height: 6,
        backgroundColor: 'black',
        borderRadius: 3,
        position: 'absolute',
        bottom: 9,
        left: position + (width - 20) / 2,
    };

    return <View style={ indicatorStyle } />;
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { width } = Dimensions.get('window');
    const tabWidth = width / state.routes.length;
    const iconWidth = 25;

    return (
        <View style={ { flexDirection: 'row', backgroundColor: 'white' } }>
            { state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                let iconComponent = null;
                if (route.name === 'Home') {
                    iconComponent = <Image source={ require("../assets/images/hmm.jpg") } />;
                } else if (route.name === 'Search') {
                    iconComponent = <Image source={ require("../assets/images/blue.jpg") } />;
                } else if (route.name === 'Builder') {
                    iconComponent = <Image source={ require("../assets/images/blue.jpg") } />;
                } else if (route.name === 'Profile') {
                    iconComponent = <Image source={ require("../assets/images/blue.jpg") } />;
                }

                return (
                    <TouchableOpacity
                        key={ route.key }
                        accessibilityRole="button"
                        accessibilityStates={ isFocused ? ['selected'] : [] }
                        accessibilityLabel={ options.tabBarAccessibilityLabel }
                        testID={ options.tabBarTestID }
                        onPress={ onPress }
                        style={ { flex: 1, alignItems: 'center', padding: 8 } }
                    >
                        { iconComponent }
                        { isFocused && (
                            <TabIndicator position={ tabWidth * index } width={ iconWidth } />
                        ) }
                    </TouchableOpacity>
                );
            }) }
        </View>
    );
};

function HomeScreen() {
    return (
        <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
            <Text>Home Screen</Text>
        </View>
    );
}

function SearchScreen() {
    return (
        <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
            <Text>Search Screen</Text>
        </View>
    );
}

function BuilderScreen() {
    return (
        <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
            <Text>Builder Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
            <Text>Profile Screen</Text>
        </View>
    );
}

function Bottoms() {
    return (

        <Tab.Navigator tabBar={ (props) => <CustomTabBar { ...props } /> }>
            <Tab.Screen name="Home" component={ HomeRoutes } />
            <Tab.Screen name="Search" component={ SearchRoutes } />
            <Tab.Screen name="Builder" component={ BuilderRoutes } />
            <Tab.Screen name="Profile" component={ ProfileRoutes } />
        </Tab.Navigator>

    );
}

export default Bottoms;
