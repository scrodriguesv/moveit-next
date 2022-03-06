import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile () {
    const { level } = useContext(ChallengesContext);



    return (
        <div className={styles.profileContainer}> 
            <img src="https://i.pinimg.com/736x/f4/09/72/f409725727394e809ad313303e1b1179.jpg" alt="Sara Rodrigues"/>
            <div>
                <strong> Sara Rodrigues </strong>
                <p>
                    <img src='icons/level.svg' alt='Level'/>
                    Level {level} 
                </p>
            </div>
        </div>

    );
}