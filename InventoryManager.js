window.addEventListener("DOMContentLoaded", domLoaded);
//Sprint 1
function domLoaded(){
document.getElementById("createItemMain").addEventListener("click", function(){
    createItemPopup();
})
document.getElementById("cancelCreateItem").addEventListener("click", function(){
    returnToMain();
})
document.getElementById("confirmCreateItem").addEventListener("click", function(){
    returnToMain();
})


}

function createItemPopup(){
    var main = document.getElementById('mainView');
    main.style.display = 'none';
    var creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'grid';
}
function createItemConfirm(){

}

function deleteItemPopup(){}
function deleteItemConfirm(){}
function repopulateItems(){}
function returnToMain(){
    var creator = document.getElementById('itemCreationWindow');
    creator.style.display = 'none';
    var main = document.getElementById('mainView');
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
