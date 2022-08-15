<template>
  <div id="app11">
    <el-row :gutter="24">
      <el-col :span="6">
        <el-button type="text" @click="addAge" style="padding-right: 10px">年龄增加</el-button>    
        <span>{{ test1.name }}-----年龄：{{ test1.age }}</span>
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="addAge2" style="padding-right: 10px">年龄2增加</el-button>    
        <span>{{ test2.name1 }}-----年龄：{{ test2.age1 }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data () {
    return {
    }
  },
  computed: {
    // 获取数据
    ...mapState('test1', {
      test1: state => state
    }),
    ...mapState('test2', {
      test2: state => state
    })
  },
  created () {
  },
  mounted () {
  },
  methods: {
    addAge () {
      // 类似直接赋值
      this.$store.commit('test1/addCount', 1);
      // 异步调用
      this.$store.dispatch('test1/setAge');
    },
    // 
    addAge2 () {
      // 异步新增
      this.$store.dispatch('test2/changeAge', this.test2.age1+1);
    },
  }
}
</script>
