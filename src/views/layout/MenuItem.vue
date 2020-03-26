<template>
  <div v-if="!item.hidden">
    <!--<template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">-->
      <!--<app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">-->
        <!--<el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">-->
          <!--<item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />-->
        <!--</el-menu-item>-->
      <!--</app-link>-->
    <!--</template>-->

    <!--<el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>-->
      <!--<template slot="title">-->
        <!--<item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />-->
      <!--</template>-->
      <!--<sidebar-item-->
        <!--v-for="child in item.children"-->
        <!--:key="child.path"-->
        <!--:is-nest="true"-->
        <!--:item="child"-->
        <!--:base-path="resolvePath(child.path)"-->
        <!--class="nest-menu"-->
      <!--&gt;22</sidebar-item>-->
    <!--</el-submenu>-->
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

</style>
