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

//storinng the data

function setdata() {
  var text1 = document.getElementById("task");
  var sec = document.getElementById("second");
  let first = document.getElementById("task").value;
  let des = document.getElementById("text").value;
  let tag = document.getElementById("thirdtext").value;
  if (first === "") {
    alert("Please enter the title");
  } else if (des === "") {
    alert("Please enter the description");
  } else if (tag === "") {
    alert("Please enter the tag");
  } else {
    let lists = {
      title: first,
      description: des,
      tags: tag,
    };
    let arr1 = [];
    let deslist = JSON.parse(localStorage.getItem("tasks"));
    if (sec.checked == true) {
      if (deslist != null) {
        deslist.push(lists);
        localStorage.setItem("tasks", JSON.stringify(deslist));
      } else {
        arr1.push(lists);
        console.log(arr1);
        localStorage.setItem("tasks", JSON.stringify(arr1));
      }
    }
  }

  cleartext();
  showdata();
}
//displaying the data

showdata();
function showdata() {
  let task = JSON.parse(localStorage.getItem("tasks"));
  let output = "";
  let displaytitle = document.querySelector("#newli");

  task.forEach((arr1, index) => {
    output += `<input class="mainc" type="checkbox"> <li class="mainli" id="li" onclick="deleteItem(${index})">${arr1.title}</li>`;
    output += `<p>${arr1.description}</p>`;
    output += ` <h6>${arr1.tags}</h6>`;
  });
  displaytitle.innerHTML = output;
  let no = document.getElementById("newli").getElementsByTagName("li").length;
  {
    document.getElementById("total").value = no;
  }
}

//Deleting the task

function deleteItem(index) {
  let task = JSON.parse(localStorage.getItem("tasks"));
  task.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(task));
  showdata();
}

//clear the text after giving enter

function cleartext() {
  var text1 = document.getElementById("task");
  var sec = document.getElementById("second");
  let des = document.getElementById("text");
  let tag = document.getElementById("thirdtext");

  if (sec.checked == true) {
    text1.value = "";
    des.value = "";
    tag.value = "";
  }
}
