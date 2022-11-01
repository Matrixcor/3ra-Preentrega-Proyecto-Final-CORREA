let Carrito = [];
let ProDesta = [];
//busca productos destacados

ProDesta = Prod.filter(Prod => Prod.Status == 1);

Muestra_Producto(ProDesta);

function Muestra_Producto(ProDesta){ //card
    const Container = document.querySelector("#Seccion")
    Container.innerHTML = "";
    ProDesta.forEach(Prod => {  //ver msj cuando no haya productos destacados
        let BoxDesta = document.createElement('div');
        BoxDesta.setAttribute('class','col');
        BoxDesta.setAttribute('id','card_'+Prod.Cod);
        BoxDesta.innerHTML = `
            <div class="card Animacion">
                <img src= "./${Prod.Img}"></img>
                <div class="card-body">
                    <h3 class="card__titulo"> ${Prod.Name} </h3>
                </div>
                <p class="item-price">$ ${Prod.Precio}</p>
                <a href="javascript:IncorporaCarrito(${Prod.Cod},carrito)" class="btn card__boton bg-info">Comprar</a>
            </div>           
          `;
        Container.appendChild(BoxDesta);
        });
};

//capturo productos desde el html, con eventos

function Busca_Productos(q) { 
    let resultado = [];
    if(q!= ""){
        resultado = Prod.filter( Prod => Prod.Name.includes(q)); 
    }else{
        resultado = Prod;
    }
    Muestra_Producto(resultado);
}

function IncorporaCarrito(Cod,carrito){
    let Existe = carrito.some( Prod => Prod.Cod === Cod );
    if (Existe){
        const Items = carrito.map( Prod => {
        if(Prod.Cod === Cod)
        {
            Prod.Cantidad++;
            return Prod;            //debo colocar el total
        }else
        {
            return Prod;
        }
        });
    }else{
        carrito.push( Prod.find(Prod => Prod.Cod == Cod));
    }
    Toastify({
        text: "Se actualizo la cantidad del producto",
        duration: 2000,
        gravity: 'bottom'
    }).showToast();
    //console.log(carrito.lenght);
    total(carrito);
    Muestra_Carrito(carrito);
};

function EliminaItems(Cod,carrito){
    console.log("Funcion elimina item");
    let Produc = Prod.find(Prod => Prod.Cod == Cod);

    if(Produc.Cantidad >1){
        const Items = carrito.map( prod => {
            if(prod.Cod === Cod )
            {
                console.log("mayor que 1");
                prod.Cantidad--;
                return prod;
            } 
        });
       // console.log(Items.Cantidad);
    }else{
        for(var k=0; k < carrito.length; k++){
            if(carrito[k].Cod === Produc.Cod){
                carrito.splice(k,1)
            }
        }
       
        Toastify({
            text: "Se ha eliminado el producto",
            duration: 2000,
            gravity: 'bottom'

        }).showToast();
    }
   // carrito.forEach((Prod) => { console.log(Prod)});
    Muestra_Carrito(carrito);
    //registroCarrito();
};

function Muestra_Carrito(carrito){
    const Container = document.querySelector("#cuerpocarrito")
    Container.innerHTML = "";
    carrito.forEach(Prod => {
        let BoxCarrito = document.createElement('div');
        BoxCarrito.setAttribute('class','row');
        BoxCarrito.setAttribute('id','card_'+Prod.Cod);
        BoxCarrito.innerHTML = `
        <div>
            <div class="col-4 d-flex w-25 align-items-center justify-content-start p-2 border-bottom">
                <img src= "./${Prod.Img}"></img>
                <h3 class="card__titulo"> ${Prod.Name} </h3>
            </div> 
            <div class="col-4 d-flex w-75 align-items-center justify-content-start p-2 border-bottom">
                <p class="item-price p-2">$ ${Prod.Precio} </p>
                <p class="item-price p-2"> Cantidad: ${Prod.Cantidad}</p>
            </div>
            </div class="col-4 d-flex w-75 align-items-center justify-content-start p-2 border-bottom" >  
                <p> <b> Total a pagar: ${Prod.Total}</b> </p>
                <a href="javascript:EliminaItems(${Prod.Cod},carrito)" class="btn btn-primary w-25 me-md-1" type="button"> <b>Quitar</b> </a>              
            </div>
            `;
        Container.appendChild(BoxCarrito);
        });
};



function total(carrito){
    let item = [];
    carrito.forEach((Prod) => { Prod.Total+= Prod.Precio;
    
        console.log(Prod.Total);
    
    }); //logre imprimir los numeros. debo ver como manipular esos numeros
};


/* NO PUDE IMPLEMENTAR EL LOCAL STORAGE

carrito.forEach((Prod) => { console.log(Prod)});

const guardarlocal = (clave,valor) =>{ localStorage.setItem(clave,valor)};

for(const carrito of carrito){
    guardarlocal(carrito.Cod,JSON.stringify(carrito));
}*/
/*
function registroCarrito(carrito) { 
    guardarlocal = (Key_carrito,JSON.stringify( carrito ))
    //localStorage.setItem(key_carrito, JSON.stringify( carrito ));
    //localStorage.setItem(key_actualizacion,date);

};*/
