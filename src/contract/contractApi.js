import { ethers } from 'ethers'
import contractAbi from './contract.json'

function getProvider() {
  const { ethereum } = window
  return new ethers.providers.Web3Provider(ethereum, 'any')
}

function getContract() {
  const signer = getProvider().getSigner()
  const contractAddr = '0x6B34DDCc92cF497Cadc736e34BD7be009805865F' // 合约地址
  return new ethers.Contract(contractAddr, contractAbi, signer)
}

export async function DigitalItemforsellList() {
  const contract = getContract()
  return await contract.DigitalItemforsellList()
}

export async function addDigitalItem(title, description, hash) {
  const contract = getContract()
  const txn = await contract.addDigitalItem(title, description, hash)
  return await txn.wait()
}

export async function removeDigitalItem(hash) {
  const contract = getContract()
  const txn = await contract.removeDigitalItem(hash)
  return await txn.wait()
}

export async function getDigitalItem(hash) {
  const contract = getContract()
  return await contract.getDigitalItem(hash)
}

export async function viewMyCopyrights() {
  const contract = getContract()
  return await contract.viewMyCopyrights()
}

export async function viewIteamowner(hash) {
  const contract = getContract()
  return await contract.viewIteamowner(hash)
}

export async function setPrice(hash, price) {
  const contract = getContract()
  const realPrice = ethers.utils.parseEther(String(price))
  const txn = await contract.setPrice(hash, realPrice)
  return await txn.wait()
}

export async function transferDigitalItem(newOwner, oldOwner, hash) {
  const contract = getContract()
  const txn = await contract.transferDigitalItem(newOwner, oldOwner, hash)
  return await txn.wait()
}
