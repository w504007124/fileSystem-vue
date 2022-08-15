<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">
        <h3>文件上传系统</h3>
      </div>
      <el-form
        :model="param"
        :rules="rules"
        ref="login"
        label-width="0px"
        class="ms-content"
      >
        <!--输入框-->
        <el-form-item prop="userName">
          <el-input v-model="param.userName" placeholder="用户名/UserName">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码/Password"
            v-model="param.password"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button
            type="primary"
            @click="submitForm()"
          >
            登 录
          </el-button>
          <el-button
            type="primary"
            :to="{ path: '/login' }"
          >
            取 消
          </el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { loginMapper } from '../../api/login'

import { removeToken } from '@/utils/auth'
export default {
  data: function () {
    return {
      param: {
        userName: null,
        password: null,
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm() {
      removeToken();
      this.$refs.login.validate((valid) => {
        if (valid) {
          // 页面测试用
          debugger
          // this.$router.push({ path: this.redirect || '/main' }).catch(() => {})

          this.$store.dispatch("Login", this.param).then(() => {
            this.$router.push({ path: this.redirect || "/main" }).catch(()=>{});
          });
          localStorage.setItem('ms_username', this.param.username);
          // this.$router.push('/');
        } else {
          this.$message.error('请输入账号和密码')
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login-wrap {
  /*整个大的界面样式*/
  // position: relative;
  // width: 100%;

  height: 695px;
  background-image: url(../../assets/img/background_img.jpg);
  opacity: 0.8; /*透明度*/
}
.ms-title {
  /*登录框的样式*/
  width: 100%;
  line-height: 70px;
  text-align: center; /*/*图像处理系统的位置*/
  font-size: 20px; /*图像处理系统的大小*/
  color: #fff; /*图像处理系统的颜色*/
  border-bottom: 1px solid; /*分割线的颜色*/
}
.ms-login {
  /*登录框的样式*/
  position: absolute; /*position 属性规定元素的定位类型；absolute生成绝对定位的因素*/
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -190px;
  border-radius: 15px; /*角边弧度*/
  background: rgba(23, 93, 128, 0.9);
  overflow: hidden;
}
.ms-content {
  /*输入框的内边距*/
  padding: 30px 30px;
}
.login-btn {
  text-align: left;
}
.login-btn button {
  /*登录按钮样式*/
  width: 46%;
  height: 35px;
  margin-bottom: 5px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
/*我先把登录和取消两个按钮并排排列，还没实现*/
</style>
