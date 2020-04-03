import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    ScrollView,
    StatusBar,
    TouchableOpacity,
    ToastAndroid
} from 'react-native'
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button'

let num=1;
export default class Fabu extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?num=1&limit=15')
        .then((res)=>res.json())
        .then(res=>{
            this.setState({data:res.data})
        })
    }
    lastPage=()=>{
        if(num==1){
            ToastAndroid.show('已经到达最开始页！',ToastAndroid.SHORT);
        }else{
            num--;
            fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+num)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    data:res.data
                })
            })
        }
    }
    nextPage=()=>{
        num++;
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page='+num)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        return (
            <View>
                <View style={styles.topbox}>
                    <Icon
                        style={styles.arrow}
                        name='arrow-left' 
                        onPress={()=>{Actions.person()}}
                    />
                    <Text style={styles.txt1}>我的发布</Text>
                    <Icon style={styles.ellipsis} name='ellipsis' />
                </View>

                <View style={styles.middlebox}>
                    {
                        this.state.data.map((item)=>(
                            <ScrollView>
                            <View style={{flexDirection:'row'}}>
                                <Text numberOfLines={1} style={{width:200,marginLeft:30,lineHeight:30}}>{item.title}</Text>
                                <Text style={{marginLeft:50}}>{item.create_at.slice(0,10)}</Text>
                                <Text style={{marginLeft:50}}>已回复</Text>
                            </View>
                            </ScrollView>
                        ))
                    }
                </View>

                <View style={styles.bottombox}>
                    <TouchableOpacity style={styles.btn1} onPress={()=>{this.lastPage()}}>
                        <Text style={{color:'#fff'}}>上一页</Text>
                    </TouchableOpacity>

                    <Text style={styles.txt2}>第{num}页</Text>

                    <TouchableOpacity style={styles.btn2} onPress={()=>{this.nextPage()}}>
                        <Text style={{color:'#fff'}}>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    topbox:{
        width:'100%',
        height:80,
        backgroundColor:'red',
        flexDirection:'row'
    },
    arrow:{
        marginLeft:"8%",
        marginTop:'5%'
    },
    txt1:{
        fontSize:18,
        color:'#fff',
        marginTop:'5%',
        marginLeft:'30%'
    },
    ellipsis:{
        fontSize:30,
        marginTop:'4.5%',
        marginLeft:'28%',
    },
    middlebox:{
        width:'100%',
        height:400,
        backgroundColor:'#fff'
    },
    bottombox:{
        width:'100%',
        height:100,
        backgroundColor:'#fff',
        flexDirection:'row'
    },
   
    btn1:{
        width:'18%',
        height:30,
        backgroundColor:'red',
        alignItems:'center',//水平居中
        justifyContent:'center',//垂直居中
        borderRadius:8,
        marginTop:30,
        marginLeft:35
    },
    txt2:{
        fontSize:15,
        marginTop:35,
        marginLeft:"20%",
        marginRight:'20%'
    },
    btn2:{
        width:'18%',
        height:30,
        backgroundColor:'red',
        alignItems:'center',//水平居中
        justifyContent:'center',//垂直居中
        borderRadius:8,
        marginTop:30
    }
});
