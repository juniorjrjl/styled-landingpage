import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from "./global/styles/Theme";
import Header from "./components/Header";
import GlobalStyle from './global/styles/Global'
import ProductPage from './components/ProductPage';

const App = () => {

  const [theme, setTheme] = useState(darkTheme);
  const handleChangeTheme = () => setTheme(theme === darkTheme ? lightTheme : darkTheme)
  
  return (
    <ThemeProvider theme={theme}>
      <Header actualTheme={theme} changeTheme={handleChangeTheme} />
      <ProductPage />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;