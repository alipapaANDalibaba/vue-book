let http = require('http'),
  fs = require('fs'),
  url = require('url'),//
  path = require('path');

let sliders = require('./sliders');
//读取book.json
function read(cb) {
  fs.readFile(path.join(__dirname, './book.json'), 'utf-8', function (err, data) {
    if (err || data.length == 0) {
      cb([])//没长度或者错误就是空数组
    } else {
      cb(JSON.parse(data));//读出来转化成数组
    }
  })
}

//存入数据到book.json
function write(data, cb) {
  fs.writeFile(path.join(__dirname, './book.json'), JSON.stringify(data), cb)
}

let pageSize = 5;
http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") return res.end();/*让options请求快速返回*/

  let {pathname, query} = url.parse(req.url, true);//不加true query就不是对象
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    return res.end(JSON.stringify(sliders))//将对象转为json格式(字符串)
  }
  if (pathname === '/hot') {
    read(function (books) {//代表所有读出的结果
      let hot = books.reverse().slice(0, 6);
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end(JSON.stringify(hot));
    })
    return
  }
  if (pathname === '/book') { //对书的增删改查
    let id = parseInt(query.id); //字符串
    switch (req.method) { //?id=1
      case 'GET':
        if (!isNaN(id)) {//有id就查询一个，没id就查询全部
          read(function (books) {
            let book = books.find(item => item.bookId === id);
            if (!book) book = {};//如果没找到则是undefined
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(book));
          })
        } else {
          read(function (books) {
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(books.reverse()));
          })
        }
        break;
      case 'POST':
        let str = '';
        req.on('data', chunk => {
          str += chunk;
        });
        req.on('end', function () {
          let book = JSON.parse(str);
          read(function (books) {//添加id
            book.bookId = books.length ? books.length + 1 : 1;
            books.push(book);
            write(books, function () {//放在books中，books在内存中
              res.end(JSON.stringify(book));

            })
          })
        });
        break;
      case 'PUT':
        if (id) {//获取了当前要修改的id
          let str = '';
          req.on('data', chunk => {
            str += chunk;
          });
          req.on('end', () => {
            let book = JSON.parse(str);
            console.log(book);
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) {//找到id相同的那一本书
                  return book
                }
                return item //其他书正常返回
              });
              write(books, function () {
                res.end(JSON.stringify(book));
              })
            })
          })
        }
        break;
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id);
          write(books, function () {
            res.end(JSON.stringify({}))//删除返回空对象
          })
        })
        break;
    }
  }
  if (pathname === '/page') {
    let offset = parseInt(query.offset) || 0;
    read(function (books) {
      let result = books.reverse().slice(offset, offset + pageSize);
      let hasMore = true;
      if (books.length <= offset + pageSize) {
        hasMore = false;
      }
      res.setHeader('Content-Type', 'application/json;charset=utf-8');
      res.end(JSON.stringify({hasMore, books: result}));
    })
    return;
  }
}).listen(3000);
