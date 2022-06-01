# Diccionario de Datos


## Tecnico

| Clave | Nombre          | Tipo De Dato                      |
| ----- | --------------- | --------------------------------- |
| PK    | idTecnico       | numerico auto-incremental no nulo |
|       | apellido        | str                               |
|       | nombre          | str                               |
|       | fechaNacimiento | date                              |
|       | antiguedad      | int                               |
|       | email           | str                               |
|       | telefono        | int                               |
| FK    | idDireccion     | numerico auto-incremental no nulo |    


## Cliente
| Clave | Nombre      | Tipo De Dato                      |
| ----- | ----------- | --------------------------------- |
| PK    | idCliente   | numerico auto-incremental no nulo |
|       | apellido    | str                               |
|       | nombre      | str                               |
|       | dni         | int                               |
|       | email       | str                               |
|       | telefono    | int                               | 
| FK    | idDireccion | numerico auto-incremental no nulo |



## direccion

| clave | nombre       | Tipo de Dato                      |
| ----- | ------------ | --------------------------------- |
| PK    | idDirrecion  | numerico auto-incremental no nulo |
|       | piso         | str                               |
|       | departamento | str                               |
|       | calleNombre  | str                               |
|       | calleNumero  | int                               |    

## barrio

| clave | nombre       | Tipo de Dato                      |
| ----- | ------------ | --------------------------------- |
| PK    | idBarrio     | numerico auto-incremental no nulo |
|       | nombreBarrio | str                               | 
| FK    | idComuna     | numerico auto-incremental no nulo |


## comuna

| clave | nombre       | Tipo de Dato                      |
| ----- | ------------ | --------------------------------- |
| PK    | idcomuna     | numerico auto-incremental no nulo |
|       | numeroComuna | int                                  |


## Proveedor

| clave | nombre     | Tipo de Dato                      |
| ----- | ---------- | --------------------------------- |
| PK    | idFactura  | numerico auto-incremental no nulo |
|       | marca      | str                               |
|       | material   | str                               |
|       | nombreEnte | str                                  |

### tiTecProv

| clave | nombre      | tipo de dato                    |
| ----- | ----------- | ------------------------------- |
| PK    | idTiTecProv | numero auto-incremental no nulo |
| FK    | idTecnico   | numero auto-incremental no nulo |
| FK    | idFactura   | numero auto-incremental no nulo |
|       |             |                                 |

## Login

| clave | nombre        | Tipo de Dato                      |
| ----- | ------------- | --------------------------------- |
| PK    | idLogin       | numerico auto-incremental no nulo |
|       | usuario       | varchar                           |
|       | contrasena    | varchar                           |
|       | nivelDeAcceso | selector                          |
| FK    | idCliente     | numerico auto-incremental no nulo |
| FK    | idTecnico     | numerico auto-incremental no nulo |
| Fk    | idAcceso      | numero auto-incremental no nulo   |
|       |               |                                   |

##  nivelDeAcceso

| clave | nombre         | Tipo de Dato                      |
| ----- | -------------- | --------------------------------- |
| PK    | idAcceso       | numerico auto-incremental no nulo |
|       | nombreDeAcceso | str                               |
|       |                |                                   |



### TiTecPro

| clave | nombre     | Tipo de Dato                      |
| ----- | ---------- | --------------------------------- |
| PK    | idTiTecPro | numerico auto-incremental no nulo |
| FK    | idTecnico  | numerico auto-incremental no nulo |
| FK    | idProducto | numerico auto-incremental no nulo |


## productos

| clave | nombre      | Tipo de Dato                      |
| ----- | ----------- | --------------------------------- |
| PK    | idProductos | numerico auto-incremental no nulo |
|       | nombre      | str                               |
|       | stock       | int                               |

## Equipo

| clave | nombre            | Tipo de Dato                      |
| ----- | ----------------- | --------------------------------- |
| PK    | nroDispositivo    | numerico auto-incremental no nulo |
|       | serie             | VARCHAR                           |
|       | sistemaOperativo  | selector                          |
|       | marca             | str                                 |
| FK      | idTipoDispositivo | numerico auto-incremental no nulo |

### tecReparaEquipo

| clave | nombre            | Tipo de Dato                      |
| ----- | ----------------- | --------------------------------- |
| PK    | idTecReparaEquipo | numerico auto-incremental no nulo |
| FK    | idTecnico         | numerico auto-incremental no nulo |
| FK    | nroDispositivo    | numerico auto-incremental no nulo |

## metodoPago

| clave | nombre      | Tipo de Dato                      |
| ----- | ----------- | --------------------------------- |
| PK    | idFactura   | numerico auto-incremental no nulo |
|       | tipoPago    | selector                          |
|       | fechaDePago | DATE                              |
|       | cantidad    | int                               |
|       | ahoraDoce   | bool                              |
|       | cuotas      | int                               |

### pagos
| clave | nombre    | Tipo de Dato                      |
| ----- | --------- | --------------------------------- |
| FK    | idPagos   | numerico auto-incremental no nulo |
| FK    | idCLiente | numerico auto-incremental no nulo |
| FK    | idFactura | numerico auto-incremental no nulo |
|       |           |                                   |

## tipoPago

| clave | nombre            | Tipo de Dato                    |
| ----- | ----------------- | ------------------------------- |
| PK    | idTipoPago        | numero auto-incremental no nulo |
|       | clasificacionPago | selector                        |
|       |                   |                                 |

