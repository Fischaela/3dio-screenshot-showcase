<template>
  <div class="container">
    <visual-editor class="column--content"></visual-editor>
    <aframe-view id="app-container" class="column" :style="{width: lastColumn + 'px'}"></aframe-view>
  </div>
</template>

<script>
import AframeView from './aframe-view'
import VisualEditor from './visual-editor'
import { mapGetters } from 'vuex'

export default {
  name: 'creator',
  data () {
    return {
      innerWidth: null
    }
  },
  computed: {
    ...mapGetters({
      aframeCode: 'aframeCode',
      shortId: 'shortId',
      appTitle: 'appTitle',
      isTemplate: 'isTemplate'
    }),
    lastColumn: function () {
      return this.innerWidth - 350
    },
    columnMode: function () {
      let mode = ''
      const str = ['v']
      str.forEach((s, i) => {
        if (this.columns[i].isVisible) mode += s
      })
      return mode === '' ? 'a' : mode
    }
  },
  components: {
    'aframe-view': AframeView,
    'visual-editor': VisualEditor
  },
  methods: {
    handleResize: function () {
      this.innerWidth = window.innerWidth
    }
  },
  created: function () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, true)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
  .container {
    display: flex;
    position: relative;
    background: @white-4;
  }
  .column {
    flex: none;
    position: relative;
    &.anim {
      transition: width ease 0.3s, background ease 0.3s;
    }
    &--content {
      width: 350px;
    }
    &--bar {
      position: absolute;
      top: 15px;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
    }
  }
</style>
