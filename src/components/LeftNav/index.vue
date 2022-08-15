<template>
  <div class="tac">
    <el-row ><div class="collapseDiv" title="展开收缩" @click="setIsCollapse">|||</div></el-row>
    <el-row>
      <el-col>
        
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          :collapse-transition="false"
          :collapse="publicVar.isCollapse"
          @open="handleOpen"
          @select="handleSelect"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>我的文件</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="document" @click="documentClick()"
                >文档</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="image" @click="imageClick()"
                >图片</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <span slot="title">其他工具</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">回收站~</span>
          </el-menu-item>
          <el-menu-item index="4">
            <template slot="title">
              <span slot="title">其他~</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="document" @click="downloadPdf()"
                >pdf</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="image" 
                >1</el-menu-item
              >
            </el-menu-item-group>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    // 获取数据
    ...mapState('publicVar', {
      publicVar: (state) => state,
    }),
  },
  methods: {
    setIsCollapse() {
      // 类似直接赋值
      this.$store.commit('publicVar/changeCollapse')
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    documentClick() {
      this.$router.push({ path: '/files-file' })
      // this.$router.push({ path: '/system/info', query: { approvalProcessId: row.sysApprovalProcessId, activeName: 'third', id: row.id }});
    },
    imageClick() {
      this.$router.push({ path: '/files-images' })
      // this.$router.push({ path: '/system/info', query: { approvalProcessId: row.sysApprovalProcessId, activeName: 'third', id: row.id }});
    },
    downloadPdf() {
      this.$router.push({ path: '/files-images' })
    }
  },
}
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 199px;
  min-height: 613px;
}
.el-submenu .el-menu-item {
  min-width: 0 !important;
}
.collapseDiv {
  content: "展开/收缩";
  line-height: 0px !important;
  text-align: left;
  padding-top: 10px;
  float: left;
  padding-bottom: 10px;
  margin-left: 20px;
  cursor: pointer;
}
</style>
