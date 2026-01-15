# Birthday-Website

A romantic interactive birthday website with **30 pages** of games, activities, and animations. **Fully configurable via JSON!**

## 🎉 Features

### Original Activities (Pages 1-17)
- **Fortune Cookie 🥠** - Tap to reveal romantic fortunes
- **Love Calculator 💕** - Animated compatibility meter (always 100%!)
- **Balloon Pop 🎈** - Pop balloons to reveal a secret message
- **Timeline** - Journey through your memories
- **Interactive Cake** - Blow out the candle
- **Love Carousel** - Rotating reasons why you love them
- **Heart Catching Game** - Tap hearts to score points
- **Quiz** - Test your knowledge
- **Reaction Test** - Traffic light reaction game
- **Secret Message** - Decrypt hidden messages

### New Interactive Activities (Pages 18-29)
- **Memory Matching Game 🃏** - Match pairs to reveal love messages
- **Love Letter Puzzle 💌** - Drag and drop words to reassemble a heartfelt message
- **Star Gazing 🌟** - Connect the dots to form a heart constellation
- **Photo Polaroid Shake 📸** - Shake/tap to develop a special memory
- **Music Box 🎵** - Interactive music player with lyrics
- **Scratch Card 🎫** - Scratch to reveal a surprise message
- **Wishing Well 🪙** - Toss coins to reveal wishes and promises
- **Love Jar 🫙** - Pull out random love notes
- **Countdown Timer ⏰** - Count up from when you met
- **Fingerprint Heart 💗** - Two fingerprints merge into one heart
- **Wheel of Love 🎡** - Spin to win romantic prizes
- **Message in a Bottle 🍾** - Open to reveal a heartfelt message

## Project Structure

```
Birthday-Website/
├── index.html          # Main HTML file (30 pages)
├── styles.css          # All CSS styles and animations
├── config.json         # Configuration file for all content
├── js/
│   ├── app.js          # Main application entry point
│   ├── animations.js   # Background effects and confetti
│   ├── navigation.js   # Page transitions
│   ├── interactions.js # Interactive features (cake, quiz, etc.)
│   ├── game.js         # Heart catching game
│   ├── content.js      # Dynamic content loader
│   ├── fortune.js      # Fortune cookie activity
│   ├── calculator.js   # Love calculator activity
│   ├── balloon.js      # Balloon pop activity
│   ├── memory.js       # Memory matching game
│   ├── puzzle.js       # Love letter puzzle
│   ├── stars.js        # Star constellation
│   ├── polaroid.js     # Polaroid photo shake
│   ├── music.js        # Music box player
│   ├── scratch.js      # Scratch card
│   ├── well.js         # Wishing well
│   ├── jar.js          # Love jar
│   ├── countdown.js    # Countdown timer
│   ├── fingerprint.js  # Fingerprint heart
│   ├── wheel.js        # Spinning wheel
│   └── bottle.js       # Message in a bottle
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
- `video` - Video player
- `memory` - Memory matching game
- `puzzle` - Word puzzle
- `stars` - Star constellation
- `polaroid` - Photo shake to develop
- `music` - Music player with lyrics
- `scratch` - Scratch card
- `well` - Wishing well
- `jar` - Love jar with notes
- `countdown` - Time counter
- `fingerprint` - Fingerprint merge
- `wheel` - Spinning wheel
- `bottle` - Message in a bottle
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

## Features Summary

- **30 interactive pages** with diverse activities
- Floating heart background animation
- Confetti effects
- Timeline of memories
- Love message carousel
- Heart catching game
- Reaction time test
- Interactive quiz
- Secret message reveal
- Fortune cookie with random fortunes
- Animated love calculator
- Balloon pop message reveal
- Memory matching game
- Love letter puzzle
- Star constellation drawing
- Polaroid photo development
- Music box with lyrics
- Scratch card surprise
- Wishing well with promises
- Love jar with notes
- Countdown timer
- Fingerprint heart merge
- Spinning wheel of prizes
- Message in a bottle
- **Fully JSON-configurable content**
- Progress tracker
- Responsive design

## Usage

1. Customize `config.json` with your personal messages
2. Open `index.html` in a web browser
3. All modules load as ES6 modules automatically

## Customization Tips

- Change fortunes in `config.json` → `page13.fortunes`
- Modify balloon message in `config.json` → `page15.message`
- Adjust balloon count in `config.json` → `page15.balloonCount`
- Update timeline events in `config.json` → `page4.timeline`
- Customize memory game cards in `config.json` → `page18.cards`
- Change puzzle message in `config.json` → `page19.message`
- Set countdown start date in `config.json` → `page26.startDate`
- Add your own music file and update `config.json` → `page22.audioUrl`
- Customize all text without touching code!
- Enable/disable specific pages via `meta.enabledPages`

## Browser Compatibility

Works in all modern browsers with ES6 module support.
