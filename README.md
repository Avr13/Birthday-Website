# Birthday-Website

A romantic interactive birthday website with multiple pages, games, and animations. **Fully configurable via JSON!**

## 🎉 New Features

### New Activities
- **Fortune Cookie 🥠** - Tap to reveal romantic fortunes
- **Love Calculator 💕** - Animated compatibility meter (always 100%!)
- **Balloon Pop 🎈** - Pop balloons to reveal a secret message

### Configuration System
All content is now configurable through `config.json` - easily customize:
- Page titles, text, and buttons
- Activity settings (balloon count, fortunes, messages)
- Timeline events
- Love reasons and affirmations
- Quiz questions and answers
- Enable/disable specific pages

## Project Structure

```
Birthday-Website/
├── index.html          # Main HTML file (16 pages)
├── styles.css          # All CSS styles and animations
├── config.json         # 🆕 Configuration file for all content
├── js/
│   ├── app.js          # Main application entry point
│   ├── animations.js   # Background effects and confetti
│   ├── navigation.js   # Page transitions and button movements
│   ├── interactions.js # Interactive features (cake, quiz, etc.)
│   ├── game.js         # Heart catching game logic
│   ├── content.js      # 🆕 Dynamic content loader from config
│   ├── fortune.js      # 🆕 Fortune cookie activity
│   ├── calculator.js   # 🆕 Love calculator activity
│   └── balloon.js      # 🆕 Balloon pop activity
└── README.md
```

## Configuration Guide

Edit `config.json` to customize your experience:

### Meta Settings
```json
"meta": {
  "title": "Happy Birthday ❤️",
  "enabledPages": [1, 2, 3, ...]  // Control which pages show
}
```

### Page Types
- `choice` - Yes/No decision page
- `text` - Simple text display
- `timeline` - Event timeline
- `cake` - Interactive cake blowing
- `carousel` - Rotating messages
- `game` - Heart catching game
- `quiz` - Interactive quiz
- `reaction` - Reaction time test
- `secret` - Hidden message reveal
- `fortune` - Fortune cookie
- `calculator` - Love compatibility meter
- `balloon` - Balloon popping game
- `final` - Ending page

### Example Page Configuration
```json
"page13": {
  "type": "fortune",
  "title": "Fortune Cookie 🥠",
  "instruction": "Tap the cookie to reveal your fortune!",
  "fortunes": [
    "A lifetime of love awaits you both 💕",
    "Your love story is just beginning ✨"
  ],
  "button": "Continue ➜"
}
```

## Features

- 16 interactive pages (13 original + 3 new)
- Floating heart background animation
- Confetti effects
- Timeline of memories
- Love message carousel
- Heart catching game
- Reaction time test
- Interactive quiz
- Secret message reveal
- **🆕 Fortune cookie with random fortunes**
- **🆕 Animated love calculator**
- **🆕 Balloon pop message reveal**
- **🆕 Fully JSON-configurable content**

## Usage

1. Customize `config.json` with your personal messages
2. Open `index.html` in a web browser
3. All modules load as ES6 modules automatically

## Customization Tips

- Change fortunes in `config.json` → `page13.fortunes`
- Modify balloon message in `config.json` → `page15.message`
- Adjust balloon count in `config.json` → `page15.balloonCount`
- Update timeline events in `config.json` → `page4.timeline`
- Customize all text without touching code!

## Browser Compatibility

Works in all modern browsers with ES6 module support.
