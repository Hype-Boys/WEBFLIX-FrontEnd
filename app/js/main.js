const joinbutton = document.querySelector(".join_form");
const HomeLogo = document.querySelector(".Home_logo");
const loginbutton = document.querySelector('.signup_button');
const idInput = document.querySelector(".ID");
const pwInput = document.querySelector(".PASSWORD");


HomeLogo.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/index.html";
})

joinbutton.addEventListener("click", (event) => {
  event.preventDefault();
  window.location = "../../public/html/join.html";
});


function CheckId(str)
{
	let reg_id = /[s][0-9][0-9][0][0-9][0-9][@][g][s][m][.][h][s][.][k][r]/;
    if(!reg_id.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function loginBtn() {
  let obId = document.getElementById("id");
	if (!obId.value) {
		alert("아이디을 입력해주십시오.");
		obId.focus();
		return;
	}
	else {
		if(!CheckId(obId.value)){
			alert("아이디 형식이 잘못되었습니다.");
			obId.focus();
			return;
		}
    else {
      var id, pw
      id = document.querySelector('#id').value;
      pw = document.querySelector('#pw').value;
      (async function loginBtn() {
        await fetch("http://192.168.205.56:8080/WEBFLIX/auth", {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify({
            email: id,
            password: pw,
          }),
          headers:{
            "Content-type": "application/json"
          },
        })
        window.location = "../../public/html/mbti.html";
      })()

    }
	}
}