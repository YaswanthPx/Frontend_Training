var selectedRow = null;
function onFormSubmit() {
var formData = readFormData();
if(isValid()){
    if (selectedRow == null) {
    insertNewRecord(formData);
    alert("Your details are saved Sucessfully........");
  }
 else{
  updateRecord(formData);
 }
  resetForm();
}
}

function readFormData() {
  var formData = {};
  
  formData["facName"] = document.getElementById("facName").value;
  formData["facDep"] = document.getElementById("facDep").value;
  formData["facSub"] = document.getElementById("facSub").value;
  formData["facAge"] = document.getElementById("facAge").value;
  formData["facPlace"] = document.getElementById("facPlace").value;
  return formData;
}
function resetForm() {
  document.getElementById("facName").value = "";
  document.getElementById("facDep").value = "";
  document.getElementById("facSub").value = "";
  document.getElementById("facAge").value = "";
  document.getElementById("facPlace").value = "";
  selectedRow = null;
}
function insertNewRecord(data) {
  var table = document
  alert("var arrived")
    .getElementById("faclist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.facName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.facDep;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.facSub;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.facAge;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.facPlace;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = `<a onClick="onEdit(this)">Update</a><a onClick="onDelete(this)">Delete</a>`;
}
function onEdit(td)
{if(confirm("Are you upadate your details")){
selectedRow=td.parentElement.parentElement;  
document.getElementById("facName").value=selectedRow.cells[0].innerHTML;
document.getElementById("facDep").value=selectedRow.cells[1].innerHTML;
document.getElementById("facSub").value=selectedRow.cells[2].innerHTML;
document.getElementById("facAge").value=selectedRow.cells[3].innerHTML;
document.getElementById("facPlace").value=selectedRow.cells[4].innerHTML;}
}
function updateRecord(formData)
{
  alert("Your form updated sucessfully.......")
selectedRow.cells[0].innerHTML=formData.facName;
selectedRow.cells[1].innerHTML=formData.facDep;
selectedRow.cells[2].innerHTML=formData.facSub;
selectedRow.cells[3].innerHTML=formData.facAge;
selectedRow.cells[4].innerHTML=formData.facPlace;
}
function onDelete(td)
{
if(confirm("are you want to delete this record")){
  row=td.parentElement.parentElement;
  document.getElementById("faclist").deleteRow(row.rowIndex);
  resetForm();
}
}

function isValid(){
var a=document.getElementById("facName").value;
// var b = document.getElementById("facDep").value;
// var c= document.getElementById("facSub").value;
// var d= document.getElementById("facAge").value;
// var e= document.getElementById("facPlace").value;
if(a==""|| a==null ){return false;}
else
{return true;}

}