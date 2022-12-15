import {UserProfile} from 'components/profile/UserProfile';
import user from 'allData/user.json'
import css from './App.module.css'

export function App() {
    return  <div className={css.app}>
      <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
           />
    </div>
    
    
}