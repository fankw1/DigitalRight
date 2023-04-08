
<template>
  <div>
    <h1>上传文件</h1>
    <input type="file" ref="fileInput" @change="handleFileChange" accept=".txt">
    <br>
    <textarea v-model="fileDescription"></textarea>
    <br>
    <button @click="handleSubmit">提交</button>
    <br>
    <p>哈希值：{{ fileHash }}</p>
  </div>
</template>
  
<script>
require('stream-browserify');
import { createHash } from 'crypto-browserify';

  export default {
    data() {
      return {
        file: null,
        fileDescription: '',
        fileHash: ''
      }
    },
    methods: {
      handleFileChange(event) {
        this.file = event.target.files[0];
      },
      async handleSubmit() {
        if (this.file) {
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(this.file);
          fileReader.onload = async () => {
            const fileData = fileReader.result;
            const hash = await this.hashFile(fileData);
            this.fileHash = hash;
          }
        }
      },
      async hashFile(fileData) {
        const hash = createHash('sha256');
        hash.update(Buffer.from(fileData));
        return hash.digest('hex');
      }
    }
  }

//   import { createHash } from 'crypto-browserify';
// import * as IPFS from 'ipfs-core';
// import IpfsHttpClient from 'ipfs-http-client'
// const Web3 = require("web3")
// const web3 = new Web3(Web3.givenProvider || "wss://goerli.infura.io/ws/v3/66ac43be378548e291f5f99a9feb19ee");
// console.log(web3);

// export default {
//   data() {
//     return {
//       file: null,
//       fileDescription: '',
//       fileHash: ''
//     }
//   },
//   async created() {
//     try {
//       this.ipfs = await IPFS.create();
//       console.log('IPFS实例创建成功！');
//     } catch (error) {
//       console.error('IPFS实例创建失败：', error);
//     }
//   },
//   methods: {
//     handleFileChange(event) {
//       this.file = event.target.files[0];
//     },
//     async handleSubmit() {
//       if (this.file) {
//         try{
//             const fileAdded = await this.ipfs.add(this.file);
//             console.log('成功上传到ipfs节点')
//           }catch(error){
//             console.error('上传失败', error);
//           }
//         this.fileHash = fileAdded.cid.toString();
//       }
//     }
//   }
// }

// import { createHash } from 'crypto-browserify';
// // import * as IPFS from 'ipfs-core';
// import {create} from 'ipfs-http-client'
// // const Web3 = require("web3")
// // const web3 = new Web3(Web3.givenProvider || "wss://goerli.infura.io/ws/v3/66ac43be378548e291f5f99a9feb19ee");
// //console.log(web3);
// const ipfs = create({
//   host: 'ipfs.infura.io',
//   port: 5001,
//   protocol: 'https'
// });
// export default {
//   data() {
//     return {
//       file: null,
//       fileDescription: '',
//       fileHash: ''
//     }
//   },
//   methods: {
//     handleFileChange(event) {
//       this.file = event.target.files[0];
//     },
//     async handleSubmit() {
//       if (this.file) {
//         const hash = await uploadFileToIpfs(this.file);
//         this.fileHash = hash;
//         console.log('成功上传到ipfs节点')
//       }
//     }
//   }
// }
// async function uploadFileToIpfs(file) {
//   const buffer = await file.arrayBuffer();
//   const fileHash1 = await ipfs.add(buffer);
//   return fileHash1.cid.toString();
// }
//老方法生成hash值
// export default { 
//   data() {
//     return {
//       file: null,
//       fileDescription: '',
//       fileHash: ''
//     }
//   },
//   methods: {
//     handleFileChange(event) {
//       this.file = event.target.files[0];
//     },
//     async handleSubmit() {
//       if (this.file) {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(this.file);
//         fileReader.onload = async () => {
//           const dataURL = fileReader.result;
//           const hash = await this.hashFile(dataURL);
//           this.fileHash = hash;
//         }
//       }
//     },
//     async hashFile(dataURL) {
//       const hash = createHash('sha256');
//       hash.update(dataURL);
//       return hash.digest('hex');
//     }
//   }QmPkGCd6Vz6C8JUeQVJVHXYSAaKa561FoWP3aRUT5VpKj3
// }

</script>
    
<style scoped>

</style>
