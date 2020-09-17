import Taro from '@tarojs/taro'
import React, { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'

import './index.scss'
import guideImg from '../../images/guide-bg.png'

interface IState{
  menuList:IMenu[]

}

interface IMenu{
  name:string,
  image:string,
  url:string,
  _id:string
}

class Index extends Component <{},IState>{
  state={
    menuList:[]
  }

  async componentDidMount() {
    const res = await Taro.request({
      url: 'http://175.24.20.162:32785/api/mock/menuList', //仅为示例，并非真实的接口地址
      method:'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
    })
    this.setState({menuList:res.data.data})
    console.log(res.data.data)

  }

  handleJump = () => {
    console.log(11)
  }

  render () {
    const {menuList} = this.state
    return (
      <View className='index-page'>
        <View className='header'>
          <View className='bg'>
            <Text className='tips'>暂未登录，无法识别就诊人</Text>
            <View className='button center' onClick={()=>Taro.navigateTo({url:"/pages/login/login"})}>马上登录</View>
          </View>
        </View>
        <View className='container center'>
          <Image className='guide-bg' src={guideImg} onClick={this.handleJump}></Image>
        </View>
        <View className='container'>
          <View className='title'>住院服务</View>
          <View className='content'>
            {
              menuList.map((el:IMenu,index)=>{
                return (
                  <View className='item' key={index} >
                    <Image className='img' src={el.image}></Image>
                    <Text>{el.name}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='container'>
          <View className='title'>出院服务</View>
          <View className='content'>
            {
              menuList.map((el:IMenu,index)=>{
                return (
                  <View className='item' key={index} >
                    <Image className='img' src={el.image}></Image>
                    <Text>{el.name}</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    )
  }
}

export default Index
