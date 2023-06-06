import "./globals.css";

export const metadata = {
  title: "Face Nord Graphisme",
  description:
    "Création de site web et ecommerce dans les Hautes Alpes, Gap, Embrun, Briançon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
