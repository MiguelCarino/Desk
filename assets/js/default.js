const DEFAULT_CONFIG = {
  "config": {
    "defaultLang": "pt",
    "supportedLangs": ["es", "en", "pt", "ja", "ru"],
    /* Universal footer line for exported flow PNGs. Per-flow override via
       flow.footer: a string = custom text, false (or "none") = no footer.
       Set flowFooter to "" to disable the footer everywhere. */
    "flowFooter": "desk.carino.systems"
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
    "btnLoad": { "es": "📂 Cargar", "en": "📂 Load", "pt": "📂 Carregar", "ja": "📂 読み込み", "ru": "📂 Загрузить" },
    "btnBackup": { "es": "💾 Respaldo", "en": "💾 Backup", "pt": "💾 Backup", "ja": "💾 バックアップ", "ru": "💾 Резервная копия" },
    "btnSave": { "es": "📄 Guardar Log", "en": "📄 Save Log", "pt": "📄 Salvar Log", "ja": "📄 ログを保存", "ru": "📄 Сохранить журнал" },
    "btnClear": { "es": "🧹 Limpiar", "en": "🧹 Clear", "pt": "🧹 Limpar", "ja": "🧹 クリア", "ru": "🧹 Очистить" },

    "statusOngoing": { "es": "🔴 En Curso", "en": "🔴 Ongoing", "pt": "🔴 Em Andamento", "ja": "🔴 対応中", "ru": "🔴 В работе" },
    "statusPending": { "es": "🟡 Pendiente", "en": "🟡 Pending", "pt": "🟡 Pendente", "ja": "🟡 保留", "ru": "🟡 Ожидание" },
    "statusDone": { "es": "🟢 Finalizado", "en": "🟢 Done", "pt": "🟢 Concluído", "ja": "🟢 完了", "ru": "🟢 Готово" },

    "searchPlaceholder": { "es": "Buscar...", "en": "Search...", "pt": "Pesquisar...", "ja": "検索...", "ru": "Поиск..." },
    "notesPlaceholder": { "es": "Notas del caso...", "en": "Case notes...", "pt": "Notas do caso...", "ja": "ケースのメモ...", "ru": "Заметки по обращению..." },
    "notesHeader": { "es": "📝 Notas", "en": "📝 Notes", "pt": "📝 Notas", "ja": "📝 メモ", "ru": "📝 Заметки" },

    "Saludos y Scripts": { "es": "Saludos y Scripts", "en": "Greetings & Scripts", "pt": "Saudações e Scripts", "ja": "挨拶とスクリプト", "ru": "Приветствия и скрипты" },
    "Respuestas Frecuentes": { "es": "Respuestas Frecuentes", "en": "FAQ", "pt": "Perguntas Frequentes", "ja": "よくある質問", "ru": "Частые вопросы" },

    "Acceso y Cuentas": { "es": "Acceso y Cuentas", "en": "Accounts & Access", "pt": "Contas e Acesso", "ja": "アカウントとアクセス", "ru": "Учётные записи и доступ" },
    "Software": { "es": "Software", "en": "Software", "pt": "Software", "ja": "ソフトウェア", "ru": "Программное обеспечение" },
    "Hardware": { "es": "Hardware", "en": "Hardware", "pt": "Hardware", "ja": "ハードウェア", "ru": "Оборудование" },
    "Red y VPN": { "es": "Red y VPN", "en": "Network & VPN", "pt": "Rede e VPN", "ja": "ネットワークとVPN", "ru": "Сеть и VPN" },
    "Seguridad": { "es": "Seguridad", "en": "Security", "pt": "Segurança", "ja": "セキュリティ", "ru": "Безопасность" },
    "Admin Links": { "es": "Links Admin", "en": "Admin Links", "pt": "Links Admin", "ja": "管理リンク", "ru": "Ссылки для админов" },

    "Confirmación": { "es": "Confirmación", "en": "Confirmation", "pt": "Confirmação", "ja": "確認", "ru": "Подтверждение" },
    "Confirmación Editable": { "es": "Confirmación Editable", "en": "Editable Conf.", "pt": "Conf. Editável", "ja": "編集可能な確認", "ru": "Изменяемое подтв." },
    "Fallido": { "es": "Fallido", "en": "Failed", "pt": "Falhou", "ja": "失敗", "ru": "Не удалось" },
    "En Progreso": { "es": "En Progreso", "en": "In Progress", "pt": "Em Progresso", "ja": "対応中", "ru": "В работе" },

    "Saludos": { "es": "Saludos", "en": "Greetings", "pt": "Saudações", "ja": "挨拶", "ru": "Приветствие" },

    /* Remaining card titles. The JSON key is the card's id and stays as
       authored; only the displayed label is translated (translateKey). */
    "Genérico": { "es": "Genérico", "en": "Generic", "pt": "Genérico", "ja": "汎用", "ru": "Общее" },
    "Solicitar Logs": { "es": "Solicitar Logs", "en": "Request Logs", "pt": "Solicitar Logs", "ja": "ログの依頼", "ru": "Запросить журналы" },
    "Pedir Info Basica": { "es": "Pedir Info Básica", "en": "Request Basic Info", "pt": "Pedir Informações Básicas", "ja": "基本情報の依頼", "ru": "Запросить базовые данные" },
    "Confirmar Solucion": { "es": "Confirmar Solución", "en": "Confirm Fix", "pt": "Confirmar Solução", "ja": "解決の確認", "ru": "Подтвердить решение" },
    "Reinicio": { "es": "Reinicio", "en": "Restart", "pt": "Reinício", "ja": "再起動", "ru": "Перезагрузка" },
    "Solicitar MFA": { "es": "Solicitar MFA", "en": "Request MFA", "pt": "Solicitar MFA", "ja": "多要素認証の確認", "ru": "Запросить МФА" },
    "Solicitar Repro": { "es": "Solicitar Reproducción", "en": "Request Repro Steps", "pt": "Solicitar Reprodução", "ja": "再現手順の依頼", "ru": "Запросить шаги воспроизведения" },
    "Pedir Detalles": { "es": "Pedir Detalles", "en": "Request Details", "pt": "Pedir Detalhes", "ja": "詳細の依頼", "ru": "Запросить детали" },
    "Diagnostico": { "es": "Diagnóstico", "en": "Diagnostics", "pt": "Diagnóstico", "ja": "診断", "ru": "Диагностика" },
    "Pedir Datos": { "es": "Pedir Datos", "en": "Request Network Data", "pt": "Pedir Dados", "ja": "ネットワーク情報の依頼", "ru": "Запросить данные сети" },
    "Pruebas Basicas": { "es": "Pruebas Básicas", "en": "Basic Tests", "pt": "Testes Básicos", "ja": "基本テスト", "ru": "Базовые проверки" },
    "Posible Phishing": { "es": "Posible Phishing", "en": "Possible Phishing", "pt": "Possível Phishing", "ja": "フィッシングの疑い", "ru": "Возможный фишинг" },
    "Incidente": { "es": "Incidente", "en": "Incident", "pt": "Incidente", "ja": "インシデント", "ru": "Инцидент" },

    "Ticket Link": { "es": "Enlace del Ticket", "en": "Ticket Link", "pt": "Link do Chamado", "ja": "チケットのリンク", "ru": "Ссылка на заявку" },
    "User Lookup": { "es": "Buscar Usuario", "en": "User Lookup", "pt": "Buscar Usuário", "ja": "ユーザー検索", "ru": "Поиск пользователя" },
    "Asset Lookup": { "es": "Buscar Activo", "en": "Asset Lookup", "pt": "Buscar Ativo", "ja": "資産の検索", "ru": "Поиск устройства" },
    "Endpoint Health": { "es": "Estado del Equipo", "en": "Endpoint Health", "pt": "Saúde do Dispositivo", "ja": "端末の状態", "ru": "Состояние устройства" },
    "SSO Logs": { "es": "Logs de SSO", "en": "SSO Logs", "pt": "Logs de SSO", "ja": "SSOのログ", "ru": "Журналы SSO" },
    "Device Mgmt": { "es": "Gestión de Equipos", "en": "Device Mgmt", "pt": "Gestão de Dispositivos", "ja": "端末管理", "ru": "Управление устройствами" },
    "Status Page": { "es": "Página de Estado", "en": "Status Page", "pt": "Página de Status", "ja": "ステータスページ", "ru": "Страница состояния" },

    /* Link-card titles (section "shortcuts"). These render through the same
       translateKey() path as snippet cards, so they need entries too. */
    "Password Reset Portal": { "es": "Portal de Contraseñas", "en": "Password Reset Portal", "pt": "Portal de Senhas", "ja": "パスワード再設定ポータル", "ru": "Портал сброса паролей" },
    "SSO Admin": { "es": "Admin SSO", "en": "SSO Admin", "pt": "Admin SSO", "ja": "SSO管理", "ru": "Администрирование SSO" },
    "Software Catalog": { "es": "Catálogo de Software", "en": "Software Catalog", "pt": "Catálogo de Software", "ja": "ソフトウェアカタログ", "ru": "Каталог ПО" },
    "Asset Inventory": { "es": "Inventario de Activos", "en": "Asset Inventory", "pt": "Inventário de Ativos", "ja": "資産インベントリ", "ru": "Инвентаризация устройств" },
    "Warranty Lookup": { "es": "Consulta de Garantía", "en": "Warranty Lookup", "pt": "Consulta de Garantia", "ja": "保証の確認", "ru": "Проверка гарантии" },
    "VPN Portal": { "es": "Portal VPN", "en": "VPN Portal", "pt": "Portal VPN", "ja": "VPNポータル", "ru": "Портал VPN" },
    "Network Status": { "es": "Estado de la Red", "en": "Network Status", "pt": "Status da Rede", "ja": "ネットワークの状態", "ru": "Состояние сети" },
    "Security Portal": { "es": "Portal de Seguridad", "en": "Security Portal", "pt": "Portal de Segurança", "ja": "セキュリティポータル", "ru": "Портал безопасности" },
    "Report Phishing": { "es": "Reportar Phishing", "en": "Report Phishing", "pt": "Reportar Phishing", "ja": "フィッシングの報告", "ru": "Сообщить о фишинге" },
    "Quote Tool": { "es": "Herramienta de Cotización", "en": "Quote Tool", "pt": "Ferramenta de Orçamento", "ja": "見積ツール", "ru": "Инструмент смет" },
    "Time Zones": { "es": "Zonas Horarias", "en": "Time Zones", "pt": "Fusos Horários", "ja": "タイムゾーン", "ru": "Часовые пояса" },
    "Resume": { "es": "Currículum", "en": "Resume", "pt": "Currículo", "ja": "履歴書", "ru": "Резюме" },
    "Hash Check": { "es": "Verificar Hash", "en": "Hash Check", "pt": "Verificar Hash", "ja": "ハッシュの確認", "ru": "Проверка хеша" },
    "DICOM Editor": { "es": "Editor DICOM", "en": "DICOM Editor", "pt": "Editor DICOM", "ja": "DICOMエディター", "ru": "Редактор DICOM" },
    "Netplan Config": { "es": "Configuración Netplan", "en": "Netplan Config", "pt": "Configuração Netplan", "ja": "Netplan設定", "ru": "Настройка Netplan" },
    "Net Topology": { "es": "Topología de Red", "en": "Net Topology", "pt": "Topologia de Rede", "ja": "ネットワーク構成図", "ru": "Топология сети" },
    "Hardware Ref": { "es": "Referencia de Hardware", "en": "Hardware Ref", "pt": "Referência de Hardware", "ja": "ハードウェア資料", "ru": "Справочник по оборудованию" },
    "Password Gen": { "es": "Generador de Contraseñas", "en": "Password Gen", "pt": "Gerador de Senhas", "ja": "パスワード生成", "ru": "Генератор паролей" },

    /* Product and brand names: listed so every card title has an explicit
       entry, but identical in all five languages by design. */
    "GitHub": { "es": "GitHub", "en": "GitHub", "pt": "GitHub", "ja": "GitHub", "ru": "GitHub" },
    "Kanban": { "es": "Kanban", "en": "Kanban", "pt": "Kanban", "ja": "Kanban", "ru": "Kanban" },
    "Branding": { "es": "Branding", "en": "Branding", "pt": "Branding", "ja": "Branding", "ru": "Branding" },
    "Metadata": { "es": "Metadata", "en": "Metadata", "pt": "Metadata", "ja": "Metadata", "ru": "Metadata" },
    "Carino PACS": { "es": "Carino PACS", "en": "Carino PACS", "pt": "Carino PACS", "ja": "Carino PACS", "ru": "Carino PACS" },
    "Retina Suite": { "es": "Retina Suite", "en": "Retina Suite", "pt": "Retina Suite", "ja": "Retina Suite", "ru": "Retina Suite" },
    "SimpleSetup": { "es": "SimpleSetup", "en": "SimpleSetup", "pt": "SimpleSetup", "ja": "SimpleSetup", "ru": "SimpleSetup" },
    "CVE Radar": { "es": "CVE Radar", "en": "CVE Radar", "pt": "CVE Radar", "ja": "CVE Radar", "ru": "CVE Radar" },

    "Flow Cards": { "es": "Tarjetas de Flujo", "en": "Flow Cards", "pt": "Cartões de Fluxo", "ja": "フローカード", "ru": "Карточки сценариев" },
    "flowNew": { "es": "➕ Nuevo Flujo", "en": "➕ New Flow", "pt": "➕ Novo Fluxo", "ja": "➕ 新しいフロー", "ru": "➕ Новый сценарий" },
    "flowEdit": { "es": "✏️ Editar", "en": "✏️ Edit", "pt": "✏️ Editar", "ja": "✏️ 編集", "ru": "✏️ Изменить" },
    "flowCopyText": { "es": "📋 Copiar Texto", "en": "📋 Copy Text", "pt": "📋 Copiar Texto", "ja": "📋 テキストをコピー", "ru": "📋 Копировать текст" },
    "flowCopyImage": { "es": "🖼️ Copiar como imagen", "en": "🖼️ Copy as image", "pt": "🖼️ Copiar como imagem", "ja": "🖼️ 画像としてコピー", "ru": "🖼️ Копировать как изображение" },
    "flowPng": { "es": "⬇ PNG", "en": "⬇ PNG", "pt": "⬇ PNG", "ja": "⬇ PNG", "ru": "⬇ PNG" },
    "flowDelete": { "es": "🗑 Eliminar", "en": "🗑 Delete", "pt": "🗑 Excluir", "ja": "🗑 削除", "ru": "🗑 Удалить" },
    "flowRevert": { "es": "↺ Revertir", "en": "↺ Revert", "pt": "↺ Reverter", "ja": "↺ 元に戻す", "ru": "↺ Вернуть" },
    "flowSteps": { "es": "pasos", "en": "steps", "pt": "passos", "ja": "手順", "ru": "шагов" },
    "flowBuiltin": { "es": "predefinido", "en": "builtin", "pt": "padrão", "ja": "組み込み", "ru": "встроенный" },
    "flowCustom": { "es": "personalizado", "en": "custom", "pt": "personalizado", "ja": "カスタム", "ru": "свой" },
    "flowEdited": { "es": "predefinido (editado)", "en": "builtin (edited)", "pt": "padrão (editado)", "ja": "組み込み（編集済み）", "ru": "встроенный (изменён)" },
    "flowEditorTitle": { "es": "Editor de Flujo", "en": "Flow Editor", "pt": "Editor de Fluxo", "ja": "フローエディター", "ru": "Редактор сценариев" },
    "flowFieldTitle": { "es": "Título", "en": "Title", "pt": "Título", "ja": "タイトル", "ru": "Заголовок" },
    "flowFieldTag": { "es": "Audiencia / Etiqueta (opcional)", "en": "Audience / Tag (optional)", "pt": "Público / Etiqueta (opcional)", "ja": "対象／タグ（任意）", "ru": "Аудитория / метка (необязательно)" },
    "flowAddStep": { "es": "➕ Agregar Paso", "en": "➕ Add Step", "pt": "➕ Adicionar Passo", "ja": "➕ 手順を追加", "ru": "➕ Добавить шаг" },
    "flowCancel": { "es": "Cancelar", "en": "Cancel", "pt": "Cancelar", "ja": "キャンセル", "ru": "Отмена" },
    "flowSave": { "es": "💾 Guardar Flujo", "en": "💾 Save Flow", "pt": "💾 Salvar Fluxo", "ja": "💾 フローを保存", "ru": "💾 Сохранить сценарий" },
    "flowHint": {
      "es": "Pega una captura (Ctrl+V) para adjuntarla al paso seleccionado · la primera línea del paso es el encabezado",
      "en": "Paste a screenshot (Ctrl+V) to attach it to the selected step · first line of a step = heading",
      "pt": "Cole uma captura (Ctrl+V) para anexá-la ao passo selecionado · a primeira linha do passo é o título", "ja": "スクリーンショットを貼り付ける（Ctrl+V）と選択中の手順に添付されます · 手順の1行目が見出しになります", "ru": "Вставьте снимок экрана (Ctrl+V), чтобы прикрепить его к выбранному шагу · первая строка шага — заголовок" },
    "flowStepPh": {
      "es": "Texto del paso — la primera línea es el encabezado…",
      "en": "Step text — first line is the heading…",
      "pt": "Texto do passo — a primeira linha é o título…", "ja": "手順のテキスト — 1行目が見出しになります…", "ru": "Текст шага — первая строка это заголовок…" },

    "copyChars": { "es": "caracteres", "en": "chars", "pt": "caracteres", "ja": "文字", "ru": "симв." },
    "copyFailed": {
      "es": "⚠ No se pudo copiar — portapapeles bloqueado",
      "en": "⚠ Copy failed — clipboard blocked",
      "pt": "⚠ Falha ao copiar — área de transferência bloqueada", "ja": "⚠ コピーに失敗しました — クリップボードがブロックされています", "ru": "⚠ Не удалось скопировать — буфер обмена заблокирован" },
    "fillTitle": { "es": "Completar campos", "en": "Fill in fields", "pt": "Preencher campos", "ja": "項目を入力", "ru": "Заполнить поля" },
    "fillCopy": { "es": "📋 Copiar", "en": "📋 Copy", "pt": "📋 Copiar", "ja": "📋 コピー", "ru": "📋 Копировать" },
    "fillOpen": { "es": "↗ Abrir", "en": "↗ Open", "pt": "↗ Abrir", "ja": "↗ 開く", "ru": "↗ Открыть" },
    "fillMissing": { "es": "campos sin completar", "en": "unfilled fields", "pt": "campos não preenchidos", "ja": "未入力の項目", "ru": "незаполненных полей" },
    "closedToast": {
      "es": "cerrado — Alt+Z lo restaura",
      "en": "closed — Alt+Z restores",
      "pt": "fechado — Alt+Z restaura", "ja": "閉じました — Alt+Zで復元", "ru": "закрыта — Alt+Z вернёт" },
    "restoredToast": { "es": "restaurado", "en": "restored", "pt": "restaurado", "ja": "復元しました", "ru": "восстановлена" },
    "trashEmpty": {
      "es": "No hay tickets cerrados para restaurar",
      "en": "No closed tickets to restore",
      "pt": "Não há tickets fechados para restaurar", "ja": "復元できる閉じたチケットはありません", "ru": "Нет закрытых заявок для восстановления" },

    "kbdBtnTitle": { "es": "Atajos de teclado", "en": "Keyboard shortcuts", "pt": "Atalhos de teclado", "ja": "キーボードショートカット", "ru": "Горячие клавиши" },
    "kbdOverlayTitle": { "es": "Atajos de Teclado", "en": "Keyboard Shortcuts", "pt": "Atalhos de Teclado", "ja": "キーボードショートカット", "ru": "Горячие клавиши" },
    "kbdGroupGlobal": { "es": "Globales", "en": "Global", "pt": "Globais", "ja": "全体", "ru": "Общие" },
    "kbdGroupIdle": { "es": "Fuera de campos de texto", "en": "Outside text fields", "pt": "Fora de campos de texto", "ja": "テキスト入力欄の外", "ru": "Вне текстовых полей" },
    "kbdGroupSearch": { "es": "En la búsqueda", "en": "In the search box", "pt": "Na pesquisa", "ja": "検索ボックス内", "ru": "В поле поиска" },
    "searchNoResults": {
      "es": "Sin resultados para esta búsqueda",
      "en": "No results match your search",
      "pt": "Nenhum resultado para esta pesquisa", "ja": "検索条件に一致する結果はありません", "ru": "Ничего не найдено по запросу" },
    "searchClearTitle": { "es": "Borrar búsqueda", "en": "Clear search", "pt": "Limpar pesquisa", "ja": "検索をクリア", "ru": "Очистить поиск" },
    "langSwitched": { "es": "Idioma", "en": "Language", "pt": "Idioma", "ja": "言語", "ru": "Язык" },
    "flowDiscardConfirm": {
      "es": "¿Descartar los cambios sin guardar de este flujo?",
      "en": "Discard unsaved changes to this flow?",
      "pt": "Descartar as alterações não salvas deste fluxo?", "ja": "この手順の未保存の変更を破棄しますか？", "ru": "Отменить несохранённые изменения этого сценария?" },

    "kFocusSearch": { "es": "Ir a la búsqueda", "en": "Focus search", "pt": "Ir para a pesquisa", "ja": "検索にフォーカス", "ru": "Перейти к поиску" },
    "kSaveLog": { "es": "Guardar log del caso", "en": "Save case log", "pt": "Salvar log do caso", "ja": "ケースログを保存", "ru": "Сохранить журнал обращения" },
    "kBackup": { "es": "Descargar respaldo", "en": "Download backup", "pt": "Baixar backup", "ja": "バックアップをダウンロード", "ru": "Скачать резервную копию" },
    "kRestoreClosed": { "es": "Restaurar ticket cerrado", "en": "Restore closed ticket", "pt": "Restaurar ticket fechado", "ja": "閉じたチケットを復元", "ru": "Восстановить закрытую заявку" },
    "kEscStack": {
      "es": "Cerrar / limpiar (capa por capa)",
      "en": "Close / clear (layer by layer)",
      "pt": "Fechar / limpar (camada por camada)", "ja": "閉じる／クリア（階層ごと）", "ru": "Закрыть / очистить (по слоям)" },
    "kShortcutOverlay": { "es": "Mostrar u ocultar los atajos", "en": "Toggle shortcuts overlay", "pt": "Mostrar ou ocultar os atalhos", "ja": "ショートカット一覧の表示切り替え", "ru": "Показать или скрыть список горячих клавиш" },
    "kCycleLang": { "es": "Cambiar de idioma", "en": "Cycle language", "pt": "Alternar idioma", "ja": "言語を切り替え", "ru": "Переключить язык" },
    "kOpenNotes": { "es": "Abrir las notas", "en": "Open notes", "pt": "Abrir as notas", "ja": "メモを開く", "ru": "Открыть заметки" },
    "kCycleDrawer": {
      "es": "Ciclar el tamaño del panel de notas",
      "en": "Cycle notes drawer size",
      "pt": "Alternar o tamanho do painel de notas", "ja": "メモ欄の高さを切り替え", "ru": "Переключить размер панели заметок" },
    "kToggleDim": {
      "es": "Atenuar tarjetas no relacionadas",
      "en": "Toggle card dimming",
      "pt": "Atenuar cartões não relacionados", "ja": "関連外カードの減光を切り替え", "ru": "Переключить затемнение карточек" },
    "kNavCards": { "es": "Mover la selección de tarjetas", "en": "Move card selection", "pt": "Mover a seleção de cartões", "ja": "カードの選択を移動", "ru": "Переместить выбор карточек" },
    "kCopySelected": {
      "es": "Copiar/abrir la selección y limpiar la búsqueda",
      "en": "Copy/open selection, clear search",
      "pt": "Copiar/abrir a seleção e limpar a pesquisa", "ja": "選択をコピー／開いて検索をクリア", "ru": "Копировать/открыть выбранное и очистить поиск" },
    "kCopyKeepQuery": {
      "es": "Copiar/abrir manteniendo la búsqueda",
      "en": "Copy/open keeping the query",
      "pt": "Copiar/abrir mantendo a pesquisa", "ja": "検索語を残してコピー／開く", "ru": "Копировать/открыть, сохранив запрос" },

    "kSwitchTicket": { "es": "Ir al ticket 1–9", "en": "Switch to ticket 1–9", "pt": "Ir para o ticket 1–9", "ja": "チケット1〜9へ切り替え", "ru": "Перейти к заявке 1–9" },
    "kPrevNextTicket": { "es": "Ticket anterior / siguiente", "en": "Previous / next ticket", "pt": "Ticket anterior / seguinte", "ja": "前／次のチケット", "ru": "Предыдущая / следующая заявка" },
    "kCycleStatus": { "es": "Cambiar el estado del ticket", "en": "Cycle ticket status", "pt": "Alternar o status do ticket", "ja": "チケットの状態を切り替え", "ru": "Переключить статус заявки" },
    "kCloseTicket": { "es": "Cerrar el ticket (recuperable)", "en": "Close ticket (undoable)", "pt": "Fechar o ticket (recuperável)", "ja": "チケットを閉じる（取り消し可）", "ru": "Закрыть заявку (можно отменить)" },
    "kToggleTimeline": {
      "es": "Alternar notas / cronología",
      "en": "Toggle notes / timeline",
      "pt": "Alternar notas / linha do tempo", "ja": "メモ／タイムラインを切り替え", "ru": "Переключить заметки / хронологию" },
    "kDigest": { "es": "Abrir el resumen de tickets", "en": "Open ticket digest", "pt": "Abrir o resumo dos tickets", "ja": "チケットの要約を開く", "ru": "Открыть сводку по заявкам" },

    "tabRenameHint": { "es": "Doble clic para renombrar", "en": "Double-click to rename", "pt": "Clique duplo para renomear", "ja": "ダブルクリックで名前を変更", "ru": "Двойной щелчок — переименовать" },
    "lastTabToast": {
      "es": "No se puede cerrar el último ticket",
      "en": "Cannot close the last ticket",
      "pt": "Não é possível fechar o último ticket", "ja": "最後のチケットは閉じられません", "ru": "Нельзя закрыть последнюю заявку" },

    "pasteIntakeHeader": { "es": "--- mensaje pegado ---", "en": "--- pasted intake ---", "pt": "--- mensagem colada ---", "ja": "--- 貼り付けた内容 ---", "ru": "--- вставленные данные ---" },
    "pasteToast": {
      "es": "📥 Ticket creado con el texto pegado — Alt+Z lo deshace",
      "en": "📥 Ticket created from paste — Alt+Z undoes",
      "pt": "📥 Ticket criado com o texto colado — Alt+Z desfaz", "ja": "📥 貼り付けからチケットを作成しました — Alt+Zで取り消し", "ru": "📥 Заявка создана из вставки — Alt+Z отменит" },

    "timelineHeader": { "es": "🕒 Cronología", "en": "🕒 Timeline", "pt": "🕒 Linha do tempo", "ja": "🕒 タイムライン", "ru": "🕒 Хронология" },
    "timelineToggleTitle": { "es": "Notas / cronología", "en": "Notes / timeline", "pt": "Notas / linha do tempo", "ja": "メモ／タイムライン", "ru": "Заметки / хронология" },
    "timelineEmpty": {
      "es": "Aún no hay eventos en este ticket",
      "en": "No events yet for this ticket",
      "pt": "Ainda não há eventos neste ticket", "ja": "このチケットにはまだイベントがありません", "ru": "Для этой заявки ещё нет событий" },
    "evCreated": { "es": "Ticket creado", "en": "Ticket created", "pt": "Ticket criado", "ja": "チケットを作成しました", "ru": "Заявка создана" },
    "evClosed": { "es": "Ticket cerrado", "en": "Ticket closed", "pt": "Ticket fechado", "ja": "チケットを閉じました", "ru": "Заявка закрыта" },
    "evRestored": { "es": "Ticket restaurado", "en": "Ticket restored", "pt": "Ticket restaurado", "ja": "チケットを復元しました", "ru": "Заявка восстановлена" },
    "evPasted": {
      "es": "Ticket creado con texto pegado",
      "en": "Ticket created from pasted text",
      "pt": "Ticket criado com texto colado", "ja": "貼り付けたテキストからチケットを作成しました", "ru": "Заявка создана из вставленного текста" },

    "btnDigest": { "es": "📊 Resumen", "en": "📊 Digest", "pt": "📊 Resumo", "ja": "📊 要約", "ru": "📊 Сводка" },
    "digestTitle": { "es": "Resumen de Tickets", "en": "Ticket Digest", "pt": "Resumo de Tickets", "ja": "チケットの要約", "ru": "Сводка по заявкам" },
    "digestTickets": { "es": "tickets", "en": "tickets", "pt": "tickets", "ja": "件のチケット", "ru": "заявок" },
    "digestDone": { "es": "finalizados", "en": "done", "pt": "concluídos", "ja": "完了", "ru": "завершено" },
    "digestOngoing": { "es": "en curso", "en": "ongoing", "pt": "em andamento", "ja": "対応中", "ru": "в работе" },
    "digestPending": { "es": "pendientes", "en": "pending", "pt": "pendentes", "ja": "保留", "ru": "ожидание" },
    "digestRequester": { "es": "Solicitante", "en": "Requester", "pt": "Solicitante", "ja": "依頼者", "ru": "Заявитель" },
    "digestSummary": { "es": "Resumen", "en": "Summary", "pt": "Resumo", "ja": "概要", "ru": "Кратко" },
    "downloadTxt": { "es": "⬇ Descargar .txt", "en": "⬇ Download .txt", "pt": "⬇ Baixar .txt", "ja": "⬇ .txtをダウンロード", "ru": "⬇ Скачать .txt" },

    "sheetTitle": { "es": "Hoja de Caso", "en": "Case Sheet", "pt": "Folha do Caso", "ja": "ケースシート", "ru": "Карточка обращения" },
    "sheetIncludeNotes": { "es": "Incluir notas internas", "en": "Include internal notes", "pt": "Incluir notas internas", "ja": "内部メモを含める", "ru": "Включить внутренние заметки" },
    "sheetCopyMd": { "es": "📋 Copiar Markdown", "en": "📋 Copy Markdown", "pt": "📋 Copiar Markdown", "ja": "📋 Markdownをコピー", "ru": "📋 Копировать Markdown" },
    "sheetPrint": { "es": "🖨 Imprimir", "en": "🖨 Print", "pt": "🖨 Imprimir", "ja": "🖨 印刷", "ru": "🖨 Печать" },
    "sheetDetails": { "es": "Detalles del caso", "en": "Case details", "pt": "Detalhes do caso", "ja": "ケースの詳細", "ru": "Детали обращения" },
    "sheetNotes": { "es": "Notas internas", "en": "Internal notes", "pt": "Notas internas", "ja": "内部メモ", "ru": "Внутренние заметки" },
    "sheetTimeline": { "es": "Cronología", "en": "Timeline", "pt": "Linha do tempo", "ja": "タイムライン", "ru": "Хронология" },
    "sheetSignature": { "es": "Atendido por", "en": "Handled by", "pt": "Atendido por", "ja": "対応者", "ru": "Обработал" },
    "sheetField": { "es": "Campo", "en": "Field", "pt": "Campo", "ja": "項目", "ru": "Поле" },
    "sheetValue": { "es": "Valor", "en": "Value", "pt": "Valor", "ja": "値", "ru": "Значение" },
    "sheetStatusLabel": { "es": "Estado", "en": "Status", "pt": "Status", "ja": "ステータス", "ru": "Статус" },
    "sheetLogId": { "es": "ID de registro", "en": "Log ID", "pt": "ID do registro", "ja": "ログID", "ru": "ID журнала" },
    "sheetDateLabel": { "es": "Fecha", "en": "Date", "pt": "Data", "ja": "日付", "ru": "Дата" },

    "pinnedSection": { "es": "★ Fijados", "en": "★ Pinned", "pt": "★ Fixados", "ja": "★ ピン留め", "ru": "★ Закреплённые" },
    "pinTip": { "es": "Fijar / quitar de fijados", "en": "Pin / unpin", "pt": "Fixar / desafixar", "ja": "ピン留め／解除", "ru": "Закрепить / открепить" },
    "pinnedToast": { "es": "📌 Fijado en ★", "en": "📌 Pinned to ★", "pt": "📌 Fixado em ★", "ja": "📌 ★にピン留めしました", "ru": "📌 Закреплено в ★" },
    "unpinnedToast": { "es": "Quitado de ★", "en": "Unpinned from ★", "pt": "Removido de ★", "ja": "★から外しました", "ru": "Откреплено из ★" },

    "quickEditTitle": { "es": "✎ Edición rápida", "en": "✎ Quick Edit", "pt": "✎ Edição rápida", "ja": "✎ クイック編集", "ru": "✎ Быстрое изменение" },
    "quickEditTip": { "es": "Editar antes de copiar", "en": "Edit before copying", "pt": "Editar antes de copiar", "ja": "コピー前に編集", "ru": "Изменить перед копированием" },
    "langChipTip": { "es": "Copiar en este idioma", "en": "Copy in this language", "pt": "Copiar neste idioma", "ja": "この言語でコピー", "ru": "Копировать на этом языке" },

    "composerLabel": { "es": "Borrador", "en": "Composer", "pt": "Rascunho", "ja": "コンポーザー", "ru": "Редактор" },
    "composerAdded": { "es": "añadido al borrador", "en": "added to the composer", "pt": "adicionado ao rascunho", "ja": "コンポーザーに追加しました", "ru": "добавлено в редактор" },
    "composerCopyAll": { "es": "📋 Copiar todo", "en": "📋 Copy All", "pt": "📋 Copiar tudo", "ja": "📋 すべてコピー", "ru": "📋 Копировать всё" },
    "composerClear": { "es": "🧹 Vaciar", "en": "🧹 Clear", "pt": "🧹 Esvaziar", "ja": "🧹 クリア", "ru": "🧹 Очистить" },
    "composerRemoveTip": { "es": "Clic para quitar", "en": "Click to remove", "pt": "Clique para remover", "ja": "クリックで削除", "ru": "Нажмите, чтобы удалить" },
    "kConfirm": {
      "es": "Confirmación contextual (modal / borrador)",
      "en": "Contextual confirm (modal / composer)",
      "pt": "Confirmação contextual (modal / rascunho)", "ja": "状況に応じた確定（モーダル／コンポーザー）", "ru": "Контекстное подтверждение (окно / редактор)" },

    "flowFieldFooter": { "es": "Pie de página (PNG)", "en": "PNG footer", "pt": "Rodapé (PNG)", "ja": "PNGのフッター", "ru": "Нижний колонтитул PNG" },
    "flowFooterUniversal": { "es": "Universal", "en": "Universal", "pt": "Universal", "ja": "共通", "ru": "Универсальный" },
    "flowFooterCustom": { "es": "Personalizado", "en": "Custom", "pt": "Personalizado", "ja": "カスタム", "ru": "Свой" },
    "flowFooterNone": { "es": "Sin pie", "en": "None", "pt": "Sem rodapé", "ja": "なし", "ru": "Нет" },
    "flowFooterTextLabel": { "es": "Texto del pie", "en": "Footer text", "pt": "Texto do rodapé", "ja": "フッターのテキスト", "ru": "Текст нижнего колонтитула" },

    "Consultoría": { "es": "Consultoría", "en": "Consulting", "pt": "Consultoria", "ja": "コンサルティング", "ru": "Консалтинг" },
    "Desarrollo y Entregas": { "es": "Desarrollo y Entregas", "en": "Development & Delivery", "pt": "Desenvolvimento e Entregas", "ja": "開発と納品", "ru": "Разработка и сдача" },
    "Imagenología y PACS": { "es": "Imagenología y PACS", "en": "Medical Imaging & PACS", "pt": "Imagem Médica e PACS", "ja": "医用画像とPACS", "ru": "Медицинская визуализация и PACS" },
    "Herramientas Carino": { "es": "Herramientas Carino", "en": "Carino Tools", "pt": "Ferramentas Carino", "ja": "Carinoツール", "ru": "Инструменты Carino" },
    "Presentación": { "es": "Presentación", "en": "Introduction", "pt": "Apresentação", "ja": "自己紹介", "ru": "Представление" },
    "Cotización": { "es": "Cotización", "en": "Quote", "pt": "Orçamento", "ja": "見積", "ru": "Смета" },
    "Agendar Llamada": { "es": "Agendar Llamada", "en": "Schedule Call", "pt": "Agendar Chamada", "ja": "通話の予約", "ru": "Назначить звонок" },
    "Avance de Proyecto": { "es": "Avance de Proyecto", "en": "Project Update", "pt": "Andamento do Projeto", "ja": "進捗報告", "ru": "Ход проекта" },
    "Recordatorio de Pago": { "es": "Recordatorio de Pago", "en": "Payment Reminder", "pt": "Lembrete de Pagamento", "ja": "支払いのご案内", "ru": "Напоминание об оплате" },
    "Cierre de Proyecto": { "es": "Cierre de Proyecto", "en": "Project Wrap-up", "pt": "Encerramento do Projeto", "ja": "プロジェクト完了", "ru": "Завершение проекта" },
    "Sitio Publicado": { "es": "Sitio Publicado", "en": "Site Published", "pt": "Site Publicado", "ja": "サイト公開", "ru": "Сайт опубликован" },
    "Solicitar Contenido": { "es": "Solicitar Contenido", "en": "Request Content", "pt": "Solicitar Conteúdo", "ja": "コンテンツのご依頼", "ru": "Запрос материалов" },
    "Entrega de Accesos": { "es": "Entrega de Accesos", "en": "Credentials Handoff", "pt": "Entrega de Acessos", "ja": "認証情報の受け渡し", "ru": "Передача учётных данных" },
    "Mantenimiento": { "es": "Mantenimiento", "en": "Maintenance", "pt": "Manutenção", "ja": "保守", "ru": "Обслуживание" },
    "Datos DICOM": { "es": "Datos DICOM", "en": "DICOM Details", "pt": "Dados DICOM", "ja": "DICOM情報", "ru": "Параметры DICOM" },
    "Prueba de Envío": { "es": "Prueba de Envío", "en": "Send Test", "pt": "Teste de Envio", "ja": "送信テスト", "ru": "Тестовая отправка" },
    "Nota de Anonimización": { "es": "Nota de Anonimización", "en": "Anonymization Note", "pt": "Nota de Anonimização", "ja": "匿名化についての注意", "ru": "Примечание об анонимизации" }
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
      "pt": "Olá, sou [myName] do suporte da [company]. Terei prazer em ajudar no seu caso [ticketID].", "ja": "こんにちは。[company] サポートの [myName] です。お問い合わせ [ticketID] について喜んでお手伝いします。", "ru": "Здравствуйте! Меня зовут [myName], поддержка [company]. С радостью помогу по обращению [ticketID]."
    },
    "Genérico": {
      "es": "Para poder apoyarte, ¿me confirmas: equipo ([assetTag]/[hostname]), sistema operativo, y el mensaje exacto de error?",
      "en": "To help you, please confirm: device ([assetTag]/[hostname]), OS, and the exact error message.",
      "pt": "Para ajudar, confirme: equipamento ([assetTag]/[hostname]), SO e a mensagem exata de erro.", "ja": "お手伝いのため、次をご確認ください：機器（[assetTag]／[hostname]）、OS、表示されているエラーメッセージの正確な内容。", "ru": "Чтобы помочь, уточните, пожалуйста: устройство ([assetTag]/[hostname]), ОС и точный текст ошибки."
    },
    "Solicitar Logs": {
      "es": "¿Podrías copiar y pegar el log o el mensaje completo de error? (Evita captura si es posible).",
      "en": "Could you paste the log or full error text? (Prefer text over screenshots if possible).",
      "pt": "Você pode colar o log ou o texto completo do erro? (Prefira texto em vez de imagem).", "ja": "ログまたはエラー全文を貼り付けていただけますか。（可能であればスクリーンショットより文字での共有をお願いします）", "ru": "Пришлите, пожалуйста, журнал или полный текст ошибки. (По возможности текстом, а не скриншотом.)"
    }
  },

  "Respuestas Frecuentes": {
    "tags": ["IT", "Troubleshooting"],

    "Pedir Info Basica": {
      "es": "Para avanzar: [os] [osVersion], app/servicio ([appName] [appVersion] o [serviceName]), y desde cuándo ocurre.",
      "en": "To proceed: [os] [osVersion], app/service ([appName] [appVersion] or [serviceName]), and when it started.",
      "pt": "Para avançar: [os] [osVersion], app/serviço ([appName] [appVersion] ou [serviceName]) e desde quando ocorre.", "ja": "次に進むために：[os] [osVersion]、アプリ／サービス（[appName] [appVersion] または [serviceName]）、および発生し始めた時期をお知らせください。", "ru": "Для продолжения: [os] [osVersion], приложение/сервис ([appName] [appVersion] или [serviceName]) и когда это началось."
    },

    "Confirmar Solucion": {
      "es": "Aplicamos el ajuste. ¿Me confirmas si ya funciona en tu equipo [hostname]?",
      "en": "We applied the fix. Can you confirm it’s working now on [hostname]?",
      "pt": "Aplicamos a correção. Pode confirmar se já funciona no [hostname]?", "ja": "修正を適用しました。[hostname] で正常に動作しているかご確認いただけますか。", "ru": "Мы применили исправление. Проверьте, пожалуйста, работает ли теперь на [hostname]."
    },

    "Reinicio": {
      "es": "¿Podrías reiniciar el equipo y confirmar si el problema persiste? (Esto ayuda a aplicar cambios pendientes).",
      "en": "Could you restart the device and confirm if the issue persists? (Helps apply pending changes).",
      "pt": "Pode reiniciar o equipamento e confirmar se o problema continua? (Ajuda a aplicar mudanças pendentes).", "ja": "機器を再起動し、問題が続くかご確認いただけますか。（保留中の変更が適用されます）", "ru": "Перезагрузите, пожалуйста, устройство и проверьте, сохраняется ли проблема. (Это применит отложенные изменения.)"
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
      "pt": "Estou verificando o acesso do usuário [requesterUser] ao [appName].", "ja": "ユーザー [requesterUser] の [appName] へのアクセスを確認しています。", "ru": "Проверяю доступ пользователя [requesterUser] к [appName]."
    },

    "Solicitar MFA": {
      "es": "¿Tienes acceso al método de MFA (app/código/SMS)? Si no, puedo guiarte para re-registrarlo.",
      "en": "Do you have access to your MFA method (app/code/SMS)? If not, I can guide you to re-enroll.",
      "pt": "Você tem acesso ao MFA (app/código/SMS)? Se não, posso orientar para cadastrar novamente.", "ja": "多要素認証の手段（アプリ／コード／SMS）は利用できますか。難しい場合は再登録の手順をご案内します。", "ru": "У вас есть доступ к вашему способу МФА (приложение/код/SMS)? Если нет, помогу пройти повторную регистрацию."
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
      "pt": "Estou validando versão/config do [appName] no [hostname] e revisando logs.", "ja": "[hostname] 上の [appName] のバージョンと設定を検証し、ログを確認しています。", "ru": "Проверяю версию и настройки [appName] на [hostname] и изучаю журналы."
    },

    "Solicitar Repro": {
      "es": "¿Me compartes pasos exactos para reproducir y el mensaje de error completo (texto)?",
      "en": "Please share exact repro steps and the full error message (as text).",
      "pt": "Compartilhe os passos para reproduzir e a mensagem completa do erro (texto).", "ja": "再現手順の詳細と、エラーメッセージの全文（テキスト）をお送りください。", "ru": "Пришлите, пожалуйста, точные шаги воспроизведения и полный текст ошибки."
    },

    "Fallido": {
      "es": "No logramos resolver con las validaciones iniciales. Escalaré con logs y evidencia.",
      "en": "We couldn’t resolve with initial checks. I’ll escalate with logs and evidence.",
      "pt": "Não foi possível resolver com as verificações iniciais. Vou escalar com logs e evidências.", "ja": "初期確認では解決できませんでした。ログと証跡を添えてエスカレーションします。", "ru": "Первичные проверки не помогли. Передаю выше вместе с журналами и подтверждениями."
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
      "pt": "Para checar hardware: [manufacturer] [model], serial [serialNumber], e sintoma (não liga / sem vídeo / reinicia / aquece).", "ja": "ハードウェア確認のため：[manufacturer] [model]、シリアル [serialNumber]、症状（電源が入らない／画面が映らない／再起動を繰り返す／発熱）をお知らせください。", "ru": "Для проверки оборудования: [manufacturer] [model], серийный номер [serialNumber] и симптом (не включается / нет изображения / перезагружается / перегрев)."
    },

    "Diagnostico": {
      "es": "¿Puedes confirmar: temperatura, uso de CPU/RAM, y si hay pitidos/luces de error? Si aplica, envía foto del LED/código.",
      "en": "Can you confirm: temps, CPU/RAM usage, and any beep/LED error code? If applicable, send a photo of the LED/code.",
      "pt": "Confirme: temperaturas, uso de CPU/RAM e algum beep/LED com código? Se aplicável, envie foto do LED/código.", "ja": "温度、CPU／メモリ使用率、ビープ音やLEDのエラーコードをご確認いただけますか。可能であればLEDやコードの写真もお送りください。", "ru": "Уточните, пожалуйста: температуры, загрузку CPU/ОЗУ и код ошибки (звуковой сигнал или индикатор). Если возможно, пришлите фото индикатора или кода."
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
      "pt": "Para rede/VPN: tipo ([networkType]), IP local ([localIP]), DNS ([dns]), VPN ([vpn]) e destino ([url]:[port]).", "ja": "ネットワーク／VPNについて：種別（[networkType]）、ローカルIP（[localIP]）、DNS（[dns]）、VPN（[vpn]）、接続先（[url]:[port]）。", "ru": "По сети/VPN: тип ([networkType]), локальный IP ([localIP]), DNS ([dns]), VPN ([vpn]) и назначение ([url]:[port])."
    },

    "Pruebas Basicas": {
      "es": "¿Puedes probar: 1) ping gateway 2) nslookup del dominio 3) abrir [url] desde otra red (hotspot) y decirme resultados?",
      "en": "Can you test: 1) ping gateway 2) nslookup domain 3) open [url] from another network (hotspot) and share results?",
      "pt": "Pode testar: 1) ping gateway 2) nslookup do domínio 3) abrir [url] de outra rede (hotspot) e enviar resultados?", "ja": "次をお試しいただけますか：1) ゲートウェイへのping 2) ドメインのnslookup 3) 別のネットワーク（テザリング）から [url] を開く。結果を共有してください。", "ru": "Проверьте, пожалуйста: 1) ping до шлюза 2) nslookup домена 3) откройте [url] из другой сети (мобильная точка) — и пришлите результаты."
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
      "pt": "Obrigado. Por segurança, não clique nem baixe anexos. Encaminhe o e-mail suspeito ao canal de reporte e compartilhe assunto/remetente.", "ja": "ご連絡ありがとうございます。安全のため、リンクのクリックやダウンロードは行わないでください。不審なメールは報告用の窓口に転送し、件名と送信者をお知らせください。", "ru": "Спасибо. В целях безопасности ничего не нажимайте и не скачивайте. Перешлите подозрительное письмо в канал для сообщений и укажите тему и отправителя."
    },

    "Incidente": {
      "es": "Estoy iniciando el proceso de contención. Confirma si hay: acceso no autorizado, pérdida de datos o comportamiento inusual en [hostname].",
      "en": "I’m starting containment. Confirm if there’s unauthorized access, data loss, or unusual behavior on [hostname].",
      "pt": "Estou iniciando a contenção. Confirme: acesso não autorizado, perda de dados ou comportamento incomum no [hostname].", "ja": "封じ込めを開始します。[hostname] で不正アクセス、データの消失、通常と異なる挙動がないかご確認ください。", "ru": "Начинаю локализацию. Подтвердите, есть ли несанкционированный доступ, потеря данных или необычное поведение на [hostname]."
    }
  },

  "Consultoría": {
    "tags": ["Consulting"],
    "shortcuts": [
      { "label": "Quote Tool", "url": "https://quote.carino.systems" },
      { "label": "Kanban", "url": "https://kanban.carino.systems" },
      { "label": "Time Zones", "url": "https://time.carino.systems" },
      { "label": "Resume", "url": "https://vitae.carino.systems" }
    ],
    "flows": [
      { "id": "f_onboarding",
        "title": { "es": "Alta de Cliente", "en": "Client Onboarding", "pt": "Cadastro de Cliente", "ja": "クライアントの受け入れ", "ru": "Подключение клиента" },
        "tag": { "es": "Consultoría", "en": "Consulting", "pt": "Consultoria", "ja": "コンサルティング", "ru": "Консалтинг" },
        "steps": [
          { "text": {
            "es": "Primer contacto\n• Agenda una llamada breve\n• Identifica necesidad, urgencia y presupuesto\n• Registra los datos del cliente",
            "en": "First contact\n• Schedule a short call\n• Identify need, urgency and budget\n• Record the client's details",
            "pt": "Primeiro contato\n• Agende uma chamada breve\n• Identifique necessidade, urgência e orçamento\n• Registre os dados do cliente", "ja": "初回コンタクト\n• 短い通話を設定する\n• 要望・緊急度・予算を確認する\n• クライアントの情報を記録する", "ru": "Первый контакт\n• Назначьте короткий звонок\n• Определите потребность, срочность и бюджет\n• Запишите данные клиента" } },
          { "text": {
            "es": "Alcance y cotización\n• Define entregables y tiempos\n• Genera la cotización en https://quote.carino.systems\n• Envíala y resuelve dudas",
            "en": "Scope & quote\n• Define deliverables and timeline\n• Build the quote at https://quote.carino.systems\n• Send it and answer questions",
            "pt": "Escopo e orçamento\n• Defina entregáveis e prazos\n• Gere o orçamento em https://quote.carino.systems\n• Envie e esclareça dúvidas", "ja": "範囲と見積\n• 成果物とスケジュールを定義する\n• https://quote.carino.systems で見積を作成する\n• 送付して質問に回答する", "ru": "Объём и смета\n• Определите результаты и сроки\n• Составьте смету на https://quote.carino.systems\n• Отправьте её и ответьте на вопросы" } },
          { "text": {
            "es": "Acuerdo\n• Confirma el alcance por escrito\n• Acuerda forma de pago y anticipo\n• Fija la fecha de inicio",
            "en": "Agreement\n• Confirm scope in writing\n• Agree on payment terms and deposit\n• Set the start date",
            "pt": "Acordo\n• Confirme o escopo por escrito\n• Combine forma de pagamento e sinal\n• Defina a data de início", "ja": "合意\n• 範囲を書面で確認する\n• 支払条件と着手金を合意する\n• 開始日を決める", "ru": "Договорённость\n• Подтвердите объём письменно\n• Согласуйте условия оплаты и аванс\n• Назначьте дату старта" } },
          { "text": {
            "es": "Arranque\n• Solicita accesos y materiales\n• Crea repositorio y tablero de tareas\n• Define el canal de comunicación",
            "en": "Kickoff\n• Request access and materials\n• Create the repo and task board\n• Agree on a communication channel",
            "pt": "Início\n• Solicite acessos e materiais\n• Crie o repositório e o quadro de tarefas\n• Defina o canal de comunicação", "ja": "キックオフ\n• アクセス権と資料を依頼する\n• リポジトリとタスクボードを作成する\n• 連絡手段を決める", "ru": "Старт\n• Запросите доступы и материалы\n• Создайте репозиторий и доску задач\n• Согласуйте канал связи" } },
          { "text": {
            "es": "Entrega y cierre\n• Presenta el resultado\n• Entrega accesos y documentación\n• Acuerda el soporte posterior",
            "en": "Delivery & close\n• Present the result\n• Hand off access and documentation\n• Agree on post-delivery support",
            "pt": "Entrega e encerramento\n• Apresente o resultado\n• Entregue acessos e documentação\n• Combine o suporte posterior", "ja": "納品と完了\n• 成果を提示する\n• アクセス権とドキュメントを引き渡す\n• 納品後のサポートを合意する", "ru": "Сдача и закрытие\n• Представьте результат\n• Передайте доступы и документацию\n• Согласуйте поддержку после сдачи" } }
        ] }
    ],

    "Presentación": {
      "es": "Hola [requesterName], soy [myName], consultor independiente de TI y desarrollo. Gracias por contactarme — cuéntame brevemente qué necesitas y te propongo alcance, tiempos y costo.",
      "en": "Hi [requesterName], I'm [myName], an independent IT & software consultant. Thanks for reaching out — tell me briefly what you need and I'll propose scope, timeline and cost.",
      "pt": "Olá [requesterName], sou [myName], consultor independente de TI e desenvolvimento. Obrigado pelo contato — descreva brevemente o que precisa e eu proponho escopo, prazos e custo.", "ja": "[requesterName] 様、はじめまして。独立系のITおよびソフトウェアコンサルタントの [myName] です。ご連絡ありがとうございます。ご要望を簡単にお知らせいただければ、範囲・スケジュール・費用をご提案します。", "ru": "Здравствуйте, [requesterName]! Меня зовут [myName], я независимый консультант по ИТ и разработке. Спасибо за обращение — кратко опишите задачу, и я предложу объём, сроки и стоимость."
    },
    "Cotización": {
      "es": "Te comparto la cotización de [projectName]: [url]. Incluye alcance, entregables y condiciones. Cualquier ajuste lo revisamos sin compromiso.",
      "en": "Here is the quote for [projectName]: [url]. It covers scope, deliverables and terms. Happy to adjust anything.",
      "pt": "Segue o orçamento de [projectName]: [url]. Inclui escopo, entregáveis e condições. Qualquer ajuste, é só avisar.", "ja": "[projectName] のお見積はこちらです：[url]。範囲・成果物・条件を記載しています。ご要望に応じて調整いたします。", "ru": "Вот смета по проекту [projectName]: [url]. В ней объём, результаты и условия. Готов скорректировать что угодно."
    },
    "Agendar Llamada": {
      "es": "¿Te funciona una llamada de 30 minutos? Propón dos o tres horarios y confirmo el que mejor quede ([location]).",
      "en": "Would a 30-minute call work? Suggest two or three time slots and I'll confirm the best one ([location]).",
      "pt": "Uma chamada de 30 minutos funciona para você? Sugira dois ou três horários e eu confirmo o melhor ([location]).", "ja": "30分ほどの通話はいかがでしょうか。ご都合のよい時間帯を2〜3個お知らせいただければ、最適なものを確定します（[location]）。", "ru": "Удобен ли 30-минутный звонок? Предложите два-три варианта времени, и я подтвержу подходящий ([location])."
    },
    "Avance de Proyecto": {
      "es": "Avance de [projectName]: [summary]. Próximo hito: [dueDate]. Cualquier comentario es bienvenido.",
      "en": "Update on [projectName]: [summary]. Next milestone: [dueDate]. Feedback welcome.",
      "pt": "Andamento de [projectName]: [summary]. Próximo marco: [dueDate]. Comentários são bem-vindos.", "ja": "[projectName] の進捗：[summary]。次のマイルストーン：[dueDate]。ご意見をお待ちしています。", "ru": "Обновление по [projectName]: [summary]. Следующий этап: [dueDate]. Буду рад обратной связи."
    },
    "Recordatorio de Pago": {
      "es": "Recordatorio amistoso: la factura de [projectName] sigue pendiente. ¿Me confirmas la fecha estimada de pago? Gracias.",
      "en": "Friendly reminder: the invoice for [projectName] is still pending. Could you confirm the expected payment date? Thanks.",
      "pt": "Lembrete amigável: a fatura de [projectName] segue pendente. Pode confirmar a data prevista de pagamento? Obrigado.", "ja": "念のためのご連絡です。[projectName] の請求書がまだ未処理となっています。お支払い予定日をお知らせいただけますでしょうか。よろしくお願いします。", "ru": "Небольшое напоминание: счёт по проекту [projectName] ещё не оплачен. Подскажите, пожалуйста, ожидаемую дату оплаты. Спасибо!"
    },
    "Cierre de Proyecto": {
      "es": "[projectName] queda entregado. Incluye [summary]. Tienes 30 días de soporte para ajustes menores; después con gusto cotizo mejoras.",
      "en": "[projectName] is delivered. It includes [summary]. You have 30 days of support for minor fixes; after that I'm happy to quote improvements.",
      "pt": "[projectName] está entregue. Inclui [summary]. Você tem 30 dias de suporte para ajustes menores; depois disso, orço melhorias com prazer.", "ja": "[projectName] を納品しました。内容は [summary] です。軽微な修正については30日間のサポートが含まれます。それ以降の改善についても喜んでお見積りします。", "ru": "Проект [projectName] сдан. В него входит: [summary]. На мелкие правки действует поддержка 30 дней; после этого с радостью оценю доработки."
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
        "title": { "es": "Publicar Sitio Estático", "en": "Publish Static Site", "pt": "Publicar Site Estático", "ja": "静的サイトの公開", "ru": "Публикация статического сайта" },
        "tag": { "es": "Desarrollo", "en": "Development", "pt": "Desenvolvimento", "ja": "開発", "ru": "Разработка" },
        "steps": [
          { "text": {
            "es": "Preparar el repositorio\n• Sube el sitio estático a GitHub\n• index.html en la raíz\n• Verifica rutas relativas",
            "en": "Prepare the repository\n• Push the static site to GitHub\n• index.html at the root\n• Check relative paths",
            "pt": "Preparar o repositório\n• Envie o site estático ao GitHub\n• index.html na raiz\n• Verifique caminhos relativos", "ja": "リポジトリを準備する\n• 静的サイトをGitHubにプッシュする\n• index.html をルートに置く\n• 相対パスを確認する", "ru": "Подготовьте репозиторий\n• Загрузите статический сайт на GitHub\n• index.html в корне\n• Проверьте относительные пути" } },
          { "text": {
            "es": "Activar GitHub Pages\n• Settings → Pages\n• Fuente: rama main\n• Espera el primer despliegue",
            "en": "Enable GitHub Pages\n• Settings → Pages\n• Source: main branch\n• Wait for the first deploy",
            "pt": "Ativar o GitHub Pages\n• Settings → Pages\n• Origem: branch main\n• Aguarde o primeiro deploy", "ja": "GitHub Pages を有効にする\n• Settings → Pages\n• ソース：main ブランチ\n• 最初のデプロイを待つ", "ru": "Включите GitHub Pages\n• Settings → Pages\n• Источник: ветка main\n• Дождитесь первого развёртывания" } },
          { "text": {
            "es": "Dominio\n• Agrega el archivo CNAME\n• Apunta el DNS (CNAME a usuario.github.io)\n• Activa 'Enforce HTTPS'",
            "en": "Domain\n• Add the CNAME file\n• Point DNS (CNAME to user.github.io)\n• Enable 'Enforce HTTPS'",
            "pt": "Domínio\n• Adicione o arquivo CNAME\n• Aponte o DNS (CNAME para usuario.github.io)\n• Ative 'Enforce HTTPS'", "ja": "ドメイン\n• CNAME ファイルを追加する\n• DNS を設定する（CNAME を user.github.io へ）\n• 「Enforce HTTPS」を有効にする", "ru": "Домен\n• Добавьте файл CNAME\n• Настройте DNS (CNAME на user.github.io)\n• Включите «Enforce HTTPS»" } },
          { "text": {
            "es": "Verificar y entregar\n• Prueba el sitio en móvil y escritorio\n• Comparte la URL con el cliente\n• Documenta cómo actualizarlo",
            "en": "Verify & hand off\n• Test on mobile and desktop\n• Share the URL with the client\n• Document how to update it",
            "pt": "Verificar e entregar\n• Teste no celular e no desktop\n• Compartilhe a URL com o cliente\n• Documente como atualizar", "ja": "確認と引き渡し\n• スマートフォンとPCで確認する\n• URL をクライアントに共有する\n• 更新手順をドキュメント化する", "ru": "Проверьте и передайте\n• Протестируйте на телефоне и компьютере\n• Отправьте URL клиенту\n• Опишите, как обновлять сайт" } }
        ] }
    ],

    "Sitio Publicado": {
      "es": "Tu sitio ya está publicado en [url]. Revísalo y mándame tus comentarios. El DNS puede tardar hasta 24 h en propagarse por completo.",
      "en": "Your site is live at [url]. Take a look and send me your feedback. DNS can take up to 24 h to fully propagate.",
      "pt": "Seu site já está no ar em [url]. Dê uma olhada e me envie seus comentários. O DNS pode levar até 24 h para propagar totalmente.", "ja": "サイトを [url] で公開しました。ご確認のうえ、ご意見をお寄せください。DNS の反映には最大24時間かかる場合があります。", "ru": "Ваш сайт доступен по адресу [url]. Посмотрите и пришлите отзыв. Полное распространение DNS может занять до 24 часов."
    },
    "Solicitar Contenido": {
      "es": "Para avanzar con [projectName] necesito: logotipo en buena resolución, textos por sección y fotos que quieras usar. Con eso armo la primera versión.",
      "en": "To move forward with [projectName] I need: a high-resolution logo, the text for each section, and any photos you want to use. With that I'll build the first version.",
      "pt": "Para avançar com [projectName] preciso de: logotipo em boa resolução, textos por seção e fotos que queira usar. Com isso monto a primeira versão.", "ja": "[projectName] を進めるために、次をご用意ください：高解像度のロゴ、各セクションの文章、使用したい写真。これらが揃い次第、最初のバージョンを作成します。", "ru": "Чтобы продолжить работу над [projectName], нужны: логотип в высоком разрешении, тексты для каждого раздела и фотографии, которые хотите использовать. С этим я соберу первую версию."
    },
    "Entrega de Accesos": {
      "es": "Te entrego los accesos de [projectName] por un canal seguro (nunca por chat). Te recomiendo guardarlos en un gestor de contraseñas y cambiarlos tras la entrega.",
      "en": "I'll hand over the credentials for [projectName] through a secure channel (never chat). I recommend storing them in a password manager and rotating them after handoff.",
      "pt": "Entrego os acessos de [projectName] por um canal seguro (nunca por chat). Recomendo guardá-los em um gerenciador de senhas e trocá-los após a entrega.", "ja": "[projectName] の認証情報は安全な経路でお渡しします（チャットは使用しません）。パスワードマネージャーでの保管と、引き渡し後の変更をおすすめします。", "ru": "Учётные данные для [projectName] передам по защищённому каналу (не через чат). Рекомендую хранить их в менеджере паролей и сменить после передачи."
    },
    "Mantenimiento": {
      "es": "Si quieres, puedo encargarme del mantenimiento de [projectName]: actualizaciones, respaldos y pequeños cambios. Te paso una propuesta mensual.",
      "en": "If you'd like, I can handle maintenance for [projectName]: updates, backups and small changes. I'll send a monthly proposal.",
      "pt": "Se quiser, posso cuidar da manutenção de [projectName]: atualizações, backups e pequenas mudanças. Envio uma proposta mensal.", "ja": "ご希望であれば、[projectName] の保守（更新・バックアップ・軽微な変更）を承ります。月額のご提案をお送りします。", "ru": "При желании я могу взять на себя обслуживание [projectName]: обновления, резервные копии и небольшие правки. Пришлю предложение с помесячной оплатой."
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
        "title": { "es": "Instalar Carino PACS", "en": "Install Carino PACS", "pt": "Instalar o Carino PACS", "ja": "Carino PACS の導入", "ru": "Установка Carino PACS" },
        "tag": { "es": "PACS", "en": "PACS", "pt": "PACS", "ja": "PACS", "ru": "PACS" },
        "steps": [
          { "text": {
            "es": "Descargar Carino PACS\n• Entra a https://pacs.carino.systems\n• Descarga la versión para tu sistema\n• Instala o descomprime",
            "en": "Download Carino PACS\n• Go to https://pacs.carino.systems\n• Download the build for your OS\n• Install or unzip",
            "pt": "Baixar o Carino PACS\n• Acesse https://pacs.carino.systems\n• Baixe a versão para seu sistema\n• Instale ou descompacte", "ja": "Carino PACS をダウンロードする\n• https://pacs.carino.systems を開く\n• お使いのOS向けのビルドをダウンロードする\n• インストールまたは解凍する", "ru": "Скачайте Carino PACS\n• Откройте https://pacs.carino.systems\n• Скачайте сборку для вашей ОС\n• Установите или распакуйте" } },
          { "text": {
            "es": "Configurar el nodo\n• Edita config.json\n• Define AE Title, puerto (104/11112) y carpeta de almacenamiento\n• Inicia el servicio",
            "en": "Configure the node\n• Edit config.json\n• Set AE Title, port (104/11112) and storage folder\n• Start the service",
            "pt": "Configurar o nó\n• Edite o config.json\n• Defina AE Title, porta (104/11112) e pasta de armazenamento\n• Inicie o serviço", "ja": "ノードを設定する\n• config.json を編集する\n• AE Title、ポート（104／11112）、保存先フォルダーを設定する\n• サービスを開始する", "ru": "Настройте узел\n• Отредактируйте config.json\n• Задайте AE Title, порт (104/11112) и папку хранения\n• Запустите службу" } },
          { "text": {
            "es": "Registrar la modalidad\n• Solicita AE Title, IP y puerto del equipo\n• Dalo de alta como origen/destino\n• Abre el puerto en el firewall",
            "en": "Register the modality\n• Ask for the device's AE Title, IP and port\n• Add it as a source/destination\n• Open the firewall port",
            "pt": "Registrar a modalidade\n• Solicite AE Title, IP e porta do equipamento\n• Cadastre como origem/destino\n• Libere a porta no firewall", "ja": "モダリティを登録する\n• 機器の AE Title、IP、ポートを確認する\n• 送信元／送信先として追加する\n• ファイアウォールのポートを開放する", "ru": "Зарегистрируйте модальность\n• Узнайте AE Title, IP и порт устройства\n• Добавьте его как источник/приёмник\n• Откройте порт в межсетевом экране" } },
          { "text": {
            "es": "Probar el envío\n• Envía un estudio de prueba (C-STORE)\n• Confirma la recepción en el panel\n• Verifica el reenvío si aplica",
            "en": "Test the transfer\n• Send a test study (C-STORE)\n• Confirm reception in the dashboard\n• Verify forwarding if configured",
            "pt": "Testar o envio\n• Envie um estudo de teste (C-STORE)\n• Confirme a recepção no painel\n• Verifique o encaminhamento, se houver", "ja": "転送をテストする\n• テスト用の検査を送信する（C-STORE）\n• ダッシュボードで受信を確認する\n• 転送設定がある場合は動作を確認する", "ru": "Проверьте передачу\n• Отправьте тестовое исследование (C-STORE)\n• Подтвердите приём в панели\n• Проверьте пересылку, если она настроена" } }
        ] },
      { "id": "f_dicom_anon",
        "title": { "es": "Anonimizar Estudio DICOM", "en": "Anonymize DICOM Study", "pt": "Anonimizar Estudo DICOM", "ja": "DICOM検査の匿名化", "ru": "Анонимизация DICOM-исследования" },
        "tag": { "es": "DICOM", "en": "DICOM", "pt": "DICOM", "ja": "DICOM", "ru": "DICOM" },
        "steps": [
          { "text": {
            "es": "Abrir el editor\n• Entra a https://dicom.carino.systems\n• Todo se procesa en tu navegador\n• Carga el archivo DICOM",
            "en": "Open the editor\n• Go to https://dicom.carino.systems\n• Everything runs in your browser\n• Load the DICOM file",
            "pt": "Abrir o editor\n• Acesse https://dicom.carino.systems\n• Tudo é processado no navegador\n• Carregue o arquivo DICOM", "ja": "エディターを開く\n• https://dicom.carino.systems を開く\n• すべてブラウザー内で処理されます\n• DICOM ファイルを読み込む", "ru": "Откройте редактор\n• Перейдите на https://dicom.carino.systems\n• Всё выполняется в вашем браузере\n• Загрузите DICOM-файл" } },
          { "text": {
            "es": "Anonimizar\n• Usa la función 'Anonymize'\n• Revisa nombre, ID y fechas del paciente\n• Ajusta etiquetas manualmente si hace falta",
            "en": "Anonymize\n• Use the 'Anonymize' function\n• Review patient name, ID and dates\n• Adjust tags manually if needed",
            "pt": "Anonimizar\n• Use a função 'Anonymize'\n• Revise nome, ID e datas do paciente\n• Ajuste as tags manualmente se necessário", "ja": "匿名化する\n• 「Anonymize」機能を使う\n• 患者名・ID・日付を確認する\n• 必要に応じてタグを手動で調整する", "ru": "Анонимизируйте\n• Используйте функцию «Anonymize»\n• Проверьте имя пациента, ID и даты\n• При необходимости поправьте теги вручную" } },
          { "text": {
            "es": "Verificar\n• Confirma que no queden datos personales\n• Revisa etiquetas privadas del fabricante",
            "en": "Verify\n• Confirm no personal data remains\n• Check vendor private tags",
            "pt": "Verificar\n• Confirme que não restam dados pessoais\n• Revise tags privadas do fabricante", "ja": "確認する\n• 個人情報が残っていないことを確認する\n• ベンダー独自のプライベートタグを確認する", "ru": "Проверьте\n• Убедитесь, что личных данных не осталось\n• Проверьте приватные теги производителя" } },
          { "text": {
            "es": "Exportar y compartir\n• Descarga el archivo anonimizado\n• Compártelo por un canal seguro",
            "en": "Export & share\n• Download the anonymized file\n• Share it over a secure channel",
            "pt": "Exportar e compartilhar\n• Baixe o arquivo anonimizado\n• Compartilhe por um canal seguro", "ja": "書き出して共有する\n• 匿名化したファイルをダウンロードする\n• 安全な経路で共有する", "ru": "Экспортируйте и передайте\n• Скачайте анонимизированный файл\n• Передайте его по защищённому каналу" } }
        ] }
    ],

    "Datos DICOM": {
      "es": "Para conectar tu equipo al PACS necesito: AE Title, dirección IP, puerto (104 u 11112) y si el equipo envía, consulta o imprime (C-STORE / C-FIND / print). ¿Me los compartes?",
      "en": "To connect your device to the PACS I need: AE Title, IP address, port (104 or 11112), and whether it sends, queries or prints (C-STORE / C-FIND / print). Could you share those?",
      "pt": "Para conectar seu equipamento ao PACS preciso de: AE Title, endereço IP, porta (104 ou 11112) e se o equipamento envia, consulta ou imprime (C-STORE / C-FIND / print). Pode me passar?", "ja": "機器を PACS に接続するために、次をお知らせください：AE Title、IPアドレス、ポート（104 または 11112）、および送信・照会・印刷のいずれを行うか（C-STORE／C-FIND／print）。", "ru": "Чтобы подключить ваше устройство к PACS, нужны: AE Title, IP-адрес, порт (104 или 11112) и режим работы — отправка, запрос или печать (C-STORE / C-FIND / print). Пришлёте эти данные?"
    },
    "Prueba de Envío": {
      "es": "Ya quedó configurado el nodo [hostname]. ¿Puedes enviar un estudio de prueba? Te confirmo en cuanto lo reciba el PACS.",
      "en": "The node [hostname] is configured. Can you send a test study? I'll confirm as soon as it lands in the PACS.",
      "pt": "O nó [hostname] está configurado. Pode enviar um estudo de teste? Confirmo assim que chegar ao PACS.", "ja": "ノード [hostname] の設定が完了しました。テスト用の検査を送信していただけますか。PACS に届き次第ご連絡します。", "ru": "Узел [hostname] настроен. Можете отправить тестовое исследование? Подтвержу, как только оно поступит в PACS."
    },
    "Nota de Anonimización": {
      "es": "Antes de compartir estudios fuera de la clínica hay que anonimizarlos (nombre, ID y fechas del paciente). Puedo hacerlo con una herramienta local que no sube nada a internet.",
      "en": "Before sharing studies outside the clinic they must be anonymized (patient name, ID and dates). I can do it with a local tool that never uploads anything.",
      "pt": "Antes de compartilhar estudos fora da clínica é preciso anonimizá-los (nome, ID e datas do paciente). Posso fazer isso com uma ferramenta local que não envia nada à internet.", "ja": "検査を院外に共有する前に、匿名化（患者名・ID・日付）が必要です。データを一切アップロードしないローカルツールで対応できます。", "ru": "Перед передачей исследований за пределы клиники их нужно анонимизировать (имя пациента, ID и даты). Могу сделать это локальным инструментом, который ничего никуда не загружает."
    }
  },

  "Herramientas Carino": {
    "tags": ["IT", "Admin"],
    "shortcuts": [
      { "label": "Netplan Config", "url": "https://netplan.carino.systems" },
      { "label": "Net Topology", "url": "https://topo.carino.systems" },
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
      "title": { "es": "Sesión Remota con RustDesk", "en": "RustDesk Remote Session", "pt": "Sessão Remota com RustDesk", "ja": "RustDesk リモートセッション", "ru": "Удалённый сеанс RustDesk" },
      "tag": { "es": "Soporte Remoto", "en": "Remote Support", "pt": "Suporte Remoto", "ja": "リモートサポート", "ru": "Удалённая поддержка" },
      "steps": [
        { "text": {
          "es": "Descargar RustDesk\n• Entra a https://rustdesk.com\n• Haz clic en 'Download'\n• Elige tu sistema operativo",
          "en": "Download RustDesk\n• Go to https://rustdesk.com\n• Click 'Download'\n• Choose your operating system",
          "pt": "Baixar o RustDesk\n• Acesse https://rustdesk.com\n• Clique em 'Download'\n• Escolha seu sistema operacional", "ja": "RustDesk をダウンロードする\n• https://rustdesk.com を開く\n• 「Download」をクリックする\n• お使いのOSを選ぶ", "ru": "Скачайте RustDesk\n• Откройте https://rustdesk.com\n• Нажмите «Download»\n• Выберите свою операционную систему" } },
        { "text": {
          "es": "Instalar RustDesk\n• Abre el archivo descargado\n• Acepta el acuerdo de licencia\n• Completa la instalación",
          "en": "Install RustDesk\n• Open the downloaded file\n• Accept the license agreement\n• Complete the installation",
          "pt": "Instalar o RustDesk\n• Abra o arquivo baixado\n• Aceite o contrato de licença\n• Conclua a instalação", "ja": "RustDesk をインストールする\n• ダウンロードしたファイルを開く\n• ライセンス条項に同意する\n• インストールを完了する", "ru": "Установите RustDesk\n• Откройте скачанный файл\n• Примите лицензионное соглашение\n• Завершите установку" } },
        { "text": {
          "es": "Compartir el ID de conexión\n• Abre RustDesk\n• Copia el ID que aparece a la izquierda\n• Envía el ID a tu técnico",
          "en": "Share Connection ID\n• Open RustDesk\n• Copy the ID shown on the left\n• Send the ID to your technician",
          "pt": "Compartilhar o ID de conexão\n• Abra o RustDesk\n• Copie o ID exibido à esquerda\n• Envie o ID ao seu técnico", "ja": "接続IDを共有する\n• RustDesk を開く\n• 左側に表示されるIDをコピーする\n• 担当者にIDを送る", "ru": "Передайте ID подключения\n• Откройте RustDesk\n• Скопируйте ID слева\n• Отправьте ID специалисту" } },
        { "text": {
          "es": "Aprobar la conexión\n• Espera la solicitud de conexión\n• Haz clic en 'Aceptar'\n• No cierres RustDesk durante la sesión",
          "en": "Approve Connection\n• Wait for the connection request\n• Click 'Accept'\n• Do not close RustDesk during the session",
          "pt": "Aprovar a conexão\n• Aguarde a solicitação de conexão\n• Clique em 'Aceitar'\n• Não feche o RustDesk durante a sessão", "ja": "接続を承認する\n• 接続リクエストを待つ\n• 「Accept」をクリックする\n• セッション中は RustDesk を閉じない", "ru": "Подтвердите подключение\n• Дождитесь запроса на подключение\n• Нажмите «Accept»\n• Не закрывайте RustDesk во время сеанса" } }
      ] },
    { "id": "b_anydesk",
      "title": { "es": "Sesión Remota con AnyDesk", "en": "AnyDesk Remote Session", "pt": "Sessão Remota com AnyDesk", "ja": "AnyDesk リモートセッション", "ru": "Удалённый сеанс AnyDesk" },
      "tag": { "es": "Soporte Remoto", "en": "Remote Support", "pt": "Suporte Remoto", "ja": "リモートサポート", "ru": "Удалённая поддержка" },
      "steps": [
        { "text": {
          "es": "Descargar AnyDesk\n• Entra a https://anydesk.com\n• Haz clic en 'Download Now'",
          "en": "Download AnyDesk\n• Go to https://anydesk.com\n• Click 'Download Now'",
          "pt": "Baixar o AnyDesk\n• Acesse https://anydesk.com\n• Clique em 'Download Now'", "ja": "AnyDesk をダウンロードする\n• https://anydesk.com を開く\n• 「Download Now」をクリックする", "ru": "Скачайте AnyDesk\n• Откройте https://anydesk.com\n• Нажмите «Download Now»" } },
        { "text": {
          "es": "Ejecutar AnyDesk\n• Abre el archivo descargado\n• No requiere instalación (opcional)",
          "en": "Run AnyDesk\n• Open the downloaded file\n• No installation required (optional)",
          "pt": "Executar o AnyDesk\n• Abra o arquivo baixado\n• Não requer instalação (opcional)", "ja": "AnyDesk を実行する\n• ダウンロードしたファイルを開く\n• インストールは不要です（任意）", "ru": "Запустите AnyDesk\n• Откройте скачанный файл\n• Установка не требуется (по желанию)" } },
        { "text": {
          "es": "Compartir la dirección\n• Copia la dirección de 'Este puesto'\n• Envíala a soporte de TI",
          "en": "Share Address\n• Copy 'This Desk' address\n• Send it to IT support",
          "pt": "Compartilhar o endereço\n• Copie o endereço de 'Esta mesa'\n• Envie ao suporte de TI", "ja": "アドレスを共有する\n• 「This Desk」のアドレスをコピーする\n• ITサポートに送る", "ru": "Передайте адрес\n• Скопируйте адрес из «This Desk»\n• Отправьте его в ИТ-поддержку" } }
      ] },
    { "id": "b_chrome_cache",
      "title": { "es": "Borrar Caché de Chrome", "en": "Clear Chrome Cache", "pt": "Limpar Cache do Chrome", "ja": "Chrome のキャッシュを消去", "ru": "Очистка кэша Chrome" },
      "tag": { "es": "Navegador", "en": "Browser", "pt": "Navegador", "ja": "ブラウザー", "ru": "Браузер" },
      "steps": [
        { "text": {
          "es": "Abrir la configuración de Chrome\n• Haz clic en los 3 puntos (arriba a la derecha)\n• Selecciona 'Configuración'",
          "en": "Open Chrome Settings\n• Click the 3 dots (top right)\n• Select 'Settings'",
          "pt": "Abrir as configurações do Chrome\n• Clique nos 3 pontos (canto superior direito)\n• Selecione 'Configurações'", "ja": "Chrome の設定を開く\n• 右上の3点アイコンをクリックする\n• 「設定」を選ぶ", "ru": "Откройте настройки Chrome\n• Нажмите на три точки (справа вверху)\n• Выберите «Настройки»" } },
        { "text": {
          "es": "Abrir borrar datos de navegación\n• Ve a 'Privacidad y seguridad'\n• Haz clic en 'Eliminar datos de navegación'",
          "en": "Open Clear Browsing Data\n• Go to 'Privacy and security'\n• Click 'Delete browsing data'",
          "pt": "Abrir limpar dados de navegação\n• Vá em 'Privacidade e segurança'\n• Clique em 'Excluir dados de navegação'", "ja": "閲覧データの削除を開く\n• 「プライバシーとセキュリティ」を開く\n• 「閲覧データを削除」をクリックする", "ru": "Откройте удаление данных\n• Перейдите в «Конфиденциальность и безопасность»\n• Нажмите «Удалить данные о просмотре»" } },
        { "text": {
          "es": "Borrar caché\n• Intervalo de tiempo: Todos los períodos\n• Marca 'Imágenes y archivos almacenados en caché'\n• Haz clic en 'Eliminar datos'",
          "en": "Clear Cache\n• Time range: All time\n• Check 'Cached images and files'\n• Click 'Delete data'",
          "pt": "Limpar cache\n• Período: Todo o período\n• Marque 'Imagens e arquivos armazenados em cache'\n• Clique em 'Excluir dados'", "ja": "キャッシュを消去する\n• 期間：全期間\n• 「キャッシュされた画像とファイル」にチェックを入れる\n• 「データを削除」をクリックする", "ru": "Очистите кэш\n• Период: всё время\n• Отметьте «Изображения и файлы в кэше»\n• Нажмите «Удалить данные»" } }
      ] },
    { "id": "b_firefox_cache",
      "title": { "es": "Borrar Caché de Firefox", "en": "Clear Firefox Cache", "pt": "Limpar Cache do Firefox", "ja": "Firefox のキャッシュを消去", "ru": "Очистка кэша Firefox" },
      "tag": { "es": "Navegador", "en": "Browser", "pt": "Navegador", "ja": "ブラウザー", "ru": "Браузер" },
      "steps": [
        { "text": {
          "es": "Abrir la configuración de Firefox\n• Haz clic en las 3 líneas (arriba a la derecha)\n• Selecciona 'Ajustes'",
          "en": "Open Firefox Settings\n• Click the 3 lines (top right)\n• Select 'Settings'",
          "pt": "Abrir as configurações do Firefox\n• Clique nas 3 linhas (canto superior direito)\n• Selecione 'Configurações'", "ja": "Firefox の設定を開く\n• 右上の3本線をクリックする\n• 「設定」を選ぶ", "ru": "Откройте настройки Firefox\n• Нажмите на три полоски (справа вверху)\n• Выберите «Настройки»" } },
        { "text": {
          "es": "Limpiar datos\n• Ve a 'Privacidad y seguridad'\n• Haz clic en 'Limpiar datos'",
          "en": "Clear Data\n• Go to 'Privacy & Security'\n• Click 'Clear Data'",
          "pt": "Limpar dados\n• Vá em 'Privacidade e Segurança'\n• Clique em 'Limpar dados'", "ja": "データを消去する\n• 「プライバシーとセキュリティ」を開く\n• 「データを消去」をクリックする", "ru": "Очистите данные\n• Перейдите в «Приватность и защита»\n• Нажмите «Удалить данные»" } },
        { "text": {
          "es": "Confirmar\n• Marca 'Contenido web en caché'\n• Haz clic en 'Limpiar'",
          "en": "Confirm\n• Check 'Cached Web Content'\n• Click 'Clear'",
          "pt": "Confirmar\n• Marque 'Conteúdo web em cache'\n• Clique em 'Limpar'", "ja": "確定する\n• 「ウェブコンテンツのキャッシュ」にチェックを入れる\n• 「消去」をクリックする", "ru": "Подтвердите\n• Отметьте «Кэшированное веб-содержимое»\n• Нажмите «Удалить»" } }
      ] },
    { "id": "b_restart_router",
      "title": { "es": "Reiniciar el Router", "en": "Restart Router", "pt": "Reiniciar o Roteador", "ja": "ルーターの再起動", "ru": "Перезагрузка роутера" },
      "tag": { "es": "Red", "en": "Network", "pt": "Rede", "ja": "ネットワーク", "ru": "Сеть" },
      "steps": [
        { "text": {
          "es": "Localizar el router\n• Encuentra el módem/router\n• Verifica que esté encendido",
          "en": "Locate Router\n• Find the modem/router device\n• Ensure it is powered on",
          "pt": "Localizar o roteador\n• Encontre o modem/roteador\n• Verifique se está ligado", "ja": "ルーターを確認する\n• モデム／ルーター本体を探す\n• 電源が入っていることを確認する", "ru": "Найдите роутер\n• Найдите модем или роутер\n• Убедитесь, что он включён" } },
        { "text": {
          "es": "Apagar y encender\n• Desconecta el cable de corriente\n• Espera 30 segundos\n• Vuelve a conectarlo",
          "en": "Power Cycle\n• Unplug the power cable\n• Wait 30 seconds\n• Plug the power back in",
          "pt": "Desligar e ligar\n• Desconecte o cabo de energia\n• Aguarde 30 segundos\n• Conecte novamente", "ja": "電源を入れ直す\n• 電源ケーブルを抜く\n• 30秒待つ\n• 電源ケーブルを差し直す", "ru": "Выключите и включите\n• Отсоедините кабель питания\n• Подождите 30 секунд\n• Подключите питание обратно" } },
        { "text": {
          "es": "Esperar la conexión\n• Espera 2–3 minutos\n• Vuelve a comprobar la conexión a internet",
          "en": "Wait for Connection\n• Wait 2–3 minutes\n• Check internet connection again",
          "pt": "Aguardar a conexão\n• Aguarde 2–3 minutos\n• Verifique a conexão com a internet novamente", "ja": "接続を待つ\n• 2〜3分待つ\n• インターネット接続を再度確認する", "ru": "Дождитесь соединения\n• Подождите 2–3 минуты\n• Снова проверьте подключение к интернету" } }
      ] },
    { "id": "b_flush_dns_windows",
      "title": { "es": "Vaciar DNS (Windows)", "en": "Flush DNS (Windows)", "pt": "Limpar DNS (Windows)", "ja": "DNSキャッシュの消去（Windows）", "ru": "Сброс DNS (Windows)" },
      "tag": { "es": "Red", "en": "Network", "pt": "Rede", "ja": "ネットワーク", "ru": "Сеть" },
      "steps": [
        { "text": {
          "es": "Abrir el símbolo del sistema\n• Presiona Windows + R\n• Escribe cmd\n• Presiona Enter",
          "en": "Open Command Prompt\n• Press Windows + R\n• Type cmd\n• Press Enter",
          "pt": "Abrir o prompt de comando\n• Pressione Windows + R\n• Digite cmd\n• Pressione Enter", "ja": "コマンドプロンプトを開く\n• Windows + R を押す\n• cmd と入力する\n• Enter を押す", "ru": "Откройте командную строку\n• Нажмите Windows + R\n• Введите cmd\n• Нажмите Enter" } },
        { "text": {
          "es": "Vaciar la caché DNS\n• Escribe: ipconfig /flushdns\n• Presiona Enter\n• Espera el mensaje de confirmación",
          "en": "Flush DNS Cache\n• Type: ipconfig /flushdns\n• Press Enter\n• Wait for confirmation message",
          "pt": "Limpar o cache DNS\n• Digite: ipconfig /flushdns\n• Pressione Enter\n• Aguarde a mensagem de confirmação", "ja": "DNSキャッシュを消去する\n• ipconfig /flushdns と入力する\n• Enter を押す\n• 完了メッセージを待つ", "ru": "Сбросьте кэш DNS\n• Введите: ipconfig /flushdns\n• Нажмите Enter\n• Дождитесь сообщения о выполнении" } }
      ] },
    { "id": "b_windows_update",
      "title": { "es": "Actualizar Windows", "en": "Windows Update", "pt": "Atualizar o Windows", "ja": "Windows Update", "ru": "Обновление Windows" },
      "tag": { "es": "Sistema Operativo", "en": "OS", "pt": "Sistema Operacional", "ja": "OS", "ru": "ОС" },
      "steps": [
        { "text": {
          "es": "Abrir Windows Update\n• Haz clic en Inicio\n• Ve a Configuración → Windows Update",
          "en": "Open Windows Update\n• Click Start\n• Go to Settings → Windows Update",
          "pt": "Abrir o Windows Update\n• Clique em Iniciar\n• Vá em Configurações → Windows Update", "ja": "Windows Update を開く\n• スタートをクリックする\n• 設定 → Windows Update を開く", "ru": "Откройте Центр обновления Windows\n• Нажмите «Пуск»\n• Перейдите в Параметры → Центр обновления Windows" } },
        { "text": {
          "es": "Buscar actualizaciones\n• Haz clic en 'Buscar actualizaciones'\n• Espera a que termine la búsqueda",
          "en": "Check for Updates\n• Click 'Check for updates'\n• Wait for scan to complete",
          "pt": "Verificar atualizações\n• Clique em 'Verificar se há atualizações'\n• Aguarde a verificação terminar", "ja": "更新を確認する\n• 「更新プログラムのチェック」をクリックする\n• スキャンの完了を待つ", "ru": "Проверьте обновления\n• Нажмите «Проверить наличие обновлений»\n• Дождитесь завершения проверки" } },
        { "text": {
          "es": "Instalar y reiniciar\n• Instala las actualizaciones disponibles\n• Reinicia si se solicita",
          "en": "Install & Restart\n• Install available updates\n• Restart if prompted",
          "pt": "Instalar e reiniciar\n• Instale as atualizações disponíveis\n• Reinicie se solicitado", "ja": "インストールして再起動する\n• 利用可能な更新をインストールする\n• 求められたら再起動する", "ru": "Установите и перезагрузите\n• Установите доступные обновления\n• Перезагрузите, если потребуется" } }
      ] },
    { "id": "b_macos_update",
      "title": { "es": "Actualizar macOS", "en": "macOS Update", "pt": "Atualizar o macOS", "ja": "macOS のアップデート", "ru": "Обновление macOS" },
      "tag": { "es": "Sistema Operativo", "en": "OS", "pt": "Sistema Operacional", "ja": "OS", "ru": "ОС" },
      "steps": [
        { "text": {
          "es": "Abrir ajustes del sistema\n• Haz clic en el menú Apple\n• Abre 'Ajustes del Sistema'",
          "en": "Open System Settings\n• Click Apple menu\n• Open 'System Settings'",
          "pt": "Abrir os ajustes do sistema\n• Clique no menu Apple\n• Abra 'Ajustes do Sistema'", "ja": "システム設定を開く\n• Apple メニューをクリックする\n• 「システム設定」を開く", "ru": "Откройте системные настройки\n• Нажмите меню Apple\n• Откройте «Системные настройки»" } },
        { "text": {
          "es": "Actualización de software\n• Ve a 'General'\n• Haz clic en 'Actualización de software'",
          "en": "Software Update\n• Go to 'General'\n• Click 'Software Update'",
          "pt": "Atualização de software\n• Vá em 'Geral'\n• Clique em 'Atualização de Software'", "ja": "ソフトウェアアップデート\n• 「一般」を開く\n• 「ソフトウェアアップデート」をクリックする", "ru": "Обновление ПО\n• Перейдите в «Основные»\n• Нажмите «Обновление ПО»" } },
        { "text": {
          "es": "Instalar actualizaciones\n• Haz clic en 'Actualizar ahora'\n• Reinicia si es necesario",
          "en": "Install Updates\n• Click 'Update Now'\n• Restart if required",
          "pt": "Instalar atualizações\n• Clique em 'Atualizar Agora'\n• Reinicie se necessário", "ja": "アップデートをインストールする\n• 「今すぐアップデート」をクリックする\n• 必要に応じて再起動する", "ru": "Установите обновления\n• Нажмите «Обновить сейчас»\n• Перезагрузите при необходимости" } }
      ] },
    { "id": "b_password_reset",
      "title": { "es": "Restablecer Contraseña", "en": "Password Reset", "pt": "Redefinir Senha", "ja": "パスワードの再設定", "ru": "Сброс пароля" },
      "tag": { "es": "Seguridad", "en": "Security", "pt": "Segurança", "ja": "セキュリティ", "ru": "Безопасность" },
      "steps": [
        { "text": {
          "es": "Abrir la página de restablecimiento\n• Entra al portal de contraseñas de la empresa\n• Haz clic en 'Olvidé mi contraseña'",
          "en": "Open Password Reset Page\n• Go to the company password portal\n• Click 'Forgot password'",
          "pt": "Abrir a página de redefinição\n• Acesse o portal de senhas da empresa\n• Clique em 'Esqueci minha senha'", "ja": "パスワード再設定ページを開く\n• 社内のパスワードポータルを開く\n• 「パスワードをお忘れですか」をクリックする", "ru": "Откройте страницу сброса пароля\n• Перейдите на корпоративный портал паролей\n• Нажмите «Забыли пароль»" } },
        { "text": {
          "es": "Verificar identidad\n• Ingresa tu correo o usuario\n• Completa los pasos de verificación",
          "en": "Verify Identity\n• Enter your email or username\n• Complete verification steps",
          "pt": "Verificar identidade\n• Informe seu e-mail ou usuário\n• Conclua as etapas de verificação", "ja": "本人確認を行う\n• メールアドレスまたはユーザー名を入力する\n• 確認手順を完了する", "ru": "Подтвердите личность\n• Введите email или имя пользователя\n• Выполните шаги проверки" } },
        { "text": {
          "es": "Crear nueva contraseña\n• Elige una contraseña segura\n• Confirma la nueva contraseña\n• Guarda los cambios",
          "en": "Create New Password\n• Choose a strong password\n• Confirm the new password\n• Save changes",
          "pt": "Criar nova senha\n• Escolha uma senha forte\n• Confirme a nova senha\n• Salve as alterações", "ja": "新しいパスワードを作成する\n• 強力なパスワードを選ぶ\n• 新しいパスワードを再入力する\n• 変更を保存する", "ru": "Создайте новый пароль\n• Выберите надёжный пароль\n• Подтвердите новый пароль\n• Сохраните изменения" } }
      ] },
    { "id": "b_mfa_setup",
      "title": { "es": "Configurar MFA", "en": "MFA Setup", "pt": "Configurar MFA", "ja": "多要素認証の設定", "ru": "Настройка МФА" },
      "tag": { "es": "Seguridad", "en": "Security", "pt": "Segurança", "ja": "セキュリティ", "ru": "Безопасность" },
      "steps": [
        { "text": {
          "es": "Instalar la app de autenticación\n• Abre App Store o Play Store\n• Instala Microsoft Authenticator o Google Authenticator",
          "en": "Install Authenticator App\n• Open App Store or Play Store\n• Install Microsoft Authenticator or Google Authenticator",
          "pt": "Instalar o app autenticador\n• Abra a App Store ou Play Store\n• Instale o Microsoft Authenticator ou Google Authenticator", "ja": "認証アプリをインストールする\n• App Store または Play ストアを開く\n• Microsoft Authenticator または Google Authenticator をインストールする", "ru": "Установите приложение-аутентификатор\n• Откройте App Store или Play Store\n• Установите Microsoft Authenticator или Google Authenticator" } },
        { "text": {
          "es": "Escanear el código QR\n• Abre la app de autenticación\n• Escanea el código QR proporcionado por TI",
          "en": "Scan QR Code\n• Open the authenticator app\n• Scan the QR code provided by IT",
          "pt": "Escanear o código QR\n• Abra o app autenticador\n• Escaneie o código QR fornecido pela TI", "ja": "QRコードを読み取る\n• 認証アプリを開く\n• IT部門から提供されたQRコードを読み取る", "ru": "Отсканируйте QR-код\n• Откройте приложение-аутентификатор\n• Отсканируйте QR-код, выданный ИТ-отделом" } },
        { "text": {
          "es": "Verificar MFA\n• Ingresa el código de 6 dígitos\n• Confirma la configuración",
          "en": "Verify MFA\n• Enter the 6-digit code\n• Confirm setup",
          "pt": "Verificar o MFA\n• Digite o código de 6 dígitos\n• Confirme a configuração", "ja": "多要素認証を確認する\n• 6桁のコードを入力する\n• 設定を確定する", "ru": "Проверьте МФА\n• Введите 6-значный код\n• Подтвердите настройку" } }
      ] },
    { "id": "b_basic_it_review",
      "title": { "es": "Revisión Básica de TI", "en": "Basic IT Review", "pt": "Revisão Básica de TI", "ja": "基本のIT点検", "ru": "Базовая ИТ-проверка" },
      "tag": { "es": "Diagnóstico", "en": "Diagnostics", "pt": "Diagnóstico", "ja": "診断", "ru": "Диагностика" },
      "steps": [
        { "text": {
          "es": "Revisar el estado del equipo\n• Confirma que el equipo enciende\n• Busca mensajes de error",
          "en": "Check System Status\n• Confirm device powers on\n• Check for error messages",
          "pt": "Verificar o estado do equipamento\n• Confirme que o dispositivo liga\n• Verifique mensagens de erro", "ja": "システムの状態を確認する\n• 機器の電源が入るか確認する\n• エラーメッセージの有無を確認する", "ru": "Проверьте состояние системы\n• Убедитесь, что устройство включается\n• Проверьте наличие сообщений об ошибках" } },
        { "text": {
          "es": "Revisar la conectividad\n• Verifica la conexión Wi-Fi o Ethernet\n• Prueba el acceso a sistemas internos",
          "en": "Check Connectivity\n• Verify Wi-Fi or Ethernet connection\n• Test access to internal systems",
          "pt": "Verificar a conectividade\n• Verifique a conexão Wi-Fi ou Ethernet\n• Teste o acesso aos sistemas internos", "ja": "接続を確認する\n• Wi-Fi または有線の接続を確認する\n• 社内システムへのアクセスを試す", "ru": "Проверьте подключение\n• Проверьте Wi-Fi или проводное соединение\n• Проверьте доступ к внутренним системам" } },
        { "text": {
          "es": "Revisar actualizaciones\n• Verifica que el SO esté actualizado\n• Revisa las versiones de las aplicaciones",
          "en": "Check Updates\n• Verify OS is up to date\n• Check application versions",
          "pt": "Verificar atualizações\n• Verifique se o SO está atualizado\n• Verifique as versões dos aplicativos", "ja": "更新を確認する\n• OSが最新か確認する\n• アプリケーションのバージョンを確認する", "ru": "Проверьте обновления\n• Убедитесь, что ОС обновлена\n• Проверьте версии приложений" } },
        { "text": {
          "es": "Recopilar información\n• Anota los mensajes de error\n• Toma capturas de pantalla si es posible\n• Envía los detalles a TI",
          "en": "Collect Information\n• Note error messages\n• Take screenshots if possible\n• Provide details to IT",
          "pt": "Coletar informações\n• Anote as mensagens de erro\n• Tire capturas de tela se possível\n• Envie os detalhes à TI", "ja": "情報を収集する\n• エラーメッセージを記録する\n• 可能であればスクリーンショットを撮る\n• 詳細をIT部門に伝える", "ru": "Соберите информацию\n• Запишите сообщения об ошибках\n• Сделайте скриншоты, если возможно\n• Передайте детали в ИТ-отдел" } }
      ] }
  ]
};
