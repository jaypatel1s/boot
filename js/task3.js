var sum = 0;

var i = 0;

function AddNewRow() {
  let h2 = $("#click");

  sum++;
  i++;
  var table = `<tr >
  <td id="rollno">${sum}</td><td><input type="text" id="txtname${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtmaths${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtenglish${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtscience${i}"  onchange="AddNewData(${i})"></td>
  <td id="total${i}" class="TotalMarks"></td>
  <td id="percentage${i}"></td>
  </tr>`;
 

  $('h2#click').append(table);
}



$("input").change(function(index)
{
  

  var j;
  for (j = 1; j <= index; j++) {
    var maths = $("#txtmaths" + j).val();
    var english = $("#txtenglish" + j).val()
    var science =$("#txtscience" + j)[0]
    var total = Number(maths) + Number(english) + Number(science);
    $("#total" + j)[0];
    var percentage = Number(total / 300) * 100;
    $("percentage" + j).innerHTML = percentage;

    var row = rollno.length == undefined ? 1: rollno.length;
    $("st1").innerHTML = row;

    const TotalMarks = $(".TotalMarks");
    let TotalMarksArray = [];
    TotalMarks.forEach((el) => {
      TotalMarksArray.push(el.innerHTML);
    });

    TotalMarksArray.sort(function (a, b) {
      return b - a;
    });
    $("#max")[0] = TotalMarksArray[0];

    TotalMarksArray.sort(function (a, b) {
      return a - b;
    });
    $("#min")[0] = TotalMarksArray[0];


    const initial = 0;
    const avg =
      TotalMarksArray.reduce((a, b) => Number(a) + Number(b), initial) /
      TotalMarksArray.length;
    document.getElementById("avg").innerHTML = avg;
  
}
})
