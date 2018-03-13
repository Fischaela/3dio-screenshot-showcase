<template>
  <div class="container">
    <div v-for="(c, i) in columns" class="column" :class="{'hidden': !c.isVisible, 'anim': columnsAnim}" :style="{width: c.width + 'px'}">
      <!-- toggle -->
      <div class="column--toggle" :class="{'hidden': !c.isVisible, 'dark': i === 2 && !isEmbedded}" @click="toggleColumn(i)">
        <span>{{c.isVisible ? '-' : '+'}}</span>
      </div>
      <div v-if="!c.isVisible" class="column--bar" @click="toggleColumn(i)"></div>
      <!-- components -->
      <visual-editor v-if="i === 0 && c.isVisible" class="column--content"></visual-editor>
      <!-- drag handler -->
      <handler v-if="c.isVisible" v-on:drag="dragging" :index="i"></handler>
    </div>
    <aframe-view class="column" :class="{'anim': columnsAnim}" :style="{width: lastColumn + 'px'}"></aframe-view>
  </div>
</template>

<script>
import AframeView from './aframe-view'
import Handler from './handler'
import VisualEditor from './visual-editor'
import Api from '../js/api'
import io3d from '3dio'
import { mapGetters } from 'vuex'
import { debounce, cloneDeep } from 'lodash'

export default {
  name: 'creator',
  data () {
    return {
      columns: [
        {
          width: 350,
          isVisible: true,
          limits: { min: 150, max: 400 }
        }
      ],
      innerWidth: null,
      columnsAnim: false,
      isSaving: false
    }
  },
  computed: {
    ...mapGetters({
      aframeCode: 'aframeCode',
      shortId: 'shortId',
      appTitle: 'appTitle',
      isTemplate: 'isTemplate',
      isLoggedIn: 'isLoggedIn',
      loggedInUser: 'loggedInUser',
      userApps: 'userApps',
      isEmbedded: 'isEmbedded'
    }),
    lastColumn: function () {
      let embedMargin = this.isEmbedded ? 30 : 0
      return this.innerWidth - this.columns.reduce((a, b) => a + b.width, 0) + embedMargin
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
    'handler': Handler,
    'visual-editor': VisualEditor
  },
  watch: {
    'aframeCode': function () {
      this.updateFile()
    }
  },
  methods: {
    toggleColumn: function (i) {
      this.columnsAnim = true
      let column = this.columns[i]
      column.isVisible = !column.isVisible
      if (!column.isVisible) column.width = 15
      else column.width = column.limits.max < 500 ? column.limits.max : 500
      this.columns.splice(i, 1, column)
      let query_ = cloneDeep(this.$route.query)
      query_.m = this.columnMode
      this.$router.replace({query: query_})
      setTimeout(() => { this.columnsAnim = false }, 500)
    },
    dragging: function (drag) {
      const index = drag.index
      let column = this.columns[index]
      if (!column.isVisible) return
      let offset = 0
      this.columns.forEach((p, i) => {
        if (i < index) offset += p.width
      })
      const newWidth = Math.round((drag.cPos - offset) * 100) / 100
      column.width = newWidth
      if (newWidth <= column.limits.max && newWidth >= column.limits.min) this.columns.splice(index, 1, column)
    },
    handleResize: function () {
      this.innerWidth = window.innerWidth
    },
    // auto saving function
    updateFile: debounce(function () {
      // don't allow saving in embed mode
      if (this.isEmbedded) return
      this.isSaving = true
      // templates can't be edited, so we notify the user to create a copy
      if (this.isTemplate || !this.isLoggedIn) {
        this.$store.commit('UNSAVED_CHANGES', true)
        setTimeout(() => { this.isSaving = false }, 3000)
        return
      }
      let blob = new Blob([this.aframeCode], {type: 'text/html'})
      // get s3 directory
      Api.getDirectory(this.shortId)
        .then((dir) => {
          if (this.isLoggedIn && /^\/([a-z0-9-]+)/.test(dir) && /^\/([a-z0-9-]+)/.exec(dir)[1] !== this.loggedInUser.id) {
            this.$store.commit('SET_TEMPLATE', true)
            return Promise.reject(new Error('Not authorized to update this scene'))
          }
          let key = dir + 'index.html'
          return io3d.storage.put(blob, {key})
        })
        .then((result) => {
          setTimeout(() => { this.isSaving = false }, 2000)
          // prevent updating user apps if there is no change
          if (!this.appTitle || this.isTemplate) return
          if (this.userApps[this.shortId] && this.userApps[this.shortId].title === this.appTitle) return
          // update user apps
          this.$store.dispatch('addApp', {
            shortId: this.shortId,
            title: this.appTitle
          })
          this.$store.commit('UNSAVED_CHANGES', false)
        }).catch((err) => {
          console.log(err.message)
          setTimeout(() => { this.isSaving = false }, 3000)
        })
    }, 1000)
  },
  created: function () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize, true)
    // toggle columns by query settings
    let query = this.$route.query
    let mode = query['m']
    if (mode) {
      // adapt column view to query params
      if (mode.indexOf('v') < 0) this.toggleColumn(0)
    }
    query.m = this.columnMode
    this.$router.push({ query })
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
    &.dark {
      background: @outerSpace;
    }
    &.hidden {
      background: @grey-6;
      border-right: 1px solid @grey-10;
      &:hover {
        background: @grey-10;
      }
    }
    &--content {
      width: ~"calc(100% - 3px)"
    }
    &--toggle {
      position: absolute;
      top: 0;
      right: 3px;
      height: 15px;
      width: 15px;
      border-radius: 2px;
      background: @grey-6;
      font-size: 16px;
      line-height: 15px;
      text-align: center;
      cursor: pointer;
      z-index: 50;
      .transition(background ease 0.3s);
      &.hidden {
        right: 0;
      }
      &:hover {
        background: @grey-10;
      }
      &.dark:not(.hidden) {
        background: @grey-60;
        color: white;
        &:hover {
          background: @grey-70;
        }
      }
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
  .saving {
    position: absolute;
    right: 10px;
    top: 10px;
    background: #cb3;
    border-radius: 3px;
    padding: 2px 10px;
    z-index: 100;
    .transition(all .3s ease);
    &--tooltip {
      background: @blue-50;
      color: white;
      &:after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 65px;
        margin-left: -8px;
        width: 0;
        height: 0;
        border-bottom: 15px solid @blue-50;
        border-right: 10px solid transparent;
        border-left: 10px solid transparent;
      }
    }
    &--login {
      background: #cb3;
      color: black;
      &:after {
        left: 80px;
        border-bottom: 15px solid #cb3;
      }
    }
  }
</style>
