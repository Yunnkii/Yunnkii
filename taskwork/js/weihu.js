  
	window.onload = function(){
	var  getDom= function (id){
		return document.getElementById(id);
	}
	var nav = getDom("nav");
	var carved = getDom("carved");
	var carving = getDom("carving");
	var uncarve = getDom("uncarve");
	var status = document.querySelectorAll(".status");
	var lis = document.querySelectorAll(".nav>ul>li");
	   	for(var j=0;j<lis.length;j++){
	   		lis[j].addEventListener('click',handle,false);
	   	}
	  	for(var i=0;i<status.length;i++){
	    	status[i].addEventListener('click',move,false);
       }
	  
}
	function handle(){
			this.style.backgroundImage = '../images/change.jpg';
			var  ul = this.querySelectorAll('ul')[0];
			if(ul.style.display=='none'){
			 	ul.style.display ='block';
			}
			   	else{
			   		ul.style.display='none';
			   	}
			for(var k=0;k<lis.length;k++){
			   	if(lis[k]!=this){
				   	var uli = lis[k].querySelector('ul');
				   	uli.style.display="none";
				}
			}
	   	}	
	function  move(){
	    		if(this.parentNode.parentNode.className=="carve uncarve"){
	    		carved.appendChild(this.parentNode);
	    		this.innerText = "暂停维护";
	    	    }
	    	    if(this.parentNode.parentNode.className=="carve carving"){
	    		uncarve.appendChild(this.parentNode);
	    		this.innerText = "进行开拓";
	    	    }	
	    	    if(this.parentNode.parentNode.className=="carve carved"){
	    		carving.appendChild(this.parentNode);
	    		this.innerText = "暂停开拓";
	    	    }		
	    }
  