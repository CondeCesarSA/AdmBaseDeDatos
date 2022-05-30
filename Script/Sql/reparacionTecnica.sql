-- Project :      ModeloRelacional.DM1
-- Author :       ccsavlad
--
-- Date Created : Sunday, May 29, 2022 22:19:35
-- Target DBMS : MySQL 5.x
--

-- 
-- TABLE: barrio 
--

CREATE TABLE barrio(
    idbarrio        INT          NOT NULL,
    idcomuna        INT,
    nombreBarrio    CHAR(100),
    PRIMARY KEY (idbarrio)
)ENGINE=MYISAM
;



-- 
-- TABLE: Cliente 
--

CREATE TABLE Cliente(
    idCLiente      INT         NOT NULL,
    idDireccion    INT         NOT NULL,
    telefono       INT,
    apellido       CHAR(10),
    email          CHAR(10),
    dni            CHAR(10),
    nombre         CHAR(10),
    PRIMARY KEY (idCLiente)
)ENGINE=MYISAM
;



-- 
-- TABLE: comuna 
--

CREATE TABLE comuna(
    idcomuna        INT    NOT NULL,
    numeroComuna    INT,
    PRIMARY KEY (idcomuna)
)ENGINE=MYISAM
;



-- 
-- TABLE: direccion 
--

CREATE TABLE direccion(
    idDireccion     INT            NOT NULL,
    idbarrio        INT,
    piso            VARCHAR(10),
    departamento    VARCHAR(10),
    calleNombre     CHAR(255),
    calleNumero     INT,
    PRIMARY KEY (idDireccion)
)ENGINE=MYISAM
;



-- 
-- TABLE: equipo 
--

CREATE TABLE equipo(
    nroDispositivo       INT             NOT NULL,
    idTipoDispositivo    INT,
    serie                VARCHAR(255),
    sistemaOperativo     VARCHAR(255),
    tipoDispositivo      CHAR(10),
    marca                VARCHAR(255),
    PRIMARY KEY (nroDispositivo)
)ENGINE=MYISAM
;



-- 
-- TABLE: login 
--

CREATE TABLE login(
    idLogin          INT             NOT NULL,
    idAcceso         INT,
    idCLiente        INT,
    idTecnico        INT,
    usuario          VARCHAR(255),
    contrasena       VARCHAR(255),
    nivelDeAcceso    CHAR(10),
    PRIMARY KEY (idLogin)
)ENGINE=MYISAM
;



-- 
-- TABLE: metodoPago 
--

CREATE TABLE metodoPago(
    idFactura      INT       NOT NULL,
    idTipoPago     INT,
    fechaDePago    DATE,
    cantidad       INT,
    ahoraDoce      BIT(1),
    cuotas         INT,
    PRIMARY KEY (idFactura)
)ENGINE=MYISAM
;



-- 
-- TABLE: nivelDeAcceso 
--

CREATE TABLE nivelDeAcceso(
    idAcceso          INT         NOT NULL,
    nombreDeAcceso    CHAR(10),
    PRIMARY KEY (idAcceso)
)ENGINE=MYISAM
;



-- 
-- TABLE: pagos 
--

CREATE TABLE pagos(
    idPagos      INT    NOT NULL,
    idCLiente    INT,
    idFactura    INT,
    PRIMARY KEY (idPagos)
)ENGINE=MYISAM
;



-- 
-- TABLE: productos 
--

CREATE TABLE productos(
    idProducto    INT             NOT NULL,
    nombre        VARCHAR(255),
    stock         INT,
    PRIMARY KEY (idProducto)
)ENGINE=MYISAM
;



-- 
-- TABLE: proveedor 
--

CREATE TABLE proveedor(
    idFactura     INT             NOT NULL,
    marca         VARCHAR(255),
    material      VARCHAR(255),
    nombreEnte    VARCHAR(255),
    PRIMARY KEY (idFactura)
)ENGINE=MYISAM
;



-- 
-- TABLE: tecnico 
--

CREATE TABLE tecnico(
    idTecnico          INT             NOT NULL,
    idDireccion        INT             NOT NULL,
    telefono           INT,
    cuil               INT,
    apellido           CHAR(50),
    fechaNacimiento    DATE,
    nombreCompleto     CHAR(18),
    antiguedad         INT,
    email              VARCHAR(255),
    PRIMARY KEY (idTecnico)
)ENGINE=MYISAM
;



-- 
-- TABLE: tecReparaEquipo 
--

CREATE TABLE tecReparaEquipo(
    idTecReparaEquipo    INT    NOT NULL,
    nroDispositivo       INT,
    idTecnico            INT,
    PRIMARY KEY (idTecReparaEquipo)
)ENGINE=MYISAM
;



-- 
-- TABLE: tiCliEquipo 
--

CREATE TABLE tiCliEquipo(
    idTiCliEquipo     INT    NOT NULL,
    nroDispositivo    INT,
    idCLiente         INT,
    PRIMARY KEY (idTiCliEquipo)
)ENGINE=MYISAM
;



-- 
-- TABLE: tipoDispositivo 
--

CREATE TABLE tipoDispositivo(
    idTipoDispositivo    INT             NOT NULL,
    nombreDispositivo    VARCHAR(255),
    PRIMARY KEY (idTipoDispositivo)
)ENGINE=MYISAM
;



-- 
-- TABLE: tipoPago 
--

CREATE TABLE tipoPago(
    idTipoPago           INT         NOT NULL,
    clasificacionPago    CHAR(30),
    PRIMARY KEY (idTipoPago)
)ENGINE=MYISAM
;



-- 
-- TABLE: tiTecPro 
--

CREATE TABLE tiTecPro(
    idTiTecPro    INT    NOT NULL,
    idProducto    INT,
    idTecnico     INT,
    PRIMARY KEY (idTiTecPro)
)ENGINE=MYISAM
;



-- 
-- TABLE: TiTecProv 
--

CREATE TABLE TiTecProv(
    idTiTecProv    INT    NOT NULL,
    idTecnico      INT,
    idFactura      INT,
    PRIMARY KEY (idTiTecProv)
)ENGINE=MYISAM
;



-- 
-- TABLE: barrio 
--

ALTER TABLE barrio ADD CONSTRAINT Refcomuna51 
    FOREIGN KEY (idcomuna)
    REFERENCES comuna(idcomuna)
;


-- 
-- TABLE: Cliente 
--

ALTER TABLE Cliente ADD CONSTRAINT Refdireccion58 
    FOREIGN KEY (idDireccion)
    REFERENCES direccion(idDireccion)
;


-- 
-- TABLE: direccion 
--

ALTER TABLE direccion ADD CONSTRAINT Refbarrio50 
    FOREIGN KEY (idbarrio)
    REFERENCES barrio(idbarrio)
;


-- 
-- TABLE: equipo 
--

ALTER TABLE equipo ADD CONSTRAINT ReftipoDispositivo55 
    FOREIGN KEY (idTipoDispositivo)
    REFERENCES tipoDispositivo(idTipoDispositivo)
;


-- 
-- TABLE: login 
--

ALTER TABLE login ADD CONSTRAINT Reftecnico48 
    FOREIGN KEY (idTecnico)
    REFERENCES tecnico(idTecnico)
;

ALTER TABLE login ADD CONSTRAINT RefCliente49 
    FOREIGN KEY (idCLiente)
    REFERENCES Cliente(idCLiente)
;

ALTER TABLE login ADD CONSTRAINT RefnivelDeAcceso59 
    FOREIGN KEY (idAcceso)
    REFERENCES nivelDeAcceso(idAcceso)
;


-- 
-- TABLE: metodoPago 
--

ALTER TABLE metodoPago ADD CONSTRAINT ReftipoPago54 
    FOREIGN KEY (idTipoPago)
    REFERENCES tipoPago(idTipoPago)
;


-- 
-- TABLE: pagos 
--

ALTER TABLE pagos ADD CONSTRAINT RefmetodoPago2 
    FOREIGN KEY (idFactura)
    REFERENCES metodoPago(idFactura)
;

ALTER TABLE pagos ADD CONSTRAINT RefCliente41 
    FOREIGN KEY (idCLiente)
    REFERENCES Cliente(idCLiente)
;


-- 
-- TABLE: tecnico 
--

ALTER TABLE tecnico ADD CONSTRAINT Refdireccion57 
    FOREIGN KEY (idDireccion)
    REFERENCES direccion(idDireccion)
;


-- 
-- TABLE: tecReparaEquipo 
--

ALTER TABLE tecReparaEquipo ADD CONSTRAINT Reftecnico42 
    FOREIGN KEY (idTecnico)
    REFERENCES tecnico(idTecnico)
;

ALTER TABLE tecReparaEquipo ADD CONSTRAINT Refequipo43 
    FOREIGN KEY (nroDispositivo)
    REFERENCES equipo(nroDispositivo)
;


-- 
-- TABLE: tiCliEquipo 
--

ALTER TABLE tiCliEquipo ADD CONSTRAINT RefCliente29 
    FOREIGN KEY (idCLiente)
    REFERENCES Cliente(idCLiente)
;

ALTER TABLE tiCliEquipo ADD CONSTRAINT Refequipo30 
    FOREIGN KEY (nroDispositivo)
    REFERENCES equipo(nroDispositivo)
;


-- 
-- TABLE: tiTecPro 
--

ALTER TABLE tiTecPro ADD CONSTRAINT Refproductos44 
    FOREIGN KEY (idProducto)
    REFERENCES productos(idProducto)
;

ALTER TABLE tiTecPro ADD CONSTRAINT Reftecnico45 
    FOREIGN KEY (idTecnico)
    REFERENCES tecnico(idTecnico)
;


-- 
-- TABLE: TiTecProv 
--

ALTER TABLE TiTecProv ADD CONSTRAINT Reftecnico46 
    FOREIGN KEY (idTecnico)
    REFERENCES tecnico(idTecnico)
;

ALTER TABLE TiTecProv ADD CONSTRAINT Refproveedor47 
    FOREIGN KEY (idFactura)
    REFERENCES proveedor(idFactura)
;


