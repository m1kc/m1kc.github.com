function printable()
{
	$('#leftline').toggle();
	$('#leftline2').toggle();
	$('#rightline').toggle();
	
	$('.printables').toggle();
}

function getClientHeight()
{
	return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight;
}

function unseenArt()
{
	$.each($('.art img'), function(key, value){
		//$(document).scrollTop()
		//$(value).position().top
		//$(value).height()
		//$(window).height()
		///value.style.visibility = 'hidden';
		///value.style.visibility = 'visible';
		if ( $(value).position().top > ($(document).scrollTop()+$(window).height()) )
		{
			value.style.visibility = 'hidden';
		}
		else if ( $(value).position().top+$(value).height() < $(document).scrollTop() )
		{
			value.style.visibility = 'hidden';
		}
		else
		{
			value.style.visibility = 'visible';
		}
	});
	setTimeout('unseenArt()', 1000);
}
