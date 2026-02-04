import { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const NavBar = () => {

    // Utilizziamo il context per accedere allo stato budgetMode
    const { budgetMode, setBudgetMode } = useContext(BudgetContext);

    // dati relativi alla navbar per i link di navigazione
    const links = [
        { id: 1, text: 'Characters', url: '#', current: false },
        { id: 2, text: 'Comics', url: '#', current: false },
        { id: 3, text: 'Movies', url: '#', current: false },
        { id: 4, text: 'TV', url: '#', current: false },
        { id: 5, text: 'Games', url: '#', current: false },
        { id: 6, text: 'Collectibles', url: '#', current: false },
        { id: 7, text: 'Viedos', url: '#', current: false },
        { id: 8, text: 'Fans', url: '#', current: false },
        { id: 9, text: 'News', url: '#', current: false },
        { id: 10, text: 'Shop', url: '#', current: false },
    ];


    return (
        <nav>
            <ul>
                {links.map((link) => {
                    return (
                        <li key={link.id}>
                            <a href={link.url} className={link.current ? 'active' : ''}>
                                {link.text}
                            </a>

                        </li>
                    )
                })}

            </ul>
            <button onClick={() => setBudgetMode(!budgetMode)}>
                {budgetMode ? 'Disattiva Modalità Budget' : 'Attiva Modalità Budget'}
            </button>
        </nav>
    )

}

export default NavBar 