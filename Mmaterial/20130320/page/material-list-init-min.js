KISSY.add("page/material-list-init",function(a,b){var c=a.DOM,d=a.Event;return list={panel:null,meg:null,init:function(){list.panel=new b.Dialog({width:395,headerContent:"\u83b7\u53d6\u4ee3\u7801",bodyContent:"",mask:!1,align:{points:["cc","cc"]},closable:!0,draggable:!0,aria:!0}),d.on(c.query(".J_StartDesign"),"click",function(a){a.preventDefault();if(!showPermissions("editor_material","\u4fc3\u9500\u7d20\u6750"))return;var b=c.attr(a.currentTarget,"data-url");if(isVersionPer("material",!1)){new H.widget.msgBox({title:"\u6e29\u99a8\u63d0\u793a",content:"\u53ea\u63d0\u4f9b\u5236\u4f5c\u4f53\u9a8c\uff0c\u5c0a\u4eab\u7248\u624d\u80fd\u4eab\u53d7\u7d20\u6750\u6295\u653e\u529f\u80fd",type:"info",buttons:[{value:"\u7ee7\u7eed\u4f53\u9a8c"},{value:"\u5173\u95ed"}],success:function(a){a=="\u7ee7\u7eed\u4f53\u9a8c"&&(window.location.href=b)}});return}});var a=c.query(".J_List");d.on(a,"click",function(a){a.preventDefault();var b=c.attr(a.currentTarget,"lid");list.get(b)}),d.on(c.query(".J_releaseCode"),"click",function(a){var b=c.attr(a.currentTarget,"data-url");if(!showPermissions("editor_material","\u4fc3\u9500\u7d20\u6750"))return;if(isVersionPer("material"))return;window.location.href=b})},get:function(a){if(!showPermissions("editor_material","\u4fc3\u9500\u7d20\u6750"))return;if(isVersionPer("material"))return;var b=function(a){list.msg.hide();var b='<div><textarea style="width:380px;height:200px;margin:5px;" id="J_Templet_Content" onclick="this.select()">'+a.payload+'</textarea></br><span class="btm-68-gray fl"><a href="#2"  class="J_Copy"><span>\u70b9\u6b64\u590d\u5236</span></a></span><span style="height:31px; line-height:31px">\u9f20\u6807\u4e8e\u6846\u5185CTRL+C\uff1a\u590d\u5236\u3001CTRL+V\uff1a\u7c98\u8d34</span></div>';list.panel.set("bodyContent",b),list.panel.show(),H.util.clipboard(".J_Copy","#J_Templet_Content")},c=function(a){list.msg.hide(),new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})};list.msg=new H.widget.msgBox({dialogType:"loading",content:"\u6b63\u5728\u83b7\u53d6\u4ee3\u7801\uff01"});var d="id="+a;(new H.widget.asyncRequest).setURI(getListUrl).setMethod("GET").setHandle(b).setErrorHandle(c).setData(d).send()},design:function(a){var b="",c=document.getElementsByName("J_Mid_"+a);for(var d=0;d<c.length;d++)if(c[d].checked){b=c[d].value.split("-");break}window.location.href=designUrl+"&proto_id="+b[1]+"&items_per_line="+b[0]},turn:function(a,b){alert("a")},collect:function(a){var b=function(b){c.html("#J_Collect_"+a,"\u5df2\u6536\u85cf")},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},e="share_id="+a;(new H.widget.asyncRequest).setURI(collectUrl).setMethod("GET").setHandle(b).setErrorHandle(d).setData(e).send()},cancelCollect:function(a){var b=function(b){c.remove("#J_Bm_Wrap_"+a)},d=function(a){new H.widget.msgBox({title:"\u9519\u8bef\u63d0\u793a",content:a.desc,type:"error"})},e="favorite_id="+a;(new H.widget.asyncRequest).setURI(cancelCollectUrl).setMethod("GET").setHandle(b).setErrorHandle(d).setData(e).send()}}},{requires:["overlay"]}); 