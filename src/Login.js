import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './components/AppText';
import { styles } from './styles';

const localStyles = StyleSheet.create({
    switch: {
        flexDirection: 'row'
    }
})

const Login = props => {
    const [toggle, setToggle] = useState(true);
    const placeholder = toggle ? 'Email Address' : 'Phone Number';
    const keyboardType = toggle ? 'email-address' : 'phone-pad';
    const label = toggle ? 'phone number' : 'email address';
    const goBackToSignUp = () => props.navigation.goBack();
    const switchToPhone = () => setToggle(!toggle);

    return (
        <SafeAreaView style={styles.container} onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior="padding" style={styles.scroll}>
                <View style={styles.caption}>
                    <AppText style={styles.captionText}>
                        Welcome Back To Tela
                    </AppText>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.formInput}
                        clearButtonMode="while-editing"
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                    />
                    <View style={localStyles.switch}>
                        <AppText style={styles.greyText}>
                            OR Login with your &nbsp;
                        </AppText>

                        <TouchableOpacity onPress={switchToPhone}>
                            <AppText style={[styles.blackText, styles.boldText]} accessiilityRole="button">
                                { label }.
                            </AppText>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.nextButtonView}>
                    <TouchableOpacity style={styles.nextButtonTouch}>
                        <AppText style={styles.nextButtonText}>Next</AppText>
                        <Icon name="ios-arrow-round-forward" color="#fff" size={36} />
                    </TouchableOpacity>
                </View>

                <View style={styles.loginButton}>
                    <AppText style={styles.loginSpanText}>Don't have an account?</AppText>
                    <TouchableOpacity onPress={goBackToSignUp}>
                        <AppText style={styles.loginButtonText}>&nbsp;Sign Up</AppText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

Login.navigationOptions = () => ({
    header: null
});

export default Login;