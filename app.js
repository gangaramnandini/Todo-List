let todocontainer=document.getElementById("todo-list-container");
let savebtn=document.getElementById("save-todo");

// localStorage.removeItem("todoobj");

function getfromlocalstorage(){
    let storedValue=localStorage.getItem("todoobj");
    let finalValue=JSON.parse(storedValue);
    if (finalValue===null)
    {
        return [];
    }
    else{
        return finalValue;
    }
}

let todoobj=getfromlocalstorage();

savebtn.onclick=function(){
    localStorage.setItem("todoobj",JSON.stringify(todoobj));
}

let todocount=todoobj.length;

function  currentchanges(checkboxids,labelids,itemid){
    let label=document.getElementById(labelids);
    let checkboxElement = document.getElementById(checkboxids);
    label.classList.toggle('checked');

    let checkIndex=todoobj.findIndex(function(eachItem){
        let eachItemhere="todoitem"+eachItem.unique;
        if(eachItemhere===itemid)
        {
            return true;
        }
        else
        {
            return false;
        }
    });

    let todoobject=todoobj[checkIndex];
        if(todoobject.isChecked===false)
        {
            todoobject.isChecked=true;
        }
        else{
            todoobject.isChecked=false;
        }
}

function deletetodo(itemid){

    let todoitem=document.getElementById(itemid);
    todocontainer.removeChild(todoitem);
    let deletedindex=todoobj.findIndex(function(eachItem){
        let eachItemhere="todoitem"+eachItem.unique;
        if(eachItemhere===itemid)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
    todoobj.splice(deletedindex,1);

}

function createandappendtodoitem(todo){


    let checkboxids="checkbox"+todo.unique;
    let itemid="todoitem"+todo.unique;
    let labelids="label"+todo.unique;


    let todoitem=document.createElement("li");

    todoitem.classList.add("todo-item", "d-flex", "flex-row");
    todoitem.id=itemid;
    todocontainer.appendChild(todoitem);

    let input=document.createElement("input");
    input.id=checkboxids;
    input.type="checkbox";
    input.classList.add("checkbox");
    input.checked=todo.isChecked;
    
    todoitem.appendChild(input);

    let labelcontainer=document.createElement("div");
    labelcontainer.classList.add("labelcontainer", "d-flex", "flex-row", "justify-content-between","align-items-center");
    todoitem.appendChild(labelcontainer);

    let label=document.createElement("label");
    label.setAttribute("for",checkboxids);
    label.textContent=todo.text;
    label.id=labelids;
    if(todo.isChecked===true)
    {
        label.classList.add("checked");
    }
    labelcontainer.appendChild(label);

    let deletecontainer=document.createElement("div");
    deletecontainer.classList.add("deleteiconcontainer");
    labelcontainer.appendChild(deletecontainer);

    let icon=document.createElement("i");
    icon.classList.add("far", "fa-trash-alt", "delete-icon");
    icon.onclick=function(){
        deletetodo(itemid);
    }
    deletecontainer.appendChild(icon);

    
    input.onclick=function(){
        currentchanges(checkboxids,labelids,itemid);
    }


}

for (let todo of todoobj){

    createandappendtodoitem(todo);

}
function addtodo(){
    let userinput=document.getElementById("todo-input");
    if(userinput.value===""){
        alert("Enter proper input");
        return;
    }
    todocount=todocount+1;

    let newobj={
        text:userinput.value,
        unique:todocount,
        isChecked:false
    };

    todoobj.push(newobj);
    createandappendtodoitem(newobj);
    userinput.value="";
}
let btn=document.getElementById("todo-button");
btn.onclick=function(){
    addtodo();
}