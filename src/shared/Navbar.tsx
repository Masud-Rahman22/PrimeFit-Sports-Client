import * as React from 'react';
// import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { alpha } from '@mui/material/styles';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MoreIcon from '@mui/icons-material/MoreVert';
// import { grey } from '@mui/material/colors';
import { Drawer, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import RightSideBar from '../components/sidebar/RightSideBar';
import { Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import Login from '../pages/Login';

const TextTypography = styled(Typography)({
    fontFamily: 'Georgia, serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: '#4a4a4a',
});
// const color = grey[900];
// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: color,
//     '&:hover': {
//         backgroundColor: color,
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));



export default function NavBar() {
    const [openSidebar, setOpenSidebar] = React.useState(false)
    const [openRightSidebar, setOpenRightSidebar] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const dropDownRef = React.useRef(null);
    let idx = 0;

    React.useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false)
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);


    //here all the routes

    const navLinks = <>
        <ul>
            <Link to='/'>
                <li className="group flex  cursor-pointer flex-col">
                    HOME<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/5"></span>
                </li>
            </Link>
            <Link to='/men'>
                <li className="group flex  cursor-pointer flex-col">
                    MEN<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/6"></span>
                </li>
            </Link>
            <Link to='/women'>
                <li className="group flex  cursor-pointer flex-col">
                    WOMEN<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/4"></span>
                </li>
            </Link>
            <Link to='/kids'>
                <li className="group flex  cursor-pointer flex-col">
                    KIDS<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-white transition-all duration-300 group-hover:w-1/6"></span>
                </li>
            </Link>
        </ul>
    </>

    const handleProfileMenuOpen = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: { currentTarget: React.SetStateAction<null>; }) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    const toggleRightSidebar = () => {
        setOpenRightSidebar(!openRightSidebar);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <Box
            sx={{
                flexGrow: 1,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: isScrolled ? '#000' : 'transparent',
                    transition: 'background-color 0.3s ease',
                    boxShadow: isScrolled ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
                    '&:hover': {
                        backgroundColor: (theme) => alpha(theme.palette.common.black, 0.5),
                    },
                }}
            >
                <Toolbar style={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={openSidebar}
                            onClose={() => setOpenSidebar(false)}
                            sx={{
                                width: 400,
                                flexShrink: 0,
                                '& .MuiDrawer-paper': {
                                    width: 400,
                                    boxSizing: 'border-box',
                                    backgroundColor: 'black',
                                    paddingTop: '90px',
                                },
                                '& ul': {
                                    listStyleType: 'none',
                                    padding: 0,
                                },
                                '& li': {
                                    marginBottom: '20px',
                                },
                            }}
                        >
                            <Typography variant="h6" align="left" marginLeft={7} style={{ color: '#fff' }}>
                                {navLinks}
                            </Typography>
                        </Drawer>


                        {renderMenu}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <TextTypography>
                            Fashion Fusion
                        </TextTypography>
                    </Box>
                    {/* <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search> */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>

                        <IconButton size="large" color="inherit" onClick={toggleRightSidebar}>
                            <Badge badgeContent={''} color="error">
                                <FavoriteIcon></FavoriteIcon>
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={() => setOpen((prev) => !prev)} className="rounded-sm bg-sky-600"
                        >
                            <Badge color="error">
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </Badge>
                        </IconButton>
                        <div ref={dropDownRef} className="relative mx-auto w-fit text-white">
                            <div className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 rounded-sm`} style={{ width: '400px' }}>
                                <div style={{ transform: `translateX(${open ? -380 : (idx + 1) * 20}px)` }} className={`rounded-sm bg-black ${open ? 'opacity-100 duration-500 ' : 'opacity-0 duration-200 '} hover:bg-black`}>
                                    {/* <CartDropDown></CartDropDown> */}
                                </div>
                                {/* {items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className={`rounded-sm bg-black p-2 ${open ? 'opacity-100 duration-500 ' : 'opacity-0 duration-200 '} hover:bg-sky-500`}
                                        style={{ transform: `translateX(${open ? -200 : (idx + 1) * 20}px)` }}
                                    >
                                        {item}
                                    </li>
                                ))} */}
                            </div>
                        </div>
                        {/* <button onClick={()=> setDarkMode(!darkMode)}>
                        {darkMode ? <Sun></Sun>: <Moon></Moon>}
                        </button> */}
                        <Login />
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Right Sidebar */}
            <Drawer
                anchor="right"
                open={openRightSidebar}
                onClose={() => setOpenRightSidebar(false)}
                sx={{
                    width: 500,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 500,
                        boxSizing: 'border-box',
                        backgroundColor: 'black',
                        paddingTop: '20px',
                    },
                }}
            >
                <RightSideBar></RightSideBar>
            </Drawer>

            {renderMobileMenu}
            {renderMenu}
        </Box >
    );
}