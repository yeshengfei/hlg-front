KISSY.add("page/mods/check",function(a){return checkUtil={checkSpecTitle:function(a){var b=[],c=!1,d=null,e=/(淘宝)|(限时折扣)|(限时打折)|(良品)|(淘金币)|(天天特价)|(满就送)/i;if(e.test(a)){var f=e.exec(a);f!=null&&(c=!0,d="\u542b\u6709\u8fdd\u7981\u5b57"+f[0]+"\uff01")}return b.push(c),b.push(d),b},checkPromoName:function(a){var b=[],c=!1,d=null,e=/^[\u4E00-\u9FA5\uf900-\ufa2d\A-Za-z0-9]{2,5}$/;if(!e.test(a))if(a.length<2||a.length>5)c=!0,d="\u957f\u5ea62~5\u4e2a\u5b57\u7b26\uff01";else{var f=/[^\u4E00-\u9FA5\uf900-\ufa2d\A-Za-z0-9]+/,g=a.match(f);g!=null&&(c=!0,d="\u542b\u6709\u975e\u6cd5\u5b57\u7b26"+g[0]+"\uff01")}return b.push(c),b.push(d),b},checkPromoDesc:function(a){var b=[],c=!1,d=null,e=/^[\u4E00-\u9FA5\uf900-\ufa2d\w\s\，！。《》（）、—]{0,30}$/;if(!e.test(a))if(a.length>30)c=!0,d="\u957f\u5ea630\u4e2a\u5b57\u4ee5\u5185\uff01";else{var f=/[^\u4E00-\u9FA5\uf900-\ufa2d\w\s\，！。《》（）、—]+/,g=a.match(f);g!=null&&(c=!0,d="\u542b\u6709\u975e\u6cd5\u5b57\u7b26"+g[0]+"\uff01")}return b.push(c),b.push(d),b},checkUrl:function(a){var b=[],c=!1,d=null,e=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;return e.test(a)||(c=!0,d="\u975e\u6cd5URl\u5730\u5740\uff01"),b.push(c),b.push(d),b},checkDiscount:function(a){var b=[],c=!1,d=null;if(isNaN(Number(a))||a<=0||a>=10)c=!0,d="\u6298\u6263\u8303\u56f4\u5728 0.00~9.99\u4e4b\u95f4\u54e6\uff01";else{var e=/(^[0-9]([.][0-9]{1,2})?$)|(^1[0-9]([.][0-9]{1,2})?$)|(^2[0-3]([.][0-9]{1,2})?$)|(^10([.]0{1,2})?$)/;e.test(a)||(c=!0,d="\u6298\u6263\u8303\u56f4\u5728 0.00~9.99\u4e4b\u95f4\u54e6\uff01")}return b.push(c),b.push(d),b}}}),KISSY.add("page/addscp-init",function(a,b){var c=a.DOM,d=a.Event;return promotionControl={isEidt:promotionForm.id.value!="0"?!0:!1,isChange:!1,msg:null,NameError:!1,DescError:!1,rule_num:0,ids:[0],ruleMsg:!1,free_post_areasId:[],free_post_areasName:[],free_post_num:[],free_post_name:[],ladders:[0],ladder_num:0,groupRule:[],groupRule_num:0,carouselAll:null,carouselPart:null,init:function(){promotionControl.handleInputs(),a.one("#J_startDate")&&myCalendar("J_startDate",new Date(2038,11,29,0,0,0)),a.one("#J_endDate")&&myCalendar("J_endDate",new Date(2038,11,29,0,0,0));if(promotionControl.isEidt){var b=c.val("#J_TypeId"),e=c.val(c.get("#J_ids"));promotionControl.rule_num=e-1,promotionControl.ids=[];for(var f=0;f<e;f++)promotionControl.ids.push(f),promotionControl.mini(f)}d.delegate(document,"click","#J_PreviewDesc",function(a){promotionControl.save("preview")}),a.one("#J_IsRestart")&&(promotionControl.isChange=!0);var g=null;d.on("#J_BtnPublish","click dblclick",function(a){if(!promotionControl.isChange&&promotionControl.isEidt){window.location.href=nextTargerUrl;return}a.type=="click"&&(clearTimeout(g),g=setTimeout(function(){var a=IsExpired();if(a>-5e3){var b=function(a){promotionControl.save()},c=function(a){KISSY.Event.fire(".J_TopExpired","click")},d="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(b).setErrorHandle(c).setData(d).send()}else promotionControl.save()},300));if(a.type=="dblclick"){clearTimeout(g);var b=IsExpired();if(b>-5e3){var c=function(a){promotionControl.save()},d=function(a){KISSY.Event.fire(".J_TopExpired","click")},e="";(new H.widget.asyncRequest).setURI(isExpiredUrl).setMethod("GET").setHandle(c).setErrorHandle(d).setData(e).send()}else promotionControl.save()}}),d.on("#J_focus","focus blur",function(a){a.type=="focus"&&c.show("#J_msg")})},loadRules:function(a){promotionControl.isChange=!0;if(a.split("_")[1]==1){var b=function(a){c.show("#J_LoadRule"),c.html("#J_LoadRule",a.payload)},d=function(a){var b=KISSY.one("#J_ParamsErrorBox");c.html("#J_ParamsErrorMsg",a.payload.desc),b.css("display")==="none"&&b.slideDown()},e="rule_id="+a.split("_")[0];(new H.widget.asyncRequest).setURI(loadRuleUrl).setMethod("GET").setHandle(b).setErrorHandle(d).setData(e).setDataType("json").send()}else c.hide("#J_LoadRule")},addGroup:function(a){var b=promotionForm.type_id.value;c.attr("#J_SelectTagId","disabled","disabled"),c.addClass("#J_GroupManage","current"),c.show("#J_RemoveGroup"),c.hide("#J_AddGroup"),c.hide("#J_LoadRule"),c.show(c.query(".J_GroupParams")),c.val("#J_Is_Add_Group","1"),d.remove(".J_ConditionType"),d.remove(c.query(".J_Rule_Del")),d.on(".J_ConditionType","click",function(a){var b=a.target.value,d=KISSY.one("#J_Handel");b==2?(c.hide("#J_ParamsErrorBox"),d.hide()):d.show()}),d.on(c.query(".J_Rule_Del"),"click",function(a){var b=c.attr(a.currentTarget,"data"),d=c.parent(c.parent(a.currentTarget));new H.widget.msgBox({title:"\u5220\u9664\u7b5b\u9009\u6761\u4ef6",content:"\u5220\u9664\u7b5b\u9009\u6761\u4ef6\u4f1a\u4f7f\u4e0e\u4e4b\u5173\u8054\u7684\u5206\u7ec4\u4e0d\u518d\u66f4\u65b0\u3002 <br/>\u786e\u5b9a\u7ee7\u7eed\u5417\uff1f",type:"confirm",buttons:[{value:"\u786e\u5b9a\u5220\u9664"},{value:"\u53d6\u6d88"}],success:function(a){if(a=="\u786e\u5b9a\u5220\u9664"){var e=function(a){c.remove(d);var b=parseInt(c.val("#J_RuleTotal"));c.val("#J_RuleTotal",b-1)},f=function(a){var b=KISSY.one("#J_ParamsErrorBox");c.html("#J_ParamsErrorMsg",a.payload.desc),b.css("display")==="none"&&b.slideDown()},g="rule_id="+b;(new H.widget.asyncRequest).setURI(deleteRuleUrl).setMethod("GET").setHandle(e).setErrorHandle(f).setData(g).setDataType("json").send()}}})}),promotionControl.addGroupRule()},removeGroup:function(){var a=promotionForm.type_id.value,b=c.val("#J_SelectTagId");c.removeClass("#J_GroupManage","current"),c.val("#J_Is_Add_Group","0"),c.hide("#J_RemoveGroup"),c.show("#J_AddGroup"),c.hide("#J_ParamsErrorBox"),c.show("#J_LoadRule"),c.hide(c.query(".J_GroupParams")),c.attr("#J_SelectTagId","disabled",!1)},addGroupRule:function(){var a=promotionControl.groupRule.length,b=c.val("#J_RuleTotal"),d=parseInt(a)+parseInt(b);if(d>0)return;promotionControl.groupRule_num++;for(var e=0;e<a;e++)promotionControl.groupMini(promotionControl.groupRule[e]);promotionControl.groupRule.push(promotionControl.groupRule_num);var f=KISSY.Template(c.html(c.get("#J_Templet_Group"))),g={num:promotionControl.groupRule_num},h=f.render(g);c.append(c.create(h),c.get("#J_AddGroupRule")),jtjCalendar("J_StartDate"+promotionControl.groupRule_num,promotionControl.groupRule_num,"group"),jtjCalendar("J_EndDate"+promotionControl.groupRule_num,promotionControl.groupRule_num,"group"),promotionControl.handleInputs()},groupMini:function(a){var b=KISSY.one("#J_Max_Group_"+a),d=KISSY.one("#J_Mini_Group_"+a);c.hide(c.get(".suoxiao","#J_Group_"+a)),c.show(c.get(".fangda","#J_Group_"+a));var e=document.getElementsByName("params[group_name]")[0].value,f=c.val("#J_Grade_"+a)||0,g=c.val("#J_MinCount_"+a)||0,h=c.val("#J_MaxCount_"+a)||0,i=c.val("#J_MinAmount_"+a)||0,j=c.val("#J_MaxAmount_"+a)||0,k=c.val("#J_StartDate"+a)||0,l=c.val("#J_EndDate"+a)||0,m=c.val("#J_MinAvgPrice_"+a)||0,n=c.val("#J_MaxAvgPrice_"+a)||0,o=c.val("#J_MinCloseNum_"+a)||0,p=c.val("#J_MinCloseNum_"+a)||0,q="";switch(f){case 0:q="\u4e0d\u9650\u7ea7\u522b";break;case 1:q="\u666e\u901a\u4f1a\u5458";break;case 2:q="\u9ad8\u7ea7\u4f1a\u5458";break;case 3:q="VIP\u4f1a\u5458";break;case 4:q="\u81f3\u5c0aVIP\u4f1a\u5458"}flag=e+f+g+h+i+j+k+l+m+n+o+p;if(flag==0)r='<span style="color:#F00">\u672a\u8bbe\u7f6e\u6761\u4ef6&nbsp;&nbsp;&nbsp;<a href="#2" onclick="promotionControl.groupMaxi('+a+');" >[\u91cd\u65b0\u7f16\u8f91]</a></span>';else var r="<p>\u540d\u79f0\uff1a"+e+"\uff0c\u4f1a\u5458\u7ea7\u522b:"+q+"</p>"+"<p>\u4ea4\u6613\u6b21\u6570\uff1a"+g+" \u5230 "+h+"</p>"+"<p>\u4ea4\u6613\u91d1\u989d\uff1a"+i+" \u5230 "+j+"</p>"+"<p>\u4e0a\u6b21\u4ea4\u6613\u65f6\u95f4:"+k+" \u5230 "+l+"</p>"+"<p>\u5e73\u5747\u5ba2\u5355\u4ef7\uff1a"+m+" \u5230 "+n+"</p>"+"<p>\u4ea4\u6613\u5173\u95ed\u6b21\u6570\uff1a"+o+" \u5230 "+p+"</p>";d.html(r),b.css("display")!="none"&&(d.slideDown(.7),b.slideUp(.3))},groupMaxi:function(a){var b=KISSY.one("#J_Max_Group_"+a),d=KISSY.one("#J_Mini_Group_"+a);c.show(c.get(".suoxiao","#J_Group_"+a)),c.hide(c.get(".fangda","#J_Group_"+a)),b.css("display")==="none"&&(d.slideUp(.1),b.slideDown(.7))},groupDele:function(a){c.remove(c.get("#J_Group_"+a));for(var b=0;b<promotionControl.groupRule.length;b++)promotionControl.groupRule[b]==a&&promotionControl.groupRule.splice(b,1)},checkGroupAction:function(a){for(var b=0;b<promotionControl.groupRule.length;b++)a==promotionControl.groupRule[b]?promotionControl.groupMaxi(a):promotionControl.groupMini(promotionControl.groupRule[b]);var c=KISSY.Node.all;if(KISSY.one("#J_Group_"+a)){var d=KISSY.one("#J_Group_"+a).offset();c(window).stop(),c(window).animate({scrollTop:d.top},1,"easeOut")}},checkGroupRule:function(a,b){var d=!1,e=c.val("#J_MinCount_"+a),f=c.val("#J_MaxCount_"+a);if(e||f)if(isNaN(Number(e))==1||e<0||isNaN(Number(f))==1||e<0)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",'\u4ea4\u6613\u6b21\u6570\u5927\u4e8e0<a href="javascript:promotionControl.checkGroupAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0;var g=c.val("#J_MinAmount_"+a),h=c.val("#J_MaxAmount_"+a);if(g||h){result=H.util.checkPrice(g),result1=H.util.checkPrice(g),d=result[0],error1=result1[0],msg=result[1];if(d||error1)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",result[1]+'<a href="javascript:promotionControl.checkGroupAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0}var i=c.val("#J_MinAvgPrice_"+a),j=c.val("#J_MaxAvgPrice_"+a);if(i||j){result=H.util.checkPrice(i),result1=H.util.checkPrice(j),d=result[0],error1=result1[0],msg=result[1];if(d||error1)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",result[1]+'<a href="javascript:promotionControl.checkGroupAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0}if(k||l){var k=c.val("#J_MinCloseNum_"+a),l=c.val("#J_MinCloseNum_"+a);if(isNaN(Number(k))==1||k<0||isNaN(Number(l))==1||l<0)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",'\u5b9d\u8d1d\u4ef6\u6570\u8981\u5927\u4e8e0<a href="javascript:promotionControl.checkGroupAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0}},showdate:function(a,b){var c=new Date(b-0+a*864e5);return c=c.getFullYear()+"/"+(c.getMonth()+1)+"/"+c.getDate(),new Date(c)},addRule:function(){promotionControl.isChange=!0;if(promotionControl.ids.length>10){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:"\u6ee1\u5c31\u9001\u5c42\u7ea7\u4e0d\u80fd\u8d85\u8fc710\u5c42\uff01",type:"error"});return}promotionControl.rule_num++;for(var a=0;a<promotionControl.ids.length;a++)promotionControl.mini(promotionControl.ids[a]);var b=KISSY.Template(c.html(c.get("#J_Rule"))),d=c.val(c.get("#J_con_type0"));d==1?type="\u5143":d==0&&(type="\u4ef6");var e={type:type,num:promotionControl.rule_num,areas:[{areaId:"110000",name:"\u5317\u4eac"},{areaId:"120000",name:"\u5929\u6d25"},{areaId:"130000",name:"\u6cb3\u5317"},{areaId:"140000",name:"\u5c71\u897f"},{areaId:"210000",name:"\u8fbd\u5b81"},{areaId:"220000",name:"\u5409\u6797"},{areaId:"310000",name:"\u4e0a\u6d77"},{areaId:"320000",name:"\u6c5f\u82cf"},{areaId:"330000",name:"\u6d59\u6c5f"},{areaId:"340000",name:"\u5b89\u5fbd"},{areaId:"350000",name:"\u798f\u5efa"},{areaId:"360000",name:"\u6c5f\u897f"},{areaId:"370000",name:"\u5c71\u4e1c"},{areaId:"410000",name:"\u6cb3\u5357"},{areaId:"420000",name:"\u6e56\u5317"},{areaId:"430000",name:"\u6e56\u5357"},{areaId:"440000",name:"\u5e7f\u4e1c"},{areaId:"450000",name:"\u5e7f\u897f"},{areaId:"460000",name:"\u6d77\u5357"},{areaId:"500000",name:"\u91cd\u5e86"},{areaId:"510000",name:"\u56db\u5ddd"},{areaId:"520000",name:"\u8d35\u5dde"},{areaId:"530000",name:"\u4e91\u5357"},{areaId:"540000",name:"\u897f\u85cf"},{areaId:"610000",name:"\u9655\u897f"},{areaId:"620000",name:"\u7518\u8083"},{areaId:"630000",name:"\u9752\u6d77"},{areaId:"640000",name:"\u5b81\u590f"},{areaId:"650000",name:"\u65b0\u7586"},{areaId:"710000",name:"\u53f0\u6e7e"},{areaId:"810000",name:"\u9999\u6e2f"},{areaId:"820000",name:"\u6fb3\u95e8"},{areaId:"990000",name:"\u6d77\u5916"},{areaId:"230000",name:"\u9ed1\u9f99\u6c5f"},{areaId:"150000",name:"\u5185\u8499\u53e4"}]};promotionControl.ids.push(promotionControl.rule_num);var f=b.render(e);c.insertBefore(c.create(f),c.get("#J_AddRule")),promotionControl.handleInputs()},dele:function(a){promotionControl.isChange=!0,c.remove(c.get("#J_youhui_"+a));for(var b=0;b<promotionControl.ids.length;b++)promotionControl.ids[b]==a&&promotionControl.ids.splice(b,1)},maxi:function(a){var b=KISSY.one("#J_Content_Detail_"+a),d=KISSY.one("#J_Mini_Detail_"+a);c.show(c.get(".suoxiao","#J_youhui_"+a)),c.hide(c.get(".fangda","#J_youhui_"+a)),b.css("display")==="none"&&(d.slideUp(.1),b.slideDown(.7))},mini:function(a){var b=KISSY.one("#J_Content_Detail_"+a),d=KISSY.one("#J_Mini_Detail_"+a);c.hide(c.get(".suoxiao","#J_youhui_"+a)),c.show(c.get(".fangda","#J_youhui_"+a));var e=c.val("#J_con_type0"),f=e==1?"\u5143":"\u4ef6",g=c.val("#J_con_value_"+a)||0,h=c.val("#J_decrease_money_"+a)||0,i=c.val("#J_cp_num_"+a),j=c.val("#J_cpType_"+a),k=c.get("#J_enable_multiple_"+a).checked,l=c.get("#J_decrease_"+a).checked,m=c.get("#J_post_postage_"+a).checked,n=c.get("#J_send_cp_"+a).checked;promotionControl.checkPost(a);var o="",p=promotionControl.free_post_name.length,q=promotionControl.free_post_areasName.length;p<q?p==0?o="\uff0c\u514d\u90ae\u5730\u533a\uff1a\u65e0":o="\uff0c\u514d\u90ae\u5730\u533a\uff1a"+promotionControl.free_post_name.join(","):q==0?o="\uff0c\u4e0d\u514d\u90ae\u5730\u533a\uff1a\u65e0":o="\uff0c\u4e0d\u514d\u90ae\u5730\u533a\uff1a"+promotionControl.free_post_areasName.join(","),e==1&&(g=H.util.FormatNumber(g,2));var r={con_value:g,type:f,IsDecrease:l,decrease_money:H.util.FormatNumber(h,2),cp_num:i,enable_multiple:k,IsFreePost:m,IsSend_cp:n,free_post:o,cp_type:j};if(g==0&&l==0&&m==0&&n==0||l==0&&m==0&&n==0)t='<span style="color:#F00">\u672a\u8bbe\u7f6e\u4f18\u60e0\u5185\u5bb9&nbsp;&nbsp;&nbsp;<a href="#2" onclick="promotionControl.maxi('+a+');" >[\u91cd\u65b0\u7f16\u8f91]</a></span>';else var s=KISSY.Template(c.html(c.get("#J_Templet_Mjs"))),t=s.render(r);d.html(t),b.css("display")!="none"&&(d.slideDown(.7),b.slideUp(.3))},checkForm:function(){var a=c.filter(c.query("input"),function(a){if(a.type=="checkbox"&&c.hasClass(a,"J_checkForm"))return!0});KISSY.each(a,function(a){a.checked==0?c.val(c.next(a),0):c.val(c.next(a),1)})},backCheckForm:function(){var a=c.filter(c.query("input"),function(a){if(a.type=="checkbox"&&c.hasClass(a,"J_checkForm"))return!0});KISSY.each(a,function(a){var b=c.val(a);b==1?a.checked=!0:(a.checked=!1,c.val(a,1))})},checkAction:function(a){for(var b=0;b<promotionControl.ids.length;b++)a==promotionControl.ids[b]?promotionControl.maxi(a):promotionControl.mini(promotionControl.ids[b]);var c=KISSY.Node.all;if(KISSY.one("#J_youhui_"+a)){var d=KISSY.one("#J_youhui_"+a).offset();c(window).stop(),c(window).animate({scrollTop:d.top},1,"easeOut")}},checkRule:function(a,b){var d=!1,e=c.val("#J_con_value_"+a),f=H.util.isNull(e),d=f[0];if(d)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",f[1]+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.val("#J_con_value_"+a,""),c.addClass(c.parent(c.get("#J_con_value_"+a)),"text-error"),d=!0;f=H.util.checkPrice(e),d=f[0],msg=f[1];if(d)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",f[1]+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.val("#J_con_value_"+a,""),c.addClass(c.parent(c.get("#J_con_value_"+a)),"text-error"),d=!0;if(c.get("#J_send_cp_"+a).checked===!1)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg","\u5c42\u7ea7"+(b+1)+"\u5fc5\u987b\u9009\u4e2d\u5f69\u7968\uff01"+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0;if(c.get("#J_decrease_"+a).checked===!1&&c.get("#J_post_postage_"+a).checked===!1)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg","\u5c42\u7ea7"+(b+1)+"\u7684\u4f18\u60e0\u5185\u5bb9\u5fc5\u987b\u9009\u4e2d\u5f69\u7968+\u81f3\u5c11\u5176\u4ed6\u4e00\u9879\uff01"+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0;var g=c.val("#J_con_type0");if(c.get("#J_decrease_"+a).checked===!0){var h=c.val("#J_decrease_money_"+a);f=H.util.checkPrice(h),d=f[0],msg=f[1];if(d)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",f[1]+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.val("#J_decrease_money_"+a,""),c.addClass(c.parent(c.get("#J_decrease_money_"+a)),"text-error"),d=!0;if(g==1){var i=e-h;if(i<=0)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg","\u5c42\u7ea7"+(b+1)+"\u6ee1"+e+"\u5143\u51cf"+h+"\u5143\u540e\u603b\u4ef7\u7b49\u4e8e"+i+'\u5c0f\u4e8e0<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.val("#J_decrease_money_"+a,""),c.addClass(c.parent(c.get("#J_decrease_money_"+a)),"text-error"),d=!0}}if(c.get("#J_send_cp_"+a).checked===!0){var j=c.val("#J_cp_num_"+a),f=H.util.isNull(j),d=f[0];if(d)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",f[1]+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.addClass(c.get("#J_cp_num_"+a),"text-error"),d=!0;var k=KISSY.trim(c.val("#J_CareBox_"+a)),l=k.replace(/[^\x00-\xff]/g,"**").length;if(l>40)return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",'\u5f69\u7968\u8d60\u8a00\u4e0d\u80fd\u8d85\u8fc740\u4e2a\u5b57\u7b26<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0}if(c.get("#J_post_postage_"+a).checked===!0){promotionControl.checkPost(a);if(promotionControl.free_post_num.length==0){var k="\u5c42\u7ea7"+(b+1)+"\u514d\u90ae\u5730\u533a\u672a\u8bbe\u7f6e\uff01";return promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",k+'<a href="javascript:promotionControl.checkAction('+a+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),d=!0}c.val("#J_free_post_areasId"+a,promotionControl.free_post_areasId),c.val("#J_free_post_areasName"+a,promotionControl.free_post_areasName)}return d},checkPost:function(a){promotionControl.free_post_areasId=[],promotionControl.free_post_areasName=[],promotionControl.free_post_num=[],promotionControl.free_post_name=[];var b=c.query("#J_youhui_"+a+" .J_ex_id"),d=c.query("#J_youhui_"+a+" .J_ex_name");KISSY.each(b,function(a){a.disabled?promotionControl.free_post_num.push(c.val(a)):promotionControl.free_post_areasId.push(c.val(a))}),KISSY.each(d,function(a){a.disabled?promotionControl.free_post_name.push(c.val(a)):promotionControl.free_post_areasName.push(c.val(a))})},checkTitleLen:function(a,b){var d=a.replace(/[^\x00-\xff]/g,"*").length;c.html(c.get("#J_Zs_Num"+b),d)},checkCpAgreement:function(a){if(c.val("#J_IsSign")==1)return;c.prop(a,"checked",!1);var b=function(b){b.payload.sign?(c.val("#J_IsSign","1"),c.prop(a,"checked",!0)):(new H.widget.msgBox({title:"\u7b7e\u8ba2\u534f\u8bae",content:'\u8bf7\u5148\u5f00\u901a<a href="'+b.payload.sign_url+'" target="_blank">\u652f\u4ed8\u5b9d\u4ee3\u8d2d\u534f\u8bae</a>',type:"info"}),c.val("#J_IsSign","0"))},d=function(a){var b=KISSY.one("#J_ParamsErrorBox");c.html("#J_ParamsErrorMsg",a.desc),b.css("display")==="none"&&b.slideDown()},e="";(new H.widget.asyncRequest).setURI(checkSignUrl).setMethod("GET").setHandle(b).setErrorHandle(d).setData(e).setDataType("json").send()},checkTbItemNum:function(a){if(c.val("#J_RangeTypeValue")!="ALL"){a.checked?c.show("#J_PromodescBox"):c.hide("#J_PromodescBox");return}if(c.val("#J_TbItemsNum")==1){var b=c.val("#J_TbItemsTotalNum");new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u5b9d\u8d1d\u6570 0~1000\u624d\u80fd\u4f7f\u7528\u5168\u5e97\u8be6\u60c5\u6a21\u677f\uff0c\u60a8\u5e97\u94fa\u603b\u5171"+b+"\u4e2a\u5b9d\u8d1d\u3002",type:"info"}),c.prop(a,"checked",!1),c.hide("#J_PromodescBox");return}if(c.val("#J_TbItemsNum")==9999){a.checked?c.show("#J_PromodescBox"):c.hide("#J_PromodescBox");return}c.prop(a,"checked",!1);var d=function(b){b.payload.num>3e3||b.payload.num==0?(new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u5b9d\u8d1d\u6570 0~1000\u624d\u80fd\u4f7f\u7528\u5168\u5e97\u8be6\u60c5\u6a21\u677f\uff0c\u60a8\u5e97\u94fa\u603b\u5171"+b.payload.num+"\u4e2a\u5b9d\u8d1d\u3002",type:"info"}),c.val("#J_TbItemsNum",1),c.prop(a,"checked",!1),c.hide("#J_PromodescBox")):(c.prop(a,"checked",!0),c.val("#J_TbItemsNum",9999)),c.val("#J_TbItemsTotalNum",b.payload.num)},e=function(a){var b=KISSY.one("#J_ParamsErrorBox");c.html("#J_ParamsErrorMsg",a.payload.desc),b.css("display")==="none"&&b.slideDown()},f="";(new H.widget.asyncRequest).setURI(getTbItemsNumUrl).setMethod("GET").setHandle(d).setErrorHandle(e).setData(f).setDataType("json").send()},save:function(b){b=="preview"?promotionControl.msg={hide:function(){}}:(promotionControl.msg=null,promotionControl.msg=new H.widget.msgBox({title:"",dialogType:"loading",content:"\u6b63\u5728\u4fdd\u5b58\u4e2d\uff0c\u8bf7\u7a0d\u5019"}));var d=promotionForm.promo_name.value,e=promotionForm.promo_desc.value;promotionControl.PromoNameAction(d);if(promotionControl.NameError==1){promotionControl.msg.hide();return}ParamsErrorBox=KISSY.one("#J_ParamsErrorBox"),ParamsErrorBox.hide();var f=promotionForm.type_id.value;if(a.one("#J_startDate")){var g=c.val("#J_startDate"),h=a.one("#J_endDate").val();if(h!=""&&g>=h){promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg","\u5f00\u59cb\u65f6\u95f4\u4e0d\u80fd\u5927\u4e8e\u7ed3\u675f\u65f6\u95f4\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.addClass("#J_startDate","text-error");return}}if(a.one("#J_endDate")){var h=a.one("#J_endDate").val(),i=new Date,j=new Date(i.getTime()+Number(DiffTime)),k=H.util.StringToDate(a.one("#J_startDate").val()),l=H.util.StringToDate(h),m=H.util.StringToDate(invaliDate);if(l.getTime()<=j.getTime()||l.getTime()<=k){promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg","\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u5c0f\u4e8e\u5f00\u59cb\u65f6\u95f4\uff0c\u8bf7\u91cd\u65b0\u9009\u62e9"),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.addClass("#J_endDate","text-error");return}}switch(f){case"207":case"208":case"217":for(var i=0;i<promotionControl.ids.length;i++){var n=promotionControl.checkRule(promotionControl.ids[i],i);if(n==1)return;if(i>0){var o=c.val("#J_con_value_"+promotionControl.ids[i-1]),p=c.val("#J_con_value_"+promotionControl.ids[i]);if(Number(o)-Number(p)>=0){promotionControl.msg.hide();var q="\u5c42\u7ea7"+(i+1)+"\u6ee1\u591a\u5c11\u8981\u5927\u4e8e\u5c42\u7ea7"+i+"\uff01";for(var r=0;r<promotionControl.ids.length;r++)promotionControl.mini(promotionControl.ids[r]);promotionControl.maxi(promotionControl.ids[i]),c.html("#J_ParamsErrorMsg",q+'<a href="javascript:promotionControl.checkAction('+promotionControl.ids[i]+')">\u70b9\u6b64\u4fee\u6539</a>'),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.addClass(c.parent(c.get("#J_con_value_"+promotionControl.ids[i])),"text-error");return}}}break;default:}if(isMbb||f==2){var s=c.val("#J_Is_Add_Group");if(s==1){var t=document.getElementsByName("params[group_name]"),u=H.util.isNull(t[0].value),v=u[0];if(v){promotionControl.msg.hide(),c.html("#J_ParamsErrorMsg",u[1]),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),t[0].value="",t[0].focus(),c.addClass(t[0],"text-error");return}var w=document.getElementsByName("params[group_type]");if(w[0].checked)for(var i=0;i<promotionControl.groupRule.length;i++){var n=promotionControl.checkGroupRule(promotionControl.groupRule[i],i);if(n==1)return}}}if(f=="207"||f=="208"||f=="217"){if(b!="preview")for(var r=0;r<promotionControl.ids.length;r++)c.attr("#J_youhui_"+promotionControl.ids[r]+" .J_ex_id","disabled",!0),c.attr("#J_youhui_"+promotionControl.ids[r]+" .J_ex_name","disabled",!0);promotionControl.checkForm()}c.get("#J_startDate").disabled=!1,c.get("#J_endDate").disabled=!1;if(promotionControl.isEidt)if(b=="preview"){var x=c.val("#J_ProtoId"),y=function(a){ParamsErrorBox.hide(),c.html(c.get("#J_PreviewBox_"+x),a.payload.body),c.height(c.parent("#J_PreviewBox_"+x,".J_Height"),c.height(c.get("#J_PreviewBox_"+x+" table"))),prodescTempleteId&&(c.prop("#J_IsPromodesc","checked")||c.hide("#J_PromodescBox"))},z=function(a){promotionControl.msg.hide();if(a.desc=="need-oauth"){KISSY.Event.fire(".J_TopExpired","click");return}c.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.scrollIntoView("#J_ParamsErrorMsg",window)},A="";(new H.widget.asyncRequest).setURI(privewPromodescUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(y).setErrorHandle(z).setData(A).send()}else{var y=function(a){promotionControl.msg.hide(),ParamsErrorBox.hide(),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox"),c.html("#J_ParamsSucessMsg",a.desc),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown(),c.scrollIntoView("#J_ParamsSucessMsg",window),window.location.href=sucessTargerUrl+"&pid="+a.pid},z=function(a){promotionControl.msg.hide();if(a.desc=="need-oauth"){KISSY.Event.fire(".J_TopExpired","click");return}c.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.scrollIntoView("#J_ParamsErrorMsg",window)},A="";(new H.widget.asyncRequest).setURI(editorSaveUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(y).setErrorHandle(z).setData(A).send()}else if(b=="preview"){var x=c.val("#J_ProtoId"),y=function(a){c.html(c.get("#J_PreviewBox_"+x),a.payload.body),c.height(c.parent("#J_PreviewBox_"+x,".J_Height"),c.height(c.get("#J_PreviewBox_"+x+" table")))},z=function(a){promotionControl.msg.hide();if(a.desc=="need-oauth"){KISSY.Event.fire(".J_TopExpired","click");return}c.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.scrollIntoView("#J_ParamsErrorMsg",window)},A="";(new H.widget.asyncRequest).setURI(privewPromodescUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(y).setErrorHandle(z).setData(A).send()}else{var y=function(a){promotionControl.msg.hide(),ParamsErrorBox.hide(),ParamsSucessBox=KISSY.one("#J_ParamsSucessBox"),c.html("#J_ParamsSucessMsg","\u6210\u529f\u521b\u5efa\u6d3b\u52a8\uff01"),ParamsSucessBox.css("display")==="none"&&ParamsSucessBox.slideDown(),c.scrollIntoView("#J_ParamsSucessMsg",window),window.location.href=a.desc},z=function(a){promotionControl.msg.hide();if(a.desc=="need-oauth"){KISSY.Event.fire(".J_TopExpired","click");return}c.html("#J_ParamsErrorMsg",a.desc),ParamsErrorBox.css("display")==="none"&&ParamsErrorBox.slideDown(),c.scrollIntoView("#J_ParamsErrorMsg",window)},A="";(new H.widget.asyncRequest).setURI(SaveUrl).setMethod("POST").setForm("#promotion_edit_form").setHandle(y).setErrorHandle(z).setData(A).send()}return!0},PromoNameAction:function(a){var d=H.util.isNull(a),e=d[0],f=d[1];if(e)return c.addClass(promotionForm.promo_name,"text-error"),c.html("#J_PromoNameError",f),c.hide("#J_PromoNameRequired"),c.hide("#J_PromoNameSucess"),c.show("#J_PromoNameError"),promotionControl.NameError=!0;d=b.checkSpecTitle(a),e=d[0],f=d[1];if(e)return c.addClass(promotionForm.promo_name,"text-error"),c.html("#J_PromoNameError",f),c.hide("#J_PromoNameRequired"),c.hide("#J_PromoNameSucess"),c.show("#J_PromoNameError"),promotionControl.NameError=!0;var g=c.val("#J_TypeId");if(g=="2"||g=="9"||g=="20"||g=="22"||g=="32"){d=b.checkPromoName(a),e=d[0],f=d[1];if(e)return c.addClass(promotionForm.promo_name,"text-error"),c.html("#J_PromoNameError",f),c.hide("#J_PromoNameRequired"),c.hide("#J_PromoNameSucess"),c.show("#J_PromoNameError"),promotionControl.NameError=!0}return c.removeClass(promotionForm.promo_name,"text-error"),c.hide("#J_PromoNameRequired"),c.show("#J_PromoNameSucess"),c.hide("#J_PromoNameError"),promotionControl.NameError=!1},PromoDescAction:function(a){var d=H.util.isNull(a),e=d[0],f=d[1];if(!e){d=b.checkPromoDesc(a),e=d[0],f=d[1];if(e)return c.addClass(promotionForm.promo_desc,"text-error"),c.html("#J_PromoDescError",f),c.hide("#J_PromoDescRequired"),c.hide("#J_PromoDescSucess"),c.show("#J_PromoDescError"),promotionControl.DescError=!0;d=b.checkSpecTitle(a),e=d[0],f=d[1];if(e)return c.addClass(promotionForm.promo_desc,"text-error"),c.html("#J_PromoDescError",f),c.hide("#J_PromoDescRequired"),c.hide("#J_PromoDescSucess"),c.show("#J_PromoDescError"),promotionControl.DescError=!0}return c.removeClass(promotionForm.promo_desc,"text-error"),c.hide("#J_PromoDescRequired"),c.show("#J_PromoDescSucess"),c.hide("#J_PromoDescError"),promotionControl.DescError=!1},turnCheck:function(a,b,d){var e=c.val("#J_check_method"+d),f=c.val("#J_TypeId");"1"==e?a.checked?(c.show("#J_in_span_"+b+"_"+d),c.attr("#J_ex_id_"+b+"_"+d,"disabled",!0),c.attr("#J_ex_name_"+b+"_"+d,"disabled",!0)):(c.hide("#J_in_span_"+b+"_"+d),c.removeAttr("#J_ex_id_"+b+"_"+d,"disabled"),c.removeAttr("#J_ex_name_"+b+"_"+d,"disabled")):a.checked?(c.show("#J_ex_span_"+b+"_"+d),c.removeAttr("#J_ex_id_"+b+"_"+d,"disabled"),c.removeAttr("#J_ex_name_"+b+"_"+d,"disabled")):(c.hide("#J_ex_span_"+b+"_"+d),c.attr("#J_ex_id_"+b+"_"+d,"disabled",!0),c.attr("#J_ex_name_"+b+"_"+d,"disabled",!0));return},turnCheckMethod:function(a,b){c.attr("#J_youhui_"+b+" .J_check_areas","checked",!1),c.hide("#J_youhui_"+b+" .J_in_span"),c.hide("#J_youhui_"+b+" .J_ex_span"),c.val("#J_check_method"+b,a),"1"==a?(c.removeAttr("#J_youhui_"+b+" .J_ex_id","disabled"),c.removeAttr("#J_youhui_"+b+" .J_ex_name","disabled"),c.html("#J_freepost_tip"+b,"\u514d\u90ae\u533a\u57df\uff1a"),c.show("#J_include_title"+b),c.hide("#J_exclude_title"+b)):(c.attr("#J_youhui_"+b+" .J_ex_id","disabled",!0),c.attr("#J_youhui_"+b+" .J_ex_name","disabled",!0),c.html("#J_freepost_tip"+b,"\u4e0d\u514d\u90ae\u533a\u57df\uff1a"),c.hide("#J_include_title"+b),c.show("#J_exclude_title"+b))},showTip:function(){c.val("#J_SelectTagId")!=1?(c.val("#J_SelectTagId")!=1&&(c.html("#J_IsAllMemberContent","\u975e\u5168\u7f51\u4f1a\u5458\uff0c\u641c\u7d22\u9875\u4f1a\u663e\u793a\u539f\u4ef7"),c.show("#J_IsAllMemberContent")),c.val("#J_Show_yj",1)):(c.hide("#J_IsAllMemberContent"),c.val("#J_Show_yj",0))},handleInputs:function(){var a=c.filter(c.query("input"),function(a){if(a.type=="text")return!0});d.on(a,"focus blur",function(a){a.type=="focus"?c.hasClass(a.target,"input-none")?(c.removeClass(c.parent(a.target),"input-text text text-error"),c.addClass(c.parent(a.target),"input-text-on")):(c.removeClass(a.target,"input-text text text-error"),c.addClass(a.target,"input-text-on")):a.type=="blur"&&(c.hasClass(a.target,"input-none")?(c.removeClass(c.parent(a.target),"input-text-on"),c.addClass(c.parent(a.target),"input-text")):(c.removeClass(a.target,"input-text-on"),c.addClass(a.target,"input-text")))})},showMjsTip:function(a){if(c.prop("#J_enable_multiple_"+a,"checked")){var b=Number(c.val("#J_con_value_"+a))*2,d=c.val("#J_con_type0")==1?"\u5143":"\u4ef6",e="\u6d88\u8d39\u6ee1"+b+d+"\u4f1a\u9001\u51fa\u53cc\u500d\uff0c\u4f9d\u6b64\u7c7b\u63a8 ";c.html("#J_OneWarn"+a,e),c.show("#J_OneWarn"+a)}else c.hide("#J_OneWarn"+a)}}},{requires:["./mods/check"]}); 