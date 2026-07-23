const DEFAULT_CONFIG = {
  "config": {
    "defaultLang": "pt",
    "supportedLangs": ["es", "en", "pt"],
    /* Universal footer line for exported flow PNGs. Per-flow override via
       flow.footer: a string = custom text, false (or "none") = no footer.
       Set flowFooter to "" to disable the footer everywhere. */
    "flowFooter": "support.carino.systems"
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

    "Saludos": { "es": "Saludos", "en": "Greetings", "pt": "Saudações" },

    "Flow Cards": { "es": "Tarjetas de Flujo", "en": "Flow Cards", "pt": "Cartões de Fluxo" },
    "flowNew": { "es": "➕ Nuevo Flujo", "en": "➕ New Flow", "pt": "➕ Novo Fluxo" },
    "flowEdit": { "es": "✏️ Editar", "en": "✏️ Edit", "pt": "✏️ Editar" },
    "flowCopyText": { "es": "📋 Copiar Texto", "en": "📋 Copy Text", "pt": "📋 Copiar Texto" },
    "flowCopyImage": { "es": "🖼️ Copiar como imagen", "en": "🖼️ Copy as image", "pt": "🖼️ Copiar como imagem" },
    "flowPng": { "es": "⬇ PNG", "en": "⬇ PNG", "pt": "⬇ PNG" },
    "flowDelete": { "es": "🗑 Eliminar", "en": "🗑 Delete", "pt": "🗑 Excluir" },
    "flowRevert": { "es": "↺ Revertir", "en": "↺ Revert", "pt": "↺ Reverter" },
    "flowSteps": { "es": "pasos", "en": "steps", "pt": "passos" },
    "flowBuiltin": { "es": "predefinido", "en": "builtin", "pt": "padrão" },
    "flowCustom": { "es": "personalizado", "en": "custom", "pt": "personalizado" },
    "flowEdited": { "es": "predefinido (editado)", "en": "builtin (edited)", "pt": "padrão (editado)" },
    "flowEditorTitle": { "es": "Editor de Flujo", "en": "Flow Editor", "pt": "Editor de Fluxo" },
    "flowFieldTitle": { "es": "Título", "en": "Title", "pt": "Título" },
    "flowFieldTag": { "es": "Audiencia / Etiqueta (opcional)", "en": "Audience / Tag (optional)", "pt": "Público / Etiqueta (opcional)" },
    "flowAddStep": { "es": "➕ Agregar Paso", "en": "➕ Add Step", "pt": "➕ Adicionar Passo" },
    "flowCancel": { "es": "Cancelar", "en": "Cancel", "pt": "Cancelar" },
    "flowSave": { "es": "💾 Guardar Flujo", "en": "💾 Save Flow", "pt": "💾 Salvar Fluxo" },
    "flowHint": {
      "es": "Pega una captura (Ctrl+V) para adjuntarla al paso seleccionado · la primera línea del paso es el encabezado",
      "en": "Paste a screenshot (Ctrl+V) to attach it to the selected step · first line of a step = heading",
      "pt": "Cole uma captura (Ctrl+V) para anexá-la ao passo selecionado · a primeira linha do passo é o título" },
    "flowStepPh": {
      "es": "Texto del paso — la primera línea es el encabezado…",
      "en": "Step text — first line is the heading…",
      "pt": "Texto do passo — a primeira linha é o título…" },

    "copyChars": { "es": "caracteres", "en": "chars", "pt": "caracteres" },
    "copyFailed": {
      "es": "⚠ No se pudo copiar — portapapeles bloqueado",
      "en": "⚠ Copy failed — clipboard blocked",
      "pt": "⚠ Falha ao copiar — área de transferência bloqueada" },
    "fillTitle": { "es": "Completar campos", "en": "Fill in fields", "pt": "Preencher campos" },
    "fillCopy": { "es": "📋 Copiar", "en": "📋 Copy", "pt": "📋 Copiar" },
    "fillOpen": { "es": "↗ Abrir", "en": "↗ Open", "pt": "↗ Abrir" },
    "fillMissing": { "es": "campos sin completar", "en": "unfilled fields", "pt": "campos não preenchidos" },
    "closedToast": {
      "es": "cerrado — Alt+Z lo restaura",
      "en": "closed — Alt+Z restores",
      "pt": "fechado — Alt+Z restaura" },
    "restoredToast": { "es": "restaurado", "en": "restored", "pt": "restaurado" },
    "trashEmpty": {
      "es": "No hay tickets cerrados para restaurar",
      "en": "No closed tickets to restore",
      "pt": "Não há tickets fechados para restaurar" },

    "kbdBtnTitle": { "es": "Atajos de teclado", "en": "Keyboard shortcuts", "pt": "Atalhos de teclado" },
    "kbdOverlayTitle": { "es": "Atajos de Teclado", "en": "Keyboard Shortcuts", "pt": "Atalhos de Teclado" },
    "kbdGroupGlobal": { "es": "Globales", "en": "Global", "pt": "Globais" },
    "kbdGroupIdle": { "es": "Fuera de campos de texto", "en": "Outside text fields", "pt": "Fora de campos de texto" },
    "kbdGroupSearch": { "es": "En la búsqueda", "en": "In the search box", "pt": "Na pesquisa" },
    "searchNoResults": {
      "es": "Sin resultados para esta búsqueda",
      "en": "No results match your search",
      "pt": "Nenhum resultado para esta pesquisa" },
    "searchClearTitle": { "es": "Borrar búsqueda", "en": "Clear search", "pt": "Limpar pesquisa" },
    "langSwitched": { "es": "Idioma", "en": "Language", "pt": "Idioma" },
    "flowDiscardConfirm": {
      "es": "¿Descartar los cambios sin guardar de este flujo?",
      "en": "Discard unsaved changes to this flow?",
      "pt": "Descartar as alterações não salvas deste fluxo?" },

    "kFocusSearch": { "es": "Ir a la búsqueda", "en": "Focus search", "pt": "Ir para a pesquisa" },
    "kSaveLog": { "es": "Guardar log del caso", "en": "Save case log", "pt": "Salvar log do caso" },
    "kBackup": { "es": "Descargar respaldo", "en": "Download backup", "pt": "Baixar backup" },
    "kRestoreClosed": { "es": "Restaurar ticket cerrado", "en": "Restore closed ticket", "pt": "Restaurar ticket fechado" },
    "kEscStack": {
      "es": "Cerrar / limpiar (capa por capa)",
      "en": "Close / clear (layer by layer)",
      "pt": "Fechar / limpar (camada por camada)" },
    "kShortcutOverlay": { "es": "Mostrar u ocultar los atajos", "en": "Toggle shortcuts overlay", "pt": "Mostrar ou ocultar os atalhos" },
    "kCycleLang": { "es": "Cambiar de idioma", "en": "Cycle language", "pt": "Alternar idioma" },
    "kOpenNotes": { "es": "Abrir las notas", "en": "Open notes", "pt": "Abrir as notas" },
    "kCycleDrawer": {
      "es": "Ciclar el tamaño del panel de notas",
      "en": "Cycle notes drawer size",
      "pt": "Alternar o tamanho do painel de notas" },
    "kToggleDim": {
      "es": "Atenuar tarjetas no relacionadas",
      "en": "Toggle card dimming",
      "pt": "Atenuar cartões não relacionados" },
    "kNavCards": { "es": "Mover la selección de tarjetas", "en": "Move card selection", "pt": "Mover a seleção de cartões" },
    "kCopySelected": {
      "es": "Copiar/abrir la selección y limpiar la búsqueda",
      "en": "Copy/open selection, clear search",
      "pt": "Copiar/abrir a seleção e limpar a pesquisa" },
    "kCopyKeepQuery": {
      "es": "Copiar/abrir manteniendo la búsqueda",
      "en": "Copy/open keeping the query",
      "pt": "Copiar/abrir mantendo a pesquisa" },

    "kSwitchTicket": { "es": "Ir al ticket 1–9", "en": "Switch to ticket 1–9", "pt": "Ir para o ticket 1–9" },
    "kPrevNextTicket": { "es": "Ticket anterior / siguiente", "en": "Previous / next ticket", "pt": "Ticket anterior / seguinte" },
    "kCycleStatus": { "es": "Cambiar el estado del ticket", "en": "Cycle ticket status", "pt": "Alternar o status do ticket" },
    "kCloseTicket": { "es": "Cerrar el ticket (recuperable)", "en": "Close ticket (undoable)", "pt": "Fechar o ticket (recuperável)" },
    "kToggleTimeline": {
      "es": "Alternar notas / cronología",
      "en": "Toggle notes / timeline",
      "pt": "Alternar notas / linha do tempo" },
    "kDigest": { "es": "Abrir el resumen de tickets", "en": "Open ticket digest", "pt": "Abrir o resumo dos tickets" },

    "tabRenameHint": { "es": "Doble clic para renombrar", "en": "Double-click to rename", "pt": "Clique duplo para renomear" },
    "lastTabToast": {
      "es": "No se puede cerrar el último ticket",
      "en": "Cannot close the last ticket",
      "pt": "Não é possível fechar o último ticket" },

    "pasteIntakeHeader": { "es": "--- mensaje pegado ---", "en": "--- pasted intake ---", "pt": "--- mensagem colada ---" },
    "pasteToast": {
      "es": "📥 Ticket creado con el texto pegado — Alt+Z lo deshace",
      "en": "📥 Ticket created from paste — Alt+Z undoes",
      "pt": "📥 Ticket criado com o texto colado — Alt+Z desfaz" },

    "timelineHeader": { "es": "🕒 Cronología", "en": "🕒 Timeline", "pt": "🕒 Linha do tempo" },
    "timelineToggleTitle": { "es": "Notas / cronología", "en": "Notes / timeline", "pt": "Notas / linha do tempo" },
    "timelineEmpty": {
      "es": "Aún no hay eventos en este ticket",
      "en": "No events yet for this ticket",
      "pt": "Ainda não há eventos neste ticket" },
    "evCreated": { "es": "Ticket creado", "en": "Ticket created", "pt": "Ticket criado" },
    "evClosed": { "es": "Ticket cerrado", "en": "Ticket closed", "pt": "Ticket fechado" },
    "evRestored": { "es": "Ticket restaurado", "en": "Ticket restored", "pt": "Ticket restaurado" },
    "evPasted": {
      "es": "Ticket creado con texto pegado",
      "en": "Ticket created from pasted text",
      "pt": "Ticket criado com texto colado" },

    "btnDigest": { "es": "📊 Resumen", "en": "📊 Digest", "pt": "📊 Resumo" },
    "digestTitle": { "es": "Resumen de Tickets", "en": "Ticket Digest", "pt": "Resumo de Tickets" },
    "digestTickets": { "es": "tickets", "en": "tickets", "pt": "tickets" },
    "digestDone": { "es": "finalizados", "en": "done", "pt": "concluídos" },
    "digestOngoing": { "es": "en curso", "en": "ongoing", "pt": "em andamento" },
    "digestPending": { "es": "pendientes", "en": "pending", "pt": "pendentes" },
    "digestRequester": { "es": "Solicitante", "en": "Requester", "pt": "Solicitante" },
    "digestSummary": { "es": "Resumen", "en": "Summary", "pt": "Resumo" },
    "downloadTxt": { "es": "⬇ Descargar .txt", "en": "⬇ Download .txt", "pt": "⬇ Baixar .txt" },

    "sheetTitle": { "es": "Hoja de Caso", "en": "Case Sheet", "pt": "Folha do Caso" },
    "sheetIncludeNotes": { "es": "Incluir notas internas", "en": "Include internal notes", "pt": "Incluir notas internas" },
    "sheetCopyMd": { "es": "📋 Copiar Markdown", "en": "📋 Copy Markdown", "pt": "📋 Copiar Markdown" },
    "sheetPrint": { "es": "🖨 Imprimir", "en": "🖨 Print", "pt": "🖨 Imprimir" },
    "sheetDetails": { "es": "Detalles del caso", "en": "Case details", "pt": "Detalhes do caso" },
    "sheetNotes": { "es": "Notas internas", "en": "Internal notes", "pt": "Notas internas" },
    "sheetTimeline": { "es": "Cronología", "en": "Timeline", "pt": "Linha do tempo" },
    "sheetSignature": { "es": "Atendido por", "en": "Handled by", "pt": "Atendido por" },
    "sheetField": { "es": "Campo", "en": "Field", "pt": "Campo" },
    "sheetValue": { "es": "Valor", "en": "Value", "pt": "Valor" },
    "sheetStatusLabel": { "es": "Estado", "en": "Status", "pt": "Status" },
    "sheetLogId": { "es": "ID de registro", "en": "Log ID", "pt": "ID do registro" },
    "sheetDateLabel": { "es": "Fecha", "en": "Date", "pt": "Data" },

    "pinnedSection": { "es": "★ Fijados", "en": "★ Pinned", "pt": "★ Fixados" },
    "pinTip": { "es": "Fijar / quitar de fijados", "en": "Pin / unpin", "pt": "Fixar / desafixar" },
    "pinnedToast": { "es": "📌 Fijado en ★", "en": "📌 Pinned to ★", "pt": "📌 Fixado em ★" },
    "unpinnedToast": { "es": "Quitado de ★", "en": "Unpinned from ★", "pt": "Removido de ★" },

    "quickEditTitle": { "es": "✎ Edición rápida", "en": "✎ Quick Edit", "pt": "✎ Edição rápida" },
    "quickEditTip": { "es": "Editar antes de copiar", "en": "Edit before copying", "pt": "Editar antes de copiar" },
    "langChipTip": { "es": "Copiar en este idioma", "en": "Copy in this language", "pt": "Copiar neste idioma" },

    "composerLabel": { "es": "Borrador", "en": "Composer", "pt": "Rascunho" },
    "composerAdded": { "es": "añadido al borrador", "en": "added to the composer", "pt": "adicionado ao rascunho" },
    "composerCopyAll": { "es": "📋 Copiar todo", "en": "📋 Copy All", "pt": "📋 Copiar tudo" },
    "composerClear": { "es": "🧹 Vaciar", "en": "🧹 Clear", "pt": "🧹 Esvaziar" },
    "composerRemoveTip": { "es": "Clic para quitar", "en": "Click to remove", "pt": "Clique para remover" },
    "kConfirm": {
      "es": "Confirmación contextual (modal / borrador)",
      "en": "Contextual confirm (modal / composer)",
      "pt": "Confirmação contextual (modal / rascunho)" },

    "flowFieldFooter": { "es": "Pie de página (PNG)", "en": "PNG footer", "pt": "Rodapé (PNG)" },
    "flowFooterUniversal": { "es": "Universal", "en": "Universal", "pt": "Universal" },
    "flowFooterCustom": { "es": "Personalizado", "en": "Custom", "pt": "Personalizado" },
    "flowFooterNone": { "es": "Sin pie", "en": "None", "pt": "Sem rodapé" },
    "flowFooterTextLabel": { "es": "Texto del pie", "en": "Footer text", "pt": "Texto do rodapé" },

    "Consultoría": { "es": "Consultoría", "en": "Consulting", "pt": "Consultoria" },
    "Desarrollo y Entregas": { "es": "Desarrollo y Entregas", "en": "Development & Delivery", "pt": "Desenvolvimento e Entregas" },
    "Imagenología y PACS": { "es": "Imagenología y PACS", "en": "Medical Imaging & PACS", "pt": "Imagem Médica e PACS" },
    "Herramientas Carino": { "es": "Herramientas Carino", "en": "Carino Tools", "pt": "Ferramentas Carino" },
    "Presentación": { "es": "Presentación", "en": "Introduction", "pt": "Apresentação" },
    "Cotización": { "es": "Cotización", "en": "Quote", "pt": "Orçamento" },
    "Agendar Llamada": { "es": "Agendar Llamada", "en": "Schedule Call", "pt": "Agendar Chamada" },
    "Avance de Proyecto": { "es": "Avance de Proyecto", "en": "Project Update", "pt": "Andamento do Projeto" },
    "Recordatorio de Pago": { "es": "Recordatorio de Pago", "en": "Payment Reminder", "pt": "Lembrete de Pagamento" },
    "Cierre de Proyecto": { "es": "Cierre de Proyecto", "en": "Project Wrap-up", "pt": "Encerramento do Projeto" },
    "Sitio Publicado": { "es": "Sitio Publicado", "en": "Site Published", "pt": "Site Publicado" },
    "Solicitar Contenido": { "es": "Solicitar Contenido", "en": "Request Content", "pt": "Solicitar Conteúdo" },
    "Entrega de Accesos": { "es": "Entrega de Accesos", "en": "Credentials Handoff", "pt": "Entrega de Acessos" },
    "Mantenimiento": { "es": "Mantenimiento", "en": "Maintenance", "pt": "Manutenção" },
    "Datos DICOM": { "es": "Datos DICOM", "en": "DICOM Details", "pt": "Dados DICOM" },
    "Prueba de Envío": { "es": "Prueba de Envío", "en": "Send Test", "pt": "Teste de Envio" },
    "Nota de Anonimización": { "es": "Nota de Anonimización", "en": "Anonymization Note", "pt": "Nota de Anonimização" }
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

    /* Consulting */
    "projectName": "Website project",
    "dueDate": "2026-08-15",

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
    "projectName":   { "consulting": ["Cotización", "Avance de Proyecto", "Recordatorio de Pago", "Cierre de Proyecto", "Solicitar Contenido"] },
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

  "Consultoría": {
    "tags": ["Consulting"],
    "shortcuts": [
      { "label": "Quote Tool", "url": "https://quote.carino.systems" },
      { "label": "Kanban", "url": "https://tasks.carino.systems" },
      { "label": "Time Zones", "url": "https://time.carino.systems" },
      { "label": "Resume", "url": "https://resume.carino.systems" }
    ],
    "flows": [
      { "id": "f_onboarding",
        "title": { "es": "Alta de Cliente", "en": "Client Onboarding", "pt": "Cadastro de Cliente" },
        "tag": { "es": "Consultoría", "en": "Consulting", "pt": "Consultoria" },
        "steps": [
          { "text": {
            "es": "Primer contacto\n• Agenda una llamada breve\n• Identifica necesidad, urgencia y presupuesto\n• Registra los datos del cliente",
            "en": "First contact\n• Schedule a short call\n• Identify need, urgency and budget\n• Record the client's details",
            "pt": "Primeiro contato\n• Agende uma chamada breve\n• Identifique necessidade, urgência e orçamento\n• Registre os dados do cliente" } },
          { "text": {
            "es": "Alcance y cotización\n• Define entregables y tiempos\n• Genera la cotización en https://quote.carino.systems\n• Envíala y resuelve dudas",
            "en": "Scope & quote\n• Define deliverables and timeline\n• Build the quote at https://quote.carino.systems\n• Send it and answer questions",
            "pt": "Escopo e orçamento\n• Defina entregáveis e prazos\n• Gere o orçamento em https://quote.carino.systems\n• Envie e esclareça dúvidas" } },
          { "text": {
            "es": "Acuerdo\n• Confirma el alcance por escrito\n• Acuerda forma de pago y anticipo\n• Fija la fecha de inicio",
            "en": "Agreement\n• Confirm scope in writing\n• Agree on payment terms and deposit\n• Set the start date",
            "pt": "Acordo\n• Confirme o escopo por escrito\n• Combine forma de pagamento e sinal\n• Defina a data de início" } },
          { "text": {
            "es": "Arranque\n• Solicita accesos y materiales\n• Crea repositorio y tablero de tareas\n• Define el canal de comunicación",
            "en": "Kickoff\n• Request access and materials\n• Create the repo and task board\n• Agree on a communication channel",
            "pt": "Início\n• Solicite acessos e materiais\n• Crie o repositório e o quadro de tarefas\n• Defina o canal de comunicação" } },
          { "text": {
            "es": "Entrega y cierre\n• Presenta el resultado\n• Entrega accesos y documentación\n• Acuerda el soporte posterior",
            "en": "Delivery & close\n• Present the result\n• Hand off access and documentation\n• Agree on post-delivery support",
            "pt": "Entrega e encerramento\n• Apresente o resultado\n• Entregue acessos e documentação\n• Combine o suporte posterior" } }
        ] }
    ],

    "Presentación": {
      "es": "Hola [requesterName], soy [myName], consultor independiente de TI y desarrollo. Gracias por contactarme — cuéntame brevemente qué necesitas y te propongo alcance, tiempos y costo.",
      "en": "Hi [requesterName], I'm [myName], an independent IT & software consultant. Thanks for reaching out — tell me briefly what you need and I'll propose scope, timeline and cost.",
      "pt": "Olá [requesterName], sou [myName], consultor independente de TI e desenvolvimento. Obrigado pelo contato — descreva brevemente o que precisa e eu proponho escopo, prazos e custo."
    },
    "Cotización": {
      "es": "Te comparto la cotización de [projectName]: [url]. Incluye alcance, entregables y condiciones. Cualquier ajuste lo revisamos sin compromiso.",
      "en": "Here is the quote for [projectName]: [url]. It covers scope, deliverables and terms. Happy to adjust anything.",
      "pt": "Segue o orçamento de [projectName]: [url]. Inclui escopo, entregáveis e condições. Qualquer ajuste, é só avisar."
    },
    "Agendar Llamada": {
      "es": "¿Te funciona una llamada de 30 minutos? Propón dos o tres horarios y confirmo el que mejor quede ([location]).",
      "en": "Would a 30-minute call work? Suggest two or three time slots and I'll confirm the best one ([location]).",
      "pt": "Uma chamada de 30 minutos funciona para você? Sugira dois ou três horários e eu confirmo o melhor ([location])."
    },
    "Avance de Proyecto": {
      "es": "Avance de [projectName]: [summary]. Próximo hito: [dueDate]. Cualquier comentario es bienvenido.",
      "en": "Update on [projectName]: [summary]. Next milestone: [dueDate]. Feedback welcome.",
      "pt": "Andamento de [projectName]: [summary]. Próximo marco: [dueDate]. Comentários são bem-vindos."
    },
    "Recordatorio de Pago": {
      "es": "Recordatorio amistoso: la factura de [projectName] sigue pendiente. ¿Me confirmas la fecha estimada de pago? Gracias.",
      "en": "Friendly reminder: the invoice for [projectName] is still pending. Could you confirm the expected payment date? Thanks.",
      "pt": "Lembrete amigável: a fatura de [projectName] segue pendente. Pode confirmar a data prevista de pagamento? Obrigado."
    },
    "Cierre de Proyecto": {
      "es": "[projectName] queda entregado. Incluye [summary]. Tienes 30 días de soporte para ajustes menores; después con gusto cotizo mejoras.",
      "en": "[projectName] is delivered. It includes [summary]. You have 30 days of support for minor fixes; after that I'm happy to quote improvements.",
      "pt": "[projectName] está entregue. Inclui [summary]. Você tem 30 dias de suporte para ajustes menores; depois disso, orço melhorias com prazer."
    }
  },

  "Desarrollo y Entregas": {
    "tags": ["Development"],
    "shortcuts": [
      { "label": "GitHub", "url": "https://github.com/MiguelCarino" },
      { "label": "Branding", "url": "https://branding.carino.systems" },
      { "label": "Hash Check", "url": "https://hash.carino.systems" },
      { "label": "Metadata", "url": "https://metadata.carino.systems" }
    ],
    "flows": [
      { "id": "f_deploy_pages",
        "title": { "es": "Publicar Sitio Estático", "en": "Publish Static Site", "pt": "Publicar Site Estático" },
        "tag": { "es": "Desarrollo", "en": "Development", "pt": "Desenvolvimento" },
        "steps": [
          { "text": {
            "es": "Preparar el repositorio\n• Sube el sitio estático a GitHub\n• index.html en la raíz\n• Verifica rutas relativas",
            "en": "Prepare the repository\n• Push the static site to GitHub\n• index.html at the root\n• Check relative paths",
            "pt": "Preparar o repositório\n• Envie o site estático ao GitHub\n• index.html na raiz\n• Verifique caminhos relativos" } },
          { "text": {
            "es": "Activar GitHub Pages\n• Settings → Pages\n• Fuente: rama main\n• Espera el primer despliegue",
            "en": "Enable GitHub Pages\n• Settings → Pages\n• Source: main branch\n• Wait for the first deploy",
            "pt": "Ativar o GitHub Pages\n• Settings → Pages\n• Origem: branch main\n• Aguarde o primeiro deploy" } },
          { "text": {
            "es": "Dominio\n• Agrega el archivo CNAME\n• Apunta el DNS (CNAME a usuario.github.io)\n• Activa 'Enforce HTTPS'",
            "en": "Domain\n• Add the CNAME file\n• Point DNS (CNAME to user.github.io)\n• Enable 'Enforce HTTPS'",
            "pt": "Domínio\n• Adicione o arquivo CNAME\n• Aponte o DNS (CNAME para usuario.github.io)\n• Ative 'Enforce HTTPS'" } },
          { "text": {
            "es": "Verificar y entregar\n• Prueba el sitio en móvil y escritorio\n• Comparte la URL con el cliente\n• Documenta cómo actualizarlo",
            "en": "Verify & hand off\n• Test on mobile and desktop\n• Share the URL with the client\n• Document how to update it",
            "pt": "Verificar e entregar\n• Teste no celular e no desktop\n• Compartilhe a URL com o cliente\n• Documente como atualizar" } }
        ] }
    ],

    "Sitio Publicado": {
      "es": "Tu sitio ya está publicado en [url]. Revísalo y mándame tus comentarios. El DNS puede tardar hasta 24 h en propagarse por completo.",
      "en": "Your site is live at [url]. Take a look and send me your feedback. DNS can take up to 24 h to fully propagate.",
      "pt": "Seu site já está no ar em [url]. Dê uma olhada e me envie seus comentários. O DNS pode levar até 24 h para propagar totalmente."
    },
    "Solicitar Contenido": {
      "es": "Para avanzar con [projectName] necesito: logotipo en buena resolución, textos por sección y fotos que quieras usar. Con eso armo la primera versión.",
      "en": "To move forward with [projectName] I need: a high-resolution logo, the text for each section, and any photos you want to use. With that I'll build the first version.",
      "pt": "Para avançar com [projectName] preciso de: logotipo em boa resolução, textos por seção e fotos que queira usar. Com isso monto a primeira versão."
    },
    "Entrega de Accesos": {
      "es": "Te entrego los accesos de [projectName] por un canal seguro (nunca por chat). Te recomiendo guardarlos en un gestor de contraseñas y cambiarlos tras la entrega.",
      "en": "I'll hand over the credentials for [projectName] through a secure channel (never chat). I recommend storing them in a password manager and rotating them after handoff.",
      "pt": "Entrego os acessos de [projectName] por um canal seguro (nunca por chat). Recomendo guardá-los em um gerenciador de senhas e trocá-los após a entrega."
    },
    "Mantenimiento": {
      "es": "Si quieres, puedo encargarme del mantenimiento de [projectName]: actualizaciones, respaldos y pequeños cambios. Te paso una propuesta mensual.",
      "en": "If you'd like, I can handle maintenance for [projectName]: updates, backups and small changes. I'll send a monthly proposal.",
      "pt": "Se quiser, posso cuidar da manutenção de [projectName]: atualizações, backups e pequenas mudanças. Envio uma proposta mensal."
    }
  },

  "Imagenología y PACS": {
    "tags": ["Medical", "IT"],
    "shortcuts": [
      { "label": "Carino PACS", "url": "https://pacs.carino.systems" },
      { "label": "DICOM Editor", "url": "https://dicom.carino.systems" },
      { "label": "Retina Suite", "url": "https://retina.carino.systems" }
    ],
    "flows": [
      { "id": "f_pacs_setup",
        "title": { "es": "Instalar Carino PACS", "en": "Install Carino PACS", "pt": "Instalar o Carino PACS" },
        "tag": { "es": "PACS", "en": "PACS", "pt": "PACS" },
        "steps": [
          { "text": {
            "es": "Descargar Carino PACS\n• Entra a https://pacs.carino.systems\n• Descarga la versión para tu sistema\n• Instala o descomprime",
            "en": "Download Carino PACS\n• Go to https://pacs.carino.systems\n• Download the build for your OS\n• Install or unzip",
            "pt": "Baixar o Carino PACS\n• Acesse https://pacs.carino.systems\n• Baixe a versão para seu sistema\n• Instale ou descompacte" } },
          { "text": {
            "es": "Configurar el nodo\n• Edita config.json\n• Define AE Title, puerto (104/11112) y carpeta de almacenamiento\n• Inicia el servicio",
            "en": "Configure the node\n• Edit config.json\n• Set AE Title, port (104/11112) and storage folder\n• Start the service",
            "pt": "Configurar o nó\n• Edite o config.json\n• Defina AE Title, porta (104/11112) e pasta de armazenamento\n• Inicie o serviço" } },
          { "text": {
            "es": "Registrar la modalidad\n• Solicita AE Title, IP y puerto del equipo\n• Dalo de alta como origen/destino\n• Abre el puerto en el firewall",
            "en": "Register the modality\n• Ask for the device's AE Title, IP and port\n• Add it as a source/destination\n• Open the firewall port",
            "pt": "Registrar a modalidade\n• Solicite AE Title, IP e porta do equipamento\n• Cadastre como origem/destino\n• Libere a porta no firewall" } },
          { "text": {
            "es": "Probar el envío\n• Envía un estudio de prueba (C-STORE)\n• Confirma la recepción en el panel\n• Verifica el reenvío si aplica",
            "en": "Test the transfer\n• Send a test study (C-STORE)\n• Confirm reception in the dashboard\n• Verify forwarding if configured",
            "pt": "Testar o envio\n• Envie um estudo de teste (C-STORE)\n• Confirme a recepção no painel\n• Verifique o encaminhamento, se houver" } }
        ] },
      { "id": "f_dicom_anon",
        "title": { "es": "Anonimizar Estudio DICOM", "en": "Anonymize DICOM Study", "pt": "Anonimizar Estudo DICOM" },
        "tag": { "es": "DICOM", "en": "DICOM", "pt": "DICOM" },
        "steps": [
          { "text": {
            "es": "Abrir el editor\n• Entra a https://dicom.carino.systems\n• Todo se procesa en tu navegador\n• Carga el archivo DICOM",
            "en": "Open the editor\n• Go to https://dicom.carino.systems\n• Everything runs in your browser\n• Load the DICOM file",
            "pt": "Abrir o editor\n• Acesse https://dicom.carino.systems\n• Tudo é processado no navegador\n• Carregue o arquivo DICOM" } },
          { "text": {
            "es": "Anonimizar\n• Usa la función 'Anonymize'\n• Revisa nombre, ID y fechas del paciente\n• Ajusta etiquetas manualmente si hace falta",
            "en": "Anonymize\n• Use the 'Anonymize' function\n• Review patient name, ID and dates\n• Adjust tags manually if needed",
            "pt": "Anonimizar\n• Use a função 'Anonymize'\n• Revise nome, ID e datas do paciente\n• Ajuste as tags manualmente se necessário" } },
          { "text": {
            "es": "Verificar\n• Confirma que no queden datos personales\n• Revisa etiquetas privadas del fabricante",
            "en": "Verify\n• Confirm no personal data remains\n• Check vendor private tags",
            "pt": "Verificar\n• Confirme que não restam dados pessoais\n• Revise tags privadas do fabricante" } },
          { "text": {
            "es": "Exportar y compartir\n• Descarga el archivo anonimizado\n• Compártelo por un canal seguro",
            "en": "Export & share\n• Download the anonymized file\n• Share it over a secure channel",
            "pt": "Exportar e compartilhar\n• Baixe o arquivo anonimizado\n• Compartilhe por um canal seguro" } }
        ] }
    ],

    "Datos DICOM": {
      "es": "Para conectar tu equipo al PACS necesito: AE Title, dirección IP, puerto (104 u 11112) y si el equipo envía, consulta o imprime (C-STORE / C-FIND / print). ¿Me los compartes?",
      "en": "To connect your device to the PACS I need: AE Title, IP address, port (104 or 11112), and whether it sends, queries or prints (C-STORE / C-FIND / print). Could you share those?",
      "pt": "Para conectar seu equipamento ao PACS preciso de: AE Title, endereço IP, porta (104 ou 11112) e se o equipamento envia, consulta ou imprime (C-STORE / C-FIND / print). Pode me passar?"
    },
    "Prueba de Envío": {
      "es": "Ya quedó configurado el nodo [hostname]. ¿Puedes enviar un estudio de prueba? Te confirmo en cuanto lo reciba el PACS.",
      "en": "The node [hostname] is configured. Can you send a test study? I'll confirm as soon as it lands in the PACS.",
      "pt": "O nó [hostname] está configurado. Pode enviar um estudo de teste? Confirmo assim que chegar ao PACS."
    },
    "Nota de Anonimización": {
      "es": "Antes de compartir estudios fuera de la clínica hay que anonimizarlos (nombre, ID y fechas del paciente). Puedo hacerlo con una herramienta local que no sube nada a internet.",
      "en": "Before sharing studies outside the clinic they must be anonymized (patient name, ID and dates). I can do it with a local tool that never uploads anything.",
      "pt": "Antes de compartilhar estudos fora da clínica é preciso anonimizá-los (nome, ID e datas do paciente). Posso fazer isso com uma ferramenta local que não envia nada à internet."
    }
  },

  "Herramientas Carino": {
    "tags": ["IT", "Admin"],
    "shortcuts": [
      { "label": "Netplan Config", "url": "https://netplan.carino.systems" },
      { "label": "Net Topology", "url": "https://network.carino.systems" },
      { "label": "Hardware Ref", "url": "https://hardware.carino.systems" },
      { "label": "SimpleSetup", "url": "https://setup.carino.systems" },
      { "label": "CVE Radar", "url": "https://cve.carino.systems" },
      { "label": "Software Catalog", "url": "https://software.carino.systems" },
      { "label": "Password Gen", "url": "https://password.carino.systems" }
    ]
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
  },

  /* Flow cards — step-by-step end-user guides shown as the last content
     section. title/tag/step text are localized objects; steps use plain
     text where the first line is the heading and '• ' lines are substeps. */
  "flows": [
    { "id": "b_rustdesk",
      "title": { "es": "Sesión Remota con RustDesk", "en": "RustDesk Remote Session", "pt": "Sessão Remota com RustDesk" },
      "tag": { "es": "Soporte Remoto", "en": "Remote Support", "pt": "Suporte Remoto" },
      "steps": [
        { "text": {
          "es": "Descargar RustDesk\n• Entra a https://rustdesk.com\n• Haz clic en 'Download'\n• Elige tu sistema operativo",
          "en": "Download RustDesk\n• Go to https://rustdesk.com\n• Click 'Download'\n• Choose your operating system",
          "pt": "Baixar o RustDesk\n• Acesse https://rustdesk.com\n• Clique em 'Download'\n• Escolha seu sistema operacional" } },
        { "text": {
          "es": "Instalar RustDesk\n• Abre el archivo descargado\n• Acepta el acuerdo de licencia\n• Completa la instalación",
          "en": "Install RustDesk\n• Open the downloaded file\n• Accept the license agreement\n• Complete the installation",
          "pt": "Instalar o RustDesk\n• Abra o arquivo baixado\n• Aceite o contrato de licença\n• Conclua a instalação" } },
        { "text": {
          "es": "Compartir el ID de conexión\n• Abre RustDesk\n• Copia el ID que aparece a la izquierda\n• Envía el ID a tu técnico",
          "en": "Share Connection ID\n• Open RustDesk\n• Copy the ID shown on the left\n• Send the ID to your technician",
          "pt": "Compartilhar o ID de conexão\n• Abra o RustDesk\n• Copie o ID exibido à esquerda\n• Envie o ID ao seu técnico" } },
        { "text": {
          "es": "Aprobar la conexión\n• Espera la solicitud de conexión\n• Haz clic en 'Aceptar'\n• No cierres RustDesk durante la sesión",
          "en": "Approve Connection\n• Wait for the connection request\n• Click 'Accept'\n• Do not close RustDesk during the session",
          "pt": "Aprovar a conexão\n• Aguarde a solicitação de conexão\n• Clique em 'Aceitar'\n• Não feche o RustDesk durante a sessão" } }
      ] },
    { "id": "b_anydesk",
      "title": { "es": "Sesión Remota con AnyDesk", "en": "AnyDesk Remote Session", "pt": "Sessão Remota com AnyDesk" },
      "tag": { "es": "Soporte Remoto", "en": "Remote Support", "pt": "Suporte Remoto" },
      "steps": [
        { "text": {
          "es": "Descargar AnyDesk\n• Entra a https://anydesk.com\n• Haz clic en 'Download Now'",
          "en": "Download AnyDesk\n• Go to https://anydesk.com\n• Click 'Download Now'",
          "pt": "Baixar o AnyDesk\n• Acesse https://anydesk.com\n• Clique em 'Download Now'" } },
        { "text": {
          "es": "Ejecutar AnyDesk\n• Abre el archivo descargado\n• No requiere instalación (opcional)",
          "en": "Run AnyDesk\n• Open the downloaded file\n• No installation required (optional)",
          "pt": "Executar o AnyDesk\n• Abra o arquivo baixado\n• Não requer instalação (opcional)" } },
        { "text": {
          "es": "Compartir la dirección\n• Copia la dirección de 'Este puesto'\n• Envíala a soporte de TI",
          "en": "Share Address\n• Copy 'This Desk' address\n• Send it to IT support",
          "pt": "Compartilhar o endereço\n• Copie o endereço de 'Esta mesa'\n• Envie ao suporte de TI" } }
      ] },
    { "id": "b_chrome_cache",
      "title": { "es": "Borrar Caché de Chrome", "en": "Clear Chrome Cache", "pt": "Limpar Cache do Chrome" },
      "tag": { "es": "Navegador", "en": "Browser", "pt": "Navegador" },
      "steps": [
        { "text": {
          "es": "Abrir la configuración de Chrome\n• Haz clic en los 3 puntos (arriba a la derecha)\n• Selecciona 'Configuración'",
          "en": "Open Chrome Settings\n• Click the 3 dots (top right)\n• Select 'Settings'",
          "pt": "Abrir as configurações do Chrome\n• Clique nos 3 pontos (canto superior direito)\n• Selecione 'Configurações'" } },
        { "text": {
          "es": "Abrir borrar datos de navegación\n• Ve a 'Privacidad y seguridad'\n• Haz clic en 'Eliminar datos de navegación'",
          "en": "Open Clear Browsing Data\n• Go to 'Privacy and security'\n• Click 'Delete browsing data'",
          "pt": "Abrir limpar dados de navegação\n• Vá em 'Privacidade e segurança'\n• Clique em 'Excluir dados de navegação'" } },
        { "text": {
          "es": "Borrar caché\n• Intervalo de tiempo: Todos los períodos\n• Marca 'Imágenes y archivos almacenados en caché'\n• Haz clic en 'Eliminar datos'",
          "en": "Clear Cache\n• Time range: All time\n• Check 'Cached images and files'\n• Click 'Delete data'",
          "pt": "Limpar cache\n• Período: Todo o período\n• Marque 'Imagens e arquivos armazenados em cache'\n• Clique em 'Excluir dados'" } }
      ] },
    { "id": "b_firefox_cache",
      "title": { "es": "Borrar Caché de Firefox", "en": "Clear Firefox Cache", "pt": "Limpar Cache do Firefox" },
      "tag": { "es": "Navegador", "en": "Browser", "pt": "Navegador" },
      "steps": [
        { "text": {
          "es": "Abrir la configuración de Firefox\n• Haz clic en las 3 líneas (arriba a la derecha)\n• Selecciona 'Ajustes'",
          "en": "Open Firefox Settings\n• Click the 3 lines (top right)\n• Select 'Settings'",
          "pt": "Abrir as configurações do Firefox\n• Clique nas 3 linhas (canto superior direito)\n• Selecione 'Configurações'" } },
        { "text": {
          "es": "Limpiar datos\n• Ve a 'Privacidad y seguridad'\n• Haz clic en 'Limpiar datos'",
          "en": "Clear Data\n• Go to 'Privacy & Security'\n• Click 'Clear Data'",
          "pt": "Limpar dados\n• Vá em 'Privacidade e Segurança'\n• Clique em 'Limpar dados'" } },
        { "text": {
          "es": "Confirmar\n• Marca 'Contenido web en caché'\n• Haz clic en 'Limpiar'",
          "en": "Confirm\n• Check 'Cached Web Content'\n• Click 'Clear'",
          "pt": "Confirmar\n• Marque 'Conteúdo web em cache'\n• Clique em 'Limpar'" } }
      ] },
    { "id": "b_restart_router",
      "title": { "es": "Reiniciar el Router", "en": "Restart Router", "pt": "Reiniciar o Roteador" },
      "tag": { "es": "Red", "en": "Network", "pt": "Rede" },
      "steps": [
        { "text": {
          "es": "Localizar el router\n• Encuentra el módem/router\n• Verifica que esté encendido",
          "en": "Locate Router\n• Find the modem/router device\n• Ensure it is powered on",
          "pt": "Localizar o roteador\n• Encontre o modem/roteador\n• Verifique se está ligado" } },
        { "text": {
          "es": "Apagar y encender\n• Desconecta el cable de corriente\n• Espera 30 segundos\n• Vuelve a conectarlo",
          "en": "Power Cycle\n• Unplug the power cable\n• Wait 30 seconds\n• Plug the power back in",
          "pt": "Desligar e ligar\n• Desconecte o cabo de energia\n• Aguarde 30 segundos\n• Conecte novamente" } },
        { "text": {
          "es": "Esperar la conexión\n• Espera 2–3 minutos\n• Vuelve a comprobar la conexión a internet",
          "en": "Wait for Connection\n• Wait 2–3 minutes\n• Check internet connection again",
          "pt": "Aguardar a conexão\n• Aguarde 2–3 minutos\n• Verifique a conexão com a internet novamente" } }
      ] },
    { "id": "b_flush_dns_windows",
      "title": { "es": "Vaciar DNS (Windows)", "en": "Flush DNS (Windows)", "pt": "Limpar DNS (Windows)" },
      "tag": { "es": "Red", "en": "Network", "pt": "Rede" },
      "steps": [
        { "text": {
          "es": "Abrir el símbolo del sistema\n• Presiona Windows + R\n• Escribe cmd\n• Presiona Enter",
          "en": "Open Command Prompt\n• Press Windows + R\n• Type cmd\n• Press Enter",
          "pt": "Abrir o prompt de comando\n• Pressione Windows + R\n• Digite cmd\n• Pressione Enter" } },
        { "text": {
          "es": "Vaciar la caché DNS\n• Escribe: ipconfig /flushdns\n• Presiona Enter\n• Espera el mensaje de confirmación",
          "en": "Flush DNS Cache\n• Type: ipconfig /flushdns\n• Press Enter\n• Wait for confirmation message",
          "pt": "Limpar o cache DNS\n• Digite: ipconfig /flushdns\n• Pressione Enter\n• Aguarde a mensagem de confirmação" } }
      ] },
    { "id": "b_windows_update",
      "title": { "es": "Actualizar Windows", "en": "Windows Update", "pt": "Atualizar o Windows" },
      "tag": { "es": "Sistema Operativo", "en": "OS", "pt": "Sistema Operacional" },
      "steps": [
        { "text": {
          "es": "Abrir Windows Update\n• Haz clic en Inicio\n• Ve a Configuración → Windows Update",
          "en": "Open Windows Update\n• Click Start\n• Go to Settings → Windows Update",
          "pt": "Abrir o Windows Update\n• Clique em Iniciar\n• Vá em Configurações → Windows Update" } },
        { "text": {
          "es": "Buscar actualizaciones\n• Haz clic en 'Buscar actualizaciones'\n• Espera a que termine la búsqueda",
          "en": "Check for Updates\n• Click 'Check for updates'\n• Wait for scan to complete",
          "pt": "Verificar atualizações\n• Clique em 'Verificar se há atualizações'\n• Aguarde a verificação terminar" } },
        { "text": {
          "es": "Instalar y reiniciar\n• Instala las actualizaciones disponibles\n• Reinicia si se solicita",
          "en": "Install & Restart\n• Install available updates\n• Restart if prompted",
          "pt": "Instalar e reiniciar\n• Instale as atualizações disponíveis\n• Reinicie se solicitado" } }
      ] },
    { "id": "b_macos_update",
      "title": { "es": "Actualizar macOS", "en": "macOS Update", "pt": "Atualizar o macOS" },
      "tag": { "es": "Sistema Operativo", "en": "OS", "pt": "Sistema Operacional" },
      "steps": [
        { "text": {
          "es": "Abrir ajustes del sistema\n• Haz clic en el menú Apple\n• Abre 'Ajustes del Sistema'",
          "en": "Open System Settings\n• Click Apple menu\n• Open 'System Settings'",
          "pt": "Abrir os ajustes do sistema\n• Clique no menu Apple\n• Abra 'Ajustes do Sistema'" } },
        { "text": {
          "es": "Actualización de software\n• Ve a 'General'\n• Haz clic en 'Actualización de software'",
          "en": "Software Update\n• Go to 'General'\n• Click 'Software Update'",
          "pt": "Atualização de software\n• Vá em 'Geral'\n• Clique em 'Atualização de Software'" } },
        { "text": {
          "es": "Instalar actualizaciones\n• Haz clic en 'Actualizar ahora'\n• Reinicia si es necesario",
          "en": "Install Updates\n• Click 'Update Now'\n• Restart if required",
          "pt": "Instalar atualizações\n• Clique em 'Atualizar Agora'\n• Reinicie se necessário" } }
      ] },
    { "id": "b_password_reset",
      "title": { "es": "Restablecer Contraseña", "en": "Password Reset", "pt": "Redefinir Senha" },
      "tag": { "es": "Seguridad", "en": "Security", "pt": "Segurança" },
      "steps": [
        { "text": {
          "es": "Abrir la página de restablecimiento\n• Entra al portal de contraseñas de la empresa\n• Haz clic en 'Olvidé mi contraseña'",
          "en": "Open Password Reset Page\n• Go to the company password portal\n• Click 'Forgot password'",
          "pt": "Abrir a página de redefinição\n• Acesse o portal de senhas da empresa\n• Clique em 'Esqueci minha senha'" } },
        { "text": {
          "es": "Verificar identidad\n• Ingresa tu correo o usuario\n• Completa los pasos de verificación",
          "en": "Verify Identity\n• Enter your email or username\n• Complete verification steps",
          "pt": "Verificar identidade\n• Informe seu e-mail ou usuário\n• Conclua as etapas de verificação" } },
        { "text": {
          "es": "Crear nueva contraseña\n• Elige una contraseña segura\n• Confirma la nueva contraseña\n• Guarda los cambios",
          "en": "Create New Password\n• Choose a strong password\n• Confirm the new password\n• Save changes",
          "pt": "Criar nova senha\n• Escolha uma senha forte\n• Confirme a nova senha\n• Salve as alterações" } }
      ] },
    { "id": "b_mfa_setup",
      "title": { "es": "Configurar MFA", "en": "MFA Setup", "pt": "Configurar MFA" },
      "tag": { "es": "Seguridad", "en": "Security", "pt": "Segurança" },
      "steps": [
        { "text": {
          "es": "Instalar la app de autenticación\n• Abre App Store o Play Store\n• Instala Microsoft Authenticator o Google Authenticator",
          "en": "Install Authenticator App\n• Open App Store or Play Store\n• Install Microsoft Authenticator or Google Authenticator",
          "pt": "Instalar o app autenticador\n• Abra a App Store ou Play Store\n• Instale o Microsoft Authenticator ou Google Authenticator" } },
        { "text": {
          "es": "Escanear el código QR\n• Abre la app de autenticación\n• Escanea el código QR proporcionado por TI",
          "en": "Scan QR Code\n• Open the authenticator app\n• Scan the QR code provided by IT",
          "pt": "Escanear o código QR\n• Abra o app autenticador\n• Escaneie o código QR fornecido pela TI" } },
        { "text": {
          "es": "Verificar MFA\n• Ingresa el código de 6 dígitos\n• Confirma la configuración",
          "en": "Verify MFA\n• Enter the 6-digit code\n• Confirm setup",
          "pt": "Verificar o MFA\n• Digite o código de 6 dígitos\n• Confirme a configuração" } }
      ] },
    { "id": "b_basic_it_review",
      "title": { "es": "Revisión Básica de TI", "en": "Basic IT Review", "pt": "Revisão Básica de TI" },
      "tag": { "es": "Diagnóstico", "en": "Diagnostics", "pt": "Diagnóstico" },
      "steps": [
        { "text": {
          "es": "Revisar el estado del equipo\n• Confirma que el equipo enciende\n• Busca mensajes de error",
          "en": "Check System Status\n• Confirm device powers on\n• Check for error messages",
          "pt": "Verificar o estado do equipamento\n• Confirme que o dispositivo liga\n• Verifique mensagens de erro" } },
        { "text": {
          "es": "Revisar la conectividad\n• Verifica la conexión Wi-Fi o Ethernet\n• Prueba el acceso a sistemas internos",
          "en": "Check Connectivity\n• Verify Wi-Fi or Ethernet connection\n• Test access to internal systems",
          "pt": "Verificar a conectividade\n• Verifique a conexão Wi-Fi ou Ethernet\n• Teste o acesso aos sistemas internos" } },
        { "text": {
          "es": "Revisar actualizaciones\n• Verifica que el SO esté actualizado\n• Revisa las versiones de las aplicaciones",
          "en": "Check Updates\n• Verify OS is up to date\n• Check application versions",
          "pt": "Verificar atualizações\n• Verifique se o SO está atualizado\n• Verifique as versões dos aplicativos" } },
        { "text": {
          "es": "Recopilar información\n• Anota los mensajes de error\n• Toma capturas de pantalla si es posible\n• Envía los detalles a TI",
          "en": "Collect Information\n• Note error messages\n• Take screenshots if possible\n• Provide details to IT",
          "pt": "Coletar informações\n• Anote as mensagens de erro\n• Tire capturas de tela se possível\n• Envie os detalhes à TI" } }
      ] }
  ]
};
