function limpiarPanel(){
			//limpiar panel
			var myNode = document.getElementById("panel_seleccion");
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}
		}
		
		function reset(){
			
			limpiarPanel();
			background();
			
			//Recupero la imagen del prototipo
			var element = document.getElementById("prototype");					
			//Creo la imagen nueva
			var img = document.createElement("img");
			img.setAttribute("src","images/popsicle2.png");
			img.setAttribute("alt","diseño_prototipo");	
			//Reemplazo por la imagen anterior		
			element.src = "images/popsicle2.jpg";
		}
		
		function selected(index){
			var str = "images/diseño"+index+"_selected.jpg";
			
			//Recupero la imagen del prototipo
			var element = document.getElementById("prototype");					
			//Creo la imagen nueva
			var img = document.createElement("img");
			img.setAttribute("src",str);
			img.setAttribute("alt","diseño_prototipo");	
			//Reemplazo por la imagen anterior		
			element.src = str;			
		}
		
		function background() {
			
			limpiarPanel();
			
			//crear tags	
			var newElement = document.createElement('div');
			newElement.setAttribute("id","div1");
			newElement.setAttribute("style","height:250px;width:auto;border:1px solid #ccc;font:16px/26px Georgia, Garamond, Serif;overflow:auto;");
			
			//agregar div1 al panel
			var p = document.getElementById('panel_seleccion');
			p.appendChild(newElement);
			
			//creo y cargo las imagenes en el panel
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño1.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(1)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");			
			p.firstChild.appendChild(img);

			var img = document.createElement("img");
			img.setAttribute("src","images/diseño2.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(2)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);

			var img = document.createElement("img");
			img.setAttribute("src","images/diseño3.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(3)");	
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");			
			p.firstChild.appendChild(img);		

			var img = document.createElement("img");
			img.setAttribute("src","images/diseño4.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(4)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño5.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(5)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño4.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(4)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño1.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(1)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño2.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(2)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño5.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(5)");		
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño4.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(4)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño3.png");
			img.setAttribute("alt","diseño");
			img.setAttribute("onclick","selected(3)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño4.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(4)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño5.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(5)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño3.png");
			img.setAttribute("alt","diseño");		
			img.setAttribute("onclick","selected(3)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);		
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño2.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(2)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);
			
			var img = document.createElement("img");
			img.setAttribute("src","images/diseño1.png");
			img.setAttribute("alt","diseño");	
			img.setAttribute("onclick","selected(1)");
			img.setAttribute("onmouseover", "");
			img.setAttribute("style", "cursor: pointer");
			p.firstChild.appendChild(img);				
		}
		
		function addImage(){
			limpiarPanel();
		}
		
		function addText(){
			limpiarPanel();
			
			var content = document.getElementById("panel_seleccion");
			
			var txt = document.createElement("textarea");
			txt.setAttribute("style","resize:none");
			txt.setAttribute("rows","2");
			txt.setAttribute("cols","50");
			txt.setAttribute("maxlength","25");
			txt.setAttribute("placeholder","Enter your text here");
		
			content.appendChild(txt);
			
			var btn = document.createElement("button");
			btn.setAttribute("onclick", "ingresar_texto()");
			btn.setAttribute("id","btn1");	
			btn.innerHTML = "Ingresar";
			content.appendChild(btn);	
		}
		
		function ingresar_texto(){
			alert("texto");
		}
		
		window.onload = function(){
			background();
		};