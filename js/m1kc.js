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
		//$(document).scrollTop();
		//$(value).position().top;
		//$(value).height();
		///value.style.visibility = 'hidden';
		if ( ( value.style.visibility=='visible' ) && ( $(value).position().top+$(value).height() < $(document).scrollTop() ) )
		{
			value.style.visibility = 'hidden';
			alert('hiding '+value.src);
		}
	});
	setTimeout('unseenArt()', 1000);
}
