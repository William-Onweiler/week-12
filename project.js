    var selectRow = null
    //need a api 
    //need band names 
    function onFormSubmit(){
Event.preventDefault();
var FormData = readFormData();
if (seltectedRow === null) {
    insertNewRow(FormData);
} else{
updateRecord(formdata)
}
resetForm();
}
//retrieve data 
    function readFormData(){
        var readFormData = {};
        FormData["band"]= document.getElementById("Band").value;
        FormData["Ganra"]= document.getElementById("Ganra").value;
        FormData["ablum"]= document.getElementById("ablum").value;
        FormData["year founded"]= document.getElementById("year founded").value;
        FormData["how many ablums"]= document.getElementById("how many ablums").value;
        return FormData
    } console.log(reaFormData);
    //insert the data 
    function insertNewRecord(){
        var table = document.getElementById("storelist").getElementsByTagName('tbody')
        var newRow =table.insertRow(table.length);
        var cell1 = newRow.insertCell(0);
        cell1.inerHTML = data.band
        var cell2 = newRow.insertCell(1);
        cell2.inerHTML = data.Ganra
        var cell3 = newRow.insertCell(2);
        cell3.inerHTML = data.ablum
        var cell4 = newRow.insertCell(3);
        cell4.inerHTML = data.yearFounded
        var cell5 = newRow.insertCell(4);
        cell5.inerHTML = data.howManyAblums
        var cell6 = newRow.insertCell(6)
        cell6.inerHTML = <button onClick ='onEdit (this)'>edit</button> = <button onClick='onDelete (this)'>Delete</button>
       
    } console.log(insertNewRecord);
    //edit data
    function onEdit(td){
        selectRow= td.parentElement.parentElement
        document.getElementById('band').value = seltectedRow.cells[0].inerHTML
        document.getElementById('Ganra').value = seltectedRow.cells[1].inerHTML
        document.getElementById('ablum').value = seltectedRow.cells[2].inerHTML
        document.getElementById('year founded').value = seltectedRow.cells[3].inerHTML
        document.getElementById('how many ablums').value = seltectedRow.cells[4].inerHTML
    }
    function updateRecord(formData){
        selectRow.cells[0].inerHTML = formData.band;
        selectRow.cells[1].inerHTML = formData.ganra;
        selectRow.cells[2].inerHTML = formData.ablum;
        selectRow.cells[3].inerHTML = formData.yearFounded;
        selectRow.cells[4].inerHTML = formData.howManyAblums;

    }
//delete the data 
function onDelete (td){
if(confirm('do you want to delete')){
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rpwIdex);

}
resetForm()
}
function resetForm(){
    document.getElementById('band').value = "0";
    document.getElementById('ganra').value = "1";
    document.getElementById('ablum').value = "2";
    document.getElementById('year founded').value = "3";
    document.getElementById('how many ablums').value = "4";
}

fetch('https://reqres.in/api/23')

.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log('error'))

