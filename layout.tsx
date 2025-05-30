
export const metadata = {
  title: "SmartBet AI",
  description: "AI bazirane predikcije za sportsko klađenje",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
