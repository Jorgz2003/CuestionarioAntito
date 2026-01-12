const quizData = [
  // I. FISIOLOGÍA CARDIOVASCULAR
  {
    category: "Fisiología Cardiovascular",
    question: "1. ¿Cuál es la duración promedio de un ciclo cardíaco completo en un adulto en reposo (75 lpm)?",
    hint: "Suma el tiempo de la sístole y la diástole.",
    options: [
      { text: "0,3 segundos", correct: false, feedback: "Corresponde solo a la sístole ventricular." },
      { text: "0,8 segundos", correct: true, feedback: "Es el tiempo total del ciclo (0,3s sístole + 0,5s diástole)." },
      { text: "0,5 segundos", correct: false, feedback: "Corresponde solo a la diástole ventricular." },
      { text: "1,0 segundos", correct: false, feedback: "Correspondería a una frecuencia cardíaca más lenta (60 lpm)." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "2. Durante el ciclo cardíaco, ¿en qué fase se produce el llenado del 70-80% del volumen ventricular?",
    hint: "Ocurre de forma pasiva antes de que las aurículas se contraigan.",
    options: [
      { text: "Sístole auricular", correct: false, feedback: "Solo aporta el 20-30% final del llenado." },
      { text: "Contracción isovolumétrica", correct: false, feedback: "Todas las válvulas están cerradas; no hay llenado." },
      { text: "Llenado ventricular pasivo", correct: true, feedback: "La sangre fluye por gradiente de presión al abrirse las válvulas AV." },
      { text: "Relajación isovolumétrica", correct: false, feedback: "Fase previa al llenado donde el ventrículo se relaja con válvulas cerradas." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "3. Según la Ley de Frank-Starling, el principal determinante de la fuerza de contracción es:",
    hint: "Tiene que ver con cuánto se estira el músculo antes de contraerse.",
    options: [
      { text: "La frecuencia cardíaca", correct: false, feedback: "Afecta el gasto, pero no es la base de esta ley intrínseca." },
      { text: "La resistencia periférica (Poscarga)", correct: false, feedback: "Es la carga que se opone a la eyección." },
      { text: "El estiramiento de las fibras (Precarga)", correct: true, feedback: "A mayor llenado, mayor fuerza de eyección." },
      { text: "El tono parasimpático", correct: false, feedback: "El vago reduce la frecuencia, no activa la ley de Starling." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "4. En el electrocardiograma (ECG), ¿qué evento representa la Onda P?",
    hint: "Es la primera señal eléctrica del ciclo.",
    options: [
      { text: "Despolarización auricular", correct: true, feedback: "Es la activación eléctrica de las aurículas." },
      { text: "Repolarización auricular", correct: false, feedback: "Ocurre durante el QRS y queda oculta." },
      { text: "Despolarización ventricular", correct: false, feedback: "Esto es el complejo QRS." },
      { text: "Cierre de la válvula mitral", correct: false, feedback: "Es un evento mecánico, no eléctrico." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "5. El signo más característico de una oclusión coronaria aguda (infarto total) en el ECG es:",
    hint: "Observa el segmento que une el complejo QRS con la onda T.",
    options: [
      { text: "Inversión de la onda T", correct: false, feedback: "Indica isquemia, pero no necesariamente oclusión total." },
      { text: "Onda Q profunda", correct: false, feedback: "Indica necrosis o infarto antiguo." },
      { text: "Acortamiento del intervalo PR", correct: false, feedback: "Se asocia a preexcitación, no a infarto." },
      { text: "Elevación del segmento ST", correct: true, feedback: "Indica lesión transmural por bloqueo arterial agudo." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "6. ¿Cómo se define el Gasto Cardíaco (GC)?",
    hint: "Es el volumen total de sangre expulsado por el corazón en un minuto.",
    options: [
      { text: "Volumen Sistólico x Frecuencia Cardíaca", correct: true, feedback: "ml/latido multiplicado por latidos/minuto." },
      { text: "Presión Arterial / Resistencia", correct: false, feedback: "Es la ley de Ohm para el flujo." },
      { text: "Volumen Diastólico - Volumen Sistólico", correct: false, feedback: "Esta es la definición del Volumen Sistólico (VS)." },
      { text: "Frecuencia Cardíaca + Presión de Pulso", correct: false, feedback: "No es una fórmula fisiológica válida." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "7. ¿Qué fenómeno acústico genera el primer ruido cardíaco (R1)?",
    hint: "Es el cierre de las válvulas al inicio de la sístole.",
    options: [
      { text: "Apertura de la válvula aórtica", correct: false, feedback: "Las aperturas no suelen sonar en condiciones normales." },
      { text: "Cierre de las válvulas auriculoventriculares (Mitral/Tricúspide)", correct: true, feedback: "Marca el inicio de la sístole." },
      { text: "Cierre de las válvulas semilunares", correct: false, feedback: "Esto genera el segundo ruido (R2)." },
      { text: "Contracción de los músculos papilares", correct: false, feedback: "No es la causa principal del ruido R1." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "8. El efecto del sistema nervioso simpático (noradrenalina) sobre el corazón se define como:",
    hint: "Aumenta tanto la velocidad como la fuerza.",
    options: [
      { text: "Cronotropismo e inotropismo negativo", correct: false, feedback: "Este es el efecto del sistema parasimpático." },
      { text: "Cronotropismo positivo y dromotropismo negativo", correct: false, feedback: "El simpático es positivo para ambos." },
      { text: "Vasodilatación coronaria refleja", correct: false, feedback: "No define el efecto directo sobre el miocardio." },
      { text: "Cronotropismo e inotropismo positivo", correct: true, feedback: "Aumenta frecuencia y fuerza de contracción." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "9. Una depresión del segmento ST en el ECG es sugerente de:",
    hint: "Es una lesión menos severa que la elevación, o bien, una isquemia.",
    options: [
      { text: "Isquemia miocárdica o infarto subendocárdico", correct: true, feedback: "Indica compromiso del flujo sin oclusión total." },
      { text: "Infarto agudo total", correct: false, feedback: "Eso da elevación del ST." },
      { text: "Bloqueo de rama derecha", correct: false, feedback: "Ensancha el QRS, no deprime el ST necesariamente." },
      { text: "Hiperpotasemia severa", correct: false, feedback: "Suele dar ondas T picudas." }
    ]
  },
  {
    category: "Fisiología Cardiovascular",
    question: "10. ¿Cuál es el valor normal de la presión arterial sistólica en un adulto joven sano?",
    hint: "Es la presión máxima alcanzada durante la eyección ventricular.",
    options: [
      { text: "80 mmHg", correct: false, feedback: "Es el valor normal de la presión diastólica." },
      { text: "140 mmHg", correct: false, feedback: "Es el límite para definir hipertensión." },
      { text: "120 mmHg", correct: true, feedback: "Es el estándar fisiológico para la presión sistólica." },
      { text: "60 mmHg", correct: false, feedback: "Indicaría hipotensión." }
    ]
  },

  // II. FISIOLOGÍA RESPIRATORIA
  {
    category: "Fisiología Respiratoria",
    question: "11. La función principal del surfactante pulmonar (producido por Neumocitos II) es:",
    hint: "Evita que el pulmón \"se pegue\" o colapse al final de la espiración.",
    options: [
      { text: "Aumentar la tensión superficial", correct: false, feedback: "Causaría el colapso del alvéolo." },
      { text: "Disminuir la tensión superficial", correct: true, feedback: "Estabiliza los alvéolos y reduce el trabajo respiratorio." },
      { text: "Facilitar el intercambio de CO2", correct: false, feedback: "Su función es mecánica, no química." },
      { text: "Producir moco bronquial", correct: false, feedback: "El moco es producido por las células caliciformes." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "12. ¿Qué volumen representa el aire inspirado o espirado en una respiración normal y tranquila?",
    hint: "Son aproximadamente 500 ml.",
    options: [
      { text: "Volumen Corriente (VC)", correct: true, feedback: "Es el volumen basal de cada ciclo respiratorio." },
      { text: "Volumen de Reserva Inspiratoria", correct: false, feedback: "Es el aire extra que puedes meter a la fuerza." },
      { text: "Capacidad Vital", correct: false, feedback: "Es la suma de todos los volúmenes movilizables." },
      { text: "Volumen Residual", correct: false, feedback: "Es el aire que nunca sale de los pulmones." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "13. El estímulo más potente para que los quimiorreceptores centrales aumenten la ventilación es:",
    hint: "El cerebro es muy sensible a los cambios de pH causados por este gas.",
    options: [
      { text: "Descenso de la PO2 arterial", correct: false, feedback: "Estimula principalmente a los receptores periféricos." },
      { text: "Aumento de la presión atmosférica", correct: false, feedback: "No es un estímulo químico directo." },
      { text: "Aumento de la PCO2 y descenso del pH", correct: true, feedback: "El CO2 cruza la barrera hematoencefálica y activa el centro respiratorio." },
      { text: "Descenso del Bicarbonato en sangre", correct: false, feedback: "El bicarbonato no cruza fácilmente al LCR." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "14. ¿Qué sucede con la presión intrapleural durante la fase de inspiración?",
    hint: "Para que el pulmón se expanda, la succión de la pleura debe aumentar.",
    options: [
      { text: "Se vuelve más negativa", correct: true, feedback: "Pasa de -5 cmH2O a -8 cmH2O aprox. para expandir el pulmón." },
      { text: "Se vuelve positiva", correct: false, feedback: "Esto colapsaría el pulmón." },
      { text: "Se iguala a la atmosférica", correct: false, feedback: "Esto ocurre en un neumotórax." },
      { text: "No cambia", correct: false, feedback: "El gradiente de presión es indispensable para el flujo." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "15. La Carina es una estructura de gran importancia clínica ubicada en:",
    hint: "Es el punto interno donde la tráquea se divide.",
    options: [
      { text: "La laringe, sobre las cuerdas vocales", correct: false, feedback: "Ahí está la glotis." },
      { text: "El ingreso a los bronquiolos terminales", correct: false, feedback: "Está mucho más arriba en el árbol respiratorio." },
      { text: "La base de los pulmones", correct: false, feedback: "Es una estructura central, no basal." },
      { text: "La bifurcación de la tráquea (nivel T4)", correct: true, feedback: "Punto de división hacia los bronquios principales." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "16. ¿Cuál es la forma principal de transporte del Dióxido de Carbono (CO2) en la sangre?",
    hint: "Requiere la enzima Anhidrasa Carbónica dentro del glóbulo rojo.",
    options: [
      { text: "Disuelto físicamente en el plasma", correct: false, feedback: "Solo representa el 7%." },
      { text: "En forma de ión Bicarbonato (HCO3-)", correct: true, feedback: "Es la forma mayoritaria (aprox. 70%)." },
      { text: "Unido a la hemoglobina (Carbaminohemoglobina)", correct: false, feedback: "Representa cerca del 23%." },
      { text: "Como burbujas de gas libre", correct: false, feedback: "Causaría una embolia gaseosa mortal." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "17. La Capacidad Vital (CV) se define como la suma de:",
    hint: "Es todo el aire que una persona puede movilizar voluntariamente.",
    options: [
      { text: "VC + Volumen Residual", correct: false, feedback: "El volumen residual no es parte de la capacidad vital." },
      { text: "VC + VRI + VRE", correct: true, feedback: "Volumen Corriente + Reserva Inspiratoria + Reserva Espiratoria." },
      { text: "Capacidad Pulmonar Total - VRI", correct: false, feedback: "Definición incorrecta de los componentes." },
      { text: "VRI + VRE", correct: false, feedback: "Le falta el Volumen Corriente para ser la capacidad vital." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "18. El \"Efecto Bohr\" describe que la afinidad de la hemoglobina por el oxígeno disminuye cuando:",
    hint: "Ocurre en los tejidos activos donde hay mucho CO2 y ácido.",
    options: [
      { text: "El pH disminuye y la PCO2 aumenta", correct: true, feedback: "Facilita la entrega de oxígeno a los tejidos (curva a la derecha)." },
      { text: "El pH aumenta (alcalosis)", correct: false, feedback: "El aumento de pH aumenta la afinidad (curva a la izquierda)." },
      { text: "La temperatura disminuye", correct: false, feedback: "El frío aumenta la afinidad." },
      { text: "La altitud disminuye", correct: false, feedback: "No es el mecanismo directo del efecto Bohr." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "19. Según la fisiología respiratoria, el principal factor que determina la resistencia de la vía aérea es:",
    hint: "Pequeños cambios de diámetro alteran drásticamente la resistencia.",
    options: [
      { text: "La viscosidad del aire", correct: false, feedback: "Es constante y muy baja." },
      { text: "La longitud de la tráquea", correct: false, feedback: "Influye poco comparado con el calibre." },
      { text: "La frecuencia respiratoria", correct: false, feedback: "Afecta el flujo total, pero no la resistencia física del tubo." },
      { text: "El radio de las vías respiratorias", correct: true, feedback: "Piensa en la ley de Poiseuille (el radio es clave)." }
    ]
  },
  {
    category: "Fisiología Respiratoria",
    question: "20. En las Zonas de West, ¿qué zona tiene la mayor perfusión (flujo de sangre) por efecto de la gravedad?",
    hint: "La sangre es pesada y tiende a acumularse abajo.",
    options: [
      { text: "Zona 1 (Ápice)", correct: false, feedback: "Es la zona con menor flujo y mayor ventilación relativa." },
      { text: "Zona 3 (Base)", correct: true, feedback: "Los vasos están totalmente abiertos por la presión hidrostática." },
      { text: "Zona 2 (Media)", correct: false, feedback: "El flujo es intermitente según el ciclo cardíaco." },
      { text: "Todas las zonas tienen igual flujo", correct: false, feedback: "La gravedad crea diferencias significativas." }
    ]
  },

  // III. FISIOLOGÍA RENAL
  {
    category: "Fisiología Renal",
    question: "21. ¿Cuál es la unidad estructural y funcional básica del riñón?",
    hint: "Hay cerca de un millón en cada riñón.",
    options: [
      { text: "El glomérulo", correct: false, feedback: "Es solo el componente de filtración." },
      { text: "La nefrona", correct: true, feedback: "Incluye el corpúsculo renal y todo el sistema tubular." },
      { text: "El túbulo colector", correct: false, feedback: "Es donde drenan varias unidades funcionales." },
      { text: "La pirámide de Malpighi", correct: false, feedback: "Es una estructura macroscópica de la médula." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "22. ¿Qué hormona aumenta la reabsorción de agua en el túbulo colector?",
    hint: "Se secreta en respuesta a una alta osmolaridad plasmática (sed).",
    options: [
      { text: "Aldosterona", correct: false, feedback: "Reabsorbe sodio y secreta potasio; el agua la sigue, pero no es su función directa." },
      { text: "Insulina", correct: false, feedback: "Regula la glucosa, no tiene efecto directo en el colector." },
      { text: "Renina", correct: false, feedback: "Es una enzima que inicia la cascada para subir la presión." },
      { text: "Hormona Antidiurética (ADH / Vasopresina)", correct: true, feedback: "Inserta acuaporinas para recuperar agua libre." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "23. El valor normal de la Tasa de Filtración Glomerular (VFG) en un adulto sano es:",
    hint: "Cantidad de plasma filtrado por minuto.",
    options: [
      { text: "125 ml/min", correct: true, feedback: "Es el valor promedio normal (aprox. 180 L/día)." },
      { text: "50 ml/min", correct: false, feedback: "Indicaría una falla renal moderada." },
      { text: "500 ml/min", correct: false, feedback: "Valor excesivamente alto." },
      { text: "10 ml/min", correct: false, feedback: "Indicaría insuficiencia renal severa." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "24. ¿Por qué la Creatinina sérica es un buen marcador de la función renal?",
    hint: "Es un desecho metabólico que el riñón maneja de forma sencilla.",
    options: [
      { text: "Porque se reabsorbe totalmente", correct: false, feedback: "Si se reabsorbiera, no serviría para medir excreción." },
      { text: "Porque el riñón la produce", correct: false, feedback: "La producen los músculos, no el riñón." },
      { text: "Porque se filtra libremente y no se reabsorbe significativamente", correct: true, feedback: "Su nivel en sangre refleja cuánto está filtrando el riñón." },
      { text: "Porque regula la presión arterial", correct: false, feedback: "No tiene funciones reguladoras." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "25. La Angiotensina II tiene como función principal:",
    hint: "Su objetivo es elevar la presión arterial cuando esta cae.",
    options: [
      { text: "Provocar una potente vasoconstricción y estimular la aldosterona", correct: true, feedback: "Aumenta la resistencia y retiene sal." },
      { text: "Provocar vasodilatación masiva", correct: false, feedback: "Haría caer la presión aún más." },
      { text: "Disminuir la sed", correct: false, feedback: "Estimula la sed en el hipotálamo." },
      { text: "Inhibir la liberación de ADH", correct: false, feedback: "Al contrario, suele favorecerla." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "26. ¿En qué parte de la nefrona ocurre la mayor parte de la reabsorción (aprox. 65%) de agua y solutos?",
    hint: "Es el segmento que sigue inmediatamente al glomérulo.",
    options: [
      { text: "Asa de Henle", correct: false, feedback: "Aquí se crea el gradiente osmótico, pero no es la mayor reabsorción." },
      { text: "Túbulo Distal", correct: false, feedback: "Se encarga de ajustes finos de electrolitos." },
      { text: "Túbulo Contorneado Proximal", correct: true, feedback: "Reabsorbe masivamente agua, sodio, glucosa y aminoácidos." },
      { text: "Glomérulo", correct: false, feedback: "Su función es filtrar, no reabsorber." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "27. La Mácula Densa es un sensor ubicado en el túbulo distal que detecta:",
    hint: "Monitorea la cantidad de sal que \"sobra\" al final del proceso.",
    options: [
      { text: "La presión de oxígeno en sangre", correct: false, feedback: "No es su función." },
      { text: "La concentración de Cloruro de Sodio (NaCl)", correct: true, feedback: "Regula el flujo sanguíneo glomerular según la carga de sal." },
      { text: "La concentración de glucosa", correct: false, feedback: "La glucosa no debería llegar ahí en un sano." },
      { text: "El nivel de potasio sérico", correct: false, feedback: "Monitorea el sodio/cloro tubular." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "28. ¿Qué células son las responsables de secretar Renina ante una caída de presión?",
    hint: "Están en la pared de la arteriola aferente.",
    options: [
      { text: "Células Yuxtaglomerulares (o granulares)", correct: true, feedback: "Secretan renina para activar el sistema RAA." },
      { text: "Células del túbulo colector", correct: false, feedback: "No tienen función endocrina de este tipo." },
      { text: "Podocitos", correct: false, feedback: "Forman parte de la barrera de filtración." },
      { text: "Células de la médula renal", correct: false, feedback: "La renina se secreta en la corteza." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "29. En un individuo sano, ¿cuánta glucosa debería encontrarse en la orina final?",
    hint: "El riñón recupera toda la glucosa porque es energía valiosa.",
    options: [
      { text: "10%", correct: false, feedback: "Indicaría una pérdida anormal de nutrientes." },
      { text: "50%", correct: false, feedback: "Sugeriría una diabetes descompensada." },
      { text: "0% (se reabsorbe toda en el túbulo proximal)", correct: true, feedback: "El umbral renal es alto y no debería haber pérdida." },
      { text: "100%", correct: false, feedback: "El cuerpo moriría por falta de sustrato energético." }
    ]
  },
  {
    category: "Fisiología Renal",
    question: "30. El aparato yuxtaglomerular está compuesto por:",
    hint: "Es el sistema sensor que controla la nefrona.",
    options: [
      { text: "Glomérulo y Cápsula de Bowman", correct: false, feedback: "Eso es el corpúsculo renal." },
      { text: "Pelvis renal y Uréter", correct: false, feedback: "Son estructuras de salida de orina." },
      { text: "Médula y Corteza renal", correct: false, feedback: "Son las regiones macroscópicas del riñón." },
      { text: "Mácula densa y Células yuxtaglomerulares", correct: true, feedback: "Coordinan la respuesta de presión y filtración." }
    ]
  },

  // IV. INTEGRACIÓN Y DETALLES ADICIONALES
  {
    category: "Integración y Detalles Adicionales",
    question: "31. ¿Qué ruido cardíaco marca el inicio de la diástole ventricular?",
    hint: "Se produce por el cierre de las válvulas semilunares.",
    options: [
      { text: "Primer Ruido (R1)", correct: false, feedback: "Marca el inicio de la sístole." },
      { text: "Tercer Ruido (R3)", correct: false, feedback: "Suele ser por llenado rápido ventricular." },
      { text: "Segundo Ruido (R2)", correct: true, feedback: "Cierre de válvulas semilunares." },
      { text: "Cuarto Ruido (R4)", correct: false, feedback: "Es patológico por contracción auricular contra ventrículo rígido." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "32. ¿Qué efecto tiene la acidosis (pH bajo) sobre los vasos sanguíneos pulmonares?",
    hint: "El pulmón es el único lugar donde la falta de oxígeno o el ácido cierran los vasos.",
    options: [
      { text: "Vasodilatación", correct: false, feedback: "Esto ocurre en la circulación sistémica." },
      { text: "Vasoconstricción pulmonar", correct: true, feedback: "Aumenta la resistencia para desviar sangre a zonas mejor ventiladas." },
      { text: "No tiene efecto", correct: false, feedback: "El lecho pulmonar es muy reactivo al pH." },
      { text: "Ruptura capilar", correct: false, feedback: "Es un cambio funcional, no estructural." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "33. En el ECG, el complejo QRS representa:",
    hint: "Es la señal eléctrica que precede a la contracción de los ventrículos.",
    options: [
      { text: "Despolarización auricular", correct: false, feedback: "Es la onda P." },
      { text: "Despolarización ventricular", correct: true, feedback: "Es el evento eléctrico más potente del corazón." },
      { text: "Repolarización ventricular", correct: false, feedback: "Es la onda T." },
      { text: "Repolarización auricular", correct: false, feedback: "Ocurre al mismo tiempo pero queda oculta por el QRS." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "34. La \"Capacidad Residual Funcional\" es el aire que queda en los pulmones tras:",
    hint: "Es el aire que sirve de colchón entre respiraciones normales.",
    options: [
      { text: "Una inspiración máxima", correct: false, feedback: "Eso sería la Capacidad Pulmonar Total." },
      { text: "Una espiración normal y tranquila", correct: true, feedback: "Es la suma de VRE + VR." },
      { text: "Una espiración forzada máxima", correct: false, feedback: "Eso sería el Volumen Residual." },
      { text: "Aguantar la respiración", correct: false, feedback: "No define una capacidad estándar." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "35. La principal función de la médula renal es:",
    hint: "Es la zona donde se concentra la orina gracias al Asa de Henle.",
    options: [
      { text: "Concentrar la orina mediante un gradiente osmótico", correct: true, feedback: "Permite que el cuerpo ahorre agua." },
      { text: "Filtrar las proteínas plasmáticas", correct: false, feedback: "Las proteínas no se filtran en el glomérulo (corteza)." },
      { text: "Producir orina diluida exclusivamente", correct: false, feedback: "Su función es la concentración." },
      { text: "Secretar moco protector", correct: false, feedback: "El riñón no secreta moco." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "36. La Poscarga se define como:",
    hint: "Es la \"pared\" contra la que debe empujar el corazón.",
    options: [
      { text: "El volumen de sangre al final de la diástole", correct: false, feedback: "Eso es la Precarga." },
      { text: "La frecuencia de latidos por minuto", correct: false, feedback: "Eso es cronotropismo." },
      { text: "La velocidad de conducción eléctrica", correct: false, feedback: "Eso es dromotropismo." },
      { text: "La tensión en la pared ventricular durante la eyección", correct: true, feedback: "Determinada por la resistencia arterial." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "37. El principal músculo responsable de la inspiración en reposo es:",
    hint: "Músculo en forma de paracaídas que separa tórax de abdomen.",
    options: [
      { text: "Intercostales internos", correct: false, feedback: "Ayudan en la espiración forzada." },
      { text: "El Diafragma", correct: true, feedback: "Su contracción expande la caja torácica hacia abajo." },
      { text: "Esternocleidomastoideo", correct: false, feedback: "Es un músculo inspiratorio accesorio." },
      { text: "Los abdominales", correct: false, feedback: "Ayudan en la espiración activa." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "38. ¿Qué efecto tiene el Óxido Nítrico (NO) producido por el endotelio?",
    hint: "Es una señal de relajación para los vasos.",
    options: [
      { text: "Vasoconstricción potente", correct: false, feedback: "Eso lo hace la Endotelina o Angiotensina II." },
      { text: "Aumenta la viscosidad de la sangre", correct: false, feedback: "No tiene ese efecto." },
      { text: "Vasodilatación", correct: true, feedback: "Relaja el músculo liso y baja la resistencia." },
      { text: "Inhibibe la producción de orina", correct: false, feedback: "Su efecto es vascular periférico." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "39. ¿Qué indica una Onda Q patológica (muy profunda y ancha) en el ECG?",
    hint: "Es la cicatriz eléctrica de un tejido que ya no funciona.",
    options: [
      { text: "Un infarto que está ocurriendo justo ahora", correct: false, feedback: "Se vería elevación del ST." },
      { text: "Necrosis miocárdica (infarto antiguo)", correct: true, feedback: "Representa tejido muerto o cicatrizado." },
      { text: "Una arritmia sin importancia", correct: false, feedback: "Las ondas Q profundas siempre son relevantes." },
      { text: "Corazón de atleta", correct: false, feedback: "Los atletas suelen tener voltajes altos, no ondas Q patológicas." }
    ]
  },
  {
    category: "Integración y Detalles Adicionales",
    question: "40. ¿Qué porcentaje del peso corporal de un adulto promedio es Agua Corporal Total?",
    hint: "Somos mayoritariamente agua.",
    options: [
      { text: "20%", correct: false, feedback: "Es muy poco." },
      { text: "40%", correct: false, feedback: "Corresponde al líquido intracelular solamente." },
      { text: "90%", correct: false, feedback: "Solo en medusas o embriones muy tempranos." },
      { text: "60%", correct: true, feedback: "Es el valor estándar para un hombre adulto joven." }
    ]
  }
];