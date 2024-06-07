document.getElementById("setTimer").addEventListener("click", () => {
    let time = document.getElementById("time").value;
    if (time && !isNaN(time)) {
        chrome.alarms.clear("closeBrowser", () => {
            chrome.alarms.create("closeBrowser", { delayInMinutes: parseFloat(time) });
            if (chrome.storage && chrome.storage.local) {
                chrome.storage.local.set({ endTime: Date.now() + time * 60000 });
            } else {
                console.error("chrome.storage.local is not available");
            }
            updateTimeDisplay();
            alert("Timer set for " + time + " minutes.");
        });
    } else {
        alert("Please enter a valid number.");
    }
});

document.getElementById("resetTimer").addEventListener("click", () => {
    chrome.alarms.clear("closeBrowser", () => {
        if (chrome.storage && chrome.storage.local) {
            chrome.storage.local.remove("endTime");
        } else {
            console.error("chrome.storage.local is not available");
        }
        updateTimeDisplay();
        alert("Timer reset.");
    });
});

function updateTimeDisplay() {
    if (chrome.storage && chrome.storage.local) {
        chrome.storage.local.get("endTime", (data) => {
            if (data.endTime) {
                let timeLeft = data.endTime - Date.now();
                if (timeLeft > 0) {
                    document.getElementById("timeDisplay").innerText = "Time left: " + Math.floor(timeLeft / 60000) + " min " + Math.floor((timeLeft % 60000) / 1000) + " sec";
                } else {
                    document.getElementById("timeDisplay").innerText = "Time left: --";
                }
            } else {
                document.getElementById("timeDisplay").innerText = "Time left: --";
            }
        });
    } else {
        console.error("chrome.storage.local is not available");
        document.getElementById("timeDisplay").innerText = "Time left: --";
    }
}

setInterval(updateTimeDisplay, 1000);  // Update the display every second
