import Layout from "@/components/base/layout";
import Hero from "@/components/page/home/hero";
import About from "@/components/page/home/about";
import Orders from "@/components/page/home/orders";
import ValueProp from "@/components/page/home/valueProp";
import CustomerReview from "@/components/page/home/review";
import Onboarding from "@/components/page/home/onboarding";

export default function Landing() {
    return (
        <Layout>
            <Hero />
            <About />
            <Orders />
            <ValueProp/>
            <Onboarding />
            <CustomerReview /> 
        </Layout>
    )
}
