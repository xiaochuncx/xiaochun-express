// hasOwnProperty : Object 的原型方法 ,是用来检测属性是否为对象的自有属性
module.exports = {
  extend: function (target, source, flag) {
    for (let key in source) {
      if (source.hasOwnProperty(key))
        flag ?
          (target[key] = source[key]) :
          (target[key] === void 0 && (target[key] = source[key]));
    }
    return target;
  },
}