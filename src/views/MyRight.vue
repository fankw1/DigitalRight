<!-- 个人版权页面 -->
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
            <div class="image-list-container">
                <el-card>
                  <div slot="header">
                    <h3>图片版权</h3>
                  </div>
                  <div class="image-list">
                    <el-image v-for="(image, index) in imageList"
                      :key="index"
                      :src="image.url"
                      :alt="image.name"
                      :fit="fitType"
                      @click.native="handleImageClick(index)"
                      style="cursor: pointer; margin: 10px;">
                    </el-image>
                  </div>
                </el-card>
              </div>
            <!--el-scrollbar>
              <el-table :data="tableData">
                <el-table-column prop="date" label="Date" width="140" />
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column prop="address" label="Address" />
              </el-table>
            </el-scrollbar>-->
          </el-main>
        </el-container>
      </el-container>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'
    
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
    const tableData = ref(Array.from({ length: 20 }).fill(item))
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
    
    
    
    