import { ProfileDropdown } from "./ProfileDropdown";

export function CheckIfLoggedInDropdown() {
  return localStorage.getItem("user") ? <ProfileDropdown /> : "";
}
