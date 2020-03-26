<template>
  <div style="width: 260px;">
    <el-menu background-color="#16234a" active-text-color="#fff" text-color="#fff" :router="routeStatus">
      <!--多级菜单-->
      <!--一级菜单-->
      <el-menu-item v-for="route in routes" :key="route.path" :index="route.path" v-if="!route.hidden" >
        <i v-if="route.meta.icon" :class="route.meta.icon" style="color: #fff"></i>
        <span>{{ route.meta.title}}</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
import MenuItem from '@/views/layout/MenuItem'
export default {
  name: 'SliderBar',
  components: {MenuItem},
  data () {
    return {
      routeStatus: true
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  },
  created () {
    this.handleFetchRoutes()
  },
  methods: {
    handleFetchRoutes () {
      console.log(this.routes)
    },
    // 当前route项是否含有children子项
    hasChildren (route) {
      if (route.children.length > 0) {
        console.log(route.children.length)
        return true
      } else {
        return false
      }
    }

  }
}
</script>

<style scoped>

</style>
