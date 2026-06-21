var inpt=document.querySelector("input");
var btn1=document.querySelector("#add");
var todo=document.querySelector(".todolist");
btn1.addEventListener("click" , ()=>{
    var val=inpt.value;
    if(val.trim()==="") return;
    todo.innerHTML +=`<div class="todolist">
            <div class="li">
                <h3 id="task">${val}</h3>
                <div class="btn">
                    <button>Edit</button>
                    <button>Delet</button>
                </div>
            </div>`
            inpt.value="";
})

