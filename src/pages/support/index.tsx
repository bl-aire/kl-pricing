import Banner from "@/components/ui/banner";
import Layout from "@/components/base/layout";
import Faq from "@/components/page/support/faq";
import Form from "@/components/page/support/form";
import Contact from "@/components/page/support/contact";

const title = "Help & Support"
const subtitle = "We are here to make your experience smooth and worry-fee. We'd love to hear from you."

export default function Trends() {
    return (
        <Layout>
            <Banner title={title} subtitle={subtitle} />
            <Faq />
            <Contact />
            <Form />
        </Layout>
    )
}
