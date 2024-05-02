    //Кнопки
 { document.addEventListener("DOMContentLoaded", hiddenCloseclick());
  document.getElementById('click-to-hide').addEventListener("click", hiddenCloseclick);
 function hiddenCloseclick() {
 let x = document.getElementById('hidden-element');
      if (x.style.display == "none"){
   x.style.display = "block";
   } else {
 x.style.display = "none"}
    }
 }
 {
 const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "Скрыть элемент";
    } else {
        btn.textContent = "Показать элемент";
    }

    content.classList.toggle("hidden");
}
 }
    //Кнопки
    