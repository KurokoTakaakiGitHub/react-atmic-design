import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/UserCard";
import "./styles.css";

const user = {
  name: "ねこ",
  image: "https://source.unsplash.com/nKC772R_qog",
  email: "1111@aaa.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https:HogeHoge.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
