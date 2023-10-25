import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.gif';

const Preloader = () => {
    return (
        <div className={s.containerPreloader}>
            <img className={s.preloader} src={preloader} />
        </div>
    );
};

export default Preloader;