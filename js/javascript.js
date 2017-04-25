function validar() {
	var texto = document.getElementById('textbox').value;
	var estilo = document.getElementById('selectNumber').value;
	
	if(!(texto === '') && estilo >= 1){		
		// Check browser support
		if (typeof(Storage) !== "undefined") {
			// Store			
			
			var data = JSON.parse(localStorage.getItem("data"));
			var modo = data.modo;
			
			if(estilo == 1){
				data = {modo: ""+modo, style: "popsicle"};
			}
			
			if(estilo == 2){
				data = {modo: ""+modo, style: "cruiser"};
			}
				
			if(estilo == 3){
				data = {modo: ""+modo, style: "oldschool"};
			}				
			
			localStorage.setItem("data",JSON.stringify(data));
			
			console.log(JSON.stringify(data));
			
		} 
		else{
			// El browser no soporta localStorage
			alert("Current browser does not support local storage.");
		}
		
		document.location.href = "estilo.html";
	}
	else {
		if(texto === ''){
			alert("Project's name is empty.");
		}
		else{
			alert("Choose a style please.");
		}
	}
}

function toggleMode() {
	//body
	var body = document.getElementById("body");
	var currentClass = body.className;
	body.className = currentClass == "alt-mode" ? "normal-mode" : "alt-mode";
	
	//panel-header
	var header = document.getElementById("panel_header");
	var currentClass = header.className;
	
	if(currentClass == "panel-heading normal"){
		header.className = "panel-heading alt-mode";
		
		var data = JSON.parse(localStorage.getItem("data"));
		var skate = data.style;
		
		data = {modo: "normal", style: ""+skate};
		
		localStorage.setItem("data",JSON.stringify(data));
	}
	else{
		header.className = "panel-heading normal";
		
		var data = JSON.parse(localStorage.getItem("data"));
		var skate = data.style;
		
		data = {modo: "alt", style: ""+skate};
		
		localStorage.setItem("data",JSON.stringify(data));
	}
}

function about() {
	alert("Proyecto IAW - 2017");		
}

function filldropdown(){
	var select = document.getElementById("selectNumber"); 
	var options = ["1","2"]; 

	for(var i = 0; i < options.length; i++) {
		var opt = options[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
}

function addImage(){
	limpiarPanel();
}

function addText(){
			limpiarPanel();
			
			var content = document.getElementById("panel_seleccion");
			
			var txt = document.createElement("textarea");
			txt.setAttribute("id","text");
			txt.setAttribute("style","resize:none");
			txt.setAttribute("rows","2");
			txt.setAttribute("cols","50");
			txt.setAttribute("maxlength","25");
			txt.setAttribute("placeholder","Enter your text here");
		
			content.appendChild(txt);
			
			var btn = document.createElement("button");
			btn.setAttribute("onclick", "ingresar_texto()");
			btn.setAttribute("id","btn1");	
			btn.innerHTML = "Add";
			content.appendChild(btn);	
			
			var form = document.createElement("form");
			
			//Creo el dropdown
			var dropdown = document.createElement("select");
			dropdown.setAttribute("id","color");
			
			//VER CORRECCION -> LLENAR LOS COLORES DESDE UN ARCHIVO...
			var options = ["aqua","aquamarine","beige","black","blue","blueviolet","brown","chocolate","coral","crimson","darkblue","darkcyan","darkgoldenrod","darkgreen","darkorange","darkred","darkviolet","deeppink","fuchsia","gold","gray","green","mediumblue","midnightblue","orange","pink","purple","violet","white","yellow"]; 
			
			//Lleno el dropdown	
			for(var i = 0; i < options.length; i++) {
				var opt = options[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				dropdown.appendChild(el);
			}				
			form.appendChild(dropdown);
			content.appendChild(form);
}

function selected(index){	
			var data = JSON.parse(localStorage.getItem("data"));

			var str = "images/" + data.style + index + "_selected.jpg";
			
			//Recupero la imagen del prototipo
			var container = document.getElementById("prototype");

			//Creo imagen
			var img = document.createElement("div");
			img.setAttribute("style", "background-image: url("+str+"); height: 252px; width: 910px; text-align: center;");
			
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
			container.appendChild(img);
}		

function ingresar_texto(){
	var img = document.getElementById("prototype").firstChild;
			
	var txt = document.getElementById("text").value;
			
	if(!(img.firstChild == null)){
		img.removeChild(img.firstChild);
	}	

	let canvas = new Canvas('wtd_background_image');
	let canvasObj = new fabric.Canvas('wtd_background_image');

	function Canvas(id) {
		this.canvas = document.createElement('canvas');
		this.canvas.id = id;
		img.appendChild(this.canvas);
		return this.canvas;
	}
	// VER CORRECCION -> ajustar el canvas a la imagen seleccionada.
	canvasObj.setHeight(235);
	canvasObj.setWidth(904);
	
	var texto = document.getElementById("text").value;
	var color = document.getElementById("color").value;
			
	canvasObj.add(new fabric.Text(texto, { 
		fontFamily: 'Billabong', 
		left: 100, 
		top: 100,
		fill: color
	}));
}

function limpiarPanel(){
			//limpiar panel
			var myNode = document.getElementById("panel_seleccion");
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}
}

function reset(){			
			limpiarPanel();
			
			var data = JSON.parse(localStorage.getItem("data"));
			
			document.getElementById("panel_header").innerHTML = data.style;
			
			background();
			
			//Recupero la imagen del prototipo
			var container = document.getElementById("prototype");

			//Creo imagen
			var img = document.createElement("div");
			img.style.position = "relative;"
			var str = data.style;
			//HACER QUE EL CANVAS SEA DEL TAMAÑO DE LA IMAGEN LUEGO.
			img.setAttribute("style", "background-image: url(images/"+ str +"2.jpg); height: 252px; width: 910px");
			
			while (container.firstChild) {
				container.removeChild(container.firstChild);
			}
			container.appendChild(img);
}

function done(){
	alert("Feature not included yet.");
}
