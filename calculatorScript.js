// document.body;
//creating a div element with id= outer-container
let OC_div = document.createElement("div");
OC_div.id = "outer-container";
OC_div.style.width = "100%";

//adding the newly created OC_div to the html body
document.body.appendChild(OC_div);

//creating a div with id=calc
let calc_div = document.createElement("div");
calc_div.id = "calc";

//creating a div with id=disp
let disp_div = document.createElement("div");
disp_div.id = "disp";

//creating a div with id=btns
let btns_div = document.createElement("div");
btns_div.id = "btns";
//adding a style to the div
btns_div.style.display = "grid";
btns_div.style.gridTemplateColumns = "repeat(4, 1fr)";
btns_div.style.gridTemplateRows = "repeat(5, 1fr)";

//creating the buttons using a for loop to add all these buttons inside the "btns" div
//and adding className for all the created buttons
//attaching the buttons to the Btns div
for (let i = 1; i < 20; i++) {
  let button = document.createElement("button");
  button.className = "calc-btns";
  btns_div.appendChild(button);
  button.addEventListener("click", UpdateDisplay);
}

let button = btns_div.children;
// console.log("lllllll: " + button.length);

//button.addEventListener("click",UpdateDisplay);
function UpdateDisplay(e) {
  if (
    (e.target.classList.contains("calc-btns") ||
    e.target.classList.contains("operator")) &&
    !e.target.classList.contains("ClearLastDigit") &&
    !e.target.classList.contains("eq")&&
    e.target.id != "clearAll-btn"
  ) {
    console.log(e.target.value);
    if (p.innerText == "00") {
      p.innerText = "";
      p.innerText += e.target.value;
    } else {
      p.innerText += e.target.value;
    }
  } else if (e.target.classList.contains("clear")) {
    console.log(e.target.value);
    console.log("clear")
    p.innerHTML = "00";
  } else if (e.target.classList.contains("ClearLastDigit")) {
    p.innerHTML = p.innerText.slice(0, -1);
  }
  else if(e.target.classList.contains("eq")){
    console.log(eval(p.innerText));
    p.innerHTML = eval(p.innerText);
  }
}


//attaching div (btns_div) to sisp_div
calc_div.appendChild(btns_div);
OC_div.appendChild(calc_div);

//adding a className to the First child element of the btns-div
let clearBtn = btns_div.firstElementChild;
clearBtn.id = "clearAll-btn";
clearBtn.classList.add("clear");
//providing a name to this button
clearBtn.textContent = "C";
// clearBtn.style.fontSize="25px";
clearBtn.style.color = "red";

//applying the style to the equal button
let equalsBtn = btns_div.lastChild;
equalsBtn.style.gridColumn = "3/5";
// console.log(button.length);

//creating a p tag element and adding it to the disp_div
let p = document.createElement("p");
p.classList.add("calc-display");
p.textContent = "00";
disp_div.appendChild(p);

//adding the disp_div as a child to the calc div
calc_div.insertBefore(disp_div, btns_div);

//Adding values to the caculator buttons
//Del Button
let clearOneVal = btns_div.children[1];
clearOneVal.innerHTML = "&larr;";
clearOneVal.classList.add("ClearLastDigit");
//clearOneVal.setAttribute("value", "clearOneVal");

//DOt Button
let dotBtn = btns_div.children[2];
dotBtn.textContent = ".";
dotBtn.setAttribute("value", ".");

//Operator Button -- Multiplication
let multiplyBtn = btns_div.children[3];
multiplyBtn.classList.add("operator");
multiplyBtn.textContent = "*";
multiplyBtn.setAttribute("value", "*");

//Number 7 Btn
let btn_7 = btns_div.children[4];
btn_7.textContent = "7";
btn_7.setAttribute("value", "7");

//Number 8 btn
let btn_8 = btns_div.children[5];
btn_8.textContent = "8";
btn_8.setAttribute("value", "8");

//Number 9 btn
let btn_9 = btns_div.children[6];
btn_9.textContent = "9";
btn_9.setAttribute("value", "9");

//Operator Button -- Division
let division_btn = btns_div.children[7];
division_btn.classList.add("operator");
division_btn.textContent = "/";
division_btn.setAttribute("value", "/");

//Number 4 Btn
let btn_4 = btns_div.children[8];
btn_4.textContent = "4";
btn_4.setAttribute("value", "4");

//Number 5 Btn
let btn_5 = btns_div.children[9];
btn_5.textContent = "5";
btn_5.setAttribute("value", "5");

//Number 6 Btn
let btn_6 = btns_div.children[10];
btn_6.textContent = "6";
btn_6.setAttribute("value", "6");

//Operator Button -- minus
let minus_btn = btns_div.children[11];
minus_btn.classList.add("operator");
minus_btn.textContent = "-";
minus_btn.setAttribute("value", "-");

//Number 1 Btn
let btn_1 = btns_div.children[12];
btn_1.textContent = "1";
btn_1.setAttribute("value", "1");

//Number 2 Btn
let btn_2 = btns_div.children[13];
btn_2.textContent = "2";
btn_2.setAttribute("value", "2");

//Number 3 Btn
let btn_3 = btns_div.children[14];
btn_3.textContent = "3";
btn_3.setAttribute("value", "3");

//Operator Button -- plus
let plus_btn = btns_div.children[15];
plus_btn.classList.add("operator");
plus_btn.textContent = "+";
plus_btn.setAttribute("value", "+");

//Number 0 Btn
let btn_0 = btns_div.children[16];
btn_0.textContent = "0";
btn_0.setAttribute("value", "0");

//Number 00 Btn
let btn_00 = btns_div.children[17];
btn_00.textContent = "00";
btn_00.setAttribute("value", "00");

//Equals Button
let equals_btn = btns_div.children[18];
equalsBtn.classList.add("eq");
equals_btn.textContent = "=";
//equals_btn.setAttribute("value", "=");



console.log(document.body);


document.addEventListener("keyup", addData);
function addData(e){
    
    console.log(e.key);
    if(e.key>=0 && e.key<=9){
        if(p.innerText == "00"){
            p.innerText = "";
            p.innerText = p.innerText+e.key;
        }
        else{
            p.innerText = p.innerText+e.key;
        }
    }else{
        alert("Only number are allowed");
    }
}

