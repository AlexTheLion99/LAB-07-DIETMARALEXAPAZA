(() => {
  /* APLICA DRY */

//EX - 1
  function calculateOperation(a: number, b: number, c: number): number {
    return (a + b) * c;
  }

  // Uso de la función general
  const result1 = calculateOperation(1, 2, 3); 
  const result2 = calculateOperation(4, 5, 6); 

  console.log(`Resultado de la operación 1: ${result1}`);
  console.log(`Resultado de la operación 2: ${result2}`);

  // Función general para calcular el área
  function calculateArea(shape: 'rectangle' | 'circle', ...dimensions: number[]): number {
    switch (shape) {
      case 'rectangle':
        return dimensions[0] * dimensions[1];
      case 'circle':
        return Math.PI * dimensions[0] ** 2;
      default:
        throw new Error("Unknown shape");
    }
  }

  // Uso de la función general
  const rectangleArea = calculateArea('rectangle', 10, 5); 
  const circleArea = calculateArea('circle', 7);

  console.log(`Área del rectángulo: ${rectangleArea}`);
  console.log(`Área del círculo: ${circleArea}`);

  // Validar email y nombre de usuario
  const email = "example@example.com"; 
  const username = "user123"; 

  
  const isEmailValid = validateEmail(email);
  const isUsernameValid = validateUsername(username);

  console.log(`El email '${email}' es válido: ${isEmailValid}`);
  console.log(`El nombre de usuario '${username}' es válido: ${isUsernameValid}`);

  // EX - 3
  function validateEmail(email: string): boolean {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateUsername(username: string): boolean {
    return username.length >= 3 && username.length <= 15; // 3 a 15 caracteres
  }
})();
