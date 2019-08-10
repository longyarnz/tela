import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    scroll: {
        flex: 1,
    },
    caption: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
        minHeight: 100
    },
    captionText: {
        fontSize: 30,
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
    },
    form: {
        flex: 2,
        paddingVertical: 40,
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
        minHeight: 200
    },
    formInput: {
        paddingVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ccc',
        fontFamily: 'Montserrat-Light',
        fontSize: 16,
        marginBottom: 20
    },
    nextButtonView: {
        paddingHorizontal: 20,
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
