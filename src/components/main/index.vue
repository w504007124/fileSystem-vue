<template>
  <div class="app-container">
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>文件上传系统</span>
      </el-header>
      <el-container style="height: 635px; border: 1px solid #eee">
        <el-aside :width="publicVar.isCollapse ?'64px':'200px'" style="background-color: rgb(253 254 255)">
          <left-nav></left-nav>
        </el-aside>
        <el-main>
          <el-main><router-view /></el-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from '../LeftNav/index.vue'
import { mapState } from 'vuex'
export default {
  components: { leftNav },
  computed: {
    // 获取数据
    ...mapState('publicVar', {
      publicVar: (state) => state,
    }),
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
