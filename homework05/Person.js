import React, { Component } from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import Button from 'react-native-button'
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';//照相机功能
import {Actions} from 'react-native-router-flux'


//照相机功能参数信息
const options={
    title:'Select Avatar',
    customButtons:[{name:'fb',title:'Choose Photo from Facebook'}],
    storageOptions:{
        skipBackup:true,
        path:'images'
    },
};

export default class Person extends Component {
    constructor(){
        super();
        this.state={
            imageUrl:''
        }
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options,(response)=>{
            if(response.didCancel){
                return;
            }else if(response.error){
                console.log('Error:',response.error);
            }else if(response.customButton){
                console.log('custom',response.customButton);
            }else{
                const source={uri:response.uri};
                this.setState({
                    imageUrl:source,
                });
            }
        });
    }

    render() {
        return (
            <View>
                <View style={styles.top}>   
                    <Button
                        onPress={()=>{this.takephoto()}}
                    >
                        <Image style={styles.img} source={require('./user/7.jpg')} /> 
                    </Button>  
                    <Button
                        onPress={()=>{this.takephoto()}}
                    >
                        <Image style={styles.img1} source={this.state.imageUrl} />
                    </Button>           
                    <Text style={styles.txt1}>BINNU  DHILLON</Text>
                </View>

                {/* 我的个人中心 */}
                <View style={{width:'100%',height:280,backgroundColor:'#fff'}}>
                    <View style={{height:'18%',flexDirection:'row'}}>
                        <Icon style={{fontSize:30,marginTop:10,marginLeft:10}} name="user" />
                        <Text style={{marginTop:15,marginLeft:10}}>我的个人中心</Text>
                    </View>
                    <View style={{height:76.5,flexDirection:'row'}}>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='setting' />
                            <Text style={styles.txt2}>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='shake' />
                            <Text style={styles.txt2}>收货地址</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='idcard' />
                            <Text style={styles.txt2}>我的信息</Text>
                        </View>
                    </View>

                    <View style={{height:76.5,flexDirection:'row'}}>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='file' />
                            <Text style={styles.txt2}>我的订单</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='code' />
                            <Text style={styles.txt2}>我的二维码</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='money-collect' />
                            <Text style={styles.txt2}>我的积分</Text>
                        </View>
                    </View>

                    <View style={{height:76.5,flexDirection:'row'}}>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='star' />
                            <Text style={styles.txt2}>我的收藏</Text>
                        </View>
                    </View>
                </View>

                {/* E族活动 */}
                <View style={{width:'100%',height:220,backgroundColor:'#fff',marginTop:10}}>
                    <View style={{height:'18%',flexDirection:'row'}}>
                        <Icon style={{fontSize:30,marginTop:10,marginLeft:10}} name="tag" />
                        <Text style={{marginTop:15,marginLeft:10}}>E族活动</Text>
                    </View>

                    <View style={{height:76.5,flexDirection:'row'}}>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='tool' />
                            <Text style={styles.txt2}>居家维修保养</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='car' />
                            <Text style={styles.txt2}>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='user' />
                            <Text style={styles.txt2}>我的受赠人</Text>
                        </View>
                    </View>

                    <View style={{height:76.5,flexDirection:'row'}}>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='home' />
                            <Text style={styles.txt2}>我的住宿优惠</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon style={styles.icon1} name='flag' />
                            <Text style={styles.txt2}>我的活动</Text>
                        </View>
                        <View style={styles.box}>
                            <Button onPress={()=>{Actions.fabu()}}>
                                <Icon style={styles.icon1} name='file-word' />
                            </Button>
                            <Button onPress={()=>{Actions.fabu()}}>
                                <Text style={styles.txt2}>我的发布</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <Text style={{
                    color:'#aaa',
                    marginTop:'5%',
                    marginLeft:'36%'
                }}>BINNU DHILLON | 退出</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    top:{
        width:'100%',
        height:200,
        backgroundColor:'#FF4500'
    },
    img:{
        width:80,
        height:80,
        borderRadius:50,
        marginTop:'9%',
        marginLeft:'40%'
    },
    img1:{
        width:80,
        height:80,
        borderRadius:50,
        marginLeft:'40%',
        marginTop:-80
    },
    txt1:{
        fontSize:18,
        color:'#fff',
        marginTop:10,
        marginLeft:'35%'
    },
    box:{
        width:'33.3%',
        height:76.5
    },
    icon1:{
        marginTop:20,
        marginLeft:'40%',
        color:'#A8A8A8'
    },
    txt2:{
        marginTop:8,
        marginLeft:'28%'
    }
})