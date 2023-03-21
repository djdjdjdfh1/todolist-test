let count = 0; // 완료한 할일의 갯수
const toDoH2 = document.querySelector("#todo_count");
const todoForm = document.querySelector("#todo_form");
todoForm.addEventListener("submit", handleToDo);

function handleToDo(event) {
    event.preventDefault();

    const todoText = document.querySelector("#todo_text");
    const todoValue = todoText.value;
    todoText.value = "";
    paintToDo(todoValue);
    
    //카운트함수 실행
    countToDo();
}

/* 입력받은값 화면에 출력시키는 함수 */
function paintToDo(todoValue) {
    // ul에 li 및 값 넣기
    const todoList = document.querySelector("#todo_list")
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    const span = document.createElement("span");
    span.innerHTML = todoValue;
    const button = document.createElement("button");
    button.innerHTML = "X";

    todoList.appendChild(li);
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);
    
    // 이벤트리스너-> 여러개의 함수를 실행시킬수 있다
    button.addEventListener("click", deleteToDo, countToDo);
    input.addEventListener("click", checkToDo, countToDo);
}

/* 버튼누르면 li삭제하는 함수 */
function deleteToDo(event) {
    const li = event.target.parentNode;
    li.remove();

    // 삭제할때 카운트값이 변동이 없어서, 완료한 할일의 값이 안변함
    // 조건문을 안다니 카운트가 마이너스값으로 계속 떨어짐
    // 삭제버튼의 형제태그인 체크박스의 값을 불러온뒤 ,체크드의 값을 확인
    console.log(li.firstElementChild.checked);

    // 체크된 상태에서 다른것을 삭제했을때 카운트 값에 -1이 되지않으려면
    // 체크된 상태에서 카운트가 1이상 되어야함
    if(count>0 && li.firstElementChild.checked) {
        --count;
    } 

    // 리스트삭제후 카운트 투두실행(리스트의 길이로 전체할일을 구하기 때문)
    countToDo();
}

/* 체크박스 누르면 색변경하는 함수 */
function checkToDo(event) {
    const checkBox = event.target;
    if(checkBox.checked) {
        checkBox.parentNode.style.color = "lightgray"
        ++count;
        countToDo();
    } else {
        checkBox.parentNode.style.color = "";
        --count;
        countToDo();
    }
}

/* 할일의 갯수를 구하는 함수 */ 
function countToDo() {
    const allToDo = document.querySelectorAll("li");
    toDoH2.innerHTML = `전체 할일 : ${allToDo.length} / 완료한 할일 : ${count}`;
    //히든 클래스 없애는 자리는 갯수를 다 계산한뒤
    toDoH2.classList.remove("hidden");
}