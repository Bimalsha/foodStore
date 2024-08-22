import React from 'react'
import {
    ClerkProvider
  } from '@clerk/nextjs'

interface SetupLayoutProp{
    children:React.ReactNode;
}

const SetupLayout = ({children}:SetupLayoutProp) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
    
  )
}

export default SetupLayout