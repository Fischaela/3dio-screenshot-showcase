<template>
  <div class="app__container">
    <div id="aframe-wrapper" class="app__wrapper">
      <div id="aframe-view" class="app__view">
        <a-scene>
          <a-sky color="#6EBAA7"></a-sky>
        </a-scene>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'aframe-view',
  computed: mapGetters({
    aframeCode: 'aframeCode'
  }),
  watch: {
    'aframeCode': function () {
      this.updateDiv()
    }
  },
  methods: {
    // debounce changes to update the div
    updateDiv: debounce(function () {
      let wrapper = document.getElementById('aframe-view')
      let parent = wrapper.parentNode
      parent.removeChild(wrapper)
      let newWrapper = document.createElement('div')
      newWrapper.id = 'aframe-view'
      newWrapper.className = 'app__view'
      newWrapper.innerHTML = this.aframeCode
      parent.append(newWrapper)
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
  .app {
    &__container {
      height: 100%;
      overflow: hidden;
      width: 100%;
      position: relative;
      &.embed {
        height: 100vh;
      }
    }
    &__scene {
      height: 100%;
      width: 100%;
    }
    &__iframe {
      width: 100%;
      height: 100%;
      border: 0;
      margin: 0;
      padding: 0;
      &.embed {
        height: 100vh;
      }
    }
    &__wrapper {
      width: 100%;
      height: 100%;
    }
  }
</style>
