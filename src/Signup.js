import React from 'react';
import { View, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './components/AppText';
import { styles } from './styles';

const SignUp = props => {
    const routeToLogin = () => {
        props.navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding" style={styles.scroll}>
                <View style={styles.caption}>
                    <AppText style={styles.captionText}>
                        Create Your Tela Account
                </AppText>
                </View>

                <View style={styles.form}>
                    <TextInput
                        style={styles.formInput}
                        clearButtonMode="while-editing"
                        placeholder="Full Name"
                    />

                    <TextInput
                        style={styles.formInput}
                        clearButtonMode="while-editing"
                        placeholder="Email Address" keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.formInput}
                        clearButtonMode="while-editing"
                        placeholder="Phone Number" maxLength={11} keyboardType="phone-pad"
                    />
                </View>

                <View style={styles.nextButtonView}>
                    <TouchableOpacity style={styles.nextButtonTouch}>
                        <AppText style={styles.nextButtonText}>Next</AppText>
                        <Icon name="ios-arrow-round-forward" color="#fff" size={36} />
                    </TouchableOpacity>
                </View>

                <View style={styles.loginButton}>
                    <AppText style={styles.loginSpanText}>Already have an account?</AppText>
                    <TouchableOpacity onPress={routeToLogin}>
                        <AppText style={styles.loginButtonText} accessiilityRole="button">&nbsp;Login</AppText>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

SignUp.navigationOptions = () => ({
    header: null
});

export default SignUp;