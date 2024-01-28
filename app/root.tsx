import { cssBundleHref } from "@remix-run/css-bundle";
import tailwindStylesheetUrl from './styles/tailwind.css'
import fontStylesheetUrl from './styles/font.css';
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {
    title: "Boring Website",
    description: "Come check my journey to become a software engineer.",
}];
  
}


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStylesheetUrl },
  { rel: "stylesheet", href: fontStylesheetUrl },
  
  {
    rel: 'icon',
    type:'image/svg+xml',
    href: '/favicon.svg',
  },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];
export default function App() {
  return (
    <html lang="en">
      <head>
      <Meta />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,viewport-fit=cover"
        />
        
        <Links />
      </head>
      <body className="bg-background">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
