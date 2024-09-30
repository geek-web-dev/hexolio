import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeButton from "@/components/common/ThemeButton";
import NavLinks from "@/components/common/NavLinks";
import ColorsPalette from "@/components/common/ColorsPalette";
import { CursorContextProvider } from "@/context/CursorContext";
import { app_info } from "@/config/app";
import { Analytics } from "@vercel/analytics/react";
import ProjectCardView from "@/components/common/ProjectCardView";
import { ProjectContextProvider } from "@/context/ProjectContext";
import { Suspense } from "react";
import PageLoader from "@/components/common/PageLoader";

const font = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Select specific weights
});

const { title, description, keywords } = app_info;

export const metadata: Metadata = {
  title,
  description,
  keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#333] dark:scrollbar-thumb-[#999]"
    >
      <body
        className={cn(
          font.className,
          "overflow-x-hidden bg-[--background] relative"
        )}
      >
        <Suspense fallback={<PageLoader />}>
          <ProjectContextProvider>
            <CursorContextProvider>
              <ThemeButton />

              <ColorsPalette />

              <ProjectCardView />

              <NavLinks />

              {children}
            </CursorContextProvider>

            <Analytics />
          </ProjectContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
