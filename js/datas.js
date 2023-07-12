function drawLayer02Label(canvasObj,text,textBeginX,lineEndX){
	var colorValue = '#04918B';

	var ctx = canvasObj.getContext("2d");

	ctx.beginPath();
	ctx.arc(35,55,2,0,2*Math.PI);
	ctx.closePath();
	ctx.fillStyle = colorValue;
	ctx.fill();

	ctx.moveTo(35,55);
	ctx.lineTo(60,80);
	ctx.lineTo(lineEndX,80);
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorValue;
	ctx.stroke();

	ctx.font='12px Georgia';
	ctx.fillStyle = colorValue;
	ctx.fillText(text,textBeginX,92);
}

//接入机型占比

var COLOR = {
	MACHINE:{
		TYPE_A:'#0175EE',
		TYPE_B:'#D89446',
		TYPE_C:'#373693',
		TYPE_D:'#25AE4F',
		TYPE_E:'#06B5C6',
		TYPE_F:'#009E9A',
		TYPE_G:'#AC269F',
		TYPE_H:'#009EEA',
		TYPE_I:'#AC255F'
	}
};



function renderLegend(){
	drawLegend(COLOR.MACHINE.TYPE_A,25,'自治区');
	drawLegend(COLOR.MACHINE.TYPE_B,50,'教育');
	drawLegend(COLOR.MACHINE.TYPE_C,75,'拉萨');
	drawLegend(COLOR.MACHINE.TYPE_D,100,'日喀则');
	drawLegend(COLOR.MACHINE.TYPE_E,125,'山南');
	drawLegend(COLOR.MACHINE.TYPE_F,150,'林芝');
	drawLegend(COLOR.MACHINE.TYPE_G,175,'昌都');
	drawLegend(COLOR.MACHINE.TYPE_H,200,'那曲');
	drawLegend(COLOR.MACHINE.TYPE_I,225,'阿里');
}

function drawLegend(pointColor,pointY,text){
	var ctx = $("#layer03_left_01 canvas").get(0).getContext("2d");
	ctx.beginPath();
	ctx.arc(20,pointY,6,0,2*Math.PI);
	ctx.fillStyle = pointColor;
	ctx.fill();
	ctx.font='20px';
	ctx.fillStyle = '#FEFFFE';
	ctx.fillText(text,40,pointY+3);
}


//存储
function renderLayer03Right(){
	drawLayer03Right($("#layer03_right_chart01 canvas").get(0),"#027825",0.2928);
	drawLayer03Right($("#layer03_right_chart02 canvas").get(0),"#006DD6",0.344);
	drawLayer03Right($("#layer03_right_chart03 canvas").get(0),"#238681",0.1653);
}

function drawLayer03Right(canvasObj,colorValue,rate){
	var ctx = canvasObj.getContext("2d");
    
	var circle = {
        x : 65,    //圆心的x轴坐标值
        y : 80,    //圆心的y轴坐标值
        r : 60      //圆的半径
    };

	//画扇形
	//ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
	//ctx.fillStyle = colorValue;
	//ctx.fill();

	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,0,Math.PI*2)
	ctx.lineWidth = 10;
	ctx.strokeStyle = '#052639';
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI)
	ctx.lineWidth = 10;
	ctx.lineCap = 'round';
	ctx.strokeStyle = colorValue;
	ctx.stroke();
	ctx.closePath();
    
	ctx.fillStyle = 'white';
	ctx.font = '20px Calibri';
	ctx.fillText(rate*100+'%',circle.x-15,circle.y+10);

}


function renderChartBar01(){
	var myChart = echarts.init(document.getElementById("layer03_left_02"));
		myChart.setOption(
					 {
						title : {
							text: '',
							subtext: '',
							x:'center'
						},
						tooltip : {
							trigger: 'item',
							formatter: "{b} : {c} ({d}%)"
						},
						legend: {
							show:false,
							x : 'center',
							y : 'bottom',
							data:['自治区','教育','拉萨','日喀则','山南','林芝','昌都','那曲','阿里']
						},
						toolbox: {
						},
						label:{
							normal:{
								show: true, 
								formatter: "{b} \n{d}%"
							} 
						},
						calculable : true,
						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G],
						series : [
							{
								name:'',
								type:'pie',
								radius : [40, 80],
								center : ['50%', '50%'],
								//roseType : 'area',
								data:[
									{value: 566,name:'自治区'},
									{value: 1704,name:'教育'},
									{value: 103,name:'拉萨'},
									{value: 491,name:'日喀则'},
									{value: 159,name:'山南'},
									{value: 196,name:'林芝'},
									{value: 146,name:'昌都'},
									{value: 241,name:'那曲'},
									{value: 150,name:'阿里'}
								]

							}
						]
					}
		);

}



function renderLayer04Left(){

	var myChart = echarts.init(document.getElementById("layer04_left_chart"));

	var dataAxis = ['学前教育相关','数学计算科学相关','汉语相关','藏语相关','英语相关','思想哲学等相关','物理学化学等']
	var data = [352*2, 120*2, 200, 95*2, 90+88, 67*2, 52*2+23*2+16*2+14*2];
	var yMax = 1000;
	var dataShadow = [];
	for (var i = 0; i < data.length; i++) {
		dataShadow.push(yMax);
	}

	myChart.setOption({
		              
								title: {
										text: '',
										subtext: ''
									},
									grid:{
										x:40,
										y:40,
										x2:20,
										y2:20,
										
									},
									xAxis: {
										data: dataAxis,
										axisLabel: {
											/*inside: true,*/
											interval:0,
											textStyle: {
												color: '#fff',
												fontSize: 12
												
											}
										},
										axisTick: {
											show: false,
										},
										axisLine: {
											show: true,
											symbol:['none', 'arrow'],
											symbolOffset: 12,
											lineStyle:{
												color: '#fff',
											}
										},
										z: 10
									},
									yAxis: {
										type: 'value',
										name: '招聘：人',
										axisLine: {
											show: true,
											symbol: ['none', 'arrow'],
											symbolOffset: 12,
											lineStyle:{
												color: '#fff',
											}
										},
										axisTick: {
											show: false
										},
										axisLabel: {
											textStyle: {
												color: '#fff',
												fontSize: 12
											}
										}
									},

									dataZoom: [
										{
											type: 'inside'
										}
									],
									series: [
										{ // For shadow
											type: 'bar',
											itemStyle: {
												color: 'rgba(0,0,0,0.05)'
											},
											barGap: '-100%',
											barCategoryGap: '40%',
											data: dataShadow,
											animation: false
										},
										{
											type: 'bar',
											itemStyle: {
												color: new echarts.graphic.LinearGradient(
													0, 0, 0, 1,
													[
														{offset: 0, color: '#0efdff'},
														{offset: 0.5, color: '#188df0'},
														{offset: 1, color: '#188df0'}
													]
												)
											},
											emphasis: {
												itemStyle: {
													color: new echarts.graphic.LinearGradient(
														0, 0, 0, 1,
														[
															{offset: 0, color: '#2378f7'},
															{offset: 0.7, color: '#2378f7'},
															{offset: 1, color: '#0efdff'}
														]
													)
												}
											},
											data: data
										}
									]}
	);
}

function renderLayer04Right(){
	var myChart = echarts.init(document.getElementById("layer04_right_chart"));
	myChart.setOption({
			title: {
				text: ''
			},
			tooltip: {
				trigger: 'axis'
			},
			legend: {
				top:20,
				right:5,
				textStyle:{
					color:'white'
				},
				orient:'vertical',
				data:[
						{name:'计算机类',icon:'circle'},
						{name:'医学类',icon:'circle'},
						{name:'工科类类',icon:'circle'}
					]
			},
			grid: {
				left: '3%',
				right: '16%',
				bottom: '3%',
				top:'3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				axisTick:{show:false},
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:8  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#0B3148',
						width: 1,
						type: 'solid'
					}
				},
				data:['自治区','拉萨','日喀则','山南','林芝','昌都','那曲','阿里']
						
			},
			yAxis: {
				type: 'value',
				axisTick:{show:false},
				axisLabel:{
					textStyle:{
						color:"white", //刻度颜色
						fontSize:8  //刻度大小
						}
				},
				axisLine:{
					show:true,
					lineStyle:{
						color: '#0B3148',
						width: 1,
						type: 'solid'
					}
				},
				splitLine:{
					show:false
				}
			},
			series: [
						{
							name:'计算机类',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#F3891B'
								},
								lineStyle:{
									normal:{
									color:'#F3891B',
									opacity:1
										}
								}
							},  
							data:[246, 57,45 ,41 ,21, 44,28, 67]
						},
						{
							name:'医学类',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#006AD4'
								},
								lineStyle:{
									normal:{
									color:'#F3891B',
									opacity:1
										}
								}
							},
							data:[216,20,143,36 ,81, 19,68, 63]
						},
						{
							name:'工科类类',
							type:'line',
							itemStyle : {  
									normal : {  
									color:'#009895'
								},
								lineStyle:{
									normal:{
									color:'#009895',
									opacity:1
										}
								}
							},
							data:[88 ,40,28 ,44 ,9 , 39,30, 32]
						}
					]
		}	
	);
}

function get10MinutesScale()
{
	var currDate = new Date();
	var odd = currDate.getMinutes()%10;
	var returnArr = new Array();
	currDate.setMinutes(currDate.getMinutes()-odd);
	for(var i = 0; i <7; i++){
		returnArr.push(currDate.getHours()+":"+(currDate.getMinutes()<10?("0"+currDate.getMinutes()):currDate.getMinutes()));
		currDate.setMinutes(currDate.getMinutes()-10);
	}
	return returnArr;
}


function getLatestDays(num)
{
	var currentDay = new Date();
	var returnDays = [];
	for (var i = 0 ; i < num ; i++)
	{
		currentDay.setDate(currentDay.getDate() - 1);
		returnDays.push((currentDay.getMonth()+1)+"/"+currentDay.getDate());
	}
	return returnDays;
}