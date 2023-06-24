import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.module.css';

function Sidebar() {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/projects">
                Projetos
            </a>
            <a className="menu-item" href="/aboutus">
                Sobre Nós
            </a>
            <a className="menu-item" href="/contact">
                Contato
            </a>
        </Menu>
    );
};

export default Sidebar