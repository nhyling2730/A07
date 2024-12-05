
document.addEventListener("DOMContentLoaded", function () {

    const renderProducts = [
{
"productCode": "HC08",
"image": "../../image/freeze/caramelphinfreeze_nho.png",
"category": "Freeze",
"name": "Caramel phin freeze",
"price": "50.000 VNĐ",
"description": "Thơm ngon khó cưỡng! Được kết hợp từ cà phê truyền thống chỉ có tại Highlands Coffee, cùng với caramel, thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và caramel ngọt ngào. Món nước phù hợp trong những cuộc gặp gỡ bạn bè, bởi sự ngọt ngào thường mang mọi người xích lại gần nhau.",
"availability": true 
},
{
"productCode": "HC09",
"image": "../../image/freeze/classicphinfreeze_nho.png",
"category": "Freeze",
"name": "Classic phin freeze",
"price": "50.000 VNĐ",
"description": "Thơm ngon đậm đà! Được kết hợp từ cà phê pha Phin truyền thống chỉ có tại Highlands Coffee, cùng với thạch cà phê và đá xay mát lạnh. Trên cùng là lớp kem tươi thơm béo và bột ca cao đậm đà. Món nước hoàn hảo để khởi đầu câu chuyện cùng bạn bè.",
"availability": true 
},
{
"productCode": "HC10",
"image": "../../image/freeze/cookies&cream_nho.png",
"category": "Freeze",
"name": "Cookies & Cream",
"price": "50.000 VNĐ",
"description": "Một thức uống ngon lạ miệng bởi sự kết hợp hoàn hảo giữa cookies sô cô la giòn xốp cùng hỗn hợp sữa tươi cùng sữa đặc đem say với đá viên, và cuối cùng không thể thiếu được chính là lớp kem whip mềm mịn cùng cookies sô cô la say nhuyễn.",
"availability": true 
},
{
"productCode": "HC12",
"image": "../../image/freeze/freezechoco_nho.png",
"category": "Freeze",
"name": "Freeze sô-cô-la",
"price": "50.000 VNĐ",
"description": "Thiên đường đá xay sô cô la! Từ những thanh sô cô la Việt Nam chất lượng được đem xay với đá cho đến khi mềm mịn, sau đó thêm vào thạch sô cô la dai giòn, ở trên được phủ một lớp kem whip beo béo và sốt sô cô la ngọt ngào. Tạo thành Freeze Sô-cô-la ngon mê mẩn chinh phục bất kì ai!",
"availability": true 
},
{
"productCode": "HC11",
"image": "../../image/freeze/freezetraxanh_nho.png",
"category": "Freeze",
"name": "Freeze trà xanh",
"price": "50.000 VNĐ",
"description": "Thức uống rất được ưa chuộng! Trà xanh thượng hạng từ cao nguyên Việt Nam, kết hợp cùng đá xay, thạch trà dai dai, thơm ngon và một lớp kem dày phủ lên trên vô cùng hấp dẫn. Freeze Trà Xanh thơm ngon, mát lạnh, chinh phục bất cứ ai!",
"availability": true 
},
{
"productCode": "HC03",
"image": "../../image/phin/bacxiuda_nho.png",
"category": "Cà phê phin",
"name": "Bạc xỉu đá",
"price": "29.000 VNĐ",
"description": "Nếu Phin Sữa Đá dành cho các bạn đam mê vị đậm đà, thì Bạc Xỉu Đá là một sự lựa chọn nhẹ “đô\" cà phê nhưng vẫn thơm ngon, chất lừ không kém!",
"availability": true 
},
{
"productCode": "HC01",
"image": "../../image/phin/phisuanda_nho.png",
"category": "Cà phê phin",
"name": "Phin sữa đá",
"price": "35.000 VNĐ",
"description": "Hương vị cà phê Việt Nam đích thực! Từng hạt cà phê hảo hạng được chọn bằng tay, phối trộn độc đáo giữa hạt Robusta từ cao nguyên Việt Nam, thêm Arabica thơm lừng. Cà phê được pha từ Phin truyền thống, hoà cùng sữa đặc sánh và thêm vào chút đá tạo nên ly Phin Sữa Đá – Đậm Đà Chất Phin.",
"availability": true 
},
{
"productCode": "HC02",
"image": "../../image/phin/phindenda_nho.png",
"category": "Cà phê phin",
"name": "Phin đen đá",
"price": "32.000 VNĐ",
"description": "Dành cho những tín đồ cà phê đích thực! Hương vị cà phê truyền thống được phối trộn độc đáo tại Highlands. Cà phê đậm đà pha hoàn toàn từ Phin, cho thêm 1 thìa đường, một ít đá viên mát lạnh, tạo nên Phin Đen Đá mang vị cà phê đậm đà chất Phin.",
"availability": true 
},
{
"productCode": "HC07",
"image": "../../image/phindi/phindicassia_nho.png",
"category": "Phindi",
"name": "Phindi cassia",
"price": "55.000 VNĐ",
"description": "Với chất phin êm ái, hương vị cà phê Việt Nam hiện đại kết hợp cùng hương quế nhẹ nhàng và thạch cà phê hấp dẫn.",
"availability": false
},
{
"productCode": "HC06",
"image": "../../image/phindi/phindichoco_nho.png",
"category": "Phindi",
"name": "Phindi choco",
"price": "55.000 VNĐ",
"description": "PhinDi Choco - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Choco ngọt tan mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
"availability": true 
},
{
"productCode": "HC04",
"image": "../../image/phindi/phindihanhnhan_nho.png",
"category": "Phindi",
"name": "Phindi hạnh nhân",
"price": "55.000 VNĐ",
"description": "PhinDi Hạnh Nhân - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Hạnh nhân thơm bùi mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
"availability": true 
},
{
"productCode": "HC05",
"image": "../../image/phindi/phindikemsua_nho.png",
"category": "Phindi",
"name": "Phindi kem sữa",
"price": "55.000 VNĐ",
"description": "PhinDi Kem Sữa - Cà phê Phin thế hệ mới với chất Phin êm hơn, kết hợp cùng Kem Sữa béo ngậy mang đến hương vị mới lạ, không thể hấp dẫn hơn!",
"availability": true 
},
{
"productCode": "HC16",
"image": "../../image/trà/trasenvang(cunang)_nho.png",
"category": "Trà",
"name": "Trà sen vàng (củ năng)",
"price": "45.000 VNĐ",
"description": "Thức uống chinh phục những thực khách khó tính! Sự kết hợp độc đáo giữa trà Ô long, hạt sen thơm bùi và củ năng giòn tan. Thêm vào chút sữa sẽ để vị thêm ngọt ngào.",
"availability": false 
},
{
"productCode": "HC15",
"image": "../../image/trà/trasenvang(sen)_nho.png",
"category": "Trà",
"name": "Trà sen vàng (sen)",
"price": "45.000 VNĐ",
"description": "Trà sen vàng (sen) với kết hợp giữa Trà Ô long với hương sen thanh mát, thêm đậm vị sen bằng hạt sen dẻo thơm và lớp kem mềm mại. Đặt Highlands Coffee giao ngay.",
"availability": true 
},
{
"productCode": "HC18",
"image": "../../image/trà/trathachdao_nho.png",
"category": "Trà",
"name": "Trà thạch đào",
"price": "45.000 VNĐ",
"description": "Vị trà đậm đà kết hợp cùng những miếng đào thơm ngon mọng nước cùng thạch đào giòn dai. Thêm vào ít sữa để gia tăng vị béo.",
"availability": true 
},
{
"productCode": "HC17",
"image": "../../image/trà/trathanhdao_nho.png",
"category": "Trà",
"name": "Trà thanh đào",
"price": "45.000 VNĐ",
"description": "Một trải nghiệm thú vị khác! Sự hài hòa giữa vị trà cao cấp, vị sả thanh mát và những miếng đào thơm ngon mọng nước sẽ mang đến cho bạn một thức uống tuyệt vời.",
"availability": false
},
{
"productCode": "HC14",
"image": "../../image/trà/trathachvai_nho.png",
"category": "Trà",
"name": "Trà thạch Vải",
"price": "45.000 VNĐ",
"description": "Một sự kết hợp thú vị giữa trà đen, những quả vải thơm ngon và thạch giòn khó cưỡng, mang đến thức uống tuyệt hảo!",
"availability": true 
},
{
"productCode": "HC13",
"image": "../../image/trà/traxanhdaudo_nho.png",
"category": "Trà",
"name": "Trà xanh đậu đỏ",
"price": "45.000 VNĐ",
"description": "Một sự kết hợp độc đáo giữa trà xanh thượng hạng từ cao nguyên Việt Nam và đậu đỏ bùi bùi thơm ngon. Thức uống thanh mát, mang lại cảm giác sảng khoái.",
"availability": true 
}
]
    // Lấy dữ liệu giỏ hàng từ localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Hàm chuẩn hóa giỏ hàng
    function normalizeCart(cart) {
        return cart.map(item => ({
            productCode: item.productCode || "",
            name: item.name,
            size: item.size || "S", 
            price: typeof item.price === "string"
                ? parseInt(item.price.replace(/\./g, "")) 
                : item.price,
            image: item.image.replace ("../../", "../") || "",
            quantity: item.quantity || 1
        }));
    }

    cart = normalizeCart(cart);
    localStorage.setItem("cart", JSON.stringify(cart));

    // Hàm cập nhật biểu tượng giỏ hàng
    function updateCartQuantity() {
        const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0); 
        document.getElementById("cartQuantity").textContent = totalQuantity; 
    }

    // Hàm lưu sản phẩm vào giỏ hàng
    function addToCart(product, quantity = 1, size = "S") {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cart.findIndex(
            (item) => item.productCode === product.productCode && item.size === size
        );

        if (existingProductIndex > -1) {
            cart[existingProductIndex].quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity,
                size,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartQuantity(); 
    }

    // Gắn sự kiện "Đặt mua" cho các nút sản phẩm
    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", function () {
            const productItem = this.closest(".custom-product-item");
            const product = {
                productCode: productItem.dataset.productCode,
                name: productItem.querySelector(".custom-product-name").textContent,
                price: parseInt(productItem.querySelector(".custom-product-price").textContent.replace(/\./g, "")), 
                image: productItem.querySelector(".custom-product-thumb img").src,
                quantity: 1
            };

            addToCart(product); 
        });
    });

    updateCartQuantity();
});

// function syncCartQuantity() {
//     const cartQuantityElement = document.getElementById("cartQuantity");
//     if (!cartQuantityElement) return;
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const count = cart.reduce((sum, item) => sum + item.quantity, 0);
//     cartQuantityElement.textContent = count || 0;
// }

