//记录当前页
var nowpage = 0;
//等待页面全部加载完成再执行
$(document).ready(function(){
	//首先获取屏幕的宽度 高度
	var width = window.innerWidth;
	var height = window.innerHeight;
	//给标签属性，这里用js的方式写
	$(".content").width(width).height(4*height);
	$(".page").width(width).height(height);
	
	//翻页的实现，在content下写
	//添加swipe()滑动界面
	$(".content").swipe({
		//监听到滑动后执行
		//function()里的参数
		//event事件,direction方向,distance距离,duration事件,fingerCount触屏的点数
		swipe:function(event,direction,distance,duration,fingerCount){
			//调试用,观测其变化
			//console.log("滑动");
			if(direction == "up"){
				nowpage += 1;
			}
			if(nowpage > 5){
				nowpage = 5;
			}
			if(direction == "down"){
				nowpage -= 1;
			}
			if(nowpage < 0){
				nowpage = 0;
			}
			//在js中的动画都用animate({"属性":"值","属性":"值"},动画时间,function(){})
			//$(".content").animate({"top":"-"+nowpage*100+"%"},1000)
			//在js中的动画都用animate({"属性":"值","属性":"值"},{"参数名":"值",...})
			//第一个{}属性及值，第二个{}，时间，方法等等
			//$(".content").animate({"top":"-"+nowpage*100+"%"},{duration:1000,complete:function(){}})
			//自定义的方法函数带括号为立即执行，不带小括号的为当结束执行
			$(".content").animate({"top":"-"+nowpage*100+"%"},{duration:1000,complete:animateofpage})
		}
	})
	//当页面加载完成之后
	//非同时淡入淡出，用这种方式写
	//第一页的逻辑动画效果
	$(".page1_51").animate({"bottom":"0%"},800,function(){
		$(".page1_37").animate({"bottom":"35%"},800);
	});
	$(".page1_45").fadeIn(1500);
	$(".page1_24").fadeIn(1500);
	$(".page1_25").fadeIn(1500,function(){
		$(".page1_56").animate({"width":"45%","height":"40%"},2000,function(){
			$(".page1_56").animate({"width":"40%","height":"35%"},1000);
		});
	});
	
})

function animateofpage(){
	if(nowpage == 1){
		//第二页动画
		//第二页的逻辑动画效果
		//两秒淡入, function(){}动画执行结束之后  执行的方式
		$(".page2_20").fadeIn(1000,function(){
			$(".page2_29").fadeIn(1000,function(){
				$(".page2_32").animate({"left":"8%"},1000);
				$(".page2_30").animate({"left":"36%"},1000,function(){
					$(".page2_40").animate({"right":"5%"},1000);
					$(".page2_38").fadeIn(1500);
					$(".page2_39").animate({"right":"5%"},1000);
					$(".page2_36").fadeIn(1500);
					$(".page2_43").animate({"right":"5%"},1000,function(){
						$(".page2_wenzi").fadeIn(1500);
						$(".page2_45").fadeIn(1500);
					});
				});
			});
		});
	}
	else if(nowpage == 2){
		//第三页动画
		$(".page3_20").fadeIn(1500,function(){
		$(".page3_33").fadeIn(800);
		$(".page3_33").animate({"right": "28%"},800);
		$(".page3_25").fadeIn(800);
		$(".page3_25").animate({"right": "8%"},800);
		$(".page3_26").fadeIn(2000);
		$(".page3_45").fadeIn(2000);
		$(".page3_41").animate({"bottom": "0%"},800,function(){
		$(".page3_txt1").fadeIn(800,function(){
		$(".page3_txt2").fadeIn(800,function(){
			$(".page3_txt3").fadeIn(800,function(){
				$(".page3_txt4").fadeIn(800,function(){
					$(".page3_txt5").fadeIn(800,function(){
						$(".page3_txt6").fadeIn(800,function(){
							$(".page3_txt7").fadeIn(800);
						});
					});
				});
			});
		});	
	});
  });
  });
	}
	else if(nowpage == 3){
		//第四页动画
		$(".page4_26").fadeIn(1000,function(){
			$(".page4_44").fadeIn(1000,function(){
				$(".page4_52").fadeIn(1000,function(){
					$(".page4_24").fadeIn(1000,function(){
						$(".page4_25").fadeIn(1000,function(){
								$(".page4_50").animate({"right":"12%"},500,function(){
									$(".page4_46").fadeIn(1000);
								});
								$(".page4_37").fadeIn(1000,function(){
									$(".page4_14").fadeIn(1000,function(){
										$(".page4_48").fadeIn(1000,function(){});
									});
								});	
							});
						});
					});
				});
			});
		}
	else if(nowpage == 4){
		$(".page5_7").animate({"left":"12%"},500);
			$(".page5_20").fadeIn(500,function(){
				$(".page5_26").fadeIn(500,function(){
					$(".page5_44").fadeIn(500,function(){
						$(".page5_52").fadeIn(500,function(){
	    					$(".page5_37").fadeIn(500,function(){
	    						$(".page5_24").fadeIn(500,function(){
	    							$(".page5_25").fadeIn(500,function(){
	   									$(".page5_48").fadeIn(1000,function(){
		    								$(".page5_47").fadeIn(1000,function(){
	 	 										$(".page5_50").fadeIn(1000,function(){
	 												$(".page5_45").fadeIn(1000,function(){
												});
											});
	    								});
	    							});
								});
							});
						});
					});
				});
			});
		});
	}
	else if(nowpage == 5){
			$(".page6_2").fadeIn(1000,function(){
				$(".page6_9").animate({"left":"20%"},1000);
				$(".page6_18").animate({"right":"3%"},1000);
			});
	}
}

//obj代表传过来的参数，可以自定义
function beat(obj){
	//场景一淡出
	$(".page6_2").fadeOut(1000);
	$(".page6_9").fadeOut(1000);
	$(".page6_18").fadeOut(1000);
	//场景二淡入
	$(".page6_6").fadeIn(1000);
	$(".page6_13").fadeIn(1000);
}

function playMusic(obj){
	//首先拿到音乐播放器
	var player = document.getElementById("player");
	if(player.paused){
		player.play();
		obj.src = "img/musicBtn.png"
	}else{
		player.pause();
		obj.src = "img/musicBtnOff.png"
	}
}