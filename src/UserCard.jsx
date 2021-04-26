function UserCard(props) {
    return (
        <div className='card'>
            <img src={props.pic} alt="" />
            <div className="user-info">
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default UserCard;