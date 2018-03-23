<template>
  <div>
    <a-scene><a-sky color="#6EBAA7"></a-sky></a-scene>
    <div v-html="cameraControls"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import htmlSnippets from '../js/html-code-snippets'

export default {
  name: 'aframe-scene',
  data () {
    return {
      cameraControls: null
    }
  },
  watch: {
    'aframeCode': function () {
      console.log('Update!!')
      this.pushScene()
    }
  },
  computed: {
    ...mapGetters({
      aframeCode: 'aframeCode'
    })
  },
  methods: {
    pushScene: function () {
      const sceneId = this.aframeCode
      io3d.scene.getAframeElements(sceneId)
        .then(result => {
          // we'll get two elements: plan + camera ( including waypoints )
          // add class for later identification
          result[0].classList.add('io3d-scene')

          // check for previously added elements
          const prevScene = this.$el.querySelector('[class="io3d-scene"]')
          const prevCamera = this.$el.querySelector('[camera]') || this.querySelector('a-camera')

          // create string with correct indentation
          // var newSceneElements = prettifyHtml(result[0].outerHTML, 6)
          // var newCameraElements = prettifyHtml(result[1].outerHTML, 6)
          console.log('Result', result[0], typeof result)
          console.log('PrevScene', prevScene, 'PrevCamera', prevCamera)
          console.log('AframeCode3', this.aframeCode, typeof this.aframeCode)

          console.log('ThisEl', this.$el)

          // replace existing scene elements
          // add new scene elements right before closing a-scene
          this.$el.querySelector('a-scene').appendChild(result[0])

          // replace existing camera elements
          // add new scene elements right before closing a-scene
          this.$el.querySelector('a-scene').appendChild(result[1])

          // remove VR button
          this.$el.querySelector('a-scene').setAttribute('vr-mode-uiabled', false)

          // Add Camera Controls
          this.cameraControls = htmlSnippets.cameraControls

          // this.updateWaypoints()
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../styles/config.less';
</style>
