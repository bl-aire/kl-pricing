import Header from "@/components/base/header";
import Footer from "@/components/base/footer";

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    return (
        <main>
            <Header />
                {children}
            <Footer />
        </main>
    )
}
