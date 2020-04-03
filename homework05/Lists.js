import React from "react";
import { 
    StatusBar,
    SafeAreaView,
    StyleSheet,
    ScrollView,//滚动
    View,// 相当于div，用于布局
    Text,//文本
    TextInput,
    Image,//图片
} from "react-native";

const Lists = () =>{    
    return (
        <>
        <StatusBar barStyle='dark-content' />
        <SafeAreaView>
            <ScrollView>
                {/* 上面部分 */}    
                <View style={{width:'100%',height:145,backgroundColor:"#fff"}}>
                    {/* 搜索框 */}
                    <View style={{
                        width:'80%',
                        height:50,
                        marginLeft:'10%',
                        marginTop:10,
                        backgroundColor:"#eee",
                        flexDirection:'row',
                        alignItems:'center',
                        borderRadius:10,
                        paddingLeft:20,
                    }}>
                        <TextInput placeholder="请输入商品名称"/>
                        <Image style={{width:20,height:20,marginLeft:180}} source={require('../assets/bigger.jpg')}/>
                    </View>

                    {/* 导航栏 */}
                    <View style={{width:"80%",height:48,marginTop:40,marginLeft:'10%',flex:1,flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                        <Text style={styles.word1}>综合</Text>
                        <Text style={styles.word}>销量</Text>
                        <Text style={styles.word}>新品</Text>
                        <Text style={styles.word}>价格</Text>
                        <Text style={styles.word}>信用</Text>
                    </View>
                </View>

                {/* 下面部分 */}
                {/* flex布局
                在rn中，View组件默认设置了flex属性 */}
                <View style={{
                    flexDirection:'row',//设置主轴方向
                    justifyContent:'space-evenly',//设置对齐方式
                    flexWrap:'wrap'
                }}>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic1.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic2.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic1.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic2.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic1.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
                    <View style={styles.box}>
                        <Image style={styles.img} source={require("./lists/pic2.jpg")} />
                        <Text style={styles.p1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                        <Text style={[styles.p1,styles.p2]}>36.00</Text>
                    </View>
            
                </View>
            </ScrollView>
        </SafeAreaView>
        </> 
    );
};


//StyleSheet.create用于集中定义样式变量,相当于css文件
const styles=StyleSheet.create({
    word:{
        fontSize:20,
        color:'#000'
    },
    word1:{
        fontSize:20,
        color:'red'
    },
    box:{
        width:'45%',
        height:300,
        margin:10,
        backgroundColor:'#fff'
    },
    img:{
        width:'40%',
        height:150,
        marginTop:25,
        marginLeft:"28%"
    },
    p1:{
        fontSize:15,
        marginTop:20
    },
    p2:{
        color:'red'
    }
});

export default Lists;