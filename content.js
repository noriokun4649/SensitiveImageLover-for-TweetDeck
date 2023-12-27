var autoClickEnabled = false;
// MutationObserverを使ってDOMの変更を監視
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        // DOMが変更されたら再びクリック
        clickDivs();
    });
});

// 監視対象となるDOMの設定
var targetNode = document.body;
var config = { childList: true, subtree: true };

var clickDivs = () => {
    chrome.storage.sync.get(['autoClickEnabled'], function (result) {
        autoClickEnabled = result.autoClickEnabled || false;
    });

    if (!autoClickEnabled) {
        observer.disconnect();
        return;
    }

    // 表示ボタンのあるDIV要素を全て取得
    var divs = document.getElementsByClassName('r-2uu9wx r-1hfyk0a');
    for (var i = 0; i < divs.length; i++) {
        divs[i].click(); // クリック
    }
}

var enableObserver = () => {
    // MutationObserverを起動
    observer.observe(targetNode, config);
}

chrome.storage.sync.get(['autoClickEnabled'], function (result) {
    autoClickEnabled = result.autoClickEnabled || false;
    if (autoClickEnabled){
        enableObserver();
    }
});
