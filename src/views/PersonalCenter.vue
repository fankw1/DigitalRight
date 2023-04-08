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
                  <el-menu-item index="1-1"><el-icon><Document /></el-icon>文字版权</el-menu-item>
                  <el-menu-item index="1-2"><el-icon><PictureFilled /></el-icon>图片版权</el-menu-item>
                  <el-menu-item index="1-3"><el-icon><Headset /></el-icon>音乐版权</el-menu-item>
                  <el-menu-item index="1-4"><el-icon><VideoCamera /></el-icon>视频版权</el-menu-item>
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
                <el-icon style="margin-right: 8px; margin-top: 2px"
                  ><setting
                /></el-icon>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                    <el-dropdown-item>待定din</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <span>用户名</span>
            </div>
          </el-header>
    
          <el-main>
            <h3>账户信息</h3>
            <div>
              <p>账户地址：{{ address }}</p>
              <p>余额：{{balanceof }}Eth</p>
              <p>交易记录：{{ history }}</p>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
    </template>
    
    <script>
    import { ref } from 'vue'
    import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
    const Web3 = require("web3")
    //import {contractABI,contractAddress } from '../contract/contract.js'
    // const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");//HTTP://127.0.0.1:7545//wss://goerli.infura.io/ws/v3/66ac43be378548e291f5f99a9feb19ee
    // //console.log(web3);
    // const account = await web3.eth.requestAccounts();
    //console.log(account);
    export default {
      data() {
        return {
          address:"",
          balanceof:"",
          history:""
        }
      },
      created() {
        this.initWeb3().then(() => {
        this.getAccountInfo();
      });
    },
      methods: {
        async initWeb3() {
          const geerliWS =
            "HTTP://127.0.0.1:7545";
          this.web3 = new Web3(Web3.givenProvider || geerliWS);
          // 获取metamask钱包使用的用户
          this.accounts = await this.web3.eth.requestAccounts();
          console.log(this.accounts)
        },
        async getAccountInfo() {
          // 获取账户地址
          this.address = this.accounts[0];
          const balanceWei = await this.web3.eth.getBalance(this.address);
          this.balanceof = this.web3.utils.fromWei(balanceWei, 'ether');
          // const contract = new this.web3.eth.Contract(contractABI, contractAddress);
          // this.history = await contract.getPastEvents('allEvents', { fromBlock: 0, toBlock: 'latest' });
          const address=this.address;
          const transactions = await this.web3.eth.getPastLogs({
            fromBlock: 0,
            toBlock: 'latest',
            address
          })
          this.history= transactions
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
    a{
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