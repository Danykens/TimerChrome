// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
});

function closeBrowser() {
    chrome.windows.getAll({}, function(windows) {
        windows.forEach(function(window) {
            chrome.windows.remove(window.id);
        });
    });
}

// Устанавливаем обработчик для сигналов будильника
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "closeBrowser") {
        closeBrowser();
        chrome.storage.local.remove("endTime");
    }
});
