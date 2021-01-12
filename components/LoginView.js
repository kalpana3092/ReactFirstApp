import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import {SafeAreaView, 
        StyleSheet, 
        View, 
        Text, 
        TextInput, 
        TouchableOpacity} from 'react-native'

export default class LoginView extends Component {
    
    constructor() {
        super()
        this.state={
            email:"",
            password:""
          }
    }
    componentDidMount(){
        this.props.navigation.setOptions({headerShown: false});
    }

    validateEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text)
    }

    onClickLoginButton = () => {
        if (!this.state.email) {
            alert('Please enter email')
            return
        }
        if (!this.validateEmail(this.state.email)) {
            alert('Please enter valid email id');
            return;
        }
        
        if (!this.state.password) {
            alert('Please enter password')
            return
        }
        if (this.state.password.length < 8) {
            alert('Password should contain atleast 8 characters');
            return;
        }
        this.props.navigation.navigate('Home')
       // alert('Email: ' + this.state.email + '  ' +'Password:' + this.state.password)
    }

    onClickSignupButton = () => {
        alert('Do Resgistration')
    } 

    onClickForgotPassButton = () => {
        alert('send link to email')
    } 

    render() {
        return(
            <SafeAreaView style = {styles.container}>
                <Text style = {styles.logoText}> My App </Text>
                <View style = {styles.inputView}>
                     <TextInput style = {styles.inputText}
                     placeholder = "Email"
                     placeholderTextColor = 'gray' 
                     onChangeText = {text => this.setState({email: text})} />
                </View>
                <View style = {styles.inputView}>
                     <TextInput style = {styles.inputText}
                     secureTextEntry
                     placeholder = "Password"
                     placeholderTextColor = 'gray' 
                     onChangeText = {text => this.setState({password: text})} />
                </View>
                <TouchableOpacity
                onPress={this.onClickForgotPassButton}>
                    <Text style = {styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style = {styles.loginButton}
                onPress={this.onClickLoginButton}>
                    <Text style = {styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                onPress={this.onClickSignupButton}>
                    <Text style = {styles.signupText}>Signup</Text>
                </TouchableOpacity>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#df595a',
        alignItems: 'center',
        justifyContent: 'center'
      },

    logoText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 40
    },

    inputText: {
        height:50,
        color: 'black'
    },

    inputView:{
        width:"80%",
        backgroundColor:"white",
        // borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },

    forgot: {
        fontSize: 15,
        color: 'white'
    },

    loginButton: {
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:20
    },

    loginText: {
        color: '#df595a',
        fontSize: 18,
        fontWeight: 'bold',
    },

    signupText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});