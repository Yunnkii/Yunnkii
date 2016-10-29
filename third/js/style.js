window.onload = function(){
	    //封装一个获得id的对象的函数
	     var getDom = function(id){
		 return document.getElementById(id);
		 }
		 //运用getDom函数
         var container = getDom('container');
		 var list = getDom('list');
		 var buttons = getDom('buttons').getElementsByTagName('span');
		 var next = getDom('next');
		 var prev = getDom('prev');
		 var animated = false;
		 var len = 3;
		 var interval = 2000;
		 var index = 1; 
		 var timer;
         //封装一个animate函数
		 function animate(offset){
		 if(offset==0){
		 return;
		 }
		 animated = true;
		 var left = parseInt(list.style.left)+offset;
		 var time = 300;//移动的总时间
		 var interval = 10;//移动的间隔时间
		 var speed = offset/(time/interval);//每次移动的距离
		 var go = function(){
		  if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, interval);
                    }
		  else{
			  list.style.left = left+'px';
			  if(left>-960){
			  list.style.left = -960*len+'px';
			  }
			  else if(left<-960*len){
			  list.style.left = '-960px';
			  }
             animated = false;
		   }
		  }
		   go();
		 }
        //封装一个让buttons亮的方法
		function showButton(){
		 for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
     }
		//为按钮封装方法
         for(var i= 0;i<buttons.length ;i++ ){
          buttons[i].onclick = function(){
		   if(animated){
		   return;
		   }
		   if(this.className=='on'){
		   return;
		   }
           var myindex = parseInt(this.getAttribute('index'));
		   var offset = -960*(myindex-index);
            animate(offset);
            index = myindex;
			showButton();
		  }
		   
         }
        
		 

          next.onclick = function(){
		   if(animated){
		   return;
		   }
		   if(index==3){
			index=1;
		   }
		   else{
		   index++;
		   }
		   animate(-960);
		   showButton();
		  }
            prev.onclick = function(){
		   if(animated){
		   return;
		   }
		   if(index==1){
			index=3;
		   }
		   else{
		   index--;
		   }
		   animate(960);
		   showButton();
		  }
		 function  play(){
		 timer = setInterval(function(){
		  next.onclick();
		  },interval)
		 }
         function stop(){
		 clearInterval(timer);
		 }
		 container.onmouseover = stop;
		 container.onmouseout = play;
        play();
	   }