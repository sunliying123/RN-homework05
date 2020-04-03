import React, { Component } from 'react'
import { Text, View,Image ,StyleSheet,AsyncStorage,TouchableOpacity} from 'react-native'
import Swiper from "react-native-swiper"
// import Button from "react-native-button"

export default class SwiperPage extends Component {
    start=()=>{
        AsyncStorage.setItem('isInstall','true');
        this.props.afterInstall();
    };
    render() {
        return (
                <Swiper showsButtons={true}>
                    <View>
                        <Image style={{height:'100%',width:'100%'}} source={require('./swiper.png')} />
                    </View>
                    <View>
                        <Image style={{height:'100%',width:'100%'}} source={require('./swiper.png')} />
                    </View>
                    <View>
                        <Image style={{height:'100%',width:'100%'}} source={require('./swiper.png')} />
                        <TouchableOpacity onPress={this.start} style={styles.start}>
                            <Text style={styles.txt}>开始体验</Text>
                        </TouchableOpacity>
                    </View>
                </Swiper>
        )
    }
}
const styles=StyleSheet.create({
    start:{
        position:"absolute",
        bottom:80,
        left:'40%',
        width:100,
        height:30,
        backgroundColor:'#fff',
        borderRadius:10
    },
    txt:{
        fontSize:15,
        color:'blue',
        paddingLeft:17,
        paddingTop:5
    }
})