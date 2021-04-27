import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Car Insurance',
        amount: 263.13,
        date: new Date(2021, 2, 20)
    },
    {
        id: 'e2',
        title: 'TV License',
        amount: 160.12,
        date: new Date(2021, 2, 30)
    },
    {
        id: 'e3',
        title: 'Food',
        amount: 85.20,
        date: new Date(2021, 3, 18)
    },
    {
        id: 'e4',
        title: 'Internet',
        amount: 56.09,
        date: new Date(2021, 3, 5)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    //return React.createElement('div', {}, React.createElement('h2', {}, 'Let\'s get started!'), React.createElement(Expenses, {items: expenses})); // No JSX

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
