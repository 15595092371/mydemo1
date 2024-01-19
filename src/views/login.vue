<template>
  <div class="box">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
      status-icon
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { loginApi } from "../api/index";
import { useRouter } from "vue-router";

interface RuleForm {
  username: string;
  password: string;
}

const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  username: "demo",
  password: "zh@hm#23",
});

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 5, message: "账号需在3-5个字符之间", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 12, message: "密码需在6-12个字符之间", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      loginApi(ruleForm).then((res: any) => {
        // console.log(res)
        localStorage.setItem("token", res.data.token);
        router.push("/work");
        ElMessage({
          message: "登陆成功",
          type: "success",
        });
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style lang="scss" scoped>
.box {
  margin: auto;
  width: 280px;
  margin-top: 200px;
}
</style>
