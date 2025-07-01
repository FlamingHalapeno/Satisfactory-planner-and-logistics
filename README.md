# Desktop App

## Development

```bash
npm install
npm start          # Run the app
npm run dev        # Run with DevTools open
```

## Building for Steam

```bash
npm run build      # Creates distributables in dist/
```

This creates Windows `.exe`, Linux `AppImage`, and macOS `.dmg` files ready for Steam distribution.

## File Structure

- `main.js` - Electron main process
- `index.html` - App UI
- `style.css` - Styling (black background)
- `app.js` - App logic 