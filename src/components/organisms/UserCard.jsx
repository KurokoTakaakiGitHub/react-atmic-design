import Styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/nKC772R_qog"
        alt="プロフィール"
      />
      <p>{user.name}</p>
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.website}</dd>
      </SDl>
    </div>
  );
};

const SDl = Styled.div`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd{
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
