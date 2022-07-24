

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

/* 🍀 07 npm
    npm init
    npm install express
    npm install nodemon 
    npm install react-router-dom
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
    🍉미들웨어 :
    서버의 요청과 응답사이에 실행할 코드 , 
    유저가 /~~url로 요청시, 응답하기전에 실행할 코드
*/

/* 
    // 🍉미들웨어. app.use(~),  express.static( path.join(__dirname, 'public') )) : 파일들이 있는 폴더 지정함

    app.use( '/', express.static( path.join(__dirname, 'public') ))

    //app.get('/',~)  :  '/'로 접속하면, ~~폴더의 ~~파일 보내줌
    app.get('/',(req요청,res응답)=>{
        res응답.sendFile(path.join(__dirname,'public/c88.html'));
    });

 */




// 🍀20 react폴더- build폴더 내용 보여주기 , router적용하기
/* 
   리액트폴더안에서 npm run build실행

   'react-project/build/index.html' 지정
*/

/* 
    // 미들웨어
    app.use( '/', express.static( path.join(__dirname, 'react-project/build') ))

    // app.get('/'
    app.get('/',(req요청,res응답)=>{
        res응답.sendFile(path.join(__dirname,'react-project/build/index.html'));
    });

    //🍉리액트 router : 이 코드 추가하면 제대로 작동함
    // app.get('*'  : 유저가 url 아무거나 입력하면, 리액트html보내주기
    app.get('*',(req요청,res응답)=>{
        res응답.sendFile(path.join(__dirname,'react-project/build/index.html'));
    });
*/

// 🍀30 주소에 따라서, 자바스크립트 페이지 - 리액트 페이지 둘다 적용하기, 

/* 
    일반 자바스크립트 페이지 보다가,
    특정페이지 들어갔을때, 리액트 페이지 보여주는 법

    "/" 접속 : 자바스크립트 html페이지 보여줌
    "/react"접속 :  리액트 페이지 보여줌
*/

/* 
    1 미들웨어 설정
    app.use( '/',
    app.use( '/react'

    2 get 주소 설정
    app.get('/',~) 
    app.get('/react'

    3. 리액트폴더 -> package.json ->   "homepage": "/react", 추가

    4. npm run build
*/



// 미들웨어
app.use( '/', express.static( path.join(__dirname, 'public') ))

app.use( '/react', express.static( path.join(__dirname, 'react-project/build') ))


//app.get('/',~)  :  '/'로 접속하면, ~~폴더의 ~~파일 보내줌
app.get('/',(req요청,res응답)=>{
    res응답.sendFile(path.join(__dirname,'public/c88.html'));
});


// app.get('/react'
app.get('/react',(req요청,res응답)=>{
    res응답.sendFile(path.join(__dirname,'react-project/build/index.html'));
});





/* 
    🍀40계속 중간에 멈추고 build를 해야하는가??

    ㄴㄴ, 라이브로 가능함

    proxy 검색
 */