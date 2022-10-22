let i = 3; 
let l = 1;
function creation(){
if (l == 1)
{
    document.getElementById("table1").innerHTML += `<tr id="1">
                                                        <td>1</td> 
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr id="2">
                                                        <td>2</td> 
                                                        <td></td>
                                                        <td></td>
                                                    </tr>`;
    l = 0;
    var element1 = document.getElementById("add");
    element1.removeAttribute("disabled");
    var element2 = document.getElementById("delete");
    element2.removeAttribute("disabled");
}
else
{
    alert("Error. The table has already been created. Please, select another option.");
}
}
function adding(){
    document.getElementById("table1").innerHTML += `<tr id="`+i+`">
                                                        <td>`+i+`</td> 
                                                        <td></td>
                                                        <td></td>
                                                    </tr>`;
    i = i + 1;
}

function deleting(){

    var input_number = document.getElementById("snumber").value;
    var node = document.getElementById(input_number);
    node.innerHTML = "";

   /* var element = document.getElementById("table1");
    var node = document.getElementById();
    element.removeChild(node); */
}