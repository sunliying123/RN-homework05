import React, { Component } from 'react'
import {View,Text,Image,TextInput,TouchableOpacity} from 'react-native'
import {Actions} from 'react-native-router-flux'
import {Icon} from '@ant-design/react-native';//引入图标


export default class Register extends Component {
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
                <TextInput placeholder="用户名"/>
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
                <TextInput placeholder="密码"/>
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
                <TextInput placeholder="确认密码"/>
                </View>
            </View>
            
                <TouchableOpacity 
                    style={{
                        width:'80%',
                        height:40,
                        marginLeft:'10%',
                        backgroundColor:'#ccc',
                        marginTop:30,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                    onPress={Actions.pop}>
                    <Text>注册</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
