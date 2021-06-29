import React from 'react';
import {View, TextInput as Input, Text, TouchableOpacity, ScrollView} from 'react-native';
import {
  withStyles,
  Icon,
  Modal
} from 'react-native-ui-kitten';
import {CheckBox} from 'react-native-ui-kitten';
import {textStyle } from '../../common';



import formStyles from 'src/features/EmailAuth/screens/styles';
import { translate }  from 'src/utils/translation';


const termsText = {
   'es': `Por medio de los presentes términos y condiciones (en adelante, los "Términos y Condiciones"), se regula el servicio de plataforma ofrecido por Maskoapp S. de R.L. de C.V. (en lo sucesivo, "Maskoapp") a través del sitio web [www.maskoapp.mx], o cualquier sitio web que lo sustituya, (en lo sucesivo, el "Sitio Web") y de la aplicación para dispositivos móviles (en lo sucesivo, la "App" y, de manera conjunta con el Sitio Web, la "Plataforma") con la finalidad de que Usted como usuario final de la Plataforma (el "Usuario") solicite a Maskoapp la prestación de servicios y, compra y entrega de determinados productos, para lo cual Maskoapp podrá contratar a cualesquiera prestadores de servicios, incluyendo a cualquier persona moral o física que a su vez contrate a prestadores de servicios independientes.
El Usuario declara haber leído y aceptado, en todas sus partes, estos Términos y Condiciones y se entiende que a partir de su aceptación, éstos le son legalmente vinculantes y obligatorios. Por lo tanto, al aceptar los presentes Términos y Condiciones, podrá acceder a la utilización y aprovechamiento de la Plataforma. En caso contrario, el Usuario deberá abstenerse de acceder a la Plataforma y Servicios, ya sea directa o indirectamente, de utilizar cualquier información o servicio provisto por la misma. La aceptación de los presentes Términos y Condiciones es condición indispensable para registrarse en el Plataforma y acceder a la prestación de los Servicios.
El uso de los datos personales del Usuario que son o sean proporcionados a través del uso de la Plataforma por cualquier motivo incluyendo sin limitar los servicios de entrega, de sus tarjetas bancarias o de cualquier otro dato proporcionado a Maskoapp, se regirá por el Aviso de Privacidad de Maskoapp disponible en la Plataforma.
Maskoapp es una sociedad mercantil debidamente constituida conforme a las leyes de los Estados Unidos Mexicanos e inscrita en el Registro Público de Comercio de la Ciudad de México y con domicilio en la calle [*], Ciudad de México, C.P. [*].

1. Servicios

1.1 El servicio ofrecido por Maskoapp a través de su Plataforma (el "Servicio"), consiste en:
(i) facilitar al Usuario la compra y contratación de los productos y/o servicios ofrecidos a través de la plataforma de Maskoapp que se encuentran relacionados de alguna manera u otra  con cualesquier tipo de mascota (incluyendo sin limitar, perros y gatos) (los “Productos”) mediante la publicación de los Productos ofrecidos en la Plataforma;
(ii) poner en contacto al Usuario y los Productos, a través de la Plataforma, para que el Usuario pueda hacer pedidos de los Productos de acuerdo con las necesidades de su mascota; y
(iii) coordinar la comercialización y entrega a domicilio de los Productos elegidos por el Usuario.

1.2 El Usuario declara conocer y aceptar que Maskoapp no participa en la fabricación, prestación de servicios, preparación, empaque, disponibilidad, recolección y/o entrega física de los Productos, toda vez que dichas actividades son responsabilidad exclusiva del fabricante de los Productos o el prestador de servicios de dichos Productos, o, de los repartidores responsables por la recolección y entrega de los Productos (los “Terceros Involucrados”), según sea aplicable. Por lo anterior, el Usuario conviene que cualquier queja, reclamo, demanda o cualquier otra similar por problemas derivados del cumplimiento del pedido o la prestación de servicios, así como cualquier otro derivado de la fabricación, preparación, empaque, disponibilidad, recolección y/o entrega física de los Productos y cualesquier otro problema o defecto relacionado con los Productos será responsabilidad única y exclusivamente de aquellos Terceros Involucrados que se encuentren relacionados con la fabricación, prestación, recolección, entrega y de cualquier otra manera con los Productos.
Ni Maskoapp, ni sus socios, accionistas, afiliados o licenciantes serán responsables ante cualquier reclamo, lesión o daño que surja en relación con los actos u omisiones de cualquier Terceros Involucrados, incluyendo sin limitar, cualesquier error o deficiencia en la fabricación de los Productos, en la correcta prestación de los servicios (incluyendo el paseo o los servicios de higiene) y, en general, en cualesquier situación que pueda surgir derivado de una negligencia de algún Tercero Involucrado, incluyendo el extravío, lesión, enfermedad, reacción alérgica o cualesquier otra que de forma directa o indirecta afecte a la mascota del Usuario. En caso de presentarse una disputa con uno o más Terceros Involucrados, el Usuario afectado libera incondicionalmente a Maskoapp, sus socios, directores, empleados, subsidiarias, afiliados, agentes y representantes de todos los reclamos, responsabilidades, costos, incluyendo sin limitación honorarios de abogados, pérdidas o daños de cualquier clase o naturaleza, directos o indirectos, que surjan a consecuencia de tales disputas.

1.3 Considerando que Maskoapp únicamente pone a disposición del Usuario una Plataforma electrónica con el objeto de poner en contacto de forma electrónica al Usuario con los Productos no es ni será responsable de la información incluida en los empaques o en la prestación de los Productos que los Terceros Involucrados anuncien ni por cualquiera información adicional relacionada con los mismos.

2. Registro

2.1 Registro del Usuario y Creación de una Cuenta. El Usuario conviene en que como una condición a la contratación de los Servicios de Maskoapp deberá registrarse y proporcionar los datos que le sean requeridos por Maskoapp a través de la Plataforma (el "Registro").
El nombre de usuario o correo electrónico así como la contraseña (los "Factores de Autenticación"), o los factores de autenticación proporcionados por Facebook o cualesquier red social adicional que utilice el Usuario para acceder a su cuenta a través de la Plataforma constituyen una firma electrónica. Por lo anterior, todas las acciones realizadas por el Usuario con los Factores de Autenticación serán atribuidas directa y personalmente al Usuario.

2.2 El Usuario conviene y reconoce que será el exclusivo responsable (incluso desde una perspectiva civil y penal) por la falta de veracidad en la información ingresada en el Registro la cual podrá ser verificada en cualquier momento por Maskoapp. En caso de que el Usuario proporcione información incorrecta, falsa o incompleta, y de negarse a corregirla y a enviar documentación que compruebe la corrección, Maskoapp se reserva el derecho de no concluir con el Registro en curso e, inclusive, de cancelar el Registro ya existente, impidiendo al Usuario utilizar la Plataforma y los Servicios hasta que, a criterio de Maskoapp, la anomalía sea subsanada.

2.3 El Usuario conviene que no podrá permitir que terceras personas accedan a la Plataforma utilizando los Factores de Autenticación del Usuario.

2.4 Al proporcionar todos los datos requeridos en el Registro, el Usuario declara que es mayor de edad y cuenta con la capacidad de ejercicio necesaria y suficiente para registrarse en la Plataforma y contratar los Servicios mediante la celebración de los presentes Términos y Condiciones y cualesquiera otros contratos requeridos o convenientes y para cumplir con las obligaciones que en los mismos se establecen.

3. Cómo Realizar Un Pedido y Cómo Se Procesa

3.1 Realización de un Pedido.  Las partes convienen que una vez que el Usuario seleccione los artículos que desee ordenar, el Usuario podrá realizar su pedido haciendo clic en el botón de "proceder", "realizar mi pedido" o "similar" dentro de la Plataforma. El Usuario será el exclusivo responsable de la información introducida y de realizar cualquier modificación a la misma antes de hacer clic en el botón de "proceder", en el entendido que una vez realizado el pedido ya no podrá modificarse la información proporcionada por el Usuario. 
El Usuario podrá realizar pedidos a través de cualesquiera de las siguientes dos modalidades: (i) Pedido Único - el cual consiste en que el Usuario podrá seleccionar cualquier Producto de la Plataforma que desee adquirir o contratar, mismo que solamente se adquirirá o contratará por una esa sola ocasión, para ser entregado en el plazo establecido en la Plataforma (el “Pedido Único”), teniendo la posibilidad de volver a adquirirlo en cualquier momento posterior, y (ii) Pedido Recurrente - el cual consiste en que el Usuario podrá seleccionar que el Producto seleccionado en su pedido sea adquirido o contratado automáticamente cada cierto periodo de tiempo y con la concurrencia establecida por el propio Usuario, sin necesidad de volver a seleccionar y adquirir el Producto (el “Pedido Recurrente”).

3.2 Modificación o Cancelación de un Pedido. Las partes convienen que, una vez que el Usuario realice un Pedido Único respecto del cual se hubiere autorizado el pago, el pedido no podrá ser cancelado o modificado y el Usuario no tendrá derecho a recibir el reembolso del mismo. Con relación a los Pedidos Recurrentes, el Usuario podrá modificar única y exclusivamente la dirección o fecha de entrega (la cual no podrá adelantarse a su entrega programada en más de un día, ni retrasarse en más de 2 días). Para dichas modificaciones, el Usuario podrá ponerse en contacto con el servicio de atención al Usuario y ellos se encargaran de llevar a cabo dicha modificación sin costo alguno, dichas modificaciones solamente serán permitidas en una sola ocasión por entrega.  

3.3 Autorización de Pago. Las partes convienen que ningún pedido se entenderá realizado y por lo tanto no será procesado hasta que el pago del mismo hubiere sido debidamente autorizado por los procesadores pago correspondientes. En caso de que el pedido realizado por el Usuario sea un Pedido Recurrente, el cargo será realizado al Usuario con 3 días de anticipación a su entrega programada.

3.4 Gestión del Pedido.  Las partes convienen que una vez que el Usuario hubiere realizado un pedido, cuyo pago hubiere sido debidamente autorizado, Maskoapp procesará la solicitud, y enviará al Usuario por correo electrónico una notificación de que el pedido ha sido recibido y que la solicitud está en proceso..

4. Precio y Pago

4.1 IVA y Gastos de Envío. Las partes convienen que los precios de los Productos ofrecidos al Usuario, del uso de la Plataforma y la entrega dichos Productos en el domicilio señalado por el Usuario, en caso de ser requerida, serán los indicados en la Plataforma. Estos precios incluyen el Impuesto al Valor Agregado (IVA). 

4.2 Métodos de Pago. Las partes convienen que el pago de los pedidos por el Usuario a través de la Plataforma deberá realizarse mediante PayPal, una tarjeta de crédito o de débito aceptada por la Plataforma.

4.3 Pagos con Tarjeta. El Usuario conviene y reconoce que Maskoapp cuenta con el servicio de proveedores de procesamientos de pago a través de internet,  los cuales podrán almacenar los datos de la tarjeta de crédito o de débito del Usuario en sus bases de datos, por lo que estos datos personales podrán ser transferidos a dichos proveedores de conformidad con el Aviso de Privacidad de Maskoapp, y únicamente con el fin de estar en posibilidad de prestar al Usuario el servicio contratado. Los proveedores de procesamientos de pago a través de internet, en su carácter en encargados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares, estarán obligados a tratar los datos personales del Usuario, en todo momento, en estricto apego a lo dispuesto en el Aviso de Privacidad de Maskoapp. 

4.4 Cupones de Prepago y de Descuento. Las partes convienen que un cupón de prepago o de descuento podrá aplicarse por el Usuario para el pago de un pedido siempre y cuando dicho cupón o código sea válido y se encuentre vigente de acuerdo con las políticas de Maskoapp. El saldo faltante una vez aplicado el cupón de prepago o descuento será abonado mediante tarjeta de crédito, débito o efectivo. 

4.5 Maskoapp será la encargada de emitir el comprobante fiscal digital (“CFDI”) en favor del Usuario, cuando así lo requieran los Usuarios, respecto de los pedidos y compras online de los Productos ofrecidos por la Plataforma.

4.6 Respecto de los servicios de uso de la Plataforma y la entrega de los Productos en el domicilio señalado por el Usuario, en caso de ser requerida, Maskoapp deberá emitir el CFDI a favor del Usuario, cuando así lo requieran los Usuarios a Maskoapp mediante la Plataforma.

5. Atención al Usuario

5.1 General. Las partes convienen que el equipo de atención al Usuario de Maskoapp realizará sus mejores esfuerzos para solventar cualquier problema que pudiera tener el Usuario con su pedido. El Usuario podrá contactar al servicio de atención al cliente de Maskoapp a través del siguiente correo electrónico: soporte@masko.com.mx

5.2 Preguntas Acerca de un Pedido. Las partes convienen que en caso de que un pedido este tardando más tiempo de lo esperado o si el Usuario tiene cualquier otro problema con el mismo, el Usuario podrá contactar al servicio de atención al Usuario de Maskoapp con el fin de dar seguimiento.

5.3 Quejas o Sugerencias. Las partes convienen que en caso de que el Usuario no quedara satisfecho con la calidad de los Productos o de los servicios prestados y contratados a través de la Plataforma, podrá proporcionar dicha información en forma de calificaciones, comentarios y reseñas a través del siguiente correo electrónico: soporte@masko.com.mx (en conjunto, los "Comentarios") para reflejar su experiencia, siempre que lo haga en cumplimiento con las políticas que Maskoapp tenga para tal efecto. Las partes convienen que Maskoapp tendrá en todo momento derecho de modificar sus políticas así como de eliminar cualquier comentario realizado por el Usuario que a su sola discreción pudiere tener un efecto negativo o que no cumpliere con dichas políticas.

5.4 Indemnización. Las partes convienen que en caso de que el Usuario no estuviere satisfecho con la calidad de los Productos o de los servicios prestados y desee un reembolso, reducción proporcional del precio o cualquier otro tipo de compensación, Maskoapp no estará en la posibilidad de realizar dicho reembolso, reducción o compensación, toda vez que, el Usuario conviene y reconoce que Maskoapp no será responsable respecto de la calidad de los Productos o de los servicios prestados por lo que en este acto renuncia a cualquier derecho que le pudiere corresponder de conformidad con la legislación aplicable para presentar cualquier tipo de acción, queja o demanda en contra de Maskoapp en relación con la calidad de los Productos o de los servicios prestados. Las Partes convienen que el Usuario deberá indemnizar a Maskoapp de todos los daños y perjuicios que resultaren (incluyendo honorarios de abogados) de cualquier incumplimiento por el Usuario de los presentes Términos y Condiciones.

6. Propiedad Intelectual

6.1 Condiciones Permitidas de Uso. Las partes convienen que el Usuario deberá utilizar la Plataforma para su uso personal y exclusivamente con el objeto de contratar los Servicios establecidos en los presente Términos y Condiciones y bajo ningún supuesto para un fin comercial. El Usuario en este acto conviene en cumplir cabalmente con lo siguiente:

6.1.1 No llevar a cabo un uso fraudulento de la Plataforma (tal como como piratería o "scrapping").

6.1.2 Salvo que se establezca lo contrario en los presente Términos y Condiciones, los derechos de autor y el resto de derechos de propiedad intelectual e industrial de la Plataforma y del contenido publicado en la misma (incluyendo sin limitación, fotografías e imágenes gráficas, así como signos distintivos, encabezados y demás) son la propiedad exclusiva de Maskoapp o de los licenciantes de Maskoapp, según se indique, y los mismos se encuentran reservados por lo que el Usuario no deberá utilizar dichos derechos de propiedad industrial e intelectual de forma alguna.

6.2 Limitaciones de Uso. El Usuario conviene en que no podrá reproducirse ni almacenarse ninguna parte ni ninguno de los contenidos de la Plataforma en ningún otro sitio web o aplicación móvil, ni incluirse en ningún sistema ni servicio electrónico, público o privado, sin el consentimiento previo y por escrito de Maskoapp.

6.3 Autorización de Uso de la Plataforma. Para hacer uso de la Plataforma, Maskoapp en este acto autoriza al Usuario a utilizar de forma gratuita, temporal, no exclusiva e intransferible el software base de la misma únicamente con el objeto de que el Usuario solicite los Servicios en la jurisdicción en que se encuentre dentro del territorio nacional de los Estados Unidos Mexicanos. El Usuario se obliga a no alterar, modificar, adaptar, sublicenciar, traducir, enajenar, hacer ingeniería inversa de, descifrar, descompilar o de otra forma desensamblar en todo o en parte cualquier porción de la Plataforma y/o los archivos o programas de cómputo que los componen, o propiciar que cualesquiera terceros lo hagan por cuenta y orden suya o no, con o sin ánimo de lucro.
La presente autorización podrá ser modificada o revocada en cualquier momento por Maskoapp sin previo aviso necesario al Usuario.

6.4 Los Usuarios otorgan a favor de Maskoapp una autorización de uso gratuita, no exclusiva, perpetua, transferible e irrevocable sobre los Comentarios, opiniones ("Opiniones"), sugerencias, ideas, preguntas o cualquier otro contenido ingresado por el Usuario en la Plataforma ("Contenido del Usuario") para utilizar, reproducir, modificar, adaptar, publicar, traducir o generar obras derivadas de dicho Contenido del Usuario, en forma total o parcial y por cualquier medio. El Usuario conviene y reconoce que son los propietarios de sus Opiniones, que el contenido es preciso, que el uso del contenido proporcionado no viola lo dispuesto en la presente Cláusula o la normativa aplicable ni causa perjuicio a alguna persona o entidad. Asimismo, el Usuario se obliga a sacar en paz y a salvo a Maskoapp por cualquier reclamo resultante del contenido proporcionado. Maskoapp tiene el derecho de supervisar, editar o eliminar cualquier actividad o contenido. Maskoapp no será responsable ni asumirá obligación alguna por cualquier contenido publicado por algún Usuario o tercero, ni asumirá la obligación de publicarlo o de conservarlo en el Plataforma.

7. Acceso al Servicio

7.1 Disponibilidad de la Plataforma. El Usuario conviene y reconoce que Maskoapp no será responsable en caso de que la Plataforma no se encuentre disponible para ser utilizada por cualquier razón.

7.2 Suspensión del Acceso. El acceso a la Plataforma podrá ser suspendido por Maskoapp temporal o permanentemente por cualquier motivo sin necesidad de entregar un previo aviso al Usuario y sin responsabilidad alguna.

7.3 Seguridad de la Información. Las partes convienen que con el objeto de dar cumplimiento a la Ley Federal del Consumidor y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, Maskoapp adoptará las medidas de seguridad física, administrativa y técnica necesarias para proteger la información del Usuario, sin embargo, Maskoapp no garantiza totalmente la seguridad de los datos transmitidos a la Plataforma atendiendo a las condiciones del dispositivo y/o la conexión que utilice el Usuario para hacer uso de la Plataforma. Por lo tanto, cualquier transmisión de datos personales y/o vulneración a los mismos por causas y/o situaciones fuera del control de Maskoapp, será bajo el riesgo del Usuario.

8. Contenidos y Conducta Del Usuario

8.1 General.

8.1.1 Le informamos que Maskoapp, con domicilio en [*], C.P. [*], Ciudad de México, es responsable del tratamiento y protección de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su Reglamento. Maskoapp como responsable del tratamiento de Datos Personales, garantiza su buen uso, protección y confidencialidad; y los utilizará para las finalidades necesarias y/o que den origen a la relación jurídica entre el Usuario y Maskoapp. Para mayor información acerca del tratamiento y de los derechos que puede hacer valer, por favor acceda al aviso de privacidad integral a través del apartado referido como “Aviso de Privacidad” contenido en la Plataforma.

8.1.2 El Usuario declara y reconoce que cualquier Contenido del Usuario que publique o cuelgue no incumple ninguna de las restricciones contenidas en los párrafos 8.2 y 8.3 siguientes.

8.2 Políticas del Contenido del Usuario. Las partes convienen que no se podrá publicar, colgar o descargar en o desde la Plataforma cualquier Contenido del Usuario que, de manera enunciativa y no limitativa:
(i) Incumpla cualquier ley local, nacional o internacional aplicable;
(ii) Sean ilegales o fraudulentos;
(iii) Suponga publicidad no autorizada; o
(iv) Contenga viruses o cualesquiera otros programas dañinos ("malware").

8.3 Políticas de las Opiniones de los Usuarios. Los Comentarios y Opiniones que publique el Usuario en la Plataforma, de manera enunciativa y no limitativa, no deberán:
(i) Contener ningún contenido difamatorio, obsceno ni ofensivo;
(ii) Promover la violencia ni la discriminación;
(iii) Infringir los derechos de propiedad intelectual o industrial de ninguna persona;
(iv) Infringir ninguna obligación legal frente a un tercero (como, por ejemplo, obligación de confidencialidad);
(v) Promover actividades ilegales ni invadir la privacidad de terceros;
(vi) Dar la impresión de que han sido creados por Maskoapp o sus empresas afiliadas o controladoras; ni
(vii) Utilizarse haciéndose pasar por otra persona, física o moral, o falseando su vinculación con cualquier otra persona.

8.4 Eliminación de Opiniones. Maskoapp se reserva el derecho a eliminar, por cualquier motivo, en cualquier momento las Opiniones y demás contenidos publicados y colgados por los Usuarios en la Plataforma de Maskoapp.

8.5 Uso de las Opiniones. El Usuario conviene y reconoce que Maskoapp no será responsable frente a cualesquiera terceros por las Opiniones y el Contenido de los Usuarios. 

8.6 Responsabilidad. El Usuario conviene y reconoce que deberá sacar en paz y a salvo a Maskoapp de cualquier pérdida y/o daño y/o perjuicio y/o queja y/o reclamación (y demás gastos relacionados) en que Maskoapp pudiere incurrir o que se pudiera iniciar en contra de Maskoapp por un Tercero Interesado o por cualquier tercero como consecuencia de las Opiniones de los Usuarios.

8.7 Divulgación a las Autoridades Competentes. Maskoapp podrá cooperar plenamente, sin responsabilidad alguna, con cualquiera autoridad competente que mediante orden judicial o administrativa o de cualquier naturaleza similar le solicite o le requiera revelar la identidad o localización de quién haya publicado Opiniones o Contenido del Usuario.

9. Links a, y desde, otros Sitios Web

9.1 Permiso de Redireccionamiento. Las Partes convienen que el Usuario podrá redireccionar al Sitio Web de Maskoapp desde otro sitio web, siempre y cuando dicho redireccionamiento se realice:

9.1.1 De una forma razonable y en estricto cumplimiento con la legislación aplicable, sin que perjudique la reputación de Maskoapp o de sus compañías afiliadas o controladoras, ni se aproveche de la misma, con o sin fines de lucro.

9.1.2 Desde una página web que sea titularidad del Usuario y bajo ningún supuesto deberá sugerir alguna asociación con, o patrocinio de, Maskoapp y/o sus empresas afiliadas o controladoras.

9.1.3 Desde una página web que cumpla con los estándares de contenido establecidos en los Términos y Condiciones de la Plataforma y las políticas de Maskoapp.
Maskoapp tendrá derecho de retirar el permiso de redirección en cualquier momento.

10. Exoneración de Responsabilidad

10.1 Información de la Plataforma. El Usuario conviene y reconoce que Maskoapp no garantiza que la información en su Plataforma sea en todo momento completa y correcta toda vez que dicha información es suministrada por los Terceros Involucrados. Las partes convienen que Maskoapp podrá realizar cambios en los contenidos de la Plataforma en cualquier momento, sin necesidad de entregar previo aviso al Usuario y sin responsabilidad alguna.

10.2 Alergias, Dietas y otra Información. El Usuario acepta y reconoce que es responsabilidad exclusiva de los Terceros Involucrados proporcionar información correcta y completa de los nombres de los Productos, descripciones, precios e información de ofertas especiales, así como advertencias por alergias y de temperatura de los Productos y demás información ("Información de los Productos"). El Usuario conviene y reconoce que Maskoapp no será responsable de ninguna manera por la Información de los Productos por lo que en este acto renuncia de forma definitiva a cualquier derecho que pudiere corresponderle de conformidad con la legislación aplicable a presentar cualquier tipo de acción o demanda de cualquier naturaleza en contra de Maskoapp que de cualquier forma se relacionará con la Información de los Productos.
En caso de que el Usuario tuviere cualquier duda acerca de las advertencias, los ingredientes de un alimento o cualquier otra Información de los Productos, deberá confirmarlo directamente con el Tercero Interesado en cuestión.

10.3 Acciones y Omisiones del Tercero Interesado. Las Partes convienen que toda vez que Maskoapp fungirá, en virtud de los presentes Términos y Condiciones, únicamente como un intermediario entre el Usuario y los Terceros Interesados correspondientes, la relación jurídica a través de la cual el Usuario contrata la prestación, preparación, compra, entrega y consumo de un Productos es exclusivamente entre el Usuario y el Tercero Interesado correspondiente por lo que Maskoapp no tendrá control o responsabilidad alguna sobre las acciones u omisiones del Tercero Interesado correspondiente. Mediante el uso de los Servicios el Usuario conviene y reconoce, incluyendo sin limitar, que:
(i) Maskoapp no ofrece ninguna garantía ni será responsable de que los Productos solicitados vayan a ser de calidad satisfactoria para el Usuario;
(ii) Maskoapp no garantiza ni será responsable que los pedidos sean entregados o estén disponibles para recogerlos dentro de dichos tiempos estimados; y
(iii) Los proveedores de sistemas para el pago de los Servicios y Productos a través de la Plataforma son los únicos responsables de utilizar la información del Usuario para tales efectos, así como de los cargos, contracargos o abonos realizados a la tarjeta de crédito y/o débito del Usuario. El Usuario conviene y reconoce que Maskoapp no será responsable por lo mencionado en este párrafo.  

11. Responsabilidad

11.1 General. Las Partes convienen que Maskoapp únicamente será responsable por daños ocasionados al Usuario que derivaren directamente de la negligencia o dolo de Maskoapp o por alguna declaración falsa de Maskoapp.

11.2 Exención de Responsabilidad. Sin perjuicio de lo dispuesto en la Cláusula 11.1 de los presente Términos y Condiciones, bajo ninguna circunstancia Maskoapp será responsable de:
(i)           Perjuicios, daños indirectos, morales, consecuenciales o punitivos;
(ii)          Cualquier pérdida de beneficios, ventas, negocios o ingresos;
(iii)         Pérdida o corrupción de datos, información o software;
(iv)          La pérdida de oportunidades de negocio;
(v)           Pérdida de los ahorros anticipados; o
(vi)          La pérdida del fondo de comercio.

11.3 Limitación de la Responsabilidad. Las Partes convienen que la responsabilidad de Maskoapp frente al Usuario en relación con el uso de la Plataforma y los Servicios se encuentra limitada a un importe equivalente al monto del Servicio con motivo del cual se hubiera presentado el evento y hasta por un monto máximo equivalente al valor más alto del pedido de un Usuario que Maskoapp tenga registrado.

11.4 Todo tipo de actividad en contravención a estos Términos y Condiciones por parte del Usuario será investigada por Maskoapp y el infractor podrá ser sancionado con la suspensión o cancelación de su Registro como Usuario y/o de cualquier otra forma a la entera discreción de Maskoapp. Lo anterior, sin perjuicio de las acciones legales que pudieren llegar a existir por la configuración de delitos o ilícitos que los Usuarios pudieren llegar a causar a los demás Usuarios, a la Plataforma o a Maskoapp.

11.5 El Usuario indemnizará y se obliga a sacar en paz y a salvo a Maskoapp, sus filiales, empresas controladas y/o controlantes, socios, accionistas, directivos, administradores, representantes y empleados, por cualquier reclamo o demanda de otros Usuarios o terceros por las actividades del Usuario y/o sus directivos y/o administradores y/o representantes y/o empleados y/o agentes en la Plataforma o por su incumplimiento a estos Términos y Condiciones o por la violación de cualesquiera leyes o derechos de terceros, incluyendo el pago de honorarios de abogados.

12. Acontecimientos Fuera Del Control de Maskoapp

12.1 Maskoapp no será responsable del incumplimiento de sus obligaciones conforme a los presentes Términos y Condiciones ocasionado por un caso fortuito o de fuerza mayor ("Caso Fortuito y/o de Fuerza Mayor").

12.2 Por Caso Fortuito y/o de Fuerza Mayor se entenderá cualquier acto, evento, omisión o accidente que se encuentre fuera del control de Maskoapp o del de los Terceros Involucrados, o que no fuera razonablemente previsible por Maskoapp o por los Terceros Involucrados, e incluye sin limitación los siguientes:
(i) Huelgas, paros o cualquier otra acción similar;
(ii) Revueltas civiles, motines, invasiones, ataques terroristas, guerras (declaradas o no), amenazas o preparaciones de guerra;
(iii) Imposibilidad para transitar por las vías de comunicación federales o locales en virtud de bloqueos, cierres viales o cualquier otra acción similar de las autoridades o particulares;
(iv) Imposibilidad de utilizar el ferrocarril, barcos, aviones, transportes a motor o cualquier otro tipo de transporte público o privado;
(v) Imposibilidad de uso de las redes de telecomunicaciones públicas o privadas;
(vi) Los actos, decretos, legislación, regulación o restricciones de cualquier gobierno;
(vii) Incendio, explosión, tormenta, inundación, terremoto, hundimiento, epidemias y cualquier otro desastre natural; y
(viii) Caídas de árboles, anuncios, suspensión de servicios básicos y/o de telecomunicaciones.

12.3 Las obligaciones de Maskoapp bajo el presente quedarán suspendidas sin responsabilidad alguna durante el tiempo en que dure el supuesto de Caso Fortuito y/o de Fuerza Mayor. Maskoapp tratará de encontrar una solución de manera razonable mediante la cual pueda llevar a cabo sus obligaciones conforme a los presentes Términos y Condiciones sin que Maskoapp esté obligada a hacerlo en el evento de un Caso Fortuito y/o de Fuerza Mayor.

13. Canal de Comunicación
El correo electrónico de atención al usuario de Maskoapp será soporte@maskoapp.mx a través del cual el Usuario podrá solicitar aclaraciones o formular las quejas que considere convenientes.
Todo aviso, solicitud o requerimiento en relación con los presentes Términos y Condiciones deberá ser enviado por correo electrónico.

14. Condiciones Adicionales

14.1 Individualidad de las Cláusulas. En caso que cualquier estipulación o parte de los presentes Términos y Condiciones fuese declarada ilegal, nula, no aplicable o de cualquier otra forma inejecutable por cualquier autoridad competente, dicha estipulación o parte de la misma será eliminada de los presentes Términos y Condiciones, y el resto será aplicado como si dicha estipulación o parte de la misma no existiera.

14.2 Renuncia. Cualquier omisión (total o parcial) o retraso por Maskoapp en la aplicación o ejecución (en su totalidad o en parte) de cualquier disposición o estipulación de estos Términos y Condiciones y/o de los derechos que deriven de los mismos o de cualquier Ley aplicable no será interpretado como una renuncia los derechos o acciones de Maskoapp.

14.3 De conformidad con los artículos 80, 89, 89bis y 90 del Código de Comercio, mediante la aceptación de los presentes Términos y Condiciones, el Usuario otorga su pleno consentimiento y se considera que el presente contrato queda perfeccionado precisamente en el momento en que se recibe la aceptación del Usuario de los presentes Términos y Condiciones en la Plataforma. En el entendido de que, al haber ingresado el Usuario a la Plataforma con los Factores de Autenticación y haber oprimido “Acepto”, se presume que la aceptación de los presentes Términos y Condiciones ha sido enviada por el Usuario. 

15. Plazo de Vigencia
Los presentes Términos se aplicarán por tiempo indefinido.

16. Ley aplicable y Jurisdicción
Los presentes Términos y Condiciones se regirán e interpretarán de conformidad con las leyes federales de los Estados Unidos Mexicanos. Maskoapp y el Usuario se someten expresamente a la jurisdicción de los tribunales competentes en la Ciudad de México y renuncian a cualquier otro fuero o jurisdicción que pudiere corresponderles ahora o en el futuro por razón de su domicilio o por cualquier otra causa.

17. Modificaciones
Nos reservamos el derecho a modificar los presentes Términos y Condiciones en cualquier momento y sin previo aviso.
`,
'en':`Por medio de los presentes términos y condiciones (en adelante, los "Términos y Condiciones"), se regula el servicio de plataforma ofrecido por Maskoapp S. de R.L. de C.V. (en lo sucesivo, "Maskoapp") a través del sitio web [www.maskoapp.mx], o cualquier sitio web que lo sustituya, (en lo sucesivo, el "Sitio Web") y de la aplicación para dispositivos móviles (en lo sucesivo, la "App" y, de manera conjunta con el Sitio Web, la "Plataforma") con la finalidad de que Usted como usuario final de la Plataforma (el "Usuario") solicite a Maskoapp la prestación de servicios y, compra y entrega de determinados productos, para lo cual Maskoapp podrá contratar a cualesquiera prestadores de servicios, incluyendo a cualquier persona moral o física que a su vez contrate a prestadores de servicios independientes.
El Usuario declara haber leído y aceptado, en todas sus partes, estos Términos y Condiciones y se entiende que a partir de su aceptación, éstos le son legalmente vinculantes y obligatorios. Por lo tanto, al aceptar los presentes Términos y Condiciones, podrá acceder a la utilización y aprovechamiento de la Plataforma. En caso contrario, el Usuario deberá abstenerse de acceder a la Plataforma y Servicios, ya sea directa o indirectamente, de utilizar cualquier información o servicio provisto por la misma. La aceptación de los presentes Términos y Condiciones es condición indispensable para registrarse en el Plataforma y acceder a la prestación de los Servicios.
El uso de los datos personales del Usuario que son o sean proporcionados a través del uso de la Plataforma por cualquier motivo incluyendo sin limitar los servicios de entrega, de sus tarjetas bancarias o de cualquier otro dato proporcionado a Maskoapp, se regirá por el Aviso de Privacidad de Maskoapp disponible en la Plataforma.
Maskoapp es una sociedad mercantil debidamente constituida conforme a las leyes de los Estados Unidos Mexicanos e inscrita en el Registro Público de Comercio de la Ciudad de México y con domicilio en la calle [*], Ciudad de México, C.P. [*].

1. Servicios

1.1 El servicio ofrecido por Maskoapp a través de su Plataforma (el "Servicio"), consiste en:
(i) facilitar al Usuario la compra y contratación de los productos y/o servicios ofrecidos a través de la plataforma de Maskoapp que se encuentran relacionados de alguna manera u otra  con cualesquier tipo de mascota (incluyendo sin limitar, perros y gatos) (los “Productos”) mediante la publicación de los Productos ofrecidos en la Plataforma;
(ii) poner en contacto al Usuario y los Productos, a través de la Plataforma, para que el Usuario pueda hacer pedidos de los Productos de acuerdo con las necesidades de su mascota; y
(iii) coordinar la comercialización y entrega a domicilio de los Productos elegidos por el Usuario.

1.2 El Usuario declara conocer y aceptar que Maskoapp no participa en la fabricación, prestación de servicios, preparación, empaque, disponibilidad, recolección y/o entrega física de los Productos, toda vez que dichas actividades son responsabilidad exclusiva del fabricante de los Productos o el prestador de servicios de dichos Productos, o, de los repartidores responsables por la recolección y entrega de los Productos (los “Terceros Involucrados”), según sea aplicable. Por lo anterior, el Usuario conviene que cualquier queja, reclamo, demanda o cualquier otra similar por problemas derivados del cumplimiento del pedido o la prestación de servicios, así como cualquier otro derivado de la fabricación, preparación, empaque, disponibilidad, recolección y/o entrega física de los Productos y cualesquier otro problema o defecto relacionado con los Productos será responsabilidad única y exclusivamente de aquellos Terceros Involucrados que se encuentren relacionados con la fabricación, prestación, recolección, entrega y de cualquier otra manera con los Productos.
Ni Maskoapp, ni sus socios, accionistas, afiliados o licenciantes serán responsables ante cualquier reclamo, lesión o daño que surja en relación con los actos u omisiones de cualquier Terceros Involucrados, incluyendo sin limitar, cualesquier error o deficiencia en la fabricación de los Productos, en la correcta prestación de los servicios (incluyendo el paseo o los servicios de higiene) y, en general, en cualesquier situación que pueda surgir derivado de una negligencia de algún Tercero Involucrado, incluyendo el extravío, lesión, enfermedad, reacción alérgica o cualesquier otra que de forma directa o indirecta afecte a la mascota del Usuario. En caso de presentarse una disputa con uno o más Terceros Involucrados, el Usuario afectado libera incondicionalmente a Maskoapp, sus socios, directores, empleados, subsidiarias, afiliados, agentes y representantes de todos los reclamos, responsabilidades, costos, incluyendo sin limitación honorarios de abogados, pérdidas o daños de cualquier clase o naturaleza, directos o indirectos, que surjan a consecuencia de tales disputas.

1.3 Considerando que Maskoapp únicamente pone a disposición del Usuario una Plataforma electrónica con el objeto de poner en contacto de forma electrónica al Usuario con los Productos no es ni será responsable de la información incluida en los empaques o en la prestación de los Productos que los Terceros Involucrados anuncien ni por cualquiera información adicional relacionada con los mismos.

2. Registro

2.1 Registro del Usuario y Creación de una Cuenta. El Usuario conviene en que como una condición a la contratación de los Servicios de Maskoapp deberá registrarse y proporcionar los datos que le sean requeridos por Maskoapp a través de la Plataforma (el "Registro").
El nombre de usuario o correo electrónico así como la contraseña (los "Factores de Autenticación"), o los factores de autenticación proporcionados por Facebook o cualesquier red social adicional que utilice el Usuario para acceder a su cuenta a través de la Plataforma constituyen una firma electrónica. Por lo anterior, todas las acciones realizadas por el Usuario con los Factores de Autenticación serán atribuidas directa y personalmente al Usuario.

2.2 El Usuario conviene y reconoce que será el exclusivo responsable (incluso desde una perspectiva civil y penal) por la falta de veracidad en la información ingresada en el Registro la cual podrá ser verificada en cualquier momento por Maskoapp. En caso de que el Usuario proporcione información incorrecta, falsa o incompleta, y de negarse a corregirla y a enviar documentación que compruebe la corrección, Maskoapp se reserva el derecho de no concluir con el Registro en curso e, inclusive, de cancelar el Registro ya existente, impidiendo al Usuario utilizar la Plataforma y los Servicios hasta que, a criterio de Maskoapp, la anomalía sea subsanada.

2.3 El Usuario conviene que no podrá permitir que terceras personas accedan a la Plataforma utilizando los Factores de Autenticación del Usuario.

2.4 Al proporcionar todos los datos requeridos en el Registro, el Usuario declara que es mayor de edad y cuenta con la capacidad de ejercicio necesaria y suficiente para registrarse en la Plataforma y contratar los Servicios mediante la celebración de los presentes Términos y Condiciones y cualesquiera otros contratos requeridos o convenientes y para cumplir con las obligaciones que en los mismos se establecen.

3. Cómo Realizar Un Pedido y Cómo Se Procesa

3.1 Realización de un Pedido.  Las partes convienen que una vez que el Usuario seleccione los artículos que desee ordenar, el Usuario podrá realizar su pedido haciendo clic en el botón de "proceder", "realizar mi pedido" o "similar" dentro de la Plataforma. El Usuario será el exclusivo responsable de la información introducida y de realizar cualquier modificación a la misma antes de hacer clic en el botón de "proceder", en el entendido que una vez realizado el pedido ya no podrá modificarse la información proporcionada por el Usuario. 
El Usuario podrá realizar pedidos a través de cualesquiera de las siguientes dos modalidades: (i) Pedido Único - el cual consiste en que el Usuario podrá seleccionar cualquier Producto de la Plataforma que desee adquirir o contratar, mismo que solamente se adquirirá o contratará por una esa sola ocasión, para ser entregado en el plazo establecido en la Plataforma (el “Pedido Único”), teniendo la posibilidad de volver a adquirirlo en cualquier momento posterior, y (ii) Pedido Recurrente - el cual consiste en que el Usuario podrá seleccionar que el Producto seleccionado en su pedido sea adquirido o contratado automáticamente cada cierto periodo de tiempo y con la concurrencia establecida por el propio Usuario, sin necesidad de volver a seleccionar y adquirir el Producto (el “Pedido Recurrente”).

3.2 Modificación o Cancelación de un Pedido. Las partes convienen que, una vez que el Usuario realice un Pedido Único respecto del cual se hubiere autorizado el pago, el pedido no podrá ser cancelado o modificado y el Usuario no tendrá derecho a recibir el reembolso del mismo. Con relación a los Pedidos Recurrentes, el Usuario podrá modificar única y exclusivamente la dirección o fecha de entrega (la cual no podrá adelantarse a su entrega programada en más de un día, ni retrasarse en más de 2 días). Para dichas modificaciones, el Usuario podrá ponerse en contacto con el servicio de atención al Usuario y ellos se encargaran de llevar a cabo dicha modificación sin costo alguno, dichas modificaciones solamente serán permitidas en una sola ocasión por entrega.  

3.3 Autorización de Pago. Las partes convienen que ningún pedido se entenderá realizado y por lo tanto no será procesado hasta que el pago del mismo hubiere sido debidamente autorizado por los procesadores pago correspondientes. En caso de que el pedido realizado por el Usuario sea un Pedido Recurrente, el cargo será realizado al Usuario con 3 días de anticipación a su entrega programada.

3.4 Gestión del Pedido.  Las partes convienen que una vez que el Usuario hubiere realizado un pedido, cuyo pago hubiere sido debidamente autorizado, Maskoapp procesará la solicitud, y enviará al Usuario por correo electrónico una notificación de que el pedido ha sido recibido y que la solicitud está en proceso..

4. Precio y Pago

4.1 IVA y Gastos de Envío. Las partes convienen que los precios de los Productos ofrecidos al Usuario, del uso de la Plataforma y la entrega dichos Productos en el domicilio señalado por el Usuario, en caso de ser requerida, serán los indicados en la Plataforma. Estos precios incluyen el Impuesto al Valor Agregado (IVA). 

4.2 Métodos de Pago. Las partes convienen que el pago de los pedidos por el Usuario a través de la Plataforma deberá realizarse mediante PayPal, una tarjeta de crédito o de débito aceptada por la Plataforma.

4.3 Pagos con Tarjeta. El Usuario conviene y reconoce que Maskoapp cuenta con el servicio de proveedores de procesamientos de pago a través de internet,  los cuales podrán almacenar los datos de la tarjeta de crédito o de débito del Usuario en sus bases de datos, por lo que estos datos personales podrán ser transferidos a dichos proveedores de conformidad con el Aviso de Privacidad de Maskoapp, y únicamente con el fin de estar en posibilidad de prestar al Usuario el servicio contratado. Los proveedores de procesamientos de pago a través de internet, en su carácter en encargados de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares, estarán obligados a tratar los datos personales del Usuario, en todo momento, en estricto apego a lo dispuesto en el Aviso de Privacidad de Maskoapp. 

4.4 Cupones de Prepago y de Descuento. Las partes convienen que un cupón de prepago o de descuento podrá aplicarse por el Usuario para el pago de un pedido siempre y cuando dicho cupón o código sea válido y se encuentre vigente de acuerdo con las políticas de Maskoapp. El saldo faltante una vez aplicado el cupón de prepago o descuento será abonado mediante tarjeta de crédito, débito o efectivo. 

4.5 Maskoapp será la encargada de emitir el comprobante fiscal digital (“CFDI”) en favor del Usuario, cuando así lo requieran los Usuarios, respecto de los pedidos y compras online de los Productos ofrecidos por la Plataforma.

4.6 Respecto de los servicios de uso de la Plataforma y la entrega de los Productos en el domicilio señalado por el Usuario, en caso de ser requerida, Maskoapp deberá emitir el CFDI a favor del Usuario, cuando así lo requieran los Usuarios a Maskoapp mediante la Plataforma.

5. Atención al Usuario

5.1 General. Las partes convienen que el equipo de atención al Usuario de Maskoapp realizará sus mejores esfuerzos para solventar cualquier problema que pudiera tener el Usuario con su pedido. El Usuario podrá contactar al servicio de atención al cliente de Maskoapp a través del siguiente correo electrónico: soporte@masko.com.mx

5.2 Preguntas Acerca de un Pedido. Las partes convienen que en caso de que un pedido este tardando más tiempo de lo esperado o si el Usuario tiene cualquier otro problema con el mismo, el Usuario podrá contactar al servicio de atención al Usuario de Maskoapp con el fin de dar seguimiento.

5.3 Quejas o Sugerencias. Las partes convienen que en caso de que el Usuario no quedara satisfecho con la calidad de los Productos o de los servicios prestados y contratados a través de la Plataforma, podrá proporcionar dicha información en forma de calificaciones, comentarios y reseñas a través del siguiente correo electrónico: soporte@masko.com.mx (en conjunto, los "Comentarios") para reflejar su experiencia, siempre que lo haga en cumplimiento con las políticas que Maskoapp tenga para tal efecto. Las partes convienen que Maskoapp tendrá en todo momento derecho de modificar sus políticas así como de eliminar cualquier comentario realizado por el Usuario que a su sola discreción pudiere tener un efecto negativo o que no cumpliere con dichas políticas.

5.4 Indemnización. Las partes convienen que en caso de que el Usuario no estuviere satisfecho con la calidad de los Productos o de los servicios prestados y desee un reembolso, reducción proporcional del precio o cualquier otro tipo de compensación, Maskoapp no estará en la posibilidad de realizar dicho reembolso, reducción o compensación, toda vez que, el Usuario conviene y reconoce que Maskoapp no será responsable respecto de la calidad de los Productos o de los servicios prestados por lo que en este acto renuncia a cualquier derecho que le pudiere corresponder de conformidad con la legislación aplicable para presentar cualquier tipo de acción, queja o demanda en contra de Maskoapp en relación con la calidad de los Productos o de los servicios prestados. Las Partes convienen que el Usuario deberá indemnizar a Maskoapp de todos los daños y perjuicios que resultaren (incluyendo honorarios de abogados) de cualquier incumplimiento por el Usuario de los presentes Términos y Condiciones.

6. Propiedad Intelectual

6.1 Condiciones Permitidas de Uso. Las partes convienen que el Usuario deberá utilizar la Plataforma para su uso personal y exclusivamente con el objeto de contratar los Servicios establecidos en los presente Términos y Condiciones y bajo ningún supuesto para un fin comercial. El Usuario en este acto conviene en cumplir cabalmente con lo siguiente:

6.1.1 No llevar a cabo un uso fraudulento de la Plataforma (tal como como piratería o "scrapping").

6.1.2 Salvo que se establezca lo contrario en los presente Términos y Condiciones, los derechos de autor y el resto de derechos de propiedad intelectual e industrial de la Plataforma y del contenido publicado en la misma (incluyendo sin limitación, fotografías e imágenes gráficas, así como signos distintivos, encabezados y demás) son la propiedad exclusiva de Maskoapp o de los licenciantes de Maskoapp, según se indique, y los mismos se encuentran reservados por lo que el Usuario no deberá utilizar dichos derechos de propiedad industrial e intelectual de forma alguna.

6.2 Limitaciones de Uso. El Usuario conviene en que no podrá reproducirse ni almacenarse ninguna parte ni ninguno de los contenidos de la Plataforma en ningún otro sitio web o aplicación móvil, ni incluirse en ningún sistema ni servicio electrónico, público o privado, sin el consentimiento previo y por escrito de Maskoapp.

6.3 Autorización de Uso de la Plataforma. Para hacer uso de la Plataforma, Maskoapp en este acto autoriza al Usuario a utilizar de forma gratuita, temporal, no exclusiva e intransferible el software base de la misma únicamente con el objeto de que el Usuario solicite los Servicios en la jurisdicción en que se encuentre dentro del territorio nacional de los Estados Unidos Mexicanos. El Usuario se obliga a no alterar, modificar, adaptar, sublicenciar, traducir, enajenar, hacer ingeniería inversa de, descifrar, descompilar o de otra forma desensamblar en todo o en parte cualquier porción de la Plataforma y/o los archivos o programas de cómputo que los componen, o propiciar que cualesquiera terceros lo hagan por cuenta y orden suya o no, con o sin ánimo de lucro.
La presente autorización podrá ser modificada o revocada en cualquier momento por Maskoapp sin previo aviso necesario al Usuario.

6.4 Los Usuarios otorgan a favor de Maskoapp una autorización de uso gratuita, no exclusiva, perpetua, transferible e irrevocable sobre los Comentarios, opiniones ("Opiniones"), sugerencias, ideas, preguntas o cualquier otro contenido ingresado por el Usuario en la Plataforma ("Contenido del Usuario") para utilizar, reproducir, modificar, adaptar, publicar, traducir o generar obras derivadas de dicho Contenido del Usuario, en forma total o parcial y por cualquier medio. El Usuario conviene y reconoce que son los propietarios de sus Opiniones, que el contenido es preciso, que el uso del contenido proporcionado no viola lo dispuesto en la presente Cláusula o la normativa aplicable ni causa perjuicio a alguna persona o entidad. Asimismo, el Usuario se obliga a sacar en paz y a salvo a Maskoapp por cualquier reclamo resultante del contenido proporcionado. Maskoapp tiene el derecho de supervisar, editar o eliminar cualquier actividad o contenido. Maskoapp no será responsable ni asumirá obligación alguna por cualquier contenido publicado por algún Usuario o tercero, ni asumirá la obligación de publicarlo o de conservarlo en el Plataforma.

7. Acceso al Servicio

7.1 Disponibilidad de la Plataforma. El Usuario conviene y reconoce que Maskoapp no será responsable en caso de que la Plataforma no se encuentre disponible para ser utilizada por cualquier razón.

7.2 Suspensión del Acceso. El acceso a la Plataforma podrá ser suspendido por Maskoapp temporal o permanentemente por cualquier motivo sin necesidad de entregar un previo aviso al Usuario y sin responsabilidad alguna.

7.3 Seguridad de la Información. Las partes convienen que con el objeto de dar cumplimiento a la Ley Federal del Consumidor y la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento, Maskoapp adoptará las medidas de seguridad física, administrativa y técnica necesarias para proteger la información del Usuario, sin embargo, Maskoapp no garantiza totalmente la seguridad de los datos transmitidos a la Plataforma atendiendo a las condiciones del dispositivo y/o la conexión que utilice el Usuario para hacer uso de la Plataforma. Por lo tanto, cualquier transmisión de datos personales y/o vulneración a los mismos por causas y/o situaciones fuera del control de Maskoapp, será bajo el riesgo del Usuario.

8. Contenidos y Conducta Del Usuario

8.1 General.

8.1.1 Le informamos que Maskoapp, con domicilio en [*], C.P. [*], Ciudad de México, es responsable del tratamiento y protección de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de Particulares y su Reglamento. Maskoapp como responsable del tratamiento de Datos Personales, garantiza su buen uso, protección y confidencialidad; y los utilizará para las finalidades necesarias y/o que den origen a la relación jurídica entre el Usuario y Maskoapp. Para mayor información acerca del tratamiento y de los derechos que puede hacer valer, por favor acceda al aviso de privacidad integral a través del apartado referido como “Aviso de Privacidad” contenido en la Plataforma.

8.1.2 El Usuario declara y reconoce que cualquier Contenido del Usuario que publique o cuelgue no incumple ninguna de las restricciones contenidas en los párrafos 8.2 y 8.3 siguientes.

8.2 Políticas del Contenido del Usuario. Las partes convienen que no se podrá publicar, colgar o descargar en o desde la Plataforma cualquier Contenido del Usuario que, de manera enunciativa y no limitativa:
(i) Incumpla cualquier ley local, nacional o internacional aplicable;
(ii) Sean ilegales o fraudulentos;
(iii) Suponga publicidad no autorizada; o
(iv) Contenga viruses o cualesquiera otros programas dañinos ("malware").

8.3 Políticas de las Opiniones de los Usuarios. Los Comentarios y Opiniones que publique el Usuario en la Plataforma, de manera enunciativa y no limitativa, no deberán:
(i) Contener ningún contenido difamatorio, obsceno ni ofensivo;
(ii) Promover la violencia ni la discriminación;
(iii) Infringir los derechos de propiedad intelectual o industrial de ninguna persona;
(iv) Infringir ninguna obligación legal frente a un tercero (como, por ejemplo, obligación de confidencialidad);
(v) Promover actividades ilegales ni invadir la privacidad de terceros;
(vi) Dar la impresión de que han sido creados por Maskoapp o sus empresas afiliadas o controladoras; ni
(vii) Utilizarse haciéndose pasar por otra persona, física o moral, o falseando su vinculación con cualquier otra persona.

8.4 Eliminación de Opiniones. Maskoapp se reserva el derecho a eliminar, por cualquier motivo, en cualquier momento las Opiniones y demás contenidos publicados y colgados por los Usuarios en la Plataforma de Maskoapp.

8.5 Uso de las Opiniones. El Usuario conviene y reconoce que Maskoapp no será responsable frente a cualesquiera terceros por las Opiniones y el Contenido de los Usuarios. 

8.6 Responsabilidad. El Usuario conviene y reconoce que deberá sacar en paz y a salvo a Maskoapp de cualquier pérdida y/o daño y/o perjuicio y/o queja y/o reclamación (y demás gastos relacionados) en que Maskoapp pudiere incurrir o que se pudiera iniciar en contra de Maskoapp por un Tercero Interesado o por cualquier tercero como consecuencia de las Opiniones de los Usuarios.

8.7 Divulgación a las Autoridades Competentes. Maskoapp podrá cooperar plenamente, sin responsabilidad alguna, con cualquiera autoridad competente que mediante orden judicial o administrativa o de cualquier naturaleza similar le solicite o le requiera revelar la identidad o localización de quién haya publicado Opiniones o Contenido del Usuario.

9. Links a, y desde, otros Sitios Web

9.1 Permiso de Redireccionamiento. Las Partes convienen que el Usuario podrá redireccionar al Sitio Web de Maskoapp desde otro sitio web, siempre y cuando dicho redireccionamiento se realice:

9.1.1 De una forma razonable y en estricto cumplimiento con la legislación aplicable, sin que perjudique la reputación de Maskoapp o de sus compañías afiliadas o controladoras, ni se aproveche de la misma, con o sin fines de lucro.

9.1.2 Desde una página web que sea titularidad del Usuario y bajo ningún supuesto deberá sugerir alguna asociación con, o patrocinio de, Maskoapp y/o sus empresas afiliadas o controladoras.

9.1.3 Desde una página web que cumpla con los estándares de contenido establecidos en los Términos y Condiciones de la Plataforma y las políticas de Maskoapp.
Maskoapp tendrá derecho de retirar el permiso de redirección en cualquier momento.

10. Exoneración de Responsabilidad

10.1 Información de la Plataforma. El Usuario conviene y reconoce que Maskoapp no garantiza que la información en su Plataforma sea en todo momento completa y correcta toda vez que dicha información es suministrada por los Terceros Involucrados. Las partes convienen que Maskoapp podrá realizar cambios en los contenidos de la Plataforma en cualquier momento, sin necesidad de entregar previo aviso al Usuario y sin responsabilidad alguna.

10.2 Alergias, Dietas y otra Información. El Usuario acepta y reconoce que es responsabilidad exclusiva de los Terceros Involucrados proporcionar información correcta y completa de los nombres de los Productos, descripciones, precios e información de ofertas especiales, así como advertencias por alergias y de temperatura de los Productos y demás información ("Información de los Productos"). El Usuario conviene y reconoce que Maskoapp no será responsable de ninguna manera por la Información de los Productos por lo que en este acto renuncia de forma definitiva a cualquier derecho que pudiere corresponderle de conformidad con la legislación aplicable a presentar cualquier tipo de acción o demanda de cualquier naturaleza en contra de Maskoapp que de cualquier forma se relacionará con la Información de los Productos.
En caso de que el Usuario tuviere cualquier duda acerca de las advertencias, los ingredientes de un alimento o cualquier otra Información de los Productos, deberá confirmarlo directamente con el Tercero Interesado en cuestión.

10.3 Acciones y Omisiones del Tercero Interesado. Las Partes convienen que toda vez que Maskoapp fungirá, en virtud de los presentes Términos y Condiciones, únicamente como un intermediario entre el Usuario y los Terceros Interesados correspondientes, la relación jurídica a través de la cual el Usuario contrata la prestación, preparación, compra, entrega y consumo de un Productos es exclusivamente entre el Usuario y el Tercero Interesado correspondiente por lo que Maskoapp no tendrá control o responsabilidad alguna sobre las acciones u omisiones del Tercero Interesado correspondiente. Mediante el uso de los Servicios el Usuario conviene y reconoce, incluyendo sin limitar, que:
(i) Maskoapp no ofrece ninguna garantía ni será responsable de que los Productos solicitados vayan a ser de calidad satisfactoria para el Usuario;
(ii) Maskoapp no garantiza ni será responsable que los pedidos sean entregados o estén disponibles para recogerlos dentro de dichos tiempos estimados; y
(iii) Los proveedores de sistemas para el pago de los Servicios y Productos a través de la Plataforma son los únicos responsables de utilizar la información del Usuario para tales efectos, así como de los cargos, contracargos o abonos realizados a la tarjeta de crédito y/o débito del Usuario. El Usuario conviene y reconoce que Maskoapp no será responsable por lo mencionado en este párrafo.  

11. Responsabilidad

11.1 General. Las Partes convienen que Maskoapp únicamente será responsable por daños ocasionados al Usuario que derivaren directamente de la negligencia o dolo de Maskoapp o por alguna declaración falsa de Maskoapp.

11.2 Exención de Responsabilidad. Sin perjuicio de lo dispuesto en la Cláusula 11.1 de los presente Términos y Condiciones, bajo ninguna circunstancia Maskoapp será responsable de:
(i)           Perjuicios, daños indirectos, morales, consecuenciales o punitivos;
(ii)          Cualquier pérdida de beneficios, ventas, negocios o ingresos;
(iii)         Pérdida o corrupción de datos, información o software;
(iv)          La pérdida de oportunidades de negocio;
(v)           Pérdida de los ahorros anticipados; o
(vi)          La pérdida del fondo de comercio.

11.3 Limitación de la Responsabilidad. Las Partes convienen que la responsabilidad de Maskoapp frente al Usuario en relación con el uso de la Plataforma y los Servicios se encuentra limitada a un importe equivalente al monto del Servicio con motivo del cual se hubiera presentado el evento y hasta por un monto máximo equivalente al valor más alto del pedido de un Usuario que Maskoapp tenga registrado.

11.4 Todo tipo de actividad en contravención a estos Términos y Condiciones por parte del Usuario será investigada por Maskoapp y el infractor podrá ser sancionado con la suspensión o cancelación de su Registro como Usuario y/o de cualquier otra forma a la entera discreción de Maskoapp. Lo anterior, sin perjuicio de las acciones legales que pudieren llegar a existir por la configuración de delitos o ilícitos que los Usuarios pudieren llegar a causar a los demás Usuarios, a la Plataforma o a Maskoapp.

11.5 El Usuario indemnizará y se obliga a sacar en paz y a salvo a Maskoapp, sus filiales, empresas controladas y/o controlantes, socios, accionistas, directivos, administradores, representantes y empleados, por cualquier reclamo o demanda de otros Usuarios o terceros por las actividades del Usuario y/o sus directivos y/o administradores y/o representantes y/o empleados y/o agentes en la Plataforma o por su incumplimiento a estos Términos y Condiciones o por la violación de cualesquiera leyes o derechos de terceros, incluyendo el pago de honorarios de abogados.

12. Acontecimientos Fuera Del Control de Maskoapp

12.1 Maskoapp no será responsable del incumplimiento de sus obligaciones conforme a los presentes Términos y Condiciones ocasionado por un caso fortuito o de fuerza mayor ("Caso Fortuito y/o de Fuerza Mayor").

12.2 Por Caso Fortuito y/o de Fuerza Mayor se entenderá cualquier acto, evento, omisión o accidente que se encuentre fuera del control de Maskoapp o del de los Terceros Involucrados, o que no fuera razonablemente previsible por Maskoapp o por los Terceros Involucrados, e incluye sin limitación los siguientes:
(i) Huelgas, paros o cualquier otra acción similar;
(ii) Revueltas civiles, motines, invasiones, ataques terroristas, guerras (declaradas o no), amenazas o preparaciones de guerra;
(iii) Imposibilidad para transitar por las vías de comunicación federales o locales en virtud de bloqueos, cierres viales o cualquier otra acción similar de las autoridades o particulares;
(iv) Imposibilidad de utilizar el ferrocarril, barcos, aviones, transportes a motor o cualquier otro tipo de transporte público o privado;
(v) Imposibilidad de uso de las redes de telecomunicaciones públicas o privadas;
(vi) Los actos, decretos, legislación, regulación o restricciones de cualquier gobierno;
(vii) Incendio, explosión, tormenta, inundación, terremoto, hundimiento, epidemias y cualquier otro desastre natural; y
(viii) Caídas de árboles, anuncios, suspensión de servicios básicos y/o de telecomunicaciones.

12.3 Las obligaciones de Maskoapp bajo el presente quedarán suspendidas sin responsabilidad alguna durante el tiempo en que dure el supuesto de Caso Fortuito y/o de Fuerza Mayor. Maskoapp tratará de encontrar una solución de manera razonable mediante la cual pueda llevar a cabo sus obligaciones conforme a los presentes Términos y Condiciones sin que Maskoapp esté obligada a hacerlo en el evento de un Caso Fortuito y/o de Fuerza Mayor.

13. Canal de Comunicación
El correo electrónico de atención al usuario de Maskoapp será soporte@maskoapp.mx a través del cual el Usuario podrá solicitar aclaraciones o formular las quejas que considere convenientes.
Todo aviso, solicitud o requerimiento en relación con los presentes Términos y Condiciones deberá ser enviado por correo electrónico.

14. Condiciones Adicionales

14.1 Individualidad de las Cláusulas. En caso que cualquier estipulación o parte de los presentes Términos y Condiciones fuese declarada ilegal, nula, no aplicable o de cualquier otra forma inejecutable por cualquier autoridad competente, dicha estipulación o parte de la misma será eliminada de los presentes Términos y Condiciones, y el resto será aplicado como si dicha estipulación o parte de la misma no existiera.

14.2 Renuncia. Cualquier omisión (total o parcial) o retraso por Maskoapp en la aplicación o ejecución (en su totalidad o en parte) de cualquier disposición o estipulación de estos Términos y Condiciones y/o de los derechos que deriven de los mismos o de cualquier Ley aplicable no será interpretado como una renuncia los derechos o acciones de Maskoapp.

14.3 De conformidad con los artículos 80, 89, 89bis y 90 del Código de Comercio, mediante la aceptación de los presentes Términos y Condiciones, el Usuario otorga su pleno consentimiento y se considera que el presente contrato queda perfeccionado precisamente en el momento en que se recibe la aceptación del Usuario de los presentes Términos y Condiciones en la Plataforma. En el entendido de que, al haber ingresado el Usuario a la Plataforma con los Factores de Autenticación y haber oprimido “Acepto”, se presume que la aceptación de los presentes Términos y Condiciones ha sido enviada por el Usuario. 

15. Plazo de Vigencia
Los presentes Términos se aplicarán por tiempo indefinido.

16. Ley aplicable y Jurisdicción
Los presentes Términos y Condiciones se regirán e interpretarán de conformidad con las leyes federales de los Estados Unidos Mexicanos. Maskoapp y el Usuario se someten expresamente a la jurisdicción de los tribunales competentes en la Ciudad de México y renuncian a cualquier otro fuero o jurisdicción que pudiere corresponderles ahora o en el futuro por razón de su domicilio o por cualquier otra causa.

17. Modificaciones
Nos reservamos el derecho a modificar los presentes Términos y Condiciones en cualquier momento y sin previo aviso.
`}

const privacyText = {
  'es': `Maskoapp S. de R.L. de C.V. (“Maskoapp”), con domicilio en la calle [*], Ciudad de México, C.P. [*], en su carácter de responsable del tratamiento de sus Datos Personales (según se define más adelante), pone a su disposición el presente aviso de privacidad (el “Aviso de Privacidad”) de conformidad con la Ley Federal de Datos Personales en Posesión de los Particulares (la “Ley”), su Reglamento (el “Reglamento”) y los Lineamientos del Aviso de Privacidad (los “Lineamientos”).
  Maskoapp es una sociedad mercantil legalmente constituida de conformidad con las leyes de los Estados Unidos Mexicanos y cuya principal actividad es la comercialización y prestación de servicios relacionados de alguna manera u otra con mascotas y sus dueños, esto se hace a través de un sistema de internet de compra, y en general el comercio electrónico desde la empresa al consumidor final y cualquier otra prestación de servicio de comercio electrónico relacionada o derivada de lo anterior.
  
(A) Información proporcionada por el usuario.
Para llevar a cabo las Finalidades descritas en la Sección (B) del presente aviso de privacidad, Maskoapp podrá recabar los siguientes datos personales (los “Datos Personales”) de diversas formas a través de su aplicación móvil o sitio de internet (ambos denominados conjunta y separadamente como el “Portal”), a saber:
  
(i) Para la creación, uso y mantenimiento de una Cuenta de Usuario, requerimos los siguientes datos personales del usuario:
  ·         Nombre
  ·         Correo Electrónico
  ·     Cuenta de Facebook (en caso de que el usuario utilice esa plataforma para iniciar el proceso de creación de cuenta de usuario)
  ·         Teléfono (Celular o fijo)
  ·         Método de Pago (Tarjetas de crédito, débito o cuenta Paypal)
  ·         Datos Fiscales
  ·         Domicilio
  ·         Documentación que permita verificar la identidad y métodos de pago del usuario
  ·      Diversos datos de su mascota, incluyendo, nombre, raza, edad, algún problema de carácter médico, entre otros.
  
Maskoapp no recaba datos personales sensibles para cumplir con las Finalidades Primarias o Secundarias descritas en este aviso.
Usted reconoce y garantiza que en caso de que decida voluntariamente transferir a Maskoapp datos personales de terceros en cualquier etapa previa o posterior al proceso de creación de la cuenta a la que usted postule, ha obtenido con anticipación el consentimiento de dichos terceros en la forma que corresponda (tácito y/o expreso y/o expreso por escrito), ha puesto a su disposición este aviso de privacidad y ha comunicado que el titular cuenta con un plazo de cinco días hábiles para que, de ser el caso, manifieste su negativa para el tratamiento de sus datos personales con respecto a las Finalidades Secundarias (como se define más adelante), lo anterior, a fin de que Maskoapp pueda recibir y tratar dichos datos de manera legítima. En el caso de que usted no cumpla con lo anterior, usted asume total responsabilidad de las consecuencias jurídicas que resulten.
  
(B) Finalidades de Tratamiento.
Finalidades Primarias. (Dan origen y son necesarias para la relación entre usted y Maskoapp).
Maskoapp tratará sus datos personales con la finalidad de: (i) identificarlo, (ii) llevar a cabo las operaciones inherentes a nuestro negocio, (iii) cumplir con las obligaciones legales y comerciales que se originen con motivo de la creación de su propia cuenta de usuario creada por usted, según corresponda dentro del contexto de los servicios ofrecidos en el sitio web, aplicaciones móviles y/o plataforma operados por Maskoapp, (iv) cumplir con la normatividad en materia de protección de datos y demás normatividad vigente y aplicable a los servicios prestados por Maskoapp (v) atender dudas, quejas y sugerencias relacionadas con la prestación de nuestros servicios en el segmento que corresponda, bien como usuario o como administrador de una cuenta de comercio, (vi) realizar cualquier otra actividad para dar seguimiento a nuestra relación comercial en caso de llegar a existir, y (vii) mantener comunicación en general en relación con la prestación de servicios por parte de Maskoapp.
Finalidades Secundarias. (No dan origen a la relación entre usted y Maskoapp, pero son importantes para la correcta prestación de nuestros servicios).
Maskoapp podrá contactarlo y en su caso, enviarle información con las siguientes finalidades: (i) darle a conocer promociones, campañas de marketing, eventos, nuevos productos y/ servicios, (ii) realizar cualquier acción comercial, de mercadotecnia, estadística, prospección y/o análisis de mercado para generar informes estadísticos, (iii) conocer sus patrones de consumo o tendencias, y (iv) realizar encuestas sobre la calidad de nuestros servicios.
  
(C)Mecanismos para manifestar la negativa del tratamiento para Finalidades Secundarias.
En caso de que no quiera que sus Datos Personales sean utilizados para cualesquiera de las Finalidades Secundarias anteriormente descritas, usted podrá comunicárnoslo a nuestro departamento de privacidad a través del siguiente correo electrónico: [*]@Maskoapp.com. Su negativa para el tratamiento de sus datos conforme a las Finalidades Secundarias, no representan un motivo que imposibilite a Maskoapp la prestación de los servicios o que nos conduzca a dar por terminada la relación establecida.
Este mecanismo se encuentra implementado a través de una casilla en la aplicación móvil, el cual está disponible al momento en que el titular consulta el aviso de privacidad. En todos los casos, este mecanismo permite que el titular manifieste su negativa previo al tratamiento de sus datos personales o al aprovechamiento de los mismos.
  
(D) Transferencia de datos personales.
Maskoapp podrá transferir tus datos de identificación y contacto a aquellos comercios que nos los soliciten y que estén registrados en nuestra plataforma o que de manera recurrente nos presten servicios con relación a la venta de productos y servicios a fin de (i) personalizar tu experiencia con ellos como consumidor de sus productos y/o servicios, (ii) registrarte en sus sistemas como su consumidor y (iii) qué te hagan llegar información promocional sobre sus productos y servicios. Sin embargo, previo a dicha transferencia solicitaremos su consentimiento, por tanto, nos comprometemos a no transferir, compartir ni transmitir sus datos personales a terceros sin su consentimiento previo, salvo cuando: (i) la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar por su interés con algún proveedor o empresa clave para la prestación del servicio, (ii) cuando la transferencia se realice entre nuestras subsidiarias, afiliadas y/o nuestra casa matriz, (iii) cuando la transferencia sea necesaria para el cumplimiento o mantenimiento de una relación jurídica entre usted y Maskoapp, incluyendo sin limitar los datos de identificación necesarios a efecto de que un repartidor o prestador de servicios pueda efectivamente llevar a cabo los actos solicitados por el consumidor, (iv) en caso fusión o venta de todo o parte de la compañía, y/o (v) en caso de que se actualicen cualquiera de los supuestos establecidos en el Artículo 37 de la Ley.
En los casos en que proceda la transferencia de datos personales a algún tercero en los escenarios en los que no requerimos obtener su consentimiento, le informamos que dichos terceros asumen las mismas obligaciones y responsabilidades asumidas por Maskoapp, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. En caso de que consientas la transferencia a los terceros que se mencionan al principio del párrafo anterior, te sugerimos que acudas a los sitios web de dichos terceros para que te informes del tratamiento y prácticas de privacidad de los mismos ya que no podemos hacernos responsables de dichas prácticas ni del tratamiento que estos le den a tus datos al consentir tu registro como consumidor en sus sistemas.
  
(E) Cláusula para consentir la transferencia de datos personales.
Le comentamos que estaremos solicitando su consentimiento al momento de la compra mediante opciones de marcado para efectuar las transferencias en las cuales requerimos del mismo. De cualquier forma, en caso de que quisiera negarse a que efectuemos las transferencias en comento, también tiene la opción de enviar un correo a nuestro departamento de privacidad a través del siguiente correo electrónico: [*]@Maskoapp.com.
  
(F)  Ejercicio de los Derechos ARCO
Usted podrá solicitar ante Maskoapp el ejercicio de sus derechos de acceso rectificación, cancelación y oposición al tratamiento de sus Datos Personales (“Derechos ARCO”), para lo cual, Maskoapp pone a su disposición la guía y formulario “Solicitud para ejercer Derechos ARCO” que podrá descargar a través de las siguientes ligas:
https://transparencia.senado.gob.mx/documentos/Guia_ejercer_derechos_ARCO.pdf
https://www.sarcoem.org.mx/sarcoem/ciudadano/login.page
Una vez que usted descargue el formulario anterior y lo complete conforme a las instrucciones que en él se incluyen, deberá proceder a firmarlo y enviarlo a Maskoapp a través del correo electrónico [*]@Maskoapp.com acompañando la siguiente documentación o información digitalizada: (i) documento que acredite su identidad o en su caso, la representación legal de quien actúe en su nombre; (ii) en los casos específicos de rectificación, deberá adjuntar el documento probatorio del cambio requerido; (iii) cualquier otra información o documento que facilite la localización de sus Datos Personales y nos ayude a desahogar su solicitud de acceso correctamente. En caso de así preferirlo, podrá optar por presentar el formato de solicitud debidamente firmado, junto con sus anexos, directamente en las oficinas de Maskoapp, ubicadas en la calle [*], Ciudad de México, C.P. [*], en días hábiles, con horario de atención de lunes a viernes de 9:00 a 16:00 horas.
Es importante que tome en cuenta que, si la Solicitud para Ejercer derechos ARCO no se acompaña de la información o documentación necesaria para ser atendida, Maskoapp podrá solicitar la información faltante por medio de un REQUERIMIENTO, el cual se deberá emitir en un plazo máximo de 5 días hábiles contados a partir del día siguiente de la presentación de la Solicitud para ejercer Derechos ARCO, y usted tendrá 10 días hábiles, después de recibir dicho REQUERIMIENTO para proporcionar la información o documentación requerida, pues de lo contrario se tendrá como no presentada su Solicitud.
Maskoapp se compromete a responder a su solicitud dentro de los 10 (diez) días hábiles siguientes a la fecha en que fue recibida la misma. Se entenderá que la solicitud ha sido recibida el día en que Maskoapp acuse de recibido su solicitud mediante correo electrónico enviado a su dirección de correo electrónico. El plazo podrá ampliarse por 5 (cinco) días hábiles según las circunstancias del caso.
La resolución adoptada se le comunicará mediante un correo electrónico enviado a la dirección de correo que haya utilizado el usuario para promover la solicitud ante Maskoapp y/o por el medio que usted señale para dichos efectos.
Nuestra respuesta a la información solicitada será proporcionada por medio de un correo electrónico a la dirección que haya indicado en su solicitud, con independencia de que la misma haya sido presentada en las instalaciones de Maskoapp, Asimismo, en caso de que Maskoapp no cuente con la información solicitada, dicha circunstancia se hará de su conocimiento mediante el medio de comunicación a que hace referencia el presente párrafo.
Asimismo, le informamos que usted puede iniciar el procedimiento de Protección de Derechos ARCO, ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (“INAI”) (antes Instituto Federal de Acceso a la Información y Protección de Datos Personales), dentro de los 15 días siguientes a la fecha en que la responsable dé respuesta a su solicitud y ésta no le sea satisfactoria, o bien, si transcurrido el término señalado, la responsable no diera respuesta a su solicitud.
  
(G) Consentimiento.
El tratamiento que realice Maskoapp de sus Datos Personales se encontrará sujeto a que usted consienta, de manera expresa o tácita, el uso de sus Datos Personales de conformidad con las Finalidades establecidas en el apartado (B) anterior. Para efectos de la Ley, su Reglamento y los Lineamientos, se entiende por consentimiento tácito la no oposición del usuario a la obtención, uso, divulgación o transferencia al momento en que se hagan de su conocimiento los términos y condiciones del presente Aviso de Privacidad.
De conformidad con lo anterior, le informamos que usted cuenta con el derecho de revocar su consentimiento en cualquier momento, para lo cual deberá completar el formato único de Solicitud para ejercer Derechos ARCO y enviarlo al correo electrónico o a la dirección referida en el apartado (F) anterior. En caso de que usted desee revocar su consentimiento, independientemente de la forma en que este se haya otorgado, deberá adjuntar a su Solicitud para ejercer Derechos ARCO los documentos a que hace referencia el apartado (F) anterior, según corresponda.
En este sentido, Maskoapp se compromete a dar respuesta a su solicitud mediante correo electrónico enviado a la dirección empleada por el usuario en un plazo no mayor a 10 (diez) días hábiles, pudiendo ampliarse por un plazo no mayor a 5 (cinco) días hábiles en los casos en que se dificulte la localización de los Datos Personales del usuario por circunstancias ajenas a Maskoapp.
  
(H) Limitación de uso y divulgación de información.
En cualquier momento, usted podrá limitar el uso y divulgación de sus Datos personales mediante el envío de un correo electrónico a la dirección que se menciona en el punto (C) anterior o mediante su registro en el Registro Público para Evitar Publicidad implementado por la Procuraduría Federal del Consumidor en el siguiente link: https://repep.profeco.gob.mx/ y/o en el Registro Público de Usuarios que no deseen información publicitaria de Productos y Servicios Financieros (REUS) implementado por la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros en el siguiente link: https://webapps. condusef.gob.mx/reus/ app/registro.jsp.
Hacemos de su conocimiento que sus Datos Personales serán salvaguardados en todo momento bajo los más altos estándares de seguridad, garantizando en todo momento, la más estricta confidencialidad y privacidad de los mismos, apegándonos en todo momento a lo establecido por la Ley, su Reglamento y los Lineamientos.
  
(I) Medidas de seguridad.
Toda la información y datos personales que usted proporcione a Maskoapp, se encuentran debidamente protegidos por servidores seguros propiedad de Maskoapp o de terceros profesionales contratados por nosotros bajo diversos protocolos de seguridad a efecto de evitar el acceso no autorizado a sus datos personales y procurar que los mismos sean estrictamente utilizados para los fines descritos en este Aviso de Privacidad
  
(J) Cookies
Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar al servidor de Internet algunos datos sobre dicho usuario, tales como sus preferencias para la visualización de las páginas en ese servidor, nombre y contraseña. Maskoapp utiliza la información almacenada en la cookie con la única finalidad de facilitarle el uso de nuestro sitio de internet. Usted puede inhabilitar las cookies en cualquier momento. Para mayor información sobre cómo hacerlo, usted podrá contactarnos a través del siguiente correo electrónico: [*]@Maskoapp.com.
Asimismo, Maskoapp hace de su conocimiento que a través del uso de este tipo de tecnología, diversos datos personales son obtenidos y, se hace de su conocimiento que el uso de dichas tecnología podrán deshabilitarse a través de una comunicación o advertencia colocada en un lugar visible, en el momento en el que el usuario tiene contacto con las mismas.
  
(K) Cambios en el aviso de privacidad
Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado. Los cambios a que se refiere el presente apartado se publicarán dentro del Portal.
En caso de que usted no se esté de acuerdo con las modificaciones que se pudieran presentar, usted cuenta con el derecho a oponerse al tratamiento de sus Datos Personales. En este sentido, deberá enviar el formato único de Solicitud para ejercer derechos ARCO, al correo electrónico o a la dirección mencionada en el inciso (F) anterior.
Si usted en algún caso considera que han sido vulnerados sus derechos respecto de la protección de datos personales, tiene el derecho de acudir a la autoridad correspondiente para defender su ejercicio. La autoridad es el INAI, su sitio web es: www.ifai.gob.mx
  
(L) Área de Datos Personales
Para cualquier asunto relacionado con este Aviso de Privacidad, el tratamiento de sus datos personales y/o para el ejercicio de sus Derechos ARCO, usted tendrá las siguientes opciones (i) acudir directamente a las oficinas de Maskoapp cuyo domicilio ya ha sido establecido; (ii) efectuar su solicitud por escrito vía correo electrónico a nuestro departamento de privacidad: [*]@Maskoapp.com con horario de atención de lunes a viernes de 9:00 a 16:00 horas.
  
NOTA ACLARATORIA
En los términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares la Responsable del Tratamiento de los Datos Personales es Maskoapp, S. de R.L. de C.V. (“La Responsable”) con domicilio en [*], Ciudad de México, C.P. [*], en días hábiles, con horario de atención de lunes a viernes de 9:00 a 16:00 horas, o visitar nuestra página de Internet en www.Maskoapp.com. 
  
`,
'en':`Maskoapp S. de R.L. de C.V. (“Maskoapp”), con domicilio en la calle [*], Ciudad de México, C.P. [*], en su carácter de responsable del tratamiento de sus Datos Personales (según se define más adelante), pone a su disposición el presente aviso de privacidad (el “Aviso de Privacidad”) de conformidad con la Ley Federal de Datos Personales en Posesión de los Particulares (la “Ley”), su Reglamento (el “Reglamento”) y los Lineamientos del Aviso de Privacidad (los “Lineamientos”).
Maskoapp es una sociedad mercantil legalmente constituida de conformidad con las leyes de los Estados Unidos Mexicanos y cuya principal actividad es la comercialización y prestación de servicios relacionados de alguna manera u otra con mascotas y sus dueños, esto se hace a través de un sistema de internet de compra, y en general el comercio electrónico desde la empresa al consumidor final y cualquier otra prestación de servicio de comercio electrónico relacionada o derivada de lo anterior.

(A) Información proporcionada por el usuario.
Para llevar a cabo las Finalidades descritas en la Sección (B) del presente aviso de privacidad, Maskoapp podrá recabar los siguientes datos personales (los “Datos Personales”) de diversas formas a través de su aplicación móvil o sitio de internet (ambos denominados conjunta y separadamente como el “Portal”), a saber:

(i) Para la creación, uso y mantenimiento de una Cuenta de Usuario, requerimos los siguientes datos personales del usuario:
·         Nombre
·         Correo Electrónico
·     Cuenta de Facebook (en caso de que el usuario utilice esa plataforma para iniciar el proceso de creación de cuenta de usuario)
·         Teléfono (Celular o fijo)
·         Método de Pago (Tarjetas de crédito, débito o cuenta Paypal)
·         Datos Fiscales
·         Domicilio
·         Documentación que permita verificar la identidad y métodos de pago del usuario
·      Diversos datos de su mascota, incluyendo, nombre, raza, edad, algún problema de carácter médico, entre otros.

Maskoapp no recaba datos personales sensibles para cumplir con las Finalidades Primarias o Secundarias descritas en este aviso.
Usted reconoce y garantiza que en caso de que decida voluntariamente transferir a Maskoapp datos personales de terceros en cualquier etapa previa o posterior al proceso de creación de la cuenta a la que usted postule, ha obtenido con anticipación el consentimiento de dichos terceros en la forma que corresponda (tácito y/o expreso y/o expreso por escrito), ha puesto a su disposición este aviso de privacidad y ha comunicado que el titular cuenta con un plazo de cinco días hábiles para que, de ser el caso, manifieste su negativa para el tratamiento de sus datos personales con respecto a las Finalidades Secundarias (como se define más adelante), lo anterior, a fin de que Maskoapp pueda recibir y tratar dichos datos de manera legítima. En el caso de que usted no cumpla con lo anterior, usted asume total responsabilidad de las consecuencias jurídicas que resulten.

(B) Finalidades de Tratamiento.
Finalidades Primarias. (Dan origen y son necesarias para la relación entre usted y Maskoapp).
Maskoapp tratará sus datos personales con la finalidad de: (i) identificarlo, (ii) llevar a cabo las operaciones inherentes a nuestro negocio, (iii) cumplir con las obligaciones legales y comerciales que se originen con motivo de la creación de su propia cuenta de usuario creada por usted, según corresponda dentro del contexto de los servicios ofrecidos en el sitio web, aplicaciones móviles y/o plataforma operados por Maskoapp, (iv) cumplir con la normatividad en materia de protección de datos y demás normatividad vigente y aplicable a los servicios prestados por Maskoapp (v) atender dudas, quejas y sugerencias relacionadas con la prestación de nuestros servicios en el segmento que corresponda, bien como usuario o como administrador de una cuenta de comercio, (vi) realizar cualquier otra actividad para dar seguimiento a nuestra relación comercial en caso de llegar a existir, y (vii) mantener comunicación en general en relación con la prestación de servicios por parte de Maskoapp.
Finalidades Secundarias. (No dan origen a la relación entre usted y Maskoapp, pero son importantes para la correcta prestación de nuestros servicios).
Maskoapp podrá contactarlo y en su caso, enviarle información con las siguientes finalidades: (i) darle a conocer promociones, campañas de marketing, eventos, nuevos productos y/ servicios, (ii) realizar cualquier acción comercial, de mercadotecnia, estadística, prospección y/o análisis de mercado para generar informes estadísticos, (iii) conocer sus patrones de consumo o tendencias, y (iv) realizar encuestas sobre la calidad de nuestros servicios.

(C)Mecanismos para manifestar la negativa del tratamiento para Finalidades Secundarias.
En caso de que no quiera que sus Datos Personales sean utilizados para cualesquiera de las Finalidades Secundarias anteriormente descritas, usted podrá comunicárnoslo a nuestro departamento de privacidad a través del siguiente correo electrónico: [*]@Maskoapp.com. Su negativa para el tratamiento de sus datos conforme a las Finalidades Secundarias, no representan un motivo que imposibilite a Maskoapp la prestación de los servicios o que nos conduzca a dar por terminada la relación establecida.
Este mecanismo se encuentra implementado a través de una casilla en la aplicación móvil, el cual está disponible al momento en que el titular consulta el aviso de privacidad. En todos los casos, este mecanismo permite que el titular manifieste su negativa previo al tratamiento de sus datos personales o al aprovechamiento de los mismos.

(D) Transferencia de datos personales.
Maskoapp podrá transferir tus datos de identificación y contacto a aquellos comercios que nos los soliciten y que estén registrados en nuestra plataforma o que de manera recurrente nos presten servicios con relación a la venta de productos y servicios a fin de (i) personalizar tu experiencia con ellos como consumidor de sus productos y/o servicios, (ii) registrarte en sus sistemas como su consumidor y (iii) qué te hagan llegar información promocional sobre sus productos y servicios. Sin embargo, previo a dicha transferencia solicitaremos su consentimiento, por tanto, nos comprometemos a no transferir, compartir ni transmitir sus datos personales a terceros sin su consentimiento previo, salvo cuando: (i) la transferencia sea necesaria por virtud de un contrato celebrado o por celebrar por su interés con algún proveedor o empresa clave para la prestación del servicio, (ii) cuando la transferencia se realice entre nuestras subsidiarias, afiliadas y/o nuestra casa matriz, (iii) cuando la transferencia sea necesaria para el cumplimiento o mantenimiento de una relación jurídica entre usted y Maskoapp, incluyendo sin limitar los datos de identificación necesarios a efecto de que un repartidor o prestador de servicios pueda efectivamente llevar a cabo los actos solicitados por el consumidor, (iv) en caso fusión o venta de todo o parte de la compañía, y/o (v) en caso de que se actualicen cualquiera de los supuestos establecidos en el Artículo 37 de la Ley.
En los casos en que proceda la transferencia de datos personales a algún tercero en los escenarios en los que no requerimos obtener su consentimiento, le informamos que dichos terceros asumen las mismas obligaciones y responsabilidades asumidas por Maskoapp, en términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares. En caso de que consientas la transferencia a los terceros que se mencionan al principio del párrafo anterior, te sugerimos que acudas a los sitios web de dichos terceros para que te informes del tratamiento y prácticas de privacidad de los mismos ya que no podemos hacernos responsables de dichas prácticas ni del tratamiento que estos le den a tus datos al consentir tu registro como consumidor en sus sistemas.

(E) Cláusula para consentir la transferencia de datos personales.
Le comentamos que estaremos solicitando su consentimiento al momento de la compra mediante opciones de marcado para efectuar las transferencias en las cuales requerimos del mismo. De cualquier forma, en caso de que quisiera negarse a que efectuemos las transferencias en comento, también tiene la opción de enviar un correo a nuestro departamento de privacidad a través del siguiente correo electrónico: [*]@Maskoapp.com.

(F)  Ejercicio de los Derechos ARCO
Usted podrá solicitar ante Maskoapp el ejercicio de sus derechos de acceso rectificación, cancelación y oposición al tratamiento de sus Datos Personales (“Derechos ARCO”), para lo cual, Maskoapp pone a su disposición la guía y formulario “Solicitud para ejercer Derechos ARCO” que podrá descargar a través de las siguientes ligas:
https://transparencia.senado.gob.mx/documentos/Guia_ejercer_derechos_ARCO.pdf
https://www.sarcoem.org.mx/sarcoem/ciudadano/login.page
Una vez que usted descargue el formulario anterior y lo complete conforme a las instrucciones que en él se incluyen, deberá proceder a firmarlo y enviarlo a Maskoapp a través del correo electrónico [*]@Maskoapp.com acompañando la siguiente documentación o información digitalizada: (i) documento que acredite su identidad o en su caso, la representación legal de quien actúe en su nombre; (ii) en los casos específicos de rectificación, deberá adjuntar el documento probatorio del cambio requerido; (iii) cualquier otra información o documento que facilite la localización de sus Datos Personales y nos ayude a desahogar su solicitud de acceso correctamente. En caso de así preferirlo, podrá optar por presentar el formato de solicitud debidamente firmado, junto con sus anexos, directamente en las oficinas de Maskoapp, ubicadas en la calle [*], Ciudad de México, C.P. [*], en días hábiles, con horario de atención de lunes a viernes de 9:00 a 16:00 horas.
Es importante que tome en cuenta que, si la Solicitud para Ejercer derechos ARCO no se acompaña de la información o documentación necesaria para ser atendida, Maskoapp podrá solicitar la información faltante por medio de un REQUERIMIENTO, el cual se deberá emitir en un plazo máximo de 5 días hábiles contados a partir del día siguiente de la presentación de la Solicitud para ejercer Derechos ARCO, y usted tendrá 10 días hábiles, después de recibir dicho REQUERIMIENTO para proporcionar la información o documentación requerida, pues de lo contrario se tendrá como no presentada su Solicitud.
Maskoapp se compromete a responder a su solicitud dentro de los 10 (diez) días hábiles siguientes a la fecha en que fue recibida la misma. Se entenderá que la solicitud ha sido recibida el día en que Maskoapp acuse de recibido su solicitud mediante correo electrónico enviado a su dirección de correo electrónico. El plazo podrá ampliarse por 5 (cinco) días hábiles según las circunstancias del caso.
La resolución adoptada se le comunicará mediante un correo electrónico enviado a la dirección de correo que haya utilizado el usuario para promover la solicitud ante Maskoapp y/o por el medio que usted señale para dichos efectos.
Nuestra respuesta a la información solicitada será proporcionada por medio de un correo electrónico a la dirección que haya indicado en su solicitud, con independencia de que la misma haya sido presentada en las instalaciones de Maskoapp, Asimismo, en caso de que Maskoapp no cuente con la información solicitada, dicha circunstancia se hará de su conocimiento mediante el medio de comunicación a que hace referencia el presente párrafo.
Asimismo, le informamos que usted puede iniciar el procedimiento de Protección de Derechos ARCO, ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (“INAI”) (antes Instituto Federal de Acceso a la Información y Protección de Datos Personales), dentro de los 15 días siguientes a la fecha en que la responsable dé respuesta a su solicitud y ésta no le sea satisfactoria, o bien, si transcurrido el término señalado, la responsable no diera respuesta a su solicitud.

(G) Consentimiento.
El tratamiento que realice Maskoapp de sus Datos Personales se encontrará sujeto a que usted consienta, de manera expresa o tácita, el uso de sus Datos Personales de conformidad con las Finalidades establecidas en el apartado (B) anterior. Para efectos de la Ley, su Reglamento y los Lineamientos, se entiende por consentimiento tácito la no oposición del usuario a la obtención, uso, divulgación o transferencia al momento en que se hagan de su conocimiento los términos y condiciones del presente Aviso de Privacidad.
De conformidad con lo anterior, le informamos que usted cuenta con el derecho de revocar su consentimiento en cualquier momento, para lo cual deberá completar el formato único de Solicitud para ejercer Derechos ARCO y enviarlo al correo electrónico o a la dirección referida en el apartado (F) anterior. En caso de que usted desee revocar su consentimiento, independientemente de la forma en que este se haya otorgado, deberá adjuntar a su Solicitud para ejercer Derechos ARCO los documentos a que hace referencia el apartado (F) anterior, según corresponda.
En este sentido, Maskoapp se compromete a dar respuesta a su solicitud mediante correo electrónico enviado a la dirección empleada por el usuario en un plazo no mayor a 10 (diez) días hábiles, pudiendo ampliarse por un plazo no mayor a 5 (cinco) días hábiles en los casos en que se dificulte la localización de los Datos Personales del usuario por circunstancias ajenas a Maskoapp.

(H) Limitación de uso y divulgación de información.
En cualquier momento, usted podrá limitar el uso y divulgación de sus Datos personales mediante el envío de un correo electrónico a la dirección que se menciona en el punto (C) anterior o mediante su registro en el Registro Público para Evitar Publicidad implementado por la Procuraduría Federal del Consumidor en el siguiente link: https://repep.profeco.gob.mx/ y/o en el Registro Público de Usuarios que no deseen información publicitaria de Productos y Servicios Financieros (REUS) implementado por la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros en el siguiente link: https://webapps. condusef.gob.mx/reus/ app/registro.jsp.
Hacemos de su conocimiento que sus Datos Personales serán salvaguardados en todo momento bajo los más altos estándares de seguridad, garantizando en todo momento, la más estricta confidencialidad y privacidad de los mismos, apegándonos en todo momento a lo establecido por la Ley, su Reglamento y los Lineamientos.

(I) Medidas de seguridad.
Toda la información y datos personales que usted proporcione a Maskoapp, se encuentran debidamente protegidos por servidores seguros propiedad de Maskoapp o de terceros profesionales contratados por nosotros bajo diversos protocolos de seguridad a efecto de evitar el acceso no autorizado a sus datos personales y procurar que los mismos sean estrictamente utilizados para los fines descritos en este Aviso de Privacidad

(J) Cookies
Las cookies son archivos de texto que son descargados automáticamente y almacenados en el disco duro del equipo de cómputo del usuario al navegar en una página de Internet específica, que permiten recordar al servidor de Internet algunos datos sobre dicho usuario, tales como sus preferencias para la visualización de las páginas en ese servidor, nombre y contraseña. Maskoapp utiliza la información almacenada en la cookie con la única finalidad de facilitarle el uso de nuestro sitio de internet. Usted puede inhabilitar las cookies en cualquier momento. Para mayor información sobre cómo hacerlo, usted podrá contactarnos a través del siguiente correo electrónico: [*]@Maskoapp.com.
Asimismo, Maskoapp hace de su conocimiento que a través del uso de este tipo de tecnología, diversos datos personales son obtenidos y, se hace de su conocimiento que el uso de dichas tecnología podrán deshabilitarse a través de una comunicación o advertencia colocada en un lugar visible, en el momento en el que el usuario tiene contacto con las mismas.

(K) Cambios en el aviso de privacidad
Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado. Los cambios a que se refiere el presente apartado se publicarán dentro del Portal.
En caso de que usted no se esté de acuerdo con las modificaciones que se pudieran presentar, usted cuenta con el derecho a oponerse al tratamiento de sus Datos Personales. En este sentido, deberá enviar el formato único de Solicitud para ejercer derechos ARCO, al correo electrónico o a la dirección mencionada en el inciso (F) anterior.
Si usted en algún caso considera que han sido vulnerados sus derechos respecto de la protección de datos personales, tiene el derecho de acudir a la autoridad correspondiente para defender su ejercicio. La autoridad es el INAI, su sitio web es: www.ifai.gob.mx

(L) Área de Datos Personales
Para cualquier asunto relacionado con este Aviso de Privacidad, el tratamiento de sus datos personales y/o para el ejercicio de sus Derechos ARCO, usted tendrá las siguientes opciones (i) acudir directamente a las oficinas de Maskoapp cuyo domicilio ya ha sido establecido; (ii) efectuar su solicitud por escrito vía correo electrónico a nuestro departamento de privacidad: [*]@Maskoapp.com con horario de atención de lunes a viernes de 9:00 a 16:00 horas.

NOTA ACLARATORIA
En los términos de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares la Responsable del Tratamiento de los Datos Personales es Maskoapp, S. de R.L. de C.V. (“La Responsable”) con domicilio en [*], Ciudad de México, C.P. [*], en días hábiles, con horario de atención de lunes a viernes de 9:00 a 16:00 horas, o visitar nuestra página de Internet en www.Maskoapp.com. 
`}

class SignUpForm2Component extends React.Component {


  getStatus = valid => {
    return valid ? 'success' : 'danger';
  };

  renderEyeOffIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="eye-off" />;
  };

  renderPersonIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="person" />;
  };

  renderEmailIconFill = style => {
    const {themedStyle} = this.props;

    return <Icon {...style} name="email" />;
  };

  

  render() {
    const {
      style,
      themedStyle,
      username,
      email,
      password,
      termsAccepted,
      termsModalStatus,
      privacyModalStatus,
      frequentPurchases,
      onFrequentInputTextChange,
      onUsernameInputTextChange,
      onEmailInputTextChange,
      onPasswordInputValidationResult,
      onTermsValueChange,
      onTermsModalPress,
      onPrivacyModalPress,
      selectedProducts,
      ...restProps
    } = this.props;

    return (
      <View style={[themedStyle.container, style]} {...restProps}>
        <View style={themedStyle.formContainer}>
          <Input
            style={formStyles.inputBox}
            textStyle={formStyles.inputBoxText} textStyle={textStyle.paragraph}
            autoCapitalize="none"
            placeholder={translate('placeholdersFullName')}
            placeholderTextColor={"#fff"}
            value={username}
            onChangeText={onUsernameInputTextChange}
          />
          <Input
          style={formStyles.inputBox}
          textStyle={formStyles.inputBoxText} 
          autoCapitalize="none"
            placeholder={translate('placeholdersEmail')}
            placeholderTextColor={"#fff"}
            value={email}
            onChangeText={onEmailInputTextChange}
            autoCapitalize="none"
          />
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder={translate('placeholdersCreatePassword')}
            placeholderTextColor={"#fff"}
            value={password}
            onChangeText={onPasswordInputValidationResult}
          />
          <Text style={formStyles.inputHintText}>{translate('passwordHintText')}</Text>
            
          <TouchableOpacity style={formStyles.inputBox} onPress={()=>this.props.onChooseProductPress()}>
            <Text style={formStyles.inputBoxText}>{translate('SignupChoosePreferredProduct')}</Text>
            {selectedProducts.map((k)=>{
              return (<Text style={formStyles.inputBoxText} >{k.name_en}</Text>)
            })}
          </TouchableOpacity>
          <Input
           style={formStyles.inputBox}
           textStyle={formStyles.inputBoxText}
            autoCapitalize="none"
            placeholder={translate('placeholdersFrequentPurchases')}
            keyboardType={'number-pad'}
            placeholderTextColor={"#fff"}
            value={frequentPurchases}
            onChangeText={onFrequentInputTextChange}
          />
      
          <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            <CheckBox
              style={themedStyle.termsCheckBox}
              textStyle={themedStyle.termsCheckBoxText}
              checked={termsAccepted}
              onChange={onTermsValueChange}
              text=" "
            />

            <View style={themedStyle.termsText}  >
                <Text style={[formStyles.whiteFont ]}>{translate('TermsConditionLabel1')} </Text>
                <TouchableOpacity onPress={onTermsModalPress} ><Text style={[formStyles.yellowFontBold]}>{translate('TermsConditionLabel2')}</Text></TouchableOpacity>
                <Text style={[formStyles.whiteFont ]}> and </Text> 
                <TouchableOpacity onPress={onPrivacyModalPress} ><Text style={[formStyles.yellowFontBold]}>{translate('TermsConditionLabel3')}</Text></TouchableOpacity>
            </View>
          </View>
          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={onPrivacyModalPress}
            visible={privacyModalStatus}>
            <View style={formStyles.termsModalContainer}>
             <View style={{flexDirection:'row'}} >
             <TouchableOpacity   onPress={onPrivacyModalPress} >
                  <Icon width={25} height={25} fill='#FFF' name="arrow-ios-back-outline" />
             </TouchableOpacity>
             <Text style={[formStyles.termsHeading,{marginTop:0} ]}> {translate('SignUpPrivacyStatementHead')} </Text>
          
             </View>
             <ScrollView>
               <Text style={[formStyles.termsConditionText]}>{privacyText.es}</Text>
             </ScrollView>
             
            </View>
          </Modal>


          <Modal
            backdropStyle={themedStyle.backdrop}
            onBackdropPress={onTermsModalPress}
            visible={termsModalStatus}>
            <View style={formStyles.termsModalContainer}>
                <View style={{flexDirection:'row'}} >
                <TouchableOpacity   onPress={onTermsModalPress} >
                      <Icon width={25} height={25} fill='#FFF' name="arrow-ios-back-outline" />
                </TouchableOpacity>
                <Text style={[formStyles.termsHeading,{marginTop:0} ]}> {translate('TermsConditionHead')} </Text>
            
             </View>
             <ScrollView>
               <Text style={[formStyles.termsConditionText]}>{termsText.es}</Text>
             </ScrollView>
            </View>
          </Modal>


        </View>
      </View>
    );
  }
}

export const SignUpForm2 = withStyles(SignUpForm2Component, theme => ({
  container: {},
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  usernameInput: {},
  emailInput: {
    marginTop: 16,
  },
  passwordInput: {
    marginTop: 16,
  },
  termsCheckBox: {
    marginTop: 24,
    // flex: 1, 
    width: 30,
  },
  termsCheckBoxText: {
    color: theme['text-hint-color'],
    ...textStyle.subtitle,
  },
  termsText: {
    flex:4,
    marginTop: 20,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
}));
