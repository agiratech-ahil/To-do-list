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

  if (secch.checked == true) {
    sectext.style.display = "block";

    list.innerHTML += "<h3 >" + des.value + "</h3>";
  }
  des.value = "";
  store();
}

//Opening a tag

function openTag() {
  var thirdtext = document.getElementById("thirdtext");
  var thir = document.getElementById("third");
  if (thir.checked == true) {
    thirdtext.style.display = "block";
    list.innerHTML += "<h6 >" + thi.value + "<h6>";
  }
  thi.value = "";
  store();
}

//Submitting the title

form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();

    if (item.value == "") {
      alert("Please enter a title");
    } else {
      list.innerHTML += "<li>" + item.value + "</li>";
    }
    store();
    item.value = "";
    console.log(item.value);

    // let no = document
    //   .getElementById("mylist")
    //   .getElementsByTagName("li").length;
    // document.getElementById("total").value = no;
    // store();
  },
  false
);
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
    store();
  },
  false
);

function store() {
  window.localStorage.myitems = list.innerHTML;
}

function getValues() {
  var storedValues = window.localStorage.myitems;
  if (!storedValues) {
  } else {
    list.innerHTML = storedValues;
  }
}
getValues();
