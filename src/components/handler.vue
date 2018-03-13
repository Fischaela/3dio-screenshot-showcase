<template>
  <div class="handler" :class="{'embed': isEmbedded}" draggable="true" @dragstart="dragstart" @drag="drag">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'handler',
  props: ['index'],
  data () {
    return {
      initialPos: null,
      initialScreenPos: null
    }
  },
  computed: {
    ...mapGetters({
      isEmbedded: 'isEmbedded'
    })
  },
  methods: {
    dragstart: function (e) {
      e.dataTransfer.setData('application/node type', this)
      // hide the 'ghost' of the draggin element
      e.dataTransfer.setDragImage(document.createElement('div'), 0, 0)
      // save the starting pos of drag
      this.initialPos = e.pageX
      this.initialScreenPos = e.screenX
      this.$emit('dragstart', this.index)
    },

    drag: function (e) {
      // prevent to emit unwanted value on dragend
      if (e.screenX === 0 && e.screenY === 0) return
      // notify the offset of the starting pos
      this.$emit('drag', {
        index: this.index,
        relPos: e.pageX - this.initialPos,
        pos: e.pageX,
        cPos: this.initialPos + e.screenX - this.initialScreenPos
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
  .handler {
    position: absolute;
    right: 0;
    top: 0;
    height: ~"calc(100vh - @{headerSmall})";
    width: 3px;
    background: @grey-6;
    cursor: ew-resize;
    .transition(background 0.3s ease);
    &:hover {
      background: @grey-20;
    }
    &.embed {
      height: 100vh;
    }
  }
</style>
