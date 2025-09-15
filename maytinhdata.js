const maytinhdata = [
    {
        id: 1,
        name: "Lenovo ThinkPad T490s",
        price: ((6800000)).toLocaleString('vi-VN'),
        saleprice: (7800000).toLocaleString('vi-VN'),
        image: "/t490s/t490s.png",
        brand: "Lenovo",
        badge: "Bán chạy",
    },
    {
        id: 2,
        name: "DELL Latitude 7420",
        price: ((8500000)).toLocaleString('vi-VN'),
        saleprice: (9500000).toLocaleString('vi-VN'),
        image: "/7420/7420.png",
        brand: "Dell",
        badge: "Bán chạy",
    },
    {
        id: 3,
        name: "DELL Latitude 7320",
        price: (8200000).toLocaleString('vi-VN'),
        saleprice: (9200000).toLocaleString('vi-VN'),
        image: "7320/7320.png",
        brand: "Dell",
    },
    {
        id: 4,
        name: "DELL Latitude 5310",
        price: (6200000).toLocaleString('vi-VN'),
        saleprice: (7200000).toLocaleString('vi-VN'),
        image: "5310/5310.png",
        brand: "Dell",
        badge: "Bán chạy",
    },
    {
        id: 5,
        name: "DELL Latitude 5320 ",
        price: (7800000).toLocaleString('vi-VN'),
        saleprice: (8800000).toLocaleString('vi-VN'),
        image: "5320/5320.png",
        brand: "Dell",
    },
    {
        id: 6,
        name: "HP ProBook 640g5",
        price: (4800000).toLocaleString('vi-VN'),
        saleprice: (5800000).toLocaleString('vi-VN'),
        image: "Probook/Probook.png",
        brand: "HP",
        badge: "Bán chạy",
    },
]
const video = document.querySelector('.hero__video');
const fallback = document.querySelector('.hero__fallback');

video.addEventListener('play', () => {
    fallback.style.display = 'none';
});
