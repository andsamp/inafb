import {Box, Button, Collapsible, Layer, ResponsiveContext} from "grommet";
import {FormClose} from "grommet-icons";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../../redux/actions/menu-actions";
import {isMenuOpenSelector} from "../../../redux/selectors/menu-selectors";

export const MenuWrapper = ({children}) => {
  const dispatch = useDispatch()
  const showMenu = useSelector(isMenuOpenSelector)

  if(!showMenu) {
    return null;
  }

  return (
    <ResponsiveContext.Consumer>
      { size => (
        (size !== 'small') ? (
          <Collapsible direction="horizontal" open={showMenu}>
            <Box
              flex={true}
              width='medium'
              background='dark-2'
              elevation='small'
              align='left'
              justify='top'
            >
              {children}
            </Box>
          </Collapsible>
        ): (
          <Layer>
            <Box
              background='dark-2'
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
              background='dark-2'
              align='left'
              justify='top'
            >
              {children}
            </Box>
          </Layer>
        )
      )}


    </ResponsiveContext.Consumer>

  );

}
