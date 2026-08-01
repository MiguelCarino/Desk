/* ============================================================
   i18n.js — Desk APPLICATION CHROME only (fleet convention,
   reference: Topo/js/i18n.js). English source strings ARE the
   keys; a missing entry falls back to English.

   Scope guard: Desk's card CONTENT languages are per-card (keys
   of each card's JSON value object, copied via lang chips) and
   its template dictionary drives flowT()/applyUILabels — this
   file deliberately touches NEITHER. It only translates the
   static chrome hard-coded in index.html (tooltips, welcome
   message, reset confirmation, flow-editor toasts, …).
   Surfaces the template dictionary may claim (kbd-btn title,
   search placeholder, clear-search title) are only rewritten
   while they still hold the untouched English source, so
   template-provided strings always win.

   Locale comes from carino-lang.js (loaded just before this):
     window.CarinoLang.current + the 'carino:langchange' event.
   Japanese deliberately says "PC", never コンピューター.
   ============================================================ */

const I18N = {
    es: {
        // Welcome / sidebar
        'NO CONFIGURATION LOADED': 'NINGUNA CONFIGURACIÓN CARGADA',
        'Drag & Drop a JSON file here.': 'Arrastra y suelta un archivo JSON aquí.',
        'Status': 'Estado',
        // Top bar tooltips + search
        'New Ticket': 'Nuevo ticket',
        'Keyboard shortcuts': 'Atajos de teclado',
        'Toggle card dimming': 'Atenuar tarjetas no relacionadas',
        'Reset — delete all stored data and load default template': 'Restablecer — borra todos los datos guardados y carga la plantilla por defecto',
        'Search...': 'Buscar...',
        'Clear search': 'Limpiar búsqueda',
        // Media popup chrome
        'media.carino.systems — PDF → images · OCR · signature cleanup · image/audio conversion': 'media.carino.systems — PDF → imágenes · OCR · limpieza de firmas · conversión de imagen/audio',
        'open full ↗': 'abrir completo ↗',
        'Close': 'Cerrar',
        // Static placeholders (flow editor + multisearch add row)
        'e.g. Clear Chrome Cache': 'p. ej. Borrar caché de Chrome',
        'e.g. End Users': 'p. ej. Usuarios finales',
        'Label': 'Etiqueta',
        'URL with [str] placeholder': 'URL con el marcador [str]',
        // Confirms / alerts / toasts (chrome literals, not template strings)
        'Reset everything?\n\nThis will delete all stored data and reload the default template.': '¿Restablecer todo?\n\nSe borrarán todos los datos guardados y se recargará la plantilla por defecto.',
        'Cannot close last tab': 'No se puede cerrar la última pestaña',
        'Clear fields?': '¿Limpiar los campos?',
        'Cleared': 'Limpiado',
        'Restore Backup?': '¿Restaurar la copia de seguridad?',
        'Backup Restored': 'Copia de seguridad restaurada',
        'Load Config? (Clears Tickets)': '¿Cargar configuración? (Borra los tickets)',
        'Config Loaded': 'Configuración cargada',
        'Invalid JSON': 'JSON no válido',
        'Log Saved': 'Registro guardado',
        'Delete this flow?': '¿Eliminar este flujo?',
        'Revert this builtin flow to its original version?': '¿Revertir este flujo integrado a su versión original?',
        '💾 Flow saved': '💾 Flujo guardado',
        '🗑 Flow deleted': '🗑 Flujo eliminado',
        '↺ Flow reverted': '↺ Flujo revertido',
        '⚠️ Title required': '⚠️ Falta el título',
        '⚠️ At least one step required': '⚠️ Se necesita al menos un paso',
        '⚠️ A flow needs at least one step': '⚠️ Un flujo necesita al menos un paso',
        '⚠️ Storage full — flow not saved': '⚠️ Almacenamiento lleno — flujo no guardado',
        '🖼️ Image pasted': '🖼️ Imagen pegada',
        '⚠️ Could not read image': '⚠️ No se pudo leer la imagen',
        '⚠️ Image export failed': '⚠️ Falló la exportación de la imagen',
        '⬇ PNG downloaded': '⬇ PNG descargado',
        '🖼️ Flow image copied': '🖼️ Imagen del flujo copiada',
        'Clipboard unavailable — PNG downloaded': 'Portapapeles no disponible — PNG descargado',
        'Clipboard blocked — PNG downloaded': 'Portapapeles bloqueado — PNG descargado',
    },
    'pt-BR': {
        'NO CONFIGURATION LOADED': 'NENHUMA CONFIGURAÇÃO CARREGADA',
        'Drag & Drop a JSON file here.': 'Arraste e solte um arquivo JSON aqui.',
        'Status': 'Status',
        'New Ticket': 'Novo ticket',
        'Keyboard shortcuts': 'Atalhos de teclado',
        'Toggle card dimming': 'Esmaecer cartões não relacionados',
        'Reset — delete all stored data and load default template': 'Redefinir — apaga todos os dados salvos e carrega o modelo padrão',
        'Search...': 'Pesquisar...',
        'Clear search': 'Limpar pesquisa',
        'media.carino.systems — PDF → images · OCR · signature cleanup · image/audio conversion': 'media.carino.systems — PDF → imagens · OCR · limpeza de assinaturas · conversão de imagem/áudio',
        'open full ↗': 'abrir completo ↗',
        'Close': 'Fechar',
        'e.g. Clear Chrome Cache': 'ex.: Limpar cache do Chrome',
        'e.g. End Users': 'ex.: Usuários finais',
        'Label': 'Rótulo',
        'URL with [str] placeholder': 'URL com o marcador [str]',
        'Reset everything?\n\nThis will delete all stored data and reload the default template.': 'Redefinir tudo?\n\nIsso apagará todos os dados salvos e recarregará o modelo padrão.',
        'Cannot close last tab': 'Não é possível fechar a última aba',
        'Clear fields?': 'Limpar os campos?',
        'Cleared': 'Campos limpos',
        'Restore Backup?': 'Restaurar backup?',
        'Backup Restored': 'Backup restaurado',
        'Load Config? (Clears Tickets)': 'Carregar configuração? (Apaga os tickets)',
        'Config Loaded': 'Configuração carregada',
        'Invalid JSON': 'JSON inválido',
        'Log Saved': 'Registro salvo',
        'Delete this flow?': 'Excluir este fluxo?',
        'Revert this builtin flow to its original version?': 'Reverter este fluxo integrado à versão original?',
        '💾 Flow saved': '💾 Fluxo salvo',
        '🗑 Flow deleted': '🗑 Fluxo excluído',
        '↺ Flow reverted': '↺ Fluxo revertido',
        '⚠️ Title required': '⚠️ Título obrigatório',
        '⚠️ At least one step required': '⚠️ Pelo menos um passo é necessário',
        '⚠️ A flow needs at least one step': '⚠️ Um fluxo precisa de pelo menos um passo',
        '⚠️ Storage full — flow not saved': '⚠️ Armazenamento cheio — fluxo não salvo',
        '🖼️ Image pasted': '🖼️ Imagem colada',
        '⚠️ Could not read image': '⚠️ Não foi possível ler a imagem',
        '⚠️ Image export failed': '⚠️ Falha ao exportar a imagem',
        '⬇ PNG downloaded': '⬇ PNG baixado',
        '🖼️ Flow image copied': '🖼️ Imagem do fluxo copiada',
        'Clipboard unavailable — PNG downloaded': 'Área de transferência indisponível — PNG baixado',
        'Clipboard blocked — PNG downloaded': 'Área de transferência bloqueada — PNG baixado',
    },
    ja: {
        'NO CONFIGURATION LOADED': '設定が読み込まれていません',
        'Drag & Drop a JSON file here.': 'ここにJSONファイルをドラッグ＆ドロップしてください。',
        'Status': 'ステータス',
        'New Ticket': '新規チケット',
        'Keyboard shortcuts': 'キーボードショートカット',
        'Toggle card dimming': '関連外カードの減光を切り替え',
        'Reset — delete all stored data and load default template': 'リセット — 保存データをすべて削除して既定のテンプレートを読み込みます',
        'Search...': '検索...',
        'Clear search': '検索をクリア',
        'media.carino.systems — PDF → images · OCR · signature cleanup · image/audio conversion': 'media.carino.systems — PDF→画像 · OCR · 署名のクリーンアップ · 画像/音声変換',
        'open full ↗': '全画面で開く ↗',
        'Close': '閉じる',
        'e.g. Clear Chrome Cache': '例: Chromeのキャッシュを削除',
        'e.g. End Users': '例: エンドユーザー',
        'Label': 'ラベル',
        'URL with [str] placeholder': '[str] プレースホルダー付きのURL',
        'Reset everything?\n\nThis will delete all stored data and reload the default template.': 'すべてリセットしますか？\n\n保存されたデータをすべて削除し、既定のテンプレートを再読み込みします。',
        'Cannot close last tab': '最後のタブは閉じられません',
        'Clear fields?': '入力欄をクリアしますか？',
        'Cleared': 'クリアしました',
        'Restore Backup?': 'バックアップを復元しますか？',
        'Backup Restored': 'バックアップを復元しました',
        'Load Config? (Clears Tickets)': '設定を読み込みますか？（チケットは消去されます）',
        'Config Loaded': '設定を読み込みました',
        'Invalid JSON': '無効なJSONです',
        'Log Saved': 'ログを保存しました',
        'Delete this flow?': 'このフローを削除しますか？',
        'Revert this builtin flow to its original version?': 'この組み込みフローを元のバージョンに戻しますか？',
        '💾 Flow saved': '💾 フローを保存しました',
        '🗑 Flow deleted': '🗑 フローを削除しました',
        '↺ Flow reverted': '↺ フローを元に戻しました',
        '⚠️ Title required': '⚠️ タイトルを入力してください',
        '⚠️ At least one step required': '⚠️ 少なくとも1つのステップが必要です',
        '⚠️ A flow needs at least one step': '⚠️ フローには少なくとも1つのステップが必要です',
        '⚠️ Storage full — flow not saved': '⚠️ ストレージが満杯のため、フローを保存できませんでした',
        '🖼️ Image pasted': '🖼️ 画像を貼り付けました',
        '⚠️ Could not read image': '⚠️ 画像を読み込めませんでした',
        '⚠️ Image export failed': '⚠️ 画像のエクスポートに失敗しました',
        '⬇ PNG downloaded': '⬇ PNGをダウンロードしました',
        '🖼️ Flow image copied': '🖼️ フロー画像をコピーしました',
        'Clipboard unavailable — PNG downloaded': 'クリップボードを利用できないため、PNGをダウンロードしました',
        'Clipboard blocked — PNG downloaded': 'クリップボードがブロックされたため、PNGをダウンロードしました',
    },
    ru: {
        'NO CONFIGURATION LOADED': 'КОНФИГУРАЦИЯ НЕ ЗАГРУЖЕНА',
        'Drag & Drop a JSON file here.': 'Перетащите сюда JSON-файл.',
        'Status': 'Статус',
        'New Ticket': 'Новый тикет',
        'Keyboard shortcuts': 'Горячие клавиши',
        'Toggle card dimming': 'Переключить затемнение карточек',
        'Reset — delete all stored data and load default template': 'Сброс — удалить все сохранённые данные и загрузить шаблон по умолчанию',
        'Search...': 'Поиск...',
        'Clear search': 'Очистить поиск',
        'media.carino.systems — PDF → images · OCR · signature cleanup · image/audio conversion': 'media.carino.systems — PDF → изображения · OCR · очистка подписей · конвертация изображений/аудио',
        'open full ↗': 'открыть полностью ↗',
        'Close': 'Закрыть',
        'e.g. Clear Chrome Cache': 'напр. Очистить кэш Chrome',
        'e.g. End Users': 'напр. Конечные пользователи',
        'Label': 'Метка',
        'URL with [str] placeholder': 'URL с плейсхолдером [str]',
        'Reset everything?\n\nThis will delete all stored data and reload the default template.': 'Сбросить всё?\n\nВсе сохранённые данные будут удалены, а шаблон по умолчанию загружен заново.',
        'Cannot close last tab': 'Нельзя закрыть последнюю вкладку',
        'Clear fields?': 'Очистить поля?',
        'Cleared': 'Очищено',
        'Restore Backup?': 'Восстановить резервную копию?',
        'Backup Restored': 'Резервная копия восстановлена',
        'Load Config? (Clears Tickets)': 'Загрузить конфигурацию? (Тикеты будут удалены)',
        'Config Loaded': 'Конфигурация загружена',
        'Invalid JSON': 'Некорректный JSON',
        'Log Saved': 'Журнал сохранён',
        'Delete this flow?': 'Удалить этот сценарий?',
        'Revert this builtin flow to its original version?': 'Вернуть этот встроенный сценарий к исходной версии?',
        '💾 Flow saved': '💾 Сценарий сохранён',
        '🗑 Flow deleted': '🗑 Сценарий удалён',
        '↺ Flow reverted': '↺ Сценарий восстановлен',
        '⚠️ Title required': '⚠️ Нужен заголовок',
        '⚠️ At least one step required': '⚠️ Нужен хотя бы один шаг',
        '⚠️ A flow needs at least one step': '⚠️ Сценарию нужен хотя бы один шаг',
        '⚠️ Storage full — flow not saved': '⚠️ Хранилище заполнено — сценарий не сохранён',
        '🖼️ Image pasted': '🖼️ Изображение вставлено',
        '⚠️ Could not read image': '⚠️ Не удалось прочитать изображение',
        '⚠️ Image export failed': '⚠️ Не удалось экспортировать изображение',
        '⬇ PNG downloaded': '⬇ PNG скачан',
        '🖼️ Flow image copied': '🖼️ Изображение сценария скопировано',
        'Clipboard unavailable — PNG downloaded': 'Буфер обмена недоступен — PNG скачан',
        'Clipboard blocked — PNG downloaded': 'Буфер обмена заблокирован — PNG скачан',
    },
};

let LOCALE = 'en';

function t(key) {
    const dict = I18N[LOCALE];
    return (dict && dict[key]) || key;
}

// Static markup: elements carrying data-i18n use their original English text
// as the key (captured on first pass so locale switches stay reversible).
function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        if (!el.dataset.i18nKey) el.dataset.i18nKey = el.textContent.trim();
        el.textContent = t(el.dataset.i18nKey);
    });
}

// Attributes the template dictionary may also write (via applyUILabels /
// flowT): rewrite ONLY while they hold the untouched English source or our
// own previous write — a template-provided value is never overridden.
function setManagedAttr(id, attr, key) {
    const el = document.getElementById(id);
    if (!el) return;
    const cur = el.getAttribute(attr) || '';
    if (cur !== key && cur !== el.dataset.i18nOwn) return;
    const v = t(key);
    el.setAttribute(attr, v);
    el.dataset.i18nOwn = v;
}

// Explicit chrome attributes: top-bar icon buttons, search box, and the few
// static placeholders/tooltips no app code ever touches.
function applyChromeI18n() {
    const set = (id, attr, key) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute(attr, t(key));
    };
    // Unmanaged — ours alone.
    set('new-tab-btn', 'title', 'New Ticket');
    set('dim-btn', 'title', 'Toggle card dimming');
    set('reset-btn', 'title', 'Reset — delete all stored data and load default template');
    set('media-close', 'title', 'Close');
    set('flow-title-input', 'placeholder', 'e.g. Clear Chrome Cache');
    set('flow-tag-input', 'placeholder', 'e.g. End Users');
    set('msearch-add-title', 'placeholder', 'Label');
    set('msearch-add-url', 'placeholder', 'URL with [str] placeholder');
    // Shared with the template dictionary — guarded.
    setManagedAttr('kbd-btn', 'title', 'Keyboard shortcuts');
    setManagedAttr('search-box', 'placeholder', 'Search...');
    setManagedAttr('search-clear', 'title', 'Clear search');
}

function refreshChromeI18n() {
    const lang = (window.CarinoLang && window.CarinoLang.current) || 'en';
    LOCALE = I18N[lang] ? lang : 'en';
    applyStaticI18n();
    applyChromeI18n();
}

// carino-lang.js (deferred, loaded just before this file) owns the
// preference; we follow it at startup, after the app's own load-time label
// pass, and on every switcher change.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', refreshChromeI18n);
} else {
    refreshChromeI18n();
}
window.addEventListener('load', refreshChromeI18n);
window.addEventListener('carino:langchange', refreshChromeI18n);
