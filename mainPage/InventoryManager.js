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
    document.getElementById("itemCreatorConfirm").addEventListener("click", async function () {
        createItemConfirm()
        returnToMain();
    })
}
//global array that stores every item
allItems = [];
//global array that stores every favorite item
allFavorites = [];
//global array that stores all groups
allGroups = [];
//global array that holds all tags
allTags = [];
//global variable that holds all templates
templates = {
    'Default': []

}
//shows the item creator view
function createItemPopup() {
    main = document.getElementById('mainView');
    main.style.display = 'none'; //creates inline style in the HTML... maybe create css class with grid and assign class
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'grid'; // same thing as before...
}
//goes back to main from the item creator, and adds the item to every global array it needs to be in
function createItemConfirm(){
    //the template that the item used
 const template = document.getElementById('itemCreatorTemplate'); 
 //creates an item object with each of these traits that all items should have
   var item = {
       //name, image, and template are required for all items, and thus will always be required and stored in every item
        name: document.getElementById('itemCreatorPropertyName').value,
        image: URL.createObjectURL(document.getElementById("itemCreatorPropertyImage").files[0]),
        template: template
    }
    //for all of the additional information about each item, it will save and add these to the item object that is created
    for (i = 0; i < template.length; i++) {
        property = template[i];
        item[property] = document.getElementById('itemCreatorTemplate' + property);
    }
    //pushes the item into the global array
    window.allItems.push(item);

}
<<<<<<< HEAD
=======

>>>>>>> hbbaker
function deleteItemPopup() { }
function deleteItemConfirm() { }
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
        html += '<div id="' + itemid + '"' + ' class="itemContainer"><strong> ' + allItems[i].name + ' </strong><img src="' + allItems[i].image + '"></div>';
    }
    //adds the html of every item to the html to repopulate it
    document.querySelector(".itemsMain").innerHTML = html;
}

function returnToMain() {
    //always repopulate the main page first.
    repopulateMain();
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'none'; // same thing as before...
    main = document.getElementById('mainView');
    main.style.display = 'grid';
    console.log(window.allItems);

}
//End Sprint 1



function toGroupView() { }
function createGroup() { }
function deleteGroup() { }
function importToGroup() { }
function toFavorites() { }
function createTemplatePopup() { }
function createTemplateConfirm() { }
function deleteTemplate() { }
