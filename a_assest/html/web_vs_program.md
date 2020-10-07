## web (vs 프로그램)

vs 프로그램 다운 받는 법.

https://code.visualstudio.com/

---

vscode설치 후 사용할 폴더를 생성한 뒤 해당 폴더에서

오른쪽 마우스 클릭하면 vscode로 열기가 있음

그럼 vscode가 실행되면서 생성된 폴더로 자동 연결.

#### 서버 연결 (browser)
인스톨 후 vscode에서 오른쪽 마우스 클릭 후 서버 연결해주고
"localhost:3000" 입력하면 서버로 연결되어 웹문서가 열림

---

#### html 파일 생성 후
(html:5 or ! 를 입력하면 자동으로 하래 태그들 생성됨)

<!DOCTYPE html>

``` html 
<!DOCTYPE html>
<html lang="ko-kr">

<head>
	(*style외부 링크(css)파일 
    <link rel="stylesheet" href="../css/mpbo.css">)
    <meta charset="UTF-8"> -> 코딩에서 변환하는 프로그래밍 언어 방식
	<title>Document</title>
</head>

<body>

  최초의 인식문서는 index.html이다.

    <a href="./testweb.html">testweb문서</a>
    
    <script></script>  *외부 링크(<script src"..."></script>)

</body>

</html> 
```

---

#### html 요소의 크기 개념

크기를 가질 수 있는 요소 = block (box의 개념을 가진 요소)

크기를 가질 수 없는 요소 = inline (글자의 개념을 가진 요소)

inline-block = inline 요소가 베이스, 크기값을 가질 수 있는 요소

---

#### 링크

**하이퍼 링크**는 페이지간의 이동으로 이동할 홈페이지의 주소를 입력

**마이크로링크**는 하나의 페이지 이동으로 이동할 영역의 id값을 입력
  단, id를 뜻하는 "#"을 무조건 붙여야하며, 다른 선택자는 해당되지 않는다.

하이퍼+마이크로: <a href="file.html#아이디명">이름</a>

**id가 뜻하는 의미는 하나뿐인 이름, 무엇인가 연결(마이크로 링크에서 주로 사용됨)
class가 뜻하는 의미는 단순한 이름**

---

#### float(css)
 float:left | right;
 float을 사용하면, block요소가 한쪽방향에서 순서대로 옆으로 나란히 배치가 된다.
 하나의 요소에 float을 작성했다면 그 형제들은 모두 float을 사용하여야 한다.
 하지만, 부모의 높이값을 auto로 주게되면, 부모의 높이는 0가 된다.
 float의 사전의미 : 뜨다 (아주 높이 뜨다가 아닌 살짝 뜨다)

---
#### 높이와 너비
block요소에서는 width: 기본(auto)은 100%;(부모요소대비) 
 height : 기본(auto)는 0 
  꼭 min-xxx, max-xxx 앞에 height, width를 먼저 써라!!!!
   기본은 width:auto; height: auto; 이지만 꼭꼭꼭 뺴먹지 말고 내용을 쓰자!

---

#### clear both(css)
float 처리된 요소를 강제로 float에서 해제하는 방법

?{display: block; clear both;} *무조건 블록형태로 만든 후 적용*

/* clear는 float기능을 강제로 해제하며, 감싸고 있는 부보요소의 높이가
auto일때 그 높이를 자동으로 늘어나니, 축소되게 만들 수 있는 기능으로
float 요소들의 가장 마지막에 배치하여 처리하도록 한다.
float과 clear는 함께 사용할 수 없다.

참고: 인터넷에서 .clearfix 또는 .cf 라는 이름의 기능 */

.clearFix : after, (비표준. IE,구형브라우저를 위한 것.)
.cleaeFix :: after {} (표준. IE는 모르는 아이)

**after, before 는 clear와 함께 사용됨**

---

#### 여백과 선
margin : 요소와 요소 사이의 눈에 보이는 공백을 처리 (요소간의 여백)
padding: 하나의 요소에서 여백을 만들지만, 다른이가 보기에는 박스가 늘어난 것으로
보인다. (요소 내부를 부풀게 만드는 여백) *box-sixing
border: 하나의 요소에 외곽선을 만드는것으로, 선의 두께만큼 부피를 가져서 다른 요소를 밀어낸다. (요소의 외곽선)
outline: 하나의 요소에 외곽선을 만들지만 선의 두께만큼 밀려내지는 않는다(부피x)
(요소의 외곽선이지만, 특수기능)

---

#### 이미지태그
- 싱글 태그
<img src="상대경로" alt="이미지설명" />

** 싱글 태그를 닫을 땐 항상 한 칸 띄우고 닫기 **

---

#### after, before (css)
** 가상요소 **

가상클래스는,별도의 class를 지정하지 않아도 지정한 것 처럼요소를 선택할 수 있음
(존재하지 않는 요소를 존재하는 것처럼)

ex) p: after,
  p:: after {
    content:":";
  }


- after, before { content : "내용"; }

---

#### position
static - 기본
absolute - 자식
relative - 부모
fixed - 자유인; 웹 페이지 어디든 고정 시켜놓을 수 있는 속성

---

#### 자주 쓰는 태그(문장) 저장
- vscode에서 설정 -> user snippets -> 검색 : html


**저장 시키기 전에 하는 작업**
```
"Print to console": {
	 	"prefix": "y",
	 	"body": [
			"<!DOCTYPE html>",
			"<!-- ${1:문서이름}.html -->",
			"<html lang=\"ko=kr\">",
			"<head>",
			"  <meta charset=\"UTF-8\">",
			"  <link rel=\"stylesheet\" href=\"${2:css파일이름}.css\">",
			"  <title>Document</title>",
			"</head>",
			"<body>",
			"$4",  
			"  <script src=\"${3:파일이름}.js\"></script>",
			"</body>",
			"</html>"
	 	],
	 	"description": "Log output to console"
	 }
} 
**${n:---}는 순서 지정 만약에 모두 다 $1를 적어 넣으면 한 곳만 이름을 써도 전체가 바뀜. **
```
1. vscode에서 설정 -> user snippets -> 검색 : html

2. html.json 파일이 열리면 영어가 솰솰 나오는데 거기서 //example 아래의 문장들의 슬래쉬 부분을 지우고 위에서 만든 태그들을 복사해서 붙여넣기.

```
	 "Print to console": {
	 	"prefix": "y",		(<- 사용자 이름)
	 	"body": [
			"<!DOCTYPE html>",
			"<!-- 문서이름 -->",
			"<html lang=\"ko=kr\">",
			"<head>",
			"  <meta charset=\"UTF-8\">",
			"  <link rel=\"stylesheet\" href=\"\">",
			"  <title>Document</title>",
			"</head>",
			"<body>",
			"",  
			"  <script></script>",
			"</body>",
			"</html>"
	 	],
	 	"description": "Log output to console"
	 }
}
```

---
