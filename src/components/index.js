import ImageView from "./ImageView.vue"
import XtxSku from "./XtxSku.vue"


export const componentPlugin = {
  install (app) {
    app.component('ImageView', ImageView)
    app.component('XtxSku', XtxSku)
  }
}