import React, { useContext } from 'react';
import { isBefore, isSameDay } from 'date-fns';
import format from 'date-fns/format';
import { Text, Box, ResponsiveContext, DataTable } from 'grommet';
import styled from 'styled-components';
import Events from './events';
import CalendarBox from './calendarBox';
import { Hide, Show } from '../utils/mediaQuery';

type DayProps = { date: Date; type: string };

const DayText = styled(Text)<{ type: string }>`
    text-decoration: ${props =>
        props.type === 'past' ? 'line-through' : 'inherit'};
    position: absolute;
    bottom: 5px;
    right: 10px;
`;

const CalendarDay = ({ date, type }: DayProps) => {
    return (
        <DayText
            color={`calendar=${type}-text`}
            type={type}
            size="large"
            a11yTitle="Day Number"
            textAlign="end"
        >
            {format(date, 'dd')}
        </DayText>
    );
};

const RowDay = ({ date, type }: DayProps) => (
    <Box width="xsmall">
        <Text
            color={`calendar-${type}-text`}
            size="large"
            a11yTitle="Day Number"
        >
            {format(date, 'dd')}
        </Text>

        <Text color={`calendar-${type}-text`} size="small" a11yTitle="day">
            {format(date, 'cccc')}
        </Text>
    </Box>
);

type Props = ModalData & {
    onClick?: () => void;
};

const Day = ({ date, events, onClick }: Props) => {
    const size = useContext(ResponsiveContext);
    const today = new Date();
    const isToday = isSameDay(date, today);
    const hasPast = isBefore(date, today) && !isToday;
    const dayType = (isToday && 'today') || (hasPast && 'past') || 'day';
    const phoneViewport = size === 'small';

    if (phoneViewport && (hasPast || events.length === 0) && !isToday)
        return null;

    return (
        <CalendarBox
            background={`calendar=${dayType}-background`}
            border={{ color: `calendar=${dayType}-border` }}
            pad={phoneViewport ? 'small' : 'xsmall'}
            onClick={onClick}
            square
        >
            <Box direction="row" fill="vertical">
                <Show size="small">
                    <RowDay date={date} type={dayType} />
                </Show>
                <Events events={events} hasPast={hasPast} />
                <Hide size="small">
                    <CalendarDay date={date} type={dayType} />
                </Hide>
            </Box>
        </CalendarBox>
    );
};

export default Day;
