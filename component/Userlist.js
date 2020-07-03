import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../store/actions/action';

const UserList = () => {
    const dispatch = useDispatch();
    const { participant, winners } = useSelector(state => state.userList);

    useEffect(() => {
        //only fetch data for first time
        if (!participant.length && !winners.length) {
            dispatch(fetchUserData());
        }
    }, []);
    return (
        <div>
            <h2>User List</h2>
            {participant.length > 0 ?
            <table className="table table-striped table-hover ">
            <thead>
                <tr>
                <th></th>
                <th>Participant Name</th>
                </tr>
            </thead>
                <tbody>
                    {participant && participant.map((userName, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{userName}</td>
                        </tr>
                    ))}
                </tbody>
            </table> : <p>The user List is Empty</p>}
            
        </div>
    );
}


export default UserList;