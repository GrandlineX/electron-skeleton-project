import { app } from 'electron';

import * as Path from 'path';

import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';
import { ElectronKernel, isDev, ElectronGlobals } from '@grandlinex/e-kernel';
import ExampleModule from '@/SkeletonModule/ExampleModule';

/**
 * Define global resource path
 */
const preload = undefined;
/**
 * Override the preload glx default
 * ```typescript
 * const preload = Path.join(app.getAppPath(), 'html' ,'preload.html');
 * ```
 */

const appRoot = Path.join(app.getAppPath(), 'dist', 'index.html');

/**
 * Override config path in dev mode to current folder
 */
let config: string | undefined;
if (isDev()) {
  config = Path.join(app.getAppPath(), 'config');
} else {
  config = undefined;
}

const appName = 'SkeletonApp';
const appCode = 'skeleton_app';

class SkeletonKernel extends ElectronKernel {
  constructor() {
    super({
      appName,
      appCode,
      appRoot,
      preloadRoot: preload,
      pathOverride: config,
    });

    /**
     * Set global icons
     * ```typescript
     * const base = Path.join(app.getAppPath(), 'res', 'img');
     * const store = this.getConfigStore();
     * store.set(ElectronGlobals.GLX_IMG_ICON, Path.join(base, 'favicon.png'));
     * store.set(
     *   ElectronGlobals.GLX_IMG_THUMP,
     *   Path.join(base, 'favicon-small.png')
     * );
     * ```
     */

    // Set the window frame to false
    const store = this.getConfigStore();
    store.set(ElectronGlobals.GLX_WINDOW_FRAME, 'false');

    this.addModule(new ExampleModule(this));

    if (isDev()) {
      /**
       * Install the React dev tools browser extension if starting in DEV mode
       */
      this.log('Install React Dev Tools');
      this.setDevMode(true);
      app.whenReady().then(() => {
        installExtension(REACT_DEVELOPER_TOOLS)
          .then(() => {
            this.log('Extension installed');
          })
          .catch((err) => this.error('An error occurred: ', err));
      });
    }
  }
}

const kernel = new SkeletonKernel();
kernel.start();
