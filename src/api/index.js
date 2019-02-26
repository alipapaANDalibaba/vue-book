import axios from 'axios';
axios.defaults.baseURI = 'http://localhost:3000';
//增加默认的请求路径

//设置一个拦截器，让获取数据的axios请求只获取data
axios.interceptors.response.use((res)=>{
  return res.data;
})

// 获取轮播图数据,返回的是一个promise对象
export let getSliders = ()=>{
  return axios.get('http://localhost:3000/sliders')
}
//获取热门图书接口
export let getHotBooks = ()=>{
  return axios.get('http://localhost:3000/hot')
}
//获取全部图书
export let getBooks = ()=>{
  return axios.get('http://localhost:3000/book')
}
//删除某一本书
export let removeBook = (id)=>{
  return axios.delete(`http://localhost:3000/book?id=${id}`);
}
//获取某一本书
export let findOneBook = (id)=>{
  return axios.get(`http://localhost:3000/book?id=${id}`);
}
//修改图书
export let updateBook = (id,data)=>{
  return axios.put(`http://localhost:3000/book?id=${id}`,data)
}
//添加图书
export let addBook = (data) =>{
  return axios.post('http://localhost:3000/book',data)
}
//home组件的数据一起获取
export let getHomeAll =  ()=>{
  return axios.all([getSliders(),getHotBooks()])
}
//下拉刷新:根据偏移量，返回对应的数据
export let pagination = (offset)=>{
  return axios.get(`http://localhost:3000/page?offset=${offset}`);
}
