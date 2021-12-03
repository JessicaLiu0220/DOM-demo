let div = dom.create("<div>这是一个div</div>");
console.log(div);


dom.append(test, div);
const div3 = dom.create('<div id="div3"></div>');
dom.wrap(div, div3);
dom.remove(div3);
let nodes = dom.empty(window.empty);
console.log(nodes);
//设置元素的属性
dom.attr(test, 'title', '小刘加油，我能学会');
let title = dom.attr(test, 'title');
console.log(title);
//设置元素中的新的内容
dom.text(test, '这是我设置的新的内容')
//改html的内容
let html1 = dom.html(test);
console.log(html1);  //参数为1个时获取html中的内容
dom.html(test, 111111111) //参数为两个时将test元素中的内容改为1111111111
//更改元素的style
dom.style(test, { border: '1px solid blue' });
console.log(dom.style(test, 'border'))
//添加class属性
dom.class.add(test, 'red');  //添加一个red类名
dom.class.remove(test, 'red')  //删除test中的类red
console.log(dom.class.has(test, 'red'))  //判断test中是否还有red类
//添加一个事件
const fn = () => {
    console.log('点击了')
};
dom.on(test, 'click', fn)
dom.off(test, 'click', fn);
//查找页面中的同一类元素
console.log(dom.find('#test')[0]);
console.log(dom.find('#empty', div));
//children
console.log(dom.children('#test'))
//查找元素的下标
console.log(dom.index(11));