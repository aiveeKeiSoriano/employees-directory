import './styles.css'
import UserCard from './UserCard'
import users from './users'

function Home(props) {
    return (
        <div className='home'>
            <h1>Users at Acme Inc.</h1>
            <div className="cards">
                {users.map(el => <UserCard name={el.name.title + ' ' + el.name.first + ' ' + el.name.last} email={el.email} pic={el.picture.thumbnail} />)}
            </div>
        </div>
    )
}

export default Home;