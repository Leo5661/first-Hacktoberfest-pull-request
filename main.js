var button=document.querySelector("button");
var filled=false;
button.addEventListener("click",function(){
	//alert('connected');
	if(filled)
		document.body.style.background="#9966ff";
	else
		document.body.style.background="#339933";
	filled=!filled;
});

