import UserProfile from 'components/UserProfile';
import user from 'allData/user.json'

export default function App() {
    return <div>
        <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
    </div>
    
}