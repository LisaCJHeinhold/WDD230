const inputbutton = document.querySelector("button");
const userinput = document.querySelector("#favchap");
const mylist = document.querySelector("#list");

inputbutton.addEventListener('click', () => {
    //make sure input is not blank
    if (userinput.value == ""){
        return;
    };
    //create a list element (li)
    const newlistitem = document.createElement('li');
    //create delete button
    const deletebutton = document.createElement('button');
    //use textcontent to fill new list item
    newlistitem.textContent = userinput.value;
    //add X to button
    deletebutton.textContent = '❌';
    //append li and delete button
    newlistitem.appendChild(deletebutton);
    //add to list
    mylist.appendChild(newlistitem);
    //add event listener to delete bttton that removes item
    deletebutton.addEventListener('click', () => {
        newlistitem.remove();
    });
    //sent focus back to input element
    userinput.focus();
    //clear input box
    userinput.value = "";
});
