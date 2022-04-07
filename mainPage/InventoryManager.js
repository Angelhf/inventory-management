window.addEventListener("DOMContentLoaded", domLoaded);
//Sprint 1
<<<<<<< HEAD:mainPage/InventoryManager.js
function domLoaded(){
document.getElementById("createItemMain").addEventListener("click", function(){
    createItemPopup();
})
document.getElementById("itemCreatorCancel").addEventListener("click", function(){
    returnToMain();
})
document.getElementById("itemCreatorConfirm").addEventListener("click", async function(){
    createItemConfirm()
    returnToMain();
})
}
allItems =[];
var allFavorites = [];
var allGroups = [];
var allTags = [];
var templates = {
    'Default' : []
=======
function domLoaded() {
    document.getElementById("createItemMain").addEventListener("click", function () {
        createItemPopup();
    })
    document.getElementById("itemCreatorCancel").addEventListener("click", function () {
        returnToMain();
    })
    document.getElementById("itemCreatorConfirm").addEventListener("click", function () {
        createItemConfirm()
        returnToMain();
    })
    var allItems = [];
    var allFavorites = [];
    var allGroups = [];
    var allTags = [];
    const DEFAULT = ["itemCreatorPropertyName", "itemCreatorPropertyImage"];
>>>>>>> mainbranch:InventoryManager.js

}

function createItemPopup() {
    main = document.getElementById('mainView');
    main.style.display = 'none'; //creates inline style in the HTML... maybe create css class with grid and assign class
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'grid'; // same thing as before...
}
<<<<<<< HEAD:mainPage/InventoryManager.js
function createItemConfirm(){
 const template = document.getElementById('itemCreatorTemplate');
   var item = {
        name: document.getElementById('itemCreatorPropertyName').value,
        image:  URL.createObjectURL(document.getElementById("itemCreatorPropertyImage").files[0])
    }
    for(i=0;i<template.length;i++){
        property = template[i];
        item[property] = document.getElementById('itemCreatorTemplate' + property);
    }
    window.allItems.push(item);
    
    }
    
    






=======
function createItemConfirm() {
>>>>>>> mainbranch:InventoryManager.js



<<<<<<< HEAD:mainPage/InventoryManager.js
function deleteItemPopup(){}
function deleteItemConfirm(){}
function repopulateMain(){
    console.log(window.allItems);
    html = " ";
    if(allItems.length==0){
        return;
    }
   for(i = 0; i<window.allItems.length; i++){
    itemid = 'item' + i;
     html+='<div id="' + itemid + '"><strong> ' + allItems[i].name +' </strong><img src="' + allItems[i].image + '"></div>';
    }
   
   document.querySelector(".itemsMain").innerHTML = html;
   for(i = 0; i<window.allItems.length; i++){
       itemid= '#item' +i;
       document.querySelector(itemid).style.textAlign = "center";
   }
}

function returnToMain(){
    repopulateMain();
=======
function deleteItemPopup() { }
function deleteItemConfirm() { }
function repopulateMain() { }
function returnToMain() {
>>>>>>> mainbranch:InventoryManager.js
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'none'; // same thing as before...
    main = document.getElementById('mainView');
<<<<<<< HEAD:mainPage/InventoryManager.js
    main.style.display = 'grid';
    console.log(window.allItems);
=======
    main.style.display = 'grid'; // same thing as before...
>>>>>>> mainbranch:InventoryManager.js

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
