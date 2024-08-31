"use client"

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { Toaster } from 'react-hot-toast';

const ThemeProvider = ({ children, ...props } : ThemeProviderProps) => {
  return (
    <NextThemeProvider {...props}>
      {children}
      <Toaster/>
    </NextThemeProvider>
  )
}

export default ThemeProvider