import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../components/header";

const userMock = {
  author: "Mouzinho Raimundo",
  avatarUrl: "https://github.com/Mraimundo.png",
  role: "Frontend Developer",
};

describe("Header Component", () => {
  it("should renders header with correct user information", () => {
    const { getByText } = render(<Header />);

    expect(getByText(userMock.author)).toBeInTheDocument();
    expect(getByText(userMock.role)).toBeInTheDocument();
  });
});
