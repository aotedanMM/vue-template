<template>
<div>
 <p> monitor</p>
  <!--{{ this.$store.state.user.num }}-->
  <!--{{ numGetters }}-->
  <!--<el-button @click="handleAdd()">增加</el-button>-->
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Monitor',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'numGetters'
    ])
  },
  created () {

  },
  methods: {
    handleAdd () {
      this.$store.dispatch('handleChangeNum')
    }
  }
}
</script>

<style scoped>

</style>
