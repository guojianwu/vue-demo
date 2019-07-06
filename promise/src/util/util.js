//去掉首尾空格
export const trim=(str)=>{
    return str.replace(/(^\s*)|(\s*$)/g, ""); 
  }
  
  /*
  手机号验证
  mobile:手机号
  return：Boolean
  */
export const regMobile=function(mobile){
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    if (myreg.test(mobile)){
        return true;
    }else{
        return false;
    }
}
//将时间戳转成日期格式
export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, 
                (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? 
            str : padLeftZero(str));
        }
    }
    return fmt;
};
 
function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};


export function urlParam(name, text){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(text) || new RegExp(name + '=([^&#]*)').exec(text);
    if (results==null){
        return null;
    }else{
        return results[1] || 0;
    }
}


export function dateFtt(fmt,date){
    var o = {   
      "M+" : date.getMonth()+1,                 //月份   
      "d+" : date.getDate(),                    //日   
      "h+" : date.getHours(),                   //小时   
      "m+" : date.getMinutes(),                 //分   
      "s+" : date.getSeconds(),                 //秒   
      "q+" : Math.floor((date.getMonth()+3)/3), //季度   
      "S"  : date.getMilliseconds()             //毫秒   
    };   
    if(/(y+)/.test(fmt))   
      fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
    for(var k in o)   
      if(new RegExp("("+ k +")").test(fmt))   
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
    return fmt;   
  }

 export function checkImgExists(imgurl) {  
    var promise=new Promise((resolve, reject)=>{
        if(!imgurl){
            reject();
        }
        var xmlHttp ;
        if (window.ActiveXObject)
        {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        else if (window.XMLHttpRequest)
        {
            xmlHttp = new XMLHttpRequest();
        }
        try{
            xmlHttp.open("Get",imgurl,false);
            xmlHttp.send();
            if(xmlHttp.status==404){
                reject();
            }else{
                resolve();
            }
        }catch(e){
            reject();
        }
    });
    return promise;
  };