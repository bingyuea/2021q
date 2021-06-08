#### 上面这个是第一版函数，使用的是时间戳

- 让我们来看第一种方法：使用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。


```
throttle(fn,delay){
  context =  this
  args = arguments
  return function (){
    let now = +new Date()
    if (now - pre  > delay){
      fn.apply(context,args)
      pre = now
    }
  }()
},
```


#### 定时器方式

- 当触发事件的时候，我们设置一个定时器，再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器


```
throttle(fn, delay) {
      return function () {
        if (!timer) {
          console.log(new Date().getSeconds())
          timer = setTimeout(function () {
            fn()
            timer = null
          }, delay)
        }
      }()
    },
```

当时笔者在写定时器方式的时间，直接把定时器给清空了，然后这个函数置灰触发一次；后来又查了查资料，发现clear 和 置为null还是有区别的
很多人可能会误认为定时器复制为null就等于清楚了定时器，这个是个错误的理解。上面说了 timer只不过是setInterval的一个引用而已，你赋值timer为null,只不过是清除了timer这个变量，清除了timer的内存占用，setInterval还是存在的。看下面的代码：
