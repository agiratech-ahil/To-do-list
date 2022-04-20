var list = document.querySelector("#mylist");
var form = document.querySelector("form");
var item = document.querySelector("#task");

var des = document.querySelector("#text");
var sd = document.querySelector("#another");
var thi = document.querySelector("#thirdtext");

//Opening a textbox for Description and tag

function openDescription() {
  var inp = document.getElementById("checkbox");
  var text = document.getElementById("text");
  var sec = document.getElementById("second");
  var thirdtxt = document.getElementById("thirdtext");
  var thirdch = document.getElementById("third");
  if (inp.checked == true) {
    text.style.display = "flex";
    sec.style.display = "grid";
    thirdtxt.style.display = "grid";
    third.style.display = "grid";
  } else {
    text.style.display = "none";
    sec.style.display = "none";
    thirdch.style.display = "none";
    thirdtxt.style.display = "none";
  }
}
//Displaying the description

function displayDescription() {
  var sectext = document.getElementById("text");
  var secch = document.getElementById("second");
  let des = JSON.parse(localStorage.getItem("desc"));
  if (secch.checked == true) {
    if (des === null) {
      deslist = [];
    } else {
      deslist = des;
    }

    deslist.push(sectext.value);
    localStorage.setItem("desc", JSON.stringify(deslist));
  }
  showDes();
  showTag();
}

function showDes() {
  let des = JSON.parse(localStorage.getItem("desc"));
  var desoutPut = "";
  var showlist1 = document.querySelector(".secondli");

  if (des === null) {
    deslist = [];
  } else {
    deslist = des;
  }
  deslist.forEach((data, index) => {
    desoutPut += `<p>${data}</p>`;
  });
  console.log(desoutPut);
  showlist1.innerHTML = desoutPut;
}

//Opening a tag

function openTag() {
  var thirdtext = document.getElementById("thirdtext");
  var thir = document.getElementById("third");
  let tagItems = JSON.parse(localStorage.getItem("tagItem"));
  if (thir.checked == true) {
    if (tagItems === null) {
      taglist = [];
    } else {
      taglist = tagItems;
    }
    taglist.push(thirdtext.value);
    localStorage.setItem("tagItem", JSON.stringify(taglist));
  }
  showTag();
}

function showTag() {
  var thirdtext = document.getElementById("thirdtext");
  var tagItems = JSON.parse(localStorage.getItem("tagItem"));
  let tagoutPut = "";
  let showlist = document.querySelector(".thirdli");

  if (tagItems === null) {
    taglist = [];
  } else {
    taglist = tagItems;
  }

  taglist.forEach((data, index) => {
    tagoutPut += `<h6>${data}</h6>`;
  });
  console.log(tagoutPut);
  showlist.innerHTML = tagoutPut;
}

//Submitting the title
const inputval = document.getElementById("task");

form.addEventListener("submit", () => {
  let localItems = JSON.parse(localStorage.getItem("localItem"));

  if (localItems === null) {
    tasklist = [];
  } else {
    tasklist = localItems;
  }

  tasklist.push(inputval.value);
  localStorage.setItem("localItem", JSON.stringify(tasklist));
});

showDescription();

function showDescription() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));

  let outPut = "";
  let displayList = document.querySelector(".lists");
  if (localItems === null) {
    tasklist = [];
  } else {
    tasklist = localItems;
  }
  tasklist.forEach((data, index) => {
    outPut += `<li>${data}</li>`;
  });

  displayList.innerHTML = outPut;
  showDes();
  showTag();
}
//Check and clear the completed

list.addEventListener(
  "click",
  function (e) {
    var t = e.target;
    if (t.classList.contains("checked")) {
      t.style.textDecoration = "line-through";
      t.parentNode.removeChild(t);
    } else {
      t.classList.add("checked");
    }
  },

  false
);
