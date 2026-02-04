import { createContext, useState } from 'react';

// Creiamo il context
export const BudgetContext = createContext();

// Creiamo il Provider component
export const BudgetProvider = ({ children }) => {
    const [isBudgetMode, setIsBudgetMode] = useState(false);

    const toggleBudgetMode = () => {
        setIsBudgetMode(!isBudgetMode);
    };

    return (
        <BudgetContext.Provider value={{ isBudgetMode, toggleBudgetMode }}>
            {children}
        </BudgetContext.Provider>
    );
};
