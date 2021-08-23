// template
const homeTemplate = require("./pages/home.hbs");
const memoTemplate = require("./pages/memo.hbs");
const photoTemplate = require("./pages/photo.hbs");
const alarmTemplate = require("./pages/alarm.hbs");

const Home = homeTemplate();
const Memo = memoTemplate();
const Alarm = alarmTemplate();
const Photo = photoTemplate();

const routes = {
  "/": Home,
  "/home": Home,
  "/memo": Memo,
  "/alarm": Alarm,
  "/photo": Photo,
};

// entry point
function initialRoutes(el) {
  let route = "/";
  Object.keys(routes).forEach((hashRoute) => {
    if (window.location.hash.replace("#", "") === hashRoute.replace("/", "")) {
      route = routes[hashRoute];
    }
  });
  renderHTML(el, route);

  window.addEventListener("hashchange", () => {
    return renderHTML(el, getHashRoute());
  });
}

// get hash history route
function getHashRoute() {
  let route = "/";
  Object.keys(routes).forEach((hashRoute) => {
    if (window.location.hash.replace("#", "") === hashRoute.replace("/", "")) {
      route = routes[hashRoute];
    }
  });

  return route;
}

// set hash history
function hashRouterPush(pathName, el) {
  renderHTML(el, getHashRoute());
}

// render
function renderHTML(el, route) {
  el.innerHTML = route;
}

module.exports = {
  initialRoutes,
  hashRouterPush,
};
