import { render } from "@testing-library/react";
import { Avatar } from "../components/avatar";

describe("Avatar component", () => {
  it("should renders correctly with default props", () => {
    const { container } = render(<Avatar src="avatar.jpg" alt="Avatar" />);
    const avatarElement = container.firstChild as HTMLElement;

    expect(avatarElement).toHaveClass(
      "w-[calc(2rem_+_12px)] h-[calc(2rem_+_12px)] border-app_green_300 rounded-lg border-2 border-solid"
    );

    expect(avatarElement).toHaveAttribute("src", "avatar.jpg");
    expect(avatarElement).toHaveAttribute("alt", "Avatar");
  });

  it("should renders correctly without border when hasBorder prop is false", () => {
    const { container } = render(
      <Avatar src="avatar.jpg" alt="Avatar" hasBorder={false} />
    );
    const avatarElement = container.firstChild as HTMLElement;

    expect(avatarElement).toHaveClass("w-8 h-8 rounded-lg");
  });
});
