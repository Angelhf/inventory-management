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
        test = createItemConfirm(properties);
        console.log(test);
    })
    it("Has correct name", ()=>{
        console.log(test);
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

}