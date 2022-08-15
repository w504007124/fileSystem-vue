<template>
  <div id="app">
    <h1>这是vuex--test1的数据：{{ test1 }}</h1>
    <p v-if="getChildren !== null && getChildren !== ''">子组件传递过来的数据：{{ getChildren }}</p>
    <children ref="headerChild" :toChildren="toChildren" @getChildren="getChildrenData"></children>
    
    <br>
    <br>
    <br>
    <br>
    <el-row :gutter="24">
      <el-col :span="6">
        父组件值传递给子组件：<el-input v-model="toChildren" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="text" @click="testValue1" style="padding-right: 10px">获取子组件的值</el-button>    
        <span>{{ testValue }}</span>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import children from './component/children.vue';
import { mapState } from 'vuex';

export default {
  components: { children },
  computed: {
    // 获取数据
    ...mapState('test1', {
      test1: state => state
    }),
    ...mapState('test2', {
      test2: state => state
    })
  },
  data() {
    return {
      getChildren: null,
      input: null,
      toChildren: null,
      testValue: null
    }
  },
  methods: {
    // 获取子组件传递过来的数据
    getChildrenData(val) {
      this.getChildren = val
    },
    // 获取子组件的数据
    testValue1() {
      this.testValue = this.$refs.headerChild.testData;
    }
  }
}
</script>
