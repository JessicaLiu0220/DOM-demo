window.dom = {
    create(string) {
        let contain = document.createElement("template")
        contain.innerHTML = string.trim();
        return contain.content.firstChild;
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node);

    },
    append(parent, node) {
        parent.appendChild(node);
    },
    wrap(node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    remove(node) {
        node.parentNode.removeChild(node);
        return node;
    },
    empty(node) {
        const childNodes = node.childNodes;
        const arr = [];
        let x = node.firstChild;
        while (x) {
            arr.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return arr;
    },
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }

    },
    text(node, content) {//适配
        if ('innerText' in node) {
            node.innerText = content;
        } else {
            node.textContent = content;
        }

    },
    //改html的内容
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }

    },
    //修改样式
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(test,'color','red')
            node.style[name] = value;
        } else if (arguments.length === 2) {
            //判断name的类型是否为字符串
            if (typeof name === 'string') {
                //dom.style(test,'color')是字符串就返回其属性
                return node.style[name];

            } else if (name instanceof Object) {//判断name的类型是不是对象
                const object = name;
                for (let key in object) {//修改对象和元素都具有的属性key的值
                    node.style[key] = object[key];
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, event, fn) {//添加事件
        node.addEventListener(event, fn);
    },
    off(node, event, fn) {//删除事件
        node.removeEventListener(event, fn);
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector);  //如果有范围就在范围里查找元素，如果没有就在document中查找
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children;
    },
    //获取兄弟节点
    siblings(node) {//先到父元素然后找到所有的子节点，再变成数组将自己过滤出去
        return Array.from(node.parentNode.children).filter(n => n !== node)
    },
    //查找下一个节点
    next(node) {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling  //当x是文本时x为下一个兄弟元素
        }
        return x;
    },
    //查找上一个节点
    previous(node) {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
            x = x.previousSibling  //当x是文本时x为下一个兄弟元素
        }
        return x;
    },
    //遍历每个元素
    each(nodelist, fn) {
        for (let i = 0; i < nodelist.length; i++) {
            fn.call(null, nodelist[i])
        }
    },
    //查看元素的下标
    index(node) {
        let i;
        const list = dom.children(node.parentNode);
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i;
    }
};