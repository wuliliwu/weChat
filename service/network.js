export default function request(options){
 return new Promise((eslove,rejrct) => {
  wx.request({
    url: 'options.url',
    method: options.method || 'GET',
    data: options.data || {},
    success(res){
      reslove(res)
    },
    fail(err){
      rejrct(err)
    }
  })
 })
 }