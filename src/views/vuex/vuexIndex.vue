<template>
  <div id="app">
    <children></children>
  </div>
</template>
<script>
import children from './component/vuexChildren.vue'
export default {
  components: { children }
}
</script>
