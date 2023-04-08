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
              <el-icon style="margin-right: 8px; margin-top: 2px"><setting /></el-icon>
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
          <el-scrollbar>
            <el-row :gutter="20" style="margin-bottom: 20px;">
              <el-col :span="8" v-for="(card, index) in cardData" :key="index">
                <el-card :body-style="{ padding: '20px 0 !important', 'margin-bottom': '20px !important' }" shadow="hover">
                  <p>{{ card.date }}</p>
                  <h4>{{ card.name }}</h4>
                  <p>{{ card.address }}</p>
                </el-card>
              </el-col>
            </el-row>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Coin, Check, Collection, Avatar, Setting } from '@element-plus/icons-vue';

export default {
  name: 'App',
  components: {
    Coin,
    Check,
    Collection,
    Avatar,
    Setting
  },
  setup() {
  const item = {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  };
  const cardData = ref(Array.from({ length: 6 }).fill(item));
  
  for (let i = 0; i < cardData.value.length; i++) {
    cardData.value[i].date = '2023-04-06'; // 修改日期为当前日期
    cardData.value[i].name = 'ChatGPT'; // 修改名称为 ChatGPT
    cardData.value[i].address = 'OpenAI'; // 修改地址为 OpenAI
  }

  return {
    cardData
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
  border-right: 1px solid var(--el-color-grey-4);
  background: var(--el-color-danger-light-3);
}

.toolbar {
  display: flex;
  align-items: center;
}

.toolbar span {
  margin-right: 20px;
  font-size: 15px;
}

.el-card__body {
  padding: 20px 0 !important;
  margin-bottom: 20px !important;
}
</style>