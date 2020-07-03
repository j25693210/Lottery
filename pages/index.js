import Layout from '../component/Layout';
import Timer from '../component/Timer';
import UserList from '../component/Userlist';

const Index = () => (
    <Layout>
        <h1>Lottery Game</h1>
        <div className="lottery-block">
            <Timer />
            <UserList />
        </div>
        <style jsx>{`
            h1 {
                text-align: center;
            }

            .lottery-block {
                display: flex;
                justify-content: space-between;
            }
            `}
        </style>
    </Layout>
);


export default Index;