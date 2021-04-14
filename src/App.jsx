import React, { useState } from "react";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext, CheckBox,
} from 'grommet';
import { FormClose, Menu } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';
import {HeaderBar} from "./components/header/header";

export const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDarkMode, setShowDarkMode] = useState( false)
  return (
    <Grommet theme={hpe} full={true} themeMode={showDarkMode ? 'dark' : 'light'}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill={true}>
            <HeaderBar>
              <Button
                icon={<Menu />}
                onClick={() => setShowMenu(!showMenu)}
              />
              <Heading level='3' margin='none'>I Need a Friggin Budget</Heading>
            </HeaderBar>
            <Box direction='row' flex={true} overflow={{ horizontal: 'hidden' }}>

              {(!showMenu || size !== 'small') ? (
                <Collapsible direction="horizontal" open={showMenu}>
                  <Box
                    flex={true}
                    width='medium'
                    background='dark-2'
                    elevation='small'
                    align='left'
                    justify='top'
                  >
                    <CheckBox checked={showDarkMode} label="dark mode?" onChange={(event) => setShowDarkMode(event.target.checked)} />
                  </Box>
                </Collapsible>
              ): (
                <Layer>
                  <Box
                    background='light-2'
                    tag='header'
                    justify='end'
                    align='center'
                    direction='row'
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowMenu(false)}
                    />
                  </Box>
                  <Box
                    fill={true}
                    background='light-2'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
