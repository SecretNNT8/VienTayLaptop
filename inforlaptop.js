document.addEventListener("DOMContentLoaded", () => {
    const thongsoBtn = document.querySelector(".thongso");
    const danhgiaBtn = document.querySelector(".danhgia");
    const thongsoContent = document.querySelector(".thongsokithuat");
    const danhgiaContent = document.querySelector(".danhgiachitiet");

    // Mặc định: hiện tab Thông số, ẩn tab Đánh giá
    thongsoContent.style.display = "block";
    danhgiaContent.style.display = "none";
    thongsoBtn.classList.add("active");

    // Khi bấm Thông số
    thongsoBtn.addEventListener("click", () => {
        thongsoContent.style.display = "block";
        danhgiaContent.style.display = "none";
        thongsoBtn.classList.add("active");
        danhgiaBtn.classList.remove("active");
    });

    // Khi bấm Đánh giá
    danhgiaBtn.addEventListener("click", () => {
        thongsoContent.style.display = "none";
        danhgiaContent.style.display = "block";
        danhgiaBtn.classList.add("active");
        thongsoBtn.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".main-image");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            // Đổi ảnh chính
            mainImage.style.opacity = "0";
            setTimeout(() => {
                mainImage.src = thumb.src;
                mainImage.style.opacity = "1";
            }, 200);

            // Đổi active thumbnail
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        });
    });
});
const scrollThumb = document.querySelector('.thumbnail-container-fake')
scrollThumb.addEventListener('wheel', (evt) => {
    evt.preventDefault(); // Ngăn chặn cuộn mặc định
    scrollThumb.scrollLeft += evt.deltaY * 0.5; // Điều chỉnh tốc độ cuộn ngang
});
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".thumbnail-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    // --- Mouse Events ---
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.parentElement.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // tốc độ kéo
        slider.parentElement.scrollLeft = scrollLeft - walk;
    });

    // --- Touch Events (mobile) ---
    let touchStartX = 0;
    let touchScrollLeft = 0;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = slider.parentElement.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.5;
        slider.parentElement.scrollLeft = touchScrollLeft - walk;
    });
});
const scrollAntpr = document.querySelector('.antpr-container-fake')
scrollAntpr.addEventListener('wheel', (evt) => {
    evt.preventDefault(); // Ngăn chặn cuộn mặc định
    scrollAntpr.scrollLeft += evt.deltaY * 0.5; // Điều chỉnh tốc độ cuộn ngang
});
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".antpr-container");
    let isDown = false;
    let startX;
    let scrollLeft;

    // --- Mouse Events ---
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.parentElement.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
    });

    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // tốc độ kéo
        slider.parentElement.scrollLeft = scrollLeft - walk;
    });

    // --- Touch Events (mobile) ---
    let touchStartX = 0;
    let touchScrollLeft = 0;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].pageX;
        touchScrollLeft = slider.parentElement.scrollLeft;
    });

    slider.addEventListener("touchmove", (e) => {
        const x = e.touches[0].pageX;
        const walk = (x - touchStartX) * 1.5;
        slider.parentElement.scrollLeft = touchScrollLeft - walk;
    });
});
const startY = innerHeight;
const finishDistance = innerHeight * 4;

// Listen to the scroll event
var scroll = document.getElementById("scroll");
scroll.addEventListener("scroll", function () {
    // Prevent the update from happening too often (throttle the scroll event)
    if (!requestId) {
        requestId = requestAnimationFrame(update);
    }
});


function update() {

    // Update our animation
    var y = scroll.scrollTop;
    ratio = y / (startY * 5);
    if (ratio % 1 === 0) {
        $('#scroll').scrollTop(0); // not plain
    }

    action.progress(ratio);

    // Let the scroll event fire again
    requestId = null;

}
update();
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.querySelector(".header-middle");

    // Tạo overlay
    const overlay = document.createElement("div");
    overlay.className = "menu-overlay";
    document.body.appendChild(overlay);

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("show");
        overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", () => {
        menu.classList.remove("show");
        overlay.classList.remove("active");
    });
});