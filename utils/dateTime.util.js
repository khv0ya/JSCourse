class DateTimeUtil {
    today() {
        return new Date();
    }

    setYear(date) {
        let currentDate =  new Date();
        currentDate.setFullYear(date.getFullYear());
        return currentDate;
    }

    daysDifference(dateLeft, dateRight) {
        const millisInDay = 86400000;
        return Math.floor((dateLeft.getTime() - dateRight.getTime())/millisInDay);
    }
}

module.exports = new DateTimeUtil();