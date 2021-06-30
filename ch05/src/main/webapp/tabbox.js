var tabBox = {
	init: function(){
		var t = this;
		window.addEventListener("load", t.onWindowLoad.bind(t));
	},
	onWindowLoad: function(){
		var divTabBox = document.getElementsByClassName("tab-box")[0];
		console.log(divTabBox.childNodes);
		
		var ulTabs = divTabBox.childNodes[1];
		var liTabs = ulTabs.getElementsByTagName("li");
		console.log(liTabs);
		
		for(var i=0; i<liTabs.length; i++){
			liTabs[i].addEventListener("click", this.onTabClicked);
		}
	},
	onTabClicked : function() {
		var lisSelected = document.getElementsByClassName("selected");
		(lisSelected.length ==1) && (lisSelected[0].className="");
		this.className = "selected";
	}
	
}