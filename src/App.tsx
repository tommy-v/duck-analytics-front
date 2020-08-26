// Libs
import React from 'react';

// Components
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import Encoding from './views/Encoding';
import TopBar from './components/TopBar';
import BasicResponsiveBox from './components/BasicResponsiveBox';
import { Box } from 'rebass';

// Other
import './App.css';
import theme from './theme';


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <BasicResponsiveBox>
        <TopBar/>
        <Router>
          <Box mt={100}>
            <Switch>
              <Route path="/encoding">
                <Encoding />
              </Route>
              <Route path="/">
                <Encoding />
              </Route>
            </Switch>
          </Box>
        </Router>
      </BasicResponsiveBox>
    </ThemeProvider>
  );
}

export default App;
