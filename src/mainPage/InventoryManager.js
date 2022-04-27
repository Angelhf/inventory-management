window.addEventListener("DOMContentLoaded", domLoaded);
//Sprint 1

function domLoaded() {
    //When the create item button in the main page is clicked, it opens the item creator view
    document.getElementById("createItemMain").addEventListener("click", function () {
        createItemPopup();
    })
    //When the cancel button is clicked in the item creator, it returns to the main view.
    document.getElementById("itemCreatorCancel").addEventListener("click", function () {
        returnToMain();
    })
    //when the confirm button is clicked in the item creator, create the item, and then return to the main page
    document.getElementById("itemCreatorConfirm").addEventListener("click", function () {
        createItemHTML();
        returnToMain();
    })
    document.getElementById("toggleEditDelete").addEventListener("click", function () {
        editDeleteVis();
    })
    document.getElementById("template-btn").addEventListener("click",function(){
        createTemplatePopup();
    })
    document.getElementById("templateCancel").addEventListener("click", function () {
        returnToMain();
    })
    document.getElementById("templateCreate").addEventListener("click", function () {

        returnToMain();
    })
    document.getElementById("templateNewPropertyButton").addEventListener("click", function () {
        newTemplatePropertyInput();
    })
}
//GLOBAL VARIABLES
//global array that stores every item
allItems = [];
//global variable that holds all templates
templates = {
    'Default': ["name", "image", "favorite"],
    'template': ["name", "image", "favorite", "userProperty1", "userProperty2"]
}
template = {
    name: "Text",
    image: "Image",
    favorite: "Boolean"
}

//ITEM CREATOR FUNCTIONS

function returnAllItems() {
    return allItems;
}
function clearAllItems() {
    allItems = [];
}
//shows the item creator view
function createItemPopup() {
    //gets the item creator div
    creator=document.getElementById("itemCreatorContainer");
    //toggles it from hidden to visible
    creator.classList.toggle("hidden");
    //gets the main page div
    main = document.getElementById('mainView');
    //toggles the main page div from visible to hidden
    main.classList.toggle("hidden");
}
//goes back to main from the item creator, and adds the item to every global array it needs to be in

function createItemJavascript(properties) {
    //the template that the item used
    template = templates[properties[2]];
    //creates an item object with each of these traits that all items should have
    var item = {
        //name, image, and favorite are required for all items, and thus will always be required and stored in every item
        name: properties[0],
        image: properties[1],
        favorite: properties[2]
    }
    //for all of the additional information about each item, it will save and add these to the item object that is created
    for (i = 3; i < template.length; i++) {
        property = template[i];
        item[property] = properties[i]
    }
    //pushes the item into the global array
    window.allItems.push(item);
    return item;
}
function createItemHTML() {
    //the template that the item used
    const template = templates[document.getElementById('itemCreatorTemplate').value];
    var itemProperties = [];
    itemProperties.push(document.getElementById('itemCreatorPropertyName').value);
    itemProperties.push(URL.createObjectURL(document.getElementById("itemCreatorPropertyImage").files[0]));
    itemProperties.push(document.getElementById('itemCreatorTemplate').value);
    itemProperties.push(document.getElementById('itemCreatorFavorite').value);
    for (i = 4; i < template.length; i++) {
        itemProperties.push(document.getElementsById('itemCreatorProperty' + property));
    }
    createItemJavascript(itemProperties);
}

function deleteItemPopup(idnumber, itemid) {
    if(confirm("Are you sure you want to delete this item?")){
        deleteItemHtml(idnumber, itemid);
    }

}
//MAIN PAGE FUNCTIONS

function deleteItemHTML(idnumber) {
    const itemid = 'item' + idnumber;
    const deleteditem = document.getElementById(itemid);
    deleteditem.remove();
    deleteItemArray(idnumber);
    alert("Item Permanently Deleted.");
}
function deleteItemArray(idnumber) {
    allItems.splice(idnumber, 1);
}

//used to repopulate the main page with all items that exist in the page
function repopulateMain() {
    //creates an empty html string that will be used to insert each item into the main view
    html = "";
    //if there are no items, don't do anything
    if (allItems.length == 0) {
        return;
    }
    for (i = 0; i < window.allItems.length; i++) {
        itemid = 'item' + i;
        html += '<div id="' + itemid + '"' + ' class="itemContainer"><button class= "edit hidden editDel" id = "edit' + itemid + '">Edit</button><h3> ' + allItems[i].name + ' </h3><img src="' + allItems[i].image + '"> <button class = "delete hidden editDel" id = "delete' + itemid + '" onClick="deleteItemHTML(' + i + ', )">Delete</button></div>';
    }
    //adds the html of every item to the html to repopulate it
    document.querySelector(".itemsMain").innerHTML = html;
}
function returnToMain() {
    //always repopulate the main page first.
    repopulateMain();
    templatepage=document.getElementById("templateContainer");
    templatepage.classList.toggle("hidden",1);
    creator=document.getElementById("itemCreatorContainer");
    creator.classList.toggle("hidden",1);
    main = document.getElementById('mainView');
    main.classList.toggle("hidden",0);


}
function editDeleteVis() {
    editDeletes = document.getElementsByClassName("editDel");
    for (i = 0; i < editDeletes.length; i++) {
        editDeletes[i].classList.toggle("hidden");
        editDeletes[i].classList.toggle("visible");
    }
}




//TEMPLATE PAGE FUNCTIONS

function createTemplatePopup() {
    templatepage=document.getElementById("templateContainer");
    templatepage.classList.toggle("hidden");
    main = document.getElementById('mainView');
    main.classList.toggle("hidden");
 }
function newTemplatePropertyInput(){
var templateProperties= document.getElementById("templateProperties");
var optionsdiv= document.createElement("div");
optionsdiv.id="templatePropInputDiv";
templateProperties.appendChild(optionsdiv);
var name = document.createElement("input");
name.id="templatePropertyName";
var confirm = document.createElement("button");
confirm.id="templatePropertyConfirm";
confirm.type="button";
confirm.innerHTML="confirm";
confirm.text="confirm";
confirm.onclick = function(){newTemplatePropertyHTML()};
var elements=document.createElement("select");
elements.id="templatePropertyType";
optionsdiv.appendChild(name);
optionsdiv.appendChild(elements);
optionsdiv.appendChild(confirm);

var properties = ["Text","Image","Boolean","LongText"]
for(var i=0; i<properties.length;i++){
    var option = document.createElement("option");
    option.value= properties[i];
    option.text = properties[i];
    elements.appendChild(option);
}
var createPropButton = document.getElementById("templateNewPropertyButton");
templateProperties.insertBefore(optionsdiv, createPropButton);
var propbutton= document.getElementById("templateNewPropertyButton");
propbutton.classList.toggle("hidden", 1);
}
function newTemplatePropertyHTML(){
    //getting all necessary elements
    var name = document.getElementById("templatePropertyName");
    var type = document.getElementById("templatePropertyType");
    var confirmbtn = document.getElementById("templatePropertyConfirm");
    var div = document.getElementById("templatePropInputDiv");
    var propbutton= document.getElementById("templateNewPropertyButton");
    var nameval = name.value;
    var typeval = type.value
    //storing values in javascript
    newTemplatePropertyJavascript(nameval, typeval);
    //deletion of unnecessary parts
    name.remove();
    type.remove();
    confirmbtn.remove();
    div.remove();
    //repopulation of page
    newdiv=document.createElement("div");
    newdiv.className = "templateProperty";
    newname = document.createElement("div");
    newname.innerhtml=nameval;
    

    propbutton.classList.toggle("hidden", 0);

}
function newTemplatePropertyJavascript(name, type){
window.template[name] = type;
}
function createTemplateHTML() { }
function createTemplateJavascript(){
}
function deleteTemplate() { }
