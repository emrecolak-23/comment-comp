import CommentDetail from './CommentDetail';

import { faker } from '@faker-js/faker';

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 02:00AM"
        comment="Nice Job"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 05:00PM"
        comment="That awesome"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 09:00AM"
        comment="Not my business"
        image={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
