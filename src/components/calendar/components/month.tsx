import React from 'react';
import { getDaysInMonth, getISODay } from 'date-fns';
import format from 'date-fns/format';
import { Heading, Box } from 'grommet';
import Day from './day';
import EmptyDays from './emptyDays';
import Weekdays from './weekdays';
import { Hide } from '../utils/mediaQuery';
import styled from 'styled-components';
import buildDaysWithEvents from '../utils/buildDaysWithEvents';

type Props = MonthInfo & {
    openModal: (modalData: ModalData) => void;
};

const MonthContainer = styled.div`
    border-radius: 12px;
    border: 4px blue solid;
`;
// border: 4px ${props => props.theme.global.colors.border} solid;

const Month = ({ events, startDate, openModal }: Props) => {
    // const dayNumber = getISODay(startDate);
    const test = getISODay(startDate);
    console.log(test);

    const dayNumber = 10;
    // const days = getDaysInMonth(startDate);
    const days = 30;
    const emptyDays = 7 - ((dayNumber + days) % 7);

    // const daysWithEvents = buildDaysWithEvents(startDate, events);
    const daysWithEvents: ModalData[] = [{ date: new Date(), events }];
    // a11yTitle={`Month of ${format(startDate, 'MMMM yyyy')}`}
    return (
        <Box margin="medium">
            <Heading>
                {/* <b>{`${format(startDate, 'MMMM')}`}</b> */}
                <b>{`${startDate.toString()}`}</b>
                {/* {format(startDate, 'yyyy')} */}
                {startDate.toString()}
            </Heading>
            <MonthContainer>
                <Hide size="small">
                    <Weekdays />
                </Hide>
                <Box direction="row" wrap>
                    {daysWithEvents.map(modalData => {
                        const onClick =
                            modalData.events.length > 0
                                ? () => openModal(modalData)
                                : undefined;

                        return (
                            <Day
                                // key={format(modalData.date, 'dd')}
                                onClick={onClick}
                                {...modalData}
                            />
                        );
                    })}

                    {emptyDays !== 7 && <EmptyDays amount={emptyDays} />}
                </Box>
            </MonthContainer>
        </Box>
    );
};

export default React.memo(Month);
