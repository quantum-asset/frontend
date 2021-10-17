import {
  ACTIVO_MOCK,
  AREA_RESPONSABLE_MOCK,
  EVIDENCIA_MOCK,
  FOTO_MOCK,
  LOCACION_MOCK,
  PERMISO_MOCK,
  ROL_MOCK,
  TAG_MOCK,
  TIPO_ACTIVO_MOCK,
  TIPO_LOCACION_MOCK,
  TOMA_INVENTARIO_MOCK,
  TRAZABILIDAD_MOCK,
  USUARIO_MOCK,
  USUARIO_X_PERMISO_MOCK,
  NECESIDAD_TAG_MOCK
} from "./MOCK";
import { TOMA_INVENTARIO_X_LOCACION_MOCK } from "./MOCK/TOMA_INVENTARIO_X_LOCACION";
import { TOMA_INVENTARIO_X_LOCACION_X_ACTIVO } from "./MOCK/TOMA_INVENTARIO_X_LOCACION_X_ACTIVO";
import { TRANSACCION_MOCK } from "./MOCK/TRANSACCION";
import { USUARIO_X_TOMA_INVENTARIO_MOCK } from "./MOCK/USUARIO_X_TOMA_INVENTARIO";

export const createListOfTipoLocacion = () => {
  return [
    TIPO_LOCACION_MOCK(1, "Estación de servicio"),
    TIPO_LOCACION_MOCK(2, "Tienda de conveniencia"),
    TIPO_LOCACION_MOCK(3, "Terceros"),
  ];
};
export const createListOfLocacion = () => {
  return [
    LOCACION_MOCK(1,1,"PETROMEX-EDS SANTA CATALINA","HVH7+M7M, Chincha Alta 11702","GNV-GLP-G90-G95-DB5",1),
    LOCACION_MOCK(2,1,"PETROMEX-EDS NEOGAS","P523+49F, Lurín 15823","GNV",1),
    LOCACION_MOCK(3,1,"EDS PETROMEX- PACHACAMAC","P4R7+6WX, Lurín 15823","GNV-GLP-G90-G95-DB5",1),
    LOCACION_MOCK(4,1,"PETROMEX-EDS CARBURANTES","Ovalo '' Maria Reiche - Lima '', Av. Lima, Villa EL Salvador 15841","GNV-GLP-G90-G95-DB5",1),
    LOCACION_MOCK(5,1,"PETROMEX-EDS LUISAGAS","Av. Mariano Pastor Sevilla 1500, San Juan de Miraflores 15829","GNV",1),
    LOCACION_MOCK(6,2,"MARKET-LA ENCANTADA","Alameda Los Horizontes 1070, Chorrillos 15067+51 957 644 682","-",1),
    LOCACION_MOCK(7,1,"PETROMEX-EDS CHORRILLOS","Av. Guardia Civil Sur 23, Chorrillos 15056","GNV-GLP-G90-G95-DB5",1),
    //LOCACION_MOCK(8,1,"PETROMEX-EDS EL SOL","Av. Los Condores, Chorrillos 15056","GNV",1),
    // LOCACION_MOCK(9,1,"PETROMEX-EDS GASURCO","Ca. Doña Mercedes & Av. Guardia Civil Sur, Chorrillos 15056","GNV",1),
    // LOCACION_MOCK(10,1,"PETROMEX-EDS GANAGAS","Av Los Proceres, Santiago de Surco 15056+51 1 2025432","GNV",1),
    // LOCACION_MOCK(11,2,"MARKET-ANGAMOS","Av. Angamos 1778, Surquillo 15048","-",1),
    // LOCACION_MOCK(12,1,"PETROMEX-EDS MASUR","Av República de Panamá esq Salaverry Surquillo Perú, Surquillo 15048","GNV",1),
    // LOCACION_MOCK(13,1,"PETROMEX-EDS SAN LUIS","Av. San Juan 855, San Luis 15021","G90-G95-G97-DB5",1),
    // LOCACION_MOCK(14,1,"PETROMEX-EDS BOLIVAR","Gasolinera Aba Singer, Av. Simón Bolivar 496, Pueblo Libre 15084","GNV-GLP-G90-G95-G97-DB5",1),
    // LOCACION_MOCK(15,1,"PETROMEX-EDS LUNA PIZARRO","Jirón Hipólito Unanue 457, La Victoria 1533","GNV",1),
    // LOCACION_MOCK(16,1,"PETROMEX-EDS PETIT THOUARS","Av. Petit Thouars 114, Cercado de Lima 15046","GNV-GLP-G90-G95-G97-DB5",1),
    // LOCACION_MOCK(17,1,"PETROMEX-EDS ATE","204, La Victoria 15019","GNV-G90-G95-DB5",1),
    // LOCACION_MOCK(18,1,"PETROMEX 28 JULIO","Avenida 28 de Julio & Parinacochas, La Victoria 15018","GNV-GLP-G90-G95-DB5",1),
    // LOCACION_MOCK(19,1,"PETROMEX-EDS SHALOM","Alemania, Cercado de Lima 15082","GNV",1),
    // LOCACION_MOCK(20,1,"PETROMEX-EDS GRIFOSA","Av Colonial 2398, Cercado de Lima 15081","GNV",1),
    // LOCACION_MOCK(21,1,"PETROMEX-EDS SALOMON","Av. Universitaria 498, Cercado de Lima 15081","GNV-GLP",1),
    // LOCACION_MOCK(22,1,"PETROMEX-EDS MONACO","Esq, Av. Nicolás Dueñas y, Cercado de Lima 15081","GNV-GLP-G90-G95-G97-DB5",1),
    // LOCACION_MOCK(23,1,"PETROMEX-EDS ZÁRATE","Las Mercedes, San Juan de Lurigancho 15401","GNV",1),
    // LOCACION_MOCK(24,1,"PETROMEX-EDS PRIALÉ","Au. Ramiro Prialé 11, Lurigancho-Chosica 15457","GNV",1),
    // LOCACION_MOCK(25,2,"MARKET-NARANJAL","y, Av. Naranjal, Los Olivos 15304","-",1),
    // LOCACION_MOCK(26,1,"PETROMEX-EDS UNIVERSITARIA","Av. Antunez de Mayolo 1650, Lima 15301","GNV",1),
    // LOCACION_MOCK(27,1,"PETROMEX-EDS ECOMOVIL","Av. Alfredo Mendiola 6599, Los Olivos 15307","GNV-GLP-G90-G95-DB5",1),
    // LOCACION_MOCK(28,2,"MARKET-SANTA CRUZ","MARKET - Comas, Av. Los Incas, Comas 15316","-",1),
    // LOCACION_MOCK(1000,3,"Servicos de control de activos S.A.","Av. Bolivar 2150 - pueblo Libre","Servicio de control de activos tercerizado",1),
  ];
};

export const createListOfRol = () => {
  return [
    ROL_MOCK(
      1,
      "Encargado de control de activos",
      "Encargado del seguiminto y gestión de activos fijos, incluyendo las tomas de inventario"
    ),
    ROL_MOCK(
      2,
      "Encargado de Reistro de activos",
      "Encargado del registro de nuevos activos fijos en los procesos de compra y de solicitud de tags"
    ),
    ROL_MOCK(
      3,
      "Encargado de Toma de Activos",
      "Encargado del registro y toma de inventarios"
    ),
  ];
};

export const createListOfUsuario =()=>{
  return [
    USUARIO_MOCK(1,1,1,1,"miguel.valente@kamui.com","1234567","Miguel","Valente","Juarez","DNI","15350696",new Date(),new Date(),1),
    USUARIO_MOCK(2,2,2,2,"camila.molfese@kamui.com","1234567","Camila","Molfese","Aguilar","DNI","23204150",new Date(),new Date(),1),
    USUARIO_MOCK(3,2,3,2,"Helena.Grisky@kamui.com","1234567","Helena","Grisky","","DNI","433213",new Date(),new Date(),1),
    USUARIO_MOCK(4,2,4,2,"Rafael.Palmer@kamui.com","1234567","Rafael","Palmer","Corrado","DNI","23655129",new Date(),new Date(),1),
    USUARIO_MOCK(5,3,5,2,"Francisco.Ibarra@kamui.com","1234567","Francisco","Ibarra","Melendez","DNI","19980186",new Date(),new Date(),1),
    USUARIO_MOCK(6,3,6,2,"Juan.Lopez@kamui.com","1234567","Juan","Lopez","","RUC","20525426778",new Date(),new Date(),1),
    USUARIO_MOCK(7,1000,7,3,"Violetta.Castillo@kamui.com","1234567","Violetta","Castillo","Saramego","DNI","72870798",new Date(),new Date(),1),
    USUARIO_MOCK(8,2,8,2,"Pedro.Hernández@kamui.com","1234567","Pedro","Hernández","Ramirez","DNI","25545029",new Date(),new Date(),1),
    USUARIO_MOCK(9,1000,9,3,"Sara.Gonzales@kamui.com","1234567","Sara","Gonzales","","DNI","7378091",new Date(),new Date(),1),
    USUARIO_MOCK(10,4,10,2,"Victoria.Romero@kamui.com","1234567","Victoria","Romero","Cruz","DNI","18868983",new Date(),new Date(),1),
    USUARIO_MOCK(11,4,11,2,"Amalia.Acevedo@kamui.com","1234567","Amalia","Acevedo","Flores","DNI","20544152",new Date(),new Date(),1),
    USUARIO_MOCK(12,4,12,2,"Emilia.Galván@kamui.com","1234567","Emilia","Galván","","DNI","2823214",new Date(),new Date(),1),
    USUARIO_MOCK(13,1000,13,3,"Aida.Sandoval@kamui.com","1234567","Aida","Sandoval","","DNI","525753",new Date(),new Date(),1),
    USUARIO_MOCK(14,1000,14,3,"Beatriz.Urquiza@kamui.com","1234567","Beatriz","Urquiza","Souza","RUC","20538856674",new Date(),new Date(),1),
    USUARIO_MOCK(15,3,15,2,"Armando.Aguilar@kamui.com","1234567","Armando","Aguilar","","DNI","25548372",new Date(),new Date(),1),
    USUARIO_MOCK(16,3,16,2,"Ernesto.Rey@kamui.com","1234567","Ernesto","Rey","","DNI","19955154",new Date(),new Date(),1),
    USUARIO_MOCK(17,3,17,2,"Delia.Vallejos@kamui.com","1234567","Delia","Vallejos","","DNI","1981833",new Date(),new Date(),1),
    USUARIO_MOCK(18,3,18,2,"Jose Maria.Arguedas@kamui.com","1234567","Jose Maria","Arguedas","","DNI","25410202",new Date(),new Date(),1),
    USUARIO_MOCK(19,2,19,2,"Silvy.Alvarez@kamui.com","1234567","Silvy","Alvarez","","RUC","20553856451",new Date(),new Date(),1),
    USUARIO_MOCK(20,1,20,2,"Sol.Benzon@kamui.com","1234567","Sol","Benzon","","DNI","20667691",new Date(),new Date(),1),
  ]
}
export const createListOfTransaccion=()=>{
  return[
    TRANSACCION_MOCK(1,"registrar",),
    TRANSACCION_MOCK(2,"modificar",),
    TRANSACCION_MOCK(3,"eliminar",),
    TRANSACCION_MOCK(4,"ver",),

  ]
}
export const createListOfPermiso=()=>{
  return[
    PERMISO_MOCK(1,"gestionar activos",1),
    PERMISO_MOCK(2,"tomar inventario",1),
    PERMISO_MOCK(3,"generar reportes",1),
    PERMISO_MOCK(4,"registrar nuevos activos",1),
    PERMISO_MOCK(5,"ver activos",1),
  ]
}

export const createListOfTrazabilidad=()=>{
  return[
    TRAZABILIDAD_MOCK(1,1,new Date(2020,15,3),"registro de usuario",),
    TRAZABILIDAD_MOCK(1,2,new Date(2020,15,3),"modificación de usuario",),
    TRAZABILIDAD_MOCK(2,1,new Date(2020,15,3),"registrode nuevo activo",),
    TRAZABILIDAD_MOCK(3,1,new Date(2020,15,3),"registrode nuevo activo",),
    TRAZABILIDAD_MOCK(7,1,new Date(2020,15,3),"Registro de toma de inventario",),
    TRAZABILIDAD_MOCK(9,1,new Date(2020,15,3),"Registro de toma de inventario",),
    TRAZABILIDAD_MOCK(12,4,new Date(2020,15,3),"Registro de nuevo activo",),
    TRAZABILIDAD_MOCK(13,1,new Date(2020,15,3),"Registro de toma de inventario",),
    TRAZABILIDAD_MOCK(14,1,new Date(2020,15,3),"Registro de toma de inventario",),
    TRAZABILIDAD_MOCK(15,3,new Date(2020,15,3),"Generación de reporte de activoss por locacion",),

  ]
}

export const createListOfUsuarioXPermiso=()=>{
  return[
    USUARIO_X_PERMISO_MOCK(1,1,new Date(2020,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(1,3,null,new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(2,4,new Date(2020,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(3,4,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(4,4,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(5,4,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(6,4,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(7,2,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(8,5,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(9,2,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(10,5,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(11,5,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(12,5,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(13,2,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(14,2,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(15,3,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(16,5,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(17,3,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),0),
    USUARIO_X_PERMISO_MOCK(18,3,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
    USUARIO_X_PERMISO_MOCK(19,3,new Date(2021,10,20),new Date(2020,10,10),new Date(2020,10,9),1),
  ]
}

export const createListOfTag=()=>{
  return[
    TAG_MOCK(1,"2021000001",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(2,"2021000002",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(3,"202100003",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(4,"2021000004",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(5,"2021000005",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(6,"2021000006",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(7,"2021000007",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(8,"2021000008",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(9,"2021000009",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(10,"2021000010",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(11,"2021000011",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(12,"2021000012",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(13,"2021000013",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(14,"2021000014",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(15,"2021000015",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(16,"2021000016",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(17,"2021000017",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(18,"2021000018",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(19,"2021000019",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(20,"2021000020",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(21,"2021000021",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(22,"2021000022",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(23,"2021000023",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(24,"2021000024",1,1,new Date(2020,12,5),new Date(2020,12,25),1,),
    TAG_MOCK(25,"2021000025",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(26,"2021000026",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(27,"2021000027",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(28,"2021000028",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(29,"2021000029",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(30,"202100030",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(31,"202100031",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(32,"202100032",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(33,"202100033",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(34,"202100034",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(35,"202100035",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(36,"202100036",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(37,"202100037",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(38,"202100038",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(39,"202100039",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(40,"2021000040",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(41,"2021000041",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(42,"2021000042",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(43,"2021000043",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(44,"2021000044",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(45,"2021000045",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(46,"2021000046",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(47,"2021000047",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(48,"2021000048",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(49,"2021000049",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(50,"2021000050",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(51,"2021000051",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(52,"2021000052",2,3,new Date(2021,7,1),new Date(2021,7,9),1,),
    TAG_MOCK(53,"2021000053",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(54,"2021000054",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(55,"2021000055",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(56,"2021000056",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(57,"2021000057",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(58,"2021000058",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(59,"2021000059",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(60,"2021000060",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(61,"2021000061",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(62,"2021000062",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(63,"2021000063",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(64,"2021000064",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(65,"2021000065",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(66,"2021000066",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(67,"2021000067",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(68,"2021000068",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(69,"2021000069",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(70,"2021000070",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(71,"2021000071",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(72,"2021000072",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(73,"2021000073",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(74,"2021000074",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(75,"2021000075",3,5,new Date(2021,8,11),new Date(2021,8,31),1,),
    TAG_MOCK(76,"2021000076",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(77,"2021000077",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(78,"2021000078",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(79,"2021000079",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(80,"2021000080",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(81,"2021000081",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(82,"2021000082",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(83,"2021000083",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(84,"2021000084",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(85,"2021000085",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(86,"2021000086",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(87,"2021000087",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(88,"2021000088",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(89,"2021000089",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(90,"2021000090",4,11,new Date(2021,8,11),new Date(2021,9,1),1,),
    TAG_MOCK(91,"2021000091",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(92,"2021000092",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(93,"2021000093",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(94,"2021000094",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(95,"2021000095",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(96,"2021000096",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(97,"2021000097",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(98,"2021000098",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(99,"2021000099",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(100,"2021000100",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(101,"2021000101",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(102,"2021000102",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(13,"202100013",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(104,"2021000104",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(105,"2021000105",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(106,"2021000106",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(107,"2021000107",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(108,"2021000108",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(109,"2021000109",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(110,"2021000110",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(111,"2021000111",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(112,"2021000112",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(113,"2021000113",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(114,"2021000114",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(115,"2021000115",5,20,new Date(2021,9,20),new Date(2021,10,1),1,),
    TAG_MOCK(116,"2021000116",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(117,"2021000117",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(118,"2021000118",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(119,"2021000119",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(120,"2021000120",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(121,"2021000121",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(122,"2021000122",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(123,"2021000123",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(124,"2021000124",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(125,"2021000125",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(126,"2021000126",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(127,"2021000127",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(128,"2021000128",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(129,"2021000129",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(130,"2021000130",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(131,"2021000131",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(132,"2021000132",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(133,"2021000133",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(134,"2021000134",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(135,"2021000135",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(136,"2021000136",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(137,"2021000137",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(138,"2021000138",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(139,"2021000139",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(140,"2021000140",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(141,"2021000141",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(142,"2021000142",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(143,"2021000143",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(144,"2021000144",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(145,"2021000145",5,21,new Date(2021,10,15),null,0,),
    TAG_MOCK(146,"2021000145",5,21,new Date(2021,10,15),null,1,),

  ]
}

export const createListOfAreaResponsable = () => {
  return [
    AREA_RESPONSABLE_MOCK(1, "TI"),
    AREA_RESPONSABLE_MOCK(2, "Contabilidad"),
    AREA_RESPONSABLE_MOCK(3, "Comercial"),
    AREA_RESPONSABLE_MOCK(4, "Recursos Humanos"),
    AREA_RESPONSABLE_MOCK(5, "Logística"),
  ];
};

export const createListOfTipoActivo = () => {
  return [
    TIPO_ACTIVO_MOCK(1, "TI o Equipos informáticos"),
    TIPO_ACTIVO_MOCK(2, "Repuestos"),
    TIPO_ACTIVO_MOCK(3, "Maquinaria y equipo de combustible"),
    TIPO_ACTIVO_MOCK(4, "Mobiliario y enseres"),
  ];
};

export const createListOfActivo=()=>{
  return[
    ACTIVO_MOCK(1,1,1,1,1,1,"Smarthphone","Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","CTFVYG-VTY-VYB-0001","Phantom black","Galaxy S21 +; SM-G996U1","Samsung","4500","555089","481656562","1022295110","SAMTRONICS S.A","TI",new Date(2020,10,20),new Date(2020,10,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(2,2,2,1,1,1,"Smarthphone","Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","Sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","CTFVYG-VTY-VYB-0002","Phantom black","Galaxy S21 +; SM-G996U2","Samsung","4501","555089","481656562","1022295110","SAMTRONICS S.A","TI",new Date(2020,10,20),new Date(2020,10,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(3,3,3,1,1,1,"Smarthphone","Pantalla: 6,7 pulgadas;    Resolución: 2.400 x 1.080 píxeles;    Tasa de actualización máxima: 120 Hz;    Procesador: Exynos 2100;    RAM: 8GB;    Almacenamiento: 256 GB;    MicroSD: no;    Cámaras principales: 12 megapíxeles(f/1.8) + gran angular 12 megapíxeles (f/2.2) + telefoto 64 megapíxeles (f/2.0) con zoom óptico híbrido 3x y zoom digital hasta de 30x;    Cámara frontal: 10 megapíxeles;   Resistencia al agua: sí, con la certificación IP68;    Batería: 4.800m Ah;    Carga inalámbrica: sí;    Carga inalámbrica reversible: sí;    Carga rápida: 25 vatios (25W);    Sistema operativo: Android 11;    5G: sí, mmWave y Sub-6;    Lector de huellas: sí, en la pantalla;","El dispositivo tiene una lijera rayadura en el vborde superior izquierdo de la pantalla; sin conector de audífonos de 3,5 mm, UWB, NFC (sin MST), pantalla planta y no trae cargador ni audífonos en la caja","CTFVYG-VTY-VYB-003","Phantom black","Galaxy S21 +; SM-G996U3","Samsung","4502","555089","481656562","1022295110","SAMTRONICS S.A","TI",new Date(2020,10,20),new Date(2020,10,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(4,4,4,1,1,1,"Laptop","Procesador Intel Core i7-2670M 2.2GHz (3.1GHz c/TB); memoria RAM de 4GB DDR3; Sistema operativo Windows 11 proffessional; Disco duro: 750GB 5400RPM: Incluye cargador.","-","LN00215","Negro","IdeaPad Z570 (59313181)","Lenovo","6345.35","7555010","235598416","1022295110","LENOVO GLOBAL TECHNOLOGY","TI",new Date(2020,25,20),new Date(2020,25,20),new Date(2020,25,20),1),
    ACTIVO_MOCK(5,5,5,1,1,1,"Laptop","Procesador Intel Core i7-2670M 2.2GHz (3.1GHz c/TB); memoria RAM de 4GB DDR3; Sistema operativo Windows 11 proffessional; Disco duro: 750GB 5400RPM: Incluye cargador.","-","LN00216","Negro","IdeaPad Z570 (59313181)","Lenovo","6345.35","7555010","235598416","1022295110","LENOVO GLOBAL TECHNOLOGY","TI",new Date(2020,25,20),new Date(2020,25,20),new Date(2020,25,20),1),
    ACTIVO_MOCK(6,6,6,1,1,1,"Laptop","Procesador Intel Core i7-2670M 2.2GHz (3.1GHz c/TB); memoria RAM de 4GB DDR3; Sistema operativo Windows 11 proffessional; Disco duro: 750GB 5400RPM: Incluye cargador.","-","LN00217","Negro","IdeaPad Z570 (59313181)","Lenovo","6345.35","7555010","235598416","1022295110","LENOVO GLOBAL TECHNOLOGY","TI",new Date(2020,25,20),new Date(2020,25,20),new Date(2020,25,20),1),
    ACTIVO_MOCK(7,7,7,1,2,1,"Laptop","Procesador Intel Core i7-2670M 2.2GHz (3.1GHz c/TB); memoria RAM de 4GB DDR3; Sistema operativo Windows 11 proffessional; Disco duro: 750GB 5400RPM: Incluye cargador.","-","LN00218","Negro","IdeaPad Z570 (59313181)","Lenovo","6345.35","316651650","481656563","1022295110","LENOVO GLOBAL TECHNOLOGY","TI",new Date(2020,12,25),new Date(2020,12,25),new Date(2020,12,25),1),
    ACTIVO_MOCK(8,8,8,1,2,1,"Laptop","Procesador Intel Core i7-2670M 2.2GHz (3.1GHz c/TB); memoria RAM de 4GB DDR3; Sistema operativo Windows 11 proffessional; Disco duro: 750GB 5400RPM: Incluye cargador.","-","LN00219","Negro","IdeaPad Z570 (59313181)","Lenovo","6345.35","316651650","481656563","1022295110","LENOVO GLOBAL TECHNOLOGY","TI",new Date(2020,12,25),new Date(2020,12,25),new Date(2020,12,25),1),
    ACTIVO_MOCK(9,9,9,5,2,1,"Silla de escritorio","Silla ergonómica, giratoria y ajustable","-","-","Negro","MG-EC-014","Swivel Executive Chair","345.2","555089","481656562","1022295110","Guangzhou Mige Furniture Co. LTD.","TI",new Date(2020,1,12),new Date(2021,1,12),new Date(2021,1,12),1),
    ACTIVO_MOCK(10,10,10,5,2,1,"Silla de escritorio","Silla ergonómica, giratoria y ajustable","-","-","Negro","MG-EC-014","Swivel Executive Chair","345.2","555089","481656562","1022295110","Guangzhou Mige Furniture Co. LTD.","TI",new Date(2020,1,12),new Date(2021,1,12),new Date(2021,1,12),1),
    ACTIVO_MOCK(11,11,11,3,2,3,"Bomba de succión","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6918","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","31835636861","369166516","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,2,26),new Date(2021,2,26),1),
    ACTIVO_MOCK(12,12,12,3,2,3,"Bomba de succión","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6919","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","31835636861","369166516","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,2,26),new Date(2021,2,26),1),
    ACTIVO_MOCK(13,13,13,3,2,3,"Bomba de succión","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6920","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","31835636861","369166516","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,2,26),new Date(2021,2,26),1),
    ACTIVO_MOCK(14,14,14,3,2,3,"Dispensador de combustible","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6921","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","31835636861","369166516","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,2,26),new Date(2021,2,26),1),
    ACTIVO_MOCK(15,15,15,3,3,3,"Dispensador de combustible","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6922","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","888136861","369166517","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,4,22),new Date(2021,4,22),1),
    ACTIVO_MOCK(16,16,16,3,3,3,"Dispensador de combustible","Tipo: cuádruplo con 4 suministros simultaneos","-","HGVJ-HVUBJ-6923","Negro y gris plateado","PRIME S","Gilbarco Veeder-Root","15000","888136861","369166517","204013056","Gilbarco Veeder-Root","Comercial",new Date(2020,10,20),new Date(2021,4,22),new Date(2021,4,22),1),
    ACTIVO_MOCK(17,17,17,4,2,5,"Lector RFID","Lector RFID con slot para integrar smarthphone","-","ZBR-025-0895","Gris","RFD8500 BT","Zebra","870.99","6511613220","8885241","202052235","Zebra Technologies Corporation","Logística",new Date(2020,10,20),new Date(2021,6,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(18,18,18,4,2,5,"Lector RFID","Lector RFID con slot para integrar smarthphone","-","ZBR-025-0896","Gris","RFD8500 BT","Zebra","870.99","6511613220","8885241","202052235","Zebra Technologies Corporation","Logística",new Date(2020,10,20),new Date(2021,6,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(19,19,19,4,2,5,"Lector RFID","Lector RFID con slot para integrar smarthphone","-","ZBR-025-0897","Gris","RFD8500 BT","Zebra","870.99","6511613220","8885241","202052235","Zebra Technologies Corporation","Logística",new Date(2020,10,20),new Date(2021,6,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(20,20,20,4,4,5,"Lector RFID","Lector RFID con slot para integrar smarthphone","-","ZBR-025-0898","Gris","RFD8500 BT","Zebra","870.99","35325668","8885258","202052235","Zebra Technologies Corporation","Logística",new Date(2020,10,20),new Date(2021,10,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(21,21,21,4,4,5,"Lector RFID","Lector RFID con slot para integrar smarthphone","-","ZBR-025-0899","Gris","RFD8500 BT","Zebra","870.99","35325668","8885258","202052235","Zebra Technologies Corporation","Logística",new Date(2020,10,20),new Date(2021,10,20),new Date(2020,10,20),1),
    ACTIVO_MOCK(22,22,22,3,3,3,"Dispensador de combustible","Repostaje con función de control automático de flujo, cuantitativo, cantidad fija, modos de repostaje de parada automática completa; Incluye certificado anti-explosión","-","TYVG-YTUVB-UBU-5268","Blanco","H2","Censtar","15493","112315338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,10,23),new Date(2021,10,20),Date.now(),1),
    ACTIVO_MOCK(23,23,23,3,3,3,"Dispensador de combustible","Repostaje con función de control automático de flujo, cuantitativo, cantidad fija, modos de repostaje de parada automática completa; Incluye certificado anti-explosión","-","TYVG-YTUVB-UBU-5269","Blanco","H3","Censtar","15493","112315338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,10,23),new Date(2021,10,20),Date.now(),1),
    ACTIVO_MOCK(24,24,24,3,3,3,"Dispensador de combustible","Repostaje con función de control automático de flujo, cuantitativo, cantidad fija, modos de repostaje de parada automática completa; Incluye certificado anti-explosión","-","TYVG-YTUVB-UBU-5270","Blanco","H4","Censtar","15493","112315338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,10,23),new Date(2021,10,20),Date.now(),1),
    ACTIVO_MOCK(25,25,25,3,3,3,"Dispensador de combustible","Repostaje con función de control automático de flujo, cuantitativo, cantidad fija, modos de repostaje de parada automática completa; Incluye certificado anti-explosión","-","TYVG-YTUVB-UBU-5271","Blanco","H5","Censtar","15493","112315338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,10,23),new Date(2021,10,20),Date.now(),1),
    ACTIVO_MOCK(26,26,26,1,3,3,"Secadora de GNP","Consta de 2 bombas de aire y un panel de botones mecánicos","-","CS-DRY-GJ-5619","Plateado","CS Series Dryer","Censtar","12056","13332122858","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,11,28),new Date(2021,11,7),Date.now(),1),
    ACTIVO_MOCK(27,27,27,1,3,3,"Secadora de GNP","Consta de 2 bombas de aire y un panel de botones mecánicos","-","CS-DRY-GJ-5620","Plateado","CS Series Dryer","Censtar","12056","13332122858","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,11,28),new Date(2021,11,7),Date.now(),1),
    ACTIVO_MOCK(28,28,28,1,3,3,"Secadora de GNP","Consta de 2 bombas de aire y un panel de botones mecánicos","-","CS-DRY-GJ-5621","Plateado","CS Series Dryer","Censtar","12056","13332122858","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,11,28),new Date(2021,11,7),Date.now(),1),
    ACTIVO_MOCK(29,29,29,1,4,3,"Secadora de GNP","Consta de 2 bombas de aire y un panel de botones mecánicos","-","CS-DRY-GJ-5622","Plateado","CS Series Dryer","Censtar","12056","44585415338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,11,28),new Date(2021,11,25),Date.now(),1),
    ACTIVO_MOCK(30,30,30,1,4,3,"Secadora de GNP","Consta de 2 bombas de aire y un panel de botones mecánicos","-","CS-DRY-GJ-5623","Plateado","CS Series Dryer","Censtar","12056","44585415338","62648654","1025589632","Censtar Science & Technolgy Corp., Ltd","Comercial",new Date(2020,11,28),new Date(2021,11,25),Date.now(),1),

  ];
}

export const createListOfTomaInventario=()=>{
  return [
    TOMA_INVENTARIO_MOCK(1,"Todo completo",1,1,new Date(10,2,2019),null,0,),
    TOMA_INVENTARIO_MOCK(2,"Faltó un repuesto de pistola de suministro de combustible",1,2,new Date(10,2,2019),null,1,),
    TOMA_INVENTARIO_MOCK(3,"Existen incongruencias, el detalle esta especificaco por cada locación. Además, en la Estacion central se negó el acceso durante media hora.",0,4,new Date(1,8,2020),new Date(5,8,2020),1,),

  ]
}
export const createListOfUsuarioXTomaInventario=()=>{
return[
    USUARIO_X_TOMA_INVENTARIO_MOCK(7,1,),
    USUARIO_X_TOMA_INVENTARIO_MOCK(7,2,),
    USUARIO_X_TOMA_INVENTARIO_MOCK(9,3,),
    USUARIO_X_TOMA_INVENTARIO_MOCK(10,3,),

]
}
export const createListOfTomaInventarioXLocacion=()=>{
  return [
    TOMA_INVENTARIO_X_LOCACION_MOCK(1,1,new Date(2019,2,8),"Todo completo",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(2,2,new Date(2019,2,10),"Todo completo",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(2,3,new Date(2019,2,11),"Faltó un repuesto de pistola de suministro de combustible",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(3,2,new Date(2020,8,1),"Todo completo",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(3,3,new Date(2020,8,2),"Algunos activos se encuentran en no muy buenas condiciones.",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(3,4,new Date(2020,8,5),"Todo completo",),
    TOMA_INVENTARIO_X_LOCACION_MOCK(3,5,new Date(2020,8,5),"Todo completo",),

  ]
}
export const createListOfTomaInventarioXLocacionXActivo=()=>{
  return [
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,1,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,2,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,3,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,4,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,5,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(1,1,6,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,7,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,8,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,9,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,10,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,11,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,12,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,13,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,14,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,17,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,18,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,2,19,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,15,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,16,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,22,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,23,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,24,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(2,3,25,7,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,7,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,8,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,9,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,10,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,11,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,12,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,13,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,14,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,17,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,18,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,2,19,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,15,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,16,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,22,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,23,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,24,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,3,25,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,4,20,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,4,21,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,4,29,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,4,30,10,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,5,26,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,5,27,9,),
    TOMA_INVENTARIO_X_LOCACION_X_ACTIVO(3,5,28,9,),

  ]
}
export const createListOfNecesidadTag=()=>{
  return[
    NECESIDAD_TAG_MOCK(1,1,25,new Date(2021,10,5),new Date(2021,10,10),1),
    NECESIDAD_TAG_MOCK(2,2,28,new Date(2021,10,5),new Date(2021,10,10),1),
    NECESIDAD_TAG_MOCK(3,1,23,new Date(2021,10,5),new Date(2021,10,10),1),
    NECESIDAD_TAG_MOCK(4,4,15,new Date(2021,10,5),new Date(2021,10,10),1),
    NECESIDAD_TAG_MOCK(5,5,25,new Date(2021,11,25),null,0),
    NECESIDAD_TAG_MOCK(6,5,30,new Date(2021,11,25),null,0),
    
  ]
}

export const crateListOfEvidencia=()=>{
EVIDENCIA_MOCK()
}
export const crateListOfFoto=()=>{
  FOTO_MOCK()
}
export class FakeDB {

  // [1], [2]  => TipoLocacion, Locacion
  static listOfTipoLocacion = createListOfTipoLocacion();
  static listOfLocation = createListOfLocacion();

  //[3]  =>  ROL
  static listOfRol = createListOfRol();
  
  //[4]  => USUARIO, TRANSACCION, PERMISOS,
  static listOfUsuario = createListOfUsuario();
  static listOfTransaccion = createListOfTransaccion();
  static listOfPermiso = createListOfPermiso();
  
  //[4.1]  => Usuario X Transaccion  = TRAZABILIDAD
  static listOfTrazabilidad = createListOfTrazabilidad();

  //[4.2]  => Usuario X Permiso
  static listOfUsuarioXPermiso = createListOfUsuarioXPermiso();
  
  //[5]  =>  TAG
  static listOfTag = createListOfTag();

  //[6] => AREA RESPONSABLE
  static listOfAreaResponsable = createListOfAreaResponsable();

  //[7] => TIPO ACTIVO
  static listOfTipoActivo = createListOfTipoActivo();

  //[8] => ACTIVO  
  static listOfActivo = createListOfActivo();

  //[9] => TOMA INVENTARIO  
  static listOfTomaInventario = createListOfTomaInventario();

  //[9] => TOMA USUARIO X TOMA INVENTARIO 
  static listOfUsuarioXTomaInventario = createListOfUsuarioXTomaInventario();

  //[10] => TOMA INVENTARIO X LOCACION  
  static listOfTomaInventarioXLocacion = createListOfTomaInventarioXLocacion();

  //[11] => TOMA INVENTARIO X LOCACION X ACTIVO
  static listOfTomaInventarioXLocacionXActivo = createListOfTomaInventarioXLocacionXActivo();

  //[12] => LISTA DE NECESIDADES
  static listOfNecesidadTag = createListOfNecesidadTag();
}
////////////////   NO DARLE FORMATO AL CODIGO AQUÍ