# electron-skeleton-project
> GrandLineX Electron-Kernel Skeleton project

## Includes

- Full **Typescript** project setup
- **ESLint** config with AirBnB & Prettier presets
- Example **Kernel Extension** code `@/src`
- ElectronUI - React base setup (can be replaced) 
## Quick Start

1. Clone
```shell
git clone https://github.com/GrandlineX/electron-skeleton-project.git && cd electron-skeleton-project
```
2. Install dependencies 
```shell
npm install
```
3. Recompile project;
```shell
npm run recompile
```
4. Build project ;
```shell
npm run start 
```


## Additional commands


| Command              | Description                                       |
|----------------------|---------------------------------------------------|
| `npm run lint`       | Start ESLint                                      |
| `npm run buildServe` | Start webpack serve (hot reload) for frontend     |
| `npm run startDev`   | Start the Electron App (DevMode for `buildServe`) |
| `npm run package`    | Build/Pack the full app as a executable file      |
| `npm run start`      | One click start preview (no DEV-Mode)             |
