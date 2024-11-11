// Importar las librerías
import { marked } from './libs/marked.esm.js';
import DOMPurify from './libs/purify.es.js';

// Simula la conversación predefinida
const conversation = [
  {
    sender: "ia",
    message: "Hola *Juliana*, ¡bienvenida a Open Lab! Es un placer verte. Estamos aquí para ayudarte a convertir tus necesidades en soluciones de software efectivas. ¿En qué podemos asistirte hoy?"
  },
  {
    sender: "user",
    message: "Los clientes que me deben hacen acuerdos de pago que finalmente no cumplen. La legislación me obliga a castigar esa cartera después de cumplir con el debido proceso, sin embargo, esto implica una pérdida para el ingreso de la compañía y no es lo que queremos. Necesitamos innovar."
  },
  {
    sender: "ia",
    message: `Gracias por plantear este nuevo problema.  Utilizando Design Thinking, podemos explorar soluciones para minimizar estas pérdidas y mejorar el cumplimiento de los pagos. Iniciemos con la etapa: **Definición del Problema**
1. ¿Actualmente tienes un proceso automatizado o manual para gestionar los acuerdos de pago y realizar el seguimiento de los clientes que incumplen?`
  },
  {
    sender: "user",
    message: "Sí"
  },
  {
    sender: "ia",
    message: "2. ¿Has identificado si hay algún patrón común entre los clientes que no cumplen con los acuerdos? Por ejemplo, perfiles de clientes, montos o plazos de pago."
  },
  {
    sender: "user",
    message: "Sí, hay diferenciación de perfiles por estrato y comportamiento de pago."
  },
  {
    sender: "ia",
    message: "3. ¿Te gustaría explorar una solución dentro del sistema CIS de Open para optimizar la gestión de estos acuerdos de pago y reducir el riesgo de incumplimiento?"
  },
  {
    sender: "user",
    message: "Sí, pero lo que buscamos es cubrir a la compañía con alguna figura complementaria al acuerdo de pago, a fin de proteger la deuda en caso de que el cliente incumpla."
  },
  {
    sender: "ia",
    message: "4. ¿Estás considerando alguna medida proactiva, como renegociación de acuerdos o incentivos, para evitar que los clientes lleguen al punto de incumplir?"
  },
  {
    sender: "user",
    message: "Ya lo hicimos y siguen incumpliendo."
  },
  {
    sender: "ia",
    message: `Gracias por esa claridad.

Dado que ya has intentado varias estrategias proactivas, parece que lo que necesitas es una solución más robusta que complemente el acuerdo de pago y proteja la deuda.
1. **Figura complementaria**: ¿Has considerado la posibilidad de implementar una garantía o un seguro de crédito que cubra a tu compañía en caso de incumplimiento de los clientes? Esto podría ser integrado en el sistema CIS para facilitar la gestión.
2. **Perfiles de riesgo**: Dado que ya tienes diferenciación de perfiles por estrato y comportamiento de pago, ¿te interesaría crear un modelo de *scoring* de riesgo basado en estos datos para prever el incumplimiento y ajustar las condiciones de los acuerdos de pago según el perfil del cliente?
3. **Automatización del seguimiento**: ¿Te gustaría explorar cómo Open podría automatizar la ejecución de acciones cuando se detecten señales tempranas de incumplimiento, como la activación de garantías o la renegociación automática de pagos antes de que la deuda se vuelva crítica?
Estas acciones podrían ayudarte a mitigar el impacto financiero y proteger los ingresos de la compañía.`
  },
  {
    sender: "user",
    message: "Me has entendido muy bien. Me inclino por la primera idea de solución. ¿Podemos pasar a la siguiente etapa del proceso?"
  },
  {
    sender: "ia",
    message: `¡Excelente! Ahora que hemos identificado una posible solución con la implementación de una garantía o seguro de crédito, pasemos a la siguiente etapa: **Diseño de la Solución**.
1. **Evaluación de opciones**: ¿Tienes alguna preferencia sobre el tipo de garantía o seguro de crédito que te gustaría explorar (por ejemplo, una aseguradora externa, un fondo interno de cobertura)?
2. **Integración en el sistema CIS**: ¿Te gustaría que esta figura complementaria de protección se integre directamente en el sistema CIS para que el seguimiento, activación y ejecución del seguro o garantía sea automatizado cuando se detecte incumplimiento?
3. **Coordinación con el equipo de Open**: ¿Te gustaría que Open se encargue de contactar a posibles proveedores de seguros o trabajar con tu equipo para revisar las opciones de implementación?
Con estas preguntas, podremos diseñar una estrategia que alinee esta solución con tus necesidades y los recursos de Open.`
  },
  {
    sender: "user",
    message: `1.- Me gustaría evaluar el fondo interno ya que he investigado con externos y se eleva el costo de la prima con lo cual se hace inviable el acuerdo de pago con el cliente.
2.- Sí.
3.- Sí, me gustaría que trabajemos juntos.`
  },
  {
    sender: "ia",
    message: `Gracias por la información, ahora que hemos establecido las preferencias, avancemos en el **Diseño Detallado de la Solución**.
1. **Estructura del fondo interno**: Para asegurar que el fondo interno sea sostenible, ¿te gustaría establecer ciertos criterios o reglas para su creación y uso? Por ejemplo, ¿qué porcentaje de cada acuerdo de pago se destinará al fondo para cubrir futuras pérdidas?
2. **Mecanismo de activación**: ¿Cómo te gustaría que se active el fondo en caso de incumplimiento? ¿Automáticamente después de un determinado número de pagos fallidos o bajo ciertos criterios específicos?
3. **Seguimiento y reporte**: ¿Te gustaría que el sistema CIS genere automáticamente reportes periódicos sobre el estado del fondo, el uso de los recursos y los clientes que están cubiertos?
Una vez que tengamos claridad sobre estos puntos, podremos proceder con la fase de planificación e implementación junto con Open.`
  },
  {
    sender: "user",
    message: `1.- Sí. Una indispensable es que el valor sea adicional a la deuda. Es decir, no hace parte de la deuda.
2.- Queremos activarlo al momento de incumplir 6 cuotas de acuerdo de pago, es decir, 6 facturas pues estamos en un negocio que factura mensual.
3.- Genial.`
  },
  {
    sender: "ia",
    message: `¡Excelente! Ahora que tenemos los detalles claros, pasemos a la siguiente fase: **Planificación e Implementación**.
1. **Configuración del fondo**: Open trabajará en definir las reglas dentro del sistema CIS para calcular y registrar el valor adicional que irá al fondo, asegurando que no forme parte de la deuda original.
2. **Automatización del proceso**: Se configurará el CIS para que detecte automáticamente el incumplimiento de 6 cuotas mensuales, activando el uso del fondo y protegiendo la deuda.
3. **Generación de reportes**: Se implementará una función para generar informes periódicos que muestren el estado del fondo, el monto disponible y el listado de clientes cubiertos.
¿Te gustaría definir algún plazo específico para la implementación o avanzar con un plan flexible según la disponibilidad del equipo?`
  },
  {
    sender: "user",
    message: "Estamos urgidos. En 6 meses debemos tener una solución disponible."
  },
  {
    sender: "ia",
    message: `Perfecto, con un plazo de 6 meses establecido, podemos trabajar en un plan detallado para asegurarnos de cumplir con esa meta.

A continuación, propondré un plan inicial de implementación:
1. **Mes 1-2: Análisis y Diseño**:
- Definición detallada de los requisitos técnicos.
- Diseño del mecanismo de cálculo del fondo adicional y activación automática en CIS.
- Aprobación de la propuesta por parte de los stakeholders.
2. **Mes 3-4: Desarrollo y Configuración**:
- Desarrollo de las reglas para el fondo interno en el sistema CIS.
- Integración del mecanismo de activación y reportes periódicos.
3. **Mes 5: Pruebas y Ajustes**:
- Realización de pruebas en entornos controlados para verificar que el fondo interno se activa correctamente.
- Ajustes según resultados de las pruebas.
2. **Mes 6: Implementación Final y Capacitación**:
- Implementación del fondo en el entorno productivo.
- Capacitación para los equipos responsables del seguimiento y uso de la nueva funcionalidad.
¿Te parece bien este cronograma referencial, o te gustaría ajustar algo?`
  },
  {
    sender: "user",
    message: "Me parece un buen inicio."
  },
  {
    sender: "ia",
    message: `Con ese cronograma como **base referencial**, estaremos bien encaminados hacia la implementación exitosa dentro del plazo de 6 meses. He generado el SAO para que tu Customer Success se ponga en contacto y ultimar los detalles comerciales.
A medida que avancemos, podemos ajustar cualquier parte del plan según las necesidades del proyecto.`
  },
  {
    sender: "user",
    message: "Gracias."
  }
];



let messageIndex = 0;
const chat = document.getElementById('chat');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Función para mostrar mensajes en el chat
function displayMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);

  // Verificar si 'marked' está disponible
  if (typeof marked === 'function') {
    // Convertir Markdown a HTML y sanear el resultado
    const htmlContent = DOMPurify.sanitize(marked.parse((message)));
    msgDiv.innerHTML = htmlContent;
    } else {
    console.error('La función marked no está disponible.');
    msgDiv.textContent = message; // Mostrar el mensaje sin formato
  }
  chat.appendChild(msgDiv);
  chat.scrollTop = chat.scrollHeight;
  

}

async function getAIResponse(text) {
    const apiKey = 'AIzaSyD4BxBJeV9EfDUQhK365JkSzIaYqxG7Wsg'; // Reemplaza '###' con tu clave de API real
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const data = {
      contents: [
        {
          parts: [
            {
              text: text
            }
          ]
        }
      ]
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
  
      const result = await response.json();
  
      // Aquí se asume que el campo de respuesta que quieres es result.contents[0].parts[0].text
      
      return result.candidates[0].content.parts[0].text
      //return JSON.stringify(result, null, 2);
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  }

// Función para mostrar el indicador de "escribiendo..."
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.classList.add('message', 'ia');
  typingDiv.textContent = 'Open Lab está escribiendo...';
  typingDiv.id = 'typing';
  chat.appendChild(typingDiv);
  chat.scrollTop = chat.scrollHeight;
}

// Función para eliminar el indicador de "escribiendo..."
function removeTypingIndicator() {
  const typingDiv = document.getElementById('typing');
  if (typingDiv) {
    chat.removeChild(typingDiv);
  }
}

// Mostrar el primer mensaje si es de la IA
if (conversation[0].sender === 'ia') {
  displayMessage('ai', conversation[0].message);
  messageIndex++;
}

// Evento para enviar mensaje al hacer clic en "Enviar"
sendBtn.addEventListener('click', sendMessage);

// Evento para enviar mensaje al presionar la tecla Enter
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userText = userInput.value.trim();
  if (userText === '') return;

  // Mostrar el mensaje del usuario
  userInput.value = '';

  // Guardar el mensaje del usuario en la conversación
  if (messageIndex < conversation.length && conversation[messageIndex].sender === 'user') {
     conversation[messageIndex].message = userText;
     displayMessage('user', conversation[messageIndex].message);
     
    messageIndex++;
  }

  // Simular "escribiendo..." por parte de la IA
  showTypingIndicator();

  setTimeout(async () => {
    removeTypingIndicator();

    // Responder con el mensaje predefinido de la IA
    if (messageIndex < conversation.length && conversation[messageIndex].sender === 'ia') {
      try {
        
        /* preguntarle a la IA, lo que User pregunto en el index-1 */
        const respuesta = await getAIResponse(conversation[messageIndex-1].message);
        
        if (respuesta) {
          // Si se obtuvo una respuesta válida, mostrarla
          displayMessage('ai', respuesta);
        } else {
          // Si no se obtuvo respuesta, mostrar mensaje de error predeterminado
          console.error("Error: No se obtuvo respuesta de la API.");
          displayMessage('ai', 'Lo siento, hubo un problema al obtener la respuesta. Por favor, intenta de nuevo.');
        }
  
      messageIndex++;
    } catch (error) {
      // Si ocurre un error inesperado, mostrar mensaje de error en la consola
      console.error("Error inesperado:", error);
      displayMessage('ai', 'Hubo un problema inesperado. Por favor, inténtalo de nuevo más tarde.');
      }
  
    } else {
      // Si no hay más mensajes predefinidos, la IA puede dar una respuesta genérica
      displayMessage('ai', 'Gracias por permitirnos innovar juntos.  \nEstaré aquí para acompañarte en cada etapa y te mantendremos al tanto de la evolución de tu solución. \n Si surge algo más o deseas avanzar en algún aspecto en particular, ¡solo avísame!');
    }
  }, 1500);


  
 
  
}
