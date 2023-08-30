let char = prompt("y : 글쓰기, all : 수정");
if(char == 'y'){
    document.querySelector("#app").innerHTML = "<button>글쓰기</button>"
}else{
    document.querySelector("#app").innerHTML = "<button>글수정</button>"
}