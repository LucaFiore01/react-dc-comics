import { createContext, useState, useMemo } from 'react';
import comicsData from '../comics';

// Creiamo il context
export const BudgetContext = createContext();

// Creiamo il Provider component
export const BudgetProvider = ({ children }) => {
    const [budgetMode, setBudgetMode] = useState(false);

    // Calcoliamo i fumetti filtrati in base alla modalità budget
    const filteredComics = useMemo(() => {
        if (budgetMode) {
            return comicsData.filter(comic => parseFloat(comic.price.replace('$', '')) <= 30);
        }
        return comicsData;
    }, [budgetMode]);

    return (
        <BudgetContext.Provider value={{ budgetMode, setBudgetMode, comics: comicsData, filteredComics }}>
            {children}
        </BudgetContext.Provider>
    );
};
