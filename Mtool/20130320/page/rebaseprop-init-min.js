KISSY.add("utils/showPages/index",function(a){function e(a){var b=this;if(!(b instanceof e))return new e(a);this.pageNum=4,this.name=a,this.page=1,this.pageCount=200,this.argName="page"}var b=a.DOM,c=a.Event,d=document;return a.mix(e.prototype,{jump:function(){return undefined},checkPages:function(){isNaN(parseInt(this.page))&&(this.page=1),isNaN(parseInt(this.pageCount))&&(this.pageCount=1),this.page<1&&(this.page=1),this.pageCount<1&&(this.pageCount=1),this.page>this.pageCount&&(this.page=this.pageCount),this.page=parseInt(this.page),this.pageCount=parseInt(this.pageCount)},_createHtml:function(a){var b=this,c="",d=this.page-1,e=this.page+1;if(a==""||typeof a=="undefined")a=1;switch(a){case 1:c+='<span class="number">',this.page!=1&&(c+='<span title="Page 1"><a href="javascript:'+b.name+'.toPage(1);">1</a></span>'),this.page>=5&&(c+="<span>...</span>");if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount;for(var g=this.page-2;g<=f;g++)g>0&&(g==this.page?c+='<span title="Page '+g+'">'+g+"</span>":g!=1&&g!=this.pageCount&&(c+='<span title="Page '+g+'"><a href="javascript:'+b.name+".toPage("+g+');">'+g+"</a></span>"));this.page+3<this.pageCount&&(c+="<span>...</span>"),this.page!=this.pageCount&&(c+='<span title="Page '+this.pageCount+'"><a href="javascript:'+b.name+".toPage("+this.pageCount+');">'+this.pageCount+"</a></span>"),c+="</span><br />";break;case 2:if(this.pageCount>1){c+='<div class="page-bottom"> <div class="sabrosus">',d<1?c+='<span class="pre-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',this.page==1;if(this.page-2<=0){var h=1;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else if(this.page+2>=this.pageCount){var h=this.pageCount-4;if(this.pageCount>this.page+4)var f=this.page+4;else var f=this.pageCount}else{var h=this.page-2;if(this.pageCount>this.page+2)var f=this.page+2;else var f=this.pageCount}for(var g=h;g<=f;g++)g>0&&(g==this.page?c+='<span class="current a-padding">'+g+"</span>":c+='<a class="a-padding" href="javascript:'+b.name+".toPage("+g+');">'+g+"</a>");this.page+5<this.pageCount&&(c+='<a class="a-padding" title="" href="javascript:'+b.name+".toPage("+(this.page+3)+');">...</a>'),this.page==this.pageCount,e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a class="" href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',this.pageCount>5&&(c+='<font class="number">',c+="\u5171"+this.pageCount+"\u9875&nbsp;\u5230\u7b2c&nbsp;",this.page>=this.pageCount?c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+this.pageCount+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875':c+='<input style="" type="text" class="page-pic-no w-30 bg-img" id="pageInput'+b.name+'"  value="'+(this.page+1)+'" onkeypress="return window.'+b.name+'.formatInputPage(event);" onfocus="this.select()">&nbsp;\u9875',c+='<input type="button" value="" class="page-pic-no gray-btm-h-go w-30 btm-go" onclick="javascript:var page = document.getElementById(\'pageInput'+b.name+"').value; if(isNaN(Number(page))|| Number(page)==0) { var turnTo = 1;} else if(page>"+this.pageCount+"){ var turnTo = "+this.pageCount+";} else{var turnTo = page;}  window."+b.name+'.toPage(turnTo);">',c+="</font>"),c+='<div style="clear:both"></div></div></div> '}break;case 3:c+='<div class="page-top"><div class="sabrosus"><span class="count">'+this.page+" / "+this.pageCount+"</span>",d<1?c+=' <span class="pre-none page-pic-no"></span>':c+='<a class="border-left-dedede" href="javascript:'+b.name+".toPage("+d+');" title="\u4e0a\u4e00\u9875"><span class="pre page-pic-no"></span></a>',e>this.pageCount?c+='<span class="next-none page-pic-no"></span>':c+='<a href="javascript:'+b.name+".toPage("+e+');" title="\u4e0b\u4e00\u9875"><span class="next page-pic-no"></span></a>',c+='<div style="clear:both"></div></div></div>'}return c},formatInputPage:function(a){var b=navigator.appName=="Microsoft Internet Explorer"?!0:!1;if(!b)var c=a.which;else var c=event.keyCode;return c==8||c==46||c>=48&&c<=57?!0:!1},toPage:function(a,b){var c=1,d=this;typeof a=="object"?c=a.options[a.selectedIndex].value:c=a,d.jump(c,b,"")},printHtml:function(a,c){return this.checkPages(),b.html(a,this._createHtml(c)),this},setPageCount:function(a){return this.pageCount=a,this},getPageCount:function(){return this.pageCount},setRender:function(a){return this.jump=a,this},setPageNum:function(a){return this.pageNum=a,this},setPage:function(a){return this.page=a,this}}),e}),KISSY.add("page/rebaseprop-init",function(S,showPages){var S=KISSY,DOM=S.DOM,Event=S.Event;return rebaseprop={paginator:null,panel:null,msg:null,checkBoxs:null,init:function(){rebaseprop.searchTbItems(),Event.on("#J_SelectItemCid","change",function(a){rebaseprop.searchTbItems()}),Event.on("#J_SearchBtn","click",rebaseprop.searchTbItems),Event.on("#J_TCheckAll","click",rebaseprop.CheckAll)},searchTbItems:function(){var a=function(a){DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,DOM.css(DOM.get("#J_NoteIcon"),"display","none"),totalRecords>0?(DOM.css(DOM.get("#J_REmpty"),"display","none"),DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","")):(DOM.css(DOM.get("#J_REmpty"),"display",""),DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","none"),DOM.css(DOM.query(".J_ControlBtm"),"display","none")),DOM.html("#J_PromotionItemList",a.payload.body);var b=DOM.query("#J_PromotionItemList .J_CheckBox");selectItemNum=0,Event.on(b,"click",function(a){this.checked?selectItemNum+=1:(DOM.attr("#J_TCheckAll","checked",!1),selectItemNum-=1),DOM.text("#J_SelectedItemNum",selectItemNum)});var c=Math.ceil(totalRecords/a.payload.pageNum);rebaseprop.paginator=(new showPages("rebaseprop.paginator")).setRender(rebaseprop.handlePagination).setPageCount(c).printHtml("#J_BottomPaging",2),rebaseprop.paginator.printHtml("#J_TopPaging",3)};if(DOM.val(DOM.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var b=encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle")));else var b="";var c=DOM.val(DOM.get("#J_SelectItemPage")),d=DOM.val(DOM.get("#J_SelectItemCid")),e=DOM.val(DOM.get("#J_SearchSelling")),f=DOM.val(DOM.get("#J_SelectItemOrder")),g="q="+b+"&cid="+d+"&type="+e;g+="&itemOrder="+f+"&pageSize="+c;if(e==0){var h=DOM.val(DOM.get("#J_StartPrice")),i=DOM.val(DOM.get("#J_EndPrice"));g+="&start_price="+h+"&end_price="+i}DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(a).setData(g).send()},handlePagination:function(a){pageId=a;var b=function(a){DOM.attr("#J_TCheckAll","checked",!1),DOM.hide("#J_RightLoading"),DOM.show("#J_MainRightContent"),totalRecords=a.payload.totalRecords,DOM.css(DOM.get("#J_NoteIcon"),"display","none"),totalRecords>0?(DOM.css(DOM.get("#J_REmpty"),"display","none"),DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","")):(DOM.css(DOM.get("#J_REmpty"),"display",""),DOM.css(DOM.query(".J_PromotionItemBtnHolder"),"display","none")),DOM.html("#J_PromotionItemList",a.payload.body);var b=DOM.query("#J_PromotionItemList .J_CheckBox");Event.on(b,"click",function(a){this.checked||DOM.attr("#J_TCheckAll","checked",!1)});var c=Math.ceil(totalRecords/a.payload.pageNum);rebaseprop.paginator.setPage(pageId).setPageCount(c).printHtml("#J_BottomPaging",2),rebaseprop.paginator.setPage(pageId).setPageCount(c).printHtml("#J_TopPaging",3)};if(DOM.val(DOM.get("#J_SearchTitle"))!="\u5173\u952e\u5b57\u3001\u5546\u54c1\u94fe\u63a5\u3001\u5546\u54c1\u7f16\u7801")var c=encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle")));else var c="";var d=DOM.val(DOM.get("#J_SelectItemPage")),e=DOM.val(DOM.get("#J_SelectItemCid")),f=DOM.val(DOM.get("#J_SearchSelling")),g=DOM.val(DOM.get("#J_SelectItemOrder")),h="q="+c+"&cid="+e+"&type="+f;h+="&itemOrder="+g+"&pageSize="+d+"&page_id="+pageId;if(f==0){var i=DOM.val(DOM.get("#J_StartPrice")),j=DOM.val(DOM.get("#J_EndPrice"));h+="&start_price="+i+"&end_price="+j}DOM.show("#J_RightLoading"),DOM.hide("#J_MainRightContent"),(new H.widget.asyncRequest).setURI(getItemsFromTbUrl).setMethod("GET").setHandle(b).setData(h).send()},CheckAll:function(a){if(!rebaseprop.checkBoxs)var b=DOM.query("#J_PromotionItemList .J_CheckBox");else var b=rebaseprop.checkBoxs;var c=b.length;a.currentTarget.checked?selectItemNum=c:selectItemNum=0,DOM.text("#J_SelectedItemNum",selectItemNum);for(i=0;i<c;i++){var d=b[i].value;if(b[i].disabled)continue;this.checked?b[i].checked=!0:b[i].checked=!1}},showContent:function(a){DOM.toggle("#J_"+a+"_Content"),selectBaseprop=DOM.prop("#J_BasepropSelect","title"),a==="FreightBear"&&!DOM.prop("#J_FreightBear","checked")&&(DOM.prop("#J_FreightBear_Seller","checked",!0),rebaseprop.freightBearSeller());if(DOM.attr("#J_"+a,"checked"))selectBaseprop+=a+",",DOM.prop("#J_BasepropSelect","title",selectBaseprop),DOM.css("#J_PreviewBtm","display","");else{var b=new RegExp(a+",","g");selectBaseprop=selectBaseprop.replace(b,""),DOM.prop("#J_BasepropSelect","title",selectBaseprop);var c=DOM.query("#J_ChooseBasepropOption input"),d=!0;for(var e=0;e<c.length;e++)c[e].checked&&(d=!1);d&&DOM.css("#J_PreviewBtm","display","none")}},freightBearSeller:function(){DOM.prop("#J_ExpressTemplate","checked",!1),DOM.css("#J_ExpressTemplate_Content","display","none"),DOM.prop("#J_DeliveryCosts","checked",!1),DOM.css("#J_DeliveryCosts_Content","display","none");var a=new RegExp("ExpressTemplate,DeliveryCosts","g");selectBaseprop=selectBaseprop.replace(a,""),DOM.prop("#J_BasepropSelect","title",selectBaseprop)},freightBearBuyer:function(){DOM.prop("#J_ExpressTemplate","checked",!0),DOM.css("#J_ExpressTemplate_Content","display",""),DOM.prop("#J_DeliveryCosts","checked",!0),DOM.css("#J_DeliveryCosts_Content","display",""),selectBaseprop+="ExpressTemplate,DeliveryCosts",DOM.prop("#J_BasepropSelect","title",selectBaseprop)},previewBaseprop:function(){new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading",autoClose:!0,timeOut:3e3})},basepropDetail:function(id){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var selectBaseprop=DOM.prop("#J_BasepropSelect","title"),shen=DOM.val("#a1"),shi=DOM.val("#a2");if(selectBaseprop==""){new H.widget.msgBox({content:"\u8bf7\u9009\u62e9\u9700\u8981\u67e5\u770b\u7684\u57fa\u672c\u5c5e\u6027",type:"error"});return}var json=[],o='{"id":"'+id+rebaseprop.getO()+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="items="+itemsJson+"&form_key="+FORM_KEY,submitHandle=function(a){DOM.html("#J_PopDetial_"+id,a.desc)},errorHandle=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};DOM.prop("#J_BasepropDetial_"+id,"visible")||DOM.css("#J_BasepropDetial_"+id,"visibility","visible"),(new H.widget.asyncRequest).setURI(getProtoBasepropDetailUrl).setMethod("POST").setForm("#J_Rebaseprop_Form").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},closeDetialPop:function(a){DOM.css("#J_BasepropDetial_"+a,"visibility","hidden")},viewBaseprop:function(id){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var selectBaseprop=DOM.prop("#J_BasepropSelect","title");if(selectBaseprop==""){new H.widget.msgBox({content:"\u8bf7\u9009\u62e9\u9700\u8981\u67e5\u770b\u7684\u57fa\u672c\u5c5e\u6027",type:"error"});return}var json=[],o='{"id":"'+id+rebaseprop.getO()+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="items="+itemsJson+"&form_key="+FORM_KEY,submitHandle=function(a){DOM.html("#J_PopView_"+id,a.desc)},errorHandle=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};DOM.prop("#J_ViewBaseprop_"+id,"visible")||DOM.css("#J_ViewBaseprop_"+id,"visibility","visible"),(new H.widget.asyncRequest).setURI(getNewBasepropDetailUrl).setMethod("POST").setForm("#J_Rebaseprop_Form").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},closeViewPop:function(a){DOM.css("#J_ViewBaseprop_"+a,"visibility","hidden")},revertBaseprop:function(){if(!rebaseprop.checkBoxs)var a=DOM.query("#J_PromotionItemList .J_CheckBox");else var a=rebaseprop.checkBoxs;var b=a.length,c=0;for(i=0;i<b;i++)if(a[i].checked){id=a[i].value;var d=DOM.html(DOM.get("#J_ProtoCats_"+id));DOM.html(DOM.get("#J_Cats_"+id),d),c++}if(c==0){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:1e3});return}},updateBaseprop:function(id){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;var selectBaseprop=DOM.prop("#J_BasepropSelect","title"),itemTitle=H.util.strProcess(DOM.val(DOM.get("#J_ItemTitle_"+id))),pic_url=DOM.val(DOM.get("#J_ItemPic_"+id));if(selectBaseprop==""){new H.widget.msgBox({content:"\u8bf7\u9009\u62e9\u9700\u8981\u67e5\u770b\u7684\u57fa\u672c\u5c5e\u6027",type:"error"});return}var json=[],o='{"id":"'+id+'","title":"'+itemTitle+rebaseprop.getO()+'", "pic_url":"'+pic_url+'"}';o=eval("("+o+")"),json.push(o);var itemsJson=KISSY.JSON.stringify(json),data="items="+itemsJson+"&form_key="+FORM_KEY,submitHandle=function(a){new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"});return};(new H.widget.asyncRequest).setURI(updateBasepropUrl).setMethod("POST").setForm("#J_Rebaseprop_Form").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},addSelectItemsUpdateBaseprop:function(){if(!showPermissions("editor_tool","\u5de5\u5177\u7bb1"))return;if(isVersionPer("tool"))return;if(!rebaseprop.checkBoxs)var checkBoxs=DOM.query("#J_PromotionItemList .J_CheckBox");else var checkBoxs=rebaseprop.checkBoxs;rebaseprop.msg=new H.widget.msgBox({type:"error",content:"\u7cfb\u7edf\u6b63\u5728\u5904\u7406\u4e2d",dialogType:"loading"});var selectBaseprop=DOM.prop("#J_BasepropSelect","title");if(selectBaseprop==""){rebaseprop.msg.hide(),new H.widget.msgBox({title:"",content:"\u8bf7\u9009\u62e9\u9700\u8981\u67e5\u770b\u7684\u57fa\u672c\u5c5e\u6027",type:"error"});return}var len=checkBoxs.length,m=0,json=[];for(i=0;i<len;i++)if(checkBoxs[i].checked&&!checkBoxs[i].disabled){id=checkBoxs[i].value;var itemTitle=H.util.strProcess(DOM.val(DOM.get("#J_ItemTitle_"+id))),pic_url=DOM.val(DOM.get("#J_ItemPic_"+id)),o='{"id":"'+id+'","title":"'+itemTitle+rebaseprop.getO()+'", "pic_url":"'+pic_url+'"}';o=eval("("+o+")"),json.push(o),m++}if(m==0){rebaseprop.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u672a\u9009\u62e9\u4efb\u4f55\u5b9d\u8d1d\uff01",type:"error",autoClose:!0,timeOut:1e3});return}var itemsJson=KISSY.JSON.stringify(json),data="items="+itemsJson+"&form_key="+FORM_KEY,submitHandle=function(a){rebaseprop.msg.hide(),new H.widget.msgBox({type:"sucess",content:"\u6210\u529f\u4fee\u6539",dialogType:"msg",autoClose:!0,timeOut:3e3})},errorHandle=function(a){rebaseprop.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};(new H.widget.asyncRequest).setURI(updateBasepropUrl).setMethod("POST").setForm("#J_Rebaseprop_Form").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).send()},getO:function(){var a=DOM.prop("#J_BasepropSelect","title"),b='", "selectBaseprop":"'+a,c=DOM.val("#a1"),d=DOM.val("#a2");return c==0?b+='","selectProvince":"'+encodeURIComponent("\u8bf7\u9009\u62e9")+'","selectCity":"'+encodeURIComponent("\u8bf7\u9009\u62e9"):d==0?b+='","selectProvince":"'+encodeURIComponent(window.link.data[""+c+""][0])+'","selectCity":"'+encodeURIComponent("\u8bf7\u9009\u62e9"):b+='","selectProvince":"'+encodeURIComponent(window.link.data[""+c+""][0])+'","selectCity":"'+encodeURIComponent(window.link.data[""+d+""][0]),b}}},{requires:["utils/showPages/index"]}); 