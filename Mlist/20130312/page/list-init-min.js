KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/list-init",function(a,b){var c=a.DOM,d=a.Event;return listControl={init:function(){var a=c.query(".J_Height");for(i=0;i<10;i++)Height=c.height(a[i]),Height>300&&(aa="temple_"+[i],Parent=c.parent("."+aa),c.replaceClass(Parent,"normal","overflow"));d.on(".float-icon","click",function(a){var b=c.parent(a.currentTarget,".J_Height");c.hasClass(b,"overflow")?c.replaceClass(b,"overflow","normal"):c.replaceClass(b,"normal","overflow")});var b=c.query(".J_Delete");d.on(b,"click",function(a){var b=c.attr(a.currentTarget,"data");listControl.deleteHandle(b)}),d.on("#J_Release","click",function(a){a.preventDefault();if(!showPermissions("editor_material","\u4fc3\u9500\u7d20\u6750"))return;var b=c.attr(a.currentTarget,"data-url");if(isVersionPer("material",!1)){new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u53ea\u63d0\u4f9b\u5236\u4f5c\u4f53\u9a8c\uff0c\u5c0a\u4eab\u7248\u624d\u80fd\u4eab\u53d7\u7d20\u6750\u6295\u653e\u529f\u80fd",type:"info",buttons:[{value:"\u7ee7\u7eed\u4f53\u9a8c"},{value:"\u5173\u95ed"}],success:function(a){a=="\u7ee7\u7eed\u4f53\u9a8c"&&(window.location.href=b)}});return}window.location.href=b})},deleteHandle:function(a){new H.widget.msgBox({title:"\u5220\u9664\u5217\u8868",content:"\u7cfb\u7edf\u5c06\u4e3a\u60a8\u53d6\u6d88\u6b64\u6d3b\u52a8\u8bbe\u7f6e\u7684\u5217\u8868\u4fe1\u606f",type:"confirm",buttons:[{value:"\u5220\u9664"},{value:"\u53d6\u6d88"}],success:function(b){if(b=="\u5220\u9664"){var c=function(a){window.location.href=currentUrl},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},e="id="+a+"&form_key="+FORM_KEY;(new H.widget.asyncRequest).setURI(deleteUrl).setMethod("POST").setHandle(c).setErrorHandle(d).setData(e).send()}}})},search:function(){var a=c.val("#J_SearchListId"),b=c.val("#J_Pos"),d=c.val("#J_Mtype");if(c.val(c.get("#J_SearchName"))!="\u8f93\u5165\u7d20\u6750\u540d\u79f0")var e=encodeURIComponent(c.val(c.get("#J_SearchName")));else var e="";var f=currentUrl+"&pos="+b+"&mt="+d+"&searchName="+e+"&list_id="+a;window.location.href=f}}},{requires:["utils/showPages/index"]}); 