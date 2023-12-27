import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';


const Form = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageUpload = () => {
        const options = {
            title: 'Select Image',
            mediaType: 'photo',
            quality: 1,
        };

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error:', response.error);
            } else {
                setImage(response.uri);
            }
        });
    };

    const handleSubmit = () => {
        // Prepare form data to be sent to the backend API
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        // formData.append('image', {
        //     uri: image,
        //     type: 'image/jpeg', // Change the type accordingly
        //     name: 'image.jpg',
        // });

        // Send the form data to the backend API using fetch or any library (e.g., axios)
        fetch('YOUR_BACKEND_API_URL', {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(response => {
                // Handle response from the server
                console.log('Response:', response);
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
            });
    };

    return (
        <View style={ { flex: 1, backgroundColor: "gray", padding: 15 } }>
            <Text>Title:</Text>
            <TextInput
                value={ title }
                onChangeText={ text => setTitle(text) }
                placeholder="Enter title"
            />

            <Text>Description:</Text>
            <TextInput
                value={ description }
                onChangeText={ text => setDescription(text) }
                placeholder="Enter description"
                multiline
            />

            <Button title="Upload Image" onPress={ handleImageUpload } />

            { image && (
                <Image
                    source={ { uri: image } }
                    style={ { width: 200, height: 200 } }
                />
            ) }



            <Button title="Submit" onPress={ handleSubmit } />
        </View>
    );
};

export default Form;
