import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "react-hot-toast"; // Importation de Toaster

export const metadata = {
  title: "RexploR",
  description: "An app to help you find your next adventure",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
        <Toaster position="top-right" reverseOrder={false} /> {/* Ajout du Toaster ici */}
      </body>
    </html>
  );
}
