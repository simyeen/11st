// css
import "./css/style.css";
import "./css/nav.css";
import "./css/memo.css";

// router
import { initialRoutes, hashRouterPush } from "./router";
import { handleMemo } from "./module/memo";
import { handleAlarm } from "./module/alarm";
import { handlePhoto } from "./module/photo";
import { handleNav } from "./module/nav";

// app division
const contentDiv = document.querySelector("#hash-app");

// Hash History
const hashAppDiv = document.querySelector("#hash-app");

initialRoutes(hashAppDiv);

window.onload = () => {
  const hashLinker = document.querySelectorAll("a.hash");

  hashLinker.forEach((el) => {
    el.addEventListener("click", (evt) => {
      const pathName = evt.target.getAttribute("href");

      hashRouterPush(pathName, hashAppDiv);
      console.log(pathName);

      handleNav();
      if (pathName === "#alarm") {
        handleAlarm();
      }
      if (pathName === "#photo") {
        handlePhoto();
      }
      if (pathName === "#memo") {
        handleMemo();
      }
    });
  });
};

const newBtn = document.getElementById("new-button");
const toDoForm = document.querySelector(".toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDos = document.querySelector(".toDos");

newBtn.addEventListener("click", () => {
  toDoInput.style.display = "block";
  console.log("클릭");
});

function paintToDo(toDo) {
  const div = document.createElement("div");
  const p = document.createElement("p");
  p.innerHTML = toDo;
  div.appendChild(p);
  toDos.appendChild(div);
  toDoInput.style.display = "none";
}

function createToDo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  paintToDo(toDo);
  toDoInput.value = "";
}

contentDiv.addEventListener("submit", createToDo);
