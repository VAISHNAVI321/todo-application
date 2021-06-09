window.onload = () => {
    const form1 = document.querySelector("#addForm");
    let items = document.getElementById("items");
    let submit = document.getElementById("submit");
    
    let editItem = null;

    form1.addEventListener("submit",addItem);
    items.addEventListener("click",removeItem);
};

function addItem(i)
{
    i.preventDefault();

    if(submit.value != "Submit")
    {
        console.log("hello");
        editItem.target.parentNode.childNodes[0].data = document.getElementById("item").value;
        submit.value = "Submit";
        document.getElementById("item").value = "";
        document.getElementById("addsuccess").innerHTML = "text edited successfully";
        document.getElementById("addsuccess").style.display = "block";

        setTimeout(function(){
            document.getElementById("addsuccess").style.display = "none";
        },4000);
        return false;
    }
    let newItem = document.getElementById("item").value;
    if(newItem.trim()==" " || newItem.trim()==null)
    {
        return false;
    }
    else
    {
        document.getElementById("item").value = " ";
    }

    let list = document.createElement("li");
    list.className = "list-group1";

    let deleteButton = document.createElement("button");
    deleteButton.className = "ulists delete";
    deleteButton.append(document.createTextNode("Delete"));

    let editButton = document.createElement("button");
    editButton.className = "ulists edit";
    editButton.append(document.createTextNode("Edit"));
    
    list.appendChild(document.createTextNode(newItem));
    list.appendChild(deleteButton);
    list.appendChild(editButton);
    items.appendChild(list);
}

function removeItem(i)
{
    i.preventDefault();
    if(i.target.classList.contains("delete"))
    {
        if(confirm("Are you Sure?"))
        {
            let li = i.target.parentNode;
            items.removeChild(li);
            document.getElementById("addsuccess").innerHTML = "Text Deleted Successfully!";
            document.getElementById("addsuccess").style.display = "block";

            setTimeout(function(){
                document.getElementById("addsuccess").style.display = "none";
            },4000);
        }
    }
    if(i.target.classList.contains("edit"))
    {
        document.getElementById("item").value = i.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = i;
    }
}

