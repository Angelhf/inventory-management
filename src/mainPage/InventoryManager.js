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
        createItemConfirmHelper();
        returnToMain();
    })
    document.getElementById("toggleEditDelete").addEventListener("click", function () {
        editDeleteVis();
    })
    document.getElementById("template-btn").addEventListener("click",function(){
        createTemplatePopup();
    })
}
//global array that stores every item
allItems = [];
//global variable that holds all templates
templates = {
    'Default': ["name", "image", "Default", "favorite"],
    'template': ["name", "image", "template", "favorite", "userProperty1", "userProperty2"]

}
function returnAllItems() {
    return allItems;
}
function clearAllItems() {
    allItems = [];
}
//shows the item creator view
function createItemPopup() {
    creator=document.getElementById("itemCreatorContainer");
    creator.classList.toggle("hidden");
    main = document.getElementById('mainView');
    main.classList.toggle("hidden");

    //main = document.getElementById('mainView');
    //main.style.display = 'none'; //creates inline style in the HTML... maybe create css class with grid and assign class
    //creator = document.getElementById('itemCreationWindow');
    //creator.style.display = 'grid'; // same thing as before...
}
//goes back to main from the item creator, and adds the item to every global array it needs to be in

function createItemConfirm(properties) {
    //the template that the item used
    template = templates[properties[2]];
    //creates an item object with each of these traits that all items should have
    var item = {
        //name, image, and template are required for all items, and thus will always be required and stored in every item
        name: properties[0],
        image: properties[1],
        template: properties[2],
        favorite: properties[3]
    }
    //for all of the additional information about each item, it will save and add these to the item object that is created
    for (i = 4; i < template.length; i++) {
        property = template[i];
        item[property] = properties[i]
    }
    //pushes the item into the global array
    window.allItems.push(item);
    return item;
}
function createItemConfirmHelper() {
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
    createItemConfirm(itemProperties);
}

function deleteItemPopup(idnumber, itemid) {
    if(confirm("Are you sure you want to delete this item?")){
        deleteItemHtml(idnumber, itemid);
    }

}
function deleteItemHtml(idnumber) {
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
        html += '<div id="' + itemid + '"' + ' class="itemContainer"><button class= "edit hidden editDel" id = "edit' + itemid + '">Edit</button><h3> ' + allItems[i].name + ' </h3><img src="' + allItems[i].image + '"> <button class = "delete hidden editDel" id = "delete' + itemid + '" onClick="deleteItemPopup(' + i + ', )">Delete</button></div>';
    }
    //adds the html of every item to the html to repopulate it
    document.querySelector(".itemsMain").innerHTML = html;
}

function returnToMain() {
    //always repopulate the main page first.
    repopulateMain();
    templatepage=document.getElementById("templateCreator");
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






function createTemplatePopup() {
    templatepage=document.getElementById("templateCreator");
    templatepage.classList.toggle("hidden");
    main = document.getElementById('mainView');
    main.classList.toggle("hidden");

 }
function createTemplateConfirm() { }
function deleteTemplate() { }
