import dayjs from 'dayjs';

const formatTime = time => dayjs(time).format('DD MMMM, YYYY');

export default formatTime;

export function calculateTime(time){
    const calc = dayjs(new Date()).unix() - dayjs(time).unix()
    if(calc < 60){
        return calc + ' giây trước'
    }
    if(calc < 60*60){
        return Math.floor(calc/60) + ' phút trước'
    }
    if(calc < 60*60*24){
        return Math.floor(calc/60/60) + ' giờ trước'
    }
    if(calc < 60*60*24*30){
        return Math.floor(calc/60/60/24) + ' ngày trước'
    }
    if(calc < 60*60*24*30*12){
        return Math.floor(calc/60/60/24/30) + ' tháng trước'
    }
    return formatTime(time)
}