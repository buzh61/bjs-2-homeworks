class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            console.error('Такой ID уже есть');
            return
        }
        return this.alarmCollection.push({id, time, callback})
    }

    removeClock(id) {
        let searchAlarmById = this.alarmCollection.find((item) => item.id === id);

        if (searchAlarmById !== undefined) {
            this.alarmCollection.splice(this.alarmCollection.indexOf(searchAlarmById), 1)
        }

        

        if (searchAlarmById === undefined) {
            return false
        } else {
            return true
        }
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    }

    start() {

        let checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
                return this.callback
            }
        }

        if (this.timerId === null) {
            setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
                this.timerId = alarm.id;
            }, 1000)
        }
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(element => console.log(`Будильник №${element.id} установлен на ${element.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}