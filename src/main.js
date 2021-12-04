//create
const create1 = dom.create("<div id='create1'><span>create封装</span></div>");
console.log(create1);
//after
console.log(dom.after(test, create1));
//before
const create2 = dom.create("<div id='create2'>create2</div>")
dom.before(test, create2)
//append
const node1 = dom.create("<div id='node1'>子元素</div>")
dom.append(test, node1)
//wrap
const node2 = dom.create("<div id='node2'></div>")
dom.wrap(test, node2)
//remove
dom.remove(node1)
//empty
const node3 = window.empty;
console.log(dom.empty(node3))
//attr
dom.attr(create2, 'id', 'attr')
//text
dom.text(test, '你好，这是一段新的文本')
console.log(dom.text(test))
//html
dom.text(test, '文本又更新了')
console.log(dom.text(test))
//style
dom.style(test, 'color', 'red')
console.log(dom.style(test, 'color'))
dom.style(test, { color: 'yellow' })
//class
dom.class.add(test, 'red')
dom.class.remove(test, 'red')
console.log(dom.class.has(test, 'red'))
//on和off
let fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)
dom.off(test, 'click', fn)
//find
console.log(dom.find('#attr')[0]);
//parent
console.log(dom.parent(test))
//children
console.log(dom.children(node2)[0])
//siblings
const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
//next
console.log(dom.next(s2))
//previous
console.log(dom.previous(s2))
//index
console.log(dom.index(s2))