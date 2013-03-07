/**
 * @fileOverview 
 * @author  
 */
KISSY.add(function (S,showPages) {
    // your code here

	var S= KISSY,DOM = S.DOM, Event = S.Event;
	return  promotionControl = {
		msg :null ,
		msg1 : null,
		isLoad : false,
		paginator:null,
		
		init : function(){
			
				/*编辑活动*/
				 Event.delegate(document,'click','.J_Editor_Promo', function(ev) {
					if(!showPermissions('editor_promotion',"编辑促销活动")){
			   			return ;
			   		 }
					var url = DOM.attr(ev.currentTarget,'data');
			 		var sucessHandle = function(o) {
			 			window.location.href=url;
			 		};
			 		var error = function(o){
							new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error",
								autoClose : true,
								timeOut : 3000
							});
			 		};
			 		var pid = DOM.attr(ev.currentTarget,'uid');
			 		var data = "pid="+pid+"&form_key="+FORM_KEY;
			  	    new H.widget.asyncRequest().setURI(editPromoUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(error).setData(data).send();
				});
			
				 /*更新卖家备注*/
			 	 Event.delegate(document,'click','.J_OnClickShopDesc', function(ev) {
			 		if(!showPermissions('editor_promotion',"编辑促销活动")){
			   			return ;
			   		 }
			  		DOM.hide(ev.currentTarget);
			 		var pid = DOM.attr(ev.currentTarget,'data');
			 		var SshopDesc = KISSY.trim(DOM.val('#J_SouceShopDesc_'+pid));
			
					if(!KISSY.one('#J_EditorShopDesc_'+pid)){
						var str ='<input type="text"  class="input-text w-70 fl" data ="'+pid+'" id="J_InputShopDesc_'+pid+'" value="">'+
			 	 				 '<input class="gray-btm-h-10 w-30" style="cursor:pointer" data="'+pid+'"  id="J_EditorShopDesc_'+pid+'" value ="保存" />';
						DOM.html('#J_ShowEditorDesc_'+pid,str);
					}
					DOM.show('#J_ShowEditorDesc_'+pid);
					Event.on('#J_InputShopDesc_'+pid,'blur',function(){
						KISSY.later(function(){
							DOM.hide('#J_ShowEditorDesc_'+pid);
			 				DOM.show('#J_Promo_'+pid+' .J_OnClickShopDesc');
			 			},200,false,null);
				 	});
					DOM.get('#J_InputShopDesc_'+pid).focus();
					DOM.val('#J_InputShopDesc_'+pid,SshopDesc);
					Event.on('#J_EditorShopDesc_'+pid,'click',function(ev){
			
						var pid = DOM.attr(ev.currentTarget,'data');
						var SshopDesc = KISSY.trim(DOM.val('#J_SouceShopDesc_'+pid));
						var shopDesc = KISSY.trim(DOM.val('#J_InputShopDesc_'+pid));
						if(SshopDesc == shopDesc){
							DOM.hide('#J_ShowEditorDesc_'+pid);
					 		DOM.show('#J_Promo_'+pid+' .J_OnClickShopDesc');
							return ;
						}
					 	var sucessHandle = function(o) {
					 			DOM.hide('#J_ShowEditorDesc_'+pid);
					 			if(!shopDesc){
					 				DOM.html('#J_Promo_'+pid+' .J_OnClickShopDesc','<span class="editItemNum"> </span>填备注...');
					 				DOM.addClass('#J_Promo_'+pid+' .J_OnClickShopDesc','color-gray-9');
						 		}else{
						 			DOM.html('#J_Promo_'+pid+' .J_OnClickShopDesc',shopDesc);
						 			DOM.removeClass('#J_Promo_'+pid+' .J_OnClickShopDesc','color-gray-9');		
						 		}
					 			DOM.show('#J_Promo_'+pid+' .J_OnClickShopDesc');
					 			DOM.val('#J_SouceShopDesc_'+pid,shopDesc);
					 		};
					 	var error = function(o){
								new H.widget.msgBox({
								    title:"错误提示",
								    content:o.desc,
								    type:"error",
									autoClose : true,
									timeOut : 3000
								});
					 		};
					 		var data = "pid="+pid+"&shop_desc="+encodeURI(shopDesc)+"&form_key="+FORM_KEY;
					  	    new H.widget.asyncRequest().setURI(saveShopDescUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(error).setData(data).send();
					})
			 	 })
			 	Event.on(DOM.query('.J_GetTemplet'), "click", function(){
					var getTempletHandle = function(o) {
						promotionControl.msg.hide();
						var cont = '<div><textarea style="width:380px;height:200px; margin:5px" id="J_Templet_Content" onclick="this.select()">'+o.payload+'</textarea></br><span class="btm-68-gray fl"><a href="#2"  class="J_Copy"><span>点此复制</span></a></span><span style="height:31px; line-height:31px">鼠标于框内CTRL+C：复制、CTRL+V：粘贴</span></div>';
						KISSY.use("node,overlay", function(S, Node, O ) {
							var TempletPanel = new O.Dialog({
							      width: 395,
							      headerContent: '获取海报代码',
							      bodyContent: cont,
							      mask: true,
							      align: {
							          points: ['cc', 'cc']
							      },
							      closable :true,
							      draggable: true,
							      aria:true
							  });
							TempletPanel.render();
							TempletPanel.show();
						})
						H.util.clipboard('.J_Copy','#J_Templet_Content');
					};
					var error = function(o){
						promotionControl.msg.hide();
						new H.widget.msgBox({
								    title:"错误提示",
								    content:o.desc,
								    type:"error"
								});
					};
					var pid = DOM.attr(this,'data');
					var data = "pid="+pid+"&form_key="+FORM_KEY;
					promotionControl.msg = new H.widget.msgBox({
								    title:"",
									dialogType : 'loading',
								    content:'获取代码中，请稍候'	
								});
			 	    new H.widget.asyncRequest().setURI(getTempletUrl).setMethod("GET").setHandle(getTempletHandle).setErrorHandle(error).setData(data).send();
				});
				
				Event.delegate(document,'click','.J_BackTo',function(){
					DOM.show('#promoList');
					DOM.show('#J_PromoDetail');
	            	DOM.hide('#itemList');
	            	DOM.hide('#J_BackToPromoList');
				})
				var oTriggers = DOM.query('.J_Delete');
		    	Event.on(oTriggers, "click", function(){
		    		 if(!showPermissions('editor_promotion',"删除促销活动")){
		    			return ;
		    		 }
		    		 var pid = DOM.attr(this,'data');
		    		 var type = DOM.val('#J_TypeId_'+pid);
					 var diff  = IsExpired();
	       			 if(diff > -5000 && type == 10 ){
	      					var sucessHandle = function(o) {
	      						promotionControl.deleteHandle(pid);
	      			 		};
	      			 		var errorHandle = function(o){
	      			 			KISSY.Event.fire('.J_TopExpired','click');
	      			 		};
	      			 		var data = '';
	      			  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
	      			}else{
	  					promotionControl.deleteHandle(pid);
	      			}
			    });
				//活动暂停
				Event.on(DOM.query('.J_Pause'), "click", function(){
					 if(!showPermissions('editor_promotion',"编辑促销活动")){
		    			return ;
		    		 }
					 var pid = DOM.attr(this,'data');
					 var diff  = IsExpired();
	       			 if(diff > -5000 ){
	      					var sucessHandle = function(o) {
	      						promotionControl.pausePromo(pid);
	      			 		};
	      			 		var errorHandle = function(o){
	      			 			KISSY.Event.fire('.J_TopExpired','click');
	      			 		};
	      			 		var data = '';
	      			  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
	      			}else{
	  					promotionControl.pausePromo(pid);
	      			}
			    });
				/*重启活动授权*/
				Event.on(DOM.query('.J_Restart'), "click", function(){
					if(!showPermissions('editor_promotion',"重启促销活动")){
		    			return ;
		    		 }
					 var pid = DOM.attr(this,'data');
					 var diff  = IsExpired();
	       			 if(diff > -5000 ){
	      					var sucessHandle = function(o) {
	      						promotionControl.restartPromo(pid);
	      			 		};
	      			 		var errorHandle = function(o){
	      			 			KISSY.Event.fire('.J_TopExpired','click');
	      			 		};
	      			 		var data = '';
	      			  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
	      			}else{
	  					promotionControl.restartPromo(pid);
	      			}
		    	});

			/*更改活动名称*/
		 	 Event.delegate(document,'click mouseenter mouseleave','.J_EditorPromoName', function(ev) {
				if(ev.type == 'mouseenter'){
					DOM.addClass(ev.currentTarget,'edit-activity-hover');
				}else if(ev.type == 'mouseleave'){
					DOM.removeClass(ev.currentTarget,'edit-activity-hover');
				}else if(ev.type == 'click'){
					if(!showPermissions('editor_promotion',"编辑促销活动")){
			   			return ;
			   		 }
					var pid = DOM.attr(ev.currentTarget,'data');
					var diff  = IsExpired();
	       			 if(diff > -5000 ){
	      					var sucessHandle = function(o) {
	      						promotionControl.editorPromoName(pid);	
	      			 		};
	      			 		var errorHandle = function(o){
	      			 			KISSY.Event.fire('.J_TopExpired','click');
	      			 		};
	      			 		var data = '';
	      			  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
	      			}else{
  						promotionControl.editorPromoName(pid);
	      			}
				}
		 	});
		 	 /*更改活动时间*/
		 	 Event.delegate(document,'click mouseenter mouseleave','.J_EditorPromoTime', function(ev) {
				if(ev.type == 'mouseenter'){
					DOM.addClass(ev.currentTarget,'edit-activity-hover');
				}else if(ev.type == 'mouseleave'){
					DOM.removeClass(ev.currentTarget,'edit-activity-hover');
				}else if(ev.type == 'click'){
					if(!showPermissions('editor_promotion',"编辑促销活动")){
			   			return ;
			   		 }
			 		/*活动授权*/
					var pid = DOM.attr(ev.currentTarget,'data');
					 var diff  = IsExpired();
	       			 if(diff > -5000 ){
	      					var sucessHandle = function(o) {
	      						promotionControl.editorPromoTime(pid);
	      			 		};
	      			 		var errorHandle = function(o){
	      			 			KISSY.Event.fire('.J_TopExpired','click');
	      			 		};
	      			 		var data = '';
	      			  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
	      			}else{
  						promotionControl.editorPromoTime(pid);
	      			}
				}
		 	});
			
		},
		pausePromo : function(pid){
			var pauseHandle = function(o) {
			new H.widget.msgBox({
				    title: "暂停活动",
				    content: "暂停活动将会取消您设置的促销活动",
				    type: "confirm",
				    buttons: [{ value: "暂停" }, { value: "取消" }],
				    success: function (result) {
				        if (result == "暂停") {
				            var data = "pid="+pid+"&form_key="+FORM_KEY;
							var successHandle = function(o){
								new H.widget.msgBox({
								    title:"温馨提示",
								    content:'暂停成功',
								    type:"info",
									autoClose : true,
									timeOut :3000
								});
							  	window.location.href=currentPageUrl;
							}
							var errorHandle = function(o){
								if(o.desc == 'need-oauth'){
									 KISSY.Event.fire('.J_TopExpired','click');
									 return ;
								}
								new H.widget.msgBox({
								    title:"错误提示",
								    content:o.desc,
								    type:"error"
								});
							}
				     	    new H.widget.asyncRequest().setURI(pauseUrl).setMethod("GET").setHandle(successHandle).setErrorHandle(errorHandle).setData(data).send();
			
				        }
				    }
				});
    		};
    		var error = function(o){
				new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
    		};
    		var data = "pid="+pid+"&form_key="+FORM_KEY;
     	    new H.widget.asyncRequest().setURI(getPromoTimeUrl).setMethod("GET").setHandle(pauseHandle).setErrorHandle(error).setData(data).send();
		},
		restartPromo : function(pid){
			var changeTimeHandle = function(o) {
    			promotionControl.msg.hide();
				
				var promoStartTime = H.util.StringToDate(o.payload.stime);
				var promoEndTime = H.util.StringToDate(o.payload.etime);
				var nowTime = new Date();
				leftStartTime = (promoStartTime.getTime() - nowTime.getTime())/1000;
				leftEndTime = (promoEndTime.getTime() - nowTime.getTime())/1000;
				var typeId = DOM.val('#J_TypeId_'+pid);
				if(typeId == 10){
					var title = '开始时间 ：立即开始';
					var inputType = 'hidden';
				}else{
					var title = '开始时间';
					var inputType = 'text';
				}
				new H.widget.msgBox({
				    title: "重启活动",
				    type: "prompt",
					inputs: [
					    { header: title, type: inputType, value:o.payload.stime ,name: "" ,id: "J_stime"},
					    { header: "结束时间", type: "text", value:o.payload.etime ,name: "" ,id : "J_etime"}
						],
				    buttons: [{ value: "确定修改" }, { value: "取消修改" }],
				    success: function (result) {
				        if (result == "确定修改") {
							var stime = DOM.val(DOM.get('#J_stime'));
							var etime = DOM.val(DOM.get('#J_etime'));
							var data = "pid="+pid+"&etime="+etime+"&stime="+stime+"&form_key="+FORM_KEY;
							var successHandle = function(o){
								new H.widget.msgBox({
								    title:"温馨提示",
								    content:'重启成功',
								    type:"info",
									autoClose : true,
									timeOut :3000
								});
							  	window.location.href=currentPageUrl;
							}
							var errorHandle = function(o){
								if(o.desc == 'need-oauth'){
									 KISSY.Event.fire('.J_TopExpired','click');
									 return ;
								}
								new H.widget.msgBox({
								    title:"错误提示",
								    content:o.desc,
								    type:"error"
								});
							}
				     	    new H.widget.asyncRequest().setURI(restartUrl).setMethod("GET").setHandle(successHandle).setErrorHandle(errorHandle).setData(data).send();
				        }
				    }
				});
    			myCalendar('J_stime');
    			myCalendar('J_etime');
    		};
    		var error = function(o){
    			promotionControl.msg.hide();
				new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
				
    		};
    		var data = "pid="+pid+"&form_key="+FORM_KEY;
			promotionControl.msg = new H.widget.msgBox({
								    title:"",
									dialogType : 'loading',
								    content:'获取活动时间，请稍候'	
								});
     	    new H.widget.asyncRequest().setURI(getPromoTimeUrl).setMethod("GET").setHandle(changeTimeHandle).setErrorHandle(error).setData(data).send();
 	

		},
		editorPromoName : function(pid){
			
	 		DOM.hide('#J_PromoNameBox_'+pid);	
	 		var SpromoName = KISSY.trim(DOM.val('#J_SoucePromoName_'+pid));
	 		var str ='<input type="text"  class="input-text w-70 fl" style="_width:79px" data ="'+pid+'" id="J_InputPromoName_'+pid+'" value="">'+
				 	 '<input class="gray-btm-h-10 w-30" style="cursor:pointer" data="'+pid+'"  id="J_SavePromoName_'+pid+'" value ="保存" />';
			DOM.html('#J_ShowEditorPromoName_'+pid,str);
			DOM.show('#J_ShowEditorPromoName_'+pid);
			Event.on('#J_InputPromoName_'+pid,'blur',function(){
				KISSY.later(function(){
					DOM.hide('#J_ShowEditorPromoName_'+pid);
	 				DOM.show('#J_PromoNameBox_'+pid);
	 			},200,false,null);
		 	});
			DOM.get('#J_InputPromoName_'+pid).focus();
			DOM.val('#J_InputPromoName_'+pid,SpromoName);
			Event.on('#J_SavePromoName_'+pid,'click',function(ev){
					var pid = DOM.attr(ev.currentTarget,'data');
					var SpromoName = KISSY.trim(DOM.val('#J_SoucePromoName_'+pid));
					var NpromoName = KISSY.trim(DOM.val('#J_InputPromoName_'+pid));
					if(SpromoName == NpromoName){
						DOM.hide('#J_ShowEditorPromoName_'+pid);
						DOM.show('#J_PromoNameBox_'+pid);
						return ;
					}
					var result = H.util.isNull(NpromoName);
					var error = result[0];
					var msg = result[1];
					if(error){
						new H.widget.msgBox({
							    title:"错误提示",
							    content:'出错了：'+msg,
							    type:"error"
							});
			 			return ;
					}
					result = promotionControl.checkSpecTitle(NpromoName);
					error = result[0];
					msg = result[1];
					if(error){
						new H.widget.msgBox({
							    title:"错误提示",
							    content:'出错了：'+msg,
							    type:"error"
							});
			 			return ;
					}
					var typeId = DOM.val('#J_TypeId_'+pid);
					if(typeId == '2' || typeId == '9' || typeId == '20' ||  typeId == '22'){
						result =promotionControl.checkPromoName(NpromoName);
						error = result[0];
						msg = result[1];
						if(error){
							new H.widget.msgBox({
							    title:"错误提示",
							    content:'出错了：'+msg,
							    type:"error"
							});
				 			return ;
						}
					}
			 		var sucessHandle = function(o) {
					  	window.location.href= currentPageUrl;
			 		};
			 		var error = function(o){
			 			new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
			 		};
			 		var data = "pid="+pid+"&promo_name="+encodeURI(NpromoName)+"&form_key="+FORM_KEY;
			  	    new H.widget.asyncRequest().setURI(savePromoNameUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(error).setData(data).send();
			})	
		},
		editorPromoTime : function(pid){
			DOM.hide(DOM.get('.J_EditorPromoTime','#J_Promo_'+pid));	
	 		var SpromoTime = KISSY.trim(DOM.val('#J_SoucePromoStartTime_'+pid)),
	 			EpromoTime = KISSY.trim(DOM.val('#J_SoucePromoEndTime_'+pid));
			var str = '<div class="bianji-shijian w-170">'+
	            '<span class="block riqi">起&nbsp;<input style="*width:135px;" type="text" readonly="readonly" id="J_startDate_'+pid+'" name="start_date" class="input-text input-day-2" value="'+SpromoTime+'" title="开始时间">'+
	            '</span>'+
	            '<span class="block riqi">到&nbsp;<input style="*width:135px;" type="text" readonly="readonly" id="J_endDate_'+pid+'" name="end_date" class="input-text input-day-2" value="'+EpromoTime+'" title="结束时间">'+
	            '</span>'+
	            '<span class="block clear"></span>'+
	        	'</div><div style="width:163px" class="J_RestartBlock" ><input type="checkbox" checked="checked" id="J_IsRestart'+pid+'" data="'+pid+'" value="1" style="margin:0px 2px 0px 16px;"/><div style="margin:0px 2px 2px 9px; display:inline-block;" class="w-120" id="" >保存设置后重启活动</div></div><div style=" margin:0px 2px 0px 16px; _display:inline;" class="gray-btm-h-20 w-70 fl" id="J_SaveTime_'+pid+'" data="'+pid+'">保存</div><div class="gray-btm-h-20 w-70" id="J_CancelTime_'+pid+'" data="'+pid+'">取消</div>';
			DOM.html('#J_ShowEditorPromoTime_'+pid,str);
			DOM.show('#J_ShowEditorPromoTime_'+pid);
			Calendar('J_startDate_',pid);
			Calendar('J_endDate_',pid);
			Event.remove('#J_SaveTime_'+pid);
			Event.remove('#J_CancelTime_'+pid);
			Event.on('#J_SaveTime_'+pid,'click',function(ev){
				var pid = DOM.attr(ev.currentTarget,'data');
				DOM.hide('#J_TimeMsg_'+pid);
				var SpromoTime = KISSY.trim(DOM.val('#J_SoucePromoStartTime_'+pid)),
	 				EpromoTime = KISSY.trim(DOM.val('#J_SoucePromoEndTime_'+pid));
					NSpromoTime = KISSY.trim(DOM.val('#J_startDate_'+pid)),
						NEpromoTime = KISSY.trim(DOM.val('#J_endDate_'+pid));
					if((SpromoTime == NSpromoTime) && (EpromoTime == NEpromoTime)){
						DOM.hide('#J_ShowEditorPromoTime_'+pid);
			 			DOM.show(DOM.get('.J_EditorPromoTime','#J_Promo_'+pid));
			 			DOM.hide('#J_TimeMsg_'+pid);
						return ;
					}
					KISSY.later(function(){
						DOM.hide('#J_ShowEditorPromoTime_'+pid);
						DOM.show(DOM.get('.J_EditorPromoTime','#J_Promo_'+pid));
		 			},200,false,null);
			 		var sucessHandle = function(o) {
					  	window.location.href=currentPageUrl;
			 		};
			 		var error = function(o){
			 			promotionControl.msg.setMsg(o.desc).show();
			 			promotionControl.msg.hide(true);
			 		};
					if(DOM.hasClass('#J_Promo_'+pid,'pauseing')){
						var isReStart = DOM.prop('#J_IsRestart'+pid,"checked") ? 1 : 0; 
					}else{
						var isReStart = 0; 
					}
			 		var data = "pid="+pid+"&start_date="+NSpromoTime+"&end_date="+NEpromoTime+"&isReStart="+isReStart+"&form_key="+FORM_KEY;
			  	    new H.widget.asyncRequest().setURI(savePromoTimeUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(error).setData(data).send();
			})
			Event.on('#J_CancelTime_'+pid,'click',function(ev){
				var pid = DOM.attr(ev.currentTarget,'data');
				DOM.hide('#J_ShowEditorPromoTime_'+pid);
	 			DOM.show(DOM.get('.J_EditorPromoTime','#J_Promo_'+pid));
	 			DOM.hide('#J_TimeMsg_'+pid);
				return ;
			})
		},
		deleteHandle : function(pid) {
				new H.widget.msgBox({
				    title: "删除活动",
				    content: '系统将为您取消此活动设置的促销信息',
				    type: "confirm",
				    buttons: [{ value: "确定删除" }, { value: "取消" }],
				    success: function (result) {
				        if (result == "确定删除") {
							var submitHandle = function(o) {
							  	window.location.href= currentPageUrl;
							};
							var error = function(o){
								new H.widget.msgBox({
								    title:"错误提示",
								    content:o.desc,
								    type:"error"
								});
							};
							var data = "pid="+pid+"&form_key="+FORM_KEY;
							promotionControl.msg.hide();
							promotionControl.msg.setMsg('删除活动，系统正在处理').show();
				     	    new H.widget.asyncRequest().setURI(deleteUrl).setMethod("GET").setHandle(submitHandle).setErrorHandle(error).setData(data).send();
				        }
				    }
				});
		},
		/*违禁词限制*/
			checkSpecTitle : function(str){
				var result = [];
				var error = false;
				var msg = null;
				var re =/(淘宝)|(聚划算)|(限时折扣)|(良品)|(淘金币)|(天天特价)|(满就送)|(vip)/i;
				if(re.test(str)){
				    var rt = re.exec(str);
				    if(rt != null){
						error = true;
						msg = '含有违禁字'+rt[0]+'！';
					}
				}
				result.push(error);
				result.push(msg);
				return result;
			},
			/*验证活动名称*/
			checkPromoName : function(promoName){
				var result = [];
				var error = false;
				var msg = null;
				var re=/^[\u4E00-\u9FA5\uf900-\ufa2d\A-Za-z0-9]{2,5}$/;
				if(!re.test(promoName)){
					if(promoName.length<2 || promoName.length >5){
						error = true;
						msg = '长度2~5个字符！';
					}else {
						var reg=/[^\u4E00-\u9FA5\uf900-\ufa2d\A-Za-z0-9]+/;
						var rt = promoName.match(reg);
						if(rt != null){
							error = true;
							msg = '含有非法字符'+rt[0]+'！';
						}
					}
				}
				result.push(error);
				result.push(msg);
				return result;
			},
			
			//搜索活动中宝贝
	        searchPromoItems : function() {
				if(!promotionControl.isLoad){
						KISSY.use("1.0/promo");
						promotionControl.isLoad = true;		
				}
				DOM.hide('#promoList');
				DOM.show('#itemList');
	            var submitHandle = function(o) {
	            	DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
					DOM.hide('#J_PromoDetail');
					DOM.show('#J_BackToPromoList');
	        	    totalRecords = o.payload.totalRecords;
					if(totalRecords > 0){
						DOM.get('#J_LEmpty').style.display = 'none';
						DOM.removeClass(DOM.query(".J_PromotionItemBtnHolder"),'ks-hidden');
					} else {
						DOM.get('#J_LEmpty').style.display = '';
						DOM.addClass(DOM.query(".J_PromotionItemBtnHolder"),'ks-hidden');
					}
					DOM.html('#J_PromoItems',o.payload.body);
					pageCount = Math.ceil(totalRecords/o.payload.pageNum); 
					promotionControl.paginator = new showPages('promotionControl.paginator').setRender(promotionControl.handlePagination).setPageCount(pageCount).printHtml('#J_PromotionItemPaging',2);
	    	    };
	    	    var errorHandle = function(o){
	    	    	DOM.show('#promoList');
	    	    	DOM.show('#J_PromoDetail');
	            	DOM.hide('#itemList');
	            	DOM.hide('#J_BackToPromoList');
					new H.widget.msgBox({
							    title:"错误提示",
							    content:o.desc,
							    type:"error"
							});
					
	    	    };
	    	    if(DOM.val(DOM.get("#J_SearchTitle")) != '关键字、商品链接、商品编码'){
	    	    	var title = encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle"))); //标题
	    	    }else{
	    	    	var title ='';
	    	    }
	    	    var status = DOM.val(DOM.get("#J_SearchStatus"));
		    	var data = "keytitle="+title+'&status='+status;
				DOM.show('#J_LeftLoading');
				DOM.hide('#J_MainLeftContent');
	    	    new H.widget.asyncRequest().setURI(getPromoItemsUrl).setMethod("GET").setHandle(submitHandle).setErrorHandle(errorHandle).setData(data).setDataType('json').send();
			},
	    	handlePagination : function(turnTo) {
		    	pageId = turnTo;
	    		var submitHandle = function(o) {
	    			 totalRecords = o.payload.totalRecords;
	   				if(totalRecords > 0){
	   					DOM.get('#J_LEmpty').style.display = 'none';
	   					DOM.removeClass(DOM.get(".J_PromotionItemBtnHolder"),'ks-hidden');
	   				} else {
	   					DOM.get('#J_LEmpty').style.display = '';
	   					DOM.addClass(DOM.get(".J_PromotionItemBtnHolder"),'ks-hidden');
	   				}
					pageCount = Math.ceil(totalRecords/o.payload.pageNum); 
					DOM.html('#J_PromoItems',o.payload.body);
					promotionControl.paginator.setPage(pageId).setPageCount(pageCount).printHtml('#J_PromotionItemPaging',2);
					DOM.hide('#J_LeftLoading');
					DOM.show('#J_MainLeftContent');
		    	};
		    	 if(DOM.val(DOM.get("#J_SearchTitle")) != '关键字、商品链接、商品编码'){
	    	    	var title = encodeURIComponent(DOM.val(DOM.get("#J_SearchTitle"))); //标题
	    	    }else{
	    	    	var title ='';
	    	    }
		   	    var status = DOM.val(DOM.get("#J_SearchStatus"));
		    	var data = "keytitle="+title+'&status='+status+"&page_id="+pageId;
		        DOM.show('#J_LeftLoading');
				DOM.hide('#J_MainLeftContent');
	    	    new H.widget.asyncRequest().setURI(getPromoItemsUrl).setMethod("GET").setHandle(submitHandle).setData(data).send();
			},
			//将活动中宝贝移除
			removePromotionItemHandle : function(promo_itemid,pidi,type) {
				if(!showPermissions('editor_promotion',"编辑促销活动")){
		   			return ;
		   		 }
				 if (type == 'promoItems') {
				 	var typeId = DOM.val('#J_TypeIdItem_'+promo_itemid);
				 }
				 if(typeId == 10){
				 	var diff  = IsExpired();
					 if(diff > -5000 ){
							var sucessHandle = function(o) {
								promotionControl.deletePromotionItemHandle(promo_itemid,pidi,type);
					 		};
					 		var errorHandle = function(o){
					 			KISSY.Event.fire('.J_TopExpired','click');
					 		};
					 		var data = '';
					  	    new H.widget.asyncRequest().setURI(isExpiredUrl).setMethod("GET").setHandle(sucessHandle).setErrorHandle(errorHandle).setData(data).send();
					 }else{
						promotionControl.deletePromotionItemHandle(promo_itemid,pidi,type);	
					 }
					
				 }else{
					H.promotion.deletePromotionItemHandle(promo_itemid,pidi,type);
				 }
			},
			deletePromotionItemHandle : function(promo_itemid,pidi,type){
					itemIds = [];
					if(type == 'promoItems'){
						DOM.hide('#J_RemovePromo_'+promo_itemid);
						DOM.show('#J_MinLoading_'+promo_itemid);
					}
					if(promo_itemid && pidi){
						itemIds.push(promo_itemid);
						pid = pidi;
					}
					var submitHandle = function(o) {
							if (promotionControl.paginator) {
								promotionControl.paginator.toPage(promotionControl.paginator.page);
							}
							else {
								promotionControl.searchPromoItems();
							}
	        	    };
	        	    var data = "pid="+pid+"&item_ids="+itemIds+"&form_key="+FORM_KEY;
	        	    new H.widget.asyncRequest().setURI(removePromotionItemUrl).setMethod("POST").setHandle(submitHandle).setData(data).send();
			},
			
		
	}
	
	
	
	
}, {
    requires: ['utils/showPages/index']
});