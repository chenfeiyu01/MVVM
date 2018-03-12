var data = {
  name: 'kindeng'
};
observe(data);
data.name = 'dmq';

function observe(data) {
  if (!data || typeof data !== 'object') { //如果没有传入参数或传入参数不是对象就不执行下面的代码
    return;
  }
  Object.keys(data).forEach(function(key) { //对该对象的属性组成的数组进行遍历
    defineReactive(data, key, data[key]); //data是传入的对象，key是对象的属性，data[key]是对象的属性值
  })
};

function defineReactive(data, key, val) {
  var dep = new Dep()
  observe(val); //监听子属性，如果子属性是对象则继续进行
  Object.defineProperty(data, key, {
    enumerable: true, //可枚举
    configurable: false, //不能再define
    get: funcion() {
      return val  //获取到被读取的属性值
    },
    set: function(newVal) {
      console.log(val + '变成了' + newVal);
      val = newVal //将以前的属性值改为新的属性值
    }
  })
}

function Dep() {

}
