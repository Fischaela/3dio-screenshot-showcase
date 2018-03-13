module.exports = {
  scene: {
    name: 'Import Archilogic scene',
    isOpen: true,
    color: 'ocean',
    ctrl: {
      'scn-inpt': {
        // label: 'model resource id',
        type: 'input',
        placeholder: 'enter a scene id or url',
        error: false,
        val: null,
        method: 'pushScene'
      },
      'scn-text': {
        text: 'Get a scene url from your <a href="https://spaces.archilogic.com/dashboard" target="_blank">dashboard</a> or let us create a new scene for you from a floor plan <a href="https://spaces.archilogic.com/order" target="_blank">here</a>',
        id: 'load-furniture',
        type: 'text'
      }
    }
  },
  logo: {
    name: 'Custom logo',
    isOpen: true,
    ctrl: {
      'lg-ckbx': {
        label: 'Show Logo',
        id: 'show-logo',
        type: 'checkbox',
        val: true,
        method: 'switchLogo'
      },
      'lg-inpt': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        type: 'input',
        hide: true,
        placeholder: 'enter a url',
        val: null,
        method: 'pushLogo'
      },
      'lg-text': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        text: 'Use ideally a svg or a png with transparency - not wider than 200px',
        type: 'text'
      },
      'lg-upload': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        type: 'upload',
        width: 'elements.logo.ctrl.lg-width.val',
        src: 'elements.logo.ctrl.lg-inpt.val'
      },
      'lg-img': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        type: 'image',
        width: 'elements.logo.ctrl.lg-width.val',
        src: 'elements.logo.ctrl.lg-inpt.val'
      },
      'lg-width': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        label: 'Size',
        type: 'slider',
        range: [50, 250],
        val: 80,
        method: 'pushLogo'
      },
      'lg-link': {
        condition: 'elements.logo.ctrl.lg-ckbx.val',
        type: 'input',
        placeholder: 'enter a target link',
        val: null,
        method: 'pushLogo'
      }
    }
  },
  sky: {
    name: 'Background',
    isOpen: true,
    ctrl: {
      'bkgrnd-ckbx-clr': {
        label: 'Use color',
        id: 'bkgrnd-color',
        type: 'checkbox',
        method: 'pushColor',
        val: true
      },
      'bkgrnd-clr': {
        condition: 'elements.sky.ctrl.bkgrnd-ckbx-clr.val',
        type: 'color',
        val: {
          hex: '#ffffff'
        },
        method: 'pushColor'
      },
      'bkgrnd-ckbx-img': {
        label: 'Use Image',
        id: 'bkgrnd-img',
        type: 'checkbox',
        method: 'pushSkyImg',
        val: false
      },
      'bkgrnd-text': {
        condition: 'elements.sky.ctrl.bkgrnd-ckbx-img.val',
        text: 'Best use an <a href="https://www.google.ch/search?biw=1803&bih=804&q=equirectangular+image" target="_blank">equirectangluar image</a> - not wider than 4096px',
        type: 'text'
      },
      'bkgrnd-upload': {
        condition: 'elements.sky.ctrl.bkgrnd-ckbx-img.val',
        type: 'upload',
        src: 'elements.sky.ctrl.bkgrnd-inpt.val'
      },
      'bkgrnd-rot': {
        condition: 'elements.sky.ctrl.bkgrnd-ckbx-img.val',
        label: 'Rotation',
        type: 'slider',
        range: [0, 360],
        val: 0,
        method: 'pushSkyImg'
      },
      'bkgrnd-inpt': {
        condition: 'elements.sky.ctrl.bkgrnd-ckbx-img.val',
        type: 'input',
        placeholder: 'enter your file key',
        val: null,
        method: 'pushSkyImg'
      }
    }
  }
}
