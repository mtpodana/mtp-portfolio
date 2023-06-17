import * as React from 'react';
import classNames from "classnames/bind";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Dropdown.module.scss';

const options = ['Home', 'Work', 'About', 'Contact'];

const cx = classNames.bind(styles)

const Dropdown: React.FC<any> = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef: any = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
  
    const handleMenuItemClick = (event: any, index: any) => {
      setSelectedIndex(index);
      setOpen(false);
      
      switch(index) {
        case 0:
            console.log('Home')
            window.location.href = `https://tu3tle-portfolio.vercel.app/`
            break
        case 1:
            console.log('Work')
            window.location.href = `https://tu3tle-portfolio.vercel.app/#work`
            break
        case 2:
            console.log('About')
            window.location.href = `https://tu3tle-portfolio.vercel.app/#about`
            break
        case 3:
            console.log('Blog')
            window.location.href = `https://tu3tle-portfolio.vercel.app/#blog`
            break
        case 4:
            console.log('Contact')
            window.location.href = `https://tu3tle-portfolio.vercel.app/#contact`
            break
        default:
            console.log('Gãy!!!')
      }
    };
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event: any) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };

    return (
        <React.Fragment>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
                <Button
                    className={cx('button')}
                    color='warning'
                    size="large"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                <MenuIcon fontSize='large'/>
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex: 1,
                    width: 150,
                    height: 500,
                    fontSize: 30
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                {options.map((option, index) => (
                                    <MenuItem
                                        sx={{
                                            fontSize: 22,
                                            backgroundColor: '#fff',
                                        }}
                                        key={option}
                                        // disabled={index === 2}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    )
}

export default Dropdown;
