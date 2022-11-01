
class Producto{
    constructor (Cod,Marca,Color,Name,Precio,Cantidad,Img,Status,Total){
        this.Cod = Cod;
        this.Marca = Marca;
        this.Color = Color;
        this.Name = Name;
        this.Precio = Precio;
        this.Cantidad = Cantidad;
        this.Img = Img;
        this.Status = Status;
        this.Total = Total;
    }
}

let Prod = [];


// HARCODEDDDD
Prod[0] = new Producto(1, "Pietro","Varios","Banda elastica Pietro", 2500,1,"img/productos/bandas/bandas-elasticas-goma.png",1,1);
Prod[1] = new Producto(2, "Sonnos","Varios","Banda elastica Sonnos", 3500,1,"img/productos/bandas/bandas-elasticas-goma-sonnos.jpg",1,0);
Prod[2] = new Producto(3, "Ark","Varios", "Banda fuerza tubular Ark", 7500,1,"img/productos/bandas/bandas-fuerza-tubular.jpg",1,0);
Prod[3] = new Producto(4, "Olympia","Naranja","Barra olimpica pesas", 15000,1,"img/productos/barras/barrass.jpg",1,0);
Prod[4] = new Producto(5, "Bozu","Naranja","Bolsa arena levantamiento Bozu", 8000,1,"img/productos/bolsas-arena/bolsa-arena-10k.jpg",1,0);
Prod[5] = new Producto(6, "Nacional","Negro","Bolsa para Box", 7500,1,"img/productos/bolsas-arena/bolsa-boxeo.jpg",1,0);
Prod[6] = new Producto(7, "Nick","Rojo","Bolsa arena levantamiento medialuna Nick", 6500,1,"img/productos/bolsas-arena/bolsa-levantamiento.jpg",1,0);
Prod[7] = new Producto(8, "Nacional","Celeste","Bolsa levantamiento 15 kilos Nacional", 8000,1,"img/productos/bolsas-arena/bolsa-levantamiento-15k.jpg",0,0);
Prod[8] = new Producto(9, "Kikos","Azul","Bolsa arena tobillera 1 kilo Kikos", 4500,1,"img/productos/bolsas-arena/bolsa-pesas-tobillo-1k.jpg",0,0);
Prod[9] = new Producto(10, "Strengh","Negro","Bolsa arena tobillera 1.5 kilos", 5000,1,"img/productos/bolsas-arena/bolsa-piernas.jpg",0,0);
Prod[10] = new Producto(11, "Strengh","Negro","Bolsa arena tobillera 8 kilos Strengh", 7000,1,"img/productos/bolsas-arena/bolsa-tobillera-8k.jpg",0,0);
Prod[11] = new Producto(12, "Sonnos","Celeste","Bolsa tobillera con muñequera 1 kilo Sonnos", 7500,1,"img/productos/bolsas-arena/bolsa-tobillera-munequera-1k.jpg",0,0);
Prod[12] = new Producto(13, "Adidas","Gris","Buzo canguro Adidas", 6500,1,"img/productos/buzos/buzo-canguro-gris.jpg",0,0);
Prod[13] = new Producto(13, "Adidas","Negro","Buzo Adidas", 5500,1,"img/productos/buzos/buzo-adidas-jpg",0,0);
Prod[14] = new Producto(14,  "Riva", "Celeste", "Campera Rompeviento Riva", 15000,1, "img/productos/camperas/campera.jpg",0,0);
Prod[15] = new Producto(15, "Athix","Blanca", "Campera Deportiva Blanca y Roja Athix", 15000,1, "img/productos/camperas/campera-deporte.jpg",0,0);
Prod[16] = new Producto(16, "Slim Fit","Verde", "Campera Rompevientos Slim Fit", 12000,1,"img/productos/camperas/campera-rompevientos.jpg",0,0);
Prod[17] = new Producto(17, "Raven","Verde", "Campera rompeviento Hombre Raven", 7500,1,"img/productos/camperas/rompeviento-de-hombre-running-dryfit.jpg",0,0);
Prod[18] = new Producto(18, "Strengh","Negro", "Chaleco para lastre Strengh", 6500,1,"img/productos/chalecos/chaleco-lastre.jpg",0,0);
Prod[19] = new Producto(19, "Adidas","Gris", "Colchoneta Adidas", 3500,1,"img/productos/colchonetas/colchoneta-adidas.jpg",0,0);
Prod[20] = new Producto(20, "Sonnos","Varios", "Colchoneta alta densidad Sonnos", 4500,1,"img/productos/colchonetas/colchoneta-high-density.jpg",0,0);
Prod[21] = new Producto(21, "Sonnos","Varios", "Colchoneta de silicona Sonnos", 7500,1,"img/productos/colchonetas/Colchoneta-silicona.jpg",0,0);
Prod[22] = new Producto(22, "Mandala","Violeta", "Colchoneta para yoga Mandala", 6700,1,"img/productos/colchonetas/colchoneta-yoga.jpg",0,0);
Prod[23] = new Producto(23, "Nike","Gris", "conjunto deportivo Hombre Nike", 10000,1,"img/productos/conjuntos/conjunto-hobre-gris-dryfit.jpg",0,0);
Prod[24] = new Producto(24, "Puma","Gris","Conjunto deportivo mujer Puma", 7500,1,"img/productos/conjuntos/conjunto-mujer-gris.jpg",0,0);
Prod[25] = new Producto(25, "Adidas","Negro", "Conjunto Rompeviento mujer Adidas", 1900,1,"img/productos/conjuntos/conjunto-mujer-negro-rompeviento.jpg",0,0);
Prod[26] = new Producto(26, "Puma","Bordo", "conjunto Mujer Top gimnasio Puma", 10900,1,"img/productos/conjuntos/conjunto-mujer-top-gimnasio.jpg",0,0);
Prod[27] = new Producto(27, "Nike","Azul", "Conjunto mujer workout Nike", 9000,1,"img/productos/conjuntos/conjunto-mujer-workout.jpg",0,0);
Prod[28] = new Producto(28, "Strengh","Negra", "Cuerda para ejercitar espalda Strengh", 5900,1,"img/productos/cuerdas/cuerda-espalda.jpg",0,0);
Prod[29] = new Producto(29, "Nacional","Negro", "Discos metalicos para 10 kilos Nacional", 6000,1,"img/productos/discos/discos-10k.jpg",0,0);
Prod[30] = new Producto(30, "Strengh","Gris", "Discos metalis con agarre varios pesos Strengh", 7000,1,"img/productos/discos/discos-metalicos.jpg",0,0);

/*
Prod[31] = new Producto(31, "Sonnos","Negro", "Discos metalicos olimpicos varios pesos Sonnos", 6500,80,"img/productos/discos/discos-pesas-metalicos.jpg");
Prod[32] = new Producto(32, "Sonnos","Varios", "Guantes para barras Sonnos", 2300,50,"img/productos/guantes/guantes-Carbon-Hand.jpg");
Prod[33] = new Producto(33, "Raven","Negro", "Guantes para levantamiento de pesas Raven", 2000,50,"img/productos/guantes/guantes-gmr-gloves.jpg");
Prod[34] = new Producto(34, "Raven","Negro", "Guante levantamiento para levantamiento de pesas reforzado Raven", 1500,30,"img/productos/guantes/guantes-levantamiento.jpg");
Prod[35] = new Producto(35, "Sonnos", "Negro","Guante Para mancuernas Sonnos", 2600,30,"img/productos/guantes/guantes-mid-finger.jpg");
Prod[36] = new Producto(36, "Raven","Rosa", "Guantes Para pesas Raven", 1900,30,"img/productos/guantes/guantes.sailliqui.jpg");
Prod[37] = new Producto(37, "Vorterix","Negro", "Guentes para barras Vorterix", 3000,60,"img/productos/guantes/guantes-vorterix.jpg");
Prod[38] = new Producto(38, "Sonnos","Varios", "Pesas rusas varios kilos Sonnos", 4900,40,"img/productos/kettebelt/training-box.jpg");
Prod[39] = new Producto(39, "Strengh","Varios", "Pesas rusas varios tamaños Strengh", 5900,40,"img/productos/kettebelt/training-pesas-rusas.jpg");
Prod[40] = new Producto(40, "Austral","Varios", "Libro de entrenamiento funcional Austral", 7900,20,"img/productos/libros/libro-anatomia-entrenamiento.jpg");
Prod[41] = new Producto(41, "Austral","Varios", "Libro Como entrenar el CORE Austral", 6900,20,"img/productos/libros/libro-core-training.jpg");
Prod[42] = new Producto(42, "Vegueta","Varios", "Libro de entrenamiento personal Vegueta", 6800,25,"img/productos/libros/libro-entrenamiento-personal.jpg");
Prod[42] = new Producto(43, "Austral","Varios", "Libro La verdad sobre el Fitness Austral", 9000,20,"img/productos/libros/libro-fitness-toda-la-verdad.jpg");
Prod[44] = new Producto(44, "Austral","Varios", "Libro Todo lo que hay que saber sobre entrenamiento HIIT Austral", 7300,17,"img/productos/libros/libro-HIIT-training.jpg");
Prod[45] = new Producto(45, "Vegueta","Varios", "Libro Perfeccionando el entrenamiento Vegueta", 8000,10,"img/productos/libros/libro-perfeccionamiento.jpg");
Prod[46] = new Producto(46, "Sonnos","Varios", "Mancuernas de arena 5 kilos Sonnos", 3200,50,"img/productos/mancuernas/mancuernas-arena-5-kilos.jpg");
Prod[47] = new Producto(47, "Sonnos", "Varios","Mancuernas para arena 7 kilos Sonnos", 4000,60,"img/productos/mancuernas/mancuernas-arena-7-kilos.jpg");
Prod[48] = new Producto(48, "Strengh","Gris", "Mancuernas Engomadas 1 kilo Strengh", 5900,50,"img/productos/mancuernas/mancuernas-arena-7-kilos.jpg");
Prod[49] = new Producto(49, "Strengh", "Negro","Mancuernas Engomadas metalicas 10 kilos Strengh",15900,45,"img/productos/mancuernas/mancuernas-goma-15kg.jpg");
Prod[50] = new Producto(50, "Sonnos","Varios", "Mancuernas Goma 1 kilo y medio Sonnos", 6900,20,"img/productos/mancuernas/mancuernas-goma-chicas.jpg");
Prod[51] = new Producto(51, "Strengh","Negro", "Mancuernas metalicas con discos 7 kilos Strengh", 19200,39,"img/productos/mancuernas/mancuernas-metalicas.jpg");
Prod[52] = new Producto(52, "Nacional","Negro", "Mancuernas metalicas 5 kilos Nacional", 4900,38,"img/productos/mancuernas/mancuernas-metalicas-1k.jpg");
Prod[53] = new Producto(53, "Sonnos","Negro", "Mancuernas plasticas para arena Varios pesos Sonnos", 9900,40,"img/productos/mancuernas/mancuernas-plasticas-arena.jpg");
Prod[54] = new Producto(54, "Olympia","Negro", "Mancuernas Engomadas 15 kilos Olympia", 23000,55,"img/productos/mancuernas/mancuernas-redondas-goma-7k.jpg");
Prod[55] = new Producto(51, "Olympia","Negro", "Mancuernas Metalicas engomadas Varios pesos regulable Olympia", 30000,40,"img/productos/mancuernas/mancuernas-regulables.jpg");
Prod[56] = new Producto(56, "suplementos", "batidos", 5900,100,"img/productos/medias/medias-compresion.jpg");
Prod[57] = new Producto(57, "suplementos", "batidos", 5900,80,"img/productos/medias/medias-compresion-running.jpg");
/*
Prod[58] = new Producto('58', "suplementos", "batidos", 5900);
Prod[59] = new Producto('59', "suplementos", "batidos", 5900);
Prod[60] = new Producto('60', "suplementos", "batidos", 5900),
Prod[61] = new Producto('61', "suplementos", "batidos", 5900);
Prod[62] = new Producto('62', "suplementos", "batidos", 5900);
Prod[63] = new Producto('63', "suplementos", "batidos", 5900);
Prod[64] = new Producto('64', "suplementos", "batidos", 5900);
Prod[65] = new Producto('65', "suplementos", "batidos", 5900);
Prod[66] = new Producto('66', "suplementos", "batidos", 5900);
Prod[67] = new Producto('67', "suplementos", "batidos", 5900);
Prod[68] = new Producto('68', "suplementos", "batidos", 5900);
Prod[69] = new Producto('69', "suplementos", "batidos", 5900);
Prod[70] = new Producto('70', "suplementos", "batidos", 5900);
Prod[71] = new Producto('71', "suplementos", "batidos", 5900);
Prod[72] = new Producto('72', "suplementos", "batidos", 5900);
Prod[73] = new Producto('73', "suplementos", "batidos", 5900);
Prod[74] = new Producto('74', "suplementos", "batidos", 5900);
Prod[75] = new Producto('75', "suplementos", "batidos", 5900);
Prod[76] = new Producto('76', "suplementos", "batidos", 5900);
Prod[77] = new Producto('77', "suplementos", "batidos", 5900),
Prod[78] = new Producto('78', "suplementos", "batidos", 5900);
Prod[79] = new Producto('79', "suplementos", "batidos", 5900);
Prod[80] = new Producto('80', "suplementos", "batidos", 5900);
Prod[81] = new Producto('81', "suplementos", "batidos", 5900);
Prod[82] = new Producto('82', "suplementos", "batidos", 5900);*/