import DesktopTopNav from "./components/desktop/DesktopTopNav"
import DesktopUpperNav from "./components/desktop/DesktopUpperNav"
import Header from "./components/Header"
import Programs from "./components/Programs"

export default function Home() {
  return (
    <main>
      <DesktopTopNav />
      <DesktopUpperNav />
      <Header />
      <Programs />
    </main>
  );
}
