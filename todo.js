let taskarr = localStorage.getItem('tasks');
if (taskarr == null)
    arr = [];
else
    arr = JSON.parse(taskarr);
    show();
function addtask() {
    // debugger;

    let note = document.getElementById('notes');
    let task = document.getElementById("task1").value;
    if (task == "") {
        note.innerHTML = "";
        alert("enter a task");

    }
    else if (task != null) {
        arr.push(task);
        localStorage.setItem('tasks', JSON.stringify(arr));
        let data = "";
        note.innerHTML = "";
        for (let i = 0; i < arr.length; i++) {
            data += `<div class="card mr-2 ml-2 mt-2 mb-2" style="width: 20rem;display: inline-block">`
            data += `<div class="card-body">`;
            data += ` <h5 class="card-title">Note ${i + 1}</h5>`;
            data += ` <p class="card-text">${arr[i]}</p>`;
            data += `<button class="btn btn-success" onclick=deletenode(${i})>Delete note</button>`
            data += `</div></div>`;

            note.innerHTML = data;
        }

    }
}

function show() {
    let note = document.getElementById('notes');
    if (arr.length != []) {

        note.innerHTML = "";
        let data = "";
        for (let i = 0; i < arr.length; i++) {
            data += `<div class="card mr-2 ml-2 mt-2 mb-2 card" style="width: 20rem;display: inline-block">`
            data += `<div class="card-body">`;
            data += ` <h5 class="card-title">Note ${i + 1}</h5>`;
            data += ` <p class="card-text">${arr[i]}</p>`;
            data += `<button class="btn btn-success" onclick=deletenode(${i})>Delete note</button>`
            data += `</div></div>`;
            note.innerHTML = data;
        }
    }
    else {
        note.innerHTML = "<h4 class='mt-3 text-center' >Nothing to Show here ! Click on ADD TASK </h4>";
    }
}

function deletenode(index) {
    arr.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(arr));
    show();
}
function deleteall()
{
    localStorage.clear();
    let note = document.getElementById('notes');
    note.innerHTML="<h4 class='mt-3 text-center' >Deleted all Notes</h4>";
    
}

let search=document.getElementById("searchnote");
search.addEventListener("input",function()
{
   let ele=search.value.toLowerCase();
   let card=document.getElementsByClassName('card');
//    console.log(card);
Array.from(card).forEach(function(item)
{
  let p=item.querySelector('.card-text').innerText.toLowerCase();
//   console.log(p);
  if(p.includes(ele))
  {
      item.style.display="inline-block";
  }  
  else
  {
    item.style.display="none";
    note.innerHTML="<h4 class='mt-3 text-center' >No such element found.</h4>"
  }
})
});
