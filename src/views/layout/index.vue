<template>
<!--显示样式-->
  <div>
    <!--导航-->
    <slider-bar/>
    <!--顶部菜单-->
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import SliderBar from '@/views/layout/SliderBar'
import NavBar from '@/views/layout/NavBar'
export default {
  name: 'Layout',
  components: {NavBar, SliderBar}
}
</script>

<style scoped>

</style>
