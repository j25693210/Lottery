import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Layout from '../component/Layout';
import { resetResult } from '../store/actions/action';


const result = () => {
    const dispatch = useDispatch();
    const { winners } = useSelector(state => state.userList);

    const reset = () => {
        dispatch(resetResult());
    }
    return (
        <Layout>
            <h2>List Of Winners</h2>
            {
                winners.length ? 
                <table className="table table-striped table-hover ">
                <thead>
                    <tr>
                    <th></th>
                    <th>Winners Name</th>
                    </tr>
                </thead>
                    <tbody>
                        {winners && winners.map((userName, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{userName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> : 
                <h3>There is no user in the list, Please go to <Link href="/"><a>Home</a></Link> page and draw it</h3>
            }
            {winners.length > 0 && <button className="btn btn-default" onClick={reset}>Reset</button>}
            
        </Layout>
    );
}

export default result;

