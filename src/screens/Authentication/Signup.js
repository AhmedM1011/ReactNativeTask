import React, { useState } from 'react';
import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    ScrollView,
    StatusBar,
    TextInput,
    Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../common/CustomTextInput';


const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        setUsernameError(username ? '' : 'Username is required');
        setPasswordError(password ? '' : 'Password is required');
        setEmailError(email ? '' : 'Email is required');
        setConfirmPasswordError(
            confirmPassword ? '' : 'Confirmation Password is required'
        );


        if (username && password) {
            try {
                // Perform your login logic here

                navigation.replace('Home');
                setUsername('');
                setPassword('');
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
    };

    const handleUsernameChange = (text) => {
        setUsername(text);
        setUsernameError(text && '');
        setErrorMessage('');
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordError(text && '');
        setErrorMessage('');
    };

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        setConfirmPasswordError(text && '');

        // setConfirmPasswordError(text ? "" : "Confirmation Password is required");
        setErrorMessage('');
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        setEmailError(text && '');
        setErrorMessage('');
    };

    return (
        <SafeAreaView style={ { flex: 1 } }>
            <StatusBar barStyle="light-content" />

            <View style={ { flex: 1 } }>
                <ImageBackground
                    source={ require('../../assets/images/blue.jpg') }
                    style={ { flex: 1, alignItems: 'center', justifyContent: 'center' } }
                >
                    {/* <Image
                        source={ require('../../assets/images/blue.jpg') }
                        style={ { width: 200, height: 200 } }
                    /> */}

                    <View style={ { padding: 20, width: '80%', backgroundColor: 'white', borderRadius: 10 } }>
                        <Text style={ { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: "black" } }>Sign Up</Text>

                        <CustomTextInput
                            placeholder="Enter Username"
                            placeholderTextColor="black"
                            value={ username }
                            onChangeText={ handleUsernameChange }
                            error={ usernameError }
                        />

                        <CustomTextInput
                            placeholder="Enter Email"
                            placeholderTextColor="black"
                            value={ email }
                            onChangeText={ handleEmailChange }
                            error={ emailError }
                        />

                        <CustomTextInput
                            placeholder="Enter Password"
                            placeholderTextColor="black"
                            value={ password }
                            onChangeText={ handlePasswordChange }
                            secureTextEntry
                            error={ passwordError }
                        />

                        <CustomTextInput
                            placeholder="Enter Confirm Password"
                            placeholderTextColor="black"
                            value={ confirmPassword }
                            onChangeText={ handleConfirmPasswordChange }
                            secureTextEntry
                            error={ confirmPasswordError }
                        />


                        { errorMessage !== '' && <Text style={ { color: 'red', marginBottom: 10 } }>{ errorMessage }</Text> }

                        <TouchableOpacity onPress={ () => navigation.navigate('forgot') }>
                            <Text style={ { textDecorationLine: 'underline', marginBottom: 10, color: "black" } }>Forgot password</Text>
                        </TouchableOpacity>

                        <Button title="Login" onPress={ handleLogin } />

                        <Text style={ { marginVertical: 10 } }>Or</Text>

                        <TouchableOpacity onPress={ () => navigation.navigate('login') }>
                            <Text style={ { textDecorationLine: 'underline', color: "black" } }>Already have an account? Login.</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaView>
    );
};

export default SignUp;
