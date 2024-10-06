import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeButton from "@/components/common/global/ThemeButton";
import NavLinks from "@/components/common/global/NavLinks";
import ColorsPalette from "@/components/common/global/ColorsPalette";
import { CursorContextProvider } from "@/context/CursorContext";
import { app_info } from "@/config/app";
import { Analytics } from "@vercel/analytics/react";
import { ProjectContextProvider } from "@/context/ProjectContext";
import { ServiceContextProvider } from "@/context/ServiceContext";
import { is_dark_theme } from "@/config/global";
import { ResumeContextProvider } from "@/context/ResumeContext";
import CardViews from "@/components/common/global/CardViews";

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
      className={cn(
        is_dark_theme ? "dark" : "",
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#333] dark:scrollbar-thumb-[#999]"
      )}
    >
      <body
        className={cn(
          font.className,
          "overflow-x-hidden bg-[--background] relative"
        )}
      >
        <CursorContextProvider>
          <ServiceContextProvider>
            <ResumeContextProvider>
              <ProjectContextProvider>
                <ThemeButton />

                <ColorsPalette />

                <CardViews />

                <NavLinks />

                {children}
              </ProjectContextProvider>
            </ResumeContextProvider>
          </ServiceContextProvider>
        </CursorContextProvider>

        <Analytics />
      </body>
    </html>
  );
}
