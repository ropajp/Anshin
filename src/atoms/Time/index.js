import React from 'react';
import moment from 'moment';
import {containPresenter} from '../../utils/HoC';

// プレゼンター
export const TimePresenter = props => <time {...props}/>;

// コンテナー
export const TimeContainer = ({
    presenter,
    children: value,
    dateTime,
    format = 'MM月DD日(ddd)HH:mm',
    ...props
}) => {
    value = parseInt(value, 10);

    var children;
    if(!isValid(value)) {
        children = '有効な時間表現ではありません。';
    } else {
        children = formatDatetime(value, format);
    }

    if(!dateTime) {
        dateTime = formatDatetime(value);
    }
    
    return presenter({ children, dateTime, ...props });
};

const Time = containPresenter(TimeContainer, TimePresenter);
export default Time;

moment.locale();

function isValid(unixtime) {
    return moment(unixtime, 'x', true).isValid();
}

function formatDatetime(datetime, format='YYYY-MM-DDTHH:mm') {
    return moment(datetime).format(format);
}
