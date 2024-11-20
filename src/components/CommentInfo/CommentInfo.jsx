import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const { name, email, body } = comment || {};

  return (
    <div className="CommentInfo">
      <h3 className="CommentInfo__name">{name}</h3>
      <a className="CommentInfo__email" href={`mailto:${email}`}>
        {email}
      </a>
      <p className="CommentInfo__body">{body}</p>
    </div>
  );
};
