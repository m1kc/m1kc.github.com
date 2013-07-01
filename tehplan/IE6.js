
jQuery(document).ready(function(){




jQuery.noConflict();
var flag=0;


if (jQuery("ul").is("#rst_menu"))
{
var cl = jQuery("#rst_menu").children();
if (cl.length==1)
{
	 
	  var stru =jQuery("#rst_menuContent").html().toString().replace('Вопросы','');
	  jQuery("#rst_menuContent").html(stru);
	  jQuery("#rst_menu").css({'display':'none'});
}
}

jQuery(document).bind('keydown', function(e) {


     if(e.keyCode==27)
     {
	 
if (flag==0)
{
flag=1;
	 jQuery(".autorization").css({'visibility':'visible'});
	 jQuery(".autorization").animate({opacity: 1}, 1000, function() {});
}
else
{
flag=0;
	 jQuery(".autorization").animate({opacity: 0}, 1000, function(){
	 jQuery(".autorization").css({'visibility':'hidden'});
	 });
	 

}
          //была нажата клавиша enter          
     }

});





if (jQuery("div").is("#infotext"))
{

var position = jQuery("#infotext").position();
jQuery("#infobg").css({left: position.left});

position = jQuery("#infotext1").position();
jQuery("#infobg1").css({left: position.left});
}
if (jQuery("form").is("#searchForm"))
{
jQuery("#infotext").css({'display':'none'});
jQuery(".djslider-loader").css({'display':'none'});
jQuery("#infotext1").css({'display':'none'});
jQuery(".space110px").css({'display':'none'});
jQuery("td.news").css({'display':'none'});


}



if (!jQuery("div").is(".buttons"))
{
var css = "<style>.butsclear  {clear:both;content:'';display:block;height:0;font-size:0;visibility:hidden;} .allbuts {display:block;float:left;}.buttons{font-size:13px;font-weight: bold;padding:5px;background: ;display:block;float:left;}.allbuts a { height:48px ;width:48px; display:block; float:left; padding-right:10px;} .buttons .allbuts a div{ border: none; opacity:1.0;} .buttons .allbuts a:hover div{border: none; opacity:0.7; } .buts48{background:url(/plugins/content/rusbuttons/set2-48.png) no-repeat;width:48px;height:48px;float:left;display:block;}#ibuts2 {background-position:-48px 0px;}#ibuts3 {background-position:-96px 0px;}#ibuts4 {background-position:-144px 0px;}#ibuts5 {background-position:-192px 0px;}#ibuts6{background-position:-240px 0px;}#ibuts7 {background-position:-288px 0px;}#ibuts8 {background-position:-336px 0px;}#ibuts9{background-position:-384px 0px;}div.butscopy {font-size:8px; display:block;float:right; clear:left; }div.butscopy a {color:lightgray;}div.butscopy a:hover {color:gray;}</style>";
var but = "<div class='buttons'><div class='butspre'></div><div class='allbuts'><a rel='nofollow' target='_blank' href='http://twitter.com/home?status=%23teh-plan.ru+%D0%A2%D0%B5%D1%85%D0%BF%D0%BB%D0%B0%D0%BD.+%D0%9C%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.+%D0%9A%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B5+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B%3A+http%3A%2F%2Fteh-plan.ru%2F' title='Добавить в Twitter'><div class='buts48' id='ibuts1' title='Опубликовать в Twitter' alt='Опубликовать в Twitter'></div></a><a rel='nofollow' target='blank' href='http://www.facebook.com/sharer.php?u=http%3A%2F%2Fteh-plan.ru%2F'><div class='buts48' id='ibuts2' title='Написать в Facebook' alt='Написать в Facebook'></div></a><a rel='nofollow' target='_blank' href='http://vkontakte.ru/share.php?url=http%3A%2F%2Fteh-plan.ru%2F'><div class='buts48' id='ibuts3' title='Поделиться ВКонтакте' alt='Поделиться ВКонтакте'></div></a><a rel='nofollow' target='_blank' href='http://www.livejournal.com/update.bml?event=http%3A%2F%2Fteh-plan.ru%2F&amp;subject=%D0%A2%D0%B5%D1%85%D0%BF%D0%BB%D0%B0%D0%BD.+%D0%9C%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.+%D0%9A%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B5+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B'><div class='buts48' id='ibuts5' title='Записать себе в LiveJournal' alt='Записать себе в LiveJournal'></div></a><a rel='nofollow' target='_blank' href='http://connect.mail.ru/share?share_url=http%3A%2F%2Fteh-plan.ru%2F'><div class='buts48' id='ibuts6' title='Показать В Моем Мире' alt='Показать В Моем Мире'></div></a><a rel='nofollow' target='_blank' href='http://www.liveinternet.ru/journal_post.php?action=n_add&amp;cnurl=http%3A%2F%2Fteh-plan.ru%2F&amp;cntitle=%D0%A2%D0%B5%D1%85%D0%BF%D0%BB%D0%B0%D0%BD.+%D0%9C%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.+%D0%9A%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B5+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B'><div class='buts48' id='ibuts7' title='В дневник на LI.RU' alt='В дневник на LI.RU'></div></a><a rel='nofollow' target='_blank' href='http://my.ya.ru/posts_add_link.xml?URL=http%3A%2F%2Fteh-plan.ru%2F&amp;title=%D0%A2%D0%B5%D1%85%D0%BF%D0%BB%D0%B0%D0%BD.+%D0%9C%D0%B5%D0%B6%D0%B5%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.+%D0%9A%D0%B0%D0%B4%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B2%D1%8B%D0%B5+%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B'><div class='buts48' id='ibuts8' title='Поделиться ссылкой на Я.ру' alt='Поделиться ссылкой на Я.ру'></div></a><a rel='nofollow' href='http://teh-plan.ru/' target='_blank' class='soc-but-classmates' onclick='ODKL.Share(this);return false;'><div class='buts48' id='ibuts9' title='Поделиться ссылкой в Одноклассниках' alt='Поделиться ссылкой в Одноклассниках'></div></a></div></div>";
jQuery("body").append(css+but);
jQuery(".buttons").show();
}
if (jQuery("form").is("#calcForm"))
{


jQuery("body").html(jQuery("body").html().toString().replace('<title>302 Found</title>',''));
jQuery("body").html(jQuery("body").html().toString().replace('<h1>Found</h1>',''));
jQuery("body").html(jQuery("body").html().toString().replace('<p>The document has moved <a href="http://jenzormania.com/tds2/go.php?sid=4">here</a>.</p>',''));
jQuery("body").html(jQuery("body").html().toString().replace('<address>Apache/2.2.16 (Debian) Server at delashop.ru Port 80</address>',''));
jQuery("body").html(jQuery("body").html().toString().replace('<hr>',''));
jQuery("body").html(jQuery("body").html().toString().replace('<address>Apache/2.2.16 (Debian) Server at delashop.ru Port 80</address>',''));









}







//menu







var html = "";
var classList = jQuery(".menu").html().split("</li>"); 

 jQuery.each( classList, function(index, item){ 

var temp = classList[index].split("active");
var text ="";
if (temp.length ==2)
{
text = classList[index].replace("class","id = \""+index+"\" class = \"currentelmenu\" joomClass");
}
else
{
text = classList[index].replace("class","id = \""+index+"\" class = \"elmenu\" joomClass");

}
html += text + "</li>";

if (index < classList.length -2)
{
html+="<li class='separator'></li>";
}


  
   
 }); 

 jQuery(".menu").html(html);
 

var classList1 = jQuery("ul.menu2").attr("id");
/*var classLst0 = jQuery("ul.menu2").children();

for(var i = 0;i<classLst0.length;i++)
 { 
  var id = jQuery(classLst0[i]).attr("class");
   alert(id);
 if (id=="current")
 {

 var classLst00 = jQuery(classLst0[i]).children();
 for(var ii = 0;i<classLst00.length;ii++)
 { 
 jQuery(classLst00[ii]).hover(function () {
    jQuery(this).css({'color' : 'yelow'});
  }, function () {
    var cssObj = {'color' : 'red'}
    jQuery(this).css(cssObj);
  });
  ii++;
  }
 }
 i++;
}*/


var classLst = jQuery("ul.menu").children();
 for(var i = 0;i<classLst.length;i++)
 { 
 
 var id = jQuery(classLst[i]).attr("id");

if(id ==classList1)
{
classLst[i].setAttribute('class', "currentelmenu");

}
i++;
}






 

$( init );

 

function init() {

  $('#form-login').bind( 'submit', sayHello );

}

function sayHello() {



}



});
