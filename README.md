# Browser Auto Closer

## Overview

The Browser Auto Closer is a Chrome extension that automatically closes the browser after a specified period. This can be particularly useful for users who want to limit their browsing time or ensure their browser closes for security or productivity reasons.

## Features

- **Set a Timer:** Users can set a timer specifying the number of minutes after which the browser will close automatically.
- **Simple UI:** An optional popup interface allows users to easily set and manage the timer.
- **Background Operation:** The extension runs in the background, using Chrome's alarms API to track the time and execute the close action.

## How It Works

1. **Manifest Configuration:** The `manifest.json` file defines the extension's configuration, including permissions and background scripts.
2. **Background Script:** The `background.js` script handles the creation of the timer and the closing of browser windows once the timer expires.
3. **Popup Interface (Optional):** The `popup.html` and `popup.js` files provide a simple user interface for setting the timer.

## Installation

1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click on "Load unpacked" and select the directory containing this project.

## Usage

1. Click on the extension icon in the Chrome toolbar.
2. Enter the number of minutes you want to set for the timer and click "Set Timer".
3. The browser will automatically close after the specified time.

## Files

- `manifest.json`: Defines the extension's metadata and permissions.
- `background.js`: Contains the logic for setting and handling the timer.
- `popup.html`: Provides a user interface for setting the timer (optional).
- `popup.js`: Contains the script for handling user input in the popup interface.

---

Feel free to modify the description as needed for your specific use case or add any additional details you think are important.