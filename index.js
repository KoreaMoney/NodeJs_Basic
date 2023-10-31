const express = require("express");
const app = express();
const port = 3000;

/**
 * HTTP 메소드
 * 1. get : 주소창에서 데이터 전달
 * 2. post : 주소창이 아닌 내부적으로 body에 데이터 전달
 *
 * "/" : routing
 * callback함수(함수가 끝나고 다시 실행하는 함수)로 이루어진다.
 * res.send에 html도 전달이 가능하다.
 */
app.get("/", (req, res) => {
  res.send("Main Root");
});

app.get("/home", (req, res) => {
  res.send("<h1>Welcome Home</h1>");
});

// json형식으로 진행하기 + param으로 진행하는 경우
app.get("/product/:id", (req, res) => {
  const q = req.params;
  res.json({ products: q.id });
});

// json형식으로 진행하기 + query으로 진행하는 경우
app.get("/user/:id", (req, res) => {
  const q = req.query;
  res.json([
    {
      userId: q.q,
      userName: q.name,
      userAge: q.age,
    },
  ]);
});

/**
 * port : 도착지 (ex.배의 선착장)
 * 1. 종류
 * (TCP : Transmission Control Protocol으로 전송제어 프로토콜이며, 두개의 HOST를 연결하고 데이터 스트림을 교환하게 해주는 역할을 한다.)
 * (UDP : User Datagram Protocol으로 사용자 데이터그램 프로토콜이며, 비연결형 프로토콜로 불리기도 하고,  일방적으로 데이터를 전달하는 통신 프로토콜이다.)
 * FTP - 20,21(TCP)
 * SSH - 22 (TCP)
 * 텔넷 - 23(TCP)
 * SMTP - 25(TCP)
 * DNS - 53(TCP/UDP)
 * DHCP - 67(UDP)
 * HTTP - 80(TCP)
 * HTTPS - 443(TCP)
 * ----------------------------
 * listen : server가 듣는 용도
 */
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
