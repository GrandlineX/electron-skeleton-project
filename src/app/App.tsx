import React from 'react';
import {
  Button,
  Grid,
  IOLogoReact,
  ISize,
  TabLayout,
} from '@grandlinex/react-components';
import '@grandlinex/react-components/style/style.scss';
import './style/style.scss';

export default function App() {
  return (
    <TabLayout
      init
      tabs={{
        tabsLeft: [],
        tabsRight: [],
        currentTabLeft: -1,
        currentTabRight: -1,
        addTab: () => {},
        closeTab: () => {},
        setCurrentTab: () => {},
        error: (message: string) => {},
      }}
      tabRenderer={() => null}
      preload={async () => {}}
      header={{
        refresh: () => window.glxApi.windowFunctions.reload(),
        electron: {
          close: () => window.glxApi.windowFunctions.close(),
          minimize: () => window.glxApi.windowFunctions.minimize(),
          maximize: () => window.glxApi.windowFunctions.maximize(),
        },
      }}
      globalRenderer={() => {
        return (
          <Grid flex flexC className="main-content ">
            <h1>
              <IOLogoReact size={ISize.MD} /> Grandline X
            </h1>
            <Grid>
              <Button
                half
                onClick={() =>
                  window.glxApi.coreFunctions.alert({
                    title: 'Test notification',
                    body: 'This is a test notification',
                  })
                }
              >
                Test notification
              </Button>
              <Button
                half
                onClick={() => window.glxApi.windowFunctions.devMode()}
              >
                Open Dev tools
              </Button>
              <Button
                half
                onClick={() =>
                  window.glxApi.coreFunctions.openExternal({
                    url: 'https://www.grandlinex.com/',
                    external: true,
                  })
                }
              >
                Project Website
              </Button>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
