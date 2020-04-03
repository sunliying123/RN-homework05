import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity,AsyncStorage,Scene} from 'react-native'
import {Actions, Router} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';//引入图标
import {myFetch} from './index'
// let rootUrl="https://www.fastmock.site/mock/30f7ba4695c74ac2ee5bd60b7bab9fb6/api"


export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }
    userhandle=(text)=>{
        this.setState({username:text})
    }
    pwdhandle=(text)=>{
        this.setState({pwd:text})
    }
    register=()=>{
        Actions.register();
    }
    login=()=>{
        // myFetch.get('/topics',{limit:4})
        //     .then(res=>console.log(res))

        this.setState({isloading:true})

        myFetch.post('/login',{
            username:this.state.username,
            pwd:this.state.pwd
        }).then(res=>{
            // Actions.home()

            //本地存储
            AsyncStorage.setItem('user',JSON.stringify(res.data))
                .then(()=>{
                    this.setState({isloading:false})
                    Actions.home()
                })
        })
        // fetch(rootUrl+'/login',{
        //     method:'POST',
        //     headers:{
        //         "Accept":"application/json",
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({username:this.state.username,pwd:this.state.pwd})
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //     Actions.home()
        // })
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
               <View 
                    style={{alignItems:'center'}}>
               <View style={{
                   width:'80%',
                   marginRight:10,
                   borderBottomColor:"#ccc",
                   borderBottomWidth:1,
                   flexDirection:'row',
                   alignItems:'center',
                   paddingLeft:20
                }}>
                <Icon name="user" color="red"/>
                <TextInput
                    onChangeText={this.userhandle}
                    placeholder="用户名"
                />
                </View>

                <View style={{
                   width:'80%',
                   marginRight:10,
                   borderBottomColor:"#ccc",
                   borderBottomWidth:1,
                   flexDirection:'row',
                   alignItems:'center',
                   paddingLeft:20
                }}>
                <Icon name="user" color="red"/>
                <TextInput 
                    onChangeText={this.pwdhandle}
                    placeholder="密码"
                    secureTextEntry={true}
                />
                </View>
                
            </View>
            
                <TouchableOpacity 
                    style={{
                        width:'40%',
                        height:40,
                        backgroundColor:'#ccc',
                        marginTop:30,
                        alignItems:'center',
                        justifyContent:'center',
                        marginLeft:'10%',
                    }}
                    onPress={this.login}>
                    <Text>登录</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        width:'40%',
                        height:40,
                        backgroundColor:'#ccc',
                        marginTop:30,
                        alignItems:'center',
                        justifyContent:'center',
                        marginLeft:'10%'
                    }}
                    onPress={this.register}>
                    <Text>注册</Text>
                </TouchableOpacity>
                {/* 登录时状态 */}
                {
                    this.state.isloading?
                    <View>
                        <Icon
                            style={{
                                fontSize:150,
                                marginLeft:'30%',
                                marginBottom:'10%'
                            }}
                            name="login" 
                        />
                        <Text
                            style={{
                                fontSize:20,
                                marginLeft:'36%'
                            }}
                        >
                            正在登录
                        </Text>
                    </View>:null
                }
            </View>
        )
    }
}
