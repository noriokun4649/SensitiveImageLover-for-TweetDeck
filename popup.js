document.addEventListener('DOMContentLoaded', function () {
  var autoClickCheckbox = document.getElementById('autoClickCheckbox');

  // 保存された設定を復元
  chrome.storage.sync.get(['autoClickEnabled'], function (result) {
    autoClickCheckbox.checked = result.autoClickEnabled || false;
  });

  // チェックボックスの変更時に設定を保存
  autoClickCheckbox.addEventListener('change', function () {
    chrome.storage.sync.set({ 'autoClickEnabled': autoClickCheckbox.checked });
  });
});
