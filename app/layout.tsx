import React from "react";

export default function RootLayout({ children, header, footer }) {
  return (
    <html lang="en">
      <body>
        <header>{header}</header>
        <main>{children}</main>
        <footer>{footer}</footer>
      </body>
    </html>
  );
}
