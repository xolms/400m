jQuery(document).ready(function($) {
	new WOW().init();
	resize();
	map();
	scrollbottom();
	$('.header__frame').viewportChecker({
		classToAdd: 'visible'
	});
	$('.company__wrap').viewportChecker({
		classToAdd: 'visible',
		offset: 100
	});
});
function uslugishow() {
	var items,item,curenttime,time,itemtime,indexitem
	items = $('.uslugi__item').length;
	item = $('.uslugi__item');
	item.css('opacity',0);
	curenttime = 1;
	time = curenttime/items;
	item.each(function(index,val){
		itemtime = time*index * 1000 ;
		indexitem = $(this);
		index += 1;
		addclass(indexitem,itemtime,curenttime);
	});
}
function addclass(item,time,current) {
	setTimeout(function(){
		item.css({
			'transition':current*3/$('.uslugi__item').length +'s',
			'opacity':1
		});
	},time);
}
function resize() {
	if($(document).width() <= 1000){
		$('.uslugi__item').addClass('zoomIn');
	}
	else {
		uslugishow();
	}
}
function map() {
	ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){     
        myMap = new ymaps.Map ("map", {
            center: [44.605451, 33.522854],
            zoom: 15
        });
				
      myPlacemark = new ymaps.Placemark([44.605451, 33.522854], { hintContent: '400M'});
			myMap.geoObjects.add(myPlacemark);
    }
}
function scrollbottom() {
    $('.header__link').click( function(event){ 
        event.preventDefault();
	    $('html, body').animate({ scrollTop: $('.section_uslugi').offset().top }, 500);
	    return false; // выключаем стандартное действие
    });
}
