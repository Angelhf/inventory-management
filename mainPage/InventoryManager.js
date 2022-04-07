window.addEventListener("DOMContentLoaded", domLoaded);
//Sprint 1
function domLoaded(){
document.getElementById("createItemMain").addEventListener("click", function(){
    createItemPopup();
})
document.getElementById("itemCreatorCancel").addEventListener("click", function(){
    returnToMain();
})
document.getElementById("itemCreatorConfirm").addEventListener("click", function(){
    createItemConfirm()
    returnToMain();
})
var allItems =[];
var allFavorites = [];
var allGroups = [];
var allTags = [];
var templates = {
    'Default' : []

}

function createItemPopup(){
    main = document.getElementById('mainView');
    main.style.display = 'none';
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'grid';
}
function createItemConfirm(){
 var template = document.getElementById('itemCreatorTemplate');
   var item = {
        name: document.getElementById('itemCreatorPropertyName').value,
        image: document.getElementById('itemCreatorPropertyImage').value
    }
    for(i=0;i<template.length;i++){
        property = template[i];
        item[property] = document.getElementById('itemCreatorTemplate' + property);
    }
    allItems.push(item);
    console.log(allItems);
    }
    
    


}





function deleteItemPopup(){}
function deleteItemConfirm(){}
function repopulateMain(){}
function returnToMain(){
    creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'none';
    main = document.getElementById('mainView');
    main.style.display = 'grid';

}
//End Sprint 1



function toGroupView(){}
function createGroup(){}
function deleteGroup(){}
function importToGroup(){}
function toFavorites(){}
function createTemplatePopup(){}
function createTemplateConfirm(){}
function deleteTemplate(){}
