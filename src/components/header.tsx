import { Avatar } from "./avatar";
import { Logo } from "./logo";

const user = {
  author: "Mouzinho Raimundo",
  avatarUrl: "https://github.com/Mraimundo.png",
  role: "Frontend Developer",
};

export function Header() {
  return (
    <header className="flex justify-center h-24 bg-app_gray_900">
      <section className="w-full flex justify-between items-center mx-auto my-0 px-6 py-0">
        <Logo />
        <div className="flex items-center gap-4">
          <div>
            <strong className="block text-base">{user.author}</strong>
            <span className="flex text-sm text-app_gray_400 leading-[1.85rem]">
              {user.role}
            </span>
          </div>
          <Avatar src={user.avatarUrl} />
        </div>
      </section>
    </header>
  );
}
