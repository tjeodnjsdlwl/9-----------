$(function(){

    platformArr = ['넷플릭스','웨이브','티빙'];


    let i = 0;
    setInterval(() => {
        console.log(i);
        if(i > platformArr.length-1){
            i = 0;
        }
        headlineEl = `오늘의 '${platformArr[i]}' 랭킹`;
        $('.sc-ranking .headline').html(headlineEl);

        rank(i);


        i++;
    }, 5000);

    rank(0);

    function rank(num){
        fetch('./assets/data/rankData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;
            result = allData.filter(function(parm){
                return parm.platform == num;
            })
            let html='';
            let rank = 1;
            result.forEach(element => {

                if(element.change > 0){
                    changeEl = `<span class="num up">${element.change}</span>`
                }else if(element.change < 0){
                    changeEl = `<span class="num down">${(element.change)*-1}</span>`
                }else{
                    changeEl = `<span class="num">-</span>`
                }

                html+=`<li class="rank-item">
                <a href="" class="item-wrapper">
                    <img src="${element.thumb}" alt class="poster">
                    <div class="text-box">
                        <img src="./assets/img/ic-rank-${rank}.svg" alt="${rank}위" class="ic-ranknum">
                        <span class="title">${element.title}</span>
                    </div>
                    <div class="updown-box">
                        ${changeEl}
                    </div>
                </a>
            </li>`;
            rank++;
            });

            $('#rankList').html(html)
        })
    }





    // 1 - 오늘이거?
    // 2 - 카노회원
    // 3 - 3월 넷플릭스
    // 4 - 볼까말까

    list('#list1',1);
    list('#list2',2);
    list('#list3',3);
    list('#list4',4);

    function list(frame,sorNum){
        fetch('./assets/data/videoData.json')
        .then((response)=>response.json())
        .then((json)=>{
            allData=json.items;

            result = allData.filter(function(parm){
                return parm.sort.indexOf(sorNum) >= 0;
            })
    
            let html='';
    
            result.forEach(element => {
                if(sorNum === 4){
                    html+=`<a href="" class="swiper-slide">
                            <div class="img-area">
                            <img src="${element.thumb}" alt>
                            </div>
                            <div class="text-area">
                            <div class="title-box">
                            <span class="platform">
                                <svg width="36" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" data-v-30b216d4="" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M6.212 2.571h-1.38l-.005 2.504-.004 2.503c-.277-.86-.554-1.586-.83-2.31-.318-.83-.635-1.662-.953-2.697H1.714v8.865c.37-.053.763-.104 1.141-.154l.234-.03a7074.952 7074.952 0 01.004-4.845c.616 1.824.995 2.9 1.61 4.633l.495-.059c.335-.04.678-.081.999-.114l.015-8.296zm5.157 0H7.544v.013l-.015 8.166c1.28-.117 2.56-.213 3.842-.288l.002-1.37c-.814.05-1.593.103-2.403.157l-.058.004.001-.55.003-1.522c.3-.005.608-.005.917-.006.318 0 .637 0 .951-.006l.002-1.376c-.298.005-.604.008-.91.011-.324.003-.647.007-.958.013l.004-1.869c.38-.004.754-.005 1.126-.005h.391c.31 0 .623 0 .94-.003 0-.198-.003-.44-.005-.683v-.001c-.003-.243-.005-.486-.005-.685zm.897.007h4.26l-.001.678v.68h-.043c-.463 0-.94.002-1.401.004l-.007 6.367c-.45.01-.933.025-1.384.042l.005-3.188v-.015l.004-3.2h-.142c-.148 0-.296 0-.444-.002l-.111-.001c-.185-.002-.37-.004-.555-.004h-.183l.002-1.075v-.286zm8.996-.007H17.42v3.846l-.001 3.852a111.193 111.193 0 011.368.003V8.686L18.786 7.1h.228l.542-.001h.183l.364-.002c.186 0 .372.001.553.004v-.68l-.001-.682a56.332 56.332 0 00-1.092 0h-.192l-.374.001h-.212v-.898-.897h1.359c.372 0 .743 0 1.117.002V2.571zm.894 3.892c.002-1.295.004-2.59.003-3.885h1.38c.002 1.127 0 2.201-.002 3.277-.002 1.04-.005 2.081-.003 3.172.581.024 1.18.061 1.768.097l.593.036.003 1.37a119.438 119.438 0 00-3.745-.18c-.002-1.296 0-2.591.003-3.887zm4.875-3.885l.016 8.037c.45.035.915.073 1.365.113v-1.55c.002-2.2.004-4.4 0-6.6H27.03zm3.62 2.696c-.35-.915-.693-1.806-1.056-2.696h1.509l.136.353c.264.683.47 1.216.756 1.98.166-.397.31-.734.455-1.071.167-.39.334-.78.534-1.262h1.508c-.32.77-.639 1.505-.953 2.233-.28.646-.557 1.287-.831 1.942a244.55 244.55 0 011.805 4.682 88.861 88.861 0 00-.15-.021c-.455-.065-1.003-.144-1.435-.2a45.879 45.879 0 00-.557-1.46c-.146-.372-.294-.745-.447-1.16-.187.474-.365.883-.544 1.295-.151.35-.304.7-.462 1.092-.198-.022-.398-.047-.599-.072-.29-.036-.58-.072-.865-.1a299.497 299.497 0 001.759-4.08c-.193-.493-.379-.977-.562-1.455z" fill="#ED2517" data-v-30b216d4=""></path></svg>
                            </span>
                            <span class="title">${element.title}</span>
                            </div>
                            <p class="text">${element.desc}</p>
                            <span class="desc">
                            <svg width="81" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-30b216d4="" class=""><path d="M10.623 3.122H2.279v1.162h6.916c0 1.036-.126 2.352-.336 3.178H.837V8.61H5.75v1.764c-2.324.154-3.612 1.064-3.612 2.352 0 1.4 1.568 2.38 4.34 2.38 2.786 0 4.34-.98 4.34-2.38 0-1.288-1.302-2.198-3.64-2.352V8.61h4.928V7.462H10.23c.252-1.12.392-2.548.392-4.34zm-1.288 9.604c0 .798-1.106 1.232-2.87 1.232-1.75 0-2.856-.434-2.856-1.232s1.106-1.232 2.856-1.232c1.764 0 2.87.434 2.87 1.232zM22.678 14.952v-4.578h-8.386v4.578h8.386zm-.042-11.788h-8.344v1.148h6.916c-.014.98-.14 2.492-.336 3.346H12.85V8.82h11.27V7.658h-1.876c.266-1.218.392-2.828.392-4.494zm-1.386 10.64h-5.53v-2.31h5.53v2.31zM31.387 9.968c0-1.526-1.19-2.66-2.968-2.66-1.792 0-2.996 1.176-2.996 2.66 0 1.54 1.204 2.66 2.996 2.66 1.778 0 2.968-1.162 2.968-2.66zm-1.414 0c0 .868-.588 1.484-1.554 1.484-.91 0-1.554-.616-1.554-1.484 0-.882.644-1.484 1.554-1.484.896 0 1.554.602 1.554 1.484zm2.044-3.262V5.544h-7.252v1.162h7.252zm-5.488-2.17h3.78V3.36h-3.78v1.176zm8.022-1.904H33.11v12.474h1.442V8.96h1.932V7.756h-1.932V2.632zM48.427 8.61V7.406H46.55V2.632h-1.428v12.474h1.428V8.61h1.876zm-4.466 1.848c-1.596.336-3.626.42-5.166.392V4.97h4.256V3.794h-5.67v8.26h1.316c2.086 0 4.088-.14 5.446-.42l-.182-1.176zM55.778 5.782h1.946v1.582h-1.946V8.54h1.946v3.136h1.428V2.632h-1.428V4.62h-1.946v1.162zm3.64 8.96v-1.148H52.46v-2.702h-1.442v3.85h8.4zm-4.284-5.264V3.71h-5.698v5.768h5.698zm-1.442-1.106h-2.828V4.83h2.828v3.542z" fill="#98A4B7" data-v-30b216d4=""></path><path fill-rule="evenodd" clip-rule="evenodd" d="M69.506 4.006a.875.875 0 011.238 0l4.375 4.375a.875.875 0 010 1.238l-4.375 4.375a.875.875 0 11-1.238-1.238L73.263 9l-3.757-3.756a.875.875 0 010-1.238z" fill="#ADB5BD" data-v-30b216d4=""></path></svg>
                            </span>
                            </div>
                            </a>`;
                }else{
                    html+=` <div class="swiper-slide">
                            <a href="" class="img-area">
                            <img src="${element.thumb}" alt="${element.title}" class="poster">
                            <span class="badge">${element.genre}</span>
                            </a>
                            <div class="text-area">
                            <span class="title">${element.title}</span>
                            <div class="desc-box">
                            <i class="ic-light king"></i>
                            <strong class="rate green">${element.recommRate}</strong>
                            <span class="percent green">%</span>
                            <button class="btn-more"> <span class="blind">더보기</span> </button> </div> </div> </div>`;

                }
            });
            $(frame).html(html);
        })
    
    }



    // 슬라이드
    const cardSlide = new Swiper(".card-slide", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        navigation: {  
            nextEl: '.swiper-btn.next',
            prevEl: '.swiper-btn.prev',
        }
    });


    const viewSlide = new Swiper(".view-slide", {
        slidesPerView: 'auto',
    });


    const thumbSlide = new Swiper(".thumb-slide", {
        slidesPerView: 'auto',
        spaceBetween: 10,
    });


    const articleSlide = new Swiper(".article-slide", {
        slidesPerView: 'auto',
        spaceBetween: 16,
    });






    // 툴팁 닫기
    $('header .tooltip .ic-close').click(function(){
        $('header .tooltip').addClass('on')
    });





    $('.sc-recomm .tooltip .ic-close').click(function(){
        $('.sc-recomm .tooltip').addClass('on')
    });





    // 하단 메뉴 클릭 활성화
    $('.sc-bottom-nav .nav-list').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('active')) {
            $(this).siblings('.nav-list').removeClass('active')
        } else {
            $(this).addClass('active');
            $(this).siblings('.nav-list').removeClass('active')
            
        }
    });




    let scrollTop = 0;
    $(window).scroll(function(){
        const curr = $(this).scrollTop();
  
        if(curr > 180){
            if (curr > scrollTop) {
                $('.header').addClass('on');
                // $('.header .tooltip').addClass('on');
            } else {
                $('.header').removeClass('on');
            }
            scrollTop = curr;
        } else {
            $('.header').removeClass('on');
            // $('.header .tooltip').removeClass('on');

        }
    });




}) //삭제금지