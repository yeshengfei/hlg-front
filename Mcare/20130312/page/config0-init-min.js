KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/config0-init",function(a,b){var a=KISSY,c=a.DOM,d=a.Event;return Care={statPaginator:null,recordPaginator:null,chart:null,init:function(){Care.maxNum=c.val("#J_MaxNum"),d.delegate(document,"click",".J_CareEdit",function(a){var b=c.attr(a.currentTarget,"data");c.val("#J_Status",b),c.attr("#J_Checkbox_"+b,"checked",!0);var d=c.html("#J_Templet_"+b);Care.checkTitleLen(d),c.val("#J_CareBox",d),c.show("#J_CareContent")}),d.delegate(document,"click",".J_CareDel",function(a){var b=c.attr(a.currentTarget,"data");c.hide("#J_CareContent"),c.remove("#J_TempletBox_"+b)}),d.delegate(document,"click","#J_CareSave",function(a){var b=c.val("#J_Status"),d=c.val("#J_CareBox"),e=c.html("#J_Zs_Num");e==0?(c.show("#J_MsgErrorBox"),c.hide("#J_Templet_"+b)):c.hide("#J_MsgErrorBox");if(b!=0)c.html("#J_Templet_"+b,d),c.hide("#J_CareContent");else if(e!=0){Care.maxNum=++Care.maxNum;var f=Care.maxNum,g='<li class="clear J_TempletParames" id="J_TempletBox_'+f+'">'+' <input type="hidden" class="J_TempletId" value="0"><ul>'+'<li class="fl"><input type="radio" value="" class="J_CheckBox" name="range_type" id="J_Checkbox_'+f+'"></li>'+'<li class="fl w-370 pl10 J_Content" id="J_Templet_'+f+'">'+d+"</li>"+'<li class="fr">'+'<a href="#2" class="J_CareEdit" data="'+f+'" >\u4fee\u6539</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#2" class="J_CareDel" data="'+f+'">\u5220\u9664</a>'+"</li></ul></li>";c.insertBefore(c.create(g),"#J_CareContent"),c.hide("#J_CareContent"),c.attr(".J_CheckBox","checked","checked")}}),d.delegate(document,"click",".J_CareDel",function(a){var b=c.query(".J_CareDel");b.length==0?(c.show("#J_CareContent"),c.val("#J_CareBox",""),c.html(c.get("#J_Zs_Num"),0)):c.hide("#J_CareContent")}),d.delegate(document,"click",".J_CareAdd",function(a){c.val("#J_Status",0),c.html(c.get("#J_Zs_Num"),0),c.val("#J_CareBox",""),c.show("#J_CareContent")}),d.delegate(document,"click",".J_AddReplace",function(a){var b=c.html(a.currentTarget),d=c.get("#J_CareBox"),e=Care.getCursorPosition(d);Care.add(d,e,b),Care.checkTitleLen(c.val("#J_CareBox"))}),d.on("#J_CarePublic","click",Care.save)},checkTitleLen:function(a){var b=a.replace(/[^\x00-\xff]/g,"*").length;c.html(c.get("#J_Zs_Num"),b)},getCursorPosition:function(a){var b={text:"",start:0,end:0};a.focus();if(a.setSelectionRange)b.start=a.selectionStart,b.end=a.selectionEnd,b.text=b.start!=b.end?a.value.substring(b.start,b.end):"";else if(document.selection){var c,d=document.selection.createRange(),e=document.body.createTextRange();e.moveToElementText(a),b.text=d.text,b.bookmark=d.getBookmark();for(c=0;e.compareEndPoints("StartToStart",d)<0&&d.moveStart("character",-1)!==0;c++)a.value.charAt(c)=="\n"&&c++;b.start=c,b.end=b.text.length+b.start}return b},add:function(a,b,c){var d,e,f,g,h,i,j;a.setSelectionRange?(d=a.value,e=d.substring(0,b.start)+c+d.substring(b.end),h=i=b.start+c.length,j=a.scrollTop,a.value=e,a.scrollTop!=j&&(a.scrollTop=j),a.setSelectionRange(h,i)):a.createTextRange&&(g=document.selection.createRange(),g.text=c,g.setEndPoint("StartToEnd",g),g.select())},save:function(){if(Care.checkParams()==0)return;ParamsErrorBox=KISSY.one("#J_ParamsErrorBox"),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox");if("11"==careType||"13"==careType){var a=Number(c.val("#J_LowestPrice"));if(isNaN(Number(a))==1||a<0){c.html("#J_ParamsErrorMsg","\u8ba2\u5355\u91d1\u989d\u4e00\u5b9a\u8981\u5927\u4e8e0"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return}}var b=document.getElementById("J_RuleSet"),d=function(a){ParamsErrorBox.hide(),c.html("#J_ParamsSucessMsg","\u8bbe\u7f6e\u6210\u529f"),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown(),c.val("#J_CareId",a.desc)},e=function(a){ParamsSucessBox.hide(),c.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown();return},f=Care.generatePostTemple(),g=KISSY.JSON.stringify(f),h=c.val("#J_CareId"),i=c.val("#J_ShopLevel"),j="type="+careType+"&care_id="+h+"&shop_level="+i+"&templets="+g;if("1"==careType||"12"==careType){var k=c.val("#J_LimitHour");j+="&limit_hour="+k,"1"==careType&&(j+="&limit_minute="+c.val("#J_LimitMinute"))}else if("22"==careType||"32"==careType){var l=c.val("#J_LimitDay");j+="&limit_day="+l}else{var m=c.val("#J_LimitMinute");j+="&limit_minute="+m}if("32"==careType){var n=c.val("#J_CareTime");j+="&care_time="+n}if("11"==careType||"13"==careType){var o=c.val("#J_LowestPrice");j+="&lowest_price="+o}return(new H.widget.asyncRequest).setURI(saveCareUrl).setMethod("POST").setHandle(d).setErrorHandle(e).setData(j).send(),!0},generatePostTemple:function(){var b=[];return a.each(a.all(".J_TempletParames"),function(a,d){var e={};e.is_checked=c.prop(c.get(".J_CheckBox",a),"checked")?1:0,e.content=H.util.strProcess(c.html(c.get(".J_Content",a))),e.templet_id=c.val(c.get(".J_TempletId",a)),e.is_sys_tmp=c.val(c.get(".J_IsSysTmp",a)),b.push(e)}),b},checkParams:function(){return!0}}},{requires:["utils/showPages/index"]}); 