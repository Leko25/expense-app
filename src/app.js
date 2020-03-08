import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from the dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        Add Expense page
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage}/>
            <Route path="/create" component={AddExpensePage} />
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));