// jQuery를 활용한 인터렉션 ...
// item 변수에 class 선언
var item = $('.menu-item');
var subItem = $('.sub-menu a');
// var tab = $('.board section');
var tab = $('.tab');
var list = $('.related-list')

// 메인 메뉴 제어를 위한 함수 
// 동적으로 컨트롤 할수 있음 
item.attr('tabindex', 0);
subItem.attr('class', 'fas fa-angle-left');
tab.attr('tabindex', 0);

// 멀티 이벤트를 처리 가능 
// 현재 마우스만 올린 hover만 $(this)

item.on('mouseover focusin',function(){
    //모든영역에  menu-act를 모두 지운다. 
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

// icon 동적으로 변경 
// toggleClass: remove + add
subItem.hover(function () {
    $(this).toggleClass('fa-angle-right');
});

// me
// tab.on("click focusin", function () {
//     //모든영역에  tab-act를 모두 지운다.
//     tab.removeClass("tab-act");
//     $(this).addClass("tab-act");
// });

// after
// 탭 메뉴 제어를 위한 함수
// tab.click(function(){
//     $(this).parent().siblings().removerClass('tab-act');
//     $(this).parent().addClass('tab-act');
// });
//  click 함수보다는 on("click focusin" 사용 하는게 탭키 사용에 좋다
tab.on("click focusin",function () {
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});

// 관련 사이트 목록 애니메니션을 위한 함수 
// list.hover(function(){
//     $(this).toggleClass('related-act'); 
// });

list.on('mouseover focusin', function (){
    $(this).addClass("related-act");
});
list.on('mouseout focusout', function (){
    $(this).removeClass("related-act");
});
 