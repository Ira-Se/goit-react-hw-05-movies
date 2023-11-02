import { Link } from 'react-router-dom';

export const MovieList = ({ trendList }) => {
  return (
    <ul>
      {trendList.map(item => (
        <Link to={`/movies/${item.id}`} key={item.id}>
          <li>{item.title}</li>
        </Link>
      ))}
    </ul>
  );
};
