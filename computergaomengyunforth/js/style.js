
var num = 0;
var numshow = "0";
var result = 0;
var calu = 0;
var operate=0;
function  numget(number){
	var str = String(document.querySelector("input").value);
	str = (str!="0")? ((operate==0) ? str : "") :"";
	str = str+String(number);
	document.querySelector("input").value = str;
	 operate=0;
}
function clearScreen(){
	num = 0;
	result = 0;
	numshow = "0";
	document.querySelector("input").value = "0";
}
function calculate(){
	numshow = Number(document.querySelector("input").value);
	if(num!=0){
		switch(calu){
			case 1:result = num+numshow;
			break;
			case 2:result = num-numshow;
			break;
			case 3:result = num*numshow;
			break;
			case 4:if(numshow!=0){
				result = num/numshow;
			}
			else{
				document.querySelector("input").innerText = "被除数不能为0";
				break;
			}
		}
	}
	else{
		result = numshow;
	}
	numshow = String(result);
	document.querySelector("input").value = numshow;
	num = result;//储存当前值

}
function del(){
	var str = document.querySelector("input").value;
	str = (str!="0")?str:"";
	str = str.substr(0,str.length-1);
	str = (str!="")?str:"0";
	document.querySelector("input").value = str;
}
function dot(){
	var str = String(document.querySelector("input").value);
	str = (str!='0')?((operate ==0)?str:'0'):"0";
	for(var i = 0;i<str.length;i++){
		if(str.substr(i,1)=='.'){
			return false;
		}
	}
	str = str+'.';
	document.querySelector('input').value = str;
	operate = 0;

}
function plus(){
	calculate();
	operate=1;
	calu = 1;
}
function minus(){
	calculate();
	operate=1;
	calu = 2;
	

}
function cheng(){
	calculate();
	operate=1;
	calu = 3;
	
}
function devide(){
	calulate();
	operate=1;
	calu = 4;
}

function equal(){
	calculate();
	operate=1;
	num = 0;
	result = 0;
	numshow = "0";
}

