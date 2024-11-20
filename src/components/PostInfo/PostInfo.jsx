import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo = ({ post }) => {
  if (!post) {
    return <div>Post data is missing</div>;
  }

  const { title, body, user, comments } = post;

  return (
    <div className="PostInfo">
      <h2 className="PostInfo__title">{title}</h2>
      <p className="PostInfo__body">{body}</p>
      <UserInfo user={user} />
      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <div data-cy="NoCommentsMessage">No comments available</div>
      )}
    </div>
  );
};
