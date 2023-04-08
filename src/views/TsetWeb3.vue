<template>
    <div>这是PersonCenter
    </div>
</template> 
    
<script>
const Web3 = require("web3")
const Tx =require("ethereumjs-tx")
//import Tx from "ethereumjs-tx"
var web3 = new Web3(Web3.givenProvider || "wss://goerli.infura.io/ws/v3/66ac43be378548e291f5f99a9feb19ee");  
const account=web3.eth.accounts.create("12345")
console.log(account);
console.log(account.privateKey);
</script>
    
<style scoped>

</style>