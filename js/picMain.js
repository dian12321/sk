$(function () {
    // ======================= logo, btnTop 클릭시 최상단
    $(".logo, .btnTop").on("click", () => {
        $("html,body").stop().animate({
            scrollTop: 0
        }, 400); // 0.4초
    });

    // ======================= 스크롤 500px 이상 내릴때 btnTop 나타남 
    $(window).scroll(() => {
        if ($(this).scrollTop() > 500) {
            $(".btnTop").fadeIn();
        } else {
            $(".btnTop").fadeOut();
        }
    });



// ======================= header 스타일 업데이트 

$("header").hover(
    // 마우스 올라갔을때
    () => updateHeaderStyles(true),
    // 마우스 벗어났을때 
    () => updateHeaderStyles(false)
);

// || <- 이중세로막대 (이것이 참이거나 저것이 참일때)
// || 논리연산자 (or 또는) 인데, 삼항 조건 연산자와 함께 쓰임 
// (shift + \ (금액 원표시))

function updateHeaderStyles(isHovered, isScrolled) {
    let imgSrc = isHovered || isScrolled ? './images/skPic-logo-or.png' : './images/skPic-logo.svg';

    let headerStyles = {
        'height': isHovered || isScrolled ? '110px' : '',
        'width': '100%',
        'background-color': isScrolled ? 'white' : (isHovered ? 'white' : ''),
        'border-bottom': isHovered || isScrolled ? '1px solid #ddd' : ''
    };

    let linkStyles = {
        'color': isHovered || isScrolled ? '#000' : '', 
    };

    $("header img").attr('src', imgSrc);
    $("header").css(headerStyles);
    $("ul.searchLang li:nth-child(1) a i, ul.searchLang li:nth-child(3) a ").css('color', linkStyles.color);
    $(".nav-list>li>a, .submenu>li>a").css(linkStyles);
}







$(document).ready(function () {
    // 스크롤 이벤트
    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop();
        let isScrolled = scrollTop > 110;

        let headerStyles = {
            'height': isScrolled ? '110px' : '',
            'width': '100%',
            'background-color': isScrolled ? 'white' : '',
            'border-bottom': isScrolled ? '1px solid #ddd' : ''
           
        };

        let linkStyles = {
            'color': isScrolled ? '#000' : ''
        };

        $("header img").attr('src', isScrolled ? './images/skPic-logo-or.png' : './images/skPic-logo.svg');
        $("header").css({
            ...headerStyles,
            'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
        });

        updateHeaderStyles(false, isScrolled); // isHovered를 false로 전달
    });

    // 호버 이벤트
    $("ul#menu, .innerHeader").hover(
        () => {
            $(".submenu, .smenu_bar").stop().slideDown('fast');
            updateHeaderStyles(true, false); // isHovered를 true로 전달
        },
        () => {
            $(".submenu, .smenu_bar").stop().fadeOut('fast');
            updateHeaderStyles(false, $(window).scrollTop() > 110); // 스크롤 여부 전달
        }
    );

    // slicknav 플러그인 적용
    $("ul#menu").slicknav();
});



// =========== 스크롤 이동에 따른 header 스타일 변화 

$(window).scroll(updateStyleOnScroll);
function updateStyleOnScroll() {
    // 스크롤위치 가져옴
    let scrollTop = $(window).scrollTop();
    // 스크롤 높이 설정 110px
    let isScrolled = scrollTop > 110; 
    // 스타일 정의
    let headerStyles = {
        'height': isScrolled ? '110px' : '',
        'width': '100%', // 가로 항상 100% 
        'background-color' : isScrolled ? '#fff' : '',
        'border-bottom': isScrolled ? '1px solid #ddd' : ''
    };
    let linkStyles = {
        'color': isScrolled ? '#000' : ''
    };
    // 이미지 소스와 그림자 스타일 
    $("header img").attr('src', isScrolled ? './images/skPic-logo-or.png' : './images/skPic-logo.svg');
    $("header").css({
        ...headerStyles,
        'box-shadow': isScrolled ? '0 5px 5px rgba(0, 0, 0, 0.1)' : ''
    });
     
// 다른 스타일 업데이트 함수 호출
updateHeaderStyles(isScrolled);
}

});
 // ... (전개연산자 또는 스프레드 연산자)
        // : 이것은, 객체의 속성들을 복사하여 다른 객체에 넣음
        // ex - let obj2 = {...obj1} // obj1 = {a:1, b:2};












// ======================= 관련사이트 함수 

// 선택된 사이트 열기 함수
function Site() {
    // 각 사이트 URL 맵핑 (대입)
    let sites = {
        "SK": "https://www.sk.com",
        "SKC": "https://www.skc.co.kr",
        "SKN": "http://www.sknexilis.com/kr/",
        "SKEN": "https://www.skenpulse.com/",
        "SKPucore": "https://www.skpucore.com/"
    };
// 선택된 사이트의 URL 가져오기
    let selectedSite = sites[$("#familySites").val()];
    // 만약 선택된 사이트가 존재하면 새 창으로 해당 url 열기 
    if (selectedSite) {
        window.open(selectedSite, "_blank");
    }
}



// function Site() {
//     // 선택된 옵션을 값(value) 가져옴
//     // .value; -> id로 된 familySites를 찾아 value값 가져옴
//     let selectedValue = document.getElementById("familySites").value;
//     // selectedValue 선택된 값에 따른 URL 변경
//     switch (selectedValue) {
//         case "SK":
//             window.open("https://www.sk.com", "_blank");
//             break;
//         case "SKC":
//             window.open("https://www.skc.co.kr", "_blank");
//             break;
//         case "SKN":
//             window.open("http://www.sknexilis.com/kr/", "_blank");
//             break;
//         case "SKEN":
//             window.open("https://www.skenpulse.com/", "_blank");
//             break;
//         case "SKPucore":
//             window.open("https://www.skpucore.com/", "_blank");
//             break;
            // swich문은 제어문이며, 특정 변수 값을 여러가지(case)와 비교하여
            // 해당하는 경우에 실행하는 블록을 지정 
            //  window.open - 새창 열때 사용되는 자바스크립트 메서드
            // window.location.href
            // 자바스크립트에서 현재 창의URL을 나타내는 속성임
            // 브라우저가 새로운 URL로 이동됨
            // break; - 자바스크립트 제어문 
            // : switch 블록을 즉시 종료하고 다음 명령문으로 이동 
//     }
// }