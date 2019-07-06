/* 请求服务器配置
*params m
*dev => 开发环境，test => 测试环境， pro => 生产环境
*结果 ser => 请求地址 status => 环境类型
*
*/
export default function() {
  let m = 'pro'
  let host = {
    server:'',
    status:''
  }
  if(m == 'test'){
    host.server = 'http://192.168.0.48:9000'
    // host.server = 'http://192.168.0.65:8080'
  }else if(m == 'test'){
    host.server = 'http://test51.520etao.com'
  }else if(m == 'pro'){
    host.server = 'https://activity.edsmall.com'
  }
  host.status = m
  return host
}
