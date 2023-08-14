console.log('welcome');
shownotes();

let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",fun1);
function fun1(e)
{
    let addtxt=document.getElementById('addtxt');
    let notes=localStorage.getItem("notes");
    if(notes==null){
    notesobj=[];
     }
    else
    {
    notesobj=JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem('notes',JSON.stringify(notesobj));
    addtxt.value='';
    shownotes();

}
function shownotes()
{
    let notes=localStorage.getItem("notes");
    if(notes==null){
    notesobj=[];
     }
    else
    {
    notesobj=JSON.parse(notes);
    }
    let html='';
    notesobj.forEach(function(element,index) {
        html+=` <div class="notecard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenote(this.id)" class="btn btn-primary">Delete</button>
        </div>
    </div>
    `
   
        
    });
    let noteselm=document.getElementById("notes");
    if(notesobj.length!=0)
    {
    noteselm.innerHTML=html;
    }
    else
    {
    noteselm.innerHTML=`Nothing to show`;
    }
    
}
function deletenote(index)
{
    let notes=localStorage.getItem("notes");
    if(notes==null){
    notesobj=[];
     }
    else
    {
    notesobj=JSON.parse(notes);
    }
    notesobj.splice(index,1);
     localStorage.setItem("notes",JSON.stringify(notesobj));
     shownotes();
    
}
