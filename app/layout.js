import ThemeProviderContext from "../src/context/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <ThemeProviderContext>{children}</ThemeProviderContext>
      </body>
    </html>
  );
}
