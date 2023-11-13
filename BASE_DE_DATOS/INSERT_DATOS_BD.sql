-- ROL 
INSERT INTO `database_tech`.`roles`(`rol_id`,`rol_nombre`) VALUES (1,'ADMIN');
INSERT INTO `database_tech`.`roles`(`rol_id`,`rol_nombre`) VALUES (2,'ALMACENERO');

-- USUARIO
INSERT INTO `database_tech`.`usuarios` (`usuario_id`,`apellido`,`direccion`,`dni`,`email`,`enabled`,`nombre`,`password`,`telefono`,`username`) VALUES (1,'Noriega Rea','Av. Santa Catre 73X4','03465174','luz@admin.pe',1,'Luz','$2a$10$EYsfxY3ugTCyOweJc4RGROKA5/2x2OiLlrioxp2Gn0c42RRjWLfFa','987654322','admin');
INSERT INTO `database_tech`.`usuarios` (`usuario_id`,`apellido`,`direccion`,`dni`,`email`,`enabled`,`nombre`,`password`,`telefono`,`username`) VALUES (2,'Ui Lessoz','Jr. Nueva Re 3X05','87643160','jorge@admin.pe',1,'Jorge','$2a$10$EYsfxY3ugTCyOweJc4RGROKA5/2x2OiLlrioxp2Gn0c42RRjWLfFa','954376151','almacen');

-- ROL USUARIO
INSERT INTO `database_tech`.`usuario_rol`(`usuario_id`,`rol_id`) VALUES (2,2);
INSERT INTO `database_tech`.`usuario_rol`(`usuario_id`,`rol_id`) VALUES (1,1);

-- PROVEEDOR
INSERT INTO `database_tech`.`proveedor` (`proveedor_id`, `proveedor_nombre`, `proveedor_estado`) VALUES ('1', 'TECNO MALL E.I.R.L.', '1');
INSERT INTO `database_tech`.`proveedor` (`proveedor_id`, `proveedor_nombre`, `proveedor_estado`) VALUES ('2', 'SMARTH RX E.I.R.L.', '1');
INSERT INTO `database_tech`.`proveedor` (`proveedor_id`, `proveedor_nombre`, `proveedor_estado`) VALUES ('3', 'TEMPLATE S.A.C.', '1');

-- CATEGORIA
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('1', 'Case', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('2', 'Monitor', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('3', 'Tarjeta de Vídeo', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('4', 'Placa Madre', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('5', 'Fuente de poder', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('6', 'Perifericos', '1');
INSERT INTO `database_tech`.`categoria` (`categoria_id`, `categoria_nombre`, `categoria_estado`) VALUES ('7', 'Procesador', '1');

-- PRODUCTO
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (1,'Número Pedido: COMP013201TM',1,'https://i.postimg.cc/8DVkcX2w/1.jpg','NeonForge X-Titanium Pro',193,1);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (2,'Número Pedido: COMP013202TM',1,'https://i.postimg.cc/hcDSbzPd/2.jpg','SpectraGlide Inferno Mastercase',250.9,1);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (3,'Número Pedido: COMP013203TM',1,'https://i.postimg.cc/dqyvtGnz/3.jpg','CyberHavoc StormStriker XT',328.1,1);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (4,'Número Pedido: COMP013204TM',1,'https://i.postimg.cc/15X1xFf7/4.jpg','VortexEdge Quantum Blaze Monitor',1154.14,2);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (5,'Número Pedido: COMP013205TM',1,'https://i.postimg.cc/K8gXjy7n/5.jpg','ThunderStrike UltraSpeed Titan Display',4439,2);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (6,'Número Pedido: COMP013206TM',1,'https://i.postimg.cc/hG9H8b5v/6.jpg','XenonGlow Eclipse Gaming Screen',3470.14,2);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (7,'Número Pedido: COMP013207TM',1,'https://i.postimg.cc/qJHrtg5g/7.jpg','VelocityCore InfernoX GTX',9843,3);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (8,'Número Pedido: COMP013208TM',1,'https://i.postimg.cc/fMkDpGdW/8.jpg','MegaHawk ProGaming Elite',4439,4);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (9,'Número Pedido: COMP013209TM',1,'https://i.postimg.cc/Ns8cRY3D/9-1.jpg','XtremeForce BlitzGuard X370',2798.5,4);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (10,'Número Pedido: COMP013210TM',1,'https://i.postimg.cc/1mjVLkRp/10.jpg','PhoenixPulse TurboCore X9000',2123,7);
INSERT INTO `database_tech`.`producto` (`producto_id`,`producto_descripcion`,`producto_estado`,`producto_imagen`,`producto_nombre`,`producto_precio`,`categoria_id`) VALUES (11,'Número Pedido: COMP013211TM',1,'https://i.postimg.cc/MwPBMQ0v/11.jpg','ShadowStrike ProKeys X700',250,6);


-- INGRESO
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('1', '2022-11-15', '4204', 'Nuevo ingreso', '1', '1');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('2', '2022-11-11', '5142', 'Nuevo ingreso', '1', '1');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('3', '2022-09-25', '535', 'Nuevo ingreso', '2', '2');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('4', '2022-08-15', '7252', 'Nuevo ingreso', '2', '3');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('5', '2021-12-31', '3544', 'Nuevo ingreso', '2', '3');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('6', '2021-09-17', '8575', 'Nuevo ingreso', '3', '3');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('7', '2021-05-25', '3773', 'Nuevo ingreso', '3', '1');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('8', '2021-09-15', '2387', 'Nuevo ingreso', '4', '2');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('9', '2019-07-19', '2542', 'Nuevo ingreso', '5', '2');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('10', '2019-11-25', '5431', 'Nuevo ingreso', '6', '3');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('11', '2019-09-01', '8570', 'Nuevo ingreso', '7', '1');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('12', '2019-08-15', '5430', 'Nuevo ingreso', '8', '1');
INSERT INTO `database_tech`.`ingreso` (`ingreso_id`, `ingreso_fecha`, `ingreso_cantidad`, `ingreso_detalle`, `producto_id`, `proveedor_id`) VALUES ('13', '2019-02-04', '5334', 'Nuevo ingreso', '9', '3');

-- SALIDA
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('1', '2022-11-24', '122', 'Venta nueva', '1');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('2', '2022-11-23', '15', 'Defectuoso', '2');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('3', '2022-10-15', '253', 'Venta nueva', '1');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('4', '2022-10-05', '215', 'Venta nueva', '3');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('5', '2022-10-01', '52', 'Defectuoso', '5');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('6', '2022-05-15', '254', 'Venta nueva', '4');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('7', '2021-11-06', '23', 'Defectuoso', '5');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('8', '2021-09-03', '224', 'Venta nueva', '1');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('9', '2021-01-13', '242', 'Venta nueva', '1');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('10', '2021-01-12', '521', 'Venta nueva', '2');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('11', '2021-01-11', '12', 'Defectuoso', '3');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('12', '2021-01-10', '11', 'Defectuoso', '4');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('13', '2020-12-12', '2424', 'Venta nueva', '3');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('14', '2020-07-01', '242', 'Venta nueva', '5');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('15', '2020-06-15', '53', 'Defectuoso', '6');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('16', '2019-10-15', '242', 'Venta nueva', '7');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('17', '2019-09-15', '415', 'Venta nueva', '8');
INSERT INTO `database_tech`.`salida` (`salida_id`, `salida_fecha`, `salida_cantidad`, `salida_detalle`, `producto_id`) VALUES ('18', '2019-08-15', '245', 'Venta nueva', '9');

