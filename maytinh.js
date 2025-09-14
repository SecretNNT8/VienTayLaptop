function renderLapTopPage() {
    const productList = document.querySelector(".content");
    let html = "";
    html += `
  <h1 class="maytinh" id="maytinh">MÁY TÍNH</h1>
     <button class="previous">◀</button>
     <button class="next">▶</button>
    <div class="contentfake">
    <div class="lt">
            </div>
            </div>
            <div class="daysac" id="daysac">
            <div class="daysacDell">
            <div class="sacDell-pic">
                <img src="/maytinh-pic/daysacDell.png">
                </div>
                <div class="inforsacDell">
                    <div>
                        <h2>Sạc DELL chính hãng 65W</h2>
                        <p>400.000đ</p>
                    </div>
                    <div>
                        <p>-	Công suất 65W giúp sạc đầy máy nhanh chóng<br>
                            -	Đầu Type-C với dây dài 1m <br>
                            -	Điện áp vào : 100-240V ~ 1.5A 50-60Hz<br>
                            -	Điện áp ra : 20.0V – 3.25A/65W
                        </p>
                    </div>
                </div>
            </div>
            <div class="daysacHP">
                <div class="inforsacHP">
                    <div>
                        <h2>Sạc HP chính hãng 65W</h2>
                        <p>300.000đ</p>
                    </div>
                    <div>
                        <p>-	Công suất 65W giúp sạc đầy máy nhanh chóng<br>
-	Đầu kim nhỏ thích hợp nhiều dòng máy<br>
-	Điện áp vào : 100-240V ~ 1.5A 50-60Hz<br>
-	Điện áp ra : 19.5V 3.33A<br>
                        </p>
                    </div>
                </div>
                <div class="sacHP-pic">
                <img src="/maytinh-pic/daysacHP.png">
                </div>
            </div>
        </div>
        <diV class="nangcapmay" id="nangcapmay">
            <section class="nangcapmay hero--video">
                <!-- Fallback ảnh -->
                <img class="hero__fallback" src="/maytinh-pic/nangcapmay.png" alt="" aria-hidden="true">

                <!-- Video ngang -->
                <video class="hero__video" autoplay muted loop playsinline poster="nangcapmay.png">
                    <source src="/maytinh-pic/nangcapmay.webm" type="video/webm">
                    <source src="/maytinh-pic/nangcapmay.mp4" type="video/mp4">
                </video>

                <!-- Overlay -->
                <div class="hero__overlay"></div>

                <!-- Nội dung -->
                <div class="infornangcap">
                    <h1 data-text="Nâng cấp máy">Nâng cấp máy</h1>
                    <div class="nangcap">
                        <div class="up">
                            <div class="up-pic">
                                <img src="/maytinh-pic/ssd.png">
                            </div>
                            <h3>SSD</h3>
                            <div class="upssd">
                                <div>
                                    <p> 512gb</p>
                                    <p>400000đ</p>
                                </div>
                                <div>
                                    <p>1T</p>
                                    <p>850000đ</p>
                                </div>
                            </div>
                        </div>
                        <div class="up">
                            <div class="up-pic">
                                <img src="/maytinh-pic/ram.png">
                            </div>
                            <h3>RAM</h3>
                            <div class="upram">
                                <div>
                                    <p>32gb</p>
                                    <p>500000đ</p>
                                </div>
                            </div>
                        </div>
                        <div class="up">
                            <div class="up-pic">
                                <img src="/maytinh-pic/screen.png">
                            </div>
                            <h3>SCREEN</h3>
                            <div class="upscreen">
                                <div>
                                    <p>Bản cảm ứng</p>
                                    <p>300000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </diV>
    `
    productList.innerHTML = html;
    const gunSkinList = document.querySelector(".lt");
    let ht = "";
    ht += `
    <div class="left">
    <div class="bl"></div>
    </div>
    <div class="right">
    <div class="br"></div>
    </div>`;
    for (let i = 0; i < maytinhdata.length; i++) {
        ht += `
      <div class="ltf">
      <a href="./${maytinhdata[i].name.replace(/\s+/g, "")}.html">
      <div class="laptop">
      <div class="laptop-pic">
      ${maytinhdata[i].badge ? `<div class="badge">${maytinhdata[i].badge}</div>` : ""}
      <img height="100%" width="100%" src="${maytinhdata[i].image}">
      </div>
      <div class="infor">
                            <div class="name">
                            <p>${maytinhdata[i].name}</p>
                            </div>
                            <div class="prandspr">
                            <div class="saleprice">
                                <p>${maytinhdata[i].price}đ</p>
                                </div>
                            <div class="price">
                                <p>${maytinhdata[i].saleprice}đ</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        </a>
                </div>
            `;
    }
    gunSkinList.innerHTML = ht;
    document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById("hamburger");
        const menu = document.querySelector(".header-middle");

        hamburger.addEventListener("click", () => {
            menu.classList.toggle("show");
        });
    });
}
renderLapTopPage();

const scrollContainer = document.querySelector('.contentfake');
document.querySelector('.previous').addEventListener('click', () => {
    scrollContainer.scrollLeft -= 300; // lùi 300px
});
document.querySelector('.next').addEventListener('click', () => {
    scrollContainer.scrollLeft += 300; // tiến 300px
});

scrollContainer.addEventListener('wheel', (evt) => {
    evt.preventDefault(); // Ngăn chặn cuộn mặc định
    scrollContainer.scrollLeft += evt.deltaY * 0.5; // Điều chỉnh tốc độ cuộn ngang
});
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.lt');
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
update();

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
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById("hamburger");
//   const menu = document.querySelector(".header-middle");

//   hamburger.addEventListener("click", () => {
//     menu.classList.toggle("show");
//   });
// });

// Video
// const video = document.querySelector('.hero__video');
// const fallback = document.querySelector('.hero__fallback');

// video.addEventListener('play', () => {
//   fallback.style.display = 'none';
// });

