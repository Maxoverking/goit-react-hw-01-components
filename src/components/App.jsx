import css from './App.module.css'
import {UserProfile} from 'components/profile/UserProfile';
import user from 'allData/user.json'
import {Statistics} from 'components/statistics/Statistics';
import data from 'allData/data.json'

export function App() {
    return  <div className={css.app}>
      <UserProfile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
    
    
}