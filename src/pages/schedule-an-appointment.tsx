import React, { useState, useMemo, useCallback } from 'react';
import { Box } from 'grommet';
import Layout from '../components/layout';
// import { graphql, useStaticQuery } from 'gatsby';
import groupEventsByMonth from '../components/calendar/utils/groupEventsByMonth';
import ModalEvent from '../components/calendar/utils/modalEvent';
import Month from '../components/calendar/components/month';
import format from 'date-fns/format';

import config from '../../site-config';

export default () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalData, setModalData] = useState<ModalData>();

    const {
        calendar: { limitMonthInTheFuture },
    } = config;

    const months = useMemo(
        () =>
            groupEventsByMonth(
                [
                    {
                        startDate: '05-21-1994',
                        events: {
                            id: 'test',
                            eventName: 'test',
                            date: '05-21-1994',
                            place: 'my house',
                            eventLink: 'no link',
                        },
                    },
                ],
                limitMonthInTheFuture
            ),
        [
            [
                {
                    id: 'test',
                    eventName: 'test',
                    date: 'today',
                    place: 'my house',
                    eventLink: 'no link',
                },
            ],
            limitMonthInTheFuture,
        ]
    );

    const openModal = useCallback((data: ModalData) => {
        setModalData(data);
        setShowModal(true);
    }, []);

    return (
        <Layout fullMenu>
            <Box id="calendar" animation="fadeIn">
                {months.map(month => (
                    <Month
                        // key={format(month.startDate, 'MM')}
                        key={month.startDate.toString()}
                        openModal={openModal}
                        {...month}
                    />
                ))}
            </Box>
            {showModal && (
                <ModalEvent
                    onClose={() => setShowModal(false)}
                    {...modalData!}
                />
            )}
        </Layout>
    );
};
