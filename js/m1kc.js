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
	alert('foo');
	setTimeout('hideUnseenArt()', 5000);
}
