import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import { spawnBlock } from '../App';

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    return (
        <li className="menu-items" ref={ref}>
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : 'false'}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                items.url ? (
                    <a href={items.url}>{items.title}</a>
                ) : (
                    <button onClick={() => buttonAction(items.title)}>{items.title}</button>
                )
            )}
        </li>
    );
};

function buttonAction(title) {
    switch (title) {
        default:
            break;
        case "Source Default":
            spawnBlock();
            break;
    }

}


export default MenuItems;