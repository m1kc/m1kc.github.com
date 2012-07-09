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

function hideUnseenArt()
{
	$.foreach($('.art img'), function(key, value){
		value.style.visibility = 'hidden';
	});
	setTimeout('hideUnseenArt()', 5000);
}
