<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
        default-active="2"
        router
      >
      <el-menu-item index="/work">
          <el-icon><setting /></el-icon>
          <span>工作台</span>
        </el-menu-item>
        <el-sub-menu index="0">
          <template #title>
            <el-icon><location /></el-icon>
            <span>园区管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4">楼宇管理</el-menu-item>
            <el-menu-item index="/list">企业管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>行车管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1">区域管理</el-menu-item>
            <el-menu-item index="/about">月卡管理</el-menu-item>
            <el-menu-item index="2">停车缴费管理</el-menu-item>
            <el-menu-item index="3">计费规则管理</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

      </el-menu>
      </el-aside>
      <el-main>
       <div class="box2">
        <p style="float: right;" @click="tc">退出登录</p>
       </div>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
 import { useRouter } from 'vue-router';
  const router = useRouter();
const tc=()=>{
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped>


</style>