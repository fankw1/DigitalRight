import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import ElementPlus from 'element-plus'
import * as IPFS from 'ipfs-core'
import 'element-plus/dist/index.css'
import elementIcon from "./plugins/icons"
import router from "./router"
import * as ethers from "ethers"
import * as IpfsHttpClient from 'ipfs-http-client'
createApp(App).use(ElementPlus).use(router).use(elementIcon).use(ethers).use(IPFS).use(IpfsHttpClient).use(store).mount('#app')
