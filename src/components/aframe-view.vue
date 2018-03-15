<template>
  <div class="app__container">
    <div id="aframe-wrapper">
      <iframe id="aframe-view" src="about:blank" class="app__iframe"></iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from 'lodash'

export default {
  name: 'aframe-view',
  data () {
    return {
      msg: 'aframe view'
    }
  },
  computed: mapGetters({
    aframeCode: 'aframeCode'
  }),
  watch: {
    'aframeCode': function () {
      this.updateIframe()
    }
  },
  methods: {
    // debounce changes to update the iframe
    updateIframe: debounce(function () {
      let iframe = document.getElementById('aframe-view')
      let parent = iframe.parentNode
      parent.removeChild(iframe)
      let newIframe = document.createElement('iframe')
      newIframe.id = 'aframe-view'
      newIframe.className = 'app__iframe'
      parent.append(newIframe)
      iframe = document.getElementById('aframe-view')

      const iframeDoc = iframe.contentWindow.document
      iframeDoc.open()

      // remove VR button
      let newCode = this.aframeCode.replace('<a-scene', '<a-scene vr-mode-ui="enabled: false"')

      iframeDoc.write(newCode)
      iframeDoc.close()
    }, 500)
  },
  mounted: function () {
    this.updateIframe()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
  .app {
    &__container {
      height: ~"calc(100vh - @{headerSmall})";
      overflow: hidden;
      width: 45%;
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
      height: ~"calc(100vh - @{headerSmall})";
      border: 0;
      margin: 0;
      padding: 0;
      &.embed {
        height: 100vh;
      }
    }
  }
</style>
