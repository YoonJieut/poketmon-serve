const http = require('http');

const server = http.createServer(function(request, response){
  // node 개발자가 만들었기 때문에, 매개변수가 함수다라는 정도
  // console.log(request);
  console.log(typeof(response));
  // 요청 할 때 일어난다. 뭔가 객체들이 들어가 있다.
  // 객체를 잘 찾아들어가서 접근하면 된다.
  // 분야만 다르다
  response.writeHead(200, {"Content-Type" : "text/html"})
  // 바르게 응답하면 content type에 html로 넣겠다.
  // "" 안써도 되지만 - 프로토콜 스탠다드라서
  // 200과 html을 보내줄게

  let doc = `<html><head></head><body><h1> hello </h1></body></html>`
  // 이렇게 주니 문서가 됐구나!
  response.end(doc);

  // ! 아하 요청이라는 이벤트구나!
  // ! 원웨이 web1.0 버전을 구현했습니다.
});

server.listen(2070);
