import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Text,
    View,
} from 'react-native';
import Bottom, { CustomTabBar, TabNavigator } from './Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Form from '../screens/Form';
import Login from '../screens/Authentication/Login';
import SignUp from '../screens/Authentication/Signup';


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ MainHomeRoute } />
            <Tab.Screen name="Search" component={ SearchRoutes } />
            <Tab.Screen name="Builder" component={ BuilderRoutes } />
            <Tab.Screen name="Profile" component={ ProfileRoutes } />
        </Tab.Navigator>
    )
}


export const HomeRoutes = ({ navigation, route }) => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="login"
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen name="root" component={ BottomTabs } />

                <Stack.Screen name="home" component={ Home } />
                <Stack.Screen name="login" component={ Login } />
                <Stack.Screen name="signup" component={ SignUp } />
                {/* <Stack.Screen name="forgot" component={ ForgotPassword } /> */ }
                {/* <Stack.Screen name="otp" component={ Otp } /> */ }
                {/* <Stack.Screen name="otpreset" component={ OtpReset } /> */ }
                {/* <Stack.Screen name="reset" component={ ResetPassword } /> */ }
            </Stack.Navigator>
        </>
    );
};

export const MainHomeRoute = ({ route }) => {


    return (
        <>
            <Stack.Navigator
                initialRouteName="home"
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen
                    name="home"
                    component={ Home }

                />
                {/* <Stack.Screen name="jobDetails" component={ DetailsCard } /> */ }
            </Stack.Navigator>
        </>
    );
};

export const SearchRoutes = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="search"
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen name="search" component={ Form } />
                {/* <Stack.Screen name="postedJobs" component={ PostedJobs } /> */ }
                {/* <Stack.Screen name="jobDetails" component={ DetailsCard } /> */ }
            </Stack.Navigator>
        </>
    );
};

export const BuilderRoutes = () => {
    return (
        <>
            <Stack.Navigator
                initialRouteName="builder"
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen
                    name="builder"
                    component={ Home }
                // initialParams={{ preview: false }}
                />
                {/* <Stack.Screen name="PreviewResumes" component={ PreviewResumes } /> */ }
            </Stack.Navigator>
        </>
    );
};

export const ProfileRoutes = () => {
    // const item = route.params.item;

    return (
        <>
            <Stack.Navigator
                initialRouteName="profile"
                screenOptions={ { headerShown: false } }
            >
                <Stack.Screen
                    name="profile"
                    component={ Home }
                // initialParams={{ hasProfile: hasProfile }}
                />
                {/* <Stack.Screen name="ProfileStepper" component={ ProfileStepper } /> */ }
                {/* <Stack.Screen name="success" component={ Success } /> */ }
                {/* <Stack.Screen name="review" component={ Review } /> */ }
                {/* <Stack.Screen name="updateprofile" component={ UpdateProfile } /> */ }
                {/* <Stack.Screen name="candidates" component={ Candidates } /> */ }
                {/* <Stack.Screen name="managejobs" component={ DownloadResume } /> */ }
            </Stack.Navigator>
        </>
    );
};