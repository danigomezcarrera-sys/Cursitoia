// content.js — Contenido y evaluaciones del curso
// Cada módulo tiene: id, numero, titulo, pregunta central, secciones (HTML) y un quiz.

const COURSE = {
  title: "Curso Introductorio de Inteligencia Artificial",
  subtitle: "Para quienes comienzan una carrera de Ciencia de Datos e Inteligencia Artificial",
  modules: [
    {
      id: "m1",
      numero: 1,
      titulo: "Fundamentos de Inteligencia Artificial",
      pregunta: "¿Qué es realmente la IA?",
      intro: "En este módulo vas a entender qué es la Inteligencia Artificial en términos simples, en qué se diferencia de la automatización tradicional, y por qué este campo cambió tanto en los últimos años.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p><strong>Inteligencia Artificial (IA):</strong> conjunto de técnicas que permiten que una computadora realice tareas que normalmente requieren "inteligencia" humana, como reconocer imágenes, entender texto, tomar decisiones o generar contenido nuevo.</p>
          <p>En términos simples: es enseñarle a una máquina a hacer algo sin darle instrucciones exactas paso a paso para cada caso posible, sino mostrándole ejemplos o reglas generales para que ella misma encuentre el patrón.</p>
          <p><em>Ejemplo:</em> en vez de programar manualmente miles de reglas para reconocer un gato en una foto, se le muestran miles de fotos de gatos y la IA aprende sola qué patrones visuales los caracterizan.</p>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<ul>
            <li><strong>Algoritmo:</strong> una secuencia de pasos definidos para resolver un problema. Toda IA usa algoritmos, pero no todo algoritmo es IA.</li>
            <li><strong>Dato:</strong> la información que se usa como entrada. Es la "materia prima" con la que trabaja cualquier sistema de IA.</li>
            <li><strong>Modelo:</strong> el resultado entrenado que puede tomar decisiones o generar respuestas (se profundiza en el Módulo 3).</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p>La IA moderna funciona principalmente con un enfoque basado en datos: en lugar de escribir reglas fijas ("si pasa esto, hacé esto otro"), se le muestran muchos ejemplos al sistema para que identifique patrones por sí mismo.</p>
          <p class="analogia"><strong>Analogía:</strong> es como enseñarle a cocinar a alguien mostrándole miles de platos ya preparados, en vez de darle una receta exacta para cada plato posible. Con el tiempo, esa persona empieza a intuir qué combinaciones funcionan, incluso ante platos que nunca vio antes.</p>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<p>Un organismo público recibe todos los días miles de reclamos ciudadanos por correo electrónico. Hoy, una persona los lee uno por uno para derivarlos al área correspondiente. Con IA, un sistema puede leer cada reclamo y clasificarlo automáticamente ("agua", "luminarias", "tránsito") sin que nadie escriba reglas manuales para cada palabra posible.</p>
          <p class="caso">Este mismo caso se retoma y amplía en los módulos siguientes.</p>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<p>Automatización tradicional (reglas fijas):</p>
          <pre><code>si el texto contiene "corte de luz" &rarr; categoria = "luminarias"
si el texto contiene "pozo" &rarr; categoria = "vialidad"</code></pre>
          <p>Enfoque con IA (aprendizaje a partir de ejemplos):</p>
          <pre><code>modelo.entrenar(miles_de_reclamos_ya_clasificados)
categoria = modelo.predecir(reclamo_nuevo)</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<p><strong>Automatización tradicional vs IA</strong></p>
          <table>
            <tr><th>Automatización tradicional</th><th>Inteligencia Artificial</th></tr>
            <tr><td>Reglas fijas escritas por una persona</td><td>Patrones aprendidos a partir de datos</td></tr>
            <tr><td>Funciona bien en casos predecibles</td><td>Funciona mejor ante variabilidad y ambigüedad</td></tr>
            <tr><td>No mejora sola con el tiempo</td><td>Puede mejorar si se reentrena con más datos</td></tr>
          </table>`
        }
      ],
      ideas: [
        "La IA no es magia: es un conjunto de técnicas basadas en datos y patrones.",
        "La diferencia central con la automatización tradicional es que la IA aprende de ejemplos en vez de seguir reglas fijas.",
        "No toda tarea necesita IA: para problemas simples y predecibles, las reglas tradicionales suelen ser más eficientes.",
        "Este campo evolucionó rápido en los últimos años gracias a más datos disponibles y más capacidad de cómputo."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Cuál es la diferencia clave entre la automatización tradicional y la IA basada en datos?",
            opciones: [
              "La IA siempre es más rápida en ejecutarse",
              "La IA aprende patrones a partir de ejemplos en vez de seguir reglas fijas escritas a mano",
              "La automatización tradicional no usa algoritmos",
              "No hay ninguna diferencia real entre ambas"
            ],
            correcta: 1
          },
          {
            pregunta: "En el ejemplo del organismo público, ¿qué tarea se automatiza con IA?",
            opciones: [
              "El envío de correos electrónicos",
              "La clasificación automática de reclamos ciudadanos",
              "La creación de nuevas leyes",
              "La contratación de personal"
            ],
            correcta: 1
          }
        ],
        vf: [
          { pregunta: "Un algoritmo y la Inteligencia Artificial son exactamente lo mismo.", correcta: false },
          { pregunta: "En un sistema de IA basado en datos, nadie escribe reglas manuales para cada caso posible.", correcta: true }
        ]
      }
    },
    {
      id: "m2",
      numero: 2,
      titulo: "Tipos y enfoques de IA",
      pregunta: "¿Qué tipos de IA existen?",
      intro: "Vas a conocer los principales enfoques dentro de la IA: el enfoque simbólico y el basado en datos (Machine Learning), junto con las tres formas principales en que un sistema puede aprender.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p>Dentro de la IA existen dos grandes enfoques históricos:</p>
          <ul>
            <li><strong>IA simbólica:</strong> sistemas basados en reglas lógicas escritas explícitamente ("si X entonces Y"). Fue el enfoque dominante hasta los años 90.</li>
            <li><strong>Machine Learning:</strong> sistemas que aprenden patrones a partir de datos, sin que una persona escriba las reglas manualmente. Es el enfoque dominante hoy.</li>
          </ul>
          <p>Cuando alguien dice "IA" hoy, casi siempre se refiere a Machine Learning, aunque la IA simbólica sigue usándose en motores de reglas de negocio específicos.</p>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<p>Dentro del Machine Learning existen tres formas principales de aprender:</p>
          <ul>
            <li><strong>Aprendizaje supervisado:</strong> el modelo aprende a partir de ejemplos ya etiquetados (con la respuesta correcta incluida).</li>
            <li><strong>Aprendizaje no supervisado:</strong> el modelo busca patrones o agrupaciones en datos sin respuesta correcta indicada.</li>
            <li><strong>Aprendizaje por refuerzo:</strong> el modelo aprende probando acciones y recibiendo una recompensa o penalización.</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p class="analogia"><strong>Supervisado:</strong> es como estudiar con un libro que tiene las respuestas al final de cada ejercicio.</p>
          <p class="analogia"><strong>No supervisado:</strong> es como agrupar fotos mezcladas por similitud, sin que nadie indique de antemano las categorías.</p>
          <p class="analogia"><strong>Por refuerzo:</strong> es como aprender a andar en bicicleta: cada caída o cada equilibrio logrado es una señal que ajusta el comportamiento.</p>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<ul>
            <li><strong>Supervisado:</strong> clasificar reclamos en categorías conocidas, entrenando con miles ya etiquetados.</li>
            <li><strong>No supervisado:</strong> agrupar reclamos similares cuando todavía no existen categorías definidas.</li>
            <li><strong>Por refuerzo:</strong> un sistema que aprende qué derivaciones generan menos reclamos repetidos.</li>
          </ul>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<pre><code># Supervisado: cada ejemplo tiene una etiqueta conocida
datos = [("corte de luz en mi calle", "luminarias"),
         ("hay un pozo enorme", "vialidad")]

# No supervisado: no hay etiquetas, solo se buscan grupos
datos = ["corte de luz", "pozo en la calle",
         "falta de luz en la cuadra", "bache profundo"]</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<table>
            <tr><th>IA simbólica</th><th>Machine Learning</th></tr>
            <tr><td>Reglas escritas por expertos</td><td>Patrones aprendidos de datos</td></tr>
            <tr><td>Predecible y explicable</td><td>Puede ser menos explicable ("caja negra")</td></tr>
          </table>
          <table>
            <tr><th>Supervisado</th><th>No supervisado</th></tr>
            <tr><td>Usa datos etiquetados</td><td>Usa datos sin etiquetar</td></tr>
            <tr><td>Objetivo: predecir una respuesta conocida</td><td>Objetivo: descubrir estructura oculta</td></tr>
          </table>`
        }
      ],
      ideas: [
        "La IA moderna se apoya principalmente en Machine Learning, no en reglas fijas.",
        "Existen tres formas principales de aprender: supervisado, no supervisado y por refuerzo.",
        "La elección del enfoque depende del tipo de datos disponibles.",
        "La IA simbólica no desapareció, pero hoy se usa en contextos más acotados."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Qué tipo de aprendizaje usa datos ya etiquetados con la respuesta correcta?",
            opciones: ["Aprendizaje por refuerzo", "Aprendizaje no supervisado", "Aprendizaje supervisado", "IA simbólica"],
            correcta: 2
          },
          {
            pregunta: "¿Cuál es una característica típica de la IA simbólica?",
            opciones: [
              "Aprende patrones a partir de millones de ejemplos",
              "Se basa en reglas lógicas escritas explícitamente por personas",
              "Solo funciona con imágenes",
              "No puede explicarse cómo llega a una respuesta"
            ],
            correcta: 1
          }
        ],
        vf: [
          { pregunta: "El aprendizaje por refuerzo funciona a partir de recompensas y penalizaciones según el resultado de una acción.", correcta: true },
          { pregunta: "El aprendizaje no supervisado requiere que todos los datos tengan una etiqueta correcta.", correcta: false }
        ]
      }
    },
    {
      id: "m3",
      numero: 3,
      titulo: "Machine Learning y Deep Learning",
      pregunta: "¿Cómo aprenden los modelos?",
      intro: "Vas a entender qué es un modelo, cómo se entrena, cómo se diferencia el entrenamiento de la inferencia, y qué son las redes neuronales y el Deep Learning.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p><strong>Modelo:</strong> un programa entrenado con datos que puede tomar decisiones o hacer predicciones sobre datos nuevos que nunca vio antes.</p>
          <p>Un modelo no "piensa" como una persona: es, en esencia, una función matemática ajustada a partir de muchos ejemplos, que transforma una entrada en una salida.</p>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<ul>
            <li><strong>Datos de entrenamiento:</strong> los ejemplos que se usan para que el modelo aprenda patrones.</li>
            <li><strong>Entrenamiento:</strong> el proceso en el que el modelo ajusta sus parámetros internos hasta lograr predicciones cada vez más precisas.</li>
            <li><strong>Inferencia:</strong> el momento en que el modelo, ya entrenado, se usa para predecir sobre un dato nuevo.</li>
            <li><strong>Red neuronal:</strong> un modelo organizado en capas de nodos conectados entre sí, inspirado de forma simplificada en el cerebro.</li>
            <li><strong>Deep Learning:</strong> Machine Learning que usa redes neuronales con muchas capas, capaces de aprender patrones muy complejos.</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p>El modelo recibe ejemplos, hace una predicción, la compara con la respuesta correcta, y ajusta sus parámetros para equivocarse un poco menos la próxima vez. Esto se repite millones de veces.</p>
          <p class="analogia"><strong>Analogía:</strong> es como aprender a tirar al arco. Cada intento da información sobre cómo ajustar la puntería, y con miles de intentos la puntería mejora sola.</p>
          <p>En una red neuronal, la primera capa recibe los datos, las capas intermedias detectan patrones cada vez más complejos, y la última entrega el resultado final.</p>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<p>Para clasificar reclamos, primero se entrena un modelo con miles ya clasificados por personas (entrenamiento). Luego, cada reclamo nuevo se clasifica en segundos (inferencia), sin volver a "aprender" en ese momento.</p>
          <p>Otro ejemplo: un banco entrena un modelo con historial de transacciones para detectar fraudes, y luego lo usa para evaluar cada transacción nueva en tiempo real.</p>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<pre><code># Fase de entrenamiento (una sola vez, o cada tanto)
modelo = entrenar(datos_historicos_de_reclamos)
guardar(modelo, "modelo_clasificador.pkl")

# Fase de inferencia (cada vez que llega un caso nuevo)
modelo = cargar("modelo_clasificador.pkl")
categoria = modelo.predecir("hay un pozo en mi cuadra")</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<table>
            <tr><th>Entrenamiento</th><th>Inferencia</th></tr>
            <tr><td>Ocurre una vez (o periódicamente)</td><td>Ocurre cada vez que se usa el modelo</td></tr>
            <tr><td>Requiere muchos datos y cómputo</td><td>Es rápida y liviana en comparación</td></tr>
          </table>
          <table>
            <tr><th>Machine Learning clásico</th><th>Deep Learning</th></tr>
            <tr><td>Requiere indicar qué características mirar</td><td>Aprende las características por sí solo</td></tr>
            <tr><td>Funciona bien con datos tabulares</td><td>Se destaca con imágenes, audio y texto</td></tr>
          </table>`
        }
      ],
      ideas: [
        "Un modelo es una función entrenada a partir de datos, no un sistema pensante.",
        "El entrenamiento ajusta el modelo; la inferencia lo usa. Son etapas distintas.",
        "Las redes neuronales aprenden patrones en capas, de lo simple a lo complejo.",
        "El Deep Learning es el motor detrás de los avances más recientes en IA."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Qué ocurre durante la 'inferencia' de un modelo?",
            opciones: [
              "El modelo ajusta sus parámetros por primera vez",
              "El modelo, ya entrenado, se usa para predecir sobre un dato nuevo",
              "Se recolectan los datos de entrenamiento",
              "Se elimina el modelo entrenado"
            ],
            correcta: 1
          },
          {
            pregunta: "¿Qué caracteriza al Deep Learning frente al Machine Learning clásico?",
            opciones: [
              "Usa redes neuronales con muchas capas y aprende las características por sí solo",
              "No necesita datos de entrenamiento",
              "Solo puede usarse con datos tabulares",
              "Es más antiguo que el Machine Learning clásico"
            ],
            correcta: 0
          }
        ],
        vf: [
          { pregunta: "El entrenamiento y la inferencia ocurren siempre al mismo tiempo.", correcta: false },
          { pregunta: "En una red neuronal, las capas intermedias ayudan a detectar patrones cada vez más complejos.", correcta: true }
        ]
      }
    },
    {
      id: "m4",
      numero: 4,
      titulo: "IA Generativa y Modelos de Lenguaje (LLM)",
      pregunta: "¿Qué son los modelos generativos y los LLM?",
      intro: "Vas a entender qué es la IA generativa, qué es un LLM, y los conceptos técnicos mínimos para comprenderlos: tokens, embeddings y transformers, además de una limitación central: las alucinaciones.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p><strong>IA generativa:</strong> modelos capaces de crear contenido nuevo (texto, imágenes, audio, código) en lugar de solamente clasificar o predecir una categoría existente.</p>
          <p><strong>LLM (Large Language Model):</strong> un modelo de Deep Learning entrenado con enormes cantidades de texto, capaz de entender y generar lenguaje humano.</p>
          <p>Un LLM no "sabe" hechos como una base de datos; predice, palabra por palabra, cuál es la continuación más probable de un texto.</p>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<ul>
            <li><strong>Token:</strong> la unidad mínima de texto que procesa un modelo de lenguaje.</li>
            <li><strong>Embedding:</strong> una representación numérica que captura el significado de una palabra o frase, de forma que conceptos similares queden "cerca" numéricamente.</li>
            <li><strong>Transformer:</strong> la arquitectura de red neuronal que hizo posible a los LLM actuales, capaz de relacionar todas las palabras de un texto entre sí.</li>
            <li><strong>Modelo multimodal:</strong> un modelo capaz de trabajar con más de un tipo de dato a la vez (texto e imágenes, por ejemplo).</li>
            <li><strong>Alucinación:</strong> cuando un modelo genera información que suena convincente pero es incorrecta o inventada.</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p class="analogia"><strong>Analogía:</strong> es como el autocompletado del teclado del celular, pero mucho más sofisticado: considera el texto completo y patrones aprendidos de una porción enorme de internet.</p>
          <p>Los embeddings permiten que el modelo entienda relaciones de significado: que "rey" y "reina" están más relacionados entre sí que "rey" y "bicicleta", sin que nadie le haya dicho esa regla explícitamente.</p>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<p>El organismo público podría usar un LLM para generar automáticamente un resumen de cada reclamo largo, o para redactar una respuesta estándar personalizada según la categoría del caso.</p>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<pre><code>Texto: "el reclamo es urgente"
Tokens: ["el", "reclamo", "es", "urgente"]

entrada: "el reclamo es"
modelo predice siguiente token &rarr; "urgente"</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<table>
            <tr><th>Prompt</th><th>Contexto</th></tr>
            <tr><td>La instrucción puntual que se le da al modelo</td><td>Toda la información disponible que el modelo tiene en cuenta al responder</td></tr>
          </table>
          <table>
            <tr><th>Modelo</th><th>Aplicación</th></tr>
            <tr><td>El "motor" entrenado que genera respuestas</td><td>El software que usa ese motor para resolver un problema concreto</td></tr>
          </table>`
        }
      ],
      ideas: [
        "La IA generativa crea contenido nuevo; no se limita a clasificar.",
        "Un LLM predice texto token por token, sin 'saber' hechos como una base de datos.",
        "Los embeddings representan el significado de forma numérica.",
        "Las alucinaciones son una limitación real: un LLM puede sonar seguro y estar equivocado."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Cómo genera texto un LLM, a grandes rasgos?",
            opciones: [
              "Busca la respuesta exacta en una base de datos",
              "Predice, token por token, cuál es la continuación más probable del texto",
              "Copia textos completos de internet",
              "Solo puede repetir frases que ya vio exactamente igual"
            ],
            correcta: 1
          },
          {
            pregunta: "¿Qué es una 'alucinación' en el contexto de un LLM?",
            opciones: [
              "Un error de conexión a internet",
              "Cuando el modelo genera información incorrecta pero con apariencia de certeza",
              "Un tipo de entrenamiento supervisado",
              "Un modelo que procesa imágenes"
            ],
            correcta: 1
          }
        ],
        vf: [
          { pregunta: "Un embedding es una representación numérica del significado de un texto.", correcta: true },
          { pregunta: "Un LLM tiene acceso directo a una base de datos de hechos verificados mientras genera texto.", correcta: false }
        ]
      }
    },
    {
      id: "m5",
      numero: 5,
      titulo: "Integración de IA: APIs y aplicaciones",
      pregunta: "¿Cómo uso un modelo desde una aplicación?",
      intro: "Vas a entender cómo se usa un modelo de IA ya entrenado dentro de una aplicación real, qué es una API, qué es el prompting, y cómo se arma la arquitectura básica de un sistema que integra IA.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p><strong>API (Application Programming Interface):</strong> una forma estandarizada en la que un programa puede pedirle a otro que haga algo y le devuelva un resultado, sin conocer cómo funciona internamente.</p>
          <p>Una API de modelos permite que cualquier aplicación le envíe un texto a un modelo ya entrenado y reciba una respuesta, sin tener que entrenar ni alojar el modelo uno mismo.</p>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<ul>
            <li><strong>Prompting:</strong> la técnica de redactar instrucciones claras y efectivas para obtener la respuesta deseada.</li>
            <li><strong>Contexto:</strong> la información adicional que se le da al modelo junto con el prompt.</li>
            <li><strong>Integración de modelos:</strong> conectar un modelo de IA dentro de una aplicación de software.</li>
            <li><strong>Costo computacional:</strong> el consumo de recursos que implica usar un modelo, medido generalmente en tokens procesados.</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p class="analogia"><strong>Analogía:</strong> es como pedir comida a un restaurante en vez de cocinar desde cero. No necesitás saber cómo se entrenó el modelo, solo saber pedirlo correctamente y qué esperar como resultado.</p>
          <p>Flujo básico:</p>
          <pre><code>Usuario &rarr; Aplicación &rarr; API &rarr; Modelo de IA &rarr; Respuesta</code></pre>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<p>El organismo público desarrolla una aplicación web donde el personal pega el texto de un reclamo y recibe automáticamente una categoría sugerida, un resumen y un borrador de respuesta, gracias a una API de IA por detrás.</p>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<pre><code>peticion = {
  "prompt": "Resumi este reclamo en una oracion: " + texto_reclamo
}
respuesta = api_modelo.enviar(peticion)
mostrar_en_pantalla(respuesta.texto)</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<table>
            <tr><th>API</th><th>Modelo</th></tr>
            <tr><td>La "puerta de entrada" para usar el modelo</td><td>El sistema entrenado que genera la respuesta</td></tr>
          </table>`
        }
      ],
      ideas: [
        "La mayoría de las aplicaciones no entrenan sus propios modelos: consumen modelos ya entrenados mediante APIs.",
        "El flujo básico es: usuario → aplicación → API → modelo → respuesta.",
        "El prompting y el contexto determinan en gran medida la calidad de la respuesta.",
        "Usar una API tiene un costo asociado, medido en tokens procesados."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Cuál es el flujo básico para usar un modelo de IA desde una aplicación?",
            opciones: [
              "Usuario → Modelo → Usuario",
              "Usuario → Aplicación → API → Modelo de IA → Respuesta",
              "API → Usuario → Aplicación",
              "Modelo → Datos de entrenamiento → Usuario"
            ],
            correcta: 1
          },
          {
            pregunta: "¿Qué es el 'contexto' al interactuar con un modelo generativo?",
            opciones: [
              "El costo en dinero de usar la API",
              "La información adicional que se le da al modelo junto con el prompt",
              "El lenguaje de programación usado",
              "El nombre del modelo utilizado"
            ],
            correcta: 1
          }
        ],
        vf: [
          { pregunta: "Para usar un modelo de IA en una aplicación, siempre es necesario entrenarlo desde cero.", correcta: false },
          { pregunta: "El costo de usar una API de IA suele medirse en tokens procesados.", correcta: true }
        ]
      }
    },
    {
      id: "m6",
      numero: 6,
      titulo: "Desarrollo de software con IA y formas avanzadas",
      pregunta: "¿Cómo construyo sistemas más complejos con IA?",
      intro: "Este último módulo integra todo lo anterior: qué significa 'desarrollar con IA' en sus distintas variantes, qué son el RAG, los agentes y el function calling, y los principales riesgos de estos sistemas.",
      secciones: [
        {
          titulo: "Concepto fundamental",
          html: `<p>"Desarrollar con IA" no significa una sola cosa. Existen distintos niveles de involucramiento:</p>
          <ul>
            <li>Usar IA como <strong>asistente de programación</strong>.</li>
            <li>Usar una <strong>API de IA</strong> dentro de una aplicación.</li>
            <li>Desarrollar una <strong>aplicación basada en un modelo existente</strong>.</li>
            <li>Ajustar (<strong>fine-tuning</strong>) un modelo existente.</li>
            <li>Entrenar un <strong>modelo desde cero</strong> (poco común fuera de investigación).</li>
            <li>Construir un <strong>sistema compuesto</strong>, combinando varios modelos y herramientas.</li>
          </ul>`
        },
        {
          titulo: "Conceptos relacionados",
          html: `<ul>
            <li><strong>RAG:</strong> técnica que le da a un LLM acceso a información específica al momento de responder, en vez de depender solo de lo aprendido en el entrenamiento.</li>
            <li><strong>Agente de IA:</strong> un sistema que usa un LLM para decidir qué acciones tomar y cumplir un objetivo, no solo para responder.</li>
            <li><strong>Function calling:</strong> la capacidad de un modelo de "pedir" que se ejecute una función externa como parte de su respuesta.</li>
            <li><strong>Fine-tuning:</strong> re-entrenar levemente un modelo existente con datos propios para especializarlo.</li>
          </ul>`
        },
        {
          titulo: "¿Cómo funciona?",
          html: `<p class="analogia"><strong>RAG:</strong> es como rendir un examen a libro abierto: en vez de "recordar" todo de memoria, el modelo consulta documentos específicos antes de responder.</p>
          <pre><code>Usuario &rarr; Aplicación &rarr; RAG &rarr; Base de conocimiento &rarr; Modelo &rarr; Respuesta</code></pre>
          <p class="analogia"><strong>Agentes:</strong> en vez de un LLM que solo "habla", un agente es un LLM al que además se le dan "manos": puede buscar un dato, consultar una API o ejecutar una acción.</p>`
        },
        {
          titulo: "Ejemplo práctico",
          html: `<p>El organismo público, con todo lo visto en el curso, construye un asistente que recibe la consulta de un ciudadano, busca información relevante (RAG), consulta el estado de un trámite en una base de datos (function calling), y genera una respuesta clara combinando toda esa información.</p>`
        },
        {
          titulo: "Ejemplo técnico",
          html: `<pre><code>pregunta = "en que estado esta mi reclamo numero 4521?"

if requiere_dato_externo(pregunta):
    dato = consultar_base_de_datos(numero_reclamo=4521)
    respuesta = modelo.generar(pregunta, contexto=dato)
else:
    respuesta = modelo.generar(pregunta)</code></pre>`
        },
        {
          titulo: "Diferencias importantes",
          html: `<table>
            <tr><th>RAG</th><th>Fine-tuning</th></tr>
            <tr><td>Le da al modelo información externa al momento de responder</td><td>Modifica el modelo entrenándolo un poco más con datos propios</td></tr>
            <tr><td>Más rápido y económico de actualizar</td><td>Requiere más tiempo, datos y costo</td></tr>
          </table>`
        },
        {
          titulo: "Riesgos y limitaciones",
          html: `<ul>
            <li><strong>Alucinaciones:</strong> el RAG ayuda a reducirlas, pero no las elimina.</li>
            <li><strong>Sesgos:</strong> el modelo puede reproducir prejuicios presentes en los datos de entrenamiento.</li>
            <li><strong>Privacidad:</strong> enviar información sensible a un modelo externo requiere cuidado.</li>
            <li><strong>Seguridad:</strong> un agente con acceso a herramientas puede ejecutar acciones no deseadas si no está bien controlado.</li>
            <li><strong>Gobernanza:</strong> definir quién es responsable de las decisiones que sugiere un sistema de IA.</li>
          </ul>`
        }
      ],
      ideas: [
        "Desarrollar con IA abarca desde usarla como asistente de código hasta construir sistemas completos.",
        "RAG le da al modelo acceso a información externa; el fine-tuning modifica el modelo en sí.",
        "Los agentes combinan un LLM con la capacidad de tomar acciones mediante herramientas.",
        "Ningún sistema de IA está exento de riesgos: alucinaciones, sesgos, privacidad y seguridad deben considerarse siempre."
      ],
      quiz: {
        mc: [
          {
            pregunta: "¿Qué problema resuelve principalmente el RAG?",
            opciones: [
              "Reduce el costo de entrenar un modelo desde cero",
              "Le da al modelo acceso a información específica y actualizada al momento de responder",
              "Elimina por completo las alucinaciones",
              "Reemplaza la necesidad de usar una API"
            ],
            correcta: 1
          },
          {
            pregunta: "¿Qué hace que un agente de IA sea distinto de un simple LLM que responde texto?",
            opciones: [
              "El agente no usa modelos de lenguaje",
              "El agente puede decidir tomar acciones y usar herramientas para cumplir un objetivo",
              "El agente solo funciona sin conexión a internet",
              "No hay ninguna diferencia real"
            ],
            correcta: 1
          }
        ],
        vf: [
          { pregunta: "El fine-tuning modifica el modelo entrenándolo un poco más con datos propios.", correcta: true },
          { pregunta: "Un sistema de IA con RAG o agentes está completamente libre de riesgos de seguridad y sesgos.", correcta: false }
        ]
      }
    }
  ],
  proximosPasos: [
    { area: "Programación", texto: "Base indispensable para todo lo demás. Python es el lenguaje más usado en IA y Ciencia de Datos." },
    { area: "Matemática y estadística", texto: "Álgebra lineal, probabilidad y estadística: la base matemática detrás de Machine Learning, en paralelo con programación." },
    { area: "Ciencia de datos", texto: "Cómo limpiar, explorar y analizar datos antes de usarlos en cualquier modelo." },
    { area: "Machine Learning", texto: "Los algoritmos vistos conceptualmente en este curso, ahora en profundidad matemática y práctica." },
    { area: "Deep Learning", texto: "Redes neuronales, arquitecturas específicas (convolucionales, transformers) y su matemática subyacente." },
    { area: "Ingeniería de datos", texto: "Cómo construir los sistemas que recolectan y preparan datos a gran escala." },
    { area: "IA generativa", texto: "Profundización en LLM, transformers, embeddings y técnicas de generación de contenido." },
    { area: "Ingeniería de IA / AI Engineering", texto: "Cómo integrar modelos en aplicaciones reales: APIs, RAG, agentes, arquitecturas completas." },
    { area: "MLOps", texto: "Cómo llevar modelos a producción, monitorearlos y mantenerlos funcionando de forma confiable." },
    { area: "Ética, seguridad y gobernanza", texto: "Transversal desde el inicio: cada vez más relevante a medida que los sistemas ganan impacto real." }
  ]
};
