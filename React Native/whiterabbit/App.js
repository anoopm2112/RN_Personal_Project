import React from 'react'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeContext } from './src/common/theme-context';

import RootNavigator from './src/navigation/Router';

const App = () => {
  const [theme, setTheme] = React.useState('light');
  return (
    <ThemeContext.Provider value={{ theme }}>
      <ApplicationProvider {...eva} theme={{ ...eva.light }}>
        <IconRegistry icons={EvaIconsPack} />
        <RootNavigator />
      </ApplicationProvider>
    </ThemeContext.Provider>
  )
}

export default App
