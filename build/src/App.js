import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import { useTheme } from './theme/useTheme';
import Block from './components/Block';

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

var blocks = [];

function App() {
  // 3: Get the selected theme, font list, etc.
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [theme, themeLoaded]);

  // 4: Load all the fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <div className="App">
              <div className="topMenu"></div>
              <div className="mainArea">
                <ul>
                  {blocks.map(block => (
                    <Block id={block}></Block>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </ThemeProvider>
      }
    </>
  );
}

export function spawnBlock() {
  const name = "block" + blocks.length;
  blocks.push(name);

}





export default App;
