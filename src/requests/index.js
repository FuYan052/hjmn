import axios from 'axios'

const ajax = axios.create()
const ajax1 = axios.create({
  baseURL: 'http://192.168.1.127'
})
//获取导航栏
export const getNavs = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/colmun')
}
//获取制作流程
export const getProcess = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/process')
}
//首页
export const getRecommendCase = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/RecommendCase')
}
//工艺图片
export const getTechnology = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/GetTechnology')
}
//品牌故事
export const brandStory = (id) => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/getSet?id=1')
}
//产品系列分类
export const seriesCate = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/getCasesCate')
}
//产品列表
export const seriesList = (id) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/cases?id=${id}`)
}
//产品详情
export const productDetail = (id) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getCasesOne?id=${id}`)
}
//新闻分类
export const newsCate = () => {
  return ajax.get('http://192.168.1.127/muniu/index.php/home/index/getNewsCate')
}
//新闻列表
export const newsList = (id,page) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getNewsAll?id=${id}&page=${page}&limit=10`)
}
//新闻详情
export const newsItem = (id) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getNewsOne?id=${id}`)
}
//新闻上下页
export const newsLastNext = (id) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getPage?id=${id}`)
}
//联系我们页面提交信息
export const info = (name,mobile,email,content) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getMessage?name=${name}&mobile=${mobile}&email=${email}&content=${content}`)
}
//在线加盟
export const OnlineFranchise = (id) => {
  return ajax.get(`http://192.168.1.127/muniu/index.php/home/index/getSet?id=${id}`)
}