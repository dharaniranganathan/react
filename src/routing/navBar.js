// NavBar.js
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [hooksSubMenuOpen, setHooksSubMenuOpen] = useState(false);
    const [componentsSubMenuOpen, setComponentsSubMenuOpen] = useState(false);

    const handleHooksSubMenuToggle = () => {
        setHooksSubMenuOpen(!hooksSubMenuOpen);
        if (componentsSubMenuOpen) {
            setComponentsSubMenuOpen(false); // Close the other submenu
        }
    };

    const handleComponentsSubMenuToggle = () => {
        setComponentsSubMenuOpen(!componentsSubMenuOpen);
        if (hooksSubMenuOpen) {
            setHooksSubMenuOpen(false); // Close the other submenu
        }
    };
    const handleSubMenuItemClick = () => {
        setComponentsSubMenuOpen(false);
        setHooksSubMenuOpen(false);
    };

    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/home" style={styles.navLink}>Home</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/nestedAxios" style={styles.navLink}>Nested Axios</Link>
                </li>
                <li style={styles.navItem}>
                    <div style={styles.navLink} onClick={handleHooksSubMenuToggle}>
                        Hooks
                    </div>
                    {hooksSubMenuOpen  && (
                        <ul style={styles.subMenu}>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="/classDemo" style={styles.navLink}>useState</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="useEffectDemo" style={styles.navLink}>useEffect</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="useContextDemo" style={styles.navLink}>useContext</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="#" style={styles.navLink}>useRef</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="#" style={styles.navLink}>useReducer</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="#" style={styles.navLink} onClick={handleSubMenuItemClick}>useCallback</Link>
                            </li>
                            <li style={styles.subMenuItem} onClick={handleSubMenuItemClick}>
                                <Link to="UseMemoDemo" style={styles.navLink}>useMemo</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li style={styles.navItem}>
                    <div style={styles.navLink} onClick={handleComponentsSubMenuToggle}>
                        Components
                    </div>
                    {componentsSubMenuOpen  && (
                        <ul style={styles.subMenu}>

                            <li style={styles.subMenuItem}>
                                <Link to="/classDemo" style={styles.navLink} onClick={handleSubMenuItemClick}>Class</Link>
                            </li>
                            <li style={styles.subMenuItem}>
                                <Link to="/functionDemo" style={styles.navLink} onClick={handleSubMenuItemClick}>Functional</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li style={styles.navItem}>
                    <Link to="/conditionalDemo" style={styles.navLink}>Conditional</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/curd" style={styles.navLink}>Crud Operation</Link>
                </li>
                <li style={styles.navItem}>
                    <Link to="/login" style={styles.navLink} >logout</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px',
    },
    navList: {
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'space-around',
    },
    navItem: {
        marginRight: '20px',
        position: 'relative',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
    subMenu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        background: '#444',
        listStyle: 'none',
        margin: 0,
        padding: '10px',
    },
    subMenuItem: {
        marginBottom: '10px',
    },
};

export default NavBar;
