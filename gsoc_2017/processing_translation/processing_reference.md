# Referencia. Processing fue diseñado como una libreta flexible para bosquejar en software.

## Estructura

* () (paréntesis)

int a;
a = (4 + 3) * 2;       // Agrupar expresiones
if (a > 10) {          // Contener expresiones
  line(a, 0, a, 100);  // Contener una lista de parámetros
}

Agrupa y contiene expresiones y parámetros. Los paréntesis cumplen múltiples funciones relacionadas a funciones y estructuras. Son usados para contener una lista de parámetros pasada a funciones y para controlar estructuras y son usados para agrupar expresiones para controlar el orden de ejecución. Algunas funciones no poseen parámetros y en ese caso, el espacio entre paréntesis queda en blanco.

function: cualquier función
p1, ..., pN: lista de parámetros específicos a la función
structure: estructura de control como if, for, while
expressions: cualquier expresión o grupo de expresiones válidas

* , (coma)

// Coma usada para separar una lista de declaraciones de variables
int a=20, b=30, c=80;

// Coma usada para separar una lista de valores asignadas a un arreglo
int[] d = { 20, 60, 80 };

// coma usada para separar una lista de parámetros pasados a una función
line(a, b, c, b);
line(d[0], d[1], d[2], d[1]);

Separa parámetros en llamadas a funciones y elementos durante asignación

value1, ..., valueN: cualquier int, float, byte, boolean, color, char, String

* . (punto)


// Declara y construye dos objetos (h1 y y2) de la clase HLine
HLine h1 = new HLine(20, 1.0);
HLine h2 = new HLine(50, 5.0);

void setup() {
  size(200, 200);
}

void draw() {
  if (h2.speed > 1.0) {  // La sintaxis punto puede ser usada para obtener un valor
    h2.speed -= 0.01;    // o para definir un valor.
  }
  h1.update();  // Llamada a la función update() del objeto h1
  h2.update();  // Llamada a la función update() del objeto h2
}

class HLine {  // Definición de la clase
  float ypos, speed;  // Datos
  HLine (float y, float s) {  // Constructor del objeto
    ypos = y;
    speed = s;
  }
  void update() {  // Método update
    ypos += speed;
    if (ypos > width) {
      ypos = 0;
    }
    line(0, ypos, width, ypos);
  }
}

Brinda acceso a los métodos y datos de un objeto. Un objeto es una instancia de una clase y puede contener tanto métodos (funciones de objeto) como datos (variables y constantes de objeto), como se especifica en la definición de la clase. El operador punto dirige al programa a la información encapsulada dentro de un objeto.

object: el objeto a ser accedido
method(): un método encapsulado dentro del objeto
data: una variable o constante encapsulada dentro del objeto

* /* */ (comentario multilínea)


/*
   Dibuja dos líneas que dividen la ventana
   en cuatro cuadrantes. Primero dibuja una línea
   horizontal y luego una vertical
*/
...

Apuntes explicativos incluidos dentro del código. Los comentarios son usados para recordarte a ti mismo y para informar a otros sobre la función de tu programa. Los comentarios multílinea son usados para descripciones de texto largas sobre código o para comentar y deshabilitar porciones de código mientras buscas errores. Los comentarios son ignorados por el compilador.

comment: cualquier secuencia de caracteres

* /** */ (comentario de documentación)


/**
   Dibuja dos líneas que dividen la ventana
   en cuatro cuadrantes. Primero dibuja una línea
   horizontal y luego una vertical.
*/
line(0, 50, 100, 50);
line(50, 0, 50, 100);

Apuntes explicativos incluidos dentro del código y escritas en el archivo "index.html" creado cuando el código es exportado. Los comentarios de documentación son usados para compartir una descripción de tu bosquejo cuando el programa es exportado. Exporta el código haciendo click en el botón "Export" en la barra de herramientas.

comment: cualquier secuencia de caracteres

* // (comentario)

// Dibuja dos líneas que dividen la ventana
// en cuatro cuadrantes
line(0, 50, 100, 50);  // Dibuja la línea horizontal
line(50, 0, 50, 100);  // Dibuja la línea vertical

Apuntes explicativos incluidos dentro del código. Los comentarios son usados para recordarte a ti mismo y para informar a otros sobre los detalles de tu código. Los comentarios de una línea son realizados con dos caracteres de barra oblicua. Los comentarios son ignorados por el compilador.

comment: cualquier secuencia de caracteres

* ; (punto y coma)

int a;       // Sentencia de declaración
a = 30;      // Sentencia de asignación
println(i);  // Sentencia de función

Un término de sentencia que separara elementos del programa. Una sentencia es una instrucción completa al computador y el punto y coma es usado para separar instrucciones (esto es similar al punto "." en español escrito). Los punto y coma también son usados para separar los distintos elementos de una estructura for.

statement: una sentencia única a ejecutar

* = (asignación)


int a;
a = 30;  // Asigna el valor 30 a la variable 'a'
a = a + 40;  // Asigna el valor 70 a la variable 'a'

Asigna un valor a la variable. El signo "=" no significa "igual a", sino que es usado para almacenar datos en una variable. El operador "=" es formalmente llamdo el operador de asignación. Existen muchos tipos distintos de variables (int, float, string, etc.) y el operador de asingación solo puede asignar valores que son del mismo tipo que la variable a la que asigna. Por ejemplo, si variable es de tipo int, el valor también debe ser un int.

var: cualquier nombre válido de variable
value: cualquier valor del mismo tipo que la variable. Por ejemplo, la variable es de tipo "int", el valor también debe ser tipo "int"

* [] (arreglo)

int[] numbers = new int[3];
numbers[0] = 90;
numbers[1] = 150;
numbers[2] = 30;
int a = numbers[0] + numbers[1]; // Asigna el valor 240 a la variable 'a'
int b = numbers[1] + numbers[2]; // Asigna el valor 180 a la variable 'b'

El operador de acceso de arreglo es usado para especificar una ubicación dentro de un arreglo. Los datos en esta ubicación pueden ser definidos con la sintaxis arreglo[elemento] = valor y se puede leer con la sintaxis valor = arreglo[elemento] como se muestra en el ejemplo anterior.

datatype: cualquier tipo de datos primitivo o compuesto, incluyendo clases definidas por el usuario

array: cualquier nombre válido de variable

element: int: no debe exceder el largo del arreglo menos 1

* {} (llaves)

Definen el comienzo y el final de bloques de funciones y bloques de sentencias como las estructuras for e if. Las llaves también son usadas para definir valores iniciales en declaraciones de arreglos.

statements: cualquier secuencia de sentencias válidas

ele0, ..., eleN: lista de elementos separados por comas

* catch

BufferedReader reader;
String line;

void setup() {
  // Abre el archivo del ejemplo createWriter()
  reader = createReader("positions.txt");    
}

void draw() {
  try {
    line = reader.readLine();
  } catch (IOException e) {
    e.printStackTrace();
    line = null;
  }
  if (line == null) {
    // Detiene la lecture cuando hay un error o el archivo está vacío
    noLoop();  
  } else {
    String[] pieces = split(line, TAB);
    int x = int(pieces[0]);
    int y = int(pieces[1]);
    point(x, y);
  }
}

La palabra clave catch es usada con try para encargarse de las excepciones. La documentación de Sun sobre Java define una excepción como "un evento, que ocurre durante la ejecución del programa, que interrumpe el flujo normal de las instrucciones del programa". Esto puede ser, por ejemplo, un error cuando un archivo es leído.

tryStatements: si este código arroja una excepción, el código en "catch" es ejecutado

exception: la excepción de Java que fue arrojada

catchStatements: código que se encarga de la excepción

* class

// Declara y construye dos objetos (h1, h2) a partir de l clase HLine

...

Palabra clave usada para indicar la declaración de una clase. Una clase es una composición de campos (datos) y métodos (funciones que son parte de la clase) que puede ser instanciada en forma de objetos. La primera letra de un nombre de clase es usualmente mayúsucla para separarla de otros tipos de variables. Un tutorial relacionado sobre Programación orientada a objetos está disponible en el sitio de Oracle.

ClassName: cualquier nombre válido de variable

statements: cualquier sentencia válida

* draw()

float yPos = 0.0;

void setup() {  // setup() es ejecutado una vez
...

void draw() {  // draw() corre en bucle, hasta que es detenido
...

-----

...

//Aunque aquí está vacío, draw() es necesario
//para que el bosquejo pueda procesar eventos
//del usuario (presionar el ratón en este caso)
void draw() { }

...

Llamada justo después de setup(), la función draw() continuamente ejecuta las líneas de código contenidas dentro de su bloque hasta que el programa es detenido o es ejecutada noLoop(). draw() es llamada automáticamente y nunca debe ser llamada explícitamente. Todos los programas de Processing actualizan la pantalla al final de draw(), nunca antes.

Para evitar que el código dentro de draw() corra de forma continua, usa noLoop(), redraw() y loop(). Si se usa noLoop() para detener el código dentro de draw(), entonces redraw() causará que el código de draw() corra solo una vez, y loop() causará que el código dentro de draw() vuelva a ejecutarse continuamente.

El número de veces que draw() se ejecuta por segundo puede ser controlado con la función frameRate().

Es común ejecutar background() cerca del principio del bucle draw() para borrar los contenidos de la ventana, como se muestra en el primer ejemplo arriba. Como los pixeles dibujados en la ventana son acumulativos, al omitir background() se pueden lograr resultados no esperados.

Solo puede haber una función draw por bosquejo, y draw() debe existir si quieres que el código corra de forma continua, o para procesar enventos como mousePressed(). A veces, puedes hacer una llamada a un draw() vacío en tu código, como se muestra en el segundo ejemplo de arriba.

* exit()

Cierra/detiene/sale del programa. Los programas sin una función draw() se detienen automáticamente después de que la última línea ha sido ejecutada, pero los programas con draw() corren continuamente hasta que el programa es detenido manualmente o que exit() es ejecutada.

En vez de terminar inmediatamente, exit() causará que el bosquejo se cierre después de que draw() haya sido completado (o después de que setup() se haya ejecutado si es que es llamada durante la función setup()).

Para los programadores de Java, esta función no es la misma que System.exit(). Más aún, System.exit() no debería ser usada porque cerrar una aplicación durante la ejecución de draw() podría causar un error (particularmente con P3D).

* extends

Permite que una nueva clase herede los métodos y campos de datos (variables y constantes) de una clase existente. En código, define el nombre de la nueva clase, luego escribe la palabra clave extends y el nombre de la clase base. El concepto de herencia es una de los principios fundamentales de la programación orientada a objetos.

Observa que en Java, y por lo tanto en Processing, no puedes extender una clase más de una vez. En vez de eso, revisa implements.

* false

rect(30, 20, 50, 50);
boolean b = false;
if (b == false) {
  line(20, 10, 90, 80);  // Esta línea se dibuja
} else {
  line(20, 80, 90, 10);  // Esta línea no se dibuja
}

Palabra reservada que representa el valor lógico "falso". Solo a variables de tipo boolean se les pueden asignar el valor false.

* final

final float constant = 12.84753;
println(constant);  // Imprime "12.84753" en la consola
constant += 12.84;  // ¡ERROR! No es posible modificar un valor "final"

Palabra clave usada para definir un valor, clase o método que no puede ser modificado. Si la palabra clave final es usada para definir una variable, la variable no puede cambiar dentro del programa. Cuando es usada para definir una clase, una clase final no puede ser hecha una subclase. Cuando se usa para definir una función o método, un método final no puede ser anulado por subclases.

Esta palabra clave es una parte esencial de la programación en Java y usualmente no es usada en Processing. Consulta una referencia del lenguaje Java o un tutorial para más información.

* implements

Implementa una interfaz o grupo de interfaces. Las interfaces son usadas para establecer un protocolo entre clases; establecen la forma de una clase (nombres de método, tipos de retorno, etc.) pero no su implementación. Después de la implementación, una interfaz puede ser usada y extendida como cualquier otra clase.

Como Java no permite extender más de una clase a la vez, puedes crear interfaces en reemplazo de esto, para que métodos y campos específicos puedan ser encontrados en la clase que la implementa. Un ejemplo es un Thread; implementa la interfaz "Runnable", lo que significa que la clase tiene un metódo llamado "public void run()" dentro de ella.

* import

La palabra clave import es usada para cargar una biblioteca en un bosquejo de Processing. Una biblioteca es una o más clases que están agrupadas para extender las capacidades de Processing. El caracter * es frecuentemente usado al final de la línea import (ver el ejemplo de código arriba) para cargar todas las clases relacionadas de una vez, sin tener que referenciarlas de forma individual.

La sentencia import será creada al seleccionar una biblioteca con el ítem "Import Library..." en el menú Sketch.

libraryName: el nombre de la biblioteca a ser cargada (por ejemplo, "processing.pdf")

* loop()


void setup() {
  size(200, 200);
  noLoop();  // draw() no hará un bucle
}

float x = 0;

void draw() {
  background(204);
  x = x + .1;
  if (x > width) {
    x = 0;
  }
  line(x, 0, x, height);
}

void mousePressed() {
  loop();  // Mantener presoinado el ratón activa el bucle
}

void mouseReleased() {
  noLoop();  // Soltar el ratón hace que se detenga el bucle de draw()
}

Por defecto, Processing ejecuta el código dentro de draw() en un bucle continuo. Sin embargo, el bucle draw() puede ser detenido al llamar a noLoop(). En ese caso, el bucle draw() puede ser retomado con loop().

* new

Crea un objeto nuevo. La palabra clave new es típicamente usada de forma similar a las aplicaciones del ejemplo anterior. En este ejemplo, se crea un nuevo objeto "h1" del tipo "HLine". En la siguiente línea, se crea un nuevo arreglo de floats llamado "speeds".

* noLoop()

boolean someMode = false;

void setup() {
  noLoop();
}

void draw() {
  if (someMode) {
    // haz algo
  }
}

void mousePressed() {
  someMode = true;
  redraw();  // o haz un bucle
}

When noLoop() is used, it's not possible to manipulate or access the screen inside event handling functions such as mousePressed() or keyPressed(). Instead, use those functions to call redraw() or loop(), which will run draw(), which can update the screen properly. This means that when noLoop() has been called, no drawing can happen, and functions like saveFrame() or loadPixels() may not be used.

Hace que Processing deje de ejecutar de forma continua el código dentro de draw(). Si loop() es ejecutado, el código en draw() comienza nuevamente a correr de forma continua. Si se usa noLoop() dentro de setup(), deberá ser la última línea dentro del bloque.

Cuando se usa noLoop(), no es posible manipular o acceder la pantalla dentro de las funciones que se encargan de eventos como mousePressed() o keyPressed(). en vez de esto, usa estas funciones para llamar a redraw() o loop(), que a su vez ejecutarán draw(), lo que hace posible actualizar la pantalla de forma correcta. Esto significa que cuando noLoop() es ejecutado, no se puede dibujar, y funciones como saveFrame() o loadPixels() no pueden ser usadas.

Observa que si el bosquejo es redimensionado, redraw() será ejecutado para actualizar el bosquejo, incluso cuando se ha especificado noLoop(). De otra forma, el bosquejo entraría en un estado raro hasta que se ejecute loop().

* null

String content = "It is a beautiful day.";
String[] results;  // Declara un arreglo vacío de String

results = match(content, "orange");
// La instrucción match anterior no podrá encontrar
// la palabra "orange" en el String 'content', por lo que
// retornará el valor null a 'results'

if (results == null) {
  println('El valor de 'results' es null.");  // Esta línea se imprime en consola
} else {
  println("El valor de 'results' no es null!");  // Esta línea no se imprime en consola
}

* popStyle()

ellipse(0, 50, 33, 33);  // Círculo izquierdo

pushStyle();  // Empieza un nuevo estilo
strokeWeight(10);
fill(204, 153, 0);
ellipse(50, 50, 33, 33);  // Círculo central
popStyle();  // Restaura el estilo original

ellipse(100, 50, 33, 33);  // Círculo derecho

ellipse(0, 50, 33, 33);  // Círculo izquierdo

pushStyle();  // Empieza un nuevo estilo
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33);  // Círculo central izquierdo

pushStyle();  // Empieza un nuevo estilo
stroke(0, 102, 153);
ellipse(66, 50, 33, 33);  // Círculo central derecho
popStyle();  // Restaura el estilo anterior

popStyle();  // Restaura el estilo original

ellipse(100, 50, 33, 33);  // Círculo derecho

La función pushStyle() graba la configuración actual de estilo y popStyle() restaura la configuración anterior; estas funciones siempre son usadas en conjunto. Te permiten cambiar la configuración de estilo y luego volver a lo que tenías. Cuando se empieza un nuevo estilo con pushStyle(), empieza desde la información de estilo actual. Las funciones pushStyle() y popStyle() pueden ser incluidas para proveer más control (ver el segundo ejemplo arriba para una demostración).

* private

Esta palabra clave es usada para no permitir el acceso de otras clases a los campos y métodos dentro de una clase. La palabra clave private es usada antes de un campo o método que quieres hacer solo accesible dentro de la clase. En Processing, todos los campos y métodos son públicos a no ser que sean especificados con la palabra clave private.

Esta palabra clave es una parte esencial de la programación en Java y no es usualmente usada en Processing. Consulta una referencia del lenguaje Java o un tutorial para más información.

* public

Palabra clave usada para permitir el acceso de otras clases a los campos y métodos dentro de una clase. La palabra clave public es usada antes de un campo o método que quieres hacer accesible. En Processing, todos los campos y métodos son públicos a no ser que sean especificados con la palabra clave private.

Esta palabra clave es una parte esencial de la programación en Java y no es usualmente usada en Processing. Consulta una referencia del lenguaje Java o un tutorial para más información.

* pushStyle()

ellipse(0, 50, 33, 33);  // Círculo izquierdo

pushStyle();  // Empieza un nuevo estilo
strokeWeight(10);
fill(204, 153, 0);
ellipse(50, 50, 33, 33);  // Círculo central
popStyle();  // Restaura el estilo original

ellipse(100, 50, 33, 33);  // Círculo derecho

ellipse(0, 50, 33, 33);  // Círculo izquierdo

pushStyle();  // Empieza un nuevo estilo
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33);  // Círculo central izquierdo

pushStyle();  // Empieza un nuevo estilo
stroke(0, 102, 153);
ellipse(66, 50, 33, 33);  // Círculo central derecho
popStyle();  // Restaura el estilo anterior

popStyle();  // Restaura el estilo original

ellipse(100, 50, 33, 33);  // Círculo derecho

La función de pushStyle() graba la configuración de estilo actual y popStyle() restaura la configuración anterior. Observa que estas funciones son siempre usadas en conjunto. Te permiten cambiar la configuración de estilo y luego volver a lo que tenías. Cuando se crea un nuevo estilo con pushStyle(), empieza desde la información de estilo actual. Las funciones pushStyle() y popStyle() pueden ser incluidas para proveer más control (ver el segundo ejemplo arriba para una demostración).

La información de estilo controlada por las siguientes funciones son incluidas en el estilo: fill(), stroke(), tint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(), rectMode(), ellipseMode(), shapeMode(), colorMode(), textAlign(), textFont(), textMode(), textSize(), textLeading(), emissive(), specular(), shininess(), ambient().

* redraw()

Ejecuta una vez el código dentro de draw(). Esta función permite que el programa actualice la ventana mostrada solo cuando es necesario, por ejemplo cuando ocurre un evento registrado por mousePressed() o keyPressed().

Al estructurar un programa, solo hace sentido llamar a redraw() dentro de eventos como mousePressed(). Esto ocurre porque redraw() no corre draw() inmediatamente (solo indica que se necesita una actualización).

La función redraw() no funciona correctamente cuando es llamada dentro de draw(). Para activar/desactivar animaciones, usa loop() y noLoop().

* return

int val = 30;

void draw() {
  int t = timestwo(val);
  println(t);
}

// El primer 'int' en la declaración de la función
// especifica el tipo de dato a ser retornado
int timestwo(int dVal) {
  dVal = dVal * 2;
  return dVal;  // Returna un entero 60, en este caso
}

int[] vals = {10, 20, 30};

void draw() {
  int[] t = timestwo(vals);
  println(t);
  noLoop();
}

int[] timestwo(int[] dVals) {
  for (int i = 0; i < dVals.length; i++) {
    dVals[i] = dVals[i] * 2;
  }
  return dVals;  // Returna un arreglo de 3 ints: 20, 40, 60
}

void draw() {
  background(204);
  line(0, 0, width, height);
  if (mousePressed) {
    return;  // Sale de draw(), haciendo que la siguiente línea no se ejecute
  }
  line(0, height, width, 0);  // Se ejecuta solo si el ratón no está presionado
}

Palabra clave usada para indicar el valor de retorno de una función, El valor siendo retornado debe ser del mismo tipo que el definido en la declaración de la función. Las funciones declaradas con void no pueden retornar valores y no deben incluir un valor de retorno.

La palabra clave return también puede ser usada para salir de una función, no permitiéndole así al programa ejecutar las sentencias posteriores. (Ver el tercer ejemplo arriba).

type: boolean, byte, char, int, float, String, boolean[], byte[], char[], int[], float[] o String[]

function: la función que está siendo definida

statements: cualquier sentencia o grupo de sentencias válidas

value: debe ser del mismo tipo que el parámetro "type"

* setup()

La función setup() corre una vez, cuando el programa empieza. Es usada para definir propiedades iniciales del ambiente como el tamaño de la pantalla y para cargar medios como imagénes y tipografías cuando el programa empieza. Solo puede haber una sola función setup() por cada programa y no debiera ser llamada después de su ejecución inicial.

Si el bosquejo tiene una dimensión distinta que la por defecto, la función size() o la función fullScreen() debe ser la primera línea en setup().

Nota: las variables declaradas dentro de setup() no son accesibles dentro de otras funciones, incluyendo draw().

* static

void setup() {
  MiniClass mc1 = new MiniClass();
  MiniClass mc2 = new MiniClass();
  println( mc1.y );   // Imprime "10" en la consola
  MiniClass.y += 10;  // La variable 'y' es compartida por 'mc1' y 'mc2'
  println( mc1.y );   // Imprime "20" en la consola
  println( mc2.y );   // Imprime "20" en la consola
}

static class MiniClass {
  static int y = 10;  // Class variable
}

----

void setup() {
  println(MiniClass.add(3, 4));  // Imprime "7" en la consola
}

static class MiniClass {
  static int add(int x, int y) {
    return(x + y);
  }
}

Palabra clave usada para definir una varible como una "variable de clase" y un método como un "método de clase". Cuando una variable es declarada con la palabra clave static, todas las instancias de esta clase comparten la misma variable. Cuando una clase es definida como la palabra clave static, todos sus métods pueden ser usados sin crear una instancia de la clase. El ejemplo anterior demuestra cada uno de estos usos.

Esta palabra clave es una parte esencial de la programación en Java y usualmente no es usada en Processing. Consulta una referencia del lenguaje Java o un tutorial para más información.

* super

// Este ejemplo es un fragmento de código;
// no compilará sin código adicional.

// Crea la subclase DragDrop a partir de
// la clase Button. Button se convierte en
// la superclase de DragDrop.
class DragDrop extends Button {
  int xoff, yoff;
  DragDrop(int x, int y) {
    // Ejecuta el constructor de la superclase
    super(x, y);
  }
  void press(int mx, int my) {
    // Ejecuta el método press() de la superclase
    super.press();  
    xoff = mx;
    yoff = my;  
  }
}

Palabra clave usada para referenciar la superclase de una subclase.

* this

float ypos = 50;

void setup() {
  size(100, 100);
  noLoop();
}

void draw() {
  line(0, 0, 100, ypos);
  // "this" hace referencia al bosquejo de Processing,
  // y no es necesario en este caso
  this.ypos = 100;
  line(0, 0, 100, ypos);
}

----

import processing.video.*;
Movie myMovie;

void setup() {
  size(200, 200);
  background(0);
  // "this" hace referencia al bosquejo de Processing
  myMovie = new Movie(this, "totoro.mov");
  myMovie.loop();
}

void draw() {
  if (myMovie.available()) {
    myMovie.read();
  }
  image(myMovie, 0, 0);
}

Se refiere al objeto actual (como, "este objeto"), lo que cambiará dependiendo del contexto en el que es referenciado. En Processing, su uso más común es usarlo para pasar una referencia del objeto actual a una de las bibliotecas.

La palabra clave this también puede ser usada para referenciar un método propio del objeto desde dentro de sí mismo, pero ese uso típicamente no es necesario. Por ejemplo, si estás llamando al método filter() de un objeto PImage llamado tree desde otro objeto, escribirías tree.filter(). Para llamar a este método dentro del mismo objeto PImage, uno podría simplemente escribir filter() o, más explícitamente, this.filter(). El nivel adicional de especificidad en this.filteR() no es necesario, ya que siempre está implícito.

* thread()

String time = "";

void setup() {
  size(100, 100);
}

void draw() {
  background(0);
  //  S e solicitan nuevos datos cada 30 cuadros
  if (frameCount % 30 == 0) {
    thread("requestData");
  }
  text(time, 10, 50);
}

// Esto ocurre como una thread distinta y puede tomar tanto tiempo como quiera
void requestData() {
  JSONObject json = loadJSONObject("http://time.jsontest.com/");
  time = json.getString("time");
}

Los bosquejos de Processing siguen una secuencia específica de pasos: primero setup(), seguido de draw() una y otra vez en bucle. Un thread es también una serie de pasos con un comienzo, desarrollo y final. Un bosquejo de Processing es un thread, a menudo referido como el thread "Animation". Otras secuencias de thread, sin embargo, pueden correr de forma independiente del bucle principal de animación. DE hecho, puedes correr cualquier número de threads al mismo tiempo, y todos ocurrirán concurrentemente.

No puedes dibujar en la pantalla a partir de una función llamada por thread(). Como corre de forma independiente, el código no estará sincronizado con el thread de animación, causando resultados extraños o por lo menos inconsistentes. Usa thread() para cargar archivos o hacer otras tareas que toman tiempo. Cuando la tarea termina, define una variable que indica que la tarea fue completada, y verifica su valor dentro de tu método draw().

Processing usa threads a menudo, como en el caso de funciones de biblioteca como captureEvent() y movieEvent(). Estas funciones son gatilladas por un thread distinto corriendo detras de bambalinas, y avisan a Processing cuando tienen algo que decir. Esto es útil cuando necesitas realizar una tarea que toma mucho tiempo y que retardaría la tasa cuadros de la animación principal, como capturar datos desde la red. Si una thread distinta se atasca o tiene un error, el programa entero no se detendrá, ya que el error solo detiene ese thread individual.

Escribir tu propio thread puede ser una tarea compleja que involucra exgtender la clase Thread de Java. Sin embargo, el método thread() es una forma rápida de implmeentar un thread simple en Processing. Pasándole un String que coincide con el nombre de una función declarada en otro lugar del bosquejo, Processing ejecutará esa función en un thread separado.

name: String: nombre de la función a ser ejecutada en un thread distinto

* true

rect(30, 20, 50, 50);
boolean b = true;
if (b == true) {
  line(20, 10, 90, 80);  // Esta línea es dibujada
} else {
  line(20, 80, 90, 10);  // Esta línea no es dibujada
}

Palabra clave que representa el valor lógico "verdadero". Solo a variables de tipo boolean se les puede asignar el valor true.

* try

BufferedReader reader;
String line;

void setup() {
  // Abre el archivo del ejemplo createWriter()
  reader = createReader("positions.txt");    
}

void draw() {
  try {
    line = reader.readLine();
  } catch (IOException e) {
    e.printStackTrace();
    line = null;
  }
  if (line == null) {
    // DEtiene la lectura porque hay un error o el archivo está vacío
    noLoop();  
  } else {
    String[] pieces = split(line, TAB);
    int x = int(pieces[0]);
    int y = int(pieces[1]);
    point(x, y);
  }
}

La palabra clave try es usada en conjunto con catch para manejar excepciones. La documentación de Sun sobre Java define una excepción como "un evento, que ocurre durante la ejecución de un programa, que interumpe el flujo normal de las instrucciones del programa". Esto puede ser, por ejemplo, un error al leer un archivo.

tryStatements: si este código arroja una excepción, se ejeucta el código en "catch"

exception: la excepción arrojada de Java

catchStatements: código que maneja la excepción

* void

void setup() {  // setup() no retorna un valor
  size(200, 200);
}

void draw() {  // draw() no retorna un valor
  line(10, 100, 190, 100);
  drawCircle();
}

void drawCircle() {  // Esta función tampoco retorna un valor
  ellipse(30, 30, 50, 50);
}

Palabra clave usada para indicar que una función no retorna un valor. Cada función debe o retornar un valor de un tipo de datos específico o usar la palabra clave void para especificar que no tiene retorno.

function: cualquier función siendo definida o implementada

statements: cualquier sentencia o grupo de sentencias válidas

## Ambiente

* cursor()

// Mueve el ratón a la izquierda y derecha a través de la imagen
// para ver cómo el cursos cambia de una cruz a una mano

Define el cursor como un símbolo o una imagen predeterminada, o la hace visible si ya está escondida. Si estás tratando de definir una imagen como el cursor, el tamaño recomendado es 16x16 o 32x32 pixeles. No es posible cargar una imagen como el cursos si estás exportando tu programa para la Web, y no todos los MODES funcionan en todos los navegadores. Los valores de los parámetros x e y deben ser menores que las dimensiones de la imagen.

Definir o esconder el cursor generalmente no funciona con el modo "Present" (cuando se corre en pantalla completa).

En los renderers P2D y P3D, se usa un conjunto genérico de cursores  porque el renderer OpenGL no tiene acceso a las imágenes por defecto de cursor para cada plataforma (Issue 3791).

kind: int: ARROS, CROSS, HAND, MOVE, TEXT o WAIT

img: PImage: cualquier variable de tipo PImage

x: int: el lugar activo horizontal del cursor

y: int: el lugar activo vertical del cursor

* delay()

import processing.serial.*;

Serial myPort;  // El puerto serial

...

La función delay detiene la ejecución durante un tiempo específico. Los tiempos de retraso son especificados en milésimas de segundo. Por ejemplo, ejecutar delay(3000) detendrá el programa por tres segundos y delay(500) detendrá el programa por medio segundo.

La pantalla solo se actualiza cuando llega al final de draw(), por lo que delay() no puede ser usado para retardar el dibujo. Por ejemplo, no puedes usar delay() para controlar la temporización de una animación.

La función delay() sollo deberá ser usada para pausar programas (por ejemplo, un programa que necesita pausar unos pocos segundos antes de intentar hacer una descarga, o un bosquejo que necesita esperar unos pocos milisegundos antes de leer desde el puerto serial).

napTime: int: milisegundos a pausar antes de seguir corriendo draw()

* displayDensity()

Esta función retorna el número "2" si la pantalla es de alta densidad (llamada Retina en OS X o alto-dpi en Windows y Linux) y un "1" si no lo es. Esta información es útil en un programa para adaptar la ejecución al doble de la densidad de pixeles en una pantalla que lo admita.

display: int: el número de pantalla a examinar

* focused

if (focused) {  // o "if (focused == true)"
...

Confirma si un programa de Processing está "enfocado", lo que equivale a estar activo y aceptando entrada de ratón o teclado. Esta variable es "true" si está "enfocado" y "false" si no.


* frameCount

	The system variable frameCount contains the number of frames that have been displayed since the program started. Inside setup() the value is 0, after the first iteration of draw it is 1, etc.

La variable de sistema frameCount contiene el número de cuadros que han sido mostrados desde que el programa fue iniciado. Dentro de setup() este valor es 0, después de la primera iteración de draw es 1, etc.

* frameRate()

Especifica el número de cuadros a ser mostrados cada segundo. Por ejemplo, la llamada a la función frameRate(30) tratará de refrescar 30 veces por segundo. Si el procesador no es lo suficientemente rápido para mantener la tasa especificada, la tasa de cuadros no será lograda. Se recomienda definir la tasa de cuadros dentro de setup(). La tasa por defecto es de 60 cuadros por segundo.

fps:	float: número deseado de cuadros por segundo

* frameRate

La variable de sistema frameRate contiene la tasa de cuadros aproximada de un bosquejo en ejecución. El valor inicial es 10 fps y es actualizado con cada cuadro. El valor es promediado sobre varios cuadros, y entonces solo será preciso después que la función draw haya sido ejecutada 5-10 veces.

* fullScreen()

// Corre el código a pantalla completa en la pantalla
// seleccionada en la ventana de Preferencias.

...

// Si hay más de una pantalla conectada al computador, ejecuta
// el código a dimensión completa en la pantalla especificada por el
// parámetro de fullScreen()

...

// Ejecuta en pantalla completa usando el renderer P2D en la pantalla 2

...

// Si hay más de una pantalla conectada al computador, ejecuta
// el código a dimensión completa abarcando todas las pantallas conectadas

Esta función es nueva en Processing 3.0. Abre un bosquejo usando el tamaño completo de la ventana del computador. Esta función debe ser la primera línea en setup(). Las funciones size() y fullScreen() no pueden ser usadas en el mismo programa, tienes que elegir una.

Cuando se usa fullScreen() sin un parámetro, dibuja el bosquejo en la pantalla actualmente seleccionada dentro de la ventana Preferences. Cuando se usa con un único parámetro, este número define la pantalla donde se muestra el programa (por ejemplo 1, 2, 3...). Cuando se usan dos paráemtros, el primero define el renderer a usarse (como P2D) y el segundo define la pantalla. El parámetro SPAN puede ser usado en vez de un número de pantallla para dibujar el bosquejo com una ventana de pantalla completa a lo largo de todos las pantallas conectadas si es que hay más de una.

Antes de Processing 3.0, un programa en pantalla completa se definía con size(displayWidth, displayHeight).

renderer: String: el renderer a ser usado, por ejemplo,P2D, P3D, JAVA2D (por defecto)

display: int: la pantalla donde se ejecutará el bosquejo (1, 2, 3, etc. o en múltiples pantallas usando SPAN)

* height

Variable de sistema que almacena la altura de la ventana mostrada. Este valor es definido por el segundo parámetro de la función size(). Por ejemplo, la llamada a la función size(320, 240) define el valor de la variable height como 240. El valor de height por defecto es 100 si no se usa size() en un programa.

* noCursor()

// Presiona el ratón para esconder el cursor
...

Esconde el cursor. No funcionará cuando se corre el programa en un navegador web o en pantalla completa usando el modo Present.

* noSmooth()

Dibuja toda la geometría y letras con bordes ásperos (con aliasing) y las imágenes también cuando los pixeles son ampliados en vez de interpolados. Nota que smooth() está activada por defecto, así que es necesario llamar a noSmotth() para desactivar el suavizado de geometría, letras e imágenes. Desde el lanzamiento de Processing 3.0, la función noSmooth() solo puede ser llamada una vez por cada bosquejo, ya sea al principio de un bosquejo sin setup(), o después de la función size() cuando se usa en un bosquejo con setup(). Revisa los ejemplos anteriores para ver ambos escenarios.

* pixelDensity()

Esta función es nueva en Processing 3.0. Hace posible que Processing haga render usando todos los pixeles en pantallas de alta resolución como Apple Retina o Windows High-DPI. Esta función solo puede ser ejecutada una vez dentro del programa y debe ser usada justo después de size() en un programa sin setup() y usada dentro de setup() cuando un programa tiene uno. La función pixelDensity() debe ser usada solo con números (en casi todos los casos este número será 2) o en combinación con displayDensity como en el tercer ejemplo anterior. Para usar variables como argumentos en la función pixelDensity, escribe la función pixelDensity() dentro la función settings(). Hay más información sobre esto en la página de referencia de settings().

density: int: 1 o 2

* pixelHeight

Cuando se usa pixelDensity(2) para hacer uso de una pantalla de alta resolución (llamada Retina en OS X o alto-dpi en Windows y Linux), el ancho y la altura de un bosquejo no cambian, pero el número de pixeles es duplicado. Como resultado, todas las operaciones que usan pixeles (como loadPixels(), get(), set(), etc.) ocurren en este espacio doble. Por conveniencia, las variables pixelWidth y pixelHeight almacenan el ancho y la altura reales del bosquejo, medidos en pixeles. Esto es útil para cualquier bosquejo que usa el arreglo pixels[], por ejemplo, porque el número de elementos en el arreglo será pixelWidth*pixelHeight, no width*height.

* pixelWidth

Cuando se usa pixelDensity(2) para hacer uso de una pantalla de alta resolución (llamada Retina en OS X o alto-dpi en Windows y Linux), el ancho y la altura de un bosquejo no cambian, pero el número de pixeles es duplicado. Como resultado, todas las operaciones que usan pixeles (como loadPixels(), get(), set(), etc.) ocurren en este espacio doble. Por conveniencia, las variables pixelWidth y pixelHeight almacenan el ancho y la altura reales del bosquejo, medidos en pixeles. Esto es útil para cualquier bosquejo que usa el arreglo pixels[], por ejemplo, porque el número de elementos en el arreglo será pixelWidth*pixelHeight, no width*height.

* settings()

// Ejecuta el código a pantalla completa usando el renderer por defecto

...

// Ejecuta el código a pantalla completa usando el renderer P2D
// en la pantalla 2 de una configuración de monitor múltiple

...

// Ejecuta el código a pantalla completa usando el renderer P2D
// a través de todas las pantallas de una configuración de monitor múltiple

...

La función settings() es nueva en Processing 3.0. No es necesaria en la mayoría de los bosquejos. Solo es útil cuando es absolutamente necesario definir los parámetros de size() con una variable. De forma alternativa, la función settings() es necesaria cuando se usa código de Processing fuera del ambiente de desarrollo Processing (Processing PDE). Por ejemplo, cuando se usa el editor de código Eclipse, es necesario usar settings() para definir los valores de size() y smooth() en un bosquejo.

El método settings() se ejecuta antes de que el bosquejo ha sido configurado, así que otras funciones de Processing no pueden ser ejecutadas en este punto. Por ejemplo, no uses loadImage dentro de settings(). El método settings() corre "pasivamente" para definir unas pocas variables, en contraste con el comando setup() que ejecuta comandos en la API de Processing.

* size()

...
size(150, 200, P3D);  // Especifica el renderer P3D
background(153);

// Con P3D, podemos usar valores z (profundidad)...
line(0, 0, 0, width, height, -100);
line(width, 0, 0, width, height, -100);
line(0, height, 0, width, height, -100);

//...y funciones específicas a 3D, como box()
...

Define las dimensiones en pixeles del ancho y la altura de la ventana mostrada. En un programa que tiene función setup(), la función size() debe ser la primera línea de código dentro de setup().

Las variables internas width y height son definidas por los parámetros pasados a esta función. Por ejemplo, ejecutar size(640, 480) asignará el valor 640 a la variable width y el valor 480 a la variable height. Si no se usa size(), la ventana tendrá un tamaño por defecto de 100 x 100 pixeles.

La función size() solo puede usada una vez dentro un bosquejo, y no puede ser usada para redimensionar.

En Processing 3, para ejecutar un bosquejo en las dimensiones completas de una pantalla, usa la función fullScreen(), en vez de la forma antigua usando size(displayWidth, displayHeight).

El ancho y la altura máximos están limitados por tu sistema operativo, y es usualmente el ancho y la altura de tu pantalla actual. En algunas máquinas podría ser simplemente el número de pixeles en tu pantalla actual, lo que significa que una pantalla de 800 x 600 podría soportar size(1600, 300), ya que es el mismo número de pixeles. Esto varía ampliamente, así que tendrás que probar diferentes modos de render y tamaños hasta que encuentres lo que buscas. Si necesitas algo más grande, usa createGraphics para crear una superficie de dibujo no visible.

El ancho y la altura mínimos es de alrededor de 100 pixeles en cada dirección. Esto es lo más pequeño soportado en Windows, macOS y Linux. Nosotros insistimos en este tamaño mínimo para que los bosquejos se ejecuten de forma idéntica en distintas máquinas. El parámetro renderer selecciona cuál motor de rendering se usará. Por ejemplo, si estarás dibujando figuras en 3D, usa P3D. Además del renderer por defecto, otros renderers incluyen:

P2D (Processing 2D): renderer de gráficas 2D que hace uso de hardware gráfico compatible con OpenGL.

P3D (Processing 3D): renderer de gráficas 3D que hace uso de hardware gráfico compatible con OpenGL.

FX2D (JavaFX 2D): un renderer 2D que usa JavaFX, que puede ser más rápido para algunas aplicaciones, pero que tiene algunas consideraciones de compatibilidad.

PDF: el renderer PDF rdibuja gráficas 2D directamente en un archivo Acrobat PDF. Esto produce excelentes resultados cuando necesitas figuras vectoriales para salida o impresión de alta resolución. Primero debes hacer Import Library → PDF para poder usar la biblioteca. Para más información revisa la referencia de la biblioteca PDF.

En Processing 3.0, para usar variables dentro de la función size(), escribe la función size() dentro la función settings() (en vez de dentro de setup()). Para más información sobre esto, revisa la página de referencia de settings().

width: int: ancho en pixeles de la ventana mostrada

height: int: altura en pixeles de la ventana mostrada

* smooth()

Dibuja toda la geometría y letras con bordes suaves (con anti-aliasing). Este comportamiento es el por defecto, por lo que smooth() solo debe ser usado cuando un programa necesita definir el suavizado de una forma distinta. El parámetro level aumenta el nivel de suavizado. Este es el nivel de sobre muestreo aplicado al buffer de gráficas.

Con los renderers P2D y P3D, smooth(2) es el valor por defecto, lo que recibe el nombre de "anti-aliasing 2x". El código smooth(4) es usado para anti-aliasing 3x y smooth(8) es especificado para anti-aliasing 8x. El máximo nivel de anti-aliasing es determinado por el hardware de la máquina que está ejecutando el software, por lo que puede ser que smooth(4) y smooth(8) no funcionen en todos los computadores.

El renderer por defecto usa smooth(3) por defecto. Esto es suavizado bicúbio. La otra opción del renderer por defecto es smooth(2), que es suavizado bilineal.

En Processing 3.0, smooth() es distinto a como era antes. Era común usar smooth() y noSmooth() para activar y desactivar anti-aliasing dentro de un bosquejo. Ahora, como consecuencia de los cambios en el software, smooth() solo puede ser definido una vez dentro del bosquejo. Puede ser usado al comienzo de un bosquejo sin setup(), o después de la función size cuando se usa en un bosquejo con setup(). La función noSmooth() también sigue las mismas reglas.

level: int: 2, 3, 4, u 8 dependiendo del renderer

* width

Variable de sistema que almacena el ancho de la ventana mostrada. Este valor es definido por el primer parámetro de la función size(). Por ejemplo, la llamada a la función size(320, 240) define el valor de la variable de width como 320. El valor de width por defecto es 100 si no se usa size() en un programa.

## Datos

### Primitivas

* boolean

Tipo de datos para los valores Boolean true y false. Es común usar valores boolean en sentencias de control para determinar el flujo de un programa. La primera vez que se escribe una variable, debe ser declarada con una sentencia expresando su tipo de dato.

var:  nombre de variable que hace referencia al valor

booleanvalue: true o false

* byte

// Declarar variable 'a' del tipo byte
byte a;

// Asignarle el valor 23 a 'a'
a = 23;

// Declarar variable 'b' y asignarle el valor -128
byte b = -128;

// Declarar variable 'c' y asignarle la suma de 'a' y 'b'.
// Por defecto, cuando se suman dos bytes, son convertidos
// a un entero. Para mantener la respuesta en el tipo byte,
// usa la función de conversión byte() para convertir en byte
byte c = byte(a + b);

Tipo de datos byte, 8 bits de información almacenando valores entre 127 y -128. Los bytes son un tipo de datos conveniente para enviar información desde y hacia el puerto serial y para representar letras en un formato más simple que el tipo de datos chr. La primera vez que se escribe una variable, debe ser declarada con una instrucción que exprese su tipo de datos. Los siguientes usos de esta variable no deben hacer referencia al tipo de datos porque Processing pensaría que la variable está siendo declarada de nuevo.

var: nombre de variable haciendo referencia a value

value: un número entre 127 y -128

* char

char m;      // Declarar variable 'm' de tipo char
m = 'A';     // Asignarle a 'm' el valor "A"
int n = '&'; // Declarar variable 'n' y asignarle el valor "&"

Tipo de datos para caraceteres, símbolos tipograficos como A, d y $. Un char almacena letras y símbolos en el formato Unicode, un sistema de codificación desarrollado para soportar una gran variedad de lenguajes del planeta. Cada char tiene una longitud de 2 bytes (16 bits) y se distingue por estar rodeado dos comillas únicas. Los escapes de caracter también pueden ser almacenados como un char. Por ejemplo, la representación de la tecla "suprimir" o "delete" es 127. La primera vez que se escribe una variable, debe ser declarada con una instrucción que exprese su tipo de datos. Los siguientes usos de esta variable no deben hacer referencia al tipo de datos porque Processing pensaría que la variable está siendo declarada de nuevo.

var: nombre de variable haciendo referencia a value

value: cualquier caracter

* color

Tipo de datos para almacenar valores de color. Los colores pueden ser asignados con get() y color() o pueden ser especificados directamente usando notación hexadecimal como #FFCC00 o 0xFFFFCCOO.

El uso de print() o println() con un color producirá resultados extraños (usualmente números negativos) por la forma en que las variables color son almacenadas en memoria. Una mejor técnica es usar la función hex() para formatear los datos de color, o usar las funciones red(), green() y blue() para obtener los valores individuales e imprimirlos. Las funciones hue(), saturation() y brightness() funcionan de forma similar. Para extraer los valores de rojo, verde y azul más rápidamente (por ejemplo cuando analizas un cuadro de un video), usa bit shifting.

Los valores también pueden ser creados usando notación web de color. Por ejemplo: color c = #006699

La notación web de color solo funciona para colores opacos. Para definir un color con un valor alpha, puedes color color() o notación hexadecimal. Para notación hex, antepone un 0x a los valores, por ejemplo color c = 0xCC006699. En este ejemplo, CC (el valor hexadecimal 204) es el valor alpha, y el resto es idéntico al color web. Observa que en la notación hexadecimal, el valor alpha ocupa el primer lugar. (El valor alfa aparece último cuando se usa en color(), fill() y stroke()). A continuación hay una forma equivalente de escribir el ejemplo anterior, pero usando color() y especificando el valor de alpha como su segundo parámetro: color c = color(#006699, 191)

Desde un punto de vista técnico, los colores son 32 bits de información ordenados como AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB, donde las A's contienen el valor alpha, las R's el valor rojo, las G's el verde y las B's el azul. Cada componente tiene 8 bits (un número entre 0 y 255). Estos valores pueden ser manipulados con bit shifting.

* double

double a;            // Declarar variable 'a' de tipo double
a = 1.5387;          // Asignarle a 'a' el valor 1.5387
double b = -2.984;   // Declarar variable 'b' y asignarle el valor -2.984
double c = a + b;    // Declarar variable 'c' y asignarle la suma entre 'a' y 'b'
float f = (float)c;  // Convertir el valor de 'c' de double a float

Tipo de datos para números de punto flotante más grandes que los que pueden ser almacenados por un float. Un float es un valor de 32-bits que puede tomar valores entre 3.40282347E+38 y -3.40282347E+38. Un double puede ser usado de forma similar a un float, pero con una mayor magnitud, ya que es un número de 64-bits. Las funciones de Processing no usan este tipo de datos, por lo que a pesar de que funcionan dentro del lenguaje, usualmente tendrás que convertirlos a un float usando la sintaxis (float) antes de pasarlos a una función.

var: nombre de variable haciendo referencia al double

value: cualquier valor de punto flotante

* float

float a;           // Declarar variable 'a' de tipo float
a = 1.5387;        // Asignar a 'a' el valor 1.5387
float b = -2.984;  // Declarar variable 'b' y asignarle el valor -2.984
float c = a + b;   // Declarar variable 'c' y asignarle la suma entre 'a' y 'b'

---

float f1 = 0.0;
for (int i = 0 ; i < 100000; i++) {  
  f1 = f1 + 0.0001;  // ¡Mala idea! Revisa más abajo.
}
println(f1);

float f2 = 0.0;
for (int i = 0; i < 100000; i++) {
  // La variable 'f2' funcionará mejor aquí, afectada menos por redondeo
  f2 = i / 1000.0;  // Cuenta en milésimas
}
println(f2);

Tipo de datos para números de punto flotante, esto es, números que poseen un punto decimal.

Los floats no son precisos, por lo que la suma de valores pequeños (como 0.0001) podría no incrementar de forma precisa debido a errores de redondeo. Si quieres incrementar un valor en intervalos pequeños, usa un entero y divídelo por un valor float antes de usarlo. (Revisa el segundo ejemplo arriba).

Lpos números de punto flotante pueden valer entre 3.40282347E+38 y -3.40282347E+38. Son almacenados en 32 bits (4 bytes) de información. El tipo de datos float es heredado desde Java; puedes leer más sobre los detalles técnicos aquí y aquí.

Processing soporta también el tipo de datos double de Java. Sin embargo, ninguna de las funciones de Processing usa valores double, los que usan más memoria y son típicamente una exageración para la mayor parte de los trabajos creados en Processing. No planeamos añadir soporte para valores double, ya que hacerlo requeriría aumentar de forma significativa el número de funciones API.

var: nombre de variable haciendo referencia al float

value: cualquier valor de punto flotante

* int

int a;          // Declarar variable 'a' de tipo int
a = 23;         // Asignarle a 'a' el valor 23
int b = -256;   // Declarar variable 'b' y asignarle el valor -256
int c = a + b;  // Declarar variable 'c' y asignarle la suma entre 'a' y 'b'

Tipo de datos para enteros, números sin punto decimal. Los enteros pueden ir entre 2,147,483,647 and as low as -2,147,483,648. Son almacenados como 32 bits de información. La primera vez que se escribe una variable, debe ser declarada con una instrucción que exprese su tipo de datos. Los siguientes usos de esta variable no deben hacer referencia al tipo de datos porque Processing pensaría que la variable está siendo declarada de nuevo.

var: nombre de variable haciendo referencia al valor

value: cualquier valor entero

* long

long a;           // Declarar variable 'a' de tipo long y asignarle un valor grande:
//a = 2147483648; // Error: el literal de tipo int está fuera de rango
a = 2147483648L;  // Solución: agrega una "L" al número para marcarlo como un long

long b = -256;    // Declarar variable 'b' y asignarle el valor -256
long c = a + b;   // Declarar variable 'c' y asignarle la suma entre 'a' y 'b'
int i = (int)c;   // Convertir el valor de 'c' de un long en un int

Tipo de datos para enteros grandes. Mientras los enteros pueden tener valores entre 2,147,483,647 y -2,147,483,648 (almacenamiento de 32 bits), un entero long puede ir entre -9,223,372,036,854,775,808 y 9,223,372,036,854,775,807 (almacenamiento de 64 bits). Usa este tipo de datos cuando necesites un número que tiene una magnitud mayor que la almacenable en un entero. Cuando asignas valores literales que son mayores que esta magnitud, es necesario agregar "L" al número, como se muestra en el ejemplo arriba. Las funciones de Processing no usan este tipo de datos, y aunque sí funcionan en el lenguaje, usualmente tendrás que convertirlo a un int usando la sintaxis (int) antes de pasarlo a una función

var: nombre de variable haciendo referencia al valor

value: cualquier valor entero

### Composición

* Array

int[] numbers = new int[3];
numbers[0] = 90;  // Asignar un valor al primer elemento del arreglo
numbers[1] = 150; // Asignar un valor al segundo elemento del arreglo
numbers[2] = 30;  // Asignar un valor al tercer elemento del arreglo
int a = numbers[0] + numbers[1]; // Asigna a la variable 'a' el valor 240
int b = numbers[1] + numbers[2]; // Asigna a la variable 'b' el valor 180

---

int[] numbers = { 90, 150, 30 };  // Sintaxis alternativa
int a = numbers[0] + numbers[1];  // Asigna a la variable 'a' el valor 240
int b = numbers[1] + numbers[2];  // Asigna a la variable 'b' el valor 180

---

int degrees = 360;
float[] cos_vals = new float[degrees];
// Usa un bucle for() para iterar rápidamente
// a través de todos los valores en un arreglo.
for (int i=0; i < degrees; i++) {         
  cos_vals[i] = cos(TWO_PI/degrees * i);
}

---

...

// También puedes usar un bucle distinto
// para acceder a los elementos de un arreglo
for (float val : randoms) {
  println(val);
}

// Esto también funciona con arreglos de objetos,
// pero no cuando recién se está construyendo el arreglo
PVector[] vectors = new PVector[5];
for (int i = 0; i < vectors.length; i++) {
  vectors[i] = new PVector();
}

// La sintaxis solo aplica cuando se itera sobre un
// arreglo ya existente
for (PVector v : vectors) {
  point(v.x, v.y);
}

Un arreglo es una lista de datos. Es posible tener un arreglo de cualquier tipo de datos. Cada porción de datos en un arreglo se identifica con un número índice representando su posición en el arreglo. El primer elemento en el arreglo es [0], el segundo elemento es [1], y así. Los arreglos son similares a los objetos, y también deben ser creados con la palabra clave new.

Cada arreglo tiene una variable length, que es un valor entero que representa el largo del arreglo, el número de elementos en el arreglo. Observa que como la numeración de los índices parte en cero (no 1), el último valor en un arreglo de largo 5 se referencia como arreglo[4] (esto es, length menos 1), no array[5], lo que causaría un error.

Otra fuente de confusión común es la diferencia entre usar length para obtener el largo de un arreglo y length() para obtener el largo de un String. Observa la presencia de paréntesis cuando se trabaja con Strings. (arreglo.length es una variable, mientras que String.length() es un método específico de la clase String).

datatype: cualquier tipo de datos primitivo o compuesto, incluyendo clases definidas por el usuario

var: cualquier nombre válido de variable

element: int: no debe exceder el largo del arreglo menos 1

value: dato a ser asignado al elemento del arreglo; debe tener el mismo tipo de datos que el arreglo

* ArrayList

// Estos son fragmentos de código que te muestran como usar una ArrayList.
// No compilarán porque asumen la existencia de una clase Particle.

// Al declarar la ArrayList, nota el uso de la sintaxis "<Particle>" para
// indicar nuestra intención de llenar esta ArrayList con objetos Particle
ArrayList<Particle> particles = new ArrayList<Particle>();

// Se pueden añadir objetos a una ArrayList con add()
particles.add(new Particle());

// Se pueden extraer elementos de una ArrayList con get()
Particle part = particles.get(0);
part.display();

// El método size() retorna el número actual de elementos en la lista
int total = particles.size();
println("El número total de partículas es: " + total);

// Puedes iterar sobre una ArrayList de dos maneras.
// TLa primera es usando un contador a lo largo de los elementos:
for (int i = 0; i < particles.size(); i++) {
  Particle part = particles.get(i);
  part.display();
}

// La segunda es usando un bucle mejorado:
for (Particle part : particles) {
  part.display();
}

// Puedes eliminar elementos en una ArrayList con remove()
particles.remove(0);
println(particles.size()); // ¡Ahora hay uno menos!

// Si estás modificando una ArrayList durante el bucle,
// no puedes usar la sintaxis de bucle mejorado.
// Adicionalmente, cuando quieras eliminar todos los elementos,
// deberás hacer el bucle en reversa, como se muestra aquí:
for (int i = particles.size() - 1; i >= 0; i--) {
  Particle part = particles.get(i);
  if (part.finished()) {
    particles.remove(i);
  }
}

Una ArrayList almacena un número variable de objetos. Es similar a hacer un arreglo de objetos, pero con una ArrayList, los elementos pueden ser fácilmente añadidos y removidos de la ArrayList, cuyo tamaño cambia de forma dinámica. Eso puede ser muy conveniente, pero es más lento que un arreglo de objetos cuando se usan muchos elementos. Observa que para una lista de tamaño variable de enteros, floats y Strings, puedes usar las clases de Processing IntList, FloatList y StringList.

Una ArrayList es una interfaz a la List de Java, que  implementa un arreglo de tamaño variable. Tiene muchos métodos para controlar y buscar sus contenidos. Por ejemplo, el largo de la ArrayList es retornado por su método size(), que es un valor entero que representa el número total de elementos en la lista. Se puede añadir un elemento a la ArrayList usando el método add() y se puede eliminar usando el método remove(). El método get() retorna el elemento en la posición especificada en la lista. (Ver el ejemplo anterior).

Para una lista de las números características de ArrayList, por favor lee la descripción en la referencia de Java.

Type: 	nombre de clase: el tipo de datos de los objetos a ser almacenados en la ArrayList.

initialCapacity: 	int: define la capacidad inicial de la lista; por defecto está vacía

* FloatDict

A simple class to use a String as a lookup for an float value. String "keys" are associated with floating-point values.

Una clase simple para usar una String como índice de un valor float. Las "llaves" String son asociadas con valores de punto flotante.

size()

Retorna el número de pares llave/valor

clear()

Elimina todos los elementos

keyArray()

Retorna una copia del arreglo interno de llaves

values()

Retorna el arreglo interno usado para almacenar los valores

valueArray()

Crea un nuevo arreglo y copia cada valor

get()

Retorna el valor asociado a la llave especificada

set()

Crea un nuevo par llave/valor o cambia el valor de uno existente

hasKey()

Comprueba si una llave es parte de la estructura de datos

add()

Suma a un valor

sub()

Resta de un valor

mult()

Multiplica un valor

div()

Divide un valor

remove()

Elimina un par llave/valor

sortKeys()

Ordena las llaves de forma alfabética

sortKeysReverse()

Ordena las llaves de forma alfabética en reversa

sortValues()

Ordena los valores de forma ascendente

sortValuesReverse()

Ordena los valores de forma descendente

* FloatList

Clase de ayuda para hacer una lista de floats. Estas listas fueron diseñadas para tener algunas de las características de ArrayLists, pero mantienen la simplicidad y la eficiencia de trabajar con arreglos.

Funciones como sort() y shuffle() siempre actúan en la lista misma. Para obtener una copia ordenada, usa lista.copy().sort().

size()

Retorna el tamaño de la lista

clear()

Elimina todos los elementos de la lista

get()

Obtiene un elemento en un índice en particular

set()

Define el elemento en un índice en particular

remove()

Elimina un elemento en un índice en particular

append()

Añade un nuevo elemento a la lista

hasValue()

Comprueba si el número es parte de la lista

add()

Suma al valor

sub()

Resta del valor

mult()

Multiplica el valor

div()

Divide el valor

min()

Retorna el valor mínimo

max()

Retorna el valor máximo

sort()

Ordena el arreglo, de menor a mayor

sortReverse()

Ordena en reversa, de mayor a menor

reverse()

Invierte el orden de los elementos de la lista

shuffle()

Aleatoriza el orden los elementos en la lista

array()

Crea un nuevo arreglo con una copia de los valores

* HashMap

import java.util.Map;

// Observa que la "llave" de HashMap es un String y el "valor" es un entero
HashMap<String,Integer> hm = new HashMap<String,Integer>();

// Ingreso de pares llave-valor en el HashMap
hm.put("Ava", 1);
hm.put("Cait", 35);
hm.put("Casey", 36);

// Uso de un bucle mejorado para iterar sobre cada entrada
for (Map.Entry me : hm.entrySet()) {
  print(me.getKey() + " es ");
  println(me.getValue());
}

// También podemos acceder a los valores por su llave
int val = hm.get("Casey");
println("Casey es " + val);

Un HashMap almacena una colección de objetos, cada uno referenciable por su llave. Esto es similar a un Array, solo que en lugar de acceder a los elementos con un índice numérico, se usa un String. (Si estás familiarizado con los arreglos asociativos en otros lenguajes, esta es la misma idea). El ejemplo de arriba cubre el uso básico, pero existen un ejemplo más extenso que se incluye en los ejemplos de Processing. Adicionalmente, para pares simples de Strings y enteros, Strings y floats, o Strings y Strings, puedes usar las clases más simples IntDict, FloatDict y StringDict.

Para una lista de las numerosas características de HashMap, por favor revisa la descripción en la referencia de Java.

Key

Nombre de clase: el tipo de datos para las llaves de HashMap

Value

Nombre de clase: el tipo de datos para los valores de HashMap

initialCapacity

int: define una capacidad inicial para el mapa; por defecto es 16

loadFactor

float: el factor de carga para el mapa; por defecto es 0.75

m

Map: le da al nuevo HashMap el mismo mapeo que este Map


* IntDict

Una clase simple para usar un String como índice de un valor entero. Las "llaves" tipo String se asocian con valores enteros.

size()

Retorna el número de pares llave/valor

clear()

Elimina todos los elementos

keyArray()

Retorna una copia del arreglo interno de llaves

values()

Retorna el arreglo interno usado para almacenar los valores

valueArray()

Crea un nuevo arreglo y copia cada valor en él

get()

Retorna el valor asociado a la llave especificada

set()

Crea un nuevo par llave/valor o modifica uno ya existente

hasKey()

Comprueba si una llave es parte de la estructura de datos

increment()

Incrementa en 1 el valor asociado a la llave especificada

add()

Suma al valor

sub()

Resta del valor

mult()

Multiplica un valor

div()

Divide un valor

remove()

Elimina un par llave/valor

sortKeys()

Ordena las llaves de forma alfabética

sortKeysReverse()

Ordena las llaves de forma alfabética en reversa

sortValues()

Ordena los valores de forma ascendente

sortValuesReverse()

Ordena los valores de forma descendente

* IntList

Clase de ayuda para hacer una lista de enteros. Estas listas fueron diseñadas para tener algunas de las características de ArrayLists, pero mantienen la simplicidad y la eficiencia de trabajar con arreglos.

Funciones como sort() y shuffle() siempre actúan en la lista misma. Para obtener una copia ordenada, usa lista.copy().sort().

size()

Retorna el tamaño de la lista

clear()

Elimina todos los elementos de la lista

get()

Obtiene un elemento en un índice en particular

set()

Define el elemento en un índice en particular

remove()

Elimina un elemento en un índice en particular

append()

Añade un nuevo elemento a la lista

hasValue()

Comprueba si el número es parte de la lista

add()

Suma al valor

sub()

Resta del valor

mult()

Multiplica el valor

div()

Divide el valor

min()

Retorna el valor mínimo

max()

Retorna el valor máximo

sort()

Ordena el arreglo, de menor a mayor

sortReverse()

Ordena en reversa, de mayor a menor

reverse()

Invierte el orden de los elementos de la lista

shuffle()

Aleatoriza el orden los elementos en la lista

array()

Crea un nuevo arreglo con una copia de los valores

* JSONArray

...
animal.setInt("id", i);
    animal.setString("especie", species[i]);
    animal.setString("nombre", names[i]);

    values.setJSONObject(i, animal);
  }

  saveJSONArray(values, "data/new.json");
}

// El bosquejo graba lo siguiente en una archivo llamado "new.json":
...

Un JSONArray almacena un arreglo de objetos JSON. Los JSONArrays pueden ser generados desde cero, de forma dinámica, o usando datos en un archivo ya existente. También se puede emitir JSON y grabar al disco, como en el ejemplo de arriba.

getString()

Retorna el valor String asociado a un índice

getInt()

Retorna el valor entero asociado a un índice

getFloat()

Retorna el valor float asociado a un índice

getBoolean()

Retorna el valor boolean asociado a un índice

getJSONArray()

Retorna el JSONArray asociado a un índice

getJSONObject()

Retorna el JSONObject asociado a un índice

getStringArray()

Retorna el arreglo completo como un arreglo de Strings

getIntArray()

Retorna el arreglo completo como un arreglo de enteros

append()

Adjunta un valor, aumentando el largo del arreglo en uno

setString()

Ingresa un valor String en el JSONArray

setInt()

Ingresa un valor entero en el JSONArray

setFloat()

Ingresa un valor float en el JSONArray

setBoolean()

Ingresa un valor boolean en el JSONArray

setJSONArray()

Define el valor de JSONArray ascoiado a un índice

setJSONObject()

Define el valor del JSONObject asociado a un índice

size()

Retorna el número de elementos en el JSONArray

isNull()

Determina si el valor es null

remove()

Elimina un elemento

* JSONObject

JSONObject json;

void setup() {

  json = new JSONObject();

  json.setInt("id", 0);
  json.setString("species", "Panthera leo");
  json.setString("name", "Lion");

  saveJSONObject(json, "data/new.json");
}

// El bosquejo graba lo siguiente en un archivo llamado "new.json":
// {
//   "id": 0,
//   "species": "Panthera leo",
//   "name": "Lion"
// }

Un JSONObject almacena datos con múltiples pares nombre/balor. Los valores pueden ser numéricos, String, boolean, otros JSONObjects o JSONArrays, o null. Los objetos JSONObject y JSONArrays son muy similares y comparten la mayoría de sus metódos; la diferencia primordial es que el segundo almacena un arreglo de objetos JSON, mientras que el primero representa un único objeto JSON.

Los datos JSON pueden ser generados desde cero, de forma dinámica, o usando datos en un archivo ya existente. También se puede emitir JSON y grabar al disco, como en el ejemplo de arriba.

getString()

Retorna el valor String asociado a una llave

getInt()

Retorna el valor entero asociado a una llave

getFloat()

Retorna el valor float asociado a una llave

getBoolean()

Retorna el valor boolea  asociado a una llave

getJSONArray()

Retorna el valor JSONArray asociado a una llave

getJSONObject()

Retorna el valor JSONObject asociado a una llave

isNull()

Determina si el valor asociado a la llave es null o si no tiene un valor

setString()

Ingresa un par llave/String al JSONObject

setInt()

Ingresa un par llave/entero al JSONObject

setFloat()

Ingresa un par llave/float al JSONObject

setBoolean()

Ingresa un par llave/boolean al JSONObject

setJSONObject()

Define el valor de JSONObject asociado a una llave

setJSONArray()

Define el valor de JSONArray asociado a una llave

* Object

// Declara y construye dos objetos (h1, h2) de la clase HLine
...

Los objetos son instancias de las clases. Una clase es un agrupamiento de métodos (funciones) y campos (variable y constantes) relacionados.

ClassName

la clase a partir de la cual se crea el nuevo objeto

instanceName

el nombre del objeto nuevo

* String

String str1 = "CCCP";
char data[] = {'C', 'C', 'C', 'P'};
String str2 = new String(data);
println(str1);  // Imprime "CCCP" en la consola
println(str2);  // Imprime "CCCP" en la consola
// Comparación de objetos String, ver la referencia abajo.
String p = "potato";
if (p == "potato") {
  println("p == potato");  // Esto no será impreso
}
// La forma correcta de comparar dos Strings
if (p.equals("potato")) {
  println("Sí, los contenidos de p y potato son iguales.");
}
// Usa una barra oblicua invertida para incluir comillas dentro de un String
String quoted = "Este tiene \"comillas\"";
println(quoted);  // Este tiene "comillas"

Un string es una secuencia de caracteres. La clase String incluye métodos para examinar caracteres individuales, comparar strings, buscar strings, extraer partes de strings, y para convertir una string en mayúsculas o minúsculas. Las Strings son siempre definidas dentro de comillas dobles ("Abc"), y los caracteres son siempre definidos dentro de comillas simples ('A').

Para comparar los contenidos de dos Strings, usa el método equals(), como en (a.equals(b)), en lugar de (a == b). Una String es un objeto, por lo que la comparación usando el operador == solo compara si ambas Strings están almacenadas en la misma celda de memoria. El uso del método equals() asegurará que los contenidos reales son los comparados. (La referencia donde se resuelven errores comunes tiene una explicación más extensa).

Como una String está definida entre comillas dobles, para incluir estos caracteres dentro del mismo String debes usar el caracter \ (barra oblicua invertida). (Ver el tercer ejemplo arriba). Esto se conoce como secuencia de escape. Otras secuencias de escape incluyen \t para el caracter de tabulación y \n para una línea nueva. Como \ es el caracter de escape, para incluir uno dentro de una String, debes usar dos consecutivos, así: \\

Existen más métodos de stirngs que los mostrados en esta página. La documentación adicional se puede encontrar en línea en la documentación oficial de Java.

charAt()

Retorna el caracter ubicado en el índice especificado

equals()

Compara un string con un objeto especificado

indexOf()

Retorna el valor del índice de la primera ocurrencia del substring dentro del string ingresado

length()

Retorna el número de caracteres en el string ingresado

substring()

Retorna un nuevo string que es parte del string ingresado

toLowerCase()

Convierte todos los caracteres en minúscula

toUpperCase()

Convierte todos los caracteres en mayúscula

data

byte[] o char[]: un arreglo de de bytes a ser decodificados como caracteres, o un arreglo de caracteres a ser combinados en un string.

offset

int: índice del primer caracter

length

int: número de caracteres

* StringDict

Una clase simpre para usar un String como índice de un valor String. Las "llaves" string son asociadas con valores String.

size()

Retorna el número de pares llave/valor

clear()

Elimina todas las entradas

keyArray()

Retorna una copia del arreglo interno de llaves

values()

Retorna el arreglo inteno en uso para almacenar los valores

valueArray()

Crea un nuevo arreglo y copia cada uno de los valores en él

get()

Retorna el valos asociado a la llave especificada

set()

Crea un nuevo par llave/valor o modifica el valor de uno ya existente

hasKey()

Comprueba si una llave es parte de la estructura de datos

remove()

Elimina un par llave/valor

sortKeys()

Ordena las llaves de forma alfabética

sortKeysReverse()

Ordena las llaves de forma alfabética en reversa

sortValues()

Ordena los valores en forma ascendente

sortValuesReverse()

Ordena los valores en forma descendente

* StringList

Clase de ayuda para hacer una lista de Strings. Estas listas fueron diseñadas para tener algunas de las características de ArrayLists, pero mantienen la simplicidad y la eficiencia de trabajar con arreglos.

Funciones como sort() y shuffle() siempre actúan en la lista misma. Para obtener una copia ordenada, usa lista.copy().sort().

size()

Retorna el largo de la lista

clear()

Elimina todos los elementos de la lista

get()

Retorna el valor asociado al índice especificado

set()

Define el valor asociado al índice especificado

remove()

Elimina el elemento asociado al índice especificado

append()

Añade una nueva entrada a la lista

hasValue()

comprueba si el valor es parte de la lista

sort()

Ordena el arreglo

sortReverse()

Ordena el arreglo en reversa, ordena los valores de mayor a menor

reverse()

Invierte el orden de los elementos de la lista

shuffle()

Aleatoriza el orden de los elementos de la lista

lower()

Hace que la lista entera esté en minúsculas

upper()

Hace que la lista entera esté en mayúsculas

array()	Create a new array with a copy of all the values

Crea un nuevo arreglo, copiando todos los valores

* Table

...
// El bosquejo graba lo siguiente en un archivo llamado "new.csv":
...

Los objetos Table almacenan datos con múltiples filas y columnas, como una hoja de cálculos tradicional. Las Tables pueden ser generadas desde cero, de forma dinámica, o usando datos de un archivo ya existente. Las Tables también pueden emitir datos y grabar al disco, como se muestra en el ejemplo arriba.

Métodos adicionales de Table están documentados en la documentación de Java de Processing Table.

addColumn()

Añade una nueva columna a la tabla

removeColumn()

Elimina una columna de la tabla

getColumnCount()

Retorna el número de columnas en una tabla

getRowCount()

Retorna el número de filas en una tabla

clearRows()

Elimina todas las filas de una tabla

addRow()

Añade una nueva fila a la tabla

removeRow()

Elimina una fila de la tabla

getRow()

Retorna una fila de la tabla

rows()

Retorna múltiples filas de una tabla

getInt()

Retorna un valor entero de la fila y la columna especificadas

setInt()

Almacena un valor entero en la fila y la columna especificadas

getFloat()

Retorna un valor float de la fila y la columna especificadas

setFloat()

Almacena un valor float en la fila y la columna especificadas

getString()

Retorna un valor String de la fila y la columna especificadas

setString()

Almacena un valor String en la fila y la columna especificadas

getStringColumn()

Retorna todos los los valores en la fila especificada

findRow()

Encuentra una fila que contenga el valor dado

Encuentra múltiples filas que contengan el valor dado

matchRow()

Encuentra una fila que calce con la expresión dada

matchRows()

Encuentra múltiples filas que calzan con la expresión dada

removeTokens()

Elimina caracteres de la tabla

trim()

Recorta el espacio en blanco de los valores

sort()

Ordena una tabla basado en los valores en una columna

* TableRow

...
println(row.getInt("number"));   // Imprime 8
println(row.getFloat("mass"));   // Imprime 15.9994
  println(row.getString("name"));  // Imprime "Oxygen
...

Un objeto TableRow representa una fila única de valores de datos, almacenados en columnas, de una tabla.

Los métodos adicionales de TableRow están documentados en la documentación de Java sobre datos en Processing.


getString()

Retorna un valor String de la columna especificada

getInt()

Retorna un valor entero de la columna especificada

getFloat()

Retorna un valor float de la columna especificada

setString()

Almacena un valor String en la columna especificada

setInt()

Almacena un valor entero en la columna especificada

setFloat()

Almacena un valor float en la columna especificada

getColumnCount()

Retorna el número de columnas

getColumnTitle()

Retorna el título de columna

* XML

// El siguiente archivo XML corto llamado "mammals.xml" es procesado
// en el código siguiente. Debe estar en la carpeta "data" del proyecto.
//
// <?xml version="1.0"?>
// <mammals>
//   <animal id="0" species="Capra hircus">Goat</animal>
//   <animal id="1" species="Panthera pardus">Leopard</animal>
//   <animal id="2" species="Equus zebra">Zebra</animal>
// </mammals>

XML xml;

void setup() {
  xml = loadXML("mammals.xml");
  XML[] children = xml.getChildren("animal");

  for (int i = 0; i < children.length; i++) {
    int id = children[i].getInt("id");
    String coloring = children[i].getString("species");
    String name = children[i].getContent();
    println(id + ", " + coloring + ", " + name);
  }
}

// El bosquejo imprime:
// 0, Capra hircus, Goat
// 1, Panthera pardus, Leopard
// 2, Equus zebra, Zebra

XML es una representación de un objeto XML, capaz de procesar código XML. Usa loadXML() para cargar archivos XML externos y crear objetos XML.

Solo los archivos codificados en UTF-8 (o ASCII puro) son procesados correctamente; el parámetro de codificación dentro de los archivos XML es ignorado.

getParent()

Retorna una copia del progenitor del elemento

getName()

Retorna el nombre completo del elemento

setName()

Define el nombre del elemento

hasChildren()

Comprueba si el elemento tiene hijos o no

listChildren()

Retorna los nombres de todos los hijos en formato de arreglo

getChildren()

Retorna un arreglo que contiene todos los elementos hijos

getChild()

Retorna el elemento hijo con el índice o ruta especificado

addChild()

Agrega un nuevo hijo al elemento

removeChild()

Elimina el hijo especificado

getAttributeCount()

Cuenta el número de atributos del elemento especificado

listAttributes()

Retorna una lista de nombres de todos los atributos en formato de arreglo

hasAttribute()

Comprueba si un elemento tiene o no el atributo especificado

getString()

Retorna el contenido del atributo como un String

setString()

Define el contenido de un atributo como String

getInt()

Retorna el contenido de un atributo como String

setInt()

Define el contenido de un atributo como entero

getFloat()

Retorna el contenido de un atributo como float

setFloat()

Define el contenido de un atributo como float

getContent()

Retorna el contenido de un elemento

getIntContent()

Retorna el contenido de un elemento como un entero

getFloatContent()

Retorna el contenido de un elemento como un float

setContent()

Define el contenido de un elemento

format()

Formatea datos XML como un String

toString()

Retorna datos XML como un String usando el formato por defecto

name

String: crea un nodo con este nombre

### Conversión

* binary()

println(c);             // Imprime "-13312"
println(binary(c));     // Imprime "11111111111111111100110000000000"
println(binary(c, 16)); // Imprime "1100110000000000"

Convierte un int, byte, char o color en un String que contiene la notación binaria equivalente. Por ejemplo, el valor de color producido por color(0, 102, 153, 255) se convertirá en el valor String "11111111000000000110011010011001". Esta función te puede ayudar a hacer tus sesiones de corrección de errores mucho más fáciles.

Note that the maximum number of digits is 32, because an int value can only represent up to 32 bits. Specifying more than 32 digits will have no effect.

Observa que el número máximo de dígitos es 32, porque un valor entero solo puede representar hasta 32 bits. Si se especifican más de 32 dígitos no tendrá efecto.

value

char, byte, o int: valor a ser convertido

digits

int: número de digitos a retornar

* boolean()

String s = "true";
boolean b = boolean(s);
if (b) {
  println("El boolean es true");
} else {
  println("El boolean es false");
}

Convierte un entero o String a su representación boolean. Para un entero, cualquier valor distinto de cero (positivo o negativo) se evalúa como true, mientras que cero evalúa a false. Para un String, el valor "true" evalúa a true, mientras que cualquier otro valor (incluyendo "false" o "hipopótamo") evalúa a falso.

Cuando se pasa un arreglo de enteros o valores String, se retorna un arreglo boolean del mismo largo.

* byte()

char c = 'E';
byte b = byte(c);
println(c + " : " + b);  // Imprime "E : 69"

int i = 130;
b = byte(i);
println(i + " : " + b);  // Imprime "130 : -126"

Convierte cualquier valor de un tipo de datos primitivo (boolean, byte, char, color, double, float, int, o long) a su representación en byte. Un byte puede solo ser un número entre -128 y 127, por lo que cuando se convierte un valor fuera de este rango, hace "wrap around" en la representación en byte. (Por ejemplo, byte(128) evalúa a -128).

Cuando se ingresa un arreglo de valores, se retorna un arreglo de bytes del mismo largo.

* char()

int i = 65;
char c = char(i);
println(i + " : " + c);  // Imprime "65 : A"

byte b = 65;
c = char(b);
println(b + " : " + c);  // Imprime "65 : A"

Convierte cualquier valor de tipo de datos primitivos (boolean, byte, char, color, double, float, int, o long) en su representación numérica de caracter.

Cuando se pasa un arreglo de valores, se retorna un arreglo del mismo largo.

* float()

...
println(i + " : " + f);  // Imprime "65 : 65.0"

Convierte un int o String a su representación de punto flotante. Un entero es fácilmente convertido a un float, pero los contenidos de un String deben parecerse a un número o NaN (not a number, no un número). Por ejemplo, float("1234.56") evalúa a 1234.56 pero float("giraffe") retornará NaN.

Cuando se ingresa un arreglo de enteros o Strings, se retorna un arreglo de números de punto flotante del mismo largo.

* hex()

color c = #ffcc00;
println(c);          // Imprime "-13312"
println(hex(c));     // Imprime "FFFFCC00"
println(hex(c, 6));  // Imprime "FFCC00"

---

color c = color(255, 204, 0);
println(c);          // Imprime "-13312"
println(hex(c));     // Imprime "FFFFCC00"
println(hex(c, 6));  // Imprime "FFCC00"

Convierte un int, byte, char, o color a un String  que contiene la notación hexadecimal equivalente. Por ejemplo, el valor de color producido por color(0, 102, 153) se convertirá al valor de String "FF006699". Esta función te puede ser de ayuda en tus sesiones de corrección de errores de tu código.

Observa que el número máximo de dígitos es 8, porque un valor entero solo puede representar hasta 32 bits. Especificar más de 8 dígitos no aumentará más el largo del String.

value

int, char, o byte: el valor a convertir

digits

int: el número de dígitos (máximo 8)

* int()

...
println(f + " : " + i);  // Imprime "65.0 : 65"
...
println(c + " : " + i);  // Imprime "E : 69"

Convierte cualquier valor de tipo de datos primitivos (boolean, byte, char, color, double, float, int, o long) en su representación de número entero.

Cuando se ingresa un arreglo de valores, se retorna un arreglo de enteros del mismo largo.

* str()

...
println(sb);  // Imprime 'false-28R-32.61024'

Convierte cualquier valor de tipo de datos primitivos (boolean, byte, char, color, double, float, int, o long) en su representación de String. Por ejemplo, convertir un entero con str(3) retornará un valor String de "3", convertir un valor float con str(-12.6) retornará "-12.6", y conertir un boolean con str(true) retornará "true".

Cuando se ingresa un arreglo de valores, se retorna un arreglo de Strings del mismo largo.

* unbinary()

...
println(unbinary(s1));  // Imprime "16"
println(unbinary(s2));  // Imprime "8"
println(unbinary(s3));  // Imprime "4"

Convierte una representación en String de un número binario en su valor entero equivalente. Por ejemplo, unbinary("00001000") retornará 8.

value

String: String a ser convertido en entero

* unhex()

Convierte una representación en String de un número hexadecimal en su valor entero equivalente.

value

String: String a ser convertido en entero

### Funciones de String

* join()

...
println(joinedAnimals);  // Imprime "cat : seal : bear"

// Unir un arreglo de enteros requiere que primero
// se conviertan a un arreglo de Strings
...
println(joinedNumbers);  // Imprime "8, 67, 5"

Combina un arreglo de Strings en un String, cada uno separado por los caracteres usados por el parámetro separator. Para unir arreglos de enteros o floats, es necesario primero convertiros en Strings usando nf() o nfs().

list

String[]: arreglo de Strings

separator

char: char o String a ser ingresado entre cada elemento

* match()

String s = "Adentro de las etiquetas, encontrarás <tag>contenido</tag>.";
String[] m = match(s, "<tag>(.*?)</tag>");
println("Se encontró '" + m[1] + "' dentro de una etiqueta.");
// Imprime a la consola:
// "Se encontró 'contenido' dentro de una etiqueta."

---

String s1 = "¿Has escuchado de algo llamado fluorización. ";
       s1 += "Fluorización del agua?";
String s2 = "Ah? Sí, Yo he esuchado del tema, Jack, sí.";

String[] m1 = match(s1, "fluorización");
if (m1 != null) {  // Si no es null, es porque hubo una coincidencia
  // Esto se imprimirá en consola, ya que hubo un calce
  println("Coincidencia encontrada en '" + s1 + "'");  
} else {
  println("Ninguna coincidencia encontrado en '" + s1 + "'");
}

String[] m2 = match(s2, "fluorización");
if (m2 != null) {
  println("Coincidencia encontrada en '" + s2 + "'");
} else {
  // Esto se imprimirá en consola, ya que no hubo un calce.
  println("Ninguna coincidencia encontrado en '" + s2 + "'");  
}

Esta función se usa para aplicar una expresión regular en una porción de texto, y para retornar los grupos coincidentes (elementos encontrados dentro de los paréntesis) como un arreglo de Strings. Si no hay coincidencias, se retorna un valor null. Si no especifican grupos en la expresión regular, pero la secuencia arroja coincidencias, se retorna un arreglo de largo 1 (con el texto coincidente como el primer elemento del arreglo).

Para usar la función, primero comprueba para ver si el resultado es null. Si el resultado es null, entonces la secuencia no tuvo coincidencias. Si la secuencia sí tuvo coincidencias, se retorna un arreglo.

Si hay grupos (especificados como conjuntos de paréntesis) en la expresión regular, entonces los contenidos de cada uno será retornados en el arreglo. El elemento [0] de una coincidencia de expresión regular retorna el string coincidente entero, y los grupos de coincidencia empiezan en el elemento [1] (el primer grupo es [1], el segundo es [2], y así).

La sintaxis se puede encontrar en la referencia de la clase Pattern de Java. Para revisar la sintaxis de expresión regular, lee el tutorial de Java sobre el tema.

str

String: el String a ser buscado

regexp

String: la expresión regular a ser usada para comparar

* matchAll()

String s = "Dentro de etiquetas, puedes encontrar <tag>múltiples</tag> ";
       s += "<tag>porciones</tag> de <tag>contenido</tag>.";

String[][] m = matchAll(s, "<tag>(.*?)</tag>");
for (int i = 0; i < m.length; i++) {
  println("Se encontró '" + m[i][1] + "' dentro de una etiqueta.");
}

// Se imprime en la consola:
// "Se encontró 'múltiples' dentro de una etiqueta."
// "Se encontró 'porciones' dentro de una etiqueta."
// "Se encontró 'contenido' dentro de una etiqueta."

Esta función es usada para aplicar una expresión regular a una porción de texto, y retorna una lista de grupos coincidentes (elementos dentro de paréntesis) como un arreglo de Strings de dos dimensiones. Si no hay coincidencias, se retorna un valor null. Si no especifican grupos en la expresión regular, pero la secuencia coincide, igualmente se retorna un arreglo de dos dimensiones, pero la segund dimensión solo tiene un largo de uno.

Para usar la función, primero comprueba si el resultado es null. Si el resultado es null, entonces la secuencia no tuvo coincidencias. Si la secuencia sí tuvo coincidencias, se retorna un arreglo 2D.

Si hay grupos (especificados por un conjunto de paréntesis) en la expresión regular, entonces los contenidos de cada uno serán retornados en el arreglo. Asumiendo un bucle con variable contador i, el elemento [i][0] de una expresión regular que coincide retorna el string coincidente completo, y los grupos de coincidencia empiezan en el elemento [i][1] (el primer grupo es [i][1], el segundo es [i][2], y así).

The syntax can be found in the reference for Java's Pattern class. For regular expression syntax, read the Java Tutorial on the topic.

La sintaxis puede ser encontrada en la referencia de la clase Pattern de Java. Para revisar la sintaxis de expresión regular, lee el tutorial de Java sobre el tema.

str

String: el String a ser buscado

regexp

String: la expresión regular a ser usada para coincidencias

* nf()

...
println(sa);  // Imprime "0000000200"
...
println(sb);  // Imprime "00040"
...
println(sc);  // Imprime "090"
...
println(sd);  // Imprime "0000000200.9400"
...
println(se);  // Imprime "00040.200"
...
println(sf);  // Imprime "009.01200"

Función de utilidad para formatear números en Strings. Existen dos versiones: una para formatear floats, y una para formatear enteros. Los valores de los parámetros digits, left y right siempre deben ser enteros positivos.

Como se muestra en el ejemplo de arriba, nf() se usa para añadir ceros a la izquierda y/o la derecha de un número. Esto típicamente se usa para alinear una lista de números. Para remover dígitos de un número de punto flotante, usa las funciones int(), ceil(), floor() o round().

nums

float[], o int[]: los números a formatear

digits

int: número de digitos a acondicionar con ceros

num

float, o int: el número a formatear

left

int: número de dígitos a la izquierda del punto decimal

right

int: número de dígitos a la derecha del punto decimal

* nfc()

...
println(si);  // Imprime "500,000"
...
println(fi);  // Imprime "42,525.34"

---

...
println(si);  // Imprime "500,000 4,000"
...
println(fi);  // Imprime "42,525.34 3.14"

Función de utilidad para formatear números en strings y ubicar comas apropiadas para marcar unidades de 1000. Existen cuatro versiones: una para formatear enteros, una para formatear un arreglo de enteros, una para formatear floats, y una para formatear un arreglo de floats.

El valor del parámetro right siempre debe ser un entero positivo.

En una localidad fuera de Estados Unidos, esto insertará puntos en lugar de comas, o el signo apropiado para la región.

nums

float[], o int[]: los números a formatear

num

float, o int: el número a formatear

right

int: número de dígitos a la derecha del punto decimal

* nfp()

...
println(sa);  // Imprime "+0000000200"
...
println(sb);  // Imprime "-00040"
...
println(sc);  // Imprime "+090"
...
println(sd);  // Imprime "-0000000200.9400"
...
println(se);  // Imprime "+00040.200"
...
println(sf);  // Imprime "-009.01200"

Función de utilidad para formatear números en Strings. Similar a nf() pero antepone un "+" al comienzo de números positivos y un "-" al comienzo de números negativos. Existen dos versiones: una para formatear floats, y una para formatear enteros. Los valores de los parámetros digits, left y right siempre deben ser enteros positivos.

num

float, o int: el número a formatear

digits

int: número de digitos a acondicionar con ceros

nums

float[], o int[]: los números a formatear

left

int: el número de dígitos a la izquierda del punto decimal

right

int: el número de dígitos a la derecha del punto decimal

String o String[]

* nfs()

...
println(sa);  // Imprime " 0000000200"
...
println(sb);  // Imprime "-00040"
...
println(sc);  // Imprime " 090"
...
println(sd);  // Imprime "-0000000200.9400"
...
println(se);  // Imprime " 00040.200"
...
println(sf);  // Imprime "-009.01200"

Función de utilidad para formatear números en Strings. Similar a nf(), pero deja un espacio en blanco al frente de los números positivos para poder alinearlos con números negativos a pesar del signo negativo. Existen dos verisones: una para formatear floats, y otra para formatear enteros. Los valores de los parámetros digits, left y right siempre deben ser enteros positivos.

num

float, o int: el número a formatear

digits

int: número de dígitos a acondicionar con ceros

nums

float[], o int[]: los números a formatear

left

int: el número de dígitos a la izquierda del punto decimal

right

int: el número de dígitos a la derecha del punto decimal

String o String[]

* split()

...
// list[0] ahora es "Chernenko", list[1] es "Andropov"...

---

...
// nums[0] ahora es 8, nums[1] ahora es 67...

---

...
// list[0] ahora es "Chernenko", list[1] es "Andropov"...

La función split() secciona una String en pedazos usando un caracter o String como el delimitador. El parámetro delim especifica el caracter o caracteres que marcan los límites entre cada parte. Se retorna un arreglo String[] que contiene cada una de las secciones.

Si el resultado es un conjunto de números, puedes convertir el arreglo String[] en una arreglo float[] o int[] usando las funciones de conversión de tipos de datos int() y float(). (Ver el segundo ejemplo arriba).

La función splitTokens() funciona de forma similar, excepto que divide usando un rango de caracteres en vez de un caracter o secuencia en específico.

value

String: el String a ser separado

delim

char: el caracter o String a ser usado para separar los datos

* splitTokens()

...
println(q[0]);  // Imprime "a"
println(q[1]);  // Imprime "b"

---

// A pesar del mal formateo, los datos son procesados correctamente.
// El ", " como delimitador pide que haya un quiebre cada vez que se encuentre
// una coma *o* un espacio en el String. A diferencia de la función split(),
// los delimitadores adyacentes múltiples son tratados como un solo quiebre.
String s = "a, b c ,,d ";
String[] q = splitTokens(s, ", ");
println(q.length + " valores encontrados");  // Imprimre "4 valores encontrados"
println(q[0]);  // Imprime "a"
println(q[1]);  // Imprime "b"
println(q[2]);  // Imprime "c"
println(q[3]);  // Imprime "d"

La función splitTokens() divide un String en uno o más caracteres delimitadores o "tokens". El parámetro delim especifica el caracter o caracteres a ser usados como límites.

Si no se especifican caracteres en delim, cualquier espacio blanco es usado para dividir. Los espacios blancos incluyen tabulación (\t), nueva línea (\n), retorno (\r), línea de formulario (\f), y espacio.

Después de usar esta función para procesar los datos entrantes, es común convertir los datos de Strings a enteros o floats usando funciones de conversión de tipos de datos int() y float().

value

String: el String a ser dividido

delim

String: lista de caracteres individuales que serán usados como separadores

* trim()

...
println(s1);  // Imprimre "    Somerville MA "
...
println(s2);  // Imprime "Somerville MA"

String[] a1 = { " espaciado ", " inconsistente" };  // Nota los espacios
String[] a2 = trim(a1);
println(a2);
// Imprime los siguientes contenidos de arreglo en la consola::
// [0] "espaciado"
// [1] "inconsistente"

Quita los caracteres blancos del principio y el final de una String. Adicionalmente a lso caracteres blancos standard como espacio, retorno, y tabulación, esta función también remueve el caracter Unicode "nbsp".

str

String: cualquier String

array

String[]: un arreglo de Strings

String o String[]

### Funciones de arreglos

* append()

...
// Imprime en la consola los contenidos actualizados del arreglo:
...

Expande un arreglo en un elemento y añade datos en la nueva posición. El tipo de datos del parámetro element debe ser del mismo tipo de datos que el arreglo.

Cuando se usa un arreglo de objetos, los datos retornados de la función deben ser casteados al tipo de datos del arreglo del objeto. Por ejemplo: UnaClase[] items = (UnaClase[]) append(arregloOriginal, elemento)

array

Objeto, String[], float[], int[], char[], o byte[]: arreglo a adjuntar

value

Objeto, String, float, int, char, o byte: nuevos datos para el arreglo

byte[], char[], int[], float[], String[], u Objeto

* arrayCopy()

...
// Imprime en la consola los contenidos actualizados del arreglo
...

---

...
// Imprime en la consola los contenidos actualizados del arreglo

Copia un arreglo (o una parte de un arreglo) en otro arreglo. El arreglo src es copiado en el arreglo dst, empezando desde la posición especificada por srcPositio a la posición especificada por dstPosition. El número de elementos a copiar es determinado por el largo. Nota que copiar valores sobreescribe los valores existentes en el arreglo de destino. Para adjuntar valores en vez de sobreescribrlos, usa concat().

La versión simplificada con solo dos argumentos - arrayCopy(src, dst) - copia un arreglo completo en otro arreglo del mismo porte. Es equivalente a arrayCopy(src, 0, dst, 0, src.length).

El uso de esta función es mucho más eficiente para copiar datos de arreglos que la iteración con un bucle for() copiando cada elemento de forma individual. Esta función solo copia referencias, lo que significa que para la mayoría de los propósitos solo copia arreglos unidimensionales (un solo conjunto de corchetes). Si se usa con arreglos de dos (o tres o más) dimensiones, solo copiará las referencias en el primer nivel, porque un arreglo de dos dimensiones es simplemente un "arreglo de arreglos". Sin embargo, esto no produce un error, ya que es su comportamiento deseado. Internamente, esta función llama al método de Java System.arraycopy(), por lo que hereda gran parte de su funcionalidad.

src

Object: el arreglo de origen

srcPosition

int: posición inicial del arreglo de origen

dst

Object: el arreglo de destino del mismo tipo de datos que el arreglo de origen

dstPosition

int: posición inicial del arreglo de destino

length

int: número de elementos del arreglo a ser copiados

* concat()

...
// Imprime en la consola los contenidos actualizados del arreglo:
...

Concatena dos arreglos. Por ejemplo, la concatenación de los arreglos { 1, 2, 3 } y { 4, 5, 6 } resulta en { 1, 2, 3, 4, 5, 6 }. Ambos parámetros deben ser arreglos del mismo tipo de datos.

When using an array of objects, the data returned from the function must be cast to the object array's data type. SomeClass[] items = (SomeClass[]) concat(array1, array2).

Cuando se usa un arreglo de objetos, los datos retornados por la función deben ser convertidos al tipo de datos del arreglo de objetos. Por ejemplo: UnaClase[] items = (UnaClase[]) concat(arreglo1, arreglo2).

a

Object, String[], float[], int[], char[], byte[], o boolean[]: primer arreglo a concatenar

b

Object, String[], float[], int[], char[], byte[], o boolean[]: segundo arreglo a concatenar

boolean[], byte[], char[], int[], float[], String[], u Objeto

* expand()

...
println(data.length);  // Imprime "4"
...
println(data.length);  // Imprime "8"
...
println(data.length);  // Imprime "512"

---

...
println(imgs.length);  // Imprime "32"
...
println(imgs.length);  // Imprime "64"

Aumenta el tamaño de un arreglo. Por defecto, esta función duplica el tamaño del arreglo, pero el parámetro opcional newSize brinda un control preciso del aumento de tamaño.

Cuando se usa un arreglo de objetos, los datos retornados por la función deben ser convertidos al tipo de datos del arreglo de objetos. Por ejemplo: UnaClase[] items = (UnaClase[]) expand(arregloOriginal)

list

Object, String[], double[], float[], long[], int[], char[], byte[], o boolean[]: el arreglo a expandir

newSize

int: nuevo tamaño del arreglo

boolean[], byte[], char[], int[], long[], float[], double[], String[], u Objeto

* reverse()

...
// Imprime en la consola los contenidos actualizados del arreglo:
...

Invierte el orden de un arreglo

list

Objeto, String[], float[], int[], char[], byte[], or boolean[]: booleans[], bytes[], chars[], ints[], floats[], o Strings[]

boolean[], byte[], char[], int[], float[], String[], u Objeto

* shorten()

...
println(sa1);  // 'sa1' todavía contiene OH, NY, CA
println(sa2);  // 'sa2' ahora contiene OH, NY


Disminuye en un elemento el arreglo y retorna el arreglo acortado

Cuando se usa un arreglo de objetos, los datos retornados por la función deben ser convertidos al tipo de datos del arreglo de objetos. Por ejemplo: UnaClase[] items = (UnaClase[]) shorten(arregloOriginal)

list

Objeto, String[], float[], int[], char[], byte[], o boolean[]: arreglo a acortar

boolean[], byte[], char[], int[], float[], String[], u Objeto

* sort()

...
// Imprime los contenidos del arreglo ordenado:
...

---

...
// Imprime los contenidos del arreglo ordenado:
...

---

...
// Imprime los contenidos del arreglo, con los 3 primeros elementos ordenados:
...

Ordena un arreglo de números de menor a mayor, o pone un arreglo de palabras en orden alfábetico. El arreglo original no es modificado: se retorna un arreglo ordenado. El parámetro count define el número de elementos a ordenar. Por ejemplo, si hay 12 elementos en un arreglo y count se define como 5, solo los primeros 5 elementos del arreglo serán ordenados.

list

String[], float[], int[], char[], or byte[]: arreglo a ordenar

count

int: número de elementos a ordenar, empezando desde 0

byte[], char[], int[], float[], o String[]

* splice()

String[] a = { "OH", "NY", "CA" };
a = splice(a, "KY", 1);  // Agrega un valor al arreglo
println(a);
// Imprime en la consola los siguientes contenidos del arreglo:
// [0] "OH"
// [1] "KY"
// [2] "NY"
// [3] "CA"

println();  // Imprime una línea en blanco

String[] b = { "VA", "CO", "IL" };
a = splice(a, b, 2);  // Agrega un arreglo de valores en otro arreglo
println(a);
// Imprime en la consola los siguientes contenidos de arreglo:
// [0] "OH"
// [1] "KY"
// [2] "VA"
// [3] "CO"
// [4] "IL"
// [5] "NY"
// [6] "CA"

Insertar un valor o un arreglo de valores en un arreglo existente. Los primeros dos parámetros deben ser arreglos del mismo tipo de datos. El primer parámetro especifica el arreglo inicial a ser modificado, y el segundo parámetro define los datos a ser insertados. El tercer parámetro es un valor de índice que especifica la posición del arreglo donde empezar a insertar datos. (Recuerda que el la numeración de los índices de los arreglos empiezan en cero, por lo que la primera posición es 0, la segunda posición es 1, y así).

Cuando se agrega un arreglo de objetos, los datos retornados de la función deben ser convertidos al tipo de datos del arreglo de objetos. Por ejemplo: UnaClase[] items = (UnaClase[]) splice(arreglo1, arreglo2, índice)

list

Objeto, String[], float[], int[], char[], byte[], o boolean[]: arreglo al que insertar datos

value

Objeto, String[], String, float[], float, int[], int, char[], char, byte[], byte, boolean[], o boolean: valor a ser insertado

index

int: posición en el arreglo donde insertar los datos

boolean[], byte[], char[], int[], float[], String[], u Objeto

* subset()

...
// Imprime en la consola los siguientes contenidos del arreglo
...
// Imprime en la consola los siguientes contenidos del arreglo

Extrae un arreglo de elementos desde un arreglo existente. El parámetro list define el arreglo desde el que se copian los elementos, y los parámetros start y count especifican desde dónde y cuántos elementos a extraer. Si no se da un valor de count, los elementos serán extraidos desde el comienzo al final del arreglo. Cuando se espefica start, recuerda que el primer elemento es 0. Esta función no modifica el arreglo original.

Cuando se usa un arreglo de objetos, los datos retornados desde la función deben ser convertidos al tipo de datos del arreglo de objetos. Por ejemplo: UnaClase[] items = (UnaClase[]) subset(arregloOriginal, 0, 4)

list

Objeto, String[], float[], int[], char[], byte[], o boolean[]: arreglo desde el cual extraer

start

int: posición de inicio

count

int: número de valores a extraer

boolean[], byte[], char[], int[], float[], String[], u Objeto

## Control

### Operadores relacionales

* != (desigualdad)

...
println("la variable a no es igual a la variable b");
...

Determina si una expresión no es equivalente a otra.

value1

int, float, char, byte, boolean

value2

int, float, char, byte, boolean

* < (menor que)

...
println("la variable a es menor que la variable b ");
...

Determina si el valor a la izquierda es menor que el valor a la derecha.

value1

int, float, char, o byte

value2

int, float, char, o byte

* <= (menor o igual que)

...
println("la variable a es menor o igual que la variable b ");
...
Determina si el valor a la izquierda es menor que el valor a la derecha o si los valores son equivalentes.

value1

int, float, char, o byte

value2

int, float, char, o byte

* == (igualdad)

...
println("las variables a y b son iguales");
...

Determina si dos valores son equivalentes. El operador de igualdad es diferente que el operador de asignación.

Observa que cuando se comparan objetos String, debes usar el método equals() en lugar de == para comparar sus contenidos. Revisa la referencia de String o la sección de corrección de errores para una explicación más extensa.

value1

int, float, char, byte, boolean

value2

int, float, char, byte, boolean

* > (mayor que)

...
println("la variable b es mayor que la variable a");
...

Comprueba si el valor a la izquierda es mayor que el valor a la derecha.

value1

int, float, char, o byte

value2

int, float, char, o byte

* >= (mayor o igual que)

...
println("la variable b es mayor que la variable a");
...

Comprueba si el valor a la izquierda es mayor que el valor a la derecha.

value1

int, float, char, o byte

value2

int, float, char, o byte

### Iteración

* for

...
// Se pueden usar bucles for() anidados para
// generar patrones de dos dimensiones
...
// Este ejemplo no produce un resultado visual,
// pero imprime valores en la consola.
...

Controla una secuencia de repeticiones. Una estructura básica for tiene tres partes: init, test y update. Cada parte debe ser separada por un punto y coma (;). El bucle continua hasta que test evalúa a false. Cuando se ejecuta una estructura for, ocurre la siguiente secuencia de eventos:

1. Se ejecuta la instrucción init
2. Se evalúa test, que resulta en true o false.
3. Si test es true, salta al paso 4. Si test es false, salta al paso 6.
4. Ejecuta los statements dentro del bloque
5. Ejecuta el statement update y salta al paso 2.
6. Sale del bucle.

En el primer ejemplo arriba, la estructura for es ejecutada 40 veces. En la instrucción init, el valor de i es creado y definido como cero. i es menor que 40, por lo que la prueba evalúa a true. Al final de cada bucle, i es incrementado en uno. En la ejecución número 41, el test evalúa a false, porque i es igual a 40, por lo que i < 40 ya no es true. Así, el bucle termina.

Un segundo tipo de estructura for hace más fácil la iteración sobre cada elemento de un arreglo. El último ejemplo muestra cómo funciona esto. Dentro de los paréntesis, primero definimos el tipo de datos del arreglo, luego se define el nombre de la variable. Este nombre de variable se asignará a cada elemento del arreglo a medida que el for se mueve a través del arreglo completo. Finalmente, después de los dos puntos, define el nombre del arreglo a ser usado.

init

instrucción que se ejecuta una vez al comienzo del bucle

test

si la prueba evalúa a true, se ejecuta statements

update

se ejecuta al final de cada iteración

statements

conjunto de instrucciones ejecutadas cada vez que se ejecuta el bucle

datatype

tipo de datos de los elementos del arreglo

element

nombre temporal a ser usado por cada elemento del arreglo

array

nombre del arreglo sobre el que se itera

* while

Controla una secuencia de repeticiones. La estructura while ejecuta una serie de instrucciones de forma continua mientras la expresión evalúa a true. La expresión debe ser actualizada durante las repeticiones, ya que en caso contrario el programa nunca podrá "salir" de while.

Esta función puede ser peligrosa porque el código dentro del bucle while no terminará hasta que la expresión dentro se convierta en false. Esto prevendrá que el resto del código se ejecute (por ejemplo, los eventos de ratón y de teclado no serán actualizados). Ten cuidado - si lo usas incorrectamente, esto puede trabar tu código (e incluso puede trabar el ambiente Processing en sí mismo).

expression

una expresión válida

statements

una o más instrucciones

### Condicionales

* ?: (condicional)

Un atajo de una estructura if y else. El operador condicional ?: es a veces llamado el operador ternario, un operador que toma tres argumentos. Si test evalúa a true, la expresión 1 es evaluada y retornada. Si la condición evalúa a false, expression2 es evaluada y retornada.

La siguiente expresión condicional
...

es equivalente a esta estructura:

test

cualquier expresión que evalúa a true o false

expression1

cualquier expresión valida

expression2

cualquier expresión valida

* break

...
println("Alpha");  // No se ejecuta
...
println("Bravo");  // Imprime "Bravo"
...
println("Zulu");   // No se ejecuta

Termina la ejecución de una estructura como switch, for, o while y salta a la siguiente instrucción.

* case
...
println("Alpha");  // No se ejecuta
...
println("Bravo");  // Imprime "Bravo"
...
println("Zulu");   // No se ejecuta
...


Denota las distintas etiquetas a ser evaluadas con el parámetro en la estructura switch.

label

byte, char, o int

statements

una o más expresiones válidas

* continue

...
  continue;     // salta a la siguiente iteración,
}               // por lo que no se dibuja la línea.
...

Cuando se ejecuta dentro de un for o un while, se salta el resto del bloque y empieza la siguiente iteración.

* default

...
println("Alpha");  // No se ejecuta
...
println("Bravo");  // No se ejecuta
...
println("Zulu");   // Imprime "Zulu"
...

Palabra clave para definir la condición por defecto de un switch. Si ninguna de las etiquetas de casos coinciden con el parámetro switch, la(s) instruccion(es) después de la sintaxis default son ejecutadas. Las estructuras switch no necesitan un default.

statements

una o más instrucciones a ser ejecutadas

* else

Extiende la estructura if, permitiendo al programa escoger entre dos o más bloques de código. Especifica un bloque de código a ser ejecutado cuando la expresión if sea false.

expression

cualquier expresión válida que evalúe a true o false

statements

una o más instrucciones a ser ejecutadas

* if

stroke(255);   // Define el color como blanco
if (i < 35) {  // Cuando 'i' es menor que 35...
stroke(0);   //... se define el color como negro

Le permite al programa tomar una decisión sobre la ejecución de un código. Si el test evalúa a true, las instrucciones dentro del bloque son ejectuadas y si el test evalúa a false, las instrucciones no son ejecutadas.

test

cualquier expresión válida que evalúe a true o false

statements

una o más instrucciones a ser ejecutadas

* switch

...
println("Zero");  // No se ejecuta
...
println("One");  // Imprime "One"
...
---

...
 println("Alpha");  // No se ejecuta
...
çprintln("Bravo");  // No se ejecuta
...
default:             // Default se ejecuta si las etiquetas de case
println("None");   // no coinciden con el parámetro switch
...

---

// Quita un "break" para permitir la prueba
// de más de un valor a la vez
...
println("Alpha");  // No se ejecuta
...
println("Bravo");  // Imprime "Bravo"
...

Funciona como una estructura if, pero switch es más conveniente cuando necesitas seleccionar entre tres o más alternativas. El control del programa salta al caso con el mismo valor que la expresión. Todas las expresiones restantes en switch son ejecutadas a no ser que sean redirigidas con un break. Solo los tipos de datos primitivos que pueden convertir a un número entero (byte, char e int) pueden ser usados como el parámetro expression. Default es opcional.

...
//case label: opcional
...

expression

byte, char, o int

label

byte, char, o int

statements

una o más instrucciones a ser ejecutadas

### Operadores lógicos

* ! (logical NOT)

Invierte el valor boolean de una expresión. Retorna true si la expresión es false y retorna false si la expresión es true. Si la expresión (a>b) evalúa a true, entonces !(a>b) evalúa a false.

expression

cualquier expresión válida

* && (logical AND)

...
stroke(0);  // Define el color como negro
...
stroke(255);  // Define el color como blanco
...

Compara dos expresiones y retorna true solo si ambas evalúan a true. Retorna false si una o ambas expresiones son false. La siguiente lista muestra todas las combinaciones posibles:

true && false // Evalúa a false porque la segunda es false
false && true // Evalúa a false porque la primera es false
true && true // Evalúa a true porque ambas son true
false && false // Evalúa a false porque ambas son false

expression1

cualquier expresión válida

expression2

cualquier expresión válida

* || (logical OR)

Compara dos expresiones y retorna true si una o ambas expresiones evalúan a true. Retorna false solo si ambas expresiones son false. La siguiente lista muestra todas las combinaciones posibles:

true || false // Evalúa a true cuando el primero es true
false || true // Evalúa a true cuando el segundo es true
true || true // Evalúa a  true porque ambos son true
false || false // Evalúa a false porque ambos son false

expression1

cualquier expresión válida

expression2

cualquier expresión válida

## Figura

* createShape()

PShape square;  // El objeto PShape

...
// Crea una PShape con forma de cuadrado.
// Los argumentos numéricos son similares a rect().
...

---

PShape s;  // El objeto PShape
...
  // Crea una PShape con forma de cuadrado,
  // especificando una serie de vértices.
...

---

...

---

...
// Crea el la figura "grupo"
...
// Haz dos figuras
...
// Agrega dos figuras "hijas" al grupo padre
...
shape(alien); // Dibuja el grupo
}

La función createShape() es usada para definir una nueva figura. Una vez creada, esta figura puede dibujar con la función shape(). La forma básica de usarla función define nuevas figuras primitvas. Uno de los siguientes parámetros es usado como primer parámetro: ELLIPSE, RECT, ARC, TRIANGLE, SPHERE, BOX, QUAD, o LINE (elipse, rectángulo, arco, triángulo, esfera, caja, cuadrilátero y línea). Los parámetros para cada una de estas figuras distintas son las mismas que las funciones correspondientes: ellipse(), rect(), arc(), triangle(), sphere(), box(), y line(). El primer ejemplo arriba clarifica cómo funciona esto.

Se pueden lograr figuras únicas y personalizadas  usando createShape() sin un parámetro. Después de que la figura es empezada, los atributos de dibujo y geometría pueden ser definidos directamente en la figura dentro de los métodos beginShape() y endShape(). Revisa el segundo ejemplo para ver detalles específicos, y la referencia de beginShape() para ver sus opciones.

La función createShape() también puede ser usada para hacer una figura compleja a partir de otras figuras. Esto se llama "group" (gripo) y puede ser creado usando el parámetro GROUP como el primer parámetro. Revisa el cuarto ejemplo para ver cómo funciona.

Después de usar createShape(), el color del trazo y del relleno pueden ser definidos con los me´todos setStroke() setFill(), como se ve en los ejemplos anteriores. La lista completa de métodos y campos de la clase PShape se encuentra en la documentación de Java de Processing.

kind

int: POINT, LINE, TRIANGLE, QUAD, RECT, ELLIPSE, ARC, BOX o SPHERE

p

float[]: parámetros según el tipo de figura

* loadShape()

...
// El archivo "bot.svg" debe estar dentro de la carpeta data
// del bosquejo actual para ser cargado son éxito
...

---

...
// El archivo "bot.obj" debe estar dentro de la carpeta data
// del bosquejo actual para ser cargado son éxito

...

Carga geometría en una variable de tipo PShape. Se pueden cargar archivos SVG Y OBJ. Para ser cargado correctamente, el archivo debe estar ubicado dentro de la carpeta data del bosquejo actual. En la mayoría de llos casos, loadShape() deberá ser usado dentro de setup() porque cargar figuras dentro de draw() reducirá la velocidad del bosquejo.

De forma alternativa, el archivo puede ser cargado desde cualquier lugar del computador local usando una dirección absoluta (que empiece con / en Unix y Linux, o una letra de disco en Windows), además parámetro filename puede ser una URL de un archivo en línea.

Si el archivo no está disponible o si ocurre un error, se retornará null y aparecerá un mensaje de error en la consola. El mensaje de error no detiene el programa, pero el valor null puede casuar una NullPointerException si tu código no comprueba si el valor retornado es null.

filename

String: nombre del archivo a cargar, puede ser .svg u .obj.

* PShape

...
// El archivo "bot.svg" debe estar dentro de la carpeta data
// del bosquejo actual para ser cargado son éxito
...

---

PShape square;  // El objeto PShape
...
// Crea una figura PShape cuadrada. La esquina
// está en  0,0 y el centro está en 40,40
...

Tipo de datos para almacenar figuras. Antes de que se use una figura, debe estar cargada con loadShape() o creada con createShape(). La función shape() se usa para dibujar la figura en la ventana. Processing actualmente puede cargar y mostrar figuras SVG (Scalable Vector Graphics) y OBJ. Los archivos OBJ solo pueden ser usados con el renderer P3D. La función loadShape() soporta archivos SVG creados con Inkscape y Adobe Illustrator. No es una implementación completa de SVG, pero ofrece un soporte simple de usar para el manejo de datos de vector.

El objeto PShape contiene un grupo de métodos que pueden operar sobre los datos de figura. Algunos de los métodos están listados más abajo, pero la lista completa usada para crear y modificar figuras está disponible aquí en la docuimentación de Java de Processing.

Para crear una nueva figura, usa la función createShape(). No uses la sintaxis new PShape().

width

Ancho del documento de figura

height

Altura del documento de figura

isVisible()

Retorna un valor boolean "true" si la imagen está configurada visible, "false" si no

setVisible()

Define si la figura está visible o invisible

disableStyle()

Deshabilita los datos de estilo de la figura y usa los estilos de Processing

enableStyle()

Habilita los datos de estilo de la figura e ignora los estilos de Processing

beginContour()

Empieza un contorno nuevo

endContour()

Termina un contorno

beginShape()

Empieza la creación de una PShape nueva

endShape()

Termina la creación de una PShape nueva

getChildCount()

Retorna el número de hijos

getChild()

Retorna un elemento hijo de una figura como un objeto PShape

addChild()

Agrega un hijo nuevo

getVertexCount()

Retorna el número total de vértices como un entero

getVertex()

Retorna el vértica en la posición del índice

setVertex()

Define el vértice en la posición del índice

setFill()

Define el valor del relleno

setStroke()

Define el valor del trazo

translate()

Traslada la figura

rotateX()

Rota la figura alrededor del eje x

rotateY()

Rota la figura alrededor del eje y

rotateZ()

Rota la figura alrededor del eje z

rotate()

Rota la figura

scale()

Aumenta y reduce el tamaño de una figura

resetMatrix()

Reemplaza la matriz actual de una figura por la matriz identidad


### Primitivas 2D

* arc()

Dibuja un arco en la pantalla. Los arcos son dibujados usando el borde exterior de una elipse definida por los parámetros a, b, c y d. El origen del arco de elipse puede ser cambiado con la función ellipseMode(). Usa los parámetros start y stop para especificar los ángulos (en radianes) entre los que dibujar el arco.

Existen tres formas de dibujar un arco; la técnica de rendering usada es definida por el séptimo parámetro opcional. Las tres opciones, mostradas en los ejemplos de arriba, son PIE, OPEN y CHORD (pastel, abierto y cuerda). El modo por defecto es OPEN con relleno PIE.

En algunos casos, la función arc() no es lo suficientemente precisa como para dibujar de forma suave. Por ejemplo, la figura puede tener imperfecciones al rotar lentamente. Si estás teniendo problemas con el render de los arcos, necesitarás dibujar tú mismo el arco usando beginShape()/endShape() o una PShape.

a

float: coordenada x del arco de elipse

b

float: coordenada y del arco de elipse

c

float: por defecto, ancho del arco de elipse

d

float: por defecto, altura del arco de elipse

start

float: ángulo inicial del arco, en radianes

stop

float: ángulo final del arco, en radianes

* ellipse()

Dibuja una elipse (óvalo) en la pantalla. Una elipse con igual ancho y altura es un círculo. Por defecto, los dos primeros parámetros definen la ubicación, y los parámetros tercero y cuarto definen el ancho y la altura de la figura. El origen puede ser cambiado usando la función ellipseMode().

a

float: coordenada x de la elipse

b

float: coordenada y de la elipse

c

float: por defecto, ancho de la elipse

d

float: por defecto, altura de la elipse

* line()

...
// El dibujo de líneas en 3D requiere P3D
// como parámetro en size()
...

2D lines are drawn with a width of one pixel by default, but this can be changed with the strokeWeight() function. The version with six parameters allows the line to be placed anywhere within XYZ space. Drawing this shape in 3D with the z parameter requires the P3D parameter in combination with size() as shown in the above example.

Dibuja una línea (un camino directo entre dos puntos) en la pantalla. La versión de line() con cuatro parámetros dibuja la línea en 2D. Para eligir el color de una línea, usa la función stroke(). Una línea no puede ser rellenada, por lo que la función fill() no afecta el color de una línea. Las líneas 2D son dibujadas con un ancho de un pixel por defecto, pero esto puede ser cambiado usando la función strokeWeight(). La versión con seis parámetros permite ubicar la línea en cualquier parte del espacio XYZ. Dibujar esta figura en 3D usando el parámetro z requiere el parámetro P3D en combinación con size() como se muestra en el ejemplo arriba.

x1

float: coordenada x del primer punto

y1

float: coordenada y del primer punto

x2

float: coordenada x del segundo punto

y2

float: coordenada y del segundo punto

z1

float: coordenada z del primer punto

z2

float: coordenada z del segundo punto

* point()

Dibuja un punto, una coordenada en el espacio de dimensión un pixel. El primer parámetro es el valor horizontal del punto, el segundo valor es el punto vertical del punto, y el tercer valor opcional es el valor de profundidad. Dibujar esta figura en 3D con un parámetro z requiere el parámetro P3D en combinación con size() como se muestra en el ejemplo anterior.

Use stroke() to set the color of a point().

Usa stroke() para definir el color de un punto.

x

float: coordenada x del punto

y

float: coordenada y del punto

z

float: coordenada z del punto

* quad()

A quad is a quadrilateral, a four sided polygon. It is similar to a rectangle, but the angles between its edges are not constrained to ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and the subsequent pairs should proceed clockwise or counter-clockwise around the defined shape.

Un quad es un cuadrilátero, un polígono de cuatro lados. Es similar a un rectángulo, pero los ángulos entre sus bordes pueden ser distintos de 90 grados. El primer par de parámetros (x1, y1) define el primer vértice y los siguientes pares deben seguir en el sentido del reloj o en contra, alrededor de la figura definida.

x1

float: coordenada x de la primera esquina

y1

float: coordenada y de la primera esquina

x2

float: coordenada x de la segunda esquina

y2

float: coordenada y de la segunda esquina

x3

float: coordenada x de la tercera esquina

y3

float: coordenada y de la tercera esquina

x4

float: coordenada x de la cuarta esquina

y4

float: coordenada y de la cuarta esquina

* rect()

Dibuja un rectángulo en la pantalla. Un rectángulo es una figura de cuatro lados con cada ángulo igual a 90 grados.  Por defecto, los dos primeros parámetros definen la ubicación de la esquina superior izquierda, el tercero define el ancho, y el cuarto define la altura. Sin embargo, la forma en que estos parámetros son interpretados puede ser cambiada con la función rectMode().

Para dibujar un rectángulo redondeado, añade un quinto parámetro, que es usado como el valor del radio de las cuatro esquinas.

Para usar diferentes valores de radio para cada esquina, incluye ocho parámetros. Al usar ocho parámetros, los últimos cuatro definen el radio del arco en cada esquina de forma separada, empezando con la esquina superior izquierda y moviéndose en el sentido del reloj alrededor del rectángulo.

a

float: por defecto, coordenada x del rectángulo
b

float: por defecto, coordenada y del rectángulo

c

float: por defecto, ancho del rectángulo

d

float: por defecto, altura del rectángulo

r

float: radio para las cuatro esquinas

tl

float: radio de la esquina superior izquierda

tr

float: radio de la esquina superior derecha

br

float: radio de la esquina inferior derecha

bl

float: radio de la esquina inferior izquierda

* triangle()

Un triángulo es un plano creado al conectar tres puntos. Los dos primeros argumentos especifican el primer punto, los dos argumentos del medio especifican el segundo punto, y los dos últimos argumentos especifican el tercer punto.

x1	float: coordenada x del primer punto
y1	float: coordenada y del primer punto
x2	float: coordenada x del segundo punto
y2	float: coordenada y del segundo punto
x3	float: coordenada x del tercer punto
y3	float: coordenada y del tercer punto

### Curvas

* bezier()

Dibuja una curva Bezier en la pantalla. Estas curvas están definidas por una serie de puntos ancla y de control. Los dos primeros parámetros especifican el primer punto ancla y los los dos últimos parámetros especifican el otro punto ancla. Los parámetros del medio especifican los puntos de control que definen la forma de la curva. Las curvas de Bezier fueron desarrolladas por el ingeniero francés Pierre Bezier. El uso de la versión en 3D requiere usar el renderer P3D (revisa la referencia de Ambiente para más información).

x1

float: coordenadas del primer punto ancla

y1

float: coordenadas del primer punto ancla

z1

float: coordenadas del primer punto ancla

x2

float: coordenadas del primer punto de control

y2

float: coordenadas del primer punto de control

z2

float: coordenadas del primer punto de control

x3

float: coordenadas del segundo punto de control

y3

float: coordenadas del segundo punto de control

z3
float: coordenadas del segundo punto de control

x4

float: coordenadas del segundo punto ancla

y4

float: coordenadas del segundo punto ancla

z4

float: coordenadas del segundo punto ancla

* bezierDetail()

// Mueve el ratón a la izquierda y a la derecha para ver cambios en el detalle
...

Define la resolución a la que se muestran las Beziers. El valor por defecto es 20. Esta función solo es útil cuando se usa el renderer P3D; el renderer P2D por defecto no usa esta información.

detail

int: resolución de las curvas

* bezierPoint()

Evalúa la Bezier en el punto t para los puntos a, b, c, d. El parámetro t varía entre 0 y 1, a y d son puntos en la curva, y b y c son los puntos de control. Esto puede ser hecho una vez con las coordenadas x y una segunda vez con las coordenadas y para obtener la ubicación de la curva Bezier en t.

a

float: coordenada del primer punto en la curva

b

float: coordenada del primer punto de control

c

float: coordenada del segundo punto de control

d

float: coordenada del segundo punto en la curva

t

float: valor entre 0 y 1

* bezierTangent()

...
// Obtener la ubicación del punto
...
// Obtener los puntos tangentes
...
// Calcular un ángulo a partir de los puntos tangentes
...
// La siguiente línea de código hace una línea
// invertida sobre la línea de arriba
...

Calcula la tangente de un punto en una curva Bezier. Hay una muy buena definición de tangente en Wikipedia.

a


float: coordenada del primer punto de la curva
b

float: coordenada del primer punto de control
c

float: coordenada del segundo punto de control

d

float: coordenada del segundo punto de la curva

t

float: valor entre 0 y 1

* curve()

Dibuja una línea curva en la pantalla. Los parámetros primero y segundo especifican el punto de control inicial y los dos últimos parámetros especifican el punto de control final. Los parámetros del medio espefician el inicio y el final de la curva. Se pueden crear curvas más largas concatenando una serie de funciones curve() o usando curveVertex(). Una función adicional llamada curveTightness() brinda control sobre la calidad visual de la curva. LA función curve() es una implementación de las splines de Catmull-Rom. El uso de la versión 3D requiere rendering P3D (revisa la referencia de Ambiente para más información).

x1

float: coordenadas del punto de control inicial

y1

float: coordenadas del punto de control inicial

x2

float: coordenadas del primer punto

y2

float: coordenadas del primer punto

x3

float: coordenadas del segundo punto

y3

float: coordenadas del segundo punto

x4

float: coordenadas del punto de control final

y4

float: coordenadas del punto de control final

z1

float: coordenadas del punto de control inicial

z2

float: coordenadas del primer punto

z3

float: coordenadas del segundo punto

z4

float: coordenadas del punto de control final

* curveDetail()

Define la resolución a la que se muestran las curvas. El valor por defecto es 20. Esta función solo es útil cuando se usa el renderer P3D, ya que el renderer P2D por defecto no usa esta información.

detail

int: resolución de las curvas.

* curvePoint()

Evalúa la curva en el punto t para los puntos a, b, c, d. El parámetro t puede ir entre 0 (el comienzo de la curva) y 1 (el final de la curva). a y d son puntos en la curva, y b y c son los puntos de control. Esto puede ser usado una vez con las coordenadas x y una segunda vez con las coordenadas y para obtener la ubicación de la curva en t.

a

float: coordenada del primer punto de la curva

b

float: coordenada del segundo punto de la curva

c

float: coordenada del tercer punto de la curva

d

float: coordenada del cuarto punto de la curva

t

float: valor entre 0 y 1

* curveTangent()

Calcula la tangente de un punto en la curva. Hay una muy buena definición de tangente en Wikipedia.

a

float: coordenada del primer punto de la curva

b

float: coordenada del primer punto de control

c

float: coordenada del segundo punto de control

d

float: coordenada del segundo punto de la curva

t

float: valor entre 0 y 1

* curveTightness()


// Mueve el ratón hacia la izquierda y la derecha y observa el cambio en la curva
...

Modifica la calidad de las formas creadas con curve() y curveVertex(). El parámetro tightness determina cuánto se ajusta la curva a los puntos vértices. El valor 0.0 es el valor por defecto de tightness (este valor define que la curvas sean splines de Catmull-Rom) y el valor 1.0 conecta todos los puntos con líneas rectas. Los valores dentro del rango -5.0 y 5.0 deformarán las curvas pero las dejarán reconocibles y a medida que los valores crecen en magnitud, continuarán deformándose.

tightness

float: tamaño de deformación a partir de los vértices originales

### Primitivas 3D

* box()

Una caja es un rectángulo extruido. Una caja con medidas iguales en todas sus dimensiones es un cubo.

size

float: tamaño de la caja en todas las dimensiones (crea un cubo)

w

float: tamaño de la caja en la dimensión x

h

float: tamaño de la caja en la dimensión y

d

float: tamaño de la caja en la dimensión z

* sphere()

Una esfera es una pelota hueca hecha de triangulos teselados.

r

float: el radio de la esfera

* sphereDetail()

Controla el detalle usado para hacer render de la esfera, ajustando el número de vérticas de la malla de la esfera. La resolución por defecto es 30, lo que crea una esfera bastante detallada con vértices cada 360/30 = 12 grados. Si vas a hacer render de un gran número de esferas por cuadro, es aconsejable reducir el nivel de detalle usando esta función. La configuración permanece activa hasta que se llama de nuevo a sphereDetail() con un nuevo parámetro y por lo tanto no debiera ser llamado antes de cada instrucción sphere(), a no ser que quieras hacer render de esferas con distintas configuiraciones, por ejemplo usando menos detalle para las esferas pequeñas o las que están más lejos de la cámara. Para controlar el detalle de la resolución horizontal y la vertical de forma independiente, usa la versión de la función con dos parámetros.

res

int: número de segmentos (mínimo 3) usados por revolución de círculo

ures

int: número de segmentos usados longitudinalmente por revolución de círculo

vres

int: número de segmentos usados latitudinalmente de arriba a abajo

### Atributos

* ellipseMode()

ellipseMode(RADIUS);  // Define el ellipseMode como RADIUS
fill(255);  // Hace que el relleno sea blanco
ellipse(50, 50, 30, 30);  // Dibuja una elipse blanca usando el modo RADIUS

ellipseMode(CENTER);  // Define el ellipseMode como CENTER
fill(100);  // Hace que el relleno sea gris
ellipse(50, 50, 30, 30);  // Dibuja una elipse gris usando el modo CENTER

ellipseMode(CORNER);  // Define el ellipseMode como CORNER
fill(255);  // Hace que el relleno sea blanco
ellipse(25, 25, 50, 50);  // Dibuja una elipse blanca usando el modo CORNER

ellipseMode(CORNERS);  // Define el ellipseMode como CORNERS
fill(100);  // Hace que el relleno sea gris
ellipse(25, 25, 50, 50);  //  Dibuja una elipse gris usando el modo CORNERS
sk
Modifica la ubicación desde la que se dibujan las elipses cambiando la forma en que los parámetros dados a ellipse() son interpretados.

El modo por defecto es ellipseMode(CENTER), que interpreta los primeros dos parámetros de elipse como el punto del centro, mientras que los parámetros tercero y cuarto son su ancho y altura.

ellipseMode(RADIUS) también usa los dos primeros parámetros de ellipse() como el punto central de la figura, pero usa los parámetros tercero y cuarto para especificar la mitad del ancho y de la altura de la figura.

ellipseMode(CORNER) interpreta los dos primeros parámetros de la elipse como la esquina superior izquierda de la figura, mientras que los parámetros tercero y cuarto son su ancho y altura.

ellipseMode(CORNERS) interpreta los dos primeros parámetros como la ubicación de una esquina de la caja contenedora de la elipse, y los parámetros tercero y cuarto como la esquina opuesta.

El parámetro debe ser escrito en mayúsculas porque Processing es un lenguaje sensible que distingue entre mayúsculas y minúsculas.

mode

int: CENTER, RADIUS, CORNER, o CORNERS

* rectMode()

rectMode(CORNER);  // El modo por defecto es CORNER
fill(255);  // Hace que el relleno sea blanco
rect(25, 25, 50, 50);  // Dibuja un rect blanco usando el modo CORNER

rectMode(CORNERS);  // Hace que el rectMode sea CORNERS
fill(100);  // Hace que el relleno sea gris
rect(25, 25, 50, 50);  // Dibuja un rect gris usando el modo CORNERS

rectMode(RADIUS);  // Hace que el rectMode sea RADIUS
fill(255);  // Hace que el relleno sea blanco
rect(50, 50, 30, 30);  // Dibuja un rect blanco usando el modo RADIUS

rectMode(CENTER);  // Hace que el rectMode sea CENTER
fill(100);  // Hace que el relleno sea gris
rect(50, 50, 30, 30);  // Dibuja un rect gris usando el modo CENTER

	Modifies the location from which rectangles are drawn by changing the way in which parameters given to rect() are intepreted.

Modifica la ubicación desde la que se dibujan los rectángulos, cambiando la forma en la que se interpretan los parámetros dados a rect().

El modo por defecto es rectMode(CORNER), que interpreta los dos primeros parámetros de rect() como la esquina superior izquierda de la figura, mientras que los parámetros tercero y cuarto son su ancho y altura.

rectMode(CORNERS) interpreta los dos primeros parámetros de rect() como la ubicación de una esquina, y los parámetros tercero y cuarto como la ubicación de la esquina opuesta.

rectMode(CENTER) interpreta los dos primeros parámetros de rect() como el punto central de la figura, mientras que los parámetros tercero y cuarto son su ancho y altura.

rectMode(RADIUS) también usa los dos primeros parámetros como el punto central, pero usa los parámetros tercero y cuarto para especificar la mitad del ancho y de la figura.

The parameter must be written in ALL CAPS because Processing is a case-sensitive language.

El parámetro debe ser escrito en mayúsculas porque Processing es un lenguaje que distingue entre mayúsculas y minúsculas.

mode

int: CORNER, CORNERS, CENTER, o RADIUS

* strokeCap()

Sets the style for rendering line endings. These ends are either squared, extended, or rounded, each of which specified with the corresponding parameters: SQUARE, PROJECT, and ROUND. The default cap is ROUND.

cap	int: either SQUARE, PROJECT, or ROUND

* strokeJoin()

Define el estilo de uniones que conectan los segmentos de línea. Estas uniones son en forma de inglete, biseladas, o  redondeadas y especificadas con los parámetros correspondientes MITER, BEVEL, y ROUND. El valor por defecto es MITER.

join

int: MITER, BEVEL, o ROUND

* strokeWeight()

strokeWeight(1);  // Por defecto
...
strokeWeight(4);  // Más grueso
...
strokeWeight(10);  // Bestial
...

weight

float: el peso (en pixeles) del trazo

### Vértice

* beginContour()

...
// Parte exterior de la figura, en el sentido del reloj
...
// Parte interior de la figura, en el sentido contrario al reloj
...

Usa las funciones beginContour() y endContour() para crear figuras negativas dentro de figuras como el centro de la letra 'O'. beginContour() empieza a grabar vértices para la figura y endContour() detiene la grabación. Los vértices que definen una figura negativa deben estar "orientados" en el sentido contrario a la figura exterior. Primero dibuja los vértices de la figura exterior en el sentido del reloj, y luego para figuras internas, dibuja los vértices en dirección contraria al reloj.

Estas funciones solo pueden ser usdadas dentro de un par beginShape()/endShape() y transformaciones como translate, rotate() y scale() no funcionan dentro de un par beginContour()/endContour(). Tampoco es posible usar otras figuras en el interior, como ellipse() o rect().

* beginShape()

El uso de las funciones beginShape() y endShape() permite la creación de figuras más complejas. beginShape() empieza a grabar vértices de la figura y endShape() detiene la grabación. El valor del parámetro kind indica cuáles tipos de figuras se crearán a partir de los vértices provistos. Si no se especifica un modo, la figura puede ser cualquier polígono irregular. Los parámetros disponibles para beginShape() son POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, y QUAD_STRIP (puntos, líneas, triángulos, abanico de triángulos, línea de triángulos, cuadriláteros y línea de cuadriláteros). Después de llamar a la función beginShape(), una serie de comandos vertex() deben venir a continuación. Para detener el dibujo de la figura, llama a endShape(). La función vertex() con dos parámetros especifica un punto en 2D y la función vertex() con tres parámetros especifica una posición en 3D. Cada figura será delineada con el color de trazo actual y el color de relleno actual.

Las transformaciones como translate(), rotate(), y scale() no funcionan dentro de beginShape(). Tampoco es posible usar otras figuras, como ellipse() or rect() dentro de beginShape().

Los renderers P2D y P3D permiten que stroke() y fill() sean alterados vértice por vértice, pero el renderer por defecto no lo permite. Las configuraciones como strokeWeight(), strokeCap(), y strokeJoin() no pueden ser cambiadas dentro de un bloque beginShape()/endShape() con ninguno de los renderers.

kin

int: POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, o QUAD_STRIP

* bezierVertex()

Especifica las coordenadas de vértices para curvas Bezier. Cada llamada a bezierVertex() define la posición de dos puntos de control y un punto ancla de una curva Bezier, agregando un nuevo segmento a la línea o figura. La primera vez que se usa bezierVertex() dentro de una llamada a beginShape(), debe estar precedido por una llamada a vertex() para definir el primer punto ancla. Esta función debe ser usada entre beginShape() y endShape() y solo cuando no hay un parámetro MODE especificado en beginShape(). El uso de la versión en 3D requiere hacer render con P3D (revisa la referencia de Ambiente para más información).

x2

float: la coordenada x del primer punto de control

y2

float: la coordenada y del primer punto de control

z2

float: la coordenada z del primer punto de control

x3

float: la coordenada x del segundo punto de control

y3

float: la coordenada y del segundo punto de control

z3

float: la coordenada z del segundo punto de control

x4

float: la coordenada x del punto ancla

y4

float: la coordenada y del punto ancla

z4

loat: la coordenada z del punto ancla

* curveVertex()

Especifica coordenadas de vértice para curvas. Esta función solo puede ser usada entre beginShape() y endShape() y solo cuando no se ha especificado el parámetro MODE en beginShape(). Los puntos primero y último en una serie de líneas curveVertex() serán usados para guitar el comienzo y el final de una curva. Se requiere un mínimo de cuatro puntos para dibujar una pequeña curva entre los puntos segundo y tercero. Si se añade un quinto punto en curveVertex() se diujará la curva entre los puntos segundo, tercero, y cuarto. La función curveVertex() es una implementación de splines de Catmull-Rom. El uso de una versión 3D requiere hacer render con P3D (revisa la referencia de Ambiente para más información).

x

float: la coordenada x del vértice

y

float: la coordenada y del vértice

z

float: la coordenada z del vértice

* endContour()

...
// Parte exterior de la figura, en el sentido del reloj
...
// Parte interior de la figura, en el sentido contrario del reloj
...

Usa las funciones beginContour() y endContour() par acrear figuras negativas dentro de figuras como el centro de la letra 'O'. beginContour() empieza a grabar vértices para la figura y endContour() detiene la grabación. Los vértices que definen una figura negativa deben estar "orientados" en la dirección opuesta que la figura exterior. Primero dibuja los vértices de la figura exterior en el sentido del reloj, luego para las figuras interiores, dibuja los vértices en el sentido contrario del reloj.

Estas funciones solo pueden ser usadas dentro un par beginShape()/endShape() y las transformaciones como translate(), rotate(), y scale() no funcionan dentro de un par beginContour()/endContour(). Tampoco es posible usar dentro otras figuras, como ellipse() o rect().

* endShape()

La función endShape() es la compañera de beginShape() y solo puede ser llamada después de beginShape(). Cuando se llama a endShape(), tos los datos de imagen definidos desde la llamada anterior a beginShape() son escritos en el buffer de imagen. La constante CLOSE como valor del parámetro MODE cierra la figura (para conectar el comienzo y el final).

mode

int: usa CLOSE para cerrar la figura

* quadraticVertex()

Especifica coordenadas de vértices de curvas Bezier cuadráticas. Cada llamada a quadraticVertex() define la posición de un punto de control y un punto ancla de una curva Bezier, agregando un nuevo segmento a una línea o figura. La primera vez que se usa quadraticVertex() dentro de una llamada a beginShape(), debe estar precedida por una llamada a vertex() para definir el primer punto ancla. Esta función debe estar entre beginShape() y endShape() y solo cuando no hay un parámetro especificado en beginShape(). El uso de la versión 3D requiere el renderer P3D (revisa la referencia de Ambiente para más información).

cx

float: la coordenada x del punto de control

cy

float: la coordenada y del punto de control

x3

float: la coordenada x del punto ancla

y3

float: la coordenada y del punto ancla

cz

float: la coordenada z del punto de control

z3

float: la coordenada z del punto ancla

* vertex()

// Dibujar vértices en 3D requiere P3D
// como parámetro en size()

// "laDefense.jpg" tiene dimensiones de 100x100 pixele
// y usa valores entre 0 y 100 para que los parámetros
// u" y "v" lo mapeen directametne a los puntos vértices.

Todas las figuras son construidas conectando una serie de vértices. vertex() es usado para especificar que las coordenadas de vértices de los puntos, líneas, trángulos, cuadriláteros y poligonales. Es usado exclusivamente dentro de las funciones beginShape() y endShape().

Dibujar un vértice en 3D usando el parámetro z requiere el parámetro P3D en combinación con size(), como se muestra en el ejemplo de arriba.

Esta función también se usa para mapear una textura a una geometría. La función texture() declara la textura a ser aplicada a la geometría y las coordenadas u y v definen el mapeo de la textura a la forma. Por defecto, las coordenadas usadas para u y v son especificadas en relación al tamaño de la imagen en pixeles, pero esta relación puede ser cambiada con textureMode().

v

float[]: parámetros de vértice, es un arreglo de floats de largo VERTEX_FIELD_COUNT (número de campos del vértice)

x

float: coordenada x del vértice

y

float: coordenada y del vértice

z

float: coordenada z del vértice

u

float: coordenada horizontal para el mapeo de la textura

v

float: coordenada vertical para el mapeo de la textura

### Carga & Muestra

* shape()

Dibuja figuras en la ventana visible. Para poder cargar correctamente las figuras, deben estar en la carpeta "data" del bosquejo. Selecciona "Add file..." (agregar archivo) desde el menú "Sketch" (bosquejo) para agregar la figura. Processing actualmente trabaja con SVG, OBJ y figuras creadas por el usuario. El parámetro shape (forma) especifica la forma a dibujar y los parámetros coordinate (coordenadas) definen la ubicación de la figura desde su esquina superior izquierda. La figura es mostrada en su tamaño original, a menos que los parámetros c y d especifiquen un tamaño distinto. La función shapeMode() puede ser usada para cambiar la forma en que los parámetros son interpretados.

shape

PShape: la figura a mostrar

x

float: coordenada x de la figura

y

float: coordenada y de la figura

a

float: coordenada x de la figura

b

float: coordenada y de la figura

c

float: ancho de la figura mostrada

d

float: altura de la figura mostrada

* shapeMode()

Modifica la ubicación desde donde se dibujan las figuras. El modo por defecto es shapeMode(CORNER), que especifica la ubicación de la esquina superior izquierda de la figura y usos los parámetros tercero y cuarto de shape() para especificar el ancho y la altura. La sintaxis shapeMode(CORNERS) usa los parámetros primero y segund de shape() para definir la ubicación de una esquina y usa los parámetros tercero y cuarto para definir la esquina opuesta. La sintaxis shapeMode(CENTER) dibuja la figura desde su punto central y usa los parámetros tercero y cuarto de shape() para especificar el ancho y la altura. El parámetro debe estar escrito en mayúsculas, porque Processing es un lenguaje que distingue entre mayúsculas y minúsculas.

mode

int: CORNER, CORNERS, o CENTER

## Entrada

### Ratón

* mouseButton

// Haz click dentro de la imagen y presiona
// los botones izquierdo y derecho del ratón
// para cambiar el valor del rectángulo
...

---

// Haz click dentro de la imagen y presiona
// los botones izquierdo y derecho del ratón
// para cambiar el valor del rectángulo

Cuando se presiona un botón del ratón, el valor de la variable de sistema mouseButton es definida como LEFT, RIGHT, o CENTER (izquierdo, derecho, centro), dependiendo del botón presionado. (Si no presiona ningún butón, mouseButton puede resetearse a 0. Por esa razón, es mejor usar mousePressed primero para comprobar si hay algún botón siendo presiomnado, y después comprobar el valor de mouseButton, como se muestra en los ejemplos de arriba).

* mouseClicked()

// Haz click dentro de la imagen y presiona
// para cambiar el valor del rectángulo
// después de que el ratón ha sido clickeado
...

La función mouseClickeD() es llamada después de que un botón del ratón ha sido presionado y luego soltado.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* mouseDragged()

// Arrastra (click y sostener) tu ratón a través de
// la imagen para cambiar el valor del rectángulo
...

La función mouseDragged() es llamada una vez por cada vez que el ratón se mueve mientras un botón está siendo presionado. (Si un botón no está siendo presionado, se llama en su lugar a mouseMoved()).

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* mouseMoved()

// Mueve el ratón a a través de la imagen
// para cambiar su valor
...

La función mouseMoved() es llamada cada vez que el ratón se mueve sin tener un botón presionado. (Si se presiona un botón, se llama en su lugar a mouseDragged()).

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* mousePressed()

// Haz click dentro de la imagen para
// cambiar el valor del rectángulo
...

La función mousePressed() solo se llama una vez por cada vez que un botón es presionado. La variable mouseButton (ver la referencia asociada) puede ser usada para determinar cuál botón fue presionado.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* mousePressed

// Haz click dentro de la imagen para
// cambiar el valor del rectángulo
...

La variable mousePressed almacena si un botón del ratón está actualmente presionado o no. El valor es true cuando cualquier botón del ratón está presionado, y false si ningún botón está presionado. La variable mouseButton (ver la referencia asociada) puede ser usada para determinar cuál botón ha sido presionado.

* mouseReleased()

// Haz click dentro de la imagen para
// cambiar el valor del rectángulo
...

La función mouseReleased() es llamada cada vez que se suelta un botón del ratón.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* mouseWheel()

La función mouseWheel() retorna valores positivos cuando la rueda del ratón es rotada hacia abajo (hacia el usuario), y valores negativos en la dirección contraria (hacia arriba o alejándose del usuario). En OS X con desplazamiento "natural", los valores son opuestos.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

event

MouseEvent: el MouseEvent (evento de ratón)

* mouseX

La variable de sistema mouseX siempre contiene la coordenada horizontal actual del ratón.

Observa que Processing solo puede hacer un seguimiento de la posición del ratón cuando está sobre la ventana actual. El valor por defecto de mouseX es 0, por lo que retornará 0 hasta que el ratón se mueva sobre la ventana del bosquejo. (Esto típicamente ocurre cuando un bosquejo es ejecutado al principio). Una vez que el ratón se mueve fuera de la ventana, mouseX continuará reporando su posición más reciente.

* mouseY

La variable de sistema mouseY siempre contiene la coordenada vertical actual del ratón.

Observa que Processing solo puede hacer un seguimiento de la posición del ratón cuando está sobre la ventana actual. El valor por defecto de mouseY es 0, por lo que retornará 0 hasta que el ratón se mueva sobre la ventana del bosquejo. (Esto típicamente ocurre cuando un bosquejo es ejecutado al principio). Una vez que el ratón se mueve fuera de la ventana, mouseX continuará reporando su posición más reciente.

* pmouseX

// Mueve de forma rápida el ratón para ver la
// diferencia entre la posición actual y la anterior
...

La variable de sistema pmouseX siempre contiene la coordenada horizontal del ratón en el cuadro anterior al cuadro actual.

Puedes encontrarte con que pmouseX y pmouseY tienen valores distintos cuando son referenciados dentro de draw() y dentro de eventos de ratón como mousePressed() y mouseMoved(). Dentro de draw(), pmouseX y pmouseY se actualizan solo una vez por cuadro (una vez por iteración dentro del bucle draw()). No obstante, dentro de los eventos del ratón, se actualizan cada vez que el evento es llamado. Si algunos de estos valores no son actualizados inmediatamente durante los eventos de ratón, entonces la posición del ratón puede ser leída solo una vez por cuadro, resultando en pequeños retrasos y una interacción con saltos. Si las variables de ratón siempre fueran actualizadas múltiples veces por cuadro, entonces algo como line(pmouseX, pmouseY, mouseX, mouseY) dentro de draw() tendría muchos saltos, porque pmouseX cambiaría múltiples veces entre llamadas a line().

Si quieres valores relativos al cuadro anterior, usa pmouseX y pmouseY dentro de draw(). Si quieres una respuesta continua, usa pmouseX y pmouseY dentro de las funciones de evento de ratón.

* pmouseY

// Mueve de forma rápida el ratón para ver la
// diferencia entre la posición actual y la anterior
...

La variable de sistema pmouseY siempre contiene la coordenada vertical del ratón en el cuadro anterior al cuadro actual.

Para más detalles sobre cómo pmouseY es actualizada dentro de los eventos de ratón y de draw(), ver la referencia de pmouseX.

### Teclado

* key

// Haz click en la ventana para enfocarla,
// y luego presiona la tecla 'B'.
...

La variable de sistema key siempre contiene el valor de la tecla más reciente que ha sido usada en el teclado (tanto presionada como soltada).

Para teclas no-ASCII, usa la variable keyCode. Las teclas incluidas en la especifación ASCII (BACKSPACE, TAB, ENTER, RETURN, ESC, y DELETE) no requieren comprobación para revisar si la tecla tien un código, y basta con que uses la variable key en lugar de keyCode. Si estás haciendo proyectos en distintas plataformas, nota que la tecla ENTER es usada comúnmente en PCS y UNIX, mientras que la tecla RETURN es usada en su lugar en Macintosh. Comprueba para tanto ENTER como RETURN para asegurarte que tu programa funcione en todas las plataformas.

Pueden existir problemas con la forma en que keyCode se comporta en distintos renderers y sistemas operativos. Pon atención a comportamientos inesperados cuando cambies de renderers o de sistema operativo.

* keyCode

La variable keyCode es usada para detectar teclas especiales como las flechas (UP (arriba), DOWN (abajo), LEFT (izquierda) y RIGHT (derecha)), y también las teclas ALT, CONTROL y SHIFT.

Cuando compruebas estas teclas, puede ser útil primero comprobar si la tecla es codificada. Esto se hace con el condicional if (key == CODED), como se muestra en el ejemplo anterior.

Para teclas no-ASCII, usa la variable keyCode. Las teclas incluidas en la especifación ASCII (BACKSPACE, TAB, ENTER, RETURN, ESC, y DELETE) no requieren comprobación para revisar si la tecla tien un código, y basta con que uses la variable key en lugar de keyCode. Si estás haciendo proyectos en distintas plataformas, nota que la tecla ENTER es usada comúnmente en PCS y UNIX, mientras que la tecla RETURN es usada en su lugar en Macintosh. Comprueba para tanto ENTER como RETURN para asegurarte que tu programa funcione en todas las plataformas.

Para los que estén familiarizados con Java, los valores de UP y DOWN son simplemente versiones más cortas de los eventos de tecla de Java KeyEvent.VK_UP y KeyEvent.VK_DOWN. Otros valores de keyCode pueden ser revisados en la referencia de Java de KeyEvent.

Pueden existir problemas con la forma en que keyCode se comporta en distintos renderers y sistemas operativos. Pon atención a comportamientos inesperados cuando cambies de renderers o de sistema operativo y estés usando teclas que no están menmcionadas en esta entrada de la referencia.

* keyPressed()

// Haz click en la imagen para enfocarla,
// y luego presiona cualquier tecla.
...

La función keyPressed() es llamada una vez y cada vez que se presiona una tecla. La tecla que fue presionada es almacenada en la variable key.

Para teclas no-ASCII, usa la variable keyCode. Las teclas incluidas en la especifación ASCII (BACKSPACE, TAB, ENTER, RETURN, ESC, y DELETE) no requieren comprobación para revisar si la tecla tien un código, y basta con que uses la variable key en lugar de keyCode. Si estás haciendo proyectos en distintas plataformas, nota que la tecla ENTER es usada comúnmente en PCS y UNIX, mientras que la tecla RETURN es usada en su lugar en Macintosh. Comprueba para tanto ENTER como RETURN para asegurarte que tu programa funcione en todas las plataformas.

Por la forma en que los sistemas operativos manejan las repeticiones de las teclas, mantener presionada una tecla puede causar múltiples llamadas a keyPressed(). La tasa de repetición es definida por el sistema operativo, y puede ser configurada de forma distinta en cada computador.

Nota que existe una variable booleana de nombre similar keyPressed. Revisa su página en la referencia para obtener más información.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* keyPressed

// Haz click en la imagen para enfocarla,
// y luego presiona cualquier tecla.

// Nota: el rectángulo en este ejemplo
// puede parpadear ya que el sistema operativo
// puede registrar la pulsación de una tecla
// largamente como una seguidilla de pulsaciones.
...

La variable boolean de sistema keyPressed es true cuando cualquier tecla es presionada y false cuando no hay teclas presionadas.

Nota que existe una función de nombre similar keyPressed(). Revisa su página en la referencia para obtener más información.

* keyReleased()

// Haz click en la imagen para enfocarla,
// y luego presiona cualquier tecla.

La función keyReleased() es llamada una vez y cada vez que una tecla es soltada. La tecla que es soltada se almacena en la variable key. Revisa la referencia de key y keyCode para más información.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

* keyTyped()

// Corre este programa para aprender cómo cada una
// de estas funciones se relaciona con las otras

void draw() { } // Se necesita un draw()  vacío para hacer que el programa siga corriendo

void keyPressed() {
  println("se presionó " + int(key) + " " + keyCode);
}

void keyTyped() {
  println("se escribió " + int(key) + " " + keyCode);
}

void keyReleased() {
  println("se soltó " + int(key) + " " + keyCode);
}

La función keyTyped() es llamada una vez y cada vez que una tecla es presionada, pero las teclas de acción como CTRL, SHIFT y ALT son ignoradas.

Por la forma en que los sistemas operativos manejan las repeticiones de las teclas, mantener presionada una tecla puede causar múltiples llamadas a keyTyped(). La tasa de repetición es definida por el sistema operativo, y puede ser configurada de forma distinta en cada computador.

Los eventos de ratón y teclado solo funcionan cuando un programa tiene draw(). Sin draw(), el código solo es ejecutado una vez y luego termina de escuchar los eventos.

### Archivos

* BufferedReader

...
// Abre el archivo del ejemplo de createWriter()
...
// Deja de leer si ocurre un error o el archivo está vacío
...

El objeto BufferedReader es usado para leer archivos línea a línea como objetos String individuales.

Desde el lanzamiento 0134 de Processing, todos los archivos cargados y grabados por la Processing API usan UTF-8. En lanzamientos anteriores, se usaba la codificación de la plataforma en uso, lo que causaba problemas cuando los archivos eran movidos a otras plataformas.

* createInput()

// Carga el archivo local 'data.txt' e inicializa un nuevo InputStream
...

Esta es una función atajo para programadores avanzados para inicializar y abrir un InputStream de Java. Es útil si quieres usar las facilidades provistas por PApplet para abrir fácilmente arvios desde la carpeta "data" o desde una URL, pero necesitas un objeto InputStream para poder usar otras partes de Java para tomar más control sobre cómo se usa el flujo (stream).

El filename pasado puede ser:
- Una URL, como en: createInput("http://processing.org/")
- El nombre de un archivo dentro de la carpeta "data" del bosquejo
- La dirección completa del archivo a ser abierto localmente (cuando se ejecuta como aplicación)

Si el ítem requerido no existe, retorna null. Si no está en línea, también comprobará si el usario está pidiendo un archivo cuyo nombre fue escrito ignorando mayúsculas. Si las mayúsculas usadas son distintas, se imprimirá un error en la consola. Esto ayuda a prevenir problemas que courren cuando un bosquejo es exportado a la web, donde las mayúsculas sí importan, en contraste con la ejecución dentro del ambiente de desarrollo de Processing en Windows o Mac OS, donde las mayúsculas se conservan pero se ignoran.

Si el archivo termina en .gz, el torrente automáticamente descomprimirá en formato gzip. Si no quieres la decompresión automática, usa la función relacionada createInputRaw().

En lanzamientos previos, esta función tenía el nombre openStream().

filename

String: el nombre del archivo a ser usada como entrada

* createReader()

...
// Abre el archivo del ejemplo de createWriter()
...
// Detiene la lectura porque ocurre un error o el archivo está vacío
...

Crea un objeto BufferedReader que puede ser usado para leer archivos línea a líena como objetos String individuales. Este es el complemento de la función createWriter(). Para más información sobre la clase BufferedReader y sus métodos como readLine() y close usados en el ejemplo arriba, por favor consulta una referencia de Java.

Empezando en el lanzamiento 0134 de Processing, todos los archivos cargados y grabados por la API de Processing usan la codificación UTF-8. En lanzamientos anteriores, se usaba la codificación por defecto de tu plataforma, lo que puede causar problemas cuando los archivos son movidos a otras plataformas.

filename

String: nombre del archivo a abrir

* launch()

...
  // draw() debe estar presente para que la función mousePressed() funcione
...

Trata de abrir una aplicación o archivo usando tu plataforma. El parámetro filename es un String que especifica el nombre del archivo y su ubicación. El parámetro location debe ser una dirección completa, o el nombre de un ejecutable en el PATH del sistema. En la mayoría de los casos, usar una dirección completa es la mejor opción, en contraste con depender del PATH del sistem. Asegúrate de hacer que el archivo sea ejecutable antes de tratar de abrirlo (chmod +x).

Esta función (a grandes rasgos) emula lo que ocurre cuando haces doble-click en una aplicación o documento en el Finder de macOs, el Explorer de Windows, o tu administrador favorito de Linux. Si estás tratando de correr funciones de línea de comando, usa el comando exec() en lugar de este (ver más abajo).

Esta función se comporta de forma distinta en cada plataforma. En Windows, los parámetros son enviados a la Windows shell a través de "cmd /c". En Mac Os X, se usa el comando "open" (escribe "man open" en Terminal.app para revisar la documentación). En Linux, primero trata de usar gnome-open, a continuación kce-open, pero si ninguno está disponible, envía el comando a la shell y reza para que ocurra algo útil.

Para los usuarios familiarizados con Java, esto no es lo mismo que Runtime.exec(), porque se antepone el comando launcher.  En vez de esto, la función exec(String[]) es un atajo de Runtime.getRuntime.exec(String[]). La función exec() está documentada en la documentación de Java en la clase PApplet.

args

String[]: argumentos para launcher, por ejemplo un nombre de archivo.

* loadBytes()

// Abre un archivo y lee sus datos binarios
...
// Imprime cada vallor, de 0 a 255
...
// Cada diez números, empieza una nueva línea
...
// los bytes van de -128 a 127, con esto se convierten a entre 0 y 255
...
// Imprime una línea en blanco al final
...

Lee los contenidos de un archivo y los ubica en un arreglo de bytes. Si el nombre del arcihov es usada como parámetro, como en el ejemplo anterior, el archivo debe estar dentro de la carpeta "data" del bosquejo.

De forma alternativa, el archivo puede ser cargado desde cualquier ubicación del computador local usando una dirección absoluta (algo que empieza con / en Unix y Linux, o con una letra de disco en Windows), o también el parámetro filename puede ser una URL o un archivo en línea.

Si el archivo no está disponibler o si ocurre un error, retornará el valor null y se imprimirá un mensaje de error en la consola. El mensaje de error no detiene la ejecución del programa, sin embargo el valor null podría causar una NullPointerException si tu código no comprueba si el valor retornado es null.

filename

String: nombre de un archivo dentro de la carpeta "data" o una URL

* loadJSONArray()

// El siguiente archivo JSON corto llamado "data.json"
// es procesado por el código a continuación.
// Debe estar dentro de la carpeta "data" del proyecto.
//

...

// El bosquejo imprime:
...

Carga un arreglo de objetos JSON desde la carpeta "data" o desde una URL, y retorna un arreglo JSON. Según la sintaxis estándar de JSON, el arreglo fdebe estar demarcado por corchetes [], y cada objeto dentro del arreglo debe estar separado por comas.

Todos los archivos cargados y grabados por la Processing API usan UTF-8.

filename

String: nombre de un archivo dentro de la carpeta "data" o una URL

* loadJSONObject()

// El siguiente archivo JSON corto llamado "data.json"
// es procesado por el código a continuación.
// Debe estar dentro de la carpeta "data" del proyecto.
//

...

// El bosquejo imprime:
// 0, Panthera leo, Lion

Carga un archivo JSON desde la carpeta "data" o una URL, y retorna un objeto JSON.

Todos los archivos cargados y grabados por la Processing API usan UTF-8.

filename

String: nombre de un archivo en la carpeta "data" o una URL

* loadStrings()

...
println("hay " + lines.length + " lineas");
...

---

...
println("hay " + lines.length + " líneas");
...

Lee los contenidos de un archivo y crea un arreglo de String de sus líneas individuales. Si se usa el nombre de un archivo como parámetro, como en el ejemplo anterior, el archivo debe estar dentro de la carpeta "data" del bosquejo.

De forma alternativa, el archivo puede ser cargado desde cualquier parte del computador local usando una dirección absoluta (algo que empiece con / en Unix y Linux, o con una letra de disco en Windows), o el parámetro filename también puede ser una URL de un archivo en línea.

Si el archivo no está disponible si un error ocurre, retornará null y se imprimirá un mensaje de error en la consola. El mensaje de error no detendrá el programa, sin embargo el valor null podría causar una NullPointerException si tu código no comprueba si el valor retornado es null.

Desde el lanzamiento 0134 de Processing, todos los archivos cargados y grabados por la Processing API usan codificación UTF-8. En lanzamientos anteriores, se usaba la codificación por defecto de tu plataforma, lo que causaba problemas cuando los archivos eran movidos a otras plataformas.

filename: String: nombre del archivo o URL a cargar

* loadTable()

// El siguiente archivo CSV corto llamado "mammals.csv"
// es procesado por el código a continuación.
// Debe estar dentro de la carpeta "data" del proyecto
...
println(table.getRowCount() + " filas en la tabla en total");
...
println(name + " (" + species + ") tiene la identidad " + id);
...

}

// El bosquejo imprime:
// 3 filas en la tabla en total
// Goat (Capra hircus) tiene la identidad 0
// Leopard (Panthera pardus) tiene la identidad 1
// Zebra (Equus zebra) tiene la identidad 2

Lee contenido de un archivo o URL y crea un objeto Table con sus valores. Si se especifica un archivo, debe estar ubicado dentro de la carpeta "data" del bosquejo. El parámetro filename también puede ser una URL de un archivo en línea. El filename dee o terminar en una extensión o se debe especificar una extensión con el parámetro options. Por ejemplo, para usar datos separados por tabulación, incluye "tsv" en el parámetro options si el nombre del archivo o la URL no termina en .tsv. Nota: si hay una extensión en ambas partes, se usará la extensión especificada por options.

Si el archivo posee una fila de encabezado, incluye "header" en el parámetro options. Si el archivo no posee una fila de encabezado, simplemente omite la opción "header".

Cuando especificas tanto un header como un tipo de archivo como parámetro options, separa las opciones con comas así: loadTable("data.csv", "header, tsv")

Todos los archivos cargados y grabados por la Processing API usan UTF-8.

filename

String: nombre de un archivo en la carpeta "data" o una URL.

options

String: puede contener "header", "tsv", "csv" o "bin" separados por comas.

* loadXML()

// El siguiente archivo XML corto llamado "mammals.xml"
// es procesado por el código a continuación.
// Debe estar dentro de la carpeta "data" del proyecto
...
// El bosquejo imprime:
...

Lee los contenidos de un archivo o URL y crea un objeto XML con sus valores. Si se especifica un archivo, debe estar ubicado en la carpeta "data" del bosquejo. El parámetro filenae también puede ser una URL de un archivo en línea.

Todos los archivos cargados y grabados por la Processing API usan UTF-8. Si necesitas cargar un archivo XML que no está en formato UTF-8, revisa la referencia de desarrollador del objeto XML.

filename

String: nombre de un archivo en la carpeta "data" o una URL.

* parseJSONArray()

...
println("Arreglo JSON no pudo ser procesado");
...
// El bosquejo imprime:
...

Toma un String, procesa sus contenidos y retorna un arreglo JSON. Si el String no contiene datos en formato JSONArray o no puede ser procesado, retorna el valor null.

parseJSONArray() es de mayor utilidad cuando se obtienen datos dinámicamente, como en el caso de APIs externas. Normalmente, los resultados de una API pueden ser grabados como un String, y luego convertidos a estructura de arreglo JSON usando parseJSONArray(). Asegúrate de comprobar si null fue retornado antes de realizar operaciones en el nuevo arreglo JSON, en caso de que el contenido del String no pueda ser procesado.

Si tus datos ya están un archivo JSON en la carpeta "data", es más simple usar loadJSONArray().

input

String: String a ser procesado como un arreglo JSON

* parseJSONObject()

...
println("El JSONObject no pudo ser procesado");
...
// El bosquejo imprime:
...

Toma un String, procesa sus contenidos y retorna un objeto JSON. Si el String no contiene datos en formato JSONObject o no puede ser procesado, retorna el valor null.

parseJSONObject() es de mayor utilidad cuando se obtienen datos dinámicamente, como en el caso de APIs externas. Normalmente, los resultados de una API pueden ser grabados como un String, y luego convertidos a estructura de objeto JSON usando parseJSONObject(). Asegúrate de comprobar si null fue retornado antes de realizar operaciones en el nuevo objeto JSON, en caso de que el contenido del String no pueda ser procesado.

Si tus datos ya están un archivo JSON en la carpeta "data", es más simple usar loadJSONObject().

input

String: String a ser procesada como un objeto JSON

* parseXML()

...
println("XML no pudo ser procesado.");
...
// El bosquejo imprime:
...

Toma un String, procesa sus contenidos, y retorna un objeto XML. Si el String no contiene datos XML o no puede ser procesado, retorna el valor null.

parseXML() es de mayor utilidad cuando se obtienen datos dinámicamente, como en el caso de APIs externas. Normalmente, los resultados de una API pueden ser grabados como un String, y luego convertidos a estructura de objeto XML usando parseXML(). Asegúrate de comprobar si null fue retornado antes de realizar operaciones en el nuevo objeto XML, en caso de que el contenido del String no pueda ser procesado.

Si tus datos ya existen como un archivo XML en la carpeta "data", es más simple usar loadXML().

xmlString

String: el contenido a ser procesado como XML

* selectFolder()

...
  selectFolder("Selecciona una carpeta a ser procesada:", "folderSelected");
...
println("La ventana fue cerrada o el usuario canceló la operación.");
...
println("El usuario seleccionó " + selection.getAbsolutePath());
...

Abre una ventana de diálogo específica a la plataforma, para seleccionar una carpeta. Después de que se realiza la selección, la selección será pasada a la función 'callback'. Si la ventana de diálogo es cerrada o cancelada, se enviará el valor null a la función, para que el programa no permanezca esperando un ingreso adicional. El callback es necesario por la forma en que opera el threading.

prompt

String: mensaje para el usuario

callback

String: nombre del método a ser llamado cuando se haga la selección

* selectInput()

...
  selectInput("Selecciona un archivo a ser procesado:", "fileSelected");
...
println("La ventana fue cerrada o el usuario canceló la operación.");
...
println("El usuario selección " + selection.getAbsolutePath());
...

Abre una ventana de diálogo específica a la plataforma, para seleccionar el archivo a ser ingresado. Después de que se realiza la selección, el File seleccionado será pasado a la función 'callback'. Si la ventana de diálogo es cerrada o cancelada, se enviará el valor null a la función, para que el programa no permanezca esperando un ingreso adicional. El callback es necesario por la forma en que opera el threading.

prompt

String: mensaje para el usuario

callback

String: nombre del método a ser llamado cuando se haga la selección

### Tiempo & Fechas

* day()

int d = day();    // Valores entre 1 - 31
int m = month();  // Valores entre 1 - 12
int y = year();   // 2003, 2004, 2005, etc.
...

Processing se comunica con el reloj en tu computador. La función day() retorna el día actual como un valor entre 1-31.

* hour()

...
int s = second();  // Valores entre 0 - 59
int m = minute();  // Valores entre 0 - 59
int h = hour();    // Valores entre 0 - 23
...

Processing se comunica con el reloj en tu computador. La función hour() retorna la hora actual como un valor entre 0-23.

* millis()

Retorna el número de milisegundos (milésimas de segundo) que han transcurrido desde que empezó la ejecución del programa. Esta información se usa frecuentemente para temporizar eventos y secuencias de animación.

* minute()

...
int s = second();  // Valores entre 0 - 59
int m = minute();  // Valores entre 0 - 59
int h = hour();    // Valores entre 0 - 23
...

Processing se comunica con el reloj en tu computador. La función minute() retorna el minuto actual como un valor entre 0-59.

* month()

int d = day();    // Valores entre 1 - 31
int m = month();  // Valores entre 1 - 12
int y = year();   // 2003, 2004, 2005, etc.
...

Processing se comunica con el reloj en tu computador. La función month() retorna el mes actual como un valor entre 1-12.

* second()

...
int s = second();  // Valores entre 0 - 59
int m = minute();  // Valores entre 0 - 59
int h = hour();    // Valores entre 0 - 23
...

Processing se comunica con el reloj en tu computador. La función second() retorna el segundo actual como un valor entre 0-59.

* year()

int d = day();    // Valores entre 1 - 31
int m = month();  // Valores entre 1 - 12
int y = year();   // 2003, 2004, 2005, etc.
...

Processing se comunica con el reloj en tu computador. La función year() retorna el año actual como un entero (2003, 2004, 2005, etc).

## Salida

### Área de texto

* print()

...
// Este programa escribe en la consola:
...

---

print("comienzo- ");
...
print("f es " + f + " y i es " + 1024);
String s = " -fin";
...
// Este programa escribe en la consola:
// "comienzo- f es 0.3 y i es 1024 -fin"

La función print() escribe en el área de la consola, el rectángulo negro en la parte inferior del ambiente Processing. Esta función es útil cuando se quieren revisar los datos que un programa produce. La función relacionada println() funciona como print(), pero crea una nueva línea de texto por cada llamada a la función. Se puede pasar más de un parámetro a la función, separados por comas. De forma alternativa, los elementos individuales pueden ser separados por comillas dobles ("") y el operador suma (+)Esta función es útil cuando se quieren revisar los datos que un programa produce. La función relacionada println() funciona como print(), pero crea una nueva línea de texto por cada llamada a la función. Se puede pasar más de un parámetro a la función, separados por comas. De forma alternativa, los elementos individuales pueden ser separados por comillas dobles ("") y el operador suma (+).

Cuando se usa print() con un objeto la salida será null, una ubicación en memoria parecida a "@10be08," o el resultado del método toString() del objeto que está siendo impreso. Los ususarios avanzados pueden querer una salida más útil cuando llaman a print con sus propias clases y para esto pueden agregar a la clase un método toString() que retorne un String.

Observa que la consola es relativamente lenta. Funciona bien para mensajes ocasionales, pero no aguante salida en tiempo real a alta velocidad (como 60 cuadros por segundo). También debería notarse que un print() dentro de un bucle puede a veces atascar el programa, haciendo que la ejecución se detenga.

what

String, float, char, boolean, o byte: datos a imprimir en consola

variables

Objeto[]: lista de datos, separados por comas.

* printArray()

...
// El código de arriba imprime:
...

La función printArray() escribe datos del arreglo en el área de texto de la consola del ambiente de Processing. Se introduce una línea nueva entre cada elemento del arreglo. Esta función solo es capaz de imprimir arreglos de una dimensión.

Observa que la consola es relativamente lenta. Funciona bien para mensajes ocasionales, pero no aguante salida en tiempo real a alta velocidad (como 60 cuadros por segundo).

what	Object: arreglo de una dimensión

* println()

String s = "El largo es ";
...
// Este programa escribe en la consola:
// El largo es
...

---

print("inicio- ");
print("f es " + f + " y i es " + 1024);
String s = " -fin";
...
// Este programa escribe en la consola:
// "inicio- f es 0.3 y i es 1024 -fin"

La función println() escribe en el área de la consola, el rectángulo negro en la parte inferior del ambiente Processing.  Esta función es útil cuando se quieren revisar los datos que un programa produce. La función relacionada println() funciona como print(), pero crea una nueva línea de texto por cada llamada a la función. Se puede pasar más de un parámetro a la función, separados por comas. De forma alternativa, los elementos individuales pueden ser separados por comillas dobles ("") y el operador suma (+).

Antes de Processing 2.1, println() era usado para escribir arreglos de datos en la consola. Ahora, usa printArray() para escribir datos de un arreglo en la consola.

Observa que la consola es relativamente lenta. Funciona bien para mensajes ocasionales, pero no aguante salida en tiempo real a alta velocidad (como 60 cuadros por segundo). También debería notarse que un println() dentro de un bucle puede a veces atascar el programa, haciendo que la ejecución se detenga.

what

Object, String, float, char, boolean, o byte: datos a imprimir en la consola

variables

Objeto[]: lista de datos, separados por comass

### Imagen

* save()

...
// Graba un archivo TIFF llamado "diagonal.tif"
...
//  Graba un archivo TARGA llamado "cross.tga"
...

Graba una imagen desde la ventana mostrada. Agrega una extensión de archivo al nombre del archivo, para indicar el formato de archivo a ser usado: ya sea TIFF (.tif), TARGA (.tga), JPEG (.jpg), o PNG (.png). Si no se incluye una extensión en el nombre del archivo, la imagen se grabará en formato TIFF y se agregará la extensión .tif al nombre. Estos archivos son grabados en la carpeta del bosquejo, que puede ser abierta seleccionando la opción "Show sketch folder" (mostrar la carpeta del bosquejo) en el menú "Sketch" (bosquejo). De forma alternativa, los archivos pueden ser grabados en cualquier ubicación del computador usando una ruta absoluta (algo que empiece con / en Unix y Linux, o una letra de disco en Windows).


Todas las imágenes grabadas a partir de la ventana principal de dibujado serán opacas. Para grabar imágenes sin fondo, usa createGraphics().

filename

String: cualquier secuencia de letras y números

* saveFrame()

...
// Graba cada cuadro como screen-0001.tif, screen-0002.tif, etc.
...

---

...
// Graba cada cuadro como line-000001.png, line-000002.png, etc.
...

Graba una secuencia numerada de imágenes, generando una imagen cada vez que la función es ejecutada. Para grabar una imagen que es idéntica a la de la ventana mostrada, ejecuta la función al final de draw() o dentro de eventos de ratón o teclado como mousePressed() o keyPressed(). Usa el programa Movie Maker en el menú Tools (herramientas) para combinar estas imágenes y hacer una película.

Append a file extension, to indicate the file format to be used: either TIFF (.tif), TARGA (.tga), JPEG (.jpg), or PNG (.png). Image files are saved to the sketch's folder, which may be opened by selecting "Show Sketch Folder" from the "Sketch" menu.

Si se usa saveFrame() sin parámetros, graba archivos de la forma screen-0000.tif, screen-0001.tif, y así. Puedes especificar el nombre de la secuencia con el parámetro filename (nombre de archivo), incluyendo signos numerales (####), los que serán reemplazados por el valor actual de frameCount. (El número de signos numerales es usado par determinar el número de dígitos a incluir en los nombres de archivo).

Alternatively, the files can be saved to any location on the computer by using an absolute path (something that starts with / on Unix and Linux, or a drive letter on Windows).

All images saved from the main drawing window will be opaque. To save images without a background, use createGraphics().

filename	String: any sequence of letters or numbers that ends with either ".tif", ".tga", ".jpg", or ".png"

HEREIAM


### Archivos
* beginRaw()

* beginRecord()

* createOutput()

* createWriter()

* endRaw()

* endRecord()

* PrintWriter

* saveBytes()

* saveJSONArray()

* saveJSONObject()

* saveStream()

* saveStrings()

* saveTable()

* saveXML()

* selectOutput()


## Transformación

* applyMatrix()

* popMatrix()

* printMatrix()

* pushMatrix()

* resetMatrix()

* rotate()

* rotateX()

* rotateY()

* rotateZ()

* scale()

* shearX()

* shearY()

* translate()

## Luces, Cámara

### Luces

* ambientLight()

size(100, 100, P3D);
background(0);
noStroke();
// Las esferas son blancas por defecto por lo que
// la luz ambiente cambia su color
ambientLight(51, 102, 126);
translate(20, 50, 0);
sphere(30);
translate(60, 0, 0);
sphere(30);

...

Añade una luz ambiente. La luz ambiente no proviene de una dirección específica, los rayos de luz han rebota tanto alrededor que los objetos están iluminados de forma pareja desde todos los lados. Las luces ambientes son casi siempre usadas en combinación con otros tipos de luces. Las luces deben ser incluidas en draw() para ser persistentes en un programa en bucle. Si se ubican en setup() en un programa con bucle causará que solo tengan efecto durante la primera ejecución del bucle. Los parámetros v1, v2 y v3 son interpretados como valores RGB o HSB, dependiendo del modo actual de color.

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

x: float: coordenada x de la luz

y: float: coordenada y de la luz

z: float: coordenada z de la luz

* directionalLight()

Añade una luz direccional. La luz direccional proviene de una dirección: es más potente cuando choca contra una superficie perpendicularmente, y más débil si choca en un ángulo pequeño. Después de chocar contra una superficie, la luz direccional se dispersa en todas direcciones. Las luces necesitan ser incluidas en draw() para ser persistentes en un programa en bucle. Si se ubican en setup() en un programa con bucle causará que solo tengan efecto durante la primera ejecución del bucle. Los parámetros v1, v2 y v3 son interpretados como valores RGB o HSB, dependiendo del modo actual de color. Los parámetros nx, ny y nz especifican la dirección de orientación de la luz. Por ejemplo, configurando ny como -1 causará que la gemoetría sea iluminada desde abajo (ya que la luz estará orientada directamente hacia arriba).

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

nx: float: dirección a lo largo del eje x

ny: float: dirección a lo largo del eje y

nz: float: dirección a lo largo del eje z

* lightFalloff()

Define las tasas de caída para luces puntuales, luces foco y luces ambientales. Como fill(), afecta solo a los elementos creados a continuación en el código. El valor por defecto es lightFalloff(1.0, 0.0, 0.0), y los parámetros son usados para calcular la caída con la siguiente ecuación:

d = distancia desde la posición de la luz hasta la posición del vértice
caída = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)

Pensar en una luz ambiental con una caída puede ser complejo. Si quieres que una región de tu escena sea iluminada ambientalmente con un color y otra región que sea iluminada ambientalmente con otro color, puedes usar una luz ambiental con ubicación y caída. Puedes pensarlo como una luz puntual que no le importa la dirección en que la superficie apunta.

constant: float: valor constante para determinar la caída

linear: float: valor lineal para determinar la caída

quadratic: 	float: valor cuadrático para determinar la caída

* lights()

size(100, 100, P3D);
background(0);
noStroke();
// Define la luz ambiente
// y la direccional por defecto
lights();
translate(20, 50, 0);
sphere(30);
translate(60, 0, 0);
sphere(30);

void setup() {
  size(100, 100, P3D);
  background(0);
  noStroke();
}

void draw() {
  // Incluye lights() al comienzo
  // de draw() para hacer que sean persistentes
  lights();
  translate(20, 50, 0);
  sphere(30);
  translate(60, 0, 0);
  sphere(30);
}

Define los valores por defecto de luz ambiental, luz direccional, caída y de espejado. Los valores por defecto son ambientLight(128, 128, 128), directionalLight(128, 128, 128, 0, 0, -1), lightFalloff(1, 0, 0), y lightSpecular(0, 0, 0). Lights() necesita ser incluido dentro de draw() para permanecer persistente en un programa en bucle. Si se ubica en el setup() de un programa en bucle causará que solo tenga efecto la primera vez que corre el bucle.

* lightSpecular()

Define los colores de espejado de las luces. Como fill(), solo afecta a los elementos creados de forma posterior en el código. Espejado se refiere a luz que rebota desde una superficie en una dirección particular (en contraste con rebotar en todas direcciones como una luz difusa) y es usada para destacar. La calidad de espejado de una luz interactúa con las cualidades de espejado del material definidas a través de las fuciones specular() y shininess().

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

* noLights()

Deshabilita toda la iluminación. La iluminación se apaga por defecto y se habilita con la función lights. Esta función puede ser usada para deshabilitar la luz para que la geometría 2d (que no requiere iluminación) pueda ser dibujada después de un conjunto de geometría 3D iluminada.

* normal()

Define el vector normal actual. Se usa para dibujar figuras y superficies tridimensionales, donde normal() especifica un vector perpendicular a la superficie de la figura que, a su vez, determina cómo le afecta la luz. Processing automáticamente trata de asignar normales a las figuras, pero como es imperfecto, esta es una mejor opción cuando quieres más control. Esta función es idéntica a glNormal3f() en OpenGL.

nx: 	float: dirección x

ny: 	float: dirección y

nz: 	float: dirección z

* pointLight()

Lights need to be included in the draw() to remain persistent in a looping program. Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. The v1, v2, and v3 parameters are interpreted as either RGB or HSB values, depending on the current color mode. The x, y, and z parameters set the position of the light.

Añade una luz puntal. Las luces necesitan ser incluidas en draw() para ser persistentes en un programa en bucle. Si se ubican en setup() en un programa con bucle causará que solo tengan efecto durante la primera ejecución del bucle. Los parámetros v1, v2 y v3 son interpretados como valores RGB o HSB, dependiendo del modo actual de color. Los parámetros x, y y z especifican la posición de la luz.

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

x: float: coordenada x de la luz

y: float: coordenada y de la luz

z: float: coordenada z de la luz

* spotLight()

...
int concentration = 600;  // Prueba valores 1 -> 10000
...

Añade una luz tipo foco. Las luces necesitan ser incluidas en draw() para ser persistentes en un programa en bucle. Si se ubican en setup() en un programa con bucle causará que solo tengan efecto durante la primera ejecución del bucle. Los parámetros v1, v2 y v3 son interpretados como valores RGB o HSB, dependiendo del modo actual de color. Los parámetros x, y y z especifican la posición de la luz y nx, ny, nz especifcan la dirección de la luz. El parámetro angle afecta el ángulo del cono del foco, mientras que concentration define el sesgo de la luz enfocándose hacia el centro del cono.

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

x: float: coordenada x de la luz

y: float: coordenada y de la luz

z: float: coordenada z de la luz

nx: float: dirección a lo largo del eje x

ny: float: dirección a lo largo del eje y

nz: float: dirección a lo largo del eje z

angle: 	float: ángulo del cono del foco

concentration: 	float: exponente que determina el sesgo del centro del cono

### Cámara

* beginCamera()

Las funciones beginCamera() y endCamera() permiten la configuración avanzada del espacio de la cámara. Estas funciones son útiles si quieres tener más control sobre el movimiento de la cámara, aunque para la mayoría de los usuarios, la función camera() será suficiente.

Las funciones de cámara reemplazarán cualquier transformación (como rotate() o translate()) que hayan ocurrido antes de ellas en draw(), pero no reemplazarán automáticamente la transformada de cámara en sí misma. Por esta razón, las funciones de cámara debería estar al comienzo de draw() (para que las transformaciones ocurran después), y la función camera() puede ser usada después de beginCamera() si necesitas resetear la cámara antes de aplicar transformaciones.

Esta función define el modo matriz de la matriz de cámara por lo que funciones como translate(), rotate(), applyMatrix() y resetMatrix() afectarán a la cámara. beginCamera() deberá siempre ser usada con un endCamera() a continuación y pares de beginCamera() y endCamera() no pueden ser anidados.

* camera()

Define la posición de la cámara al definir la posición del ojo, el centro de la escena, y cuál eje está apuntando hacia arriba. Mover la posición del ojo y la dirección a la que apunta (el centro de la escena) permite que las imágenes sean vistas desde distintos ángulos. La versión sin parámetros define la cámara en la posición por defecto, apuntando al centro de la ventana mostrada con el eje Y hacia arriba. Los valores por defecto son camera(width/2.0, height/2.0, (height/2.0) / tan(PI*30.0 / 180.0), width/2.0, height/2.0, 0, 0, 1, 0). Esta función es similar a gluLookAt() en OpenGL, pero primero elimina la configuración actual de la cámara.

eyeX: float: coordenada x del ojo

eyeY: float: coordenada y del ojo

eyeZ: float: coordenada z del ojo

centerX: float: coordenada x del centro de la escena

centerY: float: coordenada y del centro de la escena

centerZ: float: coordenada z del centro de la escena

upX: float: usualmente 0.0, 1.0, o -1.0

upY: float: usualmente 0.0, 1.0, o -1.0

upZ: float: usualmente 0.0, 1.0, o -1.0

* endCamera()

Las funciones beginCamera() y endCamera() permiten la configuración avanzada del espacio de la cámara. Por favor revisa la referencia de beginCamera() para leer una descripción del uso de las funciones.

* frustum()

Define una matriz de perspectiva definida por sus parámetros.

Un frustum es una forma geométrica: una pirámide con su parte superior recortada. Con el ojo del espectador en la parte superior imaginaria de la pirámide, los seis planos del frustrum actuán como planos de recorte cuando se hace render una vista 3D. Así, cualquier forma dentro de los planos de recorte hace render y es visible; y cualquier cosa fuera de estos planos no es visible.

Definir el frustum tiene el efecto de cambiar la perspectiva con la que la escena es renderizada. Esto puede ser logrado de forma más simple en muchos casos usando perspective().

Nota que el valor near (cercano) debe ser mayor que cero (ya que la punta de la "pirámide" frustum no puede converger "detrás" del espectador). De forma similar, el valor far (lejano) debe ser mayor que el valor near (ya que el plano "far" del frustum debe estar "más allá" del espectador que el plano cercano).

Funciona como glFrustum, excepto que elimina la matriz actual de perspectiva en vez de multiplicarla con sí misma.

left: float: coordenada izquierda del plano recortante

right: float: coordenada derecha del plano recortante

bottom: float: coordenada inferior del plano recortante

top: float: coordenada superior del plano recortante

near: float: componente cercano del plano recortante; debe ser mayor que cero

far: float: componente lejano del plano recortante; debe ser mayor que el componente near

* ortho()

...
ortho(-width/2, width/2, -height/2, height/2); // Lo mismo que ortho()
...

Define una proyección ortogonal y define un volumen recortante paralelo. Todos los objetos con la misma dimensión aparecen del mismo tamaño, independiente de si están cerca o lejos de la cámara. Los parámetros de esta función especifican el volumen recortante donde left y right son los valores mínimo y máximo de x, top y bottom son los valores mínimo y máximo de y, y near y far son los valores mínimo y máximo de z. Si no se dan parámetros, se usan los valores por defecto: ortho(-width/2, width/2, -height/2, height/2).

left: float: plano izquierdo del volumen recortnte

right: float: plano derecho del volumen recortnte

bottom: float: plano inferior del volumen recortnte

top: float: plano superior del volumen recortnte

near: float: distancia máxima desde el origen al espectador

far: float: distancia máxima desde el origen lejano al espectador

* perspective()

// Recrea la perspectiva por defecto
...

Define una proyección de perspectiva aplicando acortamiento, que hace que los objetos distantes aparezcan más pequeños que los lejanos. Los parámetros definen un volumen de visión con la forma de una pirámide truncada. Los objetos cercanos a la parte frontal del volumen aparecen con su tamaño real, mientras que los objetos más lejanos aparecen más pequeños. Esta proyección simula la perspectiva del mundo de forma más precisa que una proyección ortogonal. La versión de perspective() sin parámetros define la perspectiva por defecto y la versión de cuatro paráemtros le permite al programador definir el área de forma precisa. Los valores por defecto son perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0), donde cameraZ es ((height/2.0) / tan(PI*60.0/360.0)).

fovy: float: ángulo de campo de visión (en radianes) para la dirección vertical

aspect: float: razón entre ancho y alto

zNear: float: posición z del plano recortante más cercano

zFar: float: posición z del plano recortante más lejano

* printCamera()

...
// El programa anterior imprime estos datos:
...

Imprime la matriz actual de cámara en la consola (la ventana de texto en la parte inferior de Processing).

* printProjection()

...
// El programa anterior imprime estos datos:
...

Prints the current projection matrix to the Console (the text window at the bottom of Processing)

Imprime la matriz actual de proyección en la consola (la ventana de texto en la parte inferior de Processing).

### Coordenadas

* modelX()

void setup() {
  size(500, 500, P3D);
  noFill();
}

void draw() {
  background(0);

  pushMatrix();
  // empieza en el centro de la pantalla
  translate(width/2, height/2, -200);     
  // un poco de rotación aleatoria para hacerlo más interesante
  rotateY(1.0); //rotaciión en Y);
  rotateZ(2.0); //rotación en Z);
  // rota X un poco en cada cuadro
  rotateX(frameCount / 100.0);
  // traslación a partir del centro
  translate(0, 150, 0);

  // dibuja el borde una caja blanca en (0, 0, 0)
  stroke(255);
  box(50);

  // la caja fue dibujada en (0, 0, 0), almacena esa posición
  float x = modelX(0, 0, 0);
  float y = modelY(0, 0, 0);
  float z = modelZ(0, 0, 0);
  // elimina todas las otras transformaciones
  popMatrix();

  // dibuja otra caja en la misma coordenada (x, y, z) como la anterior
  pushMatrix();
  translate(x, y, z);
  stroke(255, 0, 0);
  box(50);
  popMatrix();
}

Retorna la posición tridimensional X, Y, Z en el espacio del modelo. Esta función retorna el valor de X para una coordenada dada basada en el conjunto actual de transformaciones (scale, rotate, translate, etc). El valor X puede ser usado para situar un objeto en el espacio de forma relativa a la ubicación del punto original una vez que las transformaciones ya no están siendo usadas.

En el ejemplo, las funcioens modelX(), modelY(), y modelZ() almacenan la ubicación de una caja en el espacio después de haber sido situada usando una serie de comandos translate y rotate. Después de la ejecución de popMatrix(), estas transformaciones ya no son aplicadas, pero la coordenada (x, y, z) retornada por las funciones model es usada para ubicar otra caja en la misma ubicación.

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

* modelY()

void setup() {
  size(500, 500, P3D);
  noFill();
}

void draw() {
  background(0);

  pushMatrix();
  // empieza en el centro de la pantalla
  translate(width/2, height/2, -200);     
  // un poco de rotación aleatoria para hacerlo más interesante
  rotateY(1.0); //rotaciión en Y);
  rotateZ(2.0); //rotación en Z);
  // rota X un poco en cada cuadro
  rotateX(frameCount / 100.0);
  // traslación a partir del centro
  translate(0, 150, 0);

  // dibuja el borde una caja blanca en (0, 0, 0)
  stroke(255);
  box(50);

  // la caja fue dibujada en (0, 0, 0), almacena esa posición
  float x = modelX(0, 0, 0);
  float y = modelY(0, 0, 0);
  float z = modelZ(0, 0, 0);
  // elimina todas las otras transformaciones
  popMatrix();

  // dibuja otra caja en la misma coordenada (x, y, z) como la anterior
  pushMatrix();
  translate(x, y, z);
  stroke(255, 0, 0);
  box(50);
  popMatrix();
}

Retorna la posición tridimensional X, Y, Z en el espacio del modelo. Esta función retorna el valor de Y para una coordenada dada basada en el conjunto actual de transformaciones (scale, rotate, translate, etc). El valor Y puede ser usado para situar un objeto en el espacio de forma relativa a la ubicación del punto original una vez que las transformaciones ya no están siendo usadas.

En el ejemplo, las funcioens modelX(), modelY(), y modelZ() almacenan la ubicación de una caja en el espacio después de haber sido situada usando una serie de comandos translate y rotate. Después de la ejecución de popMatrix(), estas transformaciones ya no son aplicadas, pero la coordenada (x, y, z) retornada por las funciones model es usada para ubicar otra caja en la misma ubicación.

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

* modelZ()

void setup() {
  size(500, 500, P3D);
  noFill();
}

void draw() {
  background(0);

  pushMatrix();
  // empieza en el centro de la pantalla
  translate(width/2, height/2, -200);     
  // un poco de rotación aleatoria para hacerlo más interesante
  rotateY(1.0); //rotaciión en Y);
  rotateZ(2.0); //rotación en Z);
  // rota X un poco en cada cuadro
  rotateX(frameCount / 100.0);
  // traslación a partir del centro
  translate(0, 150, 0);

  // dibuja el borde una caja blanca en (0, 0, 0)
  stroke(255);
  box(50);

  // la caja fue dibujada en (0, 0, 0), almacena esa posición
  float x = modelX(0, 0, 0);
  float y = modelY(0, 0, 0);
  float z = modelZ(0, 0, 0);
  // elimina todas las otras transformaciones
  popMatrix();

  // dibuja otra caja en la misma coordenada (x, y, z) como la anterior
  pushMatrix();
  translate(x, y, z);
  stroke(255, 0, 0);
  box(50);
  popMatrix();
}

Retorna la posición tridimensional X, Y, Z en el espacio del modelo. Esta función retorna el valor de Z para una coordenada dada basada en el conjunto actual de transformaciones (scale, rotate, translate, etc). El valor Z puede ser usado para situar un objeto en el espacio de forma relativa a la ubicación del punto original una vez que las transformaciones ya no están siendo usadas.

En el ejemplo, las funcioens modelX(), modelY(), y modelZ() almacenan la ubicación de una caja en el espacio después de haber sido situada usando una serie de comandos translate y rotate. Después de la ejecución de popMatrix(), estas transformaciones ya no son aplicadas, pero la coordenada (x, y, z) retornada por las funciones model es usada para ubicar otra caja en la misma ubicación.

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

* screenX()

void setup() {
  size(100, 100, P3D);
}

void draw() {
  background(204);

  float x = mouseX;
  float y = mouseY;
  float z = -100;

  // Dibuja "X" en z = -100
  stroke(255);
  line(x-10, y-10, z, x+10, y+10, z);
  line(x+10, y-10, z, x-10, y+10, z);

  // Dibuja una línea gris en z = 0 y el mismo
  // valor de x. Nota el paralaje
  stroke(102);
  line(x, 0, 0, x, height, 0);

  // Dibuja una línea negra en z = 0 para acompañar
  // el elemento de valor x dibujado en z = -100
  stroke(0);
  float theX = screenX(x, y, z);
  line(theX, 0, 0, theX, height, 0);    
}

Toma una posición tridimensional X, Y, Z y retorna el valor de X donde aparecerá en una pantalla (bidimensional).

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

* screenY()

void setup() {
  size(100, 100, P3D);
}

void draw() {
  background(204);

  float x = mouseX;
  float y = mouseY;
  float z = -100;

  // Dibuja "X" en z = -100
  stroke(255);
  line(x-10, y-10, z, x+10, y+10, z);
  line(x+10, y-10, z, x-10, y+10, z);

  // Dibuja una línea gris en z = 0 y el mismo
  // valor de x. Nota el paralaje
  stroke(102);
  line(x, 0, 0, x, height, 0);

  // Dibuja una línea negra en z = 0 para acompañar
  // el elemento de valor x dibujado en z = -100
  stroke(0);
  float theX = screenX(x, y, z);
  line(theX, 0, 0, theX, height, 0);    
}

Toma una posición tridimensional X, Y, Z y retorna el valor de Y donde aparecerá en una pantalla (bidimensional).

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

* screenZ()

void setup() {
  size(100, 100, P3D);
}

void draw() {
  background(204);

  float x = mouseX;
  float y = mouseY;
  float z = -100;

  // Dibuja "X" en z = -100
  stroke(255);
  line(x-10, y-10, z, x+10, y+10, z);
  line(x+10, y-10, z, x-10, y+10, z);

  // Dibuja una línea gris en z = 0 y el mismo
  // valor de x. Nota el paralaje
  stroke(102);
  line(x, 0, 0, x, height, 0);

  // Dibuja una línea negra en z = 0 para acompañar
  // el elemento de valor x dibujado en z = -100
  stroke(0);
  float theX = screenX(x, y, z);
  line(theX, 0, 0, theX, height, 0);    
}

Toma una posición tridimensional X, Y, Z y retorna el valor de Z donde aparecerá en una pantalla (bidimensional).

x: float: coordenada x 3D a ser mapeada

y: float: coordenada y 3D a ser mapeada

z: float: coordenada z 3D a ser mapeada

### Propiedades de material

* ambient()

Define la reflectividad ambiental para las figuras dibujadas en la pantalla. Esto se combina con el componente de luz ambiental del entorno. Los componentes de color definidos con los parámetros definen la reflectividad. Por ejemplo configurando  en el modo de color v1=255, v2=127, v3=0, causaría quetoda la luz roja se refleje y que la mitad de la luz verde se refleje. Se usa en combinación con emissive(), specular() y shininess() al configurar las propiedades de material de las figuras.

rgb: int: cualquier valor del tipo de datos color

gray: float: número que especifica un valor entre blanco y negro

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

* emissive()

Define el color emisivo del material usado para dibujar figuras en la pantalla. Se usa en combinación con ambient(), specular() y shininess() al configurar las propiedades de material de las figuras.

rgb: int: cualquier valor del tipo de datos color

gray: float: número que especifica un valor entre blanco y negro

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

* shininess()

...
sphere(20);  // Esfera izquierda
...
sphere(20);  // Esfera derecha

Define la cantidad de brillo en la superficie de las figuras. Se usa en combinación con ambient(), specular() y emissive() al configurar las propiedades de material de las figuras.

shine: float: grado de brillo

* specular()

Define el color de espejado de los materiales usados para dibujar figuras en la pantalla, que define el color de los reflejos. El espejado se refiere a la luz que rebota de una superficie en una dirección en particular (en contraste con rebotar en todas direcciones como una luz difusa). Se usa en combinación con ambient(), emissive() y shininess() al configurar las propiedades de material de las figuras.

rgb: int: cualquier valor del tipo de datos color

gray: float: número que especifica un valor entre blanco y negro

v1: float: valor de rojo o tinte (depende del modo actual de color)

v2: float: valor de verde o saturación (depende del modo actual de color)

v3: float: valor de azul o brillo (depende del modo actual de color)

##Color

### Configuración
* background()
* clear()
* colorMode()
* fill()
* noFill()
* noStroke()
* stroke()

### Creación & Lectura
* alpha()
* blue()
* brightness()
* color()
* green()
* hue()
* lerpColor()
* red()
* saturation()

## Imagen

* createImage()
* PImage

### Cargar & Mostrar
* image()
* imageMode()
* loadImage()
* noTint()
* requestImage()
* tint()

### Texturas
* texture()
* textureMode()
* textureWrap()

### Pixeles
* blend()
* copy()
* filter()
* get()
* loadPixels()
* pixels[]
* set()
* updatePixels()

## Render

* blendMode()
* clip()
* createGraphics()
* noClip()
* PGraphics

### Shaders
* loadShader()
* PShader
* resetShader()
* shader()

## Tipografía

* PFont

### Cargar & Mostrar
* createFont()
* loadFont()
* text()
* textFont()

### Atributos
* textAlign()
* textLeading()
* textMode()
* textSize()
* textWidth()

### Métricas
* textAscent()
* textDescent()

## Matetmáticas

* PVector

### Operadores
* % (modulo)
* * (multiply)
* *= (multiply assign)
* + (addition)
* ++ (increment)
* += (add assign)
* - (minus)
* -- (decrement)
* -= (subtract assign)
* / (divide)
* /= (divide assign)

### Operadores a nivel de bit
* & (bitwise AND)
* << (left shift)
* >> (right shift)
* | (bitwise OR)

### Cálculos
* abs()
* ceil()
* constrain()
* dist()
* exp()
* floor()
* lerp()
* log()
* mag()
* map()
* max()
* min()
* norm()
* pow()
* round()
* sq()

PENDING???

* sqrt()

...
float a = sqrt(6561);  // Define 'a' como 81
float b = sqrt(625);   // Define 'b' como 25
float c = sqrt(1);     // Define 'c' como 1

Calcula la raíz cuadrada de un número. La raíz cuadrada de un número siempre es positiva, aunque pueda haber una raíz negativa válida. La raíz cuadrada s de un número es tal que s*s = a. Es el opuesto de elevar al cuadradao.

n: float: número no negativo

### Trigonometría

* acos()

...
// Imprime "3.1415927 : -1.0 : 3.1415927"
...
// Imprime "3.1415927 : -1.0 : 3.1415927"
...

El inverso de cos(), retorna el arco coseno de un valor. Esta función espera valores dentro del rango entre -1 y 1 y los valores retornados están dentro del rango etrne 0 y PI (3.1415927).

value: float: el valor cuyo arco coseno será retornado

* asin()

...
// Imprime "1.0471976 : 0.86602545 : 1.0471976"
...
// Imprime "4.1887903 : -0.86602545 : -1.0471976"
...

El inverso de cos(), retorna el arco seno de un valor. Esta función espera valores dentro del rango entre -1 y 1 y los valores retornados están dentro del rango etrne -PI/2 y PI/2.

value: float: el valor cuyo arco seno será retornado

* atan()

...
// Imprime "1.0471976 : 1.7320509 : 1.0471976"
...
// Imprime "4.1887903 : 1.7320513 : 1.0471977"
...

El inverso de tan(), retorna el arco tangente de un valor. Esta función espera valores en el rango -Infinity a Infinity (excluidos) y los valores retornados están dentro del rango entre -PI/2 y PI/2.

value: float: -Infinito a Infinito (excluidos)

* atan2()

Calcula el ángulo (en radianes) desde un punto específico al origen de coordenadas medido desde el lado positivo del eje x. Los valores son retornados como un float en el rango entre -PI y PI. La función atan2() es usada frecuentemente para orientar figuras geométricas según la posición del cursor. Nota: la coordenada y del punto es el primer paráemtro, y la coordenada x es el segundo parámetro, debido a la estructura del cálculo de la tangente.

y: float: coordenada y del punto

x: float: coordenada x del punto

* cos()

Calcula el coseno de un ángulo. Esta función espera que los valores del parámetro angle sean provistos en radianes (valores entre 0 y PI*2). Los valores retornados están en el rango -1 a 1.

angle: 	float: un ángulo en radianes

* degrees()

float rad = PI/4;
float deg = degrees(rad);
println(rad + " radianes es " + deg + " grados");

radians: float: valor en radianes a ser convertido en grados

Convierte una medida en radianes a su correspondiente valor en grados. Radianes y grados son dos maneras de medir lo mismo. En un círculo hay 360 grados y 2*Pi radianes. Por ejemplo, 90° = PI/2 = 1.5707964. Todas las funciones trigonométricas en Processing requieren que sus paráemtros sean especificados en radianes.

* radians()

float deg = 45.0;
float rad = radians(deg);
println(deg + " grados es " + rad + " radianes");

Convierte una medida en grados a su correspondiente valor en radianes. Radianes y grados son dos maneras de medir lo mismo. En un círculo hay 360 grados y 2*Pi radianes. Por ejemplo, 90° = PI/2 = 1.5707964. Todas las funciones trigonométricas en Processing requieren que sus paráemtros sean especificados en radianes.

degrees: float: valor en grados a ser convertido en radianes

* sin()

Calcula el seno de un ángulo. Esta función espera que los valores del parámetro angle sean provistos en radianes (valores entre 0 y PI*2). Los valores retornados están en el rango -1 a 1.

angle: 	float: un ángulo en radianes

* tan()

Calcula la razón entre el seno y el coseno de un ángulo. Esta función espera que los valores del parámetro angle sean provistos en radianes (valores entre 0 y PI*2). Los valores retornados están en el rango entre -infinito y infinito.

angle: 	float: un ángulo en radianes

### Aleatorio

* noise()

Retorna el valor de rudio Perlin en las coordenadas especificadas. El ruido Perlin es un generador de secuencias aleatorias que produce una sucesión de numéros más natural y armónica que la de una función random() standard. Fue desarrollada por Ken Perlin en los 1980s y ha sido usada en aplicaciones gráficas para generar texturas, figuras, terrenos y otras formas de apariencia orgánica de forma procedural.

A diferencia de la función random(), el ruido Perlin es definido en un espacio n-dimensional infinito, en el que cada par de coordenadas corresponde a un valor fijo semi-aleatorio (fijado solo durante la duración del programa). El valor resultante siempre será entre 0.0 y 1.0. Processing puede computar ruido 1D, 2D y 3D, dependiendo del número de coordenadas entregadas. El valor de rudio puede ser animado, al moverse a través del espacio de ruido, como se demuestra en el primer ejemplo de arriba. Las dimensiones segunda y tercera pueden también también ser interpretadas como tiempo.

La estructura real del ruido es similar a la de una señal de audio, con respecto al uso de frecuencias de la función. De forma similar que el concepto de armónicas en física, el ruido Perlin es calculado sobre varias octavas que luego son sumadas para obtener el resultado final.

Otra forma de ajustar el caracter de la secuencia resultante es escalar las coordenadas de la entrada. Como la función opera dentro de un espacio infinito, el valor de las coordenadas no importa en sí mismo, solo es importante la distancia entre coordenadas sucesivas es importante (como cuando usas noise() dentro de un bucle). Como regla general, con una menor diferencia entre coordenadas, se logra un resultado más suave en la secuencia de ruido resultante. Pasos entre 0.005-0.3 funcionan mejor para la mayoría de las aplicaciones, pero esto variará según el uso.

Han habido debates sobre la exactitud de la implementación del ruido en Processing. Para clarificar, es una implementación del "clásico ruido Perlin" de 1983, y no el nuevo método de "ruido simplex" de 2001.

x: float: coordenada x en el espacio del ruido

y: float: coordenada y en el espacio del ruido

z: float: coordenada z en el espacio del ruido

* noiseDetail()

Ajusta el caracter y nivel de detalle producido por la función de ruido Perlin. De forma similar a las armónicas en física, el ruido es calculado sobre varias octavas. Las octavas más bajas contribuyen más a la señal de salida y por lo tanto definen la intensidad general del ruido, mientras que las octavas más altas crean detalles finos en la secuencia de ruido.

Por defecto, el ruido es calculado sobre 4 octavas con cada octava contribuyendo exactamente la mitad que su predecesora, empezando en 50% de intensidad para la primera octava. El tamaño de caída puede ser cambiado usando un parámetro adicional de función. Por ejemplo, un factor de caída de 0.75 significa que cada octava ahora tendrá 75% del impacto (25% menos) que la octava grave anterior. A pesar de que cualquier número entre 0.0 y 1.0 es válido, nota que valroes mayores a 0.5 pueden resultar en valores de retorno de noise() mayores que 1.0.

Cambiando estos parámetros, la señal creada por la función noise() puede ser adaptada para cumplir necesidades y características específicas.

lod: int: número de octavas a ser usadas por el ruido

falloff: 	float: factor de caída por octava

* noiseSeed()

Define la semilla de noise(). Por defecto, noise() produce resultados distintos cada vez que el programa se ejecuta. Define el parámetro seed como una constante para retornar los mismos números pseudo-aleatorios cada vez que el software es ejecutado.

seed: int: valor de la semilla

* random()

...

// Obtiene un elemento aleatorio del arreglo
String[] words = { "apple", "bear", "cat", "dog" };
int index = int(random(words.length));  // Lo mismo que int(random(4))
println(words[index]);  // Imprime una de las cuatro palabras

Genera números aleatorios. Cada vez que se ejecuta la función random(), retorna un valor dentro del rango especificado. Si solo se pasa un parámetro a la función, retornará un float entre cero y el valor del parámetro high. Por ejemplo, random(5) retorna valores entre 0 y 5 (empezando en 0, y hasta 5, sin incluirlo).

Si se especifican dos parámetros, la función retornará un float con un valor entre los dos valores. Por ejemplo, random(-5, 10.2) retorna valores empezando en -5 y hasta 10.2, sin incluirlo. Para convertir un número aleatorio de punto flotante a un entero, usa la función int().

low: float: límite inferior

high: float: límite superior

* randomGaussian()

Retorna un float de una serie de números aleatorios con una media de 0 y una desviación estándar de 1. Cada vez que se ejecuta la función randomGaussian(), retorna un número que se ajusta a una distribución Gaussiana o normal. Teóricamente no existe un valor mínimo o máximo de retorno de una función randomGaussian(). Sin embargo, existe una muy baja probabilidad de que se retornen valores muy alejados de la media; y una muy alta probabilidad de que se retornen números cerca de la media.

* randomSeed()

Define el valor de semilla de random(). Por defecto, random() produce resultados distintos cada vez que el programa es ejecutado. Define el parámetro seed como una constante para arrojar los mismos números pseudo-aleatorios cada vez que el software es ejecutado.

seed:	int: valor de semilla

## Constantes

* HALF_PI

HALF_PI es una constante matemática cuyo valor es 1.5707964. Es la mitad de la razón entre la circunferencia de un círculo y su diámetro. Es útil en combinación con las funciones trigonométricas sin() y cos().

* PI

PI es una constante matemática cuyo valor es 3.1415927. Es la razón entre la circunferencia de un círculo y su diámetro. Es útil en combinación con las funciones trigonométricas sin() y cos().

* QUARTER_PI

QUARTER_PI es una constante matemática cuyo valor es 0.7853982. Es un cuarto de la razón entre la circunferencia de un círculo y su diámetro. Es útil en combinación con las funciones trigonométricas sin() y cos().

* TAU

TAU es una constante matemática cuyo valor es 6.2831855. Es una constante del círculo que relaciona la circunferencia de un círculo a su dimensión lineal, la razón entre la circunferencia de un círculo y su radio. Es útil en combinación con las funciones trigonométricas sin() y cos().

* TWO_PI

TWO_PI es una constante matemática cuyo valor es 6.2831855. Es el doble de la razón entre la circunferencia de un círculo y su diámetro. Es útil en combinación con las funciones trigonométricas sin() y cos().
