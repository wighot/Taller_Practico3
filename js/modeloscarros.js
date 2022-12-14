function iniciar(){
    var select = document.getElementById("selfab");
    var button = document.getElementById("enviar");
    
    if(select.addEventListener){
        select.addEventListener("change", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmcar.selmod);
            }, false);
        }
        else{
            select.attachEvent("onchange", function(){
                addOptions(marcas[this.options[this.selectedIndex].text],
                    document.frmcar.selmod);
                });
            }
            if(button.addEventListener){
                button.addEventListener("click", function(){
                    var seleccion = showRadioSelected(document.frmcar.radcolor);
                    carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value,
                        seleccion, document.frmcar.txtanio.value , document.frmcar.placa.value , document.frmcar.nombre.value , document.frmcar.dui.value , document.frmcar.nit.value);
                        carro.mostrar();
                    }, false);
                }
                else{
                    button.attachEvent("onclik", function(){
                        var seleccion = showRadioSelected(document.frmcar.radcolor);
                        carro.pedido(document.frmcar.selfab.value, document.frmcar.selmod.value,
                            seleccion, document.frmcar.txtanio.value , document.frmcar.placa.value, document.frmcar.nombre.value , document.frmcar.duui.value , document.frmcar.nit.value);
                            carro.mostrar();
                        });
                    }
                }
                //Inicializando matriz para manejar las marcas y sus respectivos modelos
                var marcas = new Array(7);
                marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4Runner", "Hilux"];
                marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder","Patrol", "X-Trail", "Frontier"];
                marcas["Hyundai"] = ["Elantra", "Accent", "Coup??", "Santa Fe", "i30"];
                marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg","Saveiro"];
                marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy","Avalanche", "Trailblazer"];
                marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot","RidgeLine"];
                
                //constructor Object()
                var carro = new Object();
                //Propiedades del objeto
                carro.nom = "";
                carro.fabricante = "";
                carro.modelo = "";
                carro.color = "";
                carro.anio = "";
                carro.plac = "";
                carro.nit ="";
                carro.dui ="";
                //M??todos del objeto
                carro.pedido = function(fab, mod, col, an, pla, nm, dd, n){
                    carro.fabricante = fab;
                    carro.modelo = mod;
                    carro.color = col;
                    carro.anio = an;
                    carro.plac = pla;
                    carro.nom = nm;
                    carro.dui = dd;
                    carro.nit = n;
                }
                carro.mostrar = function(){
                    var tabla = "";
                    var info = document.getElementById('infocarro');
                    tabla += "<table class=\"carinfo\">\n";
                    tabla += "<thead>\n\t<tr>\n";
                    tabla += "\t\t<th colspan=\"2\">Datos de informaci??n</th>\n";
                    tabla += "\t</tr>\n</thead>\n";
                    tabla += "<tbody>\n\t";
                    tabla += "\t<tr>\n\t\t<td>Nombre: </td>\n";
                    tabla += "\t\t<td>" + carro.nom + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>DUI: </td>\n";
                    tabla += "\t\t<td>" + carro.dui + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>NIT: </td>\n";
                    tabla += "\t\t<td>" + carro.nit + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>Marca: </td>\n";
                    tabla += "\t\t<td>" + carro.fabricante + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>Modelo: </td>\n";
                    tabla += "\t\t<td>" + carro.modelo + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>Color: </td>\n";
                    tabla += "\t\t<td>" + carro.color + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>A??o: </td>\n";
                    tabla += "\t\t<td>" + carro.anio + "</td>\n\t</tr>\n";
                    tabla += "\t<tr>\n\t\t<td>Placa: </td>\n";
                    tabla += "\t\t<td>" + carro.plac + "</td>\n\t</tr>\n";
                    tabla += "\t</tbody>\n</table>\n";
                    info.innerHTML = tabla;
                    }
                    function showRadioSelected(radiogroup){
                    var seleccionado;
                    var numradios = radiogroup.length;
                    for(var i=0; i<numradios; i++){
                    if(radiogroup[i].checked){
                    seleccionado = radiogroup[i].value;
                    }
                    }
                    return seleccionado;
                    }
                    function removeOptions(optionMenu){
                    for(i=0; i<optionMenu.options.length; i++){
                    optionMenu.options[i] = null;
                    }
                    }
                    function addOptions(optionList, optionMenu){
                    var i=0;
                    removeOptions(optionMenu); //Limpia las opciones
                    for(i=0; i<optionList.length; i++){
                    optionMenu[i] = new Option(optionList[i], optionList[i]);
                    }
                    }
                    //Asociando funci??n que manejar?? el evento load al cargar la p??gina
                    if(window.addEventListener){
                    window.addEventListener("load", iniciar, false);
                    }
                    else if(window.attachEvent){
                    window.attachEvent("onload", iniciar);
                    }
