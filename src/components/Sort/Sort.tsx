import React, { FC, useState } from "react";
import Select from 'react-select';

import styles from './Sort.module.css';

export type IOptions = {
    value: string;
    label: string;
}

interface ISort {
    onChange: (val: IOptions | null) => void;
}

const Sort: FC<ISort> = ({ onChange }) => {
    const options = [{
        value: 'up',
        label: 'По возрастанию'
    }, {
        value: 'down',
        label: 'По убыванию',
    }];


    return (
        <div className={styles.wrapper}>
            <p>Сортировка</p>
            <Select onChange={(val) => onChange(val)}  defaultValue={options[0]} options={options} />
        </div>
    )
}

export default Sort;