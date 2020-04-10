import com from '@/common/common.js'  //@代表src目录
var name="谢治权";

const TEST=function(){
  console.log("实训");
  com.split();
}
//使用JS的异步机制调用方法
//取数据是耗时操作，return取不到数据
//方法里面声明回调函数，
//非阻塞性，产生了异步机制
const asynGet=function(name,succeed){
  setTimeout(()=>{
    //console.log("延时调用");
    name="延时调用";
    succeed(name);
  },3000);
}

export default{
  name:name,      //曝露属性
  TEST,            //暴露接口
  asynGet,
}
