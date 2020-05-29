<template>
  <el-card shadow="never">
    <el-table
      :data="routerList"
      @row-cick="handleClick"
    >
      <el-table-column type="index" align="center" label="#" />
      <el-table-column prop="src" align="center" label="node1" />
      <el-table-column prop="dst" align="center" label="node2" />
    </el-table>
  </el-card>
</template>

<script>
import dataAPI from '@/views/jd/d3/data/device'
export default {
  name: 'Index',
  data() {
    return {
      routerList: []
    }
  },
  created() {
    this.loadResource()
  },
  methods: {
    loadResource() {
      this.routerList = dataAPI.routerList().map(router => {
        return {
          src: router.key.src,
          dst: router.key.dst,
          links: router.links
        }
      })
    },
    handleClick(row, column, event) {
      console.log('row: ', row)
    }
  }
}
</script>

<style scoped>
  /*.overs {*/
  /*  top: 90px;*/
  /*  right: 0;*/
  /*  !*padding: 1em;*!*/
  /*  position: absolute;*/
  /*  z-index: 100;*/
  /*}*/
  /*.menu-nets {*/
  /*  background-color: #acd2ca;*/
  /*  !*border: 2px solid #127862;*!*/
  /*  border-radius: .5em;*/
  /*  border-width: 6px 2px 3px;*/
  /*  margin-bottom: 2em;*/
  /*  padding: .5em 1em;*/
  /*  position: relative;*/
  /*}*/
</style>
