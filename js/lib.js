/*const productList = [
    {id: "1", name: "Honda Civic", price: "1.000.000.000", img: "../assets/images/Civic.jpg", link: "product-detail.html"},
    {id: "2", name: "BMW M4", price: "3.000.000.000", img: "../assets/images/BMWM4.jpg", link: "product-detail.html"},
    {id: "3", name: "Mercedes Benz AMG GT63", price: "16.000.000.000", img: "../assets/images/MCDGT.jpg", link: "product-detail.html"},
    {id: "4", name: "Toyota Camry", price: "2.000.000.000", img: "../assets/images/ToyotaCamry.jpg", link: "product-detail.html"}
]; */

const productList = [
    {
        id: "1", 
        name: "Honda Civic", 
        price: "1.000.000.000", 
        img: "../assets/images/Civic.jpg", 
        link: "product-detail.html",
        desc: "Honda Civic là biểu tượng của sự bền bỉ kết hợp với phong cách thể thao mạnh mẽ. Phiên bản mới nhất mang đến một diện mạo đột phá với những đường nét góc cạnh, khí động học tối ưu. Nội thất của xe được thiết kế tập trung vào người lái với không gian rộng rãi, chất liệu cao cấp và tích hợp hàng loạt công nghệ hiện đại như hệ thống giải trí màn hình cảm ứng kết nối Apple CarPlay. Về vận hành, Civic nổi tiếng với động cơ tăng áp VTEC Turbo mạnh mẽ nhưng vẫn đảm bảo tiết kiệm nhiên liệu tối ưu. Hệ thống an toàn Honda SENSING được trang bị giúp bảo vệ hành khách trên mọi cung đường, mang lại sự an tâm tuyệt đối. Đây là lựa chọn hoàn hảo cho những người trẻ năng động, yêu thích cảm giác lái phấn khích và mong muốn khẳng định phong cách cá nhân khác biệt."
    },
    {
        id: "2", 
        name: "BMW M4", 
        price: "3.000.000.000", 
        img: "../assets/images/BMWM4.jpg", 
        link: "product-detail.html",
        desc: "BMW M4 không chỉ đơn thuần là một chiếc xe hơi, đó là một cỗ máy tốc độ thuần túy mang DNA đua xe đặc trưng của dòng M Series. Điểm nhấn ấn tượng nhất chính là lưới tản nhiệt hình quả thận khổng lồ tạo nên vẻ ngoài hung dữ và đầy quyền lực. Dưới nắp capo là khối động cơ 6 xi-lanh thẳng hàng với công nghệ M TwinPower Turbo, cho khả năng tăng tốc từ 0-100km/h chỉ trong tích tắc. Hệ thống treo thích ứng M và vi sai chủ động giúp xe vận hành cực kỳ chính xác khi vào cua ở tốc độ cao. Nội thất xe tràn ngập sợi carbon và da Merino cao cấp, ghế ngồi kiểu đường đua ôm sát cơ thể người lái. BMW M4 dành cho những tay lái thực thụ, những người khao khát tốc độ và muốn trải nghiệm cảm giác làm chủ một trong những mẫu xe thể thao xuất sắc nhất thế giới hiện nay."
    },
    {
        id: "3", 
        name: "Mercedes Benz AMG GT63", 
        price: "16.000.000.000", 
        img: "../assets/images/MCDGT.jpg", 
        link: "product-detail.html",
        desc: "Mercedes-Benz AMG GT63 là sự kết hợp hoàn hảo giữa vẻ đẹp sang trọng của một chiếc Coupe 4 cửa và sức mạnh kinh khủng của một siêu xe thể thao. Với động cơ V8 Biturbo mạnh mẽ, chiếc xe này có thể dễ dàng đánh bại nhiều đối thủ trên đường đua nhưng vẫn mang lại sự êm ái tuyệt vời khi di chuyển hàng ngày. Thiết kế ngoại thất đầy mê hoặc với mui xe dài, đuôi xe ngắn và các hốc hút gió lớn. Bên trong khoang lái, người dùng sẽ choáng ngợp bởi màn hình kép khổng lồ, hệ thống đèn viền nội thất 64 màu và các chi tiết được chế tác thủ công tinh xảo. Mỗi chiếc xe AMG đều tuân thủ triết lý 'Một kỹ sư, một động cơ', đảm bảo chất lượng hoàn hảo nhất. Đây là biểu tượng của sự thành đạt, đẳng cấp và sức mạnh vượt trội dành cho giới thượng lưu muốn sở hữu một tác phẩm nghệ thuật di động."
    },
    {
        id: "4", 
        name: "Toyota Camry", 
        price: "2.000.000.000", 
        img: "../assets/images/ToyotaCamry.jpg", 
        link: "product-detail.html",
        desc: "Toyota Camry từ lâu đã khẳng định vị thế là 'ông vua' trong phân khúc sedan hạng D tại thị trường Việt Nam. Phiên bản mới không còn vẻ trung tính xưa cũ mà đã lột xác với ngôn ngữ thiết kế thông minh, trẻ trung và hiện đại hơn rất nhiều. Xe được xây dựng trên nền tảng toàn cầu TNGA giúp trọng tâm thấp hơn, tăng cường độ ổn định và tầm nhìn cho người lái. Không gian hàng ghế sau của Camry vẫn luôn là điểm cộng lớn nhất với sự rộng rãi, tiện nghi như một khoang thương gia trên máy bay. Xe được trang bị gói an toàn Toyota Safety Sense cao cấp nhất, bao gồm cảnh báo tiền va chạm và kiểm soát hành trình chủ động. Với khả năng giữ giá tuyệt vời, vận hành bền bỉ và chi phí bảo trì hợp lý, Toyota Camry vẫn là lựa chọn hàng đầu cho các doanh nhân và những gia đình tìm kiếm sự sang trọng, ổn định và an toàn."
    }
];

function loadAllProduct(productList){
    for(let x in productList){
        addProduct_new(productList[x]);
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

function addProduct_new(product){
    const myDiv = document.createElement("div"); //tao Node div
            myDiv.setAttribute("class", "product-item") //tao thuoc tinh class cho Node div

            const myImg = document.createElement("div"); //tao Node div chua img
            myImg.setAttribute("class", "product-image"); //tao thuoc tinh class 

            const image = document.createElement("img"); //tao Node img
            
            //tao thuoc tinh src và alt cho node img
            image.setAttribute("src", product.img); 
            image.setAttribute("alt", product.name);
            myImg.appendChild(image); //gan Node img vao trong Node div chua img

            const myInfo = document.createElement("div"); //tao Node div chua thông tin sản phẩm
            myInfo.setAttribute("class", "product-info"); //tao thuoc tinh class cho Node div chua thong tin 

            const info_para1 = document.createElement("p"); //tao Node paragraph ten san pham
            const text1=document.createTextNode(product.name); //tao noi dung cho node paragraph
            info_para1.appendChild(text1); // gan nội dung vao Node paragraph

            const info_para2 = document.createElement("p"); //Tao node paragraph chứa giá sản phẩm
            const text2=document.createTextNode(product.price); //tạo nội dung cho Node Paragraph
            info_para2.appendChild(text2); //Gắn nội dung vào Node Paragraph

            const link1 = document.createElement("a"); //tạo Node link
            link1.setAttribute("href", product.link + "?id=" + product.id); //thêm thuộc tính href cho Node link
            link1.setAttribute("class", "button");
            const text3 = document.createTextNode("Xem chi tiết"); //tạo nội dung cho Node link


            link1.appendChild(text3); //gắn nội dung vào Node link

            myInfo.appendChild(info_para1); //gắn Node tên sản phẩm vào div chứa thông tin
            myInfo.appendChild(info_para2); //gắn Node giá sản phẩm vào Div chứa thông tin
            myInfo.appendChild(link1); //gắn Node link vào div thông tin

            myDiv.appendChild(myImg); //Gắn div img vào div lớn
            myDiv.appendChild(myInfo); //Gắn div thông tin vào div lớn

            document.getElementById("product_list").appendChild(myDiv); // gắn div lớn vào body
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