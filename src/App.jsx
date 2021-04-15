import React from "react";
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
import {useDispatch, useSelector} from "react-redux";
import {HeaderBar} from "./components/header/header";
import {toggleDarkMode} from "./redux/actions/theme-actions";
import {darkModeSelector} from "./redux/selectors/theme-selectors";
import {toggleMenu} from "./redux/actions/menu-actions";
import {isMenuOpenSelector} from "./redux/selectors/menu-selectors";

export const App = () => {
  const dispatch = useDispatch();
  const showDarkMode = useSelector(darkModeSelector)
  const showMenu = useSelector(isMenuOpenSelector)

  return (
    <Grommet theme={hpe} full={true} themeMode={showDarkMode ? 'dark' : 'light'}>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill={true}>
            <HeaderBar>
              <Button
                icon={<Menu />}
                onClick={() => dispatch(toggleMenu())}
              />
              <Heading level='3' margin='none'>{size !== 'small' ? 'I Need a Friggin Budget' : 'inafb' }</Heading>
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
                    <CheckBox checked={showDarkMode} label="dark mode?" onChange={() => dispatch(toggleDarkMode())} />
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
                      onClick={() => dispatch(toggleMenu())}
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
