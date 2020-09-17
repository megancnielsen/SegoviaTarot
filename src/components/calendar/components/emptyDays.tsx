import React from 'react';
import CalendarBox from './calendarBox';
import { v4 } from 'uuid';
import { Hide } from '../utils/mediaQuery';

type Props = {
    amount: number;
};

const EmptyDays = ({ amount = 0 }: Props) => {
    return (
        <Hide size="small">
            {Array(amount)
                .fill(null)
                .map(() => {
                    return (
                        <CalendarBox
                            background="calendar-empty-background"
                            border={{ color: 'calendar-empty-border' }}
                            key={v4()}
                            square
                        />
                    );
                })}
        </Hide>
    );
};

export default EmptyDays;
