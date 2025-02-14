import "./globals.css";
import { Provider } from "@/components/ui/provider"

export const metadata = {
  title: "Pathner",
  description: "An app to help you find your next adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      <Provider>{children}</Provider>
      </body>
    </html>
  );
}