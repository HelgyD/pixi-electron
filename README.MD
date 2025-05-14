# 🎛️ pixi + ts+ electron bundle

**i went through sonme suffering launching it so maybe it'll help someone**  
- pixi- 2d renderer
- electron - wrapper for node apps
- typescript - because vanilla is a sin
- vite - bundler that turns everything into pure js and html (dist folder)

your TS code goes into /renderer where renderer.ts is the main file
/renderer/public is for your assets
/build is for icon (icon.ico is a REQUIRED name if u build for windows)

---

## How to dev

i use yarn so god bless npm users (but i think it's practically the same)

```bash
# installing packages
yarn
# launching web part on http://localhost:5173/
yarn vite
#(separate console)  launching electron
yarn start
---
```

## 🖥️ How to Build

```bash
# make vite build dist
yarn vite build

# run electron builder (this is win x64 portable)
yarn electron:build --win portable --x64
```
