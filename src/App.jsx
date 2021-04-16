import React from "react";
import {
  Box,
  Button,
  Heading,
  Grommet,
  ResponsiveContext, CheckBox,
} from 'grommet';
import { Menu } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';
import {useDispatch, useSelector} from "react-redux";
import {HeaderBar} from "./components/header/header";
import {toggleDarkMode} from "./redux/actions/theme-actions";
import {darkModeSelector} from "./redux/selectors/theme-selectors";
import {toggleMenu} from "./redux/actions/menu-actions";
import {MenuWrapper} from "./components/header/menu/menu-wrapper";

export const App = () => {
  const dispatch = useDispatch();
  const showDarkMode = useSelector(darkModeSelector)

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

              <MenuWrapper>
                <CheckBox checked={showDarkMode} label="dark mode?" onChange={() => dispatch(toggleDarkMode())} />
              </MenuWrapper>
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
