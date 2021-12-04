window.dom = {
    //创建元素：首先定义一个container容器放创建的新标签，template可以放入任意元素，
    //利用innerHTML将容器中的内容变成string，trim（）的作用是去掉字符串两侧的空格
    //最后返回firstChild。
    create(string) {
        const container = document.createElement("template")
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    // 插入后一个兄弟元素：插入node下一个节点的前面，相当于插入node的后面
    after(node, didi) {
        node.parentNode.insertBefore(didi, node.nextSiling);
    },
    //插入一个哥哥元素
    before(node, gege) {
        node.parentNode.insertBefore(gege, node)
    },
    //新增一个子元素
    append(parent, node) {
        parent.appendChild(node);
    },
    //新增一个父元素：把父元素插入到子元素之前，再将子元素插入到父元素中，原来的子元素的位置就会移开
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)

    },
    //删除元素
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    //删除所有子元素:用while判断node的第一个子节点是否存在，存在就执行删除操作，并把删除的值放到数组中
    //当x不存在即node子元素删除完结束循环，返还被删除的元素的数组。
    empty(node) {
        const childNodes = node.childNodes;
        const array = [];
        let x = node.firstChild;
        while (x) {
            array.push(dom.remove(x));
            x = node.firstChild
        }
        return array;
    },
    //修改或查看元素的属性值：当参数的长度为3时，为修改node属性值
    //当参数的长度为2时，为查看node中的某一属性值
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        } else if (arguments.length === 2) {
            return node.setAttribute(name)
        }
    },
    //读写文本内容
    text(node, string) {
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string;
            } else {
                node.textContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerText' in node) {
                return node.innerText;
            } else {
                return node.textContent;
            }
        }

    },
    //读写html内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    //读取或修改style属性
    style(node, name, value) {
        //style(text,'color','red'),当长度为3时修改name的value值
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //style(test,'color')，长度为2且name类型为string时查看name属性值
                return node.style[name];
            } else if (name instanceof Object) {
                //style(test,{color:'red'})长度为2且name为对象时修改name的style
                for (let key in name)
                    node.style[key] = name[key]
            }
        }
    },
    //添加class
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {//判断node节点的指定类名是否存在
            return node.classList.contains(className)//存在返回true，不存在返回false
        }
    },
    //添加事件
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    //删除事件
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    //查找或获取标签
    find(selector, scope) {
        return document.querySelectorAll(selector);
    },
    //查找父元素
    parent(node) {
        return node.parentNode;
    },
    //查找子元素
    children(node) {
        return node.children;
    },
    //查找兄弟元素
    siblings(node) {//查找元素的父元素下的所有子元素，再把元素本身过滤出来即可得到剩余的兄弟元素
        const arr = Array.from(node.parentNode.children).filter(n => n !== node);
        return arr;
    },
    //获取下一个节点
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    //获取上一个节点元素
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    //遍历所有节点
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    //获取元素下标
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }

}