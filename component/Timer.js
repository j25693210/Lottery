import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { updateWinner } from '../store/actions/action';

const Timer = () => {
    const dispatch = useDispatch();

    const [time, setTime] = useState();
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [isBtnDisable, setDisable] = useState(true);
    const [isBtnShow, setBtn] = useState(false);

    const { participant, winners } = useSelector(state => state.userList);

    const inputChange = e => {
        const value = e.target.value;
        setTime(value);
        if (!!value && value > 0) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }
    
    const counter = () => {
        setDisable(true);
        if(timeToDraw <= 0) {
            const winner = participant[Math.floor(Math.random() * participant.length)];
            const userIndex = participant.indexOf(winner);
            if (userIndex > -1) {
                participant.splice(userIndex, 1);
            }
            winners.push(winner)
            dispatch(updateWinner(winners));
            setMin(0);
            setSec(0);
            setDisable(false);
            setBtn(true);
        } else {
            const minutes = parseInt(((timeToDraw/1000) / 60) % 60); // 分 ex: 90秒
            const seconds = parseInt((timeToDraw/1000) % 60); // 秒
            setMin(minutes);
            setSec(seconds);
            timeToDraw-=1000; 
            setTimeout(counter, 1000);
        }
    }

    let  timeToDraw = time * 60 * 1000;

    return (
    <div>
        <h2>Lottery Time Setting</h2>
        <input type="number" name="setTime" onChange={inputChange} placeholder="Set Lottery Time" /> <span>minutes</span>
        <button className="btn btn-default" onClick={counter}  disabled = {isBtnDisable}>Setting</button>
        {
            isBtnShow && <Link href="/result"><button className="btn btn-primary" disabled = {isBtnDisable}><a>WINNING LIST</a></button></Link>
        }

        <div>
            <h3>
                Time To Lottery Draw: <strong>{min}</strong> min <strong>{sec}</strong>sec
            </h3>
        </div>
        <style jsx>{`
            button {
                margin-left: 10px;
            }
            `}
        </style>
    </div>
    );
};


export default Timer;