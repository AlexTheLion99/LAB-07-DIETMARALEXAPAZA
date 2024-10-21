(() => {
  // Función que modifica el contenido del div con id 'app'
  function showResult() {
    const appDiv = document.querySelector<HTMLDivElement>('#app');
    if (appDiv) {
      appDiv.innerHTML = `
        <h2>Evaluation Question 2</h2>
        <p>resultado</p>
      `;
    }
  }

  // Ejecutar la función automáticamente
  showResult();

  // Definimos la clase 'word_to_word'
  class word_to_word {
    constructor(public text1: string, public text2: string) {}  // Uso correcto de `public`
  
    // Método para combinar las palabras
    combineWords(): string {
      return `${this.text1} ${this.text2}`;
    }
  }

  // Interfaz con propiedades necesarias
  interface props {
    name: string;
    value: number;
  }

  // Tipo para movimientos
  type moves = 'up' | 'down' | 'left' | 'right';

  // Tipo para direcciones cardinales
  type directions = 'north' | 'south' | 'east' | 'west';

  // Interfaz que representa propiedades de la base de datos
  interface IDBPROPS {
    id: number;
    productName: string;
  }

  // Clase con un comportamiento genérico
  class ATOBTOC {
    constructor(public start: string, public middle: string, public end: string) {}  // Uso correcto de `public`

    // Método para concatenar las partes
    connect(): string {
      return `${this.start} -> ${this.middle} -> ${this.end}`;
    }
  }

  // Los 2 valores siguientes son constantes
  const constant_one = 3;
  let constant_two = 4;

  // Función que simula la obtención de comida
  function GET_FOOD(): string {
    return "Pizza";
  }

  // Función que configura el nombre de un producto
  function SETPRODUCTNAME(name: string): string {
    return `El nombre del producto es: ${name}`;
  }

  // Usar la constante constant_one
  console.log(`El valor de constant_one es: ${constant_one}`);

  // Usar constant_two en un cálculo
  console.log(`La suma de constant_one y constant_two es: ${constant_one + constant_two}`);

  // Usar constant_two en una condición
  if (constant_two > constant_one) {
    console.log("constant_two es mayor que constant_one");
  }

  // Ejemplo de uso de las clases
  const wordObj = new word_to_word("hello", "world");
  console.log(wordObj.combineWords());

  const process = new ATOBTOC("A", "B", "C");
  console.log(process.connect());

  // Uso de la interfaz props
  const newProps: props = { name: "PropName", value: 42 };
  printProps(newProps);

  // Función que usa la interfaz props
  function printProps(props: props): void {
    console.log(`Nombre: ${props.name}, Valor: ${props.value}`);
  }

  // Uso de las funciones de movimientos y direcciones
  function moveCharacter(move: moves): string {
    return `El personaje se mueve hacia ${move}`;
  }
  console.log(moveCharacter('up'));
  console.log(moveCharacter('left'));

  function getDirection(direction: directions): string {
    return `La dirección seleccionada es ${direction}`;
  }
  console.log(getDirection('north'));
  console.log(getDirection('west'));

  // Crear un objeto de tipo IDBPROPS
  const productDB: IDBPROPS = { id: 1, productName: "Smartphone" };

  // Función que imprime los datos de la base de datos
  function printProductDetails(product: IDBPROPS): void {
    console.log(`ID: ${product.id}, Nombre del producto: ${product.productName}`);
  }
  printProductDetails(productDB);

  // Uso de las funciones
  console.log(GET_FOOD());
  console.log(SETPRODUCTNAME("Laptop"));

})();
