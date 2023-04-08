<template>
  <div>
    <el-container class="layout-container-demo" style="height: 500px">
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '4']">
            <el-sub-menu index="1">
              <template #title>
                <router-link to="/hom" exact>
                  <el-icon><Coin /></el-icon>数字版权
                </router-link>
              </template>
              <!-- 
              <el-menu-item-group>
                <el-menu-item index="1-1"
                  ><el-icon><Document /></el-icon>文字版权</el-menu-item
                >
                <el-menu-item index="1-2"
                  ><el-icon><PictureFilled /></el-icon>图片版权</el-menu-item
                >
                <el-menu-item index="1-3"
                  ><el-icon><Headset /></el-icon>音乐版权</el-menu-item
                >
                <el-menu-item index="1-4"
                  ><el-icon><VideoCamera /></el-icon>视频版权</el-menu-item
                >
              </el-menu-item-group>
              -->

            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <router-link to="/crc" exact>
                  <el-icon><Check /></el-icon>版权认证
                </router-link>
              </template>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <router-link to="/myrt" exact>
                  <el-icon><Collection /></el-icon>个人版权
                </router-link>
              </template>
            </el-sub-menu>
            <el-sub-menu index="4">
              <template #title>
                <router-link to="/pc" exact>
                  <el-icon><Avatar /></el-icon>个人中心
                </router-link>
              </template>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 15px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 2px">
                <setting />
              </el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>用户名</span>
          </div>
        </el-header>

        <el-main>
          <h1>上传需要认证的数字文件</h1>
          <input type="file" ref="fileInput" @change="handleFileChange" accept=".txt, .png, .jpg, .jpeg, .mp3, .mp4" />
          <!--<input type="file" ref="fileInput" @change="handleFileChange" accept=".txt">-->
          <br />
          <el-input v-model="title" :rows="2" type="textarea" placeholder="请输入标题" required />
          <el-input v-model="fileDescription" :rows="2" type="textarea" placeholder="请输入数字文件描述" required />
          <!--<textarea v-model="fileDescription"></textarea>-->
          <br />
          <el-button @click="handleSubmit">提交</el-button>
          <el-button @click="getFileFromIPFS(fileHash)">下载</el-button>
          <br />
          <p>哈希值：{{ fileHash }}</p>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue'
import { createHash } from 'crypto-browserify'
import * as IPFS from 'ipfs-core'
const Web3 = require('web3')
import contractABI from '../contract/contract.json'
console.log(contractABI)

import { addDigitalItem } from '../contract/contractApi.js'
const geerliWS = 'HTTP://127.0.0.1:7545'
//const web3 = new Web3(geerliWS);
const web3 = new Web3(Web3.givenProvider || geerliWS)
const mycontract = new web3.eth.Contract(contractABI, '0xAAEaeDf7BAcA8e930a5EE737156e2557Ae15c51f')
// const mycontract = new web3.eth.Contract(contractABI,"0x8EE618022d46bdB599a91A3CBCa96fD5d4eEcc7D");
// console.log(mycontract)
//import {contractABI, contractAddress } from '../contract/contract.js'
// import IpfsHttpClient from 'ipfs-http-client'
// const Web3 = require("web3")
// const web3 = new Web3(Web3.givenProvider || "wss://goerli.infura.io/ws/v3/66ac43be378548e291f5f99a9feb19ee");
//console.log(web3);

export default {
  data() {
    return {
      file: null,
      title: '',
      fileDescription: '',
      fileHash: ''
    }
  },
  created() {
    this.initWeb3()
  },
  // async created() {
  //   try {
  //     this.ipfs = await IPFS.create();
  //     console.log('IPFS实例创建成功！');
  //   } catch (error) {
  //     console.error('IPFS实例创建失败：', error);
  //   }
  // },
  methods: {
    async initWeb3() {
      // const accounts = await web3.eth.requestAccounts();
      // this.account=accounts[0];
      // console.log(this.account)
    },
    handleFileChange(event) {
      this.file = event.target.files[0]
    },
    async handleSubmit() {
      try {
        this.ipfs = await IPFS.create()
        console.log('IPFS实例创建成功！')
      } catch (error) {
        console.error('IPFS实例创建失败：', error)
      }
      let param = {
        content: this.file
      }
      if (param) {
        const fileAdded = await this.ipfs.add(param)
        //console.log(fileAdded)
        this.fileHash = fileAdded.cid.toString()
      }

      const geerliWS = 'HTTP://127.0.0.1:7545'
      //const web3 = new Web3(geerliWS);
      const web3 = new Web3(Web3.givenProvider || geerliWS)
      const mycontract = new web3.eth.Contract(contractABI, '0xAAEaeDf7BAcA8e930a5EE737156e2557Ae15c51f')
      const accounts = await web3.eth.requestAccounts()
      this.account = accounts[0]
      console.log(this.account)
      console.log(mycontract)
      console.log(this.account)
      console.log(contractABI)
      // mycontract.methods
      //   .addDigitalItem(this.title, this.fileDescription, this.fileHash)
      //   .send({ from: this.account, gas: 1000000 })
      //   .on('receipt', (event) => {
      //     alert('数字版权认证成功')
      //     console.log(event)
      //   })
      addDigitalItem(this.title, this.fileDescription, this.fileHash).then((result) => {
        console.log(result)
      })
    },
    //这是下载文件的按钮，目前不可用
    async getFileFromIPFS(hash) {
      const file = await this.ipfs.cat(hash)
      const blob = new Blob([file])
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = hash // 文件名设为 hash 值
      link.click()
      URL.revokeObjectURL(url)
    }
  }
}
</script>
<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-danger-light-3);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-danger-light-3);
}
.layout-container-demo .el-menu {
  border-right: none;
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
a {
  text-decoration: none;
  color: black;
}
.router-link-active {
  text-decoration: none;
  color: black;
}
/* 去除高亮 */
.router-link-exact-active {
  color: black;
}
</style>
