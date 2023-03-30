window.addEventListener('load',()=>{
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-form-input");
    const list_el = document.querySelector(".tasks");

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const task = input.value;
        if(!task){
            alert("Lütfen alanı boş bırakmayın.");
            return;
        }

        const task_el = document.createElement("div");

        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        // task_content_el.innerText=task;
        task_el.appendChild(task_content_el);

        const task_el_input = document.createElement("input");
        task_el_input.classList.add("text");
        task_el_input.type="text";
        task_el_input.value=task;
        task_el_input.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_el_input);
        list_el.appendChild(task_el);


        //actions bölümünü oluşturma

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML="Edit";
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="Sıfırla";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);
        

        input.value="";

        task_edit_el.addEventListener("click",()=>{
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_el_input.removeAttribute("readonly");
                task_el_input.focus();
                task_edit_el.innerHTML="Save";
            } 
            else {
                task_el_input.setAttribute("readonly","readonly");
                task_edit_el.innerText="Edit";
            };

        });
        task_delete_el.addEventListener("click",()=>{
            list_el.removeChild(task_el);
        })
    });
   
   
})