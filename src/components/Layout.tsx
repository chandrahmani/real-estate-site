import { ReactNode } from "react";
import { Footer } from "./common/Footer";
import Navbar from "./core/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div id="1">
      <Navbar />
      <main className="content-panel">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
