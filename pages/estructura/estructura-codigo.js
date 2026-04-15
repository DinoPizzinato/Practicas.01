const cssProperties = [
  {
    name: "padding",
    type: "Caja",
    aliases: "padding relleno espacio interno box model caja",
    description: "Agrega aire dentro de la caja.",
    code: `.tarjeta { padding: 16px; }`,
    note: "Completo: solo necesita una medida valida.",
    detailLines: [
      {
        label: "Texto explicativo y que muestra",
        value:
          "Agrega aire dentro de la caja y muestra el espacio interno que queda entre el contenido y el borde del elemento.",
      },
      {
        label: "En que se usa y para que sirve",
        value: "Se usa en tarjetas, botones, formularios y contenedores para mejorar la lectura y darle respiracion al bloque.",
      },
    ],
  },
  {
    name: "margin",
    type: "Caja",
    aliases: "margin margen espacio externo separacion box model",
    description: "Separa la caja de otras por fuera.",
    code: `.tarjeta {
  margin: 24px auto;
}`,
    note: "Completo: aqui separa arriba y abajo, y centra horizontalmente.",
  },
  {
    name: "border",
    type: "Borde",
    aliases: "border borde marco linea solid dashed",
    description: "Dibuja el borde completo del elemento.",
    code: `.tarjeta {
  border: 2px solid #1f5c4a;
}`,
    note: "Completo: incluye grosor, estilo y color.",
  },
  {
    name: "border-radius",
    type: "Borde",
    aliases: "border-radius borde redondeado esquinas redondear",
    description: "Redondea las esquinas.",
    code: `.tarjeta {
  border-radius: 20px;
}`,
    note: "Se nota mejor cuando el elemento ya tiene fondo o borde visible.",
  },
  {
    name: "background",
    type: "Fondo",
    aliases: "background fondo degradado color combinado",
    description: "Pone un fondo completo, incluso degradados.",
    code: `.hero {
  background: linear-gradient(135deg, #fffaf0 0%, #e3f4ee 100%);
}`,
    note: "Aqui ya incluye el tipo de fondo y sus colores.",
  },
  {
    name: "background-color",
    type: "Fondo",
    aliases: "background-color color de fondo fondo liso",
    description: "Pinta el fondo con un color liso.",
    code: `.badge {
  background-color: #e2f2ec;
}`,
    note: "Es la forma mas directa de pintar el fondo.",
  },
  {
    name: "color",
    type: "Texto",
    aliases: "color texto tinta letra",
    description: "Cambia el color del texto.",
    code: `p {
  color: #243447;
}`,
    note: "Afecta al texto y a algunos iconos basados en fuente.",
  },
  {
    name: "font-family",
    type: "Texto",
    aliases: "font-family tipografia fuente letra",
    description: "Elige la tipografia.",
    code: `body {
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
}`,
    note: "Conviene cerrar con una familia generica como sans-serif.",
  },
  {
    name: "font-size",
    type: "Texto",
    aliases: "font-size tamano letra texto",
    description: "Cambia el tamano de la letra.",
    code: `h2 {
  font-size: 2rem;
}`,
    note: "Puedes usar px, rem, em y otras medidas.",
  },
  {
    name: "line-height",
    type: "Texto",
    aliases: "line-height interlineado altura de linea",
    description: "Da mas o menos aire entre lineas.",
    code: `body {
  line-height: 1.6;
}`,
    note: "Un numero sin unidad suele ser muy practico para texto.",
  },
  {
    name: "text-align",
    type: "Texto",
    aliases: "text-align alineacion texto centrar izquierda derecha",
    description: "Alinea el texto dentro de su caja.",
    code: `.mensaje {
  text-align: center;
}`,
    note: "Puede ser left, center, right o justify.",
  },
  {
    name: "width",
    type: "Medidas",
    aliases: "width ancho",
    description: "Marca el ancho del elemento.",
    code: `.panel {
  width: 320px;
}`,
    note: "Si no quieres fijarlo del todo, mira tambien max-width.",
  },
  {
    name: "max-width",
    type: "Medidas",
    aliases: "max-width ancho maximo limite",
    description: "Pone un limite de ancho.",
    code: `.pagina {
  max-width: 1180px;
}`,
    note: "Es muy comun para que el contenido no se estire demasiado.",
  },
  {
    name: "height",
    type: "Medidas",
    aliases: "height alto",
    description: "Marca el alto del elemento.",
    code: `.banner {
  height: 180px;
}`,
    note: "Conviene usarlo cuando realmente necesitas una altura fija.",
  },
  {
    name: "min-width",
    type: "Medidas",
    aliases: "min-width ancho minimo",
    description: "Pone un ancho minimo.",
    code: `.tarjeta {
  min-width: 220px;
}`,
    note: "Ayuda a que una tarjeta no se aplaste demasiado.",
  },
  {
    name: "min-height",
    type: "Medidas",
    aliases: "min-height alto minimo",
    description: "Pone un alto minimo.",
    code: `.hero {
  min-height: 220px;
}`,
    note: "Sirve cuando quieres reservar espacio aunque haya poco contenido.",
  },
  {
    name: "display",
    type: "Layout",
    aliases: "display bloque inline flex grid caja",
    description: "Decide como se comporta la caja.",
    code: `.fila {
  display: flex;
}`,
    note: "Muchas propiedades de layout dependen de esta base.",
  },
  {
    name: "flex-direction",
    type: "Flex",
    aliases: "flex-direction direccion flex fila columna",
    description: "Dice si los elementos van en fila o columna dentro de flex.",
    code: `.fila {
  display: flex;
  flex-direction: column;
}`,
    note: "Necesita display: flex; para tener efecto.",
  },
  {
    name: "flex-wrap",
    type: "Flex",
    aliases: "flex-wrap salto de linea flex varias filas",
    description: "Permite que los elementos bajen a otra linea.",
    code: `.fila {
  display: flex;
  flex-wrap: wrap;
}`,
    note: "Sin display: flex; no hace nada.",
  },
  {
    name: "justify-content",
    type: "Flex",
    aliases: "justify-content repartir flex eje principal",
    description: "Reparte elementos en el eje principal.",
    code: `.fila {
  display: flex;
  justify-content: space-between;
}`,
    note: "En una fila reparte horizontalmente; en una columna, verticalmente.",
  },
  {
    name: "align-items",
    type: "Flex",
    aliases: "align-items alinear flex eje cruzado",
    description: "Alinea elementos en el eje cruzado.",
    code: `.fila {
  display: flex;
  align-items: center;
}`,
    note: "Tambien depende de display: flex;.",
  },
  {
    name: "gap",
    type: "Layout",
    aliases: "gap separacion espacio grid flex",
    description: "Separa elementos dentro de flex o grid.",
    code: `.fila {
  display: flex;
  gap: 12px;
}`,
    note: "Queda mas prolijo que poner margen en cada hijo.",
  },
  {
    name: "grid-template-columns",
    type: "Grid",
    aliases: "grid-template-columns columnas grilla grid",
    description: "Define cuantas columnas tendra una grilla.",
    code: `.grilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`,
    note: "Necesita display: grid;.",
  },
  {
    name: "grid-template-rows",
    type: "Grid",
    aliases: "grid-template-rows filas grilla grid",
    description: "Define las filas de una grilla.",
    code: `.grilla {
  display: grid;
  grid-template-rows: 80px auto;
}`,
    note: "Tambien depende de display: grid;.",
  },
  {
    name: "box-shadow",
    type: "Caja",
    aliases: "box-shadow sombra elevacion",
    description: "Agrega una sombra.",
    code: `.tarjeta {
  box-shadow: 0 14px 28px rgba(36, 52, 71, 0.12);
}`,
    note: "La sintaxis suele ser: X, Y, difuminado y color.",
  },
  {
    name: "border-color",
    type: "Borde",
    aliases: "border-color color borde",
    description: "Cambia el color del borde.",
    code: `.tarjeta {
  border: 2px solid #d8d1c4;
  border-color: #1f5c4a;
}`,
    note: "Necesita que ya exista un borde con estilo visible.",
  },
  {
    name: "border-width",
    type: "Borde",
    aliases: "border-width grosor borde",
    description: "Cambia el grosor del borde.",
    code: `.tarjeta {
  border: solid #1f5c4a;
  border-width: 4px;
}`,
    note: "Necesita un estilo de borde definido, como solid.",
  },
  {
    name: "border-style",
    type: "Borde",
    aliases: "border-style estilo borde solid dashed dotted",
    description: "Decide si el borde es solido, punteado u otro estilo.",
    code: `.tarjeta {
  border: 3px solid #1f5c4a;
  border-style: dashed;
}`,
    note: "Con esta propiedad aparece el borde porque define su estilo visible.",
  },
  {
    name: "position",
    type: "Posicion",
    aliases: "position posicion ubicacion relative absolute fixed sticky",
    description: "Da mas control sobre la ubicacion del elemento.",
    code: `.caja {
  position: relative;
}`,
    note: "Muchas veces es la base para usar top, right, bottom o left.",
  },
  {
    name: "top",
    type: "Posicion",
    aliases: "top arriba posicion",
    description: "Mueve una caja desde arriba cuando usa posicion especial.",
    code: `.etiqueta {
  position: absolute;
  top: 12px;
}`,
    note: "No funciona si el elemento sigue con position: static;.",
  },
  {
    name: "right",
    type: "Posicion",
    aliases: "right derecha posicion",
    description: "Ubica una caja tomando como referencia el lado derecho.",
    code: `.etiqueta {
  position: absolute;
  right: 12px;
}`,
    note: "Tambien necesita una posicion distinta de la normal.",
  },
  {
    name: "left",
    type: "Posicion",
    aliases: "left izquierda posicion",
    description: "Mueve una caja hacia la izquierda o la ubica desde ese lado.",
    code: `.etiqueta {
  position: absolute;
  left: 12px;
}`,
    note: "Suele combinarse con un contenedor position: relative;.",
  },
  {
    name: "bottom",
    type: "Posicion",
    aliases: "bottom abajo posicion",
    description: "Ubica una caja tomando como referencia la parte de abajo.",
    code: `.etiqueta {
  position: absolute;
  bottom: 12px;
}`,
    note: "Tambien depende de una posicion especial.",
  },
  {
    name: "z-index",
    type: "Posicion",
    aliases: "z-index capas encima debajo superponer",
    description: "Decide que elemento queda por encima de otro.",
    code: `.modal {
  position: fixed;
  z-index: 100;
}`,
    note: "Suele necesitar una posicion distinta de static.",
  },
  {
    name: "overflow",
    type: "Caja",
    aliases: "overflow desborde scroll contenido",
    description: "Controla que pasa si el contenido se sale.",
    code: `.panel {
  max-height: 120px;
  overflow: auto;
}`,
    note: "Aqui agrega scroll cuando el contenido ya no entra.",
  },
  {
    name: "opacity",
    type: "Efecto",
    aliases: "opacity opacidad transparencia",
    description: "Hace un elemento mas transparente o mas solido.",
    code: `.imagen-suave {
  opacity: 0.7;
}`,
    note: "Va de 0 a 1.",
  },
  {
    name: "object-fit",
    type: "Media",
    aliases: "object-fit imagen video cover contain",
    description: "Ajusta como se acomoda una imagen o video dentro de su caja.",
    code: `.foto {
  width: 220px;
  height: 140px;
  object-fit: cover;
}`,
    note: "Funciona mejor cuando el medio ya tiene ancho y alto definidos.",
  },
  {
    name: "transition",
    type: "Interaccion",
    aliases: "transition transicion animacion suave",
    description: "Hace suaves los cambios de estilo.",
    code: `.boton {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}`,
    note: "Completo: aqui defines propiedad, tiempo y curva.",
  },
  {
    name: "transform",
    type: "Interaccion",
    aliases: "transform mover girar escalar",
    description: "Mueve, gira o agranda un elemento.",
    code: `.boton:hover {
  transform: translateY(-3px);
}`,
    note: "Suele lucirse mucho mas cuando va junto a transition.",
  },
  {
    name: "cursor",
    type: "Interaccion",
    aliases: "cursor mouse puntero mano",
    description: "Cambia el icono del mouse.",
    code: `.resumen {
  cursor: pointer;
}`,
    note: "Es muy util para elementos clickeables.",
  },
  {
    name: "font-weight",
    type: "Texto",
    aliases: "font-weight grosor letra negrita",
    description: "Hace la letra mas fina o mas gruesa.",
    code: `strong {
  font-weight: 700;
}`,
    note: "Tambien puedes usar palabras como bold.",
  },
  {
    name: "text-transform",
    type: "Texto",
    aliases: "text-transform mayusculas minusculas",
    description: "Pasa el texto a mayusculas, minusculas u otro formato.",
    code: `.etiqueta {
  text-transform: uppercase;
}`,
    note: "Suele combinarse con letter-spacing en chapitas o badges.",
  },
  {
    name: "letter-spacing",
    type: "Texto",
    aliases: "letter-spacing espaciado letras",
    description: "Separa mas o menos las letras.",
    code: `.etiqueta {
  letter-spacing: 0.08em;
}`,
    note: "Se nota mucho en texto corto y en mayusculas.",
  },
  {
    name: "text-decoration",
    type: "Texto",
    aliases: "text-decoration subrayado tachado linea",
    description: "Agrega o quita lineas como el subrayado.",
    code: `a:hover {
  text-decoration: underline;
}`,
    note: "Tambien sirve para quitarlo con none.",
  },
  {
    name: "background-image",
    type: "Fondo",
    aliases: "background-image imagen fondo url gradient",
    description: "Pone una imagen o degradado de fondo.",
    code: `.banner {
  background-image: url("banner.jpg");
}`,
    note: "Tambien puede llevar un degradado en vez de una imagen.",
  },
  {
    name: "background-size",
    type: "Fondo",
    aliases: "background-size tamano fondo cover contain",
    description: "Decide como se acomoda el fondo dentro de la caja.",
    code: `.banner {
  background-image: url("banner.jpg");
  background-size: cover;
}`,
    note: "Normalmente acompana a background-image.",
  },
  {
    name: "background-position",
    type: "Fondo",
    aliases: "background-position posicion fondo center",
    description: "Mueve la imagen de fondo dentro de la caja.",
    code: `.banner {
  background-image: url("banner.jpg");
  background-position: center;
}`,
    note: "Tambien suele usarse junto a background-size.",
  },
  {
    name: "border-collapse",
    type: "Tabla",
    aliases: "border-collapse tabla bordes unidos",
    description: "Une los bordes de una tabla para que no se vean dobles.",
    code: `table {
  border-collapse: collapse;
}`,
    note: "Es muy comun junto a bordes en th y td.",
  },
  {
    name: "white-space",
    type: "Texto",
    aliases: "white-space espacios saltos texto pre wrap",
    description: "Controla si el texto respeta espacios y saltos.",
    code: `.codigo {
  white-space: pre-wrap;
}`,
    note: "Con pre-wrap mantiene saltos y a la vez permite que el texto siga en otra linea.",
  },
  {
    name: "outline",
    type: "Accesibilidad",
    aliases: "outline foco contorno accesibilidad",
    description: "Dibuja una linea exterior, muy usada en focos.",
    code: `.campo:focus-visible {
  outline: 3px solid #173a31;
}`,
    note: "Se usa mucho para teclado y accesibilidad porque no mueve el layout.",
  },
  {
    name: "max-height",
    type: "Medidas",
    aliases: "max-height alto maximo limite",
    description: "Pone un limite de alto para que la caja no crezca de mas.",
    code: `.panel {
  max-height: 180px;
  overflow: auto;
}`,
    note: "Suele ir junto a overflow cuando quieres que aparezca scroll.",
  },
  {
    name: "aspect-ratio",
    type: "Medidas",
    aliases: "aspect-ratio proporcion relacion ancho alto",
    description: "Mantiene una proporcion fija entre ancho y alto.",
    code: `.miniatura {
  width: 100%;
  aspect-ratio: 16 / 9;
}`,
    note: "Es muy util para videos, tarjetas y placeholders de imagen.",
  },
  {
    name: "box-sizing",
    type: "Caja",
    aliases: "box-sizing caja borde padding medidas",
    description: "Decide como se calcula el ancho y el alto del elemento.",
    code: `* {
  box-sizing: border-box;
}`,
    note: "Con border-box el padding y el borde quedan incluidos en la medida final.",
  },
  {
    name: "list-style",
    type: "Texto",
    aliases: "list-style lista vinetas numeros estilo",
    description: "Cambia la apariencia de las vinetas o numeros de una lista.",
    code: `ul {
  list-style: square;
}`,
    note: "Tambien puedes usar none si quieres quitar la vineta.",
  },
  {
    name: "text-indent",
    type: "Texto",
    aliases: "text-indent sangria texto primer renglon",
    description: "Mueve hacia adentro el comienzo de la primera linea.",
    code: `p {
  text-indent: 24px;
}`,
    note: "Suele usarse en parrafos largos o textos con estilo editorial.",
  },
  {
    name: "text-shadow",
    type: "Texto",
    aliases: "text-shadow sombra texto letra",
    description: "Agrega una sombra al texto.",
    code: `.titulo {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}`,
    note: "La sintaxis se parece a box-shadow, pero aplicada a la letra.",
  },
  {
    name: "text-overflow",
    type: "Texto",
    aliases: "text-overflow texto recortado elipsis puntos suspensivos",
    description: "Muestra una senal cuando el texto no entra en la caja.",
    code: `.titulo-corto {
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}`,
    note: "Para que funcione bien suele necesitar overflow y white-space.",
  },
  {
    name: "overflow-wrap",
    type: "Texto",
    aliases: "overflow-wrap cortar palabra texto largo",
    description: "Permite cortar palabras muy largas para que no rompan el layout.",
    code: `.descripcion {
  overflow-wrap: break-word;
}`,
    note: "Va muy bien con URLs o palabras tecnicas largas.",
  },
  {
    name: "word-break",
    type: "Texto",
    aliases: "word-break cortar palabra quiebre texto",
    description: "Controla como se parten las palabras cuando no entran.",
    code: `.codigo-largo {
  word-break: break-all;
}`,
    note: "Conviene usarlo con cuidado porque puede cortar una palabra en cualquier punto.",
  },
  {
    name: "background-repeat",
    type: "Fondo",
    aliases: "background-repeat repetir fondo imagen",
    description: "Decide si una imagen de fondo se repite o no.",
    code: `.banner {
  background-image: url("patron.png");
  background-repeat: no-repeat;
}`,
    note: "Sin esta regla muchas imagenes pequenas se repiten por defecto.",
  },
  {
    name: "background-attachment",
    type: "Fondo",
    aliases: "background-attachment fondo fijo scroll",
    description: "Marca si el fondo se mueve con el contenido o queda fijo.",
    code: `.hero {
  background-image: url("fondo.jpg");
  background-attachment: fixed;
}`,
    note: "Se usa para dar efecto de fondo fijo mientras haces scroll.",
  },
  {
    name: "object-position",
    type: "Media",
    aliases: "object-position imagen video posicion encuadre",
    description: "Mueve el punto visible de una imagen o video dentro de su caja.",
    code: `.foto {
  width: 220px;
  height: 140px;
  object-fit: cover;
  object-position: center top;
}`,
    note: "Suele ir junto a object-fit cuando quieres cambiar el encuadre.",
  },
  {
    name: "flex-grow",
    type: "Flex",
    aliases: "flex-grow crecer flex espacio",
    description: "Permite que un elemento ocupe mas espacio libre que los demas.",
    code: `.item-principal {
  flex-grow: 1;
}`,
    note: "Se aplica a los hijos que viven dentro de un contenedor flex.",
  },
  {
    name: "flex-shrink",
    type: "Flex",
    aliases: "flex-shrink encoger flex reducir",
    description: "Controla cuanto puede encogerse un elemento flex.",
    code: `.logo {
  flex-shrink: 0;
}`,
    note: "Con 0 evitas que esa pieza se aplaste cuando falta espacio.",
  },
  {
    name: "flex-basis",
    type: "Flex",
    aliases: "flex-basis base flex ancho inicial",
    description: "Define el tamano base inicial de un item flex.",
    code: `.columna {
  flex-basis: 240px;
}`,
    note: "Es como darle un punto de partida antes de repartir el espacio.",
  },
  {
    name: "order",
    type: "Flex",
    aliases: "order orden flex posicion visual",
    description: "Cambia el orden visual de un item dentro de flex o grid.",
    code: `.destacado {
  order: -1;
}`,
    note: "Reordena visualmente, pero no cambia el orden real del HTML.",
  },
  {
    name: "align-self",
    type: "Flex",
    aliases: "align-self alinear individual flex",
    description: "Alinea un solo item sin afectar a los demas.",
    code: `.boton {
  align-self: flex-end;
}`,
    note: "Sirve cuando una sola pieza necesita salirse de la alineacion general.",
  },
  {
    name: "align-content",
    type: "Flex",
    aliases: "align-content varias filas flex contenido",
    description: "Alinea varias filas dentro de un contenedor flex con wrap.",
    code: `.galeria {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}`,
    note: "Se nota cuando hay varias filas y sobra espacio en el eje cruzado.",
  },
  {
    name: "justify-items",
    type: "Grid",
    aliases: "justify-items grilla grid alinear horizontal",
    description: "Alinea horizontalmente los items dentro de sus celdas de grid.",
    code: `.grilla {
  display: grid;
  justify-items: center;
}`,
    note: "Funciona en grid y afecta a todos los hijos a la vez.",
  },
  {
    name: "justify-self",
    type: "Grid",
    aliases: "justify-self grilla grid alinear individual",
    description: "Alinea horizontalmente un solo item dentro de su celda.",
    code: `.tarjeta-destacada {
  justify-self: end;
}`,
    note: "Es la version individual de justify-items.",
  },
  {
    name: "place-items",
    type: "Grid",
    aliases: "place-items grilla grid centrar",
    description: "Resume align-items y justify-items en una sola regla.",
    code: `.grilla {
  display: grid;
  place-items: center;
}`,
    note: "Es una forma rapida de centrar los items dentro de la grilla.",
  },
  {
    name: "grid-column",
    type: "Grid",
    aliases: "grid-column columna grilla ocupar varias columnas",
    description: "Hace que un item ocupe una o varias columnas de la grilla.",
    code: `.tarjeta-ancha {
  grid-column: 1 / 3;
}`,
    note: "Muy util para destacar un bloque dentro de una grilla.",
  },
  {
    name: "grid-row",
    type: "Grid",
    aliases: "grid-row fila grilla ocupar varias filas",
    description: "Hace que un item ocupe una o varias filas de la grilla.",
    code: `.panel-alto {
  grid-row: 1 / 3;
}`,
    note: "Sirve para armar composiciones mas variadas dentro del grid.",
  },
  {
    name: "grid-auto-flow",
    type: "Grid",
    aliases: "grid-auto-flow flujo automatico grilla",
    description: "Define como se acomodan automaticamente los items nuevos en la grilla.",
    code: `.grilla {
  display: grid;
  grid-auto-flow: dense;
}`,
    note: "Dense intenta rellenar huecos disponibles en la distribucion.",
  },
  {
    name: "resize",
    type: "Caja",
    aliases: "resize redimensionar textarea caja",
    description: "Permite que la persona cambie el tamano de un elemento.",
    code: `textarea {
  resize: vertical;
}`,
    note: "Se usa mucho en textareas para dejar crecer solo en alto.",
  },
  {
    name: "user-select",
    type: "Interaccion",
    aliases: "user-select seleccionar texto copiar",
    description: "Controla si el texto se puede seleccionar o no.",
    code: `.icono {
  user-select: none;
}`,
    note: "Va bien en botones, iconos o controles que no quieres que se marquen al hacer clic.",
  },
  {
    name: "pointer-events",
    type: "Interaccion",
    aliases: "pointer-events clic mouse puntero eventos",
    description: "Decide si el elemento responde o no al mouse.",
    code: `.decoracion {
  pointer-events: none;
}`,
    note: "Sirve mucho en capas decorativas que no deben tapar botones reales.",
  },
  {
    name: "filter",
    type: "Efecto",
    aliases: "filter filtro blur brillo contraste imagen",
    description: "Aplica efectos visuales como desenfoque, brillo o escala de grises.",
    code: `.foto {
  filter: grayscale(100%);
}`,
    note: "Tambien puedes usar blur, brightness, contrast y otros filtros.",
  },
  {
    name: "visibility",
    type: "Efecto",
    aliases: "visibility visible hidden ocultar",
    description: "Oculta un elemento sin sacarle su espacio dentro del layout.",
    code: `.aviso {
  visibility: hidden;
}`,
    note: "A diferencia de display: none, la caja sigue ocupando lugar.",
  },
  {
    name: "inset",
    type: "Posicion",
    aliases: "inset posicion arriba derecha abajo izquierda",
    description: "Resume top, right, bottom y left en una sola regla.",
    code: `.capa {
  position: absolute;
  inset: 0;
}`,
    note: "Es muy practico para hacer que una capa cubra todo su contenedor.",
  },
  {
    name: "scroll-behavior",
    type: "Interaccion",
    aliases: "scroll-behavior desplazamiento suave anclas",
    description: "Suaviza el movimiento al saltar a otra parte de la pagina.",
    code: `html {
  scroll-behavior: smooth;
}`,
    note: "Se usa mucho cuando hay menus con enlaces internos.",
  },
  {
    name: "appearance",
    type: "Interaccion",
    aliases: "appearance controles formulario estilo nativo",
    description: "Quita o cambia la apariencia nativa de algunos controles.",
    code: `select {
  appearance: none;
}`,
    note: "Suele usarse para personalizar selects, inputs y botones del navegador.",
  },
  {
    name: "padding-inline",
    type: "Caja",
    aliases: "padding-inline relleno horizontal lados",
    description: "Agrega espacio interno en los lados izquierdo y derecho.",
    code: `.boton {
  padding-inline: 18px;
}`,
    note: "Es la version horizontal de padding usando la direccion del texto.",
  },
  {
    name: "padding-block",
    type: "Caja",
    aliases: "padding-block relleno vertical arriba abajo",
    description: "Agrega espacio interno arriba y abajo.",
    code: `.boton {
  padding-block: 10px;
}`,
    note: "Es muy util cuando quieres separar vertical y horizontal de forma mas clara.",
  },
  {
    name: "margin-inline",
    type: "Caja",
    aliases: "margin-inline margen horizontal centrar",
    description: "Marca el margen horizontal en ambos lados.",
    code: `.contenedor {
  margin-inline: auto;
}`,
    note: "Se usa mucho para centrar bloques con ancho limitado.",
  },
  {
    name: "border-top",
    type: "Borde",
    aliases: "border-top borde superior linea arriba",
    description: "Dibuja solo el borde de arriba.",
    code: `.separador {
  border-top: 2px solid #d8d1c4;
}`,
    note: "Sirve para separar bloques sin bordear toda la caja.",
  },
  {
    name: "border-bottom",
    type: "Borde",
    aliases: "border-bottom borde inferior linea abajo",
    description: "Dibuja solo el borde de abajo.",
    code: `.item-menu {
  border-bottom: 1px solid #e6dfd2;
}`,
    note: "Es comun en listas, menus y tablas visuales.",
  },
  {
    name: "outline-offset",
    type: "Accesibilidad",
    aliases: "outline-offset foco separacion contorno",
    description: "Separa el outline del borde del elemento.",
    code: `.campo:focus-visible {
  outline: 3px solid #173a31;
  outline-offset: 3px;
}`,
    note: "Ayuda a que el foco se vea mas claro sin pegarse al borde.",
  },
  {
    name: "overflow-x",
    type: "Caja",
    aliases: "overflow-x desborde horizontal scroll",
    description: "Controla el desborde horizontal del contenido.",
    code: `.tabla {
  overflow-x: auto;
}`,
    note: "Va muy bien cuando una tabla o codigo es mas ancho que la pantalla.",
  },
  {
    name: "overflow-y",
    type: "Caja",
    aliases: "overflow-y desborde vertical scroll",
    description: "Controla el desborde vertical del contenido.",
    code: `.lista {
  max-height: 220px;
  overflow-y: auto;
}`,
    note: "Se usa para listas largas, paneles o mensajes.",
  },
  {
    name: "float",
    type: "Layout",
    aliases: "float flotar izquierda derecha imagen texto",
    description: "Mueve un elemento a un costado para que el texto lo rodee.",
    code: `.foto {
  float: left;
  margin-right: 16px;
}`,
    note: "Hoy se usa menos que flex o grid, pero sigue existiendo.",
  },
  {
    name: "clear",
    type: "Layout",
    aliases: "clear limpiar float salto",
    description: "Evita que un bloque siga al lado de elementos flotantes.",
    code: `.cierre {
  clear: both;
}`,
    note: "Sirve cuando un bloque debe empezar debajo de los elementos con float.",
  },
  {
    name: "vertical-align",
    type: "Texto",
    aliases: "vertical-align alineacion vertical inline tabla",
    description: "Alinea elementos inline o celdas respecto al eje vertical.",
    code: `img {
  vertical-align: middle;
}`,
    note: "Se usa mucho para alinear iconos junto al texto.",
  },
  {
    name: "columns",
    type: "Layout",
    aliases: "columns columnas texto periodico",
    description: "Divide el contenido en varias columnas automaticas.",
    code: `.articulo {
  columns: 2 220px;
}`,
    note: "Es ideal para textos largos con estilo tipo revista.",
  },
  {
    name: "column-gap",
    type: "Layout",
    aliases: "column-gap separacion columnas",
    description: "Marca el espacio entre columnas de texto.",
    code: `.articulo {
  columns: 2 220px;
  column-gap: 24px;
}`,
    note: "Se usa junto a columns o column-count.",
  },
  {
    name: "table-layout",
    type: "Tabla",
    aliases: "table-layout tabla ancho fijo automatico",
    description: "Decide como se calcula el ancho de las columnas en una tabla.",
    code: `table {
  width: 100%;
  table-layout: fixed;
}`,
    note: "Con fixed la tabla reparte mejor el espacio en columnas.",
  },
  {
    name: "caption-side",
    type: "Tabla",
    aliases: "caption-side titulo tabla arriba abajo",
    description: "Mueve el titulo de la tabla arriba o abajo.",
    code: `caption {
  caption-side: bottom;
}`,
    note: "Sirve cuando quieres dejar la aclaracion final debajo de la tabla.",
  },
  {
    name: "accent-color",
    type: "Formulario",
    aliases: "accent-color checkbox radio color formulario",
    description: "Cambia el color principal de algunos controles del formulario.",
    code: `input[type="checkbox"] {
  accent-color: #1f5c4a;
}`,
    note: "Funciona muy bien en checkbox, radio y range.",
  },
  {
    name: "caret-color",
    type: "Formulario",
    aliases: "caret-color cursor texto input",
    description: "Cambia el color del cursor que parpadea al escribir.",
    code: `input {
  caret-color: #1f5c4a;
}`,
    note: "Es un detalle pequeno pero util en formularios personalizados.",
  },
  {
    name: "scroll-snap-type",
    type: "Interaccion",
    aliases: "scroll-snap-type desplazamiento ajuste carrusel",
    description: "Hace que el scroll se acomode por secciones o tarjetas.",
    code: `.carrusel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`,
    note: "Se usa mucho en sliders horizontales hechos con CSS.",
  },
  {
    name: "scroll-snap-align",
    type: "Interaccion",
    aliases: "scroll-snap-align alinear snap tarjeta",
    description: "Marca como debe engancharse cada item al hacer scroll.",
    code: `.tarjeta {
  scroll-snap-align: start;
}`,
    note: "Va junto a scroll-snap-type en el contenedor.",
  },
  {
    name: "overscroll-behavior",
    type: "Interaccion",
    aliases: "overscroll-behavior rebote scroll control",
    description: "Controla que pasa cuando llegas al limite del scroll.",
    code: `.modal {
  overscroll-behavior: contain;
}`,
    note: "Ayuda a que un panel con scroll no arrastre toda la pagina.",
  },
  {
    name: "backdrop-filter",
    type: "Efecto",
    aliases: "backdrop-filter desenfoque fondo vidrio",
    description: "Aplica un filtro a lo que queda detras del elemento.",
    code: `.panel {
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
}`,
    note: "Se usa para lograr un efecto de vidrio o capa transludida.",
  },
  {
    name: "clip-path",
    type: "Efecto",
    aliases: "clip-path recorte forma poligono",
    description: "Recorta un elemento con una forma especial.",
    code: `.etiqueta {
  clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
}`,
    note: "Sirve para etiquetas, banners o figuras mas llamativas.",
  },
  {
    name: "content",
    type: "Pseudoelemento",
    aliases: "content before after texto decorativo",
    description: "Inserta contenido desde CSS en pseudoelementos.",
    code: `.estado::before {
  content: "Nuevo";
}`,
    note: "Solo funciona en ::before y ::after.",
  },
  {
    name: "mix-blend-mode",
    type: "Efecto",
    aliases: "mix-blend-mode mezclar capas color",
    description: "Mezcla visualmente un elemento con lo que tiene debajo.",
    code: `.textura {
  mix-blend-mode: multiply;
}`,
    note: "Se usa para overlays, texturas y composiciones visuales.",
  },
  {
    name: "isolation",
    type: "Efecto",
    aliases: "isolation aislar mezcla capas",
    description: "Aisla la mezcla visual de un bloque respecto del resto.",
    code: `.grupo {
  isolation: isolate;
}`,
    note: "Es util cuando usas mix-blend-mode y no quieres afectar toda la pagina.",
  },
  {
    name: "font-style",
    type: "Texto",
    aliases: "font-style cursiva italic oblique",
    description: "Cambia el estilo de la letra a normal, cursiva u oblicua.",
    code: `cite {
  font-style: italic;
}`,
    note: "Suele usarse en citas, notas o textos secundarios.",
  },
  {
    name: "word-spacing",
    type: "Texto",
    aliases: "word-spacing espacio palabras texto",
    description: "Aumenta o reduce la separacion entre palabras.",
    code: `.frase {
  word-spacing: 0.2em;
}`,
    note: "Se nota mas en titulos cortos o frases destacadas.",
  },
  {
    name: "hyphens",
    type: "Texto",
    aliases: "hyphens guiones corte palabras",
    description: "Permite partir palabras largas con guiones cuando hace falta.",
    code: `.parrafo {
  hyphens: auto;
}`,
    note: "Ayuda a mejorar el corte del texto en columnas o cajas angostas.",
  },
  {
    name: "row-gap",
    type: "Grid",
    aliases: "row-gap separacion filas grilla",
    description: "Marca el espacio vertical entre filas de una grilla.",
    code: `.galeria-notas {
  display: grid;
  row-gap: 18px;
}`,
    note: "Sirve cuando quieres separar filas sin tocar las columnas.",
  },
  {
    name: "place-content",
    type: "Grid",
    aliases: "place-content centrar contenido grilla",
    description: "Resume align-content y justify-content en una sola regla.",
    code: `.panel-central {
  display: grid;
  min-height: 160px;
  place-content: center;
}`,
    note: "Es util para centrar el bloque entero dentro de la grilla.",
  },
  {
    name: "place-self",
    type: "Grid",
    aliases: "place-self alinear item individual grilla",
    description: "Resume align-self y justify-self en un solo item.",
    code: `.tarjeta-foco {
  place-self: center end;
}`,
    note: "Se usa cuando un solo item necesita una posicion especial.",
  },
  {
    name: "grid-auto-columns",
    type: "Grid",
    aliases: "grid-auto-columns columnas automaticas grilla",
    description: "Define el ancho de las columnas creadas automaticamente.",
    code: `.timeline-horizontal {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(180px, 1fr);
}`,
    note: "Va muy bien en lineas de tiempo o galerias horizontales.",
  },
  {
    name: "grid-auto-rows",
    type: "Grid",
    aliases: "grid-auto-rows filas automaticas grilla",
    description: "Define la altura de las filas creadas automaticamente.",
    code: `.mosaico-editorial {
  display: grid;
  grid-auto-rows: 120px;
}`,
    note: "Ayuda a mantener alturas parejas en bloques generados en automatico.",
  },
  {
    name: "border-left",
    type: "Borde",
    aliases: "border-left borde izquierdo linea lateral",
    description: "Dibuja solo el borde del lado izquierdo.",
    code: `.alerta-lateral {
  border-left: 4px solid #1f5c4a;
}`,
    note: "Se usa mucho para avisos, citas o bloques destacados.",
  },
  {
    name: "border-right",
    type: "Borde",
    aliases: "border-right borde derecho linea lateral",
    description: "Dibuja solo el borde del lado derecho.",
    code: `.resumen-final {
  border-right: 3px solid #d8d1c4;
}`,
    note: "Sirve para remarcar cierres, notas o paneles secundarios.",
  },
  {
    name: "border-spacing",
    type: "Tabla",
    aliases: "border-spacing separacion celdas tabla",
    description: "Separa las celdas de una tabla cuando no usas border-collapse.",
    code: `.tabla-datos {
  border-spacing: 0 10px;
}`,
    note: "Se usa para tablas con filas que parecen tarjetas separadas.",
  },
  {
    name: "text-decoration-color",
    type: "Texto",
    aliases: "text-decoration-color color subrayado texto",
    description: "Cambia el color del subrayado o decoracion del texto.",
    code: `.link-guia {
  text-decoration: underline;
  text-decoration-color: #1f5c4a;
}`,
    note: "Va bien cuando quieres que el subrayado tenga otro color distinto al texto.",
  },
  {
    name: "text-decoration-style",
    type: "Texto",
    aliases: "text-decoration-style estilo subrayado ondulado",
    description: "Define la forma del subrayado o la decoracion.",
    code: `.nota-importante {
  text-decoration: underline;
  text-decoration-style: wavy;
}`,
    note: "Puede ser solid, dotted, dashed, double o wavy.",
  },
  {
    name: "text-underline-offset",
    type: "Texto",
    aliases: "text-underline-offset distancia subrayado texto",
    description: "Separa el subrayado del texto para que respire mas.",
    code: `.subrayado-suave {
  text-decoration: underline;
  text-underline-offset: 4px;
}`,
    note: "Es un detalle pequeno que mejora mucho la lectura.",
  },
  {
    name: "font-variant",
    type: "Texto",
    aliases: "font-variant small caps letras versalitas",
    description: "Activa variantes tipograficas como small-caps.",
    code: `.siglas-editoriales {
  font-variant: small-caps;
}`,
    note: "Se usa en titulos cortos, siglas y detalles de estilo editorial.",
  },
  {
    name: "font-kerning",
    type: "Texto",
    aliases: "font-kerning espacio letras tipografia",
    description: "Controla el ajuste fino entre pares de letras.",
    code: `.titulo-editorial {
  font-kerning: normal;
}`,
    note: "Se nota mas en titulos grandes y fuentes con mucho detalle.",
  },
  {
    name: "tab-size",
    type: "Texto",
    aliases: "tab-size tabulacion codigo espacios",
    description: "Define cuantos espacios visuales ocupa una tabulacion.",
    code: `.pre-codigo {
  tab-size: 4;
}`,
    note: "Es util en bloques de codigo o texto tecnico con tabulaciones.",
  },
  {
    name: "direction",
    type: "Texto",
    aliases: "direction direccion texto rtl ltr",
    description: "Cambia la direccion principal en la que se lee el texto.",
    code: `.etiqueta-arabe {
  direction: rtl;
}`,
    note: "Se usa en idiomas que se escriben de derecha a izquierda.",
  },
  {
    name: "quotes",
    type: "Texto",
    aliases: "quotes comillas personalizadas cita",
    description: "Personaliza las comillas automaticas de las citas cortas.",
    code: `.cita-breve {
  quotes: "<<" ">>";
}`,
    note: "Suele usarse junto a la etiqueta q o a estilos editoriales.",
  },
  {
    name: "counter-reset",
    type: "Layout",
    aliases: "counter-reset contador lista personalizada",
    description: "Inicia un contador CSS para numeraciones hechas a mano.",
    code: `.pasos-receta {
  counter-reset: paso;
}`,
    note: "Es la base para listas visuales personalizadas con numeros.",
  },
  {
    name: "counter-increment",
    type: "Layout",
    aliases: "counter-increment aumentar contador lista",
    description: "Hace avanzar un contador CSS en cada elemento.",
    code: `.paso-receta::before {
  counter-increment: paso;
  content: counter(paso) ". ";
}`,
    note: "Se combina con counter-reset para numerar bloques sin usar ol.",
  },
  {
    name: "list-style-position",
    type: "Texto",
    aliases: "list-style-position vinetas dentro fuera lista",
    description: "Decide si la vineta queda dentro o fuera del bloque.",
    code: `.lista-check {
  list-style-position: inside;
}`,
    note: "Inside mete la vineta dentro de la caja del texto.",
  },
  {
    name: "writing-mode",
    type: "Texto",
    aliases: "writing-mode texto vertical direccion",
    description: "Permite escribir texto en vertical o en otros modos.",
    code: `.rotulo-vertical {
  writing-mode: vertical-rl;
}`,
    note: "Se usa para rotulos, diseno editorial y detalles decorativos.",
  },
  {
    name: "transform-origin",
    type: "Interaccion",
    aliases: "transform-origin origen giro escala",
    description: "Marca desde que punto gira o se transforma un elemento.",
    code: `.sello:hover {
  transform: rotate(-8deg);
  transform-origin: left bottom;
}`,
    note: "Cambia por completo la sensacion del movimiento.",
  },
  {
    name: "animation",
    type: "Interaccion",
    aliases: "animation animacion keyframes movimiento",
    description: "Activa una animacion completa sobre un elemento.",
    code: `.destello {
  animation: latido 1.4s ease-in-out infinite;
}

@keyframes latido {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}`,
    note: "Resume nombre, duracion, curva y repeticiones en una sola regla.",
  },
  {
    name: "animation-delay",
    type: "Interaccion",
    aliases: "animation-delay retraso animacion",
    description: "Espera un momento antes de arrancar la animacion.",
    code: `.etiqueta-nueva {
  animation: aparecer 0.6s ease both;
  animation-delay: 0.2s;
}

@keyframes aparecer {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    note: "Sirve para escalonar entradas o crear pequenas secuencias.",
  },
  {
    name: "animation-fill-mode",
    type: "Interaccion",
    aliases: "animation-fill-mode mantener estado animacion",
    description: "Decide si la animacion conserva el estado inicial o final.",
    code: `.bloque-arranque {
  animation: subir 0.8s ease;
  animation-fill-mode: forwards;
}

@keyframes subir {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}`,
    note: "Forwards deja aplicado el estado final cuando la animacion termina.",
  },
  {
    name: "will-change",
    type: "Interaccion",
    aliases: "will-change optimizacion animacion transform",
    description: "Le avisa al navegador que una propiedad puede cambiar pronto.",
    code: `.tarjeta-flotante {
  will-change: transform;
}`,
    note: "Se usa con cuidado en elementos que realmente van a animarse.",
  },
  {
    name: "scroll-margin-top",
    type: "Interaccion",
    aliases: "scroll-margin-top margen ancla seccion",
    description: "Deja un margen al hacer scroll hasta una seccion con anclas.",
    code: `.seccion-larga {
  scroll-margin-top: 24px;
}`,
    note: "Es ideal cuando tienes menus fijos arriba.",
  },
  {
    name: "scroll-padding-top",
    type: "Interaccion",
    aliases: "scroll-padding-top espacio scroll anclas",
    description: "Reserva un espacio superior para el scroll automatico.",
    code: `html {
  scroll-padding-top: 24px;
}`,
    note: "Ayuda a que las secciones no queden tapadas por barras fijas.",
  },
  {
    name: "color-scheme",
    type: "Interaccion",
    aliases: "color-scheme esquema colores controles",
    description: "Le indica al navegador que esquema visual usa ese bloque.",
    code: `.formulario-claro {
  color-scheme: light;
}`,
    note: "Afecta especialmente a controles nativos y barras internas.",
  },
  {
    name: "image-rendering",
    type: "Media",
    aliases: "image-rendering pixel art nitidez imagen",
    description: "Controla como se reescala una imagen.",
    code: `.pixel-art {
  image-rendering: pixelated;
}`,
    note: "Es muy util para iconos o sprites de estilo retro.",
  },
  {
    name: "contain",
    type: "Layout",
    aliases: "contain aislar layout paint rendimiento",
    description: "Aisla parte del calculo visual y de layout de un bloque.",
    code: `.widget-independiente {
  contain: layout paint;
}`,
    note: "Se usa para componentes autocontenidos y puede ayudar al rendimiento.",
  },
  {
    name: "content-visibility",
    type: "Layout",
    aliases: "content-visibility renderizado automatico rendimiento",
    description: "Hace que el navegador renderice el contenido cuando hace falta.",
    code: `.bloque-extenso {
  content-visibility: auto;
}`,
    note: "Puede mejorar el rendimiento en paginas muy largas.",
  },
  {
    name: "inset-inline-start",
    type: "Posicion",
    aliases: "inset-inline-start inicio lateral posicion logica",
    description: "Ubica un elemento desde el inicio lateral segun el idioma.",
    code: `.senal-lateral {
  position: absolute;
  inset-inline-start: 12px;
}`,
    note: "Es la version logica de left en layouts internacionales.",
  },
  {
    name: "inset-block-start",
    type: "Posicion",
    aliases: "inset-block-start inicio superior posicion logica",
    description: "Ubica un elemento desde el inicio vertical del bloque.",
    code: `.marca-superior {
  position: absolute;
  inset-block-start: 8px;
}`,
    note: "Es la version logica de top.",
  },
  {
    name: "text-align-last",
    type: "Texto",
    aliases: "text-align-last ultima linea texto",
    description: "Alinea de forma especial la ultima linea de un parrafo.",
    code: `.parrafo-justificado {
  text-align: justify;
  text-align-last: center;
}`,
    note: "Se usa en composiciones editoriales o cierres visuales.",
  },
  {
    name: "box-decoration-break",
    type: "Texto",
    aliases: "box-decoration-break fondo multilinea texto",
    description: "Controla como se rompe el fondo o el borde en varias lineas.",
    code: `.frase-resaltada {
  background-color: #fde68a;
  padding: 0 6px;
  box-decoration-break: clone;
}`,
    note: "Clone hace que cada linea mantenga su propio fondo completo.",
  },
  {
    name: "break-inside",
    type: "Layout",
    aliases: "break-inside evitar corte columnas impresion",
    description: "Evita que un bloque se parta entre columnas o paginas.",
    code: `.tarjeta-columna {
  break-inside: avoid;
}`,
    note: "Sirve mucho en layouts con columnas o listados largos.",
  },
  {
    name: "column-rule",
    type: "Layout",
    aliases: "column-rule linea entre columnas texto",
    description: "Dibuja una linea entre columnas de texto.",
    code: `.revista-doble {
  columns: 2 220px;
  column-rule: 1px solid #d8d1c4;
}`,
    note: "Se usa para dar un look mas editorial a bloques extensos.",
  },
  {
    name: "column-count",
    type: "Layout",
    aliases: "column-count cantidad columnas texto",
    description: "Define cuantas columnas tendra un bloque de texto.",
    code: `.resena-larga {
  column-count: 3;
}`,
    note: "Es util para repartir texto en varias columnas sin usar grid.",
  },
  {
    name: "column-width",
    type: "Layout",
    aliases: "column-width ancho columnas automaticas",
    description: "Sugiere el ancho ideal de cada columna de texto.",
    code: `.articulo-flexible {
  column-width: 240px;
}`,
    note: "El navegador crea tantas columnas como entren con ese ancho.",
  },
  {
    name: "column-fill",
    type: "Layout",
    aliases: "column-fill balancear columnas texto",
    description: "Decide como se reparte el contenido entre columnas.",
    code: `.informe-balanceado {
  columns: 2 260px;
  column-fill: balance;
}`,
    note: "Balance intenta que las columnas queden con alturas parecidas.",
  },
  {
    name: "column-span",
    type: "Layout",
    aliases: "column-span ocupar todas columnas",
    description: "Hace que un elemento cruce todas las columnas del bloque.",
    code: `.titulo-seccion {
  column-span: all;
}`,
    note: "Se usa mucho para titulos o separadores dentro de texto en columnas.",
  },
  {
    name: "background-blend-mode",
    type: "Fondo",
    aliases: "background-blend-mode mezclar fondos degradado imagen",
    description: "Mezcla entre si varias capas de fondo.",
    code: `.portada-mixta {
  background-image: linear-gradient(#173a31aa, #173a31aa), url("hero.jpg");
  background-blend-mode: multiply;
}`,
    note: "Sirve para oscurecer o fusionar fondos sin editar la imagen original.",
  },
  {
    name: "mask-image",
    type: "Efecto",
    aliases: "mask-image mascara recorte degradado",
    description: "Recorta visualmente un elemento usando una mascara.",
    code: `.foto-desvanecida {
  mask-image: linear-gradient(to bottom, black 70%, transparent);
}`,
    note: "Se usa para hacer desvanecidos o recortes suaves.",
  },
  {
    name: "mask-size",
    type: "Efecto",
    aliases: "mask-size tamano mascara",
    description: "Controla el tamano de la mascara aplicada.",
    code: `.avatar-recortado {
  mask-image: url("mascara.svg");
  mask-size: cover;
}`,
    note: "Normalmente acompana a mask-image.",
  },
  {
    name: "mask-repeat",
    type: "Efecto",
    aliases: "mask-repeat repetir mascara",
    description: "Decide si la mascara se repite o no.",
    code: `.sello-unico {
  mask-image: url("sello.png");
  mask-repeat: no-repeat;
}`,
    note: "Evita que la mascara se multiplique en toda la caja.",
  },
  {
    name: "mask-position",
    type: "Efecto",
    aliases: "mask-position posicion mascara",
    description: "Mueve la mascara dentro del elemento.",
    code: `.badge-cortado {
  mask-image: url("corte.svg");
  mask-position: center;
}`,
    note: "Sirve para alinear mejor la forma de la mascara.",
  },
  {
    name: "border-image-source",
    type: "Borde",
    aliases: "border-image-source imagen borde",
    description: "Usa una imagen como base del borde.",
    code: `.marco-ilustrado {
  border: 18px solid transparent;
  border-image-source: url("marco.png");
}`,
    note: "Es la base para armar bordes decorativos con imagen.",
  },
  {
    name: "border-image-slice",
    type: "Borde",
    aliases: "border-image-slice cortar imagen borde",
    description: "Divide la imagen de borde en secciones para distribuirla.",
    code: `.marco-postal {
  border: 20px solid transparent;
  border-image-source: url("postal.png");
  border-image-slice: 30;
}`,
    note: "Sin esta regla el navegador no sabe como repartir la imagen.",
  },
  {
    name: "border-image-repeat",
    type: "Borde",
    aliases: "border-image-repeat repetir imagen borde",
    description: "Decide como se repite la imagen del borde.",
    code: `.caja-patron {
  border: 14px solid transparent;
  border-image-source: url("patron-borde.png");
  border-image-slice: 24;
  border-image-repeat: round;
}`,
    note: "Round ajusta la repeticion para que el patron encaje mejor.",
  },
  {
    name: "border-image-width",
    type: "Borde",
    aliases: "border-image-width ancho imagen borde",
    description: "Controla cuanto espacio ocupa la imagen del borde.",
    code: `.panel-marco {
  border: 16px solid transparent;
  border-image-source: url("frame.png");
  border-image-slice: 28;
  border-image-width: 16px;
}`,
    note: "Sirve para ajustar el grosor visual del marco decorativo.",
  },
  {
    name: "perspective",
    type: "Interaccion",
    aliases: "perspective profundidad 3d",
    description: "Agrega profundidad a transformaciones en 3D.",
    code: `.escena-3d {
  perspective: 800px;
}`,
    note: "Se usa en el contenedor que mira a los elementos 3D.",
  },
  {
    name: "perspective-origin",
    type: "Interaccion",
    aliases: "perspective-origin punto vista 3d",
    description: "Mueve el punto desde donde se percibe la profundidad.",
    code: `.vitrina-3d {
  perspective: 900px;
  perspective-origin: right center;
}`,
    note: "Cambia mucho la sensacion de inclinacion o profundidad.",
  },
  {
    name: "backface-visibility",
    type: "Interaccion",
    aliases: "backface-visibility cara trasera giro",
    description: "Oculta o muestra la cara trasera de un elemento rotado.",
    code: `.cara-carta {
  backface-visibility: hidden;
}`,
    note: "Es clave en tarjetas que giran y muestran dos caras.",
  },
  {
    name: "transform-style",
    type: "Interaccion",
    aliases: "transform-style conservar 3d hijos",
    description: "Indica si los hijos mantienen su profundidad en 3D.",
    code: `.cubo {
  transform-style: preserve-3d;
}`,
    note: "Se usa en composiciones donde varias piezas viven en un mismo espacio 3D.",
  },
  {
    name: "rotate",
    type: "Interaccion",
    aliases: "rotate girar propiedad individual",
    description: "Gira un elemento con la propiedad individual de transformacion.",
    code: `.sticker {
  rotate: -6deg;
}`,
    note: "Es la version separada de transform cuando solo quieres girar.",
  },
  {
    name: "scale",
    type: "Interaccion",
    aliases: "scale escalar agrandar propiedad individual",
    description: "Agranda o achica un elemento con una propiedad individual.",
    code: `.mini-zoom:hover {
  scale: 1.08;
}`,
    note: "Se puede combinar con rotate o translate sin escribir transform completo.",
  },
  {
    name: "translate",
    type: "Interaccion",
    aliases: "translate mover propiedad individual",
    description: "Mueve un elemento usando la propiedad individual de desplazamiento.",
    code: `.aviso-flotante {
  translate: 0 -4px;
}`,
    note: "Sirve para pequenos ajustes visuales o animaciones suaves.",
  },
  {
    name: "transition-property",
    type: "Interaccion",
    aliases: "transition-property propiedad transicion",
    description: "Define que propiedad va a transicionar.",
    code: `.boton-transicion {
  transition-property: background-color;
}`,
    note: "Es util cuando quieres limitar la transicion a una sola propiedad.",
  },
  {
    name: "transition-duration",
    type: "Interaccion",
    aliases: "transition-duration duracion transicion",
    description: "Marca cuanto dura la transicion.",
    code: `.chip-suave {
  transition-property: box-shadow;
  transition-duration: 0.3s;
}`,
    note: "Se combina con transition-property o transition shorthand.",
  },
  {
    name: "transition-timing-function",
    type: "Interaccion",
    aliases: "transition-timing-function curva transicion",
    description: "Elige la curva de velocidad de la transicion.",
    code: `.tarjeta-elevada {
  transition-property: transform;
  transition-duration: 0.25s;
  transition-timing-function: ease-out;
}`,
    note: "Hace que el movimiento se sienta mas natural o mas tecnico.",
  },
  {
    name: "animation-duration",
    type: "Interaccion",
    aliases: "animation-duration tiempo animacion",
    description: "Define cuanto tarda una animacion en completarse.",
    code: `.loader-punto {
  animation-name: pulso;
  animation-duration: 1.2s;
}

@keyframes pulso {
  from { opacity: 0.3; }
  to { opacity: 1; }
}`,
    note: "Se puede separar del shorthand cuando quieres control mas detallado.",
  },
  {
    name: "animation-iteration-count",
    type: "Interaccion",
    aliases: "animation-iteration-count repeticiones animacion",
    description: "Indica cuantas veces se repite una animacion.",
    code: `.flecha-ayuda {
  animation: rebote 0.8s ease;
  animation-iteration-count: 3;
}

@keyframes rebote {
  50% { translate: 0 -6px; }
}`,
    note: "Puede ser un numero o infinite.",
  },
  {
    name: "animation-direction",
    type: "Interaccion",
    aliases: "animation-direction direccion animacion alterna",
    description: "Decide si una animacion vuelve para atras o siempre reinicia.",
    code: `.cursor-demo {
  animation: parpadeo 0.5s linear infinite;
  animation-direction: alternate;
}

@keyframes parpadeo {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
    note: "Alternate hace que la vuelta sea suave en vez de reiniciar de golpe.",
  },
  {
    name: "animation-play-state",
    type: "Interaccion",
    aliases: "animation-play-state pausar animacion",
    description: "Permite pausar o reanudar una animacion.",
    code: `.banner-en-pausa:hover {
  animation-play-state: paused;
}`,
    note: "Sirve para detener una animacion cuando el usuario interactua.",
  },
  {
    name: "scrollbar-gutter",
    type: "Interaccion",
    aliases: "scrollbar-gutter reservar espacio barra scroll",
    description: "Reserva espacio para la barra de scroll y evita saltos de layout.",
    code: `.panel-lateral {
  overflow-y: auto;
  scrollbar-gutter: stable;
}`,
    note: "Es util en paneles donde la barra aparece y desaparece.",
  },
  {
    name: "scroll-snap-stop",
    type: "Interaccion",
    aliases: "scroll-snap-stop frenar scroll snap",
    description: "Hace que el scroll se detenga de forma mas estricta en cada item.",
    code: `.slide-principal {
  scroll-snap-stop: always;
}`,
    note: "Refuerza el comportamiento de carruseles o galerias con snap.",
  },
  {
    name: "touch-action",
    type: "Interaccion",
    aliases: "touch-action gestos tactiles pantalla",
    description: "Controla que gestos tactiles puede usar el navegador sobre un bloque.",
    code: `.lienzo-dibujo {
  touch-action: none;
}`,
    note: "Se usa en canvas, mapas o sliders personalizados.",
  },
  {
    name: "scrollbar-width",
    type: "Interaccion",
    aliases: "scrollbar-width ancho barra scroll",
    description: "Cambia el grosor de la barra de scroll en navegadores compatibles.",
    code: `.lista-fina {
  scrollbar-width: thin;
}`,
    note: "Es una propiedad practica para paneles con mucho contenido.",
  },
  {
    name: "scrollbar-color",
    type: "Interaccion",
    aliases: "scrollbar-color color barra scroll",
    description: "Pinta el pulgar y el fondo de la barra de scroll.",
    code: `.panel-oscuro {
  scrollbar-color: #1f5c4a #e2f2ec;
}`,
    note: "Sirve para integrar mejor la barra con el resto del diseño.",
  },
  {
    name: "text-orientation",
    type: "Texto",
    aliases: "text-orientation orientacion letras vertical",
    description: "Ajusta como se dibujan las letras dentro del texto vertical.",
    code: `.titulo-columna {
  writing-mode: vertical-rl;
  text-orientation: upright;
}`,
    note: "Se usa junto a writing-mode para rotulos verticales.",
  },
  {
    name: "font-stretch",
    type: "Texto",
    aliases: "font-stretch ancho fuente tipografia",
    description: "Hace la fuente mas condensada o mas expandida si la familia lo soporta.",
    code: `.subtitulo-condensado {
  font-stretch: condensed;
}`,
    note: "Se nota mas en familias tipograficas con varios anchos disponibles.",
  },
  {
    name: "text-rendering",
    type: "Texto",
    aliases: "text-rendering renderizado texto legibilidad",
    description: "Sugiere como priorizar la legibilidad o la velocidad del texto.",
    code: `.cabecera-editorial {
  text-rendering: optimizeLegibility;
}`,
    note: "Se usa como ajuste fino en tipografia grande o cuidada.",
  },
  {
    name: "paint-order",
    type: "SVG",
    aliases: "paint-order svg relleno trazo texto",
    description: "Cambia el orden en que se pintan relleno, trazo y marcadores en SVG.",
    code: `.texto-svg {
  paint-order: stroke fill;
}`,
    note: "Sirve para que el borde de un texto SVG se vea mas limpio.",
  },
  {
    name: "fill",
    type: "SVG",
    aliases: "fill svg relleno color",
    description: "Pinta el relleno de una figura SVG.",
    code: `.icono-marca {
  fill: #1f5c4a;
}`,
    note: "Es una de las propiedades mas usadas al estilizar SVG.",
  },
  {
    name: "stroke",
    type: "SVG",
    aliases: "stroke svg trazo linea color",
    description: "Pinta el contorno o trazo de una figura SVG.",
    code: `.trazo-plano {
  stroke: #173a31;
}`,
    note: "Se usa para lineas, iconos y formas sin relleno.",
  },
  {
    name: "stroke-width",
    type: "SVG",
    aliases: "stroke-width svg grosor trazo",
    description: "Controla el grosor del trazo en SVG.",
    code: `.diagrama-ruta {
  stroke-width: 3;
}`,
    note: "Acompana muy bien a stroke para ajustar el peso visual de la linea.",
  },
  {
    name: "print-color-adjust",
    type: "Interaccion",
    aliases: "print-color-adjust impresion colores",
    description: "Sugiere al navegador que preserve mejor los colores al imprimir.",
    code: `.recibo-color {
  print-color-adjust: exact;
}`,
    note: "Es util cuando el color forma parte importante del diseño impreso.",
  },
  {
    name: "all",
    type: "Layout",
    aliases: "all reiniciar propiedades css",
    description: "Permite reiniciar muchas propiedades de una sola vez.",
    code: `.boton-limpio {
  all: unset;
  cursor: pointer;
}`,
    note: "Se usa mucho al crear componentes desde cero sobre elementos nativos.",
  },
  {
    name: "text-decoration-thickness",
    type: "Texto",
    aliases: "text-decoration-thickness grosor subrayado texto",
    description: "Cambia el grosor del subrayado o de la decoracion del texto.",
    code: `.enlace-fuerte {
  text-decoration: underline;
  text-decoration-thickness: 3px;
}`,
    note: "Sirve para dar mas presencia al subrayado sin tocar el texto.",
  },
  {
    name: "text-justify",
    type: "Texto",
    aliases: "text-justify justificar texto",
    description: "Ajusta como se reparte el espacio cuando el texto esta justificado.",
    code: `.parrafo-columnado {
  text-align: justify;
  text-justify: inter-word;
}`,
    note: "Se usa para refinar textos largos con alineacion justificada.",
  },
  {
    name: "unicode-bidi",
    type: "Texto",
    aliases: "unicode-bidi direccion mezcla idiomas",
    description: "Controla mejor el flujo del texto cuando mezclas idiomas y direcciones.",
    code: `.frase-mixta {
  direction: rtl;
  unicode-bidi: isolate;
}`,
    note: "Es util en interfaces multilenguaje o contenido embebido.",
  },
  {
    name: "font-feature-settings",
    type: "Texto",
    aliases: "font-feature-settings ligaduras tipografia",
    description: "Activa detalles tipograficos avanzados de una fuente.",
    code: `.titular-premium {
  font-feature-settings: "liga" 1, "kern" 1;
}`,
    note: "Se usa cuando la fuente ofrece ligaduras u opciones especiales.",
  },
  {
    name: "font-optical-sizing",
    type: "Texto",
    aliases: "font-optical-sizing ajuste optico fuente",
    description: "Permite que una fuente variable se adapte mejor a su tamano.",
    code: `.cabecera-variable {
  font-optical-sizing: auto;
}`,
    note: "Mejora la legibilidad en familias tipograficas variables.",
  },
  {
    name: "font-size-adjust",
    type: "Texto",
    aliases: "font-size-adjust altura x tipografia",
    description: "Mantiene mejor la legibilidad al cambiar entre distintas fuentes.",
    code: `.texto-respaldo {
  font-size-adjust: 0.52;
}`,
    note: "Ayuda cuando una fuente de reemplazo se ve demasiado distinta.",
  },
  {
    name: "text-wrap",
    type: "Texto",
    aliases: "text-wrap balance corte lineas",
    description: "Ajusta como se parten las lineas del texto.",
    code: `.titulo-balanceado {
  text-wrap: balance;
}`,
    note: "Es muy util para titulos cortos en varias lineas.",
  },
  {
    name: "hanging-punctuation",
    type: "Texto",
    aliases: "hanging-punctuation puntuacion colgante",
    description: "Permite que ciertos signos queden un poco fuera del bloque.",
    code: `.cita-editorial {
  hanging-punctuation: first;
}`,
    note: "Se usa para detalles finos de composicion tipografica.",
  },
  {
    name: "text-emphasis",
    type: "Texto",
    aliases: "text-emphasis enfasis marcas texto",
    description: "Agrega pequenas marcas de enfasis sobre el texto.",
    code: `.palabra-japonesa {
  text-emphasis: filled circle #1f5c4a;
}`,
    note: "Es mas comun en composiciones orientales o anotaciones especiales.",
  },
  {
    name: "text-emphasis-position",
    type: "Texto",
    aliases: "text-emphasis-position posicion enfasis",
    description: "Mueve la marca de enfasis arriba o abajo del texto.",
    code: `.lectura-guiada {
  text-emphasis: filled dot;
  text-emphasis-position: under;
}`,
    note: "Se usa junto a text-emphasis para ajustar la lectura.",
  },
  {
    name: "text-combine-upright",
    type: "Texto",
    aliases: "text-combine-upright numeros verticales",
    description: "Compacta caracteres dentro de texto vertical.",
    code: `.ano-vertical {
  writing-mode: vertical-rl;
  text-combine-upright: all;
}`,
    note: "Sirve para numeros o siglas en composiciones verticales.",
  },
  {
    name: "ruby-position",
    type: "Texto",
    aliases: "ruby-position anotacion texto ruby",
    description: "Cambia la posicion del texto auxiliar en una anotacion ruby.",
    code: `.anotacion-ruby {
  ruby-position: under;
}`,
    note: "Se usa con etiquetas ruby cuando quieres mover la explicacion.",
  },
  {
    name: "line-break",
    type: "Texto",
    aliases: "line-break corte lineas idiomas",
    description: "Controla como se cortan las lineas en ciertos idiomas y sistemas.",
    code: `.texto-cjk {
  line-break: strict;
}`,
    note: "Es util en contenido multilingue con reglas de corte especiales.",
  },
  {
    name: "overflow-anchor",
    type: "Caja",
    aliases: "overflow-anchor ancla scroll contenido",
    description: "Controla si un bloque participa en el ajuste automatico del scroll.",
    code: `.lista-chat {
  overflow-anchor: none;
}`,
    note: "Sirve en chats o listas que se actualizan seguido.",
  },
  {
    name: "overflow-clip-margin",
    type: "Caja",
    aliases: "overflow-clip-margin recorte desborde margen",
    description: "Agrega un pequeno margen al recorte del contenido.",
    code: `.banner-recortado {
  overflow: clip;
  overflow-clip-margin: 12px;
}`,
    note: "Se usa cuando no quieres cortar el contenido justo al borde.",
  },
  {
    name: "border-inline",
    type: "Borde",
    aliases: "border-inline borde lados logicos",
    description: "Dibuja el borde en ambos lados laterales segun la direccion del texto.",
    code: `.ficha-lateral {
  border-inline: 2px solid #d8d1c4;
}`,
    note: "Es la version logica de left y right a la vez.",
  },
  {
    name: "border-block",
    type: "Borde",
    aliases: "border-block borde arriba abajo logico",
    description: "Dibuja el borde en la parte superior e inferior del bloque.",
    code: `.resumen-apilado {
  border-block: 1px solid #e6dfd2;
}`,
    note: "Es util para separadores horizontales en layouts modernos.",
  },
  {
    name: "border-top-left-radius",
    type: "Borde",
    aliases: "border-top-left-radius esquina superior izquierda",
    description: "Redondea solo la esquina superior izquierda.",
    code: `.sello-postal {
  border-top-left-radius: 18px;
}`,
    note: "Sirve para crear tarjetas con esquinas personalizadas.",
  },
  {
    name: "border-bottom-right-radius",
    type: "Borde",
    aliases: "border-bottom-right-radius esquina inferior derecha",
    description: "Redondea solo la esquina inferior derecha.",
    code: `.tarjeta-firma {
  border-bottom-right-radius: 24px;
}`,
    note: "Se usa para dar remates distintos a cada esquina.",
  },
  {
    name: "border-inline-start",
    type: "Borde",
    aliases: "border-inline-start inicio lateral borde",
    description: "Dibuja el borde en el lado de inicio del texto.",
    code: `.nota-logica {
  border-inline-start: 5px solid #1f5c4a;
}`,
    note: "Es la version logica de border-left.",
  },
  {
    name: "border-block-end",
    type: "Borde",
    aliases: "border-block-end borde final bloque",
    description: "Dibuja el borde al final vertical del bloque.",
    code: `.pie-seccion {
  border-block-end: 2px dashed #d8d1c4;
}`,
    note: "Es la version logica de border-bottom.",
  },
  {
    name: "border-image-outset",
    type: "Borde",
    aliases: "border-image-outset salida imagen borde",
    description: "Hace que la imagen del borde sobresalga de la caja.",
    code: `.marco-vintage {
  border: 16px solid transparent;
  border-image-source: url("vintage-frame.png");
  border-image-slice: 32;
  border-image-outset: 6px;
}`,
    note: "Sirve para marcos decorativos que necesitan salir un poco hacia afuera.",
  },
  {
    name: "inline-size",
    type: "Medidas",
    aliases: "inline-size ancho logico medida",
    description: "Marca el tamano horizontal segun la direccion del texto.",
    code: `.tarjeta-logica {
  inline-size: 280px;
}`,
    note: "Es la version logica de width.",
  },
  {
    name: "block-size",
    type: "Medidas",
    aliases: "block-size alto logico medida",
    description: "Marca el tamano vertical del bloque.",
    code: `.columna-logica {
  block-size: 180px;
}`,
    note: "Es la version logica de height.",
  },
  {
    name: "min-inline-size",
    type: "Medidas",
    aliases: "min-inline-size ancho minimo logico",
    description: "Fija el tamano minimo horizontal de un elemento.",
    code: `.menu-fijo {
  min-inline-size: 200px;
}`,
    note: "Sirve para evitar que un bloque se achique demasiado.",
  },
  {
    name: "max-inline-size",
    type: "Medidas",
    aliases: "max-inline-size ancho maximo logico",
    description: "Limita el tamano horizontal maximo del elemento.",
    code: `.lectura-comoda {
  max-inline-size: 68ch;
}`,
    note: "Es muy util para textos largos y anchos de lectura.",
  },
  {
    name: "min-block-size",
    type: "Medidas",
    aliases: "min-block-size alto minimo logico",
    description: "Fija el tamano minimo vertical del bloque.",
    code: `.hero-corto {
  min-block-size: 240px;
}`,
    note: "Ayuda a reservar espacio visual aunque haya poco contenido.",
  },
  {
    name: "max-block-size",
    type: "Medidas",
    aliases: "max-block-size alto maximo logico",
    description: "Limita el tamano vertical del bloque.",
    code: `.panel-acotado {
  max-block-size: 320px;
  overflow-y: auto;
}`,
    note: "Se usa en paneles que no deben crecer indefinidamente.",
  },
  {
    name: "background-clip",
    type: "Fondo",
    aliases: "background-clip recorte fondo",
    description: "Decide hasta donde se pinta el fondo del elemento.",
    code: `.borde-transparente {
  border: 10px solid rgba(255, 255, 255, 0.4);
  background-clip: padding-box;
}`,
    note: "Evita que el fondo se meta debajo del borde.",
  },
  {
    name: "background-origin",
    type: "Fondo",
    aliases: "background-origin origen fondo",
    description: "Define desde que caja se posiciona el fondo.",
    code: `.marco-fotografico {
  padding: 20px;
  background-image: url("papel.jpg");
  background-origin: content-box;
}`,
    note: "Sirve para mover la referencia del fondo sin tocar el contenido.",
  },
  {
    name: "background-position-x",
    type: "Fondo",
    aliases: "background-position-x posicion horizontal fondo",
    description: "Mueve el fondo solo en el eje horizontal.",
    code: `.hero-descentrado {
  background-image: url("paisaje.jpg");
  background-position-x: right;
}`,
    note: "Es util cuando quieres ajustar solo un eje del fondo.",
  },
  {
    name: "background-position-y",
    type: "Fondo",
    aliases: "background-position-y posicion vertical fondo",
    description: "Mueve el fondo solo en el eje vertical.",
    code: `.portada-recortada {
  background-image: url("tapa.jpg");
  background-position-y: top;
}`,
    note: "Complementa a background-position-x cuando necesitas control separado.",
  },
  {
    name: "break-before",
    type: "Layout",
    aliases: "break-before corte antes columnas paginas",
    description: "Fuerza o evita un corte antes del elemento.",
    code: `.titulo-capitulo {
  break-before: column;
}`,
    note: "Sirve en columnas, impresion o composiciones largas.",
  },
  {
    name: "break-after",
    type: "Layout",
    aliases: "break-after corte despues columnas paginas",
    description: "Fuerza o evita un corte despues del elemento.",
    code: `.separador-editorial {
  break-after: page;
}`,
    note: "Se usa al preparar contenido para impresion o maquetacion avanzada.",
  },
  {
    name: "orphans",
    type: "Layout",
    aliases: "orphans lineas huerfanas tipografia",
    description: "Define cuantas lineas minimas deben quedar al final de una pagina o columna.",
    code: `.texto-impreso {
  orphans: 3;
}`,
    note: "Es una propiedad pensada para composicion editorial e impresion.",
  },
  {
    name: "widows",
    type: "Layout",
    aliases: "widows lineas viudas tipografia",
    description: "Define cuantas lineas minimas deben pasar a la siguiente pagina o columna.",
    code: `.articulo-impreso {
  widows: 3;
}`,
    note: "Ayuda a evitar cortes feos en contenido largo impreso.",
  },
  {
    name: "contain-intrinsic-size",
    type: "Layout",
    aliases: "contain-intrinsic-size tamano intrinseco rendimiento",
    description: "Le da un tamano aproximado a bloques que se renderizan despues.",
    code: `.modulo-diferido {
  content-visibility: auto;
  contain-intrinsic-size: 280px;
}`,
    note: "Se usa junto a content-visibility para evitar saltos de layout.",
  },
  {
    name: "shape-outside",
    type: "Layout",
    aliases: "shape-outside contorno texto rodear",
    description: "Hace que el texto rodee una forma alrededor de un elemento flotante.",
    code: `.foto-circular {
  float: left;
  width: 180px;
  height: 180px;
  shape-outside: circle(50%);
}`,
    note: "Es ideal para composiciones editoriales con imagenes recortadas.",
  },
  {
    name: "shape-margin",
    type: "Layout",
    aliases: "shape-margin separacion forma rodeo texto",
    description: "Agrega aire entre el texto y la forma definida por shape-outside.",
    code: `.retrato-recortado {
  float: right;
  shape-outside: ellipse(45% 50%);
  shape-margin: 16px;
}`,
    note: "Mejora mucho la lectura cuando el texto rodea formas.",
  },
  {
    name: "flex",
    type: "Flex",
    aliases: "flex shorthand crecer base encoger",
    description: "Resume grow, shrink y basis en una sola regla.",
    code: `.columna-fluid {
  flex: 1 1 260px;
}`,
    note: "Es la forma mas comun de definir items flex flexibles.",
  },
  {
    name: "flex-flow",
    type: "Flex",
    aliases: "flex-flow direccion wrap flex",
    description: "Resume flex-direction y flex-wrap en una sola propiedad.",
    code: `.fila-mixta {
  display: flex;
  flex-flow: row wrap;
}`,
    note: "Sirve para definir rapido la direccion y el salto de linea.",
  },
  {
    name: "grid-template-areas",
    type: "Grid",
    aliases: "grid-template-areas mapa areas grilla",
    description: "Define un mapa visual de areas con nombres.",
    code: `.layout-revista {
  display: grid;
  grid-template-areas:
    "hero hero"
    "menu contenido";
}`,
    note: "Hace mas legible la estructura de grillas complejas.",
  },
  {
    name: "grid-area",
    type: "Grid",
    aliases: "grid-area asignar area grilla",
    description: "Asigna un item a una de las areas nombradas en la grilla.",
    code: `.bloque-portada {
  grid-area: hero;
}`,
    note: "Se usa cuando el contenedor ya define grid-template-areas.",
  },
  {
    name: "grid",
    type: "Grid",
    aliases: "grid shorthand grilla completa",
    description: "Resume partes importantes de la configuracion de una grilla.",
    code: `.tablero-rapido {
  display: grid;
  grid: auto-flow 120px / repeat(4, 1fr);
}`,
    note: "Es una propiedad corta para definir estructura y flujo.",
  },
  {
    name: "inset-inline-end",
    type: "Posicion",
    aliases: "inset-inline-end final lateral logico",
    description: "Ubica un elemento desde el lado final del texto.",
    code: `.sello-derecha {
  position: absolute;
  inset-inline-end: 14px;
}`,
    note: "Es la version logica de right.",
  },
  {
    name: "inset-block-end",
    type: "Posicion",
    aliases: "inset-block-end final vertical logico",
    description: "Ubica un elemento desde la parte final vertical del bloque.",
    code: `.firma-inferior {
  position: absolute;
  inset-block-end: 10px;
}`,
    note: "Es la version logica de bottom.",
  },
  {
    name: "transition-delay",
    type: "Interaccion",
    aliases: "transition-delay retraso transicion",
    description: "Hace esperar un poco antes de arrancar una transicion.",
    code: `.tooltip-suave {
  transition: opacity 0.2s ease;
  transition-delay: 0.15s;
}`,
    note: "Sirve para evitar reacciones demasiado bruscas al pasar el mouse.",
  },
  {
    name: "animation-name",
    type: "Interaccion",
    aliases: "animation-name nombre animacion",
    description: "Elige que animacion definida en keyframes va a usarse.",
    code: `.marca-viva {
  animation-name: latido-marca;
}

@keyframes latido-marca {
  50% { scale: 1.04; }
}`,
    note: "Separa el nombre de la animacion del resto de sus valores.",
  },
  {
    name: "animation-timing-function",
    type: "Interaccion",
    aliases: "animation-timing-function curva animacion",
    description: "Controla la curva de velocidad de una animacion.",
    code: `.recuadro-entrada {
  animation: entrar 0.7s both;
  animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes entrar {
  from { opacity: 0; translate: 0 14px; }
  to { opacity: 1; translate: 0 0; }
}`,
    note: "Sirve para que la animacion se sienta mas suave o con mas tension.",
  },
  {
    name: "scroll-padding-inline",
    type: "Interaccion",
    aliases: "scroll-padding-inline espacio scroll lateral",
    description: "Reserva espacio lateral para el scroll automatico.",
    code: `.carrusel-pasos {
  scroll-padding-inline: 24px;
}`,
    note: "Es util en sliders o listas horizontales con snap.",
  },
  {
    name: "scroll-margin-bottom",
    type: "Interaccion",
    aliases: "scroll-margin-bottom margen scroll inferior",
    description: "Deja un margen abajo cuando haces scroll hasta un ancla.",
    code: `.bloque-referencia {
  scroll-margin-bottom: 18px;
}`,
    note: "Complementa otras propiedades de scroll con anclas.",
  },
  {
    name: "overscroll-behavior-x",
    type: "Interaccion",
    aliases: "overscroll-behavior-x rebote horizontal scroll",
    description: "Controla el comportamiento del scroll horizontal al llegar al limite.",
    code: `.galeria-arrastre {
  overscroll-behavior-x: contain;
}`,
    note: "Evita arrastrar toda la pagina desde un slider horizontal.",
  },
  {
    name: "overscroll-behavior-y",
    type: "Interaccion",
    aliases: "overscroll-behavior-y rebote vertical scroll",
    description: "Controla el comportamiento del scroll vertical al llegar al limite.",
    code: `.panel-comentarios {
  overscroll-behavior-y: none;
}`,
    note: "Se usa para paneles internos con mucho scroll vertical.",
  },
  {
    name: "mask-mode",
    type: "Efecto",
    aliases: "mask-mode modo mascara alpha luminance",
    description: "Decide como se interpreta la mascara de un elemento.",
    code: `.logo-enmascarado {
  mask-image: url("logo-mask.svg");
  mask-mode: alpha;
}`,
    note: "Se usa junto a otras propiedades mask para afinar el recorte.",
  },
  {
    name: "mask-composite",
    type: "Efecto",
    aliases: "mask-composite combinar mascaras",
    description: "Combina varias mascaras con distintos modos.",
    code: `.recorte-doble {
  mask-image: url("forma1.svg"), url("forma2.svg");
  mask-composite: add;
}`,
    note: "Sirve en composiciones avanzadas con varias mascaras.",
  },
  {
    name: "image-orientation",
    type: "Media",
    aliases: "image-orientation orientacion imagen exif",
    description: "Respeta o ajusta la orientacion de una imagen.",
    code: `.foto-movil {
  image-orientation: from-image;
}`,
    note: "Ayuda cuando la orientacion viene guardada en los metadatos.",
  },
  {
    name: "empty-cells",
    type: "Tabla",
    aliases: "empty-cells celdas vacias tabla",
    description: "Decide si las celdas vacias de una tabla se muestran o no.",
    code: `.tabla-compacta {
  empty-cells: hide;
}`,
    note: "Se usa para tablas con muchos huecos o datos incompletos.",
  },
  {
    name: "field-sizing",
    type: "Formulario",
    aliases: "field-sizing tamano campo formulario",
    description: "Permite que algunos campos ajusten mejor su tamano al contenido.",
    code: `.input-adaptable {
  field-sizing: content;
}`,
    note: "Es una propiedad moderna pensada para formularios mas flexibles.",
  },
  {
    name: "forced-color-adjust",
    type: "Accesibilidad",
    aliases: "forced-color-adjust alto contraste accesibilidad",
    description: "Controla como responde un elemento a modos de colores forzados.",
    code: `.logo-critico {
  forced-color-adjust: none;
}`,
    note: "Se usa con cuidado en piezas que no deben perder su forma visual.",
  },
  {
    name: "outline-style",
    type: "Accesibilidad",
    aliases: "outline-style estilo contorno foco",
    description: "Elige el estilo del outline alrededor del elemento.",
    code: `.boton-teclado:focus-visible {
  outline-style: dashed;
}`,
    note: "Complementa a outline-width y outline-color.",
  },
  {
    name: "outline-width",
    type: "Accesibilidad",
    aliases: "outline-width grosor contorno foco",
    description: "Marca el grosor del outline.",
    code: `.campo-activo:focus-visible {
  outline-style: solid;
  outline-width: 4px;
}`,
    note: "Sirve para hacer mas visible el foco al navegar con teclado.",
  },
  {
    name: "outline-color",
    type: "Accesibilidad",
    aliases: "outline-color color contorno foco",
    description: "Pinta el outline con un color especifico.",
    code: `.link-teclado:focus-visible {
  outline-style: solid;
  outline-color: #1f5c4a;
}`,
    note: "Permite mantener una paleta consistente en el foco visible.",
  },
  {
    name: "stroke-linecap",
    type: "SVG",
    aliases: "stroke-linecap remate linea svg",
    description: "Cambia la forma del remate en los extremos de una linea SVG.",
    code: `.ruta-redonda {
  stroke-linecap: round;
}`,
    note: "Sirve para suavizar lineas y trazos de iconos.",
  },
  {
    name: "stroke-linejoin",
    type: "SVG",
    aliases: "stroke-linejoin union esquinas svg",
    description: "Cambia la forma en que se unen dos segmentos de un trazo SVG.",
    code: `.borde-icono {
  stroke-linejoin: bevel;
}`,
    note: "Es util para ajustar esquinas en ilustraciones lineales.",
  },
  {
    name: "stroke-dasharray",
    type: "SVG",
    aliases: "stroke-dasharray linea punteada svg",
    description: "Convierte un trazo SVG en una linea punteada o segmentada.",
    code: `.camino-marcado {
  stroke-dasharray: 6 3;
}`,
    note: "Se usa en rutas, mapas o ilustraciones tecnicas.",
  },
  {
    name: "stroke-dashoffset",
    type: "SVG",
    aliases: "stroke-dashoffset desplazar guiones svg",
    description: "Mueve el patron de guiones a lo largo del trazo SVG.",
    code: `.trayecto-animado {
  stroke-dasharray: 10 6;
  stroke-dashoffset: 4;
}`,
    note: "Sirve para dar sensacion de movimiento o ajustar el patron.",
  },
  {
    name: "fill-rule",
    type: "SVG",
    aliases: "fill-rule relleno svg reglas",
    description: "Define como se rellena una forma SVG compleja.",
    code: `.figura-calada {
  fill-rule: evenodd;
}`,
    note: "Es importante en formas con huecos o caminos superpuestos.",
  },
  {
    name: "vector-effect",
    type: "SVG",
    aliases: "vector-effect trazo constante svg",
    description: "Mantiene ciertos comportamientos del trazo aunque el SVG escale.",
    code: `.icono-escalable {
  vector-effect: non-scaling-stroke;
}`,
    note: "Hace que el grosor del trazo no cambie al agrandar el dibujo.",
  },
  {
    name: "font",
    type: "Texto",
    aliases: "font atajo tipografia fuente texto",
    description: "Resume varias reglas tipograficas en una sola linea.",
    code: `.rotulo-principal {
  font: italic 700 1rem/1.4 "Georgia", serif;
}`,
    note: "Sirve para definir estilo, grosor, tamano, interlineado y familia de una vez.",
  },
  {
    name: "font-synthesis",
    type: "Texto",
    aliases: "font-synthesis sintetizar negrita cursiva tipografia",
    description: "Controla si el navegador inventa variantes de la fuente cuando faltan.",
    code: `.titulo-editorial {
  font-synthesis: none;
}`,
    note: "Se usa cuando quieres evitar cursivas o negritas falsas en una fuente.",
  },
  {
    name: "font-palette",
    type: "Texto",
    aliases: "font-palette paleta tipografia color fuente",
    description: "Elige una paleta de color dentro de ciertas fuentes especiales.",
    code: `.logo-tipografico {
  font-palette: dark;
}`,
    note: "Funciona con fuentes de color que traen varias paletas internas.",
  },
  {
    name: "text-decoration-skip-ink",
    type: "Texto",
    aliases: "text-decoration-skip-ink subrayado texto tinta",
    description: "Hace que el subrayado esquive las partes bajas de algunas letras.",
    code: `.link-nota {
  text-decoration: underline;
  text-decoration-skip-ink: auto;
}`,
    note: "Mejora la lectura de enlaces y palabras subrayadas.",
  },
  {
    name: "margin-block",
    type: "Caja",
    aliases: "margin-block margen bloque arriba abajo logico",
    description: "Pone margen vertical usando la direccion logica del contenido.",
    code: `.seccion-destacada {
  margin-block: 24px 40px;
}`,
    note: "Es util cuando quieres pensar en inicio y fin del bloque en vez de top y bottom.",
  },
  {
    name: "margin-block-start",
    type: "Caja",
    aliases: "margin-block-start margen inicio bloque logico",
    description: "Agrega margen al inicio del bloque segun la escritura del documento.",
    code: `.subtitulo-largo {
  margin-block-start: 18px;
}`,
    note: "Sirve para layouts que cambian entre idiomas o modos de escritura.",
  },
  {
    name: "margin-block-end",
    type: "Caja",
    aliases: "margin-block-end margen final bloque logico",
    description: "Agrega margen al final del bloque segun la direccion logica.",
    code: `.aviso-final {
  margin-block-end: 28px;
}`,
    note: "Ayuda a cerrar bloques sin depender de bottom.",
  },
  {
    name: "margin-inline-start",
    type: "Caja",
    aliases: "margin-inline-start margen inicio linea logico",
    description: "Separa el elemento al inicio horizontal de la linea.",
    code: `.badge-lateral {
  margin-inline-start: 12px;
}`,
    note: "Se adapta mejor que margin-left cuando cambia la direccion del texto.",
  },
  {
    name: "margin-inline-end",
    type: "Caja",
    aliases: "margin-inline-end margen final linea logico",
    description: "Agrega espacio al final horizontal de la linea.",
    code: `.icono-externo {
  margin-inline-end: 10px;
}`,
    note: "Conviene cuando quieres un margen logico en vez de right.",
  },
  {
    name: "padding-inline-start",
    type: "Caja",
    aliases: "padding-inline-start relleno inicio linea logico",
    description: "Agrega espacio interno al inicio de la linea.",
    code: `.cita-lateral {
  padding-inline-start: 20px;
}`,
    note: "Sirve para interfaces que pueden cambiar de izquierda a derecha o al reves.",
  },
  {
    name: "padding-inline-end",
    type: "Caja",
    aliases: "padding-inline-end relleno final linea logico",
    description: "Agrega espacio interno al final de la linea.",
    code: `.chip-ancho {
  padding-inline-end: 18px;
}`,
    note: "Va bien cuando quieres controlar el cierre interno sin usar right.",
  },
  {
    name: "padding-block-start",
    type: "Caja",
    aliases: "padding-block-start relleno inicio bloque logico",
    description: "Suma aire interno al inicio del bloque.",
    code: `.modulo-resumen {
  padding-block-start: 14px;
}`,
    note: "Es la version logica de un relleno superior.",
  },
  {
    name: "padding-block-end",
    type: "Caja",
    aliases: "padding-block-end relleno final bloque logico",
    description: "Suma aire interno al final del bloque.",
    code: `.modulo-resumen {
  padding-block-end: 20px;
}`,
    note: "Ayuda a cerrar el contenido con espacio extra abajo de forma logica.",
  },
  {
    name: "border-start-start-radius",
    type: "Borde",
    aliases: "border-start-start-radius esquina logica redondeada borde",
    description: "Redondea la esquina del inicio superior segun la direccion del texto.",
    code: `.globo-chat {
  border-start-start-radius: 18px;
}`,
    note: "Sirve para interfaces bilingues o componentes que usan bordes logicos.",
  },
  {
    name: "border-start-end-radius",
    type: "Borde",
    aliases: "border-start-end-radius esquina logica borde",
    description: "Redondea la esquina del final superior de forma logica.",
    code: `.globo-chat {
  border-start-end-radius: 4px;
}`,
    note: "Se usa para dar formas asimetricas sin depender de left o right.",
  },
  {
    name: "border-end-start-radius",
    type: "Borde",
    aliases: "border-end-start-radius esquina inferior logica borde",
    description: "Redondea la esquina del inicio inferior segun la escritura.",
    code: `.globo-chat {
  border-end-start-radius: 20px;
}`,
    note: "Combina muy bien con layouts que usan propiedades logicas.",
  },
  {
    name: "border-end-end-radius",
    type: "Borde",
    aliases: "border-end-end-radius esquina final inferior borde",
    description: "Redondea la esquina del final inferior de manera logica.",
    code: `.globo-chat {
  border-end-end-radius: 20px;
}`,
    note: "Ayuda a mantener la forma correcta en componentes adaptables.",
  },
  {
    name: "border-inline-width",
    type: "Borde",
    aliases: "border-inline-width grosor borde lateral logico",
    description: "Define el grosor de los bordes laterales de forma logica.",
    code: `.separador-lateral {
  border-inline-style: solid;
  border-inline-width: 3px;
}`,
    note: "Necesita tambien un estilo de borde para que se vea.",
  },
  {
    name: "border-block-style",
    type: "Borde",
    aliases: "border-block-style estilo borde arriba abajo logico",
    description: "Elige el estilo de los bordes en el eje de bloque.",
    code: `.tabla-resumen {
  border-block-style: dashed;
}`,
    note: "Se nota mejor si tambien defines color y grosor.",
  },
  {
    name: "mask",
    type: "Fondo",
    aliases: "mask mascara recorte fondo",
    description: "Aplica una mascara completa para recortar visualmente el elemento.",
    code: `.avatar-recorte {
  mask: radial-gradient(circle, #000 62%, transparent 63%) center / cover no-repeat;
}`,
    note: "Sirve para siluetas, recortes o efectos de transparencia controlada.",
  },
  {
    name: "mask-clip",
    type: "Fondo",
    aliases: "mask-clip recorte mascara fondo",
    description: "Decide hasta donde se aplica la mascara dentro de la caja.",
    code: `.caja-enmascarada {
  padding: 12px;
  mask-image: linear-gradient(#000, #000);
  mask-clip: content-box;
}`,
    note: "Ayuda a limitar la mascara al contenido, padding o borde.",
  },
  {
    name: "mask-origin",
    type: "Fondo",
    aliases: "mask-origin origen mascara fondo",
    description: "Define desde que caja se calcula la posicion de la mascara.",
    code: `.sello-grafico {
  padding: 10px;
  mask-image: linear-gradient(#000, transparent);
  mask-origin: border-box;
}`,
    note: "Se usa cuando la mascara debe tomar como referencia el borde o el contenido.",
  },
  {
    name: "container",
    type: "Layout",
    aliases: "container contenedor query atajo layout",
    description: "Resume el nombre y el tipo de un contenedor para container queries.",
    code: `.panel-catalogo {
  container: sidebar / inline-size;
}`,
    note: "Es el atajo mas rapido para preparar un componente que respondera a su propio ancho.",
  },
  {
    name: "container-type",
    type: "Layout",
    aliases: "container-type tipo contenedor query layout",
    description: "Activa un contenedor medible para usar queries internas.",
    code: `.panel-producto {
  container-type: inline-size;
}`,
    note: "Sin esta base, un @container no tiene sobre que medir.",
  },
  {
    name: "container-name",
    type: "Layout",
    aliases: "container-name nombre contenedor query layout",
    description: "Le pone un nombre al contenedor para apuntarlo desde @container.",
    code: `.panel-producto {
  container-name: ficha;
}`,
    note: "Sirve cuando hay varios contenedores y quieres consultar uno especifico.",
  },
  {
    name: "column-rule-color",
    type: "Layout",
    aliases: "column-rule-color color linea columnas layout",
    description: "Pinta la linea que separa columnas en un layout multicolumna.",
    code: `.texto-columnas {
  columns: 2;
  column-rule-style: solid;
  column-rule-color: #b8c7c0;
}`,
    note: "Necesita una regla de columna con estilo para hacerse visible.",
  },
  {
    name: "column-rule-style",
    type: "Layout",
    aliases: "column-rule-style estilo separador columnas",
    description: "Define el estilo de la linea entre columnas.",
    code: `.texto-columnas {
  columns: 3;
  column-rule-style: dotted;
}`,
    note: "Conviene combinarlo con color o ancho para que quede claro.",
  },
  {
    name: "column-rule-width",
    type: "Layout",
    aliases: "column-rule-width ancho separador columnas",
    description: "Marca el grosor de la linea divisoria entre columnas.",
    code: `.texto-columnas {
  columns: 2;
  column-rule-style: solid;
  column-rule-width: 2px;
}`,
    note: "Es la forma de hacer mas fina o mas fuerte la separacion.",
  },
  {
    name: "grid-column-start",
    type: "Grid",
    aliases: "grid-column-start inicio columna grid",
    description: "Le dice a un item de grid en que columna debe empezar.",
    code: `.tablero-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card-principal {
  grid-column-start: 2;
}`,
    note: "Se usa cuando quieres ubicar un elemento con mas precision dentro de la grilla.",
  },
  {
    name: "grid-column-end",
    type: "Grid",
    aliases: "grid-column-end fin columna grid",
    description: "Marca en que linea de columna debe terminar el item.",
    code: `.tablero-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.card-principal {
  grid-column-end: 4;
}`,
    note: "Puedes combinarlo con grid-column-start para controlar su tramo exacto.",
  },
  {
    name: "grid-row-start",
    type: "Grid",
    aliases: "grid-row-start inicio fila grid",
    description: "Elige la linea de fila donde arranca un item de grid.",
    code: `.mosaico-panel {
  display: grid;
  grid-template-rows: 80px 80px 80px;
}

.banner-grid {
  grid-row-start: 1;
}`,
    note: "Ayuda cuando necesitas fijar un bloque arriba o en una fila concreta.",
  },
  {
    name: "grid-row-end",
    type: "Grid",
    aliases: "grid-row-end fin fila grid",
    description: "Marca hasta que linea de fila llega un item de grid.",
    code: `.mosaico-panel {
  display: grid;
  grid-template-rows: 80px 80px 80px;
}

.banner-grid {
  grid-row-end: 3;
}`,
    note: "Va muy bien para tarjetas altas que ocupan mas de una fila.",
  },
  {
    name: "grid-template",
    type: "Grid",
    aliases: "grid-template atajo filas columnas areas grid",
    description: "Resume filas, columnas y areas de una grilla en una sola regla.",
    code: `.dashboard {
  display: grid;
  grid-template:
    "menu hero" auto
    "menu stats" 1fr
    / 220px 1fr;
}`,
    note: "Sirve para definir una grilla completa de manera compacta.",
  },
  {
    name: "inset-inline",
    type: "Posicion",
    aliases: "inset-inline posicion lateral logica",
    description: "Define de una vez el inicio y fin lateral de un elemento posicionado.",
    code: `.banner-fijo {
  position: absolute;
  inset-inline: 12px 12px;
}`,
    note: "Es la version logica de usar left y right juntos.",
  },
  {
    name: "inset-block",
    type: "Posicion",
    aliases: "inset-block posicion vertical logica",
    description: "Controla inicio y fin del bloque en elementos posicionados.",
    code: `.sombra-superpuesta {
  position: absolute;
  inset-block: 0 auto;
}`,
    note: "Ayuda a pensar el eje vertical de forma logica y no fisica.",
  },
  {
    name: "scroll-padding-block",
    type: "Interaccion",
    aliases: "scroll-padding-block espacio scroll bloque snap",
    description: "Reserva espacio arriba y abajo al usar scroll con anclas o snap.",
    code: `.carrusel-vertical {
  scroll-snap-type: y mandatory;
  scroll-padding-block: 24px;
}`,
    note: "Es util cuando el contenido no debe pegarse a los bordes al desplazarse.",
  },
  {
    name: "scroll-padding-block-start",
    type: "Interaccion",
    aliases: "scroll-padding-block-start espacio superior scroll",
    description: "Deja un margen de seguridad al inicio del scroll en eje de bloque.",
    code: `.zona-anclada {
  scroll-padding-block-start: 72px;
}`,
    note: "Va muy bien cuando tienes un encabezado fijo que tapa el contenido.",
  },
  {
    name: "scroll-padding-block-end",
    type: "Interaccion",
    aliases: "scroll-padding-block-end espacio final scroll",
    description: "Reserva espacio al final del scroll en el eje de bloque.",
    code: `.zona-anclada {
  scroll-padding-block-end: 32px;
}`,
    note: "Ayuda a que el contenido final no quede demasiado pegado al borde.",
  },
  {
    name: "scroll-margin-inline",
    type: "Interaccion",
    aliases: "scroll-margin-inline margen scroll lateral",
    description: "Agrega margen lateral cuando un elemento se enfoca por scroll o ancla.",
    code: `.tarjeta-salto {
  scroll-margin-inline: 18px;
}`,
    note: "Sirve para que el objetivo quede mejor encuadrado al desplazarse.",
  },
  {
    name: "scroll-margin-inline-start",
    type: "Interaccion",
    aliases: "scroll-margin-inline-start margen inicio scroll",
    description: "Suma margen en el inicio lateral cuando el navegador lleva el foco hasta un elemento.",
    code: `.tarjeta-salto {
  scroll-margin-inline-start: 22px;
}`,
    note: "Ayuda a que los saltos no queden demasiado pegados al borde inicial.",
  },
  {
    name: "scroll-margin-inline-end",
    type: "Interaccion",
    aliases: "scroll-margin-inline-end margen final scroll",
    description: "Suma margen al final lateral cuando el elemento entra en vista por scroll.",
    code: `.tarjeta-salto {
  scroll-margin-inline-end: 22px;
}`,
    note: "Es util en carruseles o listas horizontales navegables.",
  },
  {
    name: "overscroll-behavior-inline",
    type: "Interaccion",
    aliases: "overscroll-behavior-inline rebote lateral scroll",
    description: "Controla el rebote o encadenamiento del scroll lateral.",
    code: `.galeria-horizontal {
  overscroll-behavior-inline: contain;
}`,
    note: "Sirve para que un carrusel no arrastre el scroll de toda la pagina.",
  },
  {
    name: "overscroll-behavior-block",
    type: "Interaccion",
    aliases: "overscroll-behavior-block rebote vertical scroll",
    description: "Controla el comportamiento del scroll vertical al llegar a un extremo.",
    code: `.lista-modal {
  overscroll-behavior-block: contain;
}`,
    note: "Se usa mucho en modales o paneles internos con desplazamiento propio.",
  },
  {
    name: "text-size-adjust",
    type: "Accesibilidad",
    aliases: "text-size-adjust tamano texto accesibilidad movil",
    description: "Permite que el navegador ajuste el texto para mejorar la lectura en algunos dispositivos.",
    code: `html {
  text-size-adjust: 100%;
}`,
    note: "Ayuda a respetar la escala de texto sin bloquear mejoras de legibilidad.",
  },
  {
    name: "transform-box",
    type: "Efecto",
    aliases: "transform-box caja transformacion efecto",
    description: "Define que caja se usa como referencia para transformar un elemento.",
    code: `.icono-giratorio {
  transform-box: fill-box;
  transform-origin: center;
}`,
    note: "Es muy util en SVG o iconos donde el punto de referencia importa mucho.",
  },
  {
    name: "offset-path",
    type: "Efecto",
    aliases: "offset-path camino movimiento efecto",
    description: "Crea una trayectoria para mover un elemento sobre un camino.",
    code: `.punto-ruta {
  offset-path: path("M0,0 C80,0 120,60 200,60");
}`,
    note: "Se usa en animaciones donde un objeto debe seguir una curva.",
  },
  {
    name: "offset-distance",
    type: "Efecto",
    aliases: "offset-distance distancia trayecto efecto",
    description: "Marca cuanto avanzo un elemento sobre su offset-path.",
    code: `.punto-ruta {
  offset-path: path("M0,0 L220,0");
  offset-distance: 55%;
}`,
    note: "Se combina con offset-path para ubicar el elemento en un punto del recorrido.",
  },
  {
    name: "offset-rotate",
    type: "Efecto",
    aliases: "offset-rotate rotacion automatica trayecto",
    description: "Hace que un elemento gire segun la direccion de su trayectoria.",
    code: `.flecha-ruta {
  offset-path: path("M0,0 C60,0 140,80 220,80");
  offset-rotate: auto;
}`,
    note: "Ayuda a que iconos o flechas acompanen el movimiento del camino.",
  },
  {
    name: "transition-behavior",
    type: "Efecto",
    aliases: "transition-behavior comportamiento transicion efecto",
    description: "Controla como participan ciertas propiedades discretas en una transicion.",
    code: `.panel-desplegable {
  transition: opacity 0.25s ease, display 0.25s ease;
  transition-behavior: allow-discrete;
}`,
    note: "Es util en interfaces modernas donde display tambien entra en la transicion.",
  },
  {
    name: "@media (prefers-reduced-motion: reduce)",
    type: "Media",
    aliases: "media prefers reduced motion menos movimiento accesibilidad",
    description: "Aplica reglas especiales cuando la persona prefiere menos animacion.",
    code: `@media (prefers-reduced-motion: reduce) {
  .tarjeta-animada {
    animation: none;
    transition: none;
  }
}`,
    note: "Sirve para bajar efectos y hacer la interfaz mas comoda.",
  },
  {
    name: "@media (prefers-contrast: more)",
    type: "Media",
    aliases: "media prefers contrast more contraste accesibilidad",
    description: "Activa ajustes para personas que necesitan mas contraste.",
    code: `@media (prefers-contrast: more) {
  .boton-principal {
    border: 2px solid #173a31;
  }
}`,
    note: "Se usa para reforzar contornos, textos y separaciones visibles.",
  },
  {
    name: "@media (hover: hover)",
    type: "Media",
    aliases: "media hover dispositivos mouse puntero",
    description: "Solo ejecuta reglas cuando el dispositivo realmente puede usar hover.",
    code: `@media (hover: hover) {
  .tarjeta-producto:hover {
    transform: translateY(-4px);
  }
}`,
    note: "Ayuda a evitar efectos de hover innecesarios en pantallas tactiles.",
  },
  {
    name: "@media (orientation: landscape)",
    type: "Media",
    aliases: "media orientation landscape horizontal pantalla",
    description: "Cambia estilos cuando la pantalla esta en horizontal.",
    code: `@media (orientation: landscape) {
  .galeria-movil {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}`,
    note: "Sirve para reorganizar contenido en celular o tablet al girar el dispositivo.",
  },
  {
    name: "@media print",
    type: "Media",
    aliases: "media print impresion papel",
    description: "Prepara una version mas limpia para imprimir.",
    code: `@media print {
  .menu-fijo,
  .botones-rapidos {
    display: none;
  }
}`,
    note: "Se usa para quitar elementos de navegacion y dejar solo el contenido util.",
  },
  {
    name: "@container",
    type: "Media",
    aliases: "container query consulta contenedor media",
    description: "Aplica estilos segun el tamano de un contenedor y no de toda la ventana.",
    code: `.tarjeta-responsiva {
  container: ficha / inline-size;
  display: grid;
}

@container ficha (min-width: 28rem) {
  .tarjeta-responsiva {
    grid-template-columns: 140px 1fr;
  }
}`,
    note: "Es ideal para componentes reutilizables que viven en espacios distintos.",
  },
  {
    name: "::before",
    type: "Pseudoelemento",
    aliases: "before pseudoelemento antes contenido decoracion",
    description: "Crea contenido visual antes del contenido real del elemento.",
    code: `.titulo-icono::before {
  content: "•";
  margin-inline-end: 8px;
}`,
    note: "Se usa para adornos, iconos, etiquetas o separadores sin agregar mas HTML.",
  },
  {
    name: "::after",
    type: "Pseudoelemento",
    aliases: "after pseudoelemento despues contenido decoracion",
    description: "Agrega contenido visual despues del contenido principal.",
    code: `.link-externo::after {
  content: "↗";
  margin-inline-start: 6px;
}`,
    note: "Va bien para flechas, adornos o cierres visuales dentro de botones y enlaces.",
  },
  {
    name: "::selection",
    type: "Pseudoelemento",
    aliases: "selection pseudoelemento seleccionar texto",
    description: "Cambia el color del texto cuando la persona lo selecciona.",
    code: `::selection {
  background-color: #cfe8dd;
  color: #173a31;
}`,
    note: "Sirve para personalizar la seleccion sin afectar la lectura normal.",
  },
  {
    name: "::placeholder",
    type: "Pseudoelemento",
    aliases: "placeholder pseudoelemento texto ayuda input",
    description: "Estiliza el texto de ayuda que aparece dentro de un campo vacio.",
    code: `.buscador-principal::placeholder {
  color: #7a8a96;
}`,
    note: "Se usa para bajar un poco el tono del texto guia dentro de inputs.",
  },
  {
    name: "::marker",
    type: "Pseudoelemento",
    aliases: "marker pseudoelemento vineta lista",
    description: "Permite cambiar el estilo de la vineta o numero de una lista.",
    code: `.lista-pasos li::marker {
  color: #1f5c4a;
  font-weight: bold;
}`,
    note: "Es ideal para listas donde la numeracion o vineta debe destacarse.",
  },
  {
    name: "::file-selector-button",
    type: "Pseudoelemento",
    aliases: "file selector button pseudoelemento subir archivo",
    description: "Estiliza el boton interno de un input para subir archivos.",
    code: `input[type="file"]::file-selector-button {
  padding: 8px 14px;
  border: 1px solid #1f5c4a;
  background-color: #e2f2ec;
}`,
    note: "Sirve para que el selector de archivos combine con el resto del formulario.",
  },
  {
    name: "::backdrop",
    type: "Pseudoelemento",
    aliases: "backdrop pseudoelemento fondo dialog modal",
    description: "Estiliza el fondo oscuro que aparece detras de un dialogo o pantalla completa.",
    code: `dialog::backdrop {
  background-color: rgba(16, 32, 51, 0.55);
}`,
    note: "Se usa para reforzar el foco visual sobre modales y dialogs.",
  },
  {
    name: "::first-letter",
    type: "Pseudoelemento",
    aliases: "first-letter pseudoelemento primera letra",
    description: "Permite destacar solo la primera letra de un bloque de texto.",
    code: `.parrafo-editorial::first-letter {
  font-size: 2.2rem;
  font-weight: 700;
}`,
    note: "Va muy bien en introducciones, articulos o estilos tipo revista.",
  },
  {
    name: "::first-line",
    type: "Pseudoelemento",
    aliases: "first-line pseudoelemento primera linea",
    description: "Aplica estilo solo a la primera linea visible de un texto.",
    code: `.resumen-nota::first-line {
  font-weight: 700;
}`,
    note: "Sirve para remarcar la apertura de un bloque sin tocar todo el parrafo.",
  },
  {
    name: "::cue",
    type: "Pseudoelemento",
    aliases: "cue pseudoelemento subtitulos video",
    description: "Estiliza subtitulos y pistas de texto dentro de un video.",
    code: `video::cue {
  color: #fff7d1;
  background-color: rgba(0, 0, 0, 0.65);
}`,
    note: "Es util para mejorar subtitulos y hacerlos mas legibles sobre la imagen.",
  },
  {
    name: "fill-opacity",
    type: "SVG",
    aliases: "fill-opacity opacidad relleno svg",
    description: "Controla que tan transparente es el relleno de una forma SVG.",
    code: `.burbuja-fondo {
  fill-opacity: 0.45;
}`,
    note: "Se usa para suavizar rellenos sin tocar el trazo.",
  },
  {
    name: "stroke-opacity",
    type: "SVG",
    aliases: "stroke-opacity opacidad trazo svg",
    description: "Controla la transparencia del borde o trazo en SVG.",
    code: `.contorno-suave {
  stroke-opacity: 0.6;
}`,
    note: "Ayuda a bajar la fuerza visual de lineas o marcos dentro del dibujo.",
  },
  {
    name: "shape-rendering",
    type: "SVG",
    aliases: "shape-rendering renderizado forma svg",
    description: "Le dice al navegador como priorizar nitidez o suavidad al dibujar formas SVG.",
    code: `.icono-pixel {
  shape-rendering: crispEdges;
}`,
    note: "Conviene en graficos geometricos o iconos que deben verse bien definidos.",
  },
  {
    name: "dominant-baseline",
    type: "SVG",
    aliases: "dominant-baseline alineacion base texto svg",
    description: "Alinea el texto SVG respecto de su linea base dominante.",
    code: `.etiqueta-centro {
  dominant-baseline: middle;
}`,
    note: "Se usa para centrar textos dentro de figuras o iconos.",
  },
  {
    name: "stop-color",
    type: "SVG",
    aliases: "stop-color color parada gradiente svg",
    description: "Define el color de una parada dentro de un degradado SVG.",
    code: `.degradado-logo stop:first-child {
  stop-color: #1f5c4a;
}`,
    note: "Sirve para construir gradientes propios dentro de defs.",
  },
  {
    name: "stop-opacity",
    type: "SVG",
    aliases: "stop-opacity opacidad parada gradiente svg",
    description: "Controla la transparencia de una parada del degradado SVG.",
    code: `.degradado-logo stop:last-child {
  stop-opacity: 0.2;
}`,
    note: "Ayuda a crear transiciones de color mas suaves o transparentes.",
  },
  {
    name: "marker-start",
    type: "SVG",
    aliases: "marker-start marcador inicio flecha svg",
    description: "Coloca un marcador en el inicio de una linea o camino SVG.",
    code: `.ruta-senalizada {
  marker-start: url(#punta-inicial);
}`,
    note: "Se usa para flechas, diagramas o recorridos tecnicos.",
  },
  {
    name: "marker-end",
    type: "SVG",
    aliases: "marker-end marcador final flecha svg",
    description: "Coloca un marcador al final de una linea o camino SVG.",
    code: `.ruta-senalizada {
  marker-end: url(#punta-final);
}`,
    note: "Va muy bien para diagramas, conexiones y lineas direccionales.",
  },
  {
    name: "clip-rule",
    type: "SVG",
    aliases: "clip-rule recorte svg regla",
    description: "Define como se interpreta una forma SVG usada como recorte complejo.",
    code: `.recorte-logo {
  clip-rule: evenodd;
}`,
    note: "Es util cuando un clipPath tiene huecos o caminos superpuestos.",
  },
];

const cssTypeOrder = [
  "Texto",
  "Caja",
  "Borde",
  "Medidas",
  "Fondo",
  "Layout",
  "Flex",
  "Grid",
  "Posicion",
  "Interaccion",
  "Efecto",
  "Media",
  "Tabla",
  "Formulario",
  "Accesibilidad",
  "Pseudoelemento",
  "SVG",
];

const cssTypeLabels = {
  Texto: "Texto",
  Caja: "Caja",
  Borde: "Borde",
  Medidas: "Medidas",
  Fondo: "Fondo",
  Layout: "Layout",
  Flex: "Flex",
  Grid: "Grid",
  Posicion: "Posicionamiento",
  Interaccion: "Interacción",
  Efecto: "Efectos",
  Media: "Media queries",
  Tabla: "Tablas",
  Formulario: "Formularios",
  Accesibilidad: "Accesibilidad",
  Pseudoelemento: "Pseudoelementos",
  SVG: "SVG",
};

const cssLevelOrder = ["Basico", "Intermedio", "Avanzado"];

const cssLevelLabels = {
  Basico: "Basico",
  Intermedio: "Intermedio",
  Avanzado: "Avanzado",
};

const basicCssPropertyNames = new Set([
  "padding",
  "margin",
  "border",
  "border-radius",
  "background",
  "background-color",
  "background-image",
  "background-size",
  "background-position",
  "background-repeat",
  "color",
  "font-family",
  "font-size",
  "font-weight",
  "line-height",
  "text-align",
  "text-decoration",
  "text-transform",
  "letter-spacing",
  "width",
  "max-width",
  "min-width",
  "height",
  "max-height",
  "min-height",
  "display",
  "position",
  "top",
  "right",
  "bottom",
  "left",
  "z-index",
  "box-sizing",
  "box-shadow",
  "overflow",
  "opacity",
  "cursor",
  "outline",
  "list-style",
  "white-space",
  "flex-direction",
  "flex-wrap",
  "justify-content",
  "align-items",
  "gap",
  "grid-template-columns",
  "grid-template-rows",
  "grid-column",
  "grid-row",
  "flex-grow",
  "flex-shrink",
  "flex-basis",
  "align-self",
  "order",
  "object-fit",
  "object-position",
  "transition",
  "transform",
  "filter",
  "appearance",
  "accent-color",
  "resize",
  "user-select",
  "pointer-events",
  "scroll-behavior",
  "border-color",
  "border-width",
  "border-style",
  "border-collapse",
  "table-layout",
  "caption-side",
  "text-shadow",
  "text-overflow",
  "overflow-wrap",
  "word-break",
]);

const advancedCssTypes = new Set(["Media", "Pseudoelemento", "SVG"]);

const advancedCssPropertyNames = new Set([
  "font-palette",
  "font-synthesis",
  "font-feature-settings",
  "font-optical-sizing",
  "font-size-adjust",
  "text-wrap",
  "text-emphasis",
  "text-emphasis-position",
  "text-combine-upright",
  "text-orientation",
  "ruby-position",
  "unicode-bidi",
  "line-break",
  "hanging-punctuation",
  "writing-mode",
  "font-kerning",
  "font-stretch",
  "text-rendering",
  "background-blend-mode",
  "mask",
  "mask-image",
  "mask-size",
  "mask-repeat",
  "mask-position",
  "mask-mode",
  "mask-composite",
  "mask-clip",
  "mask-origin",
  "backdrop-filter",
  "clip-path",
  "shape-outside",
  "shape-margin",
  "contain",
  "content-visibility",
  "contain-intrinsic-size",
  "container",
  "container-type",
  "container-name",
  "grid-template-areas",
  "grid-template",
  "grid-auto-columns",
  "grid-auto-rows",
  "grid-auto-flow",
  "grid-area",
  "grid-column-start",
  "grid-column-end",
  "grid-row-start",
  "grid-row-end",
  "place-items",
  "place-content",
  "place-self",
  "justify-items",
  "justify-self",
  "inset-inline-start",
  "inset-inline-end",
  "inset-block-start",
  "inset-block-end",
  "inset-inline",
  "inset-block",
  "padding-inline",
  "padding-block",
  "padding-inline-start",
  "padding-inline-end",
  "padding-block-start",
  "padding-block-end",
  "margin-inline",
  "margin-block",
  "margin-inline-start",
  "margin-inline-end",
  "margin-block-start",
  "margin-block-end",
  "border-inline",
  "border-block",
  "border-inline-start",
  "border-block-end",
  "border-inline-width",
  "border-block-style",
  "border-start-start-radius",
  "border-start-end-radius",
  "border-end-start-radius",
  "border-end-end-radius",
  "inline-size",
  "block-size",
  "min-inline-size",
  "max-inline-size",
  "min-block-size",
  "max-block-size",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "columns",
  "column-count",
  "column-width",
  "column-fill",
  "scroll-snap-type",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-padding-inline",
  "scroll-padding-block",
  "scroll-padding-block-start",
  "scroll-padding-block-end",
  "scroll-margin-top",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-start",
  "scroll-margin-inline-end",
  "overscroll-behavior",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "overscroll-behavior-inline",
  "overscroll-behavior-block",
  "scrollbar-gutter",
  "scrollbar-width",
  "scrollbar-color",
  "touch-action",
  "transform-origin",
  "transform-style",
  "transform-box",
  "perspective",
  "perspective-origin",
  "backface-visibility",
  "rotate",
  "scale",
  "translate",
  "offset-path",
  "offset-distance",
  "offset-rotate",
  "transition-behavior",
  "will-change",
  "animation",
  "animation-name",
  "animation-delay",
  "animation-fill-mode",
  "animation-duration",
  "animation-iteration-count",
  "animation-direction",
  "animation-play-state",
  "animation-timing-function",
  "forced-color-adjust",
  "text-size-adjust",
  "field-sizing",
  "color-scheme",
  "print-color-adjust",
  "all",
]);

const sectionAliases = {
  "base-documento":
    "base documento archivo html head body meta title link style script comentarios",
  estructura:
    "estructura contenedores header nav search main section article aside footer div span address",
  texto:
    "texto titulos subtitulos parrafo enfasis cita fecha abreviatura dato ruby",
  listas: "listas enlaces vinculos menu pasos definiciones mail telefono",
  multimedia:
    "multimedia imagenes audio video figure iframe canvas svg subtitulos",
  tablas: "tablas filas columnas celdas caption thead tbody tfoot td th",
  formularios:
    "formularios campos input textarea select option button checkbox radio email password",
  extras: "extras details summary code pre progress meter dialog template kbd",
  "propiedades-css":
    "css propiedades estilos borde fondo texto flex grid posicion medidas sombra transicion",
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getCssTypeOrderIndex(type) {
  const index = cssTypeOrder.indexOf(type);
  return index === -1 ? cssTypeOrder.length : index;
}

function getCssLevel(property) {
  if (property.level && cssLevelLabels[property.level]) {
    return property.level;
  }

  if (advancedCssTypes.has(property.type) || advancedCssPropertyNames.has(property.name)) {
    return "Avanzado";
  }

  if (basicCssPropertyNames.has(property.name)) {
    return "Basico";
  }

  return "Intermedio";
}

function getCssLevelLabel(level) {
  return cssLevelLabels[level] || level;
}

function getCssLevelOrderIndex(level) {
  const index = cssLevelOrder.indexOf(level);
  return index === -1 ? cssLevelOrder.length : index;
}

function getCssLevelBadgeClass(level) {
  if (level === "Basico") {
    return "propiedad-nivel--basico";
  }

  if (level === "Avanzado") {
    return "propiedad-nivel--avanzado";
  }

  return "propiedad-nivel--intermedio";
}

function getCssTypeLabel(type) {
  return cssTypeLabels[type] || type;
}

function getOrderedCssProperties() {
  return [...cssProperties].sort((propertyA, propertyB) => {
    const typeDiff = getCssTypeOrderIndex(propertyA.type) - getCssTypeOrderIndex(propertyB.type);

    if (typeDiff !== 0) {
      return typeDiff;
    }

    return getCssLevelOrderIndex(getCssLevel(propertyA)) - getCssLevelOrderIndex(getCssLevel(propertyB));
  });
}

function renderCssTypeChips() {
  const chipsContainer = document.querySelector("[data-css-type-chips]");

  if (!chipsContainer) {
    return;
  }

  const orderedTypes = Array.from(
    new Set(getOrderedCssProperties().map((property) => property.type)),
  );

  chipsContainer.innerHTML = orderedTypes
    .map(
      (type) => `
        <button
          class="chip-categoria"
          type="button"
          data-css-type-chip="${escapeHtml(type)}"
          aria-pressed="false"
        >
          ${escapeHtml(getCssTypeLabel(type))}
        </button>
      `,
    )
    .join("");
}

function renderCssLevelChips() {
  const chipsContainer = document.querySelector("[data-css-level-chips]");

  if (!chipsContainer) {
    return;
  }

  const orderedLevels = cssLevelOrder.filter((level) =>
    getOrderedCssProperties().some((property) => getCssLevel(property) === level),
  );

  chipsContainer.innerHTML = orderedLevels
    .map(
      (level) => `
        <button
          class="chip-categoria"
          type="button"
          data-css-level-chip="${escapeHtml(level)}"
          aria-pressed="false"
        >
          ${escapeHtml(getCssLevelLabel(level))}
        </button>
      `,
    )
    .join("");
}

function getPropertyDetailLines(property) {
  if (Array.isArray(property.detailLines) && property.detailLines.length > 0) {
    return property.detailLines;
  }

  return [
    {
      label: "Texto explicativo y que muestra",
      value: property.description,
    },
    {
      label: "En que se usa y para que sirve",
      value: property.note,
    },
  ];
}

function renderCssProperties() {
  const grid = document.getElementById("propiedades-grid");

  if (!grid) {
    return;
  }

  grid.innerHTML = getOrderedCssProperties()
    .map(
      (property) => {
        const propertyLevel = getCssLevel(property);
        const detailLinesHtml = getPropertyDetailLines(property)
          .map(
            (detailLine) => `
              <p class="detalle propiedad-detalle-linea">
                <span class="dato-label">${escapeHtml(detailLine.label)}:</span>
                ${escapeHtml(detailLine.value)}
              </p>
            `,
          )
          .join("");

        return `
        <article
          class="propiedad"
          data-search="${escapeHtml(property.aliases)}"
          data-type="${escapeHtml(property.type)}"
          data-level="${escapeHtml(propertyLevel)}"
        >
          <div class="propiedad-cabecera">
            <h3><code>${escapeHtml(property.name)}</code></h3>
            <div class="propiedad-etiquetas">
              <span class="propiedad-tipo">${escapeHtml(
                getCssTypeLabel(property.type),
              )}</span>
              <span class="propiedad-nivel ${escapeHtml(
                getCssLevelBadgeClass(propertyLevel),
              )}">${escapeHtml(getCssLevelLabel(propertyLevel))}</span>
            </div>
          </div>
          <pre><code>${escapeHtml(property.code)}</code></pre>
          ${detailLinesHtml}
        </article>
      `;
      },
    )
    .join("");
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9#<>/.\s:-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenMatches(searchIndex, words, token) {
  if (searchIndex.includes(token)) {
    return true;
  }

  if (token.length < 4) {
    return false;
  }

  return words.some(
    (word) => word.startsWith(token) || token.startsWith(word) || word.includes(token),
  );
}

function setupSearch() {
  const input = document.querySelector("[data-search-input]");
  const clearButton = document.querySelector("[data-search-clear]");
  const chipButtons = document.querySelectorAll("[data-search-chip]");
  const cssTypeButtons = document.querySelectorAll("[data-css-type-chip]");
  const cssLevelButtons = document.querySelectorAll("[data-css-level-chip]");
  const status = document.querySelector("[data-search-status]");
  let activeCssType = "";
  let activeCssLevel = "";

  if (!input || !clearButton || !status) {
    return;
  }

  const searchableSections = [
    "base-documento",
    "estructura",
    "texto",
    "listas",
    "multimedia",
    "tablas",
    "formularios",
    "extras",
    "propiedades-css",
  ]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const searchableCards = searchableSections.flatMap((section) =>
    Array.from(section.querySelectorAll(".referencia-card, .propiedad")),
  );

  function updateCssTypeButtons() {
    cssTypeButtons.forEach((button) => {
      const isActive = button.dataset.cssTypeChip === activeCssType;
      button.classList.toggle("activo", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function updateCssLevelButtons() {
    cssLevelButtons.forEach((button) => {
      const isActive = button.dataset.cssLevelChip === activeCssLevel;
      button.classList.toggle("activo", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function getCssFiltersSummary() {
    const parts = [];

    if (activeCssLevel) {
      parts.push(`nivel ${getCssLevelLabel(activeCssLevel)}`);
    }

    if (activeCssType) {
      parts.push(`categoria ${getCssTypeLabel(activeCssType)}`);
    }

    return parts.join(" + ");
  }

  searchableCards.forEach((card) => {
    const section = card.closest("section");
    const sectionId = section ? section.id : "";
    const sectionTitle = section ? section.querySelector("h2")?.textContent || "" : "";

    card.dataset.searchIndex = normalizeText(
      [
        card.textContent,
        card.dataset.search || "",
        sectionTitle,
        sectionAliases[sectionId] || "",
      ].join(" "),
    );
  });

  function updateSearch() {
    const query = normalizeText(input.value);
    const tokens = query.split(" ").filter(Boolean);
    let visibleCount = 0;
    let visibleCssCount = 0;
    const cssFiltersSummary = getCssFiltersSummary();

    searchableCards.forEach((card) => {
      const index = card.dataset.searchIndex || "";
      const words = index.split(" ").filter(Boolean);
      const matchesSearch =
        tokens.length === 0 || tokens.every((token) => tokenMatches(index, words, token));
      const matchesCssType =
        !card.classList.contains("propiedad") ||
        activeCssType === "" ||
        card.dataset.type === activeCssType;
      const matchesCssLevel =
        !card.classList.contains("propiedad") ||
        activeCssLevel === "" ||
        card.dataset.level === activeCssLevel;
      const matches = matchesSearch && matchesCssType && matchesCssLevel;

      card.hidden = !matches;

      if (matches) {
        visibleCount += 1;

        if (card.classList.contains("propiedad")) {
          visibleCssCount += 1;
        }
      }
    });

    searchableSections.forEach((section) => {
      const hasVisibleCards = Array.from(
        section.querySelectorAll(".referencia-card, .propiedad"),
      ).some((card) => !card.hidden);

      section.hidden = tokens.length > 0 && !hasVisibleCards;
    });

    if (tokens.length === 0) {
      if (cssFiltersSummary) {
        status.textContent = `Filtros CSS activos: ${cssFiltersSummary}. Mostrando ${visibleCssCount} estilo${
          visibleCssCount === 1 ? "" : "s"
        } relacionados.`;
      } else {
        status.textContent = `Mostrando ${searchableCards.length} fichas HTML y CSS.`;
      }
    } else if (visibleCount === 0) {
      status.textContent =
        "No hubo coincidencias exactas o parecidas. Prueba con otra palabra.";
    } else {
      if (cssFiltersSummary) {
        status.textContent = `Busqueda activa con ${cssFiltersSummary}: ${visibleCount} ficha${
          visibleCount === 1 ? "" : "s"
        } encontrada${visibleCount === 1 ? "" : "s"}.`;
      } else {
        status.textContent = `Busqueda activa: ${visibleCount} ficha${
          visibleCount === 1 ? "" : "s"
        } encontrada${visibleCount === 1 ? "" : "s"}.`;
      }
    }

    clearButton.hidden = tokens.length === 0;
  }

  input.addEventListener("input", updateSearch);
  input.addEventListener("search", updateSearch);

  clearButton.addEventListener("click", () => {
    input.value = "";
    input.focus();
    updateSearch();
  });

  chipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      input.value = button.dataset.searchChip || "";
      input.focus();
      updateSearch();
    });
  });

  cssTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedType = button.dataset.cssTypeChip || "";
      activeCssType = activeCssType === selectedType ? "" : selectedType;
      updateCssTypeButtons();
      updateSearch();
    });
  });

  cssLevelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLevel = button.dataset.cssLevelChip || "";
      activeCssLevel = activeCssLevel === selectedLevel ? "" : selectedLevel;
      updateCssLevelButtons();
      updateSearch();
    });
  });

  updateCssTypeButtons();
  updateCssLevelButtons();
  updateSearch();
}

renderCssTypeChips();
renderCssLevelChips();
renderCssProperties();
setupSearch();
