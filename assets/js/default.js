const DEFAULT_CONFIG = {
  "config": {
    "defaultLang": "pt",
    "supportedLangs": ["es", "en", "pt"]
  },

  "theme": {
    "accent": "#eab308",
    "urlCard": "#eab308",
    "nav": "#0d0d0d",
    "sidebar": "#0b0b0b",
    "content": "#050505",
    "notes": "#0b0b0b",
    "textMain": "#a3a3a3",
    "textHeader": "#ffffff"
  },

  "dictionary": {
    "btnLoad": { "es": "📂 Cargar", "en": "📂 Load", "pt": "📂 Carregar" },
    "btnBackup": { "es": "💾 Respaldo", "en": "💾 Backup", "pt": "💾 Backup" },
    "btnSave": { "es": "📄 Guardar Log", "en": "📄 Save Log", "pt": "📄 Salvar Log" },
    "btnClear": { "es": "🧹 Limpiar", "en": "🧹 Clear", "pt": "🧹 Limpar" },

    "statusOngoing": { "es": "🔴 En Curso", "en": "🔴 Ongoing", "pt": "🔴 Em Andamento" },
    "statusPending": { "es": "🟡 Pendiente", "en": "🟡 Pending", "pt": "🟡 Pendente" },
    "statusDone": { "es": "🟢 Finalizado", "en": "🟢 Done", "pt": "🟢 Concluído" },

    "searchPlaceholder": { "es": "Buscar...", "en": "Search...", "pt": "Pesquisar..." },
    "notesPlaceholder": { "es": "Notas del caso...", "en": "Case notes...", "pt": "Notas do caso..." },
    "notesHeader": { "es": "📝 Notas", "en": "📝 Notes", "pt": "📝 Notas" },

    "Saludos y Scripts": { "es": "Saludos y Scripts", "en": "Greetings & Scripts", "pt": "Saudações e Scripts" },
    "Respuestas Frecuentes": { "es": "Respuestas Frecuentes", "en": "FAQ", "pt": "Perguntas Frequentes" },

    "Acceso y Cuentas": { "es": "Acceso y Cuentas", "en": "Accounts & Access", "pt": "Contas e Acesso" },
    "Software": { "es": "Software", "en": "Software", "pt": "Software" },
    "Hardware": { "es": "Hardware", "en": "Hardware", "pt": "Hardware" },
    "Red y VPN": { "es": "Red y VPN", "en": "Network & VPN", "pt": "Rede e VPN" },
    "Seguridad": { "es": "Seguridad", "en": "Security", "pt": "Segurança" },
    "Admin Links": { "es": "Links Admin", "en": "Admin Links", "pt": "Links Admin" },

    "Confirmación": { "es": "Confirmación", "en": "Confirmation", "pt": "Confirmação" },
    "Confirmación Editable": { "es": "Confirmación Editable", "en": "Editable Conf.", "pt": "Conf. Editável" },
    "Fallido": { "es": "Fallido", "en": "Failed", "pt": "Falhou" },
    "En Progreso": { "es": "En Progreso", "en": "In Progress", "pt": "Em Progresso" },

    "Saludos": { "es": "Saludos", "en": "Greetings", "pt": "Saudações" }
  },

  "hidden": {
    "myName": "Miguel Cariño",
    "company": "Carino Systems",
    "client": "The Good Company",
    "supportPhone": "1-800-555-1234"
  },

  "note": "",

  "filters": {
    "ticketID": { "regex": "(?:INC|CHG|REQ|PRB)-\\d+" }
  },

  "fields": {
    /* Ticket / requester */
    "ticketID": "INC-000123",
    "requesterName": "Maria Ruiz",
    "requesterEmail": "maria@example.com",
    "requesterUser": "mruiz",
    "department": "Finance",
    "location": "CDMX",

    /* Classification */
    "requestType": "Incident",
    "category": "Software",
    "subcategory": "Login",
    "priority": "P2",
    "impact": "Single user",
    "urgency": "High",

    /* Asset */
    "assetTag": "IT-02419",
    "deviceType": "Laptop",
    "manufacturer": "Dell",
    "model": "Latitude 5420",
    "serialNumber": "ABC123XYZ",
    "hostname": "LAP-MRUIZ-01",

    /* OS / environment */
    "os": "Windows",
    "osVersion": "11 23H2",
    "architecture": "x86_64",
    "kernelVersion": "",
    "browser": "Chrome",
    "browserVersion": "123.0.0",
    "appName": "Outlook",
    "appVersion": "2402",
    "installMethod": "MSI",
    "virtualized": "No",

    /* Network */
    "networkType": "Wi-Fi",
    "ssid": "CorpWiFi",
    "localIP": "10.10.12.34",
    "gateway": "10.10.12.1",
    "dns": "10.10.0.10, 10.10.0.11",
    "vpn": "No",
    "proxy": "Auto",
    "url": "https://portal.company.com",
    "port": "443",

    /* Issue description */
    "summary": "Cannot sign in to Outlook",
    "errorMessage": "0x800ccc0f",
    "whenStarted": "2026-01-06 09:10",
    "frequency": "Always",
    "reproSteps": "1) Open Outlook 2) Click Send/Receive 3) Error appears",
    "expected": "Emails send successfully",
    "actual": "Connection fails with error",

    /* Change / context */
    "recentChange": "Windows update KB503xxx",
    "lastKnownWorking": "2026-01-05",
    "workaround": "Using webmail temporarily",

    /* Diagnostics */
    "logs": "Paste logs here",
    "screenshots": "Attached",
    "remoteAccess": "Yes (Quick Assist/AnyDesk/SSH)",
    "maintenanceWindow": "After 18:00"
  },

  "fieldOptions": {
    "category":    ["Software", "Hardware", "Network", "Access", "Security"],
    "requestType": ["Incident", "Request", "Change", "Problem"],
    "priority":    ["P1", "P2", "P3", "P4"],
    "impact":      ["Organization", "Department", "Multiple users", "Single user"],
    "urgency":     ["Critical", "High", "Medium", "Low"],
    "deviceType":  ["Laptop", "Desktop", "Tablet", "Phone", "Server", "Virtual"],
    "os":          ["Windows", "macOS", "Linux", "iOS", "Android"],
    "networkType": ["Wi-Fi", "Ethernet", "Cellular"],
    "vpn":         ["Yes", "No", "N/A"],
    "virtualized": ["Yes", "No"],
    "frequency":   ["Always", "Often", "Intermittent", "Once"]
  },

  "fieldCards": {

    /* ── Dropdowns (matched on selected value) ───────────────────────── */
    "category": {
      "Software": ["En Progreso", "Solicitar Repro", "Fallido", "Diagnostico",
                   "Software Catalog", "Status Page"],
      "Hardware": ["Pedir Detalles", "Diagnostico",
                   "Asset Inventory", "Warranty Lookup", "Asset Lookup", "Endpoint Health", "Device Mgmt"],
      "Network":  ["Pedir Datos", "Pruebas Basicas",
                   "VPN Portal", "Network Status"],
      "Security": ["Posible Phishing", "Incidente",
                   "Security Portal", "Report Phishing"],
      "Access":   ["Confirmación", "Solicitar MFA",
                   "Password Reset Portal", "SSO Admin", "SSO Logs", "User Lookup"]
    },
    "requestType": {
      "Incident": ["Saludos", "Genérico", "Solicitar Logs", "Reinicio", "Confirmar Solucion"],
      "Request":  ["Saludos", "Genérico", "Pedir Info Basica", "Confirmar Solucion"],
      "Change":   ["Saludos", "Genérico", "Confirmar Solucion", "Reinicio"],
      "Problem":  ["Saludos", "Solicitar Logs", "Solicitar Repro", "Pedir Info Basica"]
    },
    "priority": {
      "P1": ["Saludos", "Solicitar Logs", "Incidente", "Solicitar Repro"],
      "P2": ["Saludos", "Genérico", "Solicitar Logs", "Confirmar Solucion"],
      "P3": ["Saludos", "Genérico", "Reinicio", "Confirmar Solucion"],
      "P4": ["Saludos", "Genérico", "Pedir Info Basica", "Confirmar Solucion"]
    },

    /* ── Text inputs (union of all declared cards shown on focus) ─────── */
    "ticketID":      { "admin":    ["Ticket Link", "Saludos", "Solicitar Logs"] },
    "requesterUser": { "account":  ["User Lookup", "SSO Logs", "SSO Admin", "Confirmación", "Solicitar MFA", "Password Reset Portal"] },
    "assetTag":      { "device":   ["Asset Lookup", "Asset Inventory", "Warranty Lookup", "Endpoint Health", "Device Mgmt", "Pedir Detalles"] },
    "hostname":      { "device":   ["Endpoint Health", "Device Mgmt", "Diagnostico", "Incidente", "Confirmar Solucion", "Reinicio"] },
    "serialNumber":  { "hardware": ["Warranty Lookup", "Asset Inventory", "Pedir Detalles"] },
    "appName":       { "software": ["En Progreso", "Software Catalog", "Status Page", "Solicitar Repro", "Pedir Info Basica"] },
    "errorMessage":  { "issue":    ["Solicitar Logs", "En Progreso", "Solicitar Repro", "Diagnostico", "Fallido"] },
    "url":           { "network":  ["Pedir Datos", "Pruebas Basicas", "VPN Portal", "Network Status"] }
  },

  "Saludos y Scripts": {
    "Saludos": {
      "es": "Hola, soy [myName] de soporte de [company]. Con gusto te ayudo con tu caso [ticketID].",
      "en": "Hello, I’m [myName] from [company] support. I’ll gladly help with your case [ticketID].",
      "pt": "Olá, sou [myName] do suporte da [company]. Terei prazer em ajudar no seu caso [ticketID]."
    },
    "Genérico": {
      "es": "Para poder apoyarte, ¿me confirmas: equipo ([assetTag]/[hostname]), sistema operativo, y el mensaje exacto de error?",
      "en": "To help you, please confirm: device ([assetTag]/[hostname]), OS, and the exact error message.",
      "pt": "Para ajudar, confirme: equipamento ([assetTag]/[hostname]), SO e a mensagem exata de erro."
    },
    "Solicitar Logs": {
      "es": "¿Podrías copiar y pegar el log o el mensaje completo de error? (Evita captura si es posible).",
      "en": "Could you paste the log or full error text? (Prefer text over screenshots if possible).",
      "pt": "Você pode colar o log ou o texto completo do erro? (Prefira texto em vez de imagem)."
    }
  },

  "Respuestas Frecuentes": {
    "tags": ["IT", "Troubleshooting"],

    "Pedir Info Basica": {
      "es": "Para avanzar: [os] [osVersion], app/servicio ([appName] [appVersion] o [serviceName]), y desde cuándo ocurre.",
      "en": "To proceed: [os] [osVersion], app/service ([appName] [appVersion] or [serviceName]), and when it started.",
      "pt": "Para avançar: [os] [osVersion], app/serviço ([appName] [appVersion] ou [serviceName]) e desde quando ocorre."
    },

    "Confirmar Solucion": {
      "es": "Aplicamos el ajuste. ¿Me confirmas si ya funciona en tu equipo [hostname]?",
      "en": "We applied the fix. Can you confirm it’s working now on [hostname]?",
      "pt": "Aplicamos a correção. Pode confirmar se já funciona no [hostname]?"
    },

    "Reinicio": {
      "es": "¿Podrías reiniciar el equipo y confirmar si el problema persiste? (Esto ayuda a aplicar cambios pendientes).",
      "en": "Could you restart the device and confirm if the issue persists? (Helps apply pending changes).",
      "pt": "Pode reiniciar o equipamento e confirmar se o problema continua? (Ajuda a aplicar mudanças pendentes)."
    }
  },

  "Acceso y Cuentas": {
    "shortcuts": [
      { "label": "Password Reset Portal", "url": "https://sso.example.com/reset" },
      { "label": "SSO Admin", "url": "https://sso.example.com/admin" }
    ],

    "Confirmación": {
      "es": "Estoy revisando el acceso del usuario [requesterUser] a la aplicación [appName].",
      "en": "I’m checking access for user [requesterUser] to [appName].",
      "pt": "Estou verificando o acesso do usuário [requesterUser] ao [appName]."
    },

    "Solicitar MFA": {
      "es": "¿Tienes acceso al método de MFA (app/código/SMS)? Si no, puedo guiarte para re-registrarlo.",
      "en": "Do you have access to your MFA method (app/code/SMS)? If not, I can guide you to re-enroll.",
      "pt": "Você tem acesso ao MFA (app/código/SMS)? Se não, posso orientar para cadastrar novamente."
    }
  },

  "Software": {
    "shortcuts": [
      { "label": "Software Catalog", "url": "https://it.example.com/software" },
      { "label": "Status Page", "url": "https://status.example.com" }
    ],

    "En Progreso": {
      "es": "Estoy validando versión/configuración de [appName] en [hostname] y revisando logs.",
      "en": "I’m validating [appName] version/config on [hostname] and reviewing logs.",
      "pt": "Estou validando versão/config do [appName] no [hostname] e revisando logs."
    },

    "Solicitar Repro": {
      "es": "¿Me compartes pasos exactos para reproducir y el mensaje de error completo (texto)?",
      "en": "Please share exact repro steps and the full error message (as text).",
      "pt": "Compartilhe os passos para reproduzir e a mensagem completa do erro (texto)."
    },

    "Fallido": {
      "es": "No logramos resolver con las validaciones iniciales. Escalaré con logs y evidencia.",
      "en": "We couldn’t resolve with initial checks. I’ll escalate with logs and evidence.",
      "pt": "Não foi possível resolver com as verificações iniciais. Vou escalar com logs e evidências."
    }
  },

  "Hardware": {
    "shortcuts": [
      { "label": "Asset Inventory", "url": "https://it.example.com/assets?q=[assetTag]" },
      { "label": "Warranty Lookup", "url": "https://vendor.example.com/warranty?sn=[serialNumber]" }
    ],

    "Pedir Detalles": {
      "es": "Para validar hardware: [manufacturer] [model], serial [serialNumber], y síntoma (no enciende / no da imagen / se reinicia / se calienta).",
      "en": "To check hardware: [manufacturer] [model], serial [serialNumber], and symptom (no power / no display / rebooting / overheating).",
      "pt": "Para checar hardware: [manufacturer] [model], serial [serialNumber], e sintoma (não liga / sem vídeo / reinicia / aquece)."
    },

    "Diagnostico": {
      "es": "¿Puedes confirmar: temperatura, uso de CPU/RAM, y si hay pitidos/luces de error? Si aplica, envía foto del LED/código.",
      "en": "Can you confirm: temps, CPU/RAM usage, and any beep/LED error code? If applicable, send a photo of the LED/code.",
      "pt": "Confirme: temperaturas, uso de CPU/RAM e algum beep/LED com código? Se aplicável, envie foto do LED/código."
    }
  },

  "Red y VPN": {
    "shortcuts": [
      { "label": "VPN Portal", "url": "https://vpn.example.com" },
      { "label": "Network Status", "url": "https://status.example.com/network" }
    ],

    "Pedir Datos": {
      "es": "Para red/VPN: tipo ([networkType]), IP local ([localIP]), DNS ([dns]), si estás en VPN ([vpn]) y el destino ([url]:[port]).",
      "en": "For network/VPN: type ([networkType]), local IP ([localIP]), DNS ([dns]), VPN ([vpn]) and destination ([url]:[port]).",
      "pt": "Para rede/VPN: tipo ([networkType]), IP local ([localIP]), DNS ([dns]), VPN ([vpn]) e destino ([url]:[port])."
    },

    "Pruebas Basicas": {
      "es": "¿Puedes probar: 1) ping gateway 2) nslookup del dominio 3) abrir [url] desde otra red (hotspot) y decirme resultados?",
      "en": "Can you test: 1) ping gateway 2) nslookup domain 3) open [url] from another network (hotspot) and share results?",
      "pt": "Pode testar: 1) ping gateway 2) nslookup do domínio 3) abrir [url] de outra rede (hotspot) e enviar resultados?"
    }
  },

  "Seguridad": {
    "shortcuts": [
      { "label": "Security Portal", "url": "https://security.example.com" },
      { "label": "Report Phishing", "url": "https://security.example.com/phish" }
    ],

    "Posible Phishing": {
      "es": "Gracias. Por seguridad, no hagas clic ni descargues archivos. ¿Puedes reenviar el correo sospechoso al canal de reporte y compartir el asunto/remitente?",
      "en": "Thanks. For safety, don’t click or download anything. Please forward the suspicious email to the reporting channel and share subject/sender.",
      "pt": "Obrigado. Por segurança, não clique nem baixe anexos. Encaminhe o e-mail suspeito ao canal de reporte e compartilhe assunto/remetente."
    },

    "Incidente": {
      "es": "Estoy iniciando el proceso de contención. Confirma si hay: acceso no autorizado, pérdida de datos o comportamiento inusual en [hostname].",
      "en": "I’m starting containment. Confirm if there’s unauthorized access, data loss, or unusual behavior on [hostname].",
      "pt": "Estou iniciando a contenção. Confirme: acesso não autorizado, perda de dados ou comportamento incomum no [hostname]."
    }
  },

  "Admin Links": {
    "tags": ["IT", "Admin"],

    "Ticket Link": "https://support.example.com/tickets/[ticketID]",
    "User Lookup": "https://support.example.com/admin/users?q=[requesterUser]",
    "Asset Lookup": "https://it.example.com/assets?q=[assetTag]",
    "Endpoint Health": "https://monitor.example.com/hosts/[hostname]",
    "SSO Logs": "https://sso.example.com/admin/audit?q=[requesterUser]",
    "Device Mgmt": "https://mdm.example.com/devices/[assetTag]",
    "Status Page": "https://status.example.com"
  }
};
