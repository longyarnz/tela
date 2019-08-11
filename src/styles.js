import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dedede',
        paddingHorizontal: 20,
        paddingTop: 120,
        justifyContent: 'space-around',
    },
    safeArea: {
        flex: 1,
    },
    caption: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
        minHeight: 100
    },
    captionText: {
        fontSize: 38,
        textAlign: 'center',
        fontFamily: 'Montserrat-Light',
    },
    form: {
        paddingVertical: 30,
        justifyContent: 'center',
        backgroundColor: '#fff',
        minHeight: 200,
        paddingHorizontal: 20
    },
    formInput: {
        paddingVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        marginBottom: 25
    },
    lastFormInput: {
        marginBottom: 0
    },
    nextButtonView: {
        paddingHorizontal: 30,
        backgroundColor: '#111',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginBottom: 10
    },
    nextButtonTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    nextButtonText: {
        color: '#fff'
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        justifyContent: 'center'
    },
    loginButtonText: {
        fontFamily: 'Montserrat-Bold',
    },
    loginSpanText: {
        fontFamily: 'Montserrat-Light',
    },
    greyText: {
        color: '#aaa'
    },
    blackText: {
        color: '#000'
    },
    boldText: {
        fontFamily: 'Montserrat-Bold'
    }
});
