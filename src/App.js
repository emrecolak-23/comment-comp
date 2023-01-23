import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h3>Warning!</h3>
        <div>Are you sure?</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 02:00AM"
          comment="Nice Job"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 05:00PM"
          comment="That awesome"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 09:00AM"
          comment="Not my business"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
