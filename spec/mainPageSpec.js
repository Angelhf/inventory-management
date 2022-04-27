window.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded() {
describe("creating item", () =>{

    beforeEach(()=>{
        clearAllItems();
        template = ["name","image","template","favorite","userProperty1","userProperty2"];
        var properties = ["itemName","itemurl","template","True","500","$60"];
        var item = {
            //name, image, and template are required for all items, and thus will always be required and stored in every item
         }
           test = Object.create(item);
        test = createItemJavascript(properties);
    })
    it("Has correct name", ()=>{
        expect(test.name).toEqual("itemName");
    })
    it("Has correct URL", ()=>{;
        expect(test.image).toEqual("itemurl");
    })
    it("Has correct template", ()=>{;
        expect(test.template).toEqual("template");
    })
    it("Has correct favorite boolean", ()=>{;
        expect(test.favorite).toEqual("True");
    })
    it("Has correct first non generic user property", ()=>{;
        expect(test.userProperty1).toEqual("500");
    })
    it("Has correct second non generic user property", ()=>{;
        expect(test.userProperty2).toEqual("$60");
    })
    it("Has updated the array of all items", ()=>{
        const itemArray = returnAllItems();
        expect(itemArray.length).toEqual(1);
    })
})
describe("deleting item", ()=>{
    beforeEach(()=>{
        clearAllItems();
        template = ["name","image","template","favorite","userProperty1","userProperty2"];
        var properties = ["item1","itemurl1","template","True1","1","1"];
        var item = {
            //name, image, and template are required for all items, and thus will always be required and stored in every item
         }
           test = Object.create(item);
        test = createItemJavascript(properties);


        template = ["name","image","template","favorite","userProperty1","userProperty2"];
        var properties = ["item2","itemurl2","template","True2","2","2"];
        var item = {
            //name, image, and template are required for all items, and thus will always be required and stored in every item
         }
           test = Object.create(item);
        test = createItemJavascript(properties);


        template = ["name","image","template","favorite","userProperty1","userProperty2"];
        var properties = ["item3","itemurl3","template","True3","3","3"];
        var item = {
            //name, image, and template are required for all items, and thus will always be required and stored in every item
         }
           test = Object.create(item);
        test = createItemJavascript(properties);
    })  
    it("changes the array size when deleted from spot 0", ()=>{
        deleteItemArray(0);
        const itemArray = returnAllItems();
        expect(itemArray.length).toEqual(2);
    })
    it("when the 0th item is deleted, the 1st item becomes the 0th", ()=>{
        deleteItemArray(0);
        const itemArray = returnAllItems();
        expect(itemArray[0].name).toEqual("item2");
    })
    it("when the 0th item is deleted twice, the 2nd item becomes the 0th", ()=>{
        deleteItemArray(0);
        deleteItemArray(0);
        const itemArray = returnAllItems();
        expect(itemArray[0].name).toEqual("item3");
    })
})

}