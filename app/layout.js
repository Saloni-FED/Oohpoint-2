import Sidebar from "@/components/Sidebar";
import "./globals.css";
import Header from "@/components/Header";
import { MyProvider } from "@/context/MyContext";

export const metadata = {
  title: "OOH POINT",
  description: "OOH POINT Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <MyProvider>
          <div className="flex justify-between items-center w-full h-screen">
            <Sidebar />
            <div className="flex flex-col justify-start items-center md:w-[calc(100%-19rem)] w-full bg-oohpoint-grey-200 h-screen overflow-y-scroll">
              <Header />
              {children}
            </div>
          </div>
        </MyProvider>
      </body>
    </html>
  );
}
