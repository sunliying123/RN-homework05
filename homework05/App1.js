import React,{useState,useEffect} from "react";
import { 
    SafeAreaView,
    StyleSheet,
    ScrollView,//滚动
    View,// 相当于div，用于布局
    Text,//文本
    StatusBar, 
    Image,//图片
    ImageBackground,//背景图
    TextInput,//文本框
    Button,//按钮
    TouchableOpacity,//按钮，点击时有透明度的变化
    FlatList,//高性能简单列表
    SectionList,//高性能分组列表
    Dimensions,//获取当前屏幕尺寸
    PixelRatio,//同样用于获取屏幕尺寸
    BackHandler,//返回键功能设置
    ToastAndroid,//提示框
    AsyncStorage
} from "react-native";
import {Router,Overlay,Scene,Tabs,Drawer,Lightbox,Modal} from 'react-native-router-flux';
import {Grid, Icon, List} from '@ant-design/react-native';//引入图标

import Serve from './Serve'
import Lists from './Lists'
import Person from './Person'
import Fabu from './Fabu'
//隐藏
import SplashScreen from "react-native-splash-screen"
import Login from "./Login";
import SwiperPage from "./SwiperPage";
import Register from "./Register";

//引入根路径
const rootUrl="https://www.fastmock.site/mock/30f7ba4695c74ac2ee5bd60b7bab9fb6/api"


const App1 = () =>{
  //点击两次返回键，退出程序
    let isExit=false;
    BackHandler.addEventListener('back',()=>{
        if(isExit){
            BackHandler.exitApp();
            return false;
        }
        ToastAndroid.show('确定要退出吗',500);
        isExit=true;
        setTimeout(()=>{
            isExit=false;
        },2000)
        return true;
    })
    let [isLogin,setLogin]=useState(false);
    let [isInstall,setInstall]=useState(true);

    let init=()=>{
      AsyncStorage.getItem('isInstall')
        .then(res=>{
          if(res){
            setInstall(false);
          }
        })

      AsyncStorage.getItem('user')
        .then(res=>{
          let user=JSON.parse(res)
          if(!user){
            SplashScreen.hide();
          }
          if(user && user.token){
            setLogin(true);
            SplashScreen.hide();
          }
        })
    }

    useEffect(()=>{
      // AsyncStorage.clear()

      init();
    },[])
    let afterInstall=()=>{
      setInstall(false)
    }
    if(isInstall){
      return <View style={{flex:1}}>
        <SwiperPage afterInstall={afterInstall} />
      </View>
    }
    return (
      <Router>
        <Overlay>
          <Modal>
            <Lightbox>
              <Drawer>
          {/* Router里面只能放一个组件 */}
        <Scene key="root">
            {/* 实现底部Tabs */}
            <Tabs 
              key="tabbar"
              hideNavBar  
              activeTintColor='red'//选中的标题颜色
              inactiveTintColor='blue'//未选中的标题颜色
              tabBarStyle={{backgroundColor:"#ccc"}}//背景色
            >
              {/* 首页 */}
              <Scene key='home'
                  title='首页'
                  //图标
                  icon={
                    ({focused})=><Icon 
                      color={focused?'red':'blue'} 
                      name="home"/>
                  }
                  component={Serve}
                  hideNavBar
              >
              </Scene>

              {/* 分类栏 */}
                <Scene key='fen'
                  title='分类'
                  //图标
                  icon={
                    ({focused})=><Icon 
                      color={focused?'red':'blue'} 
                      name='table'/>
                  }
                  component={Lists}
                  hideNavBar
                >
                </Scene>

                {/* 个人中心栏 */}
                <Scene 
                  key='doc' 
                  hideDrawerButton
                  icon={({focused})=>
                    <Icon color={focused?'red':'blue'} name='user'/>
                  }
                  title="个人中心"
                  hideNavBar
                >
                  <Scene key='person' component={Person} />
                  <Scene 
                    hideTabBar 
                    hideDrawerButton
                    key='fabu' 
                    component={Fabu} 
                  />
                </Scene>
            </Tabs>
        </Scene>  
        </Drawer>
        </Lightbox>
        <Scene hideNavBar initial={!isLogin} key="login" component={Login} />
        <Scene hideNavBar key="register" component={Register} />
        </Modal>
        </Overlay>    
      </Router>
    );
};


//StyleSheet.create用于集中定义样式变量,相当于css文件
const styles=StyleSheet.create({
    
});

export default App1;