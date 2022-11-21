import user from 'data/user.json';
import statData from 'data/statistic-data.json';
import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
    </div>
  );
};
