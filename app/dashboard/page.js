import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";
import Login from "@/components/Login";

export const metadata = {
  title: "Mood-Track · dashboard",
};
export default function DashboardPage() {
  // Show the Login by default for authentication purposes
  const isAuthenticated = false;
  let children = <Login />;
  if (isAuthenticated) {
    children = <Dashboard />;
  }
  return <Main>{children}</Main>;
}
