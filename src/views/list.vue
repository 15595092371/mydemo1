<template>
    <div>
        <p>企业名称</p>
        <el-input v-model="obj.name" placeholder="Please input" /><el-button type="primary" @click="search">查询</el-button>
        <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column type="index" label="序号"  />
      <el-table-column prop="name" label="企业名称"  />
      <el-table-column prop="contact" label="联系人"  />
      <el-table-column prop="contactNumber" label="联系电话"  />
      <el-table-column  label="操作">
        <template #default="scope">
        <el-text class="mx-1" type="primary">续费</el-text> &ensp;
        <el-text class="mx-1" type="primary">查看</el-text> &ensp;
        <el-text class="mx-1" type="primary">编辑</el-text> &ensp;
        <el-text class="mx-1" type="primary">删除</el-text>
      </template>
      </el-table-column>

    </el-table>
    </div>
</template>
<script setup lang="ts">
import { menuApi } from '@/api/api';
import { reactive ,ref} from 'vue';
const search=()=>{
    get()
}
const obj=reactive({
    name:'',
    page:1,
    pageSize:10,
})
const list=ref([])
const get=()=>{
    menuApi(obj).then((res:any)=>{
        console.log(res);
        list.value=res.data.data.rows
    })
}
get()
</script>
<style scoped lang="scss">

</style>