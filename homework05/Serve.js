import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { Icon } from '@ant-design/react-native';
import Swiper from 'react-native-swiper';
import { Actions } from 'react-native-router-flux';

export default class Serve extends Component {
    exit=()=>{
        AsyncStorage.clear();
        Actions.login();
    }
    render() {
        return (
            <View>
                <View style={styles.slide}>
                <View style={{flexDirection:'row',height:40,justifyContent:'center',backgroundColor:'#FFD700',marginTop:20}}>
                    <View style={styles.search}>
                    <Image style={{width:20,height:20}} source={require('../assets/bigger.jpg')}/>
                    <TextInput style={{fontSize:15}} placeholder="请输入您要搜索的关键字"/>
                </View>
                    <Image style={{width:25,height:25,marginTop:5,marginLeft:50}} source={require('./serve/gouwu.jpg')} />
                </View>
                {/* 轮播图 */}
                <Swiper
                    height={200}
                    autoplay={1000}
                    loop={true}
                    paginationStyle={{bottom:10}}
                    dot={<View style={[styles.dot,styles.dotcolor]}></View>}
                    activeDot={<View style={[styles.dot,styles.dotcolor1]}></View>}
                >
                    <Image source={require('./serve/top1.jpg')} />
                    <Image source={require('./serve/top2.jpg')} />
                    <Image source={require('./serve/top3.jpg')} />
                </Swiper>
                </View>

                {/* 居家维修保养 */}
                <View style={styles.box1}>
                    <Image style={styles.img} source={require('./serve/1.jpg')} />
                    <Text style={styles.word}>居家维修保养</Text>
                    <Icon style={styles.arrow1} name='arrow-right' />
                </View>
                {/* 住宿优惠 */}
                <View style={styles.box1}>
                    <Image style={styles.img} source={require('./serve/2.jpg')} />
                    <Text style={styles.word}>住宿优惠</Text>
                    <Icon style={styles.arrow2} name='arrow-right' />
                </View>
                {/* 出行接送 */}
                <View style={styles.box1}>
                    <Image style={styles.img} source={require('./serve/3.jpg')} />
                    <Text style={styles.word}>出行接送</Text>
                    <Icon style={styles.arrow2} name='arrow-right' />
                </View>
                {/* E族活动 */}
                <View style={styles.box1}>
                    <Image style={styles.img} source={require('./serve/4.jpg')} />
                    <Text style={styles.word}>E族活动</Text>
                    <Icon style={styles.arrow2} name='arrow-right' />
                </View>

                {/* 按钮 */}
                <TouchableOpacity
                    style={{
                        width:'80%',
                        height:40,
                        backgroundColor:'red',
                        alignItems:'center',//水平居中
                        justifyContent:'center',//垂直居中
                        borderRadius:5,
                        marginLeft:'10%',
                        marginTop:25
                    }}
                    onPress={this.exit}
                >
                    <Text style={{color:'#fff',fontSize:18}}>退出登录</Text>
                </TouchableOpacity>

                <Text style={{
                    color:'#aaa',
                    marginTop:'8%',
                    marginLeft:'36%'
                }}>@E族之家  版权所有</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search:{
        width:'70%',
        marginLeft:10,
        backgroundColor:"#eee",
        flexDirection:'row',
        alignItems:'center',
        borderRadius:20,
        paddingLeft:20,
        opacity:0.5
    },
    slide:{
        width:480,
        height:250,
        backgroundColor:'#FFD700'
    },
    dot:{
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:3,
        marginRight:3
    },
    dotcolor:{
        backgroundColor:'white'
    },
    dotcolor1:{
        backgroundColor:'orange'
    },
    box:{
        width:'40%',
        height:100,
        margin:10,
        backgroundColor:'red'
    },
    txt:{
        color:"red"
    },
    size:{
        fontSize:40
    },
    box1:{
        width:'100%',
        height:80,
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection:'row'
    },
    img:{
        width:60,
        height:60,
        marginLeft:20,
        marginTop:10
    },
    word:{
        fontSize:15,
        marginTop:30,
        marginLeft:25
    },
    arrow1:{
        marginLeft:'50%',
        marginTop:30
    },
    arrow2:{
        marginLeft:'56%',
        marginTop:30
    }
});