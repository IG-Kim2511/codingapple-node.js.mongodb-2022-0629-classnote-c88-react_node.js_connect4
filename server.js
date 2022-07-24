

// 🦄🦄88 Node서버+ React 합치기, app.get("*",~), 리액트 router사용, proxy 라이브 코딩

/* 🍀05
  리액트설치폴더에는 git이 자동설치되서 생기는 문제점
  :  상위폴더에 git 설치하면 둘이 충돌함

  1. server.js 폴더 만듬

  2. server.js의 하위폴더로 react폴더 만듬

  3. server.js(상위폴더)에서 git init...git설치

  4. react폴더에서 create-react-app . 설치하면, react폴더안에는 git이 자동설치안됨

  5. 끝

*/

/* 
  🍀10 express 기본 예제,
   상위코드,
   app.get()
   app.use()
*/

const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 


/* 
    // 🍉미들웨어. app.use(~),  express.static( path.join(__dirname, 'public') )) : 파일들이 있는 폴더 지정함

    app.use( '/', express.static( path.join(__dirname, 'public') ))

    //app.get('/',~)  :  '/'로 접속하면, ~~폴더의 ~~파일 보내줌
    app.get('/',(req요청,res응답)=>{
        res응답.sendFile(path.join(__dirname,'public/c88.html'));
    });

 */




// 🍀20  react폴더- build폴더 내용 보여주기
/* 
    npm run build
*/


// 미들웨어
app.use( '/', express.static( path.join(__dirname, 'react-project/build') ))

// app.get('/'
app.get('/',(req요청,res응답)=>{
    res응답.sendFile(path.join(__dirname,'react-project/build/index.html'));
});






// 미들웨어
// app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ))






