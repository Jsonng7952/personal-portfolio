import React from 'react'
import { GlobalStyle } from './Global';
import { ThemeProvider } from 'styled-components';
import { PrimaryTheme } from './Theme'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={PrimaryTheme}>
        <Nav />
        <Home />
        <About />
        <Project />
        <Contact />
      </ThemeProvider>
    </>
  )
}

export default App
