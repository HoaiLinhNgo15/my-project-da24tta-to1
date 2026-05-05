const productList = [
    {id: "1", name: "Honda Civic", price: "1.000.000.000", img: "../assets/images/Civic.jpg", link: "#"},
    {id: "2", name: "BMW M4", price: "3.000.000.000", img: "../assets/images/BMWM4.jpg", link: "#"},
    {id: "3", name: "Mercedes Benz AMG GT63", price: "16.000.000.000", img: "../assets/images/MCDGT.jpg", link: "#"},
    {id: "4", name: "Toyota Camry", price: "2.000.000.000", img: "../assets/images/ToyotaCamry.jpg", link: "#"}
];

function loadAllProduct(){
    for(let x in productList){
        addProduct(productList[x].img, productList[x].name, productList[x].price, productList[x].link);
    }
}

function newProduct() {
    const myFrm = document.createElement("form");
    myFrm.setAttribute("id", "frm_product");
    
    const input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "srcProduct");
    input1.setAttribute("name", "srcProduct");
    input1.setAttribute("class", "input-field");
    input1.setAttribute("placeholder", "Nhập nguồn ảnh sản phẩm");
    

    const input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "nameProduct");
    input2.setAttribute("name", "nameProduct");
    input2.setAttribute("class", "input-field");
    input2.setAttribute("placeholder", "Nhập tên sản phẩm");

    const input3 = document.createElement("input");
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "priceProduct");
    input3.setAttribute("name", "priceProduct");
    input3.setAttribute("class", "input-field");
    input3.setAttribute("placeholder", "Nhập giá sản phẩm");

    const input4 = document.createElement("input");
    input4.setAttribute("type", "text");
    input4.setAttribute("id", "linkProduct");
    input4.setAttribute("name", "linkProduct");
    input4.setAttribute("class", "input-field");
    input4.setAttribute("placeholder", "Nhập liên kết sản phẩm");

    const button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("id", "buttonAdd");
    button.setAttribute("value", "Thêm mới");
    button.setAttribute("onclick", "addProduct1()");

    myFrm.appendChild(input1);
    myFrm.appendChild(input2);
    myFrm.appendChild(input3);
    myFrm.appendChild(input4);
    myFrm.appendChild(button);

    document.getElementById("product_control").appendChild(myFrm);
}
function addProduct(imgLink, tenSp, giaSp, linkSp){
    const myDiv = document.createElement("div"); //tao Node div
            myDiv.setAttribute("class", "product-item") //tao thuoc tinh class cho Node div

            const myImg = document.createElement("div"); //tao Node div chua img
            myImg.setAttribute("class", "product-image"); //tao thuoc tinh class 

            const image = document.createElement("img"); //tao Node img
            
            //tao thuoc tinh src và alt cho node img
            image.setAttribute("src", imgLink); 
            image.setAttribute("alt", "Product");
            myImg.appendChild(image); //gan Node img vao trong Node div chua img

            const myInfo = document.createElement("div"); //tao Node div chua thông tin sản phẩm
            myInfo.setAttribute("class", "product-info"); //tao thuoc tinh class cho Node div chua thong tin 

            const info_para1 = document.createElement("p"); //tao Node paragraph ten san pham
            const text1=document.createTextNode(tenSp); //tao noi dung cho node paragraph
            info_para1.appendChild(text1); // gan nội dung vao Node paragraph

            const info_para2 = document.createElement("p"); //Tao node paragraph chứa giá sản phẩm
            const text2=document.createTextNode(giaSp); //tạo nội dung cho Node Paragraph
            info_para2.appendChild(text2); //Gắn nội dung vào Node Paragraph

            const link1 = document.createElement("a"); //tạo Node link
            link1.setAttribute("href", linkSp); //thêm thuộc tính href cho Node link
            const text3 = document.createTextNode("Xem chi tiết"); //tạo nội dung cho Node link

            link1.appendChild(text3); //gắn nội dung vào Node link

            myInfo.appendChild(info_para1); //gắn Node tên sản phẩm vào div chứa thông tin
            myInfo.appendChild(info_para2); //gắn Node giá sản phẩm vào Div chứa thông tin
            myInfo.appendChild(link1); //gắn Node link vào div thông tin

            myDiv.appendChild(myImg); //Gắn div img vào div lớn
            myDiv.appendChild(myInfo); //Gắn div thông tin vào div lớn

            document.getElementById("product_list").appendChild(myDiv); // gắn div lớn vào body
}

function addProduct1(){
    const myForm = document.forms["frm_product"];
    
    const srcimg = myForm.elements[0];
    let imgLink = srcimg.value;

    const nameProduct = myForm.elements[1];
    let tenSp = nameProduct.value;

    const priceProduct = myForm.elements[2];
    let giaSp = priceProduct.value;

    const linkProduct = myForm.elements[3];
    let linkSp = linkProduct.value;

    const myDiv = document.createElement("div"); //tao Node div
    myDiv.setAttribute("class", "product-item") //tao thuoc tinh class cho Node div

    const myImg = document.createElement("div"); //tao Node div chua img
    myImg.setAttribute("class", "product-image"); //tao thuoc tinh class 

    const image = document.createElement("img"); //tao Node img
    
    //tao thuoc tinh src và alt cho node img
    image.setAttribute("src", imgLink); 
    image.setAttribute("alt", "Product");
    myImg.appendChild(image); //gan Node img vao trong Node div chua img

    const myInfo = document.createElement("div"); //tao Node div chua thông tin sản phẩm
    myInfo.setAttribute("class", "product-info"); //tao thuoc tinh class cho Node div chua thong tin 

    const info_para1 = document.createElement("p"); //tao Node paragraph ten san pham
    const text1=document.createTextNode(tenSp); //tao noi dung cho node paragraph
    info_para1.appendChild(text1); // gan nội dung vao Node paragraph

    const info_para2 = document.createElement("p"); //Tao node paragraph chứa giá sản phẩm
    const text2=document.createTextNode(giaSp); //tạo nội dung cho Node Paragraph
    info_para2.appendChild(text2); //Gắn nội dung vào Node Paragraph

    const link1 = document.createElement("a"); //tạo Node link
    link1.setAttribute("href", linkSp); //thêm thuộc tính href cho Node link
    const text3 = document.createTextNode("Xem chi tiết"); //tạo nội dung cho Node link

    link1.appendChild(text3); //gắn nội dung vào Node link

    myInfo.appendChild(info_para1); //gắn Node tên sản phẩm vào div chứa thông tin
    myInfo.appendChild(info_para2); //gắn Node giá sản phẩm vào Div chứa thông tin
    myInfo.appendChild(link1); //gắn Node link vào div thông tin

    myDiv.appendChild(myImg); //Gắn div img vào div lớn
    myDiv.appendChild(myInfo); //Gắn div thông tin vào div lớn

    document.getElementById("product_list").appendChild(myDiv); // gắn div lớn vào body
}