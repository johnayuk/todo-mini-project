var mainbox = document.getElementById("modalcontainer");
var close = document.getElementsByClassName("closebtn")[0];
let form = document.getElementById('form');
let inputText = document.getElementById('txt');
let itemHolder = document.querySelector('.list');


// adding event listener to close button
close.addEventListener('click',closeclick);

// function controling the close button
function closeclick(){
    mainbox.style.display='none'
}

//addItem
form.addEventListener('submit', add);
function add(event){
 event.preventDefault();
 let input = document.getElementById('txt').value;
 document.getElementById('txt').value = ""
    //validation
    // if(input==''){
        //     Alert.style.display = 'block';
        
        // setInterval(function(){
            //     Alert.style.display = 'none';
    //    },3000)
    //    return false
    // }else{
        
        // }
        createTodo(input)
       
}

function createTodo(input){
    //create element
    let divtag = document.createElement('div');
    let editbutton = document.createElement('button')
    let deletebutton = document.createElement('button')

// create className
editbutton.className =  "fas fa-edit editbtn "   
deletebutton.className = 'fa fa-trash deletebtn'
divtag.className = 'list-group-item mt-3'
eletenode=document.createTextNode('delete')
divnode= document.createTextNode(input)


//append items
divtag.append(divnode)
divtag.appendChild(editbutton)
divtag.appendChild(deletebutton)

itemHolder.appendChild(divtag)
}



//editing and deleting using windows  onclick
window.onclick = function(e){
    //deleting items
if(e.target.classList.contains('deletebtn')){
    let parentItem =e.target.parentNode
    parentItem.remove();
     }
    
     // making the modal to come up
    if(e.target.classList.contains('editbtn')){
       eventvalue = e.target.parentNode.childNodes[0];
        mainbox.style.display='block';
        
    }

     //editing items
 if(e.target.classList.contains('edt')){
        let itemList = document.querySelectorAll('.list-group-item');
        for(let i = 0; i<itemList.length; i++){
        let itemValue = itemList[i].childNodes[0];
        if(eventvalue==itemValue){
        itemValue.textContent = document.getElementById('input').value;  
    }
        
 }
       
}
    // to close the modal after editing
    if(e.target.classList.contains('edt')){
       mainbox.style.display='none'
   }
//    if outside is clicked
    if(e.target==modalcontainer){
       mainbox.style.display='none'
    }
}



//fiter through each element
let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterItem)

// the filter function
function filterItem(){
    let filtervalue = document.getElementById('filterInput').value;
    let item = document.querySelectorAll('.listItem')

    for(let i = 0; i < item.length; i++){
        let Value = item[i].childNodes[0]
        if(Value.textContent.indexOf( filtervalue) >-1){
        item[i].style.display = ''
        }else{
            item[i].style.display = 'none'
        }
    } 
}
