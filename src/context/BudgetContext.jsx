import { createContext, useState } from 'react';

// Creiamo il context
export const BudgetContext = createContext();

// Creiamo il Provider component
export const BudgetProvider = ({ children }) => {
    const [budgetMode, setBudgetMode] = useState(false);

    return (
        <BudgetContext.Provider value={{ budgetMode, setBudgetMode }}>
            {children}
        </BudgetContext.Provider>
    );
};
