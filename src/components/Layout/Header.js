import { Fragment } from 'react';
import classes from './Header.module.scss';

import mealsImage from '../../assets/meals.jpg';

const Header = props => {
return <Fragment>
    <header className={classes.header}>
        <h1>Reacting to Hunger</h1>
        <div>
            <img src={mealsImage} alt="Example of a delicious meal" />
        </div>
    </header>
</Fragment>
};

export default Header;