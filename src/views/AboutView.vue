<template>
  <div>
    <div class="box1">
      <div style="width: 300px">
        <p>车牌号码:</p>
        <el-input v-model="obj.carNumber" placeholder="请输入车牌号" />
      </div>
      <div style="width: 300px">
        <p>车主姓名:</p>
        <el-input v-model="obj.personName" placeholder="请输入车主姓名" />
      </div>
      <div style="width: 300px">
        <p>状态:</p>
        <el-select
          v-model="obj.cardStatus"
          class="m-2"
          placeholder="选择状态"
          size="large"
          style="width: 240px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <el-button type="primary" style="margin-top: 50px" @click="search"
        >查询</el-button
      >
    </div>
    <el-button type="primary">添加月卡</el-button>
    <el-button>批量删除</el-button>
    <el-table ref="multipleTableRef" :data="list" style="width: 100%">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" label="序号" width="120" />
      <el-table-column property="personName" label="车主名称" width="120" />
      <el-table-column property="phoneNumber" label="联系方式" />
      <el-table-column property="carNumber" label="车牌号码" />
      <el-table-column property="carBrand" label="车辆品牌" />
      <el-table-column property="totalEffectiveDate" label="剩余有效天数" />
      <el-table-column property="cardStatus" label="状态">
        <template #default="scope">
          {{ scope.row.cardStatus == 0 ? "有效" : "过期" }}
        </template>
      </el-table-column>
      <el-table-column property="address" label="操作">
        <template #default="scope">
          <el-text class="mx-1" type="primary">续费</el-text> &ensp;
          <el-text class="mx-1" type="primary">查看</el-text> &ensp;
          <el-text class="mx-1" type="primary">编辑</el-text> &ensp;
          <el-text class="mx-1" type="primary" @click="del(scope.row.id)"
            >删除</el-text
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="obj.page"
      v-model:page-size="obj.pageSize"
      layout="total, prev, pager, next, "
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { listApi, delApi } from "../api/index";
import { reactive, ref } from "vue";

const list = ref([]);
const del = (id: any) => {
  console.log(id);

  delApi(id).then((res: any) => {
    get();
  });
};
const handleSizeChange = (val: number) => {
  get();
};
const handleCurrentChange = (val: number) => {
  get();
};
const obj = reactive({
  page: 1,
  pageSize: 2,
  carNumber: "",
  personName: "",
  cardStatus: "",
});
const total = ref(0);
const get = () => {
  listApi(obj).then((res: any) => {
    console.log(res);
    list.value = res.data.data.rows;
    total.value = res.data.data.total;
  });
};
get();

const search = () => {
  get();
};
const options = [
  {
    value: "",
    label: "全部",
  },
  {
    value: "0",
    label: "有效",
  },
  {
    value: "1",
    label: "无效",
  },
];
</script>

<style lang="scss" scoped>
.box1 {
  display: flex;
  .el-input__wrapper {
    width: 200px;
  }
}
</style>
