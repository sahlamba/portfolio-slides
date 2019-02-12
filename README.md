# ranamihir.github.io

### Setup

This project requires `node v8` and `npm v6`.

```bash
# Clone the repo
git clone git@github.com:ranamihir/ranamihir.github.io.git
cd ranamihir.github.io

# Install deps
npm install
```

### Run the app locally

```bash
npm run dev
```

Go to: http://localhost:8080/

### Deploying to gh-pages

After commiting your changes in `master` or `feature` branch, run the following set of cmds

```bash
# Merge new changes in gh-pages
git checkout gh-pages
git merge master # or feature-branch

# Build and deploy
npm run build
git commit -am <deployment-message>
git push
```

### Design / Arch

### Setup

This project requires `node v8` and `npm v6`.

```bash
# Clone the repo
git clone git@github.com:thedrumsknight/portfolio-slides.git
cd portfolio-slides

# Install deps
npm install
```

### Run the app locally

```bash
npm run dev
```

Go to: http://localhost:8080/

### Deploying to gh-pages

After commiting your changes in `master` or `feature` branch, run the following set of cmds

```bash
# Merge new changes in gh-pages
git checkout gh-pages
git merge master # or feature-branch

# Build and deploy
npm run build
git commit -am <deployment-message>
git push
```

### Design / Arch

```
App <-- Site Builder <-- Section Builder <-- Templates
             |
        Data Bridge
```
