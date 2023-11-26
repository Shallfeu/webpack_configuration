import { useState } from 'react';
import styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            Platform: {__PLATFORM__}
            <nav>
                <Link to="/about">about</Link>
                <Link to="/shop">shop</Link>
            </nav>
            {count}
            <div>
                <button className={styles.button} onClick={() => setCount((prev) => prev + 1)}>
                    +
                </button>
                <button className={styles.button} onClick={() => setCount((prev) => prev - 1)}>
                    -
                </button>
            </div>
            <Outlet />
        </div>
    );
}
