import React from "react";


interface SetupLayoutProp {
  children: React.ReactNode;
}

const SetupLayout = ({ children }: SetupLayoutProp) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default SetupLayout;
