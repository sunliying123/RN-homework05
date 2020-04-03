import React,{useState,useEffect,Component} from "react";
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
} from "react-native";
import {Router,Overlay,Scene,Tabs,Drawer,Lightbox,Modal} from 'react-native-router-flux';
import {Grid, Icon} from '@ant-design/react-native';//引入图标
import Item from "@ant-design/react-native/lib/list/ListItem";

import App1 from './homework05/App1'
const App = () =>{
  return(
    <App1 />
  )
}

export default App;

