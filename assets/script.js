
(function(){
  const debugEl = document.getElementById('debug');
  const log = (msg) => {
    const ts = new Date().toLocaleString('ja-JP', { hour12: false });
    debugEl.textContent += `[${ts}] ${msg}\n`;
  };

  log('ページ読み込み完了');

  const cta = document.getElementById('cta');
  cta.addEventListener('click', () => {
    log('CTA ボタンがクリックされました');
    // オンボーディングの SDK/スクリプト側で初期化が必要な場合、
    // ここからイベントを送るなどの連携が可能です。
    const ev = new CustomEvent('onboarding:start');
    window.dispatchEvent(ev);
  });

  // 外部スニペットがあれば、このイベントに反応させることができます
  window.addEventListener('onboarding:start', () => {
    log('onboarding:start イベントをディスパッチしました');
  });
})();
