<template>
  <div id="app11">
    <el-row :gutter="24">
      <el-col :span="6">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="text" @click="toFather" style="padding-right: 10px">子组件传递给父组件</el-button>
      </el-col>
      <el-col :span="6">
        <p v-if="toChildren !== null && toChildren !== ''">父组件获取子组件的值：{{ toChildren }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    toChildren: {
      type: String,
      required: false,
      default: null
    }
  },
  data () {
    return {
      input: null,
      testData: '这是子组件的值aaaaaaaaaa'
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
    // 子组件传递数据给父组件
    toFather() {
      this.$emit('getChildren', this.input);
    }
  }
}
</script>
