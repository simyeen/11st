// css
import "./css/style.css";
import "./css/nav.css";

// router
import { initialRoutes, hashRouterPush } from "./router";
import { handleMemo } from "./module/memo";
import { handleAlarm } from "./module/alarm";
import { handlePhoto } from "./module/photo";
import { handleNav, init } from "./module/nav";

// app division

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

// 1. 새로고침시에 기존의 url을 받아서 그걸로 초기화하고싶다.
