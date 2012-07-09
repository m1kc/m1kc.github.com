function printable()
{
	$('#leftline').toggle();
	$('#leftline2').toggle();
	$('#rightline').toggle();
	
	$('.printables').toggle();
}

function unseenArt()
{
	var scrollTop = $(document).scrollTop();
	var windowHeight = $(window).height();
	$.each($('.art img'), function(key, value){
		//$(document).scrollTop()
		//$(value).position().top
		//$(value).height()
		//$(window).height()
		///value.style.visibility = 'hidden';
		///value.style.visibility = 'visible';
		if ( $(value).position().top > (scrollTop+windowHeight) )
		{
			//value.style.visibility = 'hidden';
		}
		else if ( $(value).position().top+$(value).height() < scrollTop )
		{
			//value.style.visibility = 'hidden';
		}
		else
		{
			if ((!value.src)||(value.src=='')) value.src = value.dataset['src'];
			//value.style.visibility = 'visible';
		}
	});
	setTimeout('unseenArt()', 1000);
}
