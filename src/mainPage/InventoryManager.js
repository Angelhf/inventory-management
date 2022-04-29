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
    document.getElementById("itemCreatorTemplate").addEventListener("change", function(){
        changeTemplate();
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
        createTemplateHTML();
        returnToMain();
    })
    document.getElementById("templateCreate").addEventListener("click", function () {
        createTemplateHTML();
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
    'Default': {'Name':"Text", 'Image':"Image", 'Favorite':"Boolean"},
}
template = {
    Name: "Text",
    Image: "Image",
    Favorite: "Boolean"
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
    var templateMenu = document.getElementById('itemCreatorTemplate');
    templateMenu.selectedIndex = null;
    while(templateMenu.firstChild){
        templateMenu.removeChild(templateMenu.lastChild);
    }
    for(var i=0; i<Object.keys(window.templates).length;i++){
        var option = document.createElement("option");
        option.value= Object.keys(templates)[i];
        option.text = Object.keys(templates)[i];
        templateMenu.appendChild(option);
    }
    changeTemplate();
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

function changeTemplate(){
    var templatechoice = document.getElementById('itemCreatorTemplate').value;
    var tem = templates[templatechoice]; 
    var properties = document.getElementById('itemCreatorPropertiesDiv');
    while(properties.firstChild){
        properties.removeChild(properties.lastChild);
    }
    for(var i = 0; i<Object.keys(tem).length;i++){
        var newdiv = document.createElement("div");
        newdiv.id="itemCreatorProperty" +Object.keys(tem)[i]+"Div";
        var input = document.createElement("input");
        if(tem[Object.keys(tem)[i]]=="Text"){
            input.type ="text";
            input.placeholder = "Insert Item " + Object.keys(tem)[i];
        } else if(tem[Object.keys(tem)[i]]=="Image"){
            input.type ="file";
        } else if (tem[Object.keys(tem)[i]]=="Boolean"){
            input.type ="checkbox";
        } else if(tem[Object.keys(tem)[i]]=="Paragraph"){
            input.type ="text";
            input.className="description";
            input.placeholder = "Insert Item" + Object.keys(tem)[i];
        }
        input.id = "itemCreatorProperty" +Object.keys(tem)[i];
        newdiv.innerHTML = Object.keys(tem)[i];
        properties.appendChild(newdiv);
        
        newdiv.appendChild(input);
    }
}

function createItemJavascript(properties) {
    //the template that the item used
    var template = properties[0];
    //creates an item object with each of these traits that all items should have
    var item = {
        //name, image, and favorite are required for all items, and thus will always be required and stored in every item
        name: properties[1],
        image: properties[2],
        favorite: properties[3]
    }
    //for all of the additional information about each item, it will save and add these to the item object that is created
    if (Object.keys(template).length>3){
   for (i = 3; i < Object.keys(template).length; i++) {
       var j = i+1
        property = Object.keys(template)[i];
        item[property] = properties[j]
    }
}
    //pushes the item into the global array
    window.allItems.push(item);
    return item;
}
function createItemHTML() {
    //the template that the item used
    const template = templates[document.getElementById('itemCreatorTemplate').value];
    var itemProperties = [];
    itemProperties.push(template);

    for (i = 0; i < Object.keys(template).length; i++) {
        property = Object.keys(template)[i];
        if(template[Object.keys(template)[i]] == "Image"){
            itemProperties.push(URL.createObjectURL(document.getElementById("itemCreatorProperty" + property).files[0]));
        } else{
        itemProperties.push(document.getElementById('itemCreatorProperty' + property).value);
        }
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
        html += '<div id="' + itemid + '"' + ' class="itemContainer"><button class= "edit hidden editDel" id = "edit' + itemid + '">Edit</button><h3> ' + allItems[i].name + ' </h3><button class ="imageButton" onClick ="fullItemView(' + i + ')"><img src="' + allItems[i].image + '"></button><button class = "delete hidden editDel" id = "delete' + itemid + '" onClick="deleteItemHTML(' + i + ' )">Delete</button></div>';
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
function fullItemView(idnumber){
    var itemView = document.getElementById("fullItemView");
    var mainView = document.getElementById("mainView");
    mainView.appendChild(itemView);
    
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

var properties = ["Text","Image","Boolean","Paragraph"]
for(var i=0; i<properties.length;i++){
    var option = document.createElement("option");
    option.value= properties[i];
    option.text = properties[i];
    elements.appendChild(option);
}
var createPropButton = document.getElementById("templateNewPropertyButton");
templateProperties.insertBefore(optionsdiv, createPropButton);
var propButton= document.getElementById("templateNewPropertyButton");
propButton.classList.toggle("hidden", 1);
}
function newTemplatePropertyHTML(){
    //getting all necessary elements
    var name = document.getElementById("templatePropertyName");
    var type = document.getElementById("templatePropertyType");
    var confirmBtn = document.getElementById("templatePropertyConfirm");
    var div = document.getElementById("templatePropInputDiv");
    var propButton= document.getElementById("templateNewPropertyButton");
    var templateProperties= document.getElementById("templateProperties");
    var nameval = name.value;
    if(nameval==""){
        alert("Please put in a template name");
        return;
        }
    if(window.template.hasOwnProperty(nameval)){
        window.alert("Cannot have two properties with the same name");
        return;
    }
    var typeval = type.value
    //storing values in javascript
    newTemplatePropertyJavascript(nameval, typeval);
    //deletion of unnecessary parts
    name.remove();
    type.remove();
    confirmBtn.remove();
    div.remove();
    //repopulation of page
    newdiv=document.createElement("div");
    newdiv.className = "templateProperty";
    var newname = document.createElement("div");
    var example;
    if(typeval == "Text"){
        example = document.createElement("div");
        example.innerHTML = "Lorem ipsum dolor"
    } else if (typeval =="Image"){
        example = document.createElement("img");
        example.src = "img/Example.jpg";
        example.alt ="Example Image";
        example.className="templateImage";
    } else if (typeval =="Boolean"){
        example = document.createElement("input");
        example.type="checkbox";
    } else if (typeval== "Paragraph"){
        example = document.createElement("p");
        example.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        example.className = "templateDescription";
    }
    var id = Object.keys(window.template).length -1;
    newdiv.id = "property" +(id);
    templateProperties.appendChild(newdiv);
    templateProperties.insertBefore(newdiv, propButton);

    newname = document.createElement("div");
    newname.innerHTML=nameval;
    newdiv.appendChild(newname);
    newdiv.appendChild(example);

    propButton.classList.toggle("hidden", 0);
}
function newTemplatePropertyJavascript(name, type){
window.template[name] = type;
}
function createTemplateHTML() {
    var templatename= document.getElementById("templateName").value;
    var propButton= document.getElementById("templateNewPropertyButton");
    var templateinput =  document.getElementById("templatePropInputDiv");
    propButton.classList.toggle("hidden",0);
    if(templatename==""){
        alert("Please put in a template name");
        return;
        }
    createTemplateJavascript(templatename);
    if(templateinput!==null){
    templateinput.remove();
    }
    for(var i = 3;  i <Object.keys(window.template).length; i++){
        property=document.getElementById("property" + i);
        property.remove();
    }
    document.getElementById("templateName").value = '';
    resetTemplate();
    returnToMain();
}
function createTemplateJavascript(templateName){
    window.templates[templateName] = (template);

}
function resetTemplate(){
    window.template = {
        Name: "Text",
        Image: "Image",
        Favorite: "Boolean"
    }
}


