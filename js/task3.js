var sum=0;

var i=0;

function AddNewRow(){
  let h2 = document.getElementById("click");


  
sum++;
i++;
var table=
  `<tr id="demo${i}"><td id="roll"> ${sum}</td><td><input type="text" id="txtname${i}" onchange="AddNewData(${i})"></td><td>
  <input type="number" id="txtmaths${i}" minlength="1" maxlength="2"  onchange="AddNewData(${i})" ></td><td>
  <input type="number" id="txtenglish${i}" onchange="AddNewData(${i})" ></td><td>
  <input type="number" id="txtscience${i}" onchange="AddNewData(${i})"></td>
  <td id="total${i}"></td>
 <td id="percentage${i}"></td><td> <button
 type="button"
 class="btn  bg-success text-white"
 onclick="DeleteRow(${sum})"
>
 Delete Row
</button></td></tr>`
    h2.insertAdjacentHTML("beforeend",table);  


};

    



function AddNewData(index) {
//   var maths=document.getElementById("txtmaths").value;
//   var english=document.getElementById("txtenglish").value;
//   var science=document.getElementById("txtscience").value;
var j
//   var total =Number(maths)+Number(english)+Number(science);

//   document.getElementById("total").innerHTML=total;

//   var percentage =Number(total/300)*100;
//   document.getElementById("percentage").innerHTML=percentage;

  for(j=1;j<=index;j++){
    var maths=document.getElementById("txtmaths"+j).value;
    var english=document.getElementById("txtenglish"+j).value;
    var science=document.getElementById("txtscience"+j).value;
    var total =Number(maths)+Number(english)+Number(science);

    document.getElementById("total"+j).innerHTML=total;
  
    var percentage =Number(total/300)*100;
    document.getElementById("percentage"+j).innerHTML=percentage;

  }

 
 

}

function DeleteRow(p){
var element=document.getElementById("demo"+p);
console.log(element)
element.remove(p);
i--;
sum--;
}


 