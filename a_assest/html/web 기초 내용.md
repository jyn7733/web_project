# web 기초 내용

- 접근성 : 명도대비

  - 4.5:1 / 3:1 (18pt, 14pt bold)

- Colour contrast an....

- 웹 레이아웃

- 반응형 제작

- grid


---
<!DOCTYPE html>
<!-- a_base_code.html -->
<html lang="ko-kr">
<head>
  <meta charset="UTF-8">
  <title>웹기초 - 기본코드내용</title>
  
  <link rel="shortcut icon" href="../img/icon_02.png" type="image/png">
  <link rel="apple-touch-icon" href="../img/icon_01.png">

  <style>
    /* h1 {font-size : 10px;} */
    div { border-width:5px; border-color:salmon; border-style:solid;}
      #pageTitle {width:600px; margin:auto; margin-bottom:20px; border-width:2px;}
      #pageParagraph{width: 80%; margin:auto; background-color:#ccc;}
      .shadow_box { width:70%; margin: auto; margin-bottom: 50px; box-shadow: 5px 5px 5px rgba(10,10,10,0.7); }
      .margin_top { background-color : #fa0; border:0;
        font-size:1.2rem; transition:all 1000ms ease;}
      .margin_top:hover { background-color : #07a; color:#fff;
      font-size:1.5rem;}
    span {background-color:#f77; color: white;}
  </style>
</head>
<body>
  <!--
    1. 제목 : 웹페이지에서 대표 title
    2. 내용 : 단락/본문의 의미를 가진다.
    3. 영역 : 큰의미는 없지만 역할을 구분
    4. 목록 : 여러 내용을 나열할 때 쓰는 기능
    5. 링크(anker)/이미지 : 클릭시 필요한 페이지로 이동하거나 원하는 이미지를 나타나게 하는 기능 - inline요소
    6. 줄바꿈, 구분 : br(단순 줄바꿈), hr(위/하의 내용 구분)
  -->
  <!-- h1 ~ h6 목차에서 표현된 내용으로 이해~ 
  반드시 의미로 구분하자-->
  <div id="pageTitle"> 
      <h1>하나의 웹문서에서 가장 중요한 제목, 한 문서에 한번만 사용가능</h1>
      <h2>문서에서 <span>두 번째</span>로 중요한 제목</h2>
      <h3>문서에서 세 번째로 중요한 제목</h3>
      <h4>문서에서 네 번째로 중요한 제목</h4>
      <h5>문서에서 다섯 번째로 중요한 제목</h5>
      <h6>문서에서 제목으로 구분되는 요소중에 가장 하위 형태</h6>
  </div>
    <hr />
 <div id="pageParagraph"> 
   <p>내용을 작성하는 요소로서, 단락(paragraph)이라는 의미를 가지고 있다.</p>
    <p>웹문서에서 띄어쓰기나를 여러번 하거나, 엔터를 이용하여 줄바꿈을 하는 것은 띄어쓰기 한칸으로 인지하며,<br /> 만약 줄바꿈을 처리해서 구분하고자 한다면 &lt;br /&gt; 작성해야한다.</p>
    <pre>직접 띄어쓰기를 사용하거나 줄바꿈을 하거나 원하는대로 처리하고자 한다면 pre요소를 사용하면되나, 실제로는 매우 불편하므로 코드의 내용을 표한하는 형태가 아닌 경우에는 사용률이 매우 낮다.</pre>
  </div>

  <div class="shadow_box">
    <q>q요소는 인용문의 형태를 의미, 한줄의 내용을 작성하는 경우에 주로 사용</q>
 
    <blockquote cite="인용내용의 원본첨부">
    <p>인용문들의 집합 코드</p>
    <q>하이 모두들 안녕 내가 누군지 아니?</q> <br />
    <q>이하늬다! 이하늬다!</q> <br />
    <q>그래그래</q> <br />
    <q>와아아아아아앙!!!!!</q>
   </blockquote>

    <!-- <img src="" alt="">
    <cite>작품명 : 물위를거닐다</cite> -->

    <address>
    이곳은 사이트의 주소, 연락처등을 입력하는 곳으로
    <p>주소내용</p>
    <p>사업자번호</p>
    <p>연락처....</p>
    </address>
  </div>
  <!-- 내용2 : 크기를 가질 수 없는 inline 요소들에 대한 내용 -->
  <div class="shadow_box margin_top">
    <p>
    내용을 작성할때는, 때로 강조를 하고자 할 때도 있다.<br />
    <b>굵은글씨</b>를 사용하거나, <i>기울임</i>을 쓰거나,<u>밀줄</u>을 표기하거나, <s>취소선</s>등을 넣고싶을때 코드를 작성하는 기능이 있지만,<br />
    위 내용은 모두 강조의 의미가 아니다.
    </p>
    <p>
    웹문서에서 강조의 의미는 말 그대로 그뜻을 전달가능해야 한다. <strong>매우 중요 즉, 위험과 유사한 강조를 뜻하는 코드</strong>, <br /> <em>중요한 의미이지만, 권유의 성격을 띄고있는 코드,</em> <br /> <ins>강조 처리되는 기능으로 재확인 의미, 기억의 의미,</ins> <br /> <del>이미 처리가 되어 현재 내용을 더이상 사용할 수 없다 라는 의미</del>를 기억해야하며, <br />
    
    i요소는 감정의 표현이라는 의미를 가지므로 주로, 아이콘 또는 이모티콘의 용도로 사용,
    s요소(strike)는 html5에서 완전히 삭제되어진 요소이므로 더이상 쓸 수 없다.
    </p>
  
    <p>
    내용상 문서의 용어를 사용할 경우, 우리는 요약형태를 사용하는 경우가 많다. <br />
    <abbr title="버스카드충전">버카충</abbr>
    <abbr title="hyper text markup language">HTML</abbr>
    </p>

    <!-- 
      제목 : h1 ~ h6
      내용 : p, pre, blockquote, address,
            q, cite, strong, em, ins, del, abbr
    -->
  </div>  
    <hr />
    <!-- 영역구분 크게 div(block요소의 분할), span(inilne요소의 분할)
    div, span은 단순히 각자의 영역을 구분 기능이 있지만, 의미는 없다. -->
    
    <div>
      <h2>이곳은 목록의 형태 파악</h2>
      <!--목록(나열) 3가지 
        순서가 없는 형태(리스트) - ul (자식 : li)
        순서가 있는 형태(리스트) - order list -> ol (자식 : li)
        순서에 대한 제목이 존재하는 형태(리스트) -> data list -> dl (자식: 제목을 뜻하는 dt, 내용을 뜻하는 dd)
      -->
      <h3>순서없는 리스트</h3>
      <ul>
        <li>순서없는 리스트 1</li>
        <li>순서없는 리스트 2</li>
        <li>순서없는 리스트 3</li>
      </ul>

      <ol>
        <li>순서가있는 리스트1</li>
        <li>순서가있는 리스트2</li>
        <li>순서가있는 리스트3</li>
        <li>순서가있는 리스트4</li>
      </ol>

      <dl>
        <dt>리스트 내용에 대한 제목1</dt>
        <dd>제목에 대한 내용1</dd>
        <dd>제목에 대한 내용2</dd>
        <dd>제목에 대한 내용3</dd>
        <dd>제목에 대한 내용4</dd>

        <dt>리스트 내용에 대한 제목2</dt>
        <dd>제목에 대한 내용2-1</dd>
        <dd>제목에 대한 내용2-2</dd>
        <dd>제목에 대한 내용2-3</dd>
        <dd>제목에 대한 내용2-4</dd>
        
      </dl>
    </div>
    
    <div>
      <h2>여러 중첩 처리되는 리스트 형식</h2>
      <ul>
        <li>
          <dl>
            <dt>콘서트 명</dt>
            <dd>싸이 흠뻑쇼!!</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>부재명</dt>
            <dd>나도 가보고 싶다! 흠뻑쇼</dd>
            <dd>그래서 준비했습니다. 온라인으로 참석하세요.</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>일시</dt>
            <dd>2020년 9월 18일</dd>
            <dd>저녁 11시</dd>
            <dd>
              <ou>
                <li>1부: 신나게 즐겨보기</li>
                <li>2부: 미친듯 정줄놓기</li>
              </ou>
            </dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt>채널</dt>
            <dd> <arrb title="seoul broadcast system">sbs</arrb>방송</dd>
          </dl>
        </li>
      </ul>
    </div>

    <div>
    <h2>클릭시 페이지 이동, 이미지 불러오기</h2>
     <p>
       페이지 이동에 관한 요소는 인라인 요소이므로, 반드시 블럭으로 감싸 주어야 한다. <br />
       <a href="https://never.com" target="_self">naver로 이동</a>
      </p> 
      <p>
        <a href="https://goole.com" target="_blank">구글</a>로 페이지 이동
        
        <div>
          <img src="../img/icon_01.png" alt="불러온 이미지에 대한 이해 가능한 설명" />
          <img src="../img/icon_02.png" alt="불러온 이미지에 대한 이해 가능한 설명" />
         </div> 
         <div>
         <p>
            <a href="http://sbs.co.kr">sbs 찾아가는 길
            <img src="../img/sbs_suwon.png" alt="경기 수원시 팔달구 효원로 295이며, 연락처는 031-234-4670" />
            </a>
          </p>
        </div>
      </p>
    </div>
    <!--a요소의 속성 중 target에는 4가지 속성이 있다.
      _self : 기본속성으로, 현재 페이제에서 이동
      _blank : 새창으로 이동
      _top : iframe요소에서 외부 페이지를 담을때, 페이지 이동을 일부영역이 아닌 곳에서 이동
      _parent : irame요소에서 동작 처리하는 기능

      inline요소는 기본 블럭요소 내부에 처리되어야 하는 기능을 가지고 있으며 inline요소 내부에는 블럭요소를 담지 않는다 라는 규칙이 있으나. 하지만 a요소는 특수한 기능을 가지고 있는 요소로 block요소를 내부에 담을 수 있다.

      단, a요소 내부에 a요소를 담거나 a요소 내부에 버튼의 기능을 가진 요소를 담는 것은 안된다.
    -->    
</body>
</html>
---

#### entity code
- 특수글자를 브라우저에 올바르게 글자로 표현하고 싶을 때 사용
	`<` : &lt;
	`>` : &gt;
	`&`: &amp;
	`copy` : &copy;
	`$` : &dollor;
	한국통화 : &#8361;

코드 참고 사이트 : (https://entitycode.com/), (https://dev.w3.org/html5/html-author/charref)