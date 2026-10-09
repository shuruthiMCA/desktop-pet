# Desktop Pet

A Windows desktop companion app built with Electron. My own 3D cartoon avatar walks along the bottom of the screen, reminds me to take care of myself, and reacts when I click or drag her.

## Features
- Transparent, always-on-top overlay window that stays click-through for other apps
- Real walking animation (video with a chroma-keyed transparent background)
- Custom reminder popups: water, stretch, eye break, job applications
- Daily progress counter for water, saved between restarts
- Random idle behaviour: she stops, stands, and sometimes turns around
- Click her to get a motivational message
- Drag and drop her anywhere on the screen, and she falls back down
- Right-click menu to quit
- Auto-start with Windows login

## Tech Stack
Electron, HTML, CSS, JavaScript

## How to run
1. Install Node.js
2. Clone this repo
3. Run `npm install`
4. Run `npm start`

## How the avatar was made
Generated with an AI image tool from a photo, then animated using a green-screen walking loop converted to a transparent WebM video.
