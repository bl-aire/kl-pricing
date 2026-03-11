import { useScrollIntoView } from '@mantine/hooks';
import { Stack, Group, Box, Paper, Title, Text, List } from "@mantine/core";

import styles from "./legal.module.scss";

import Banner from '@/components/ui/banner';
import LandingLayout from "@/components/base/layout";

const title = "Cookie Policy";
const subtitle = "Last updated: August 29, 2025";

export default function CookiePolicy() {
    const introductionEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const cookiesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const personalDataEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const legalBasisEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const cookieTypesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const thirdPartyCookiesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const cookieDurationEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const rightsEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const managingCookiesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const dataTransferEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const dataProtectionEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const childrenEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const securityEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const changesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const complaintsEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const contactEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });

    return (
        <LandingLayout>
            <Banner title={title} subtitle={subtitle} />

            <section className={styles.legal}>
                <Group align="flex-start" justify="space-between">
                    <Box className={styles.legal__panel}>
                        <List spacing="xs" listStyleType="none">
                            <List.Item fz={12} fw={500} tt="uppercase">On this page</List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => introductionEl.scrollIntoView()}>
                                Introduction
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => cookiesEl.scrollIntoView()}>
                                What Are Cookies?
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => personalDataEl.scrollIntoView()}>
                                Personal Data Processed Through Cookies
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => legalBasisEl.scrollIntoView()}>
                                Legal Basis for Using Cookies
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => cookieTypesEl.scrollIntoView()}>
                                Types of Cookies We Use
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => thirdPartyCookiesEl.scrollIntoView()}>
                                Third-Party Cookies
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => cookieDurationEl.scrollIntoView()}>
                                Cookie Duration
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => rightsEl.scrollIntoView()}>
                                Your Rights as a Data Subject
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => managingCookiesEl.scrollIntoView()}>
                                Managing Your Cookie Choices
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => dataTransferEl.scrollIntoView()}>
                                Cross-Border Data Transfers
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => dataProtectionEl.scrollIntoView()}>
                                Data Protection Impact Assessments (DPIAs)
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => childrenEl.scrollIntoView()}>
                                Children's Privacy
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => securityEl.scrollIntoView()}>
                                Security of Personal Data
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => changesEl.scrollIntoView()}>
                                Changes to This Cookies Policy
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => complaintsEl.scrollIntoView()}>
                                Complaints and Regulatory Recourse
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => contactEl.scrollIntoView()}>
                                Contact Us
                            </List.Item>
                        </List>
                    </Box>

                    <Paper className={styles.legal__paper}>
                        <Stack gap="xl">
                           {/* <Stack>
                                <Title order={1} fw={600}>
                                    Terms of Service
                                </Title>
                                <Text fw={300} size="sm" lh="2">
                                    We appreciate you for using our website and subscribing to our products
                                    and services. These services and products include offerings such
                                    payment platform, logistics platform, traceability and tracking
                                    features, pricing models, access to finance, and trade platform
                                    are all accessible through mobile phone devices, tablets, and computers
                                    and are provided by Agriarche Limited (“Agriarche”), whose address is
                                    Plot 502, Dalaba Street, First Floor, Novare Central Office, Wuse Zone 5,
                                    Wuse, Abuja - Nigeria.
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    By using our products and services, you are bound by the terms and
                                    conditions hereinafter appearing. You are kindly requested to read these
                                    Terms and Conditions carefully before using our website
                                    - <Text td="underline" component="a">https://www.kasuwa.agriarche.com.</Text>
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    Please note that we are at liberty to introduce additional terms or
                                    product requirements as circumstances may demand from time to time, which
                                    may then govern the offerings and become part of your agreement
                                    with us if you use them.
                                </Text>
                                <Text fw={300} size="sm" lh="2">
                                    The words in which the initial letter is capitalized have meanings
                                    defined under the following conditions. The following definitions shall
                                    have the same meaning regardless of whether they appear in
                                    singular or in the plural.
                                </Text>
                            </Stack>*/}

                            {/* Introduction */}
                            <Box ref={introductionEl.targetRef}>
                                <Stack>
                                    <Stack gap="sm">
                                        <Title order={2} fw={600}>Introduction</Title>
                                        <Text fw={300} size="sm" lh="2">
                                            Agriarche Limited operates the Agriarche website and the Kasuwa mobile and web application (collectively, the "Platform"). This Cookies Policy explains what cookies are, how we use them, your rights and choices, and how you may contact us with questions or concerns.
                                        </Text>
                                        <Text fw={300} size="sm" lh="2">
                                            This policy applies to all users of our Platform. Agriarche is committed to full compliance with the Nigeria Data Protection Act, 2023 (NDPA), as administered by the Nigeria Data Protection Commission (NDPC), including the NDPC General Application and Implementation Directive (GAID) 2025, as well as the EU General Data Protection Regulation (GDPR) for users located in the European Economic Area.
                                        </Text>
                                        <Text fw={300} size="sm" lh="2">
                                            Where required by law, we will obtain your explicit, freely given, and informed consent before placing non-essential cookies on your device.
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>

                            {/* Cookies */}
                            <Box ref={cookiesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        What Are Cookies?
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Cookies are small text files stored on your device (computer, smartphone, tablet, or other internet-enabled device) when you visit a website or use a mobile application. They allow the Platform to recognize your device, remember your preferences, and improve your overall experience.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        We may also use similar tracking technologies such as web beacons, pixels, local storage, and session storage. For ease of reference, all such technologies are referred to collectively as "cookies" in this policy. Where these technologies process personal data, they are subject to the same protections as cookies under the NDPA 2023.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Personal Data */}
                            <Box ref={personalDataEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Personal Data Processed Through Cookies
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Under the NDPA 2023, "personal data" means any information that can identify a natural person. Cookies may collect and process personal data including:
                                    </Text>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Device identifiers and IP addresses
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Browser type and settings
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Pages visited and time spent on the Platform
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh={2}>
                                            Referring URLs and clickstream data
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Advertising identifiers
                                        </List.Item>

                                    </List>
                                    <Text fw={300} size="sm" lh="2">
                                        Agriarche acts as a Data Controller in respect of personal data collected through cookies on our Platform, as defined under Section 65 of the NDPA 2023.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Legal Basis for Using Cookies */}
                            <Box ref={legalBasisEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Legal Basis for Using Cookies
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        The NDPA 2023 recognises lawfulness, fairness, transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity, and confidentiality as the core principles governing data processing. Our use of cookies is grounded in the following lawful bases:
                                    </Text>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Consent (NDPA 2023, Section 25(1)(a); GDPR Art. 6(1)(a)): For all non-essential cookies, we rely on your explicit, freely given, specific, informed, and unambiguous consent. Consent must be indicated through an affirmative action — silence, inactivity, or pre-checked boxes do not constitute valid consent. You may withdraw consent at any time.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Contractual Necessity (NDPA 2023, Section 25(1)(b)): Essential cookies are used to deliver the services you have requested from us.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Legal Obligation (NDPA 2023, Section 25(1)(c)): Where processing is necessary to comply with applicable Nigerian law or regulatory requirements.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh={2}>
                                            Legitimate Interests (NDPA 2023, Section 25(1)(f); GDPR Art. 6(1)(f)): Data Controllers may process personal data based on legitimate interests, provided such interests are not overridden by the data subject's fundamental rights, freedoms, and interests. We rely on this basis for limited security and fraud-prevention analytics only.
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Types of Cookies We Use */}
                            <Box ref={cookieTypesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Types of Cookies We Use
                                    </Title>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Essential Cookies: These cookies are strictly necessary for the Platform to operate. They cannot be disabled as they are integral to providing the services you have requested. They do not require your consent under the NDPA 2023 or GAID 2025.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Functional Cookies: These cookies enhance the functionality and personalisation of the Platform. They require your consent before being activated.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Analytics Cookies: These cookies help us understand how users engage with our Platform, enabling us to improve its design and performance. They require your consent and, where possible, data is aggregated or anonymised.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Advertising & Marketing Cookies: These cookies are used to deliver advertisements that are relevant to your interests. They track activity across our Platform and may involve third-party advertising partners. These cookies require your explicit consent under the NDPA 2023 and GAID 2025.
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Third-Party Cookies */}
                            <Box ref={thirdPartyCookiesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Third-Party Cookies
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        We work with trusted third-party service providers who may place cookies on our Platform on our behalf. These include, but are not limited to:
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Google Analytics: for web traffic and usage analysis
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Meta (Facebook) Pixel: for advertising performance tracking
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Other advertising networks: for delivering relevant ads
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Microsoft Clarity: for web traffic and usage analysis
                                        </List.Item>
                                    </List>
                                    <Text fw={300} size="sm" lh="2">
                                        Each of these third parties operates under its own privacy and cookie policies. We encourage you to review those policies independently. We enter into **Data Processing Agreements** with third-party processors as required under Section 37 of the NDPA 2023, to ensure your data is handled appropriately.

                                        An up-to-date list of third-party cookies in use is available upon request at **privacy@kasuwa.com**.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Cookie Duration */}
                            <Box ref={cookieDurationEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Cookie Duration
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Cookies are stored for varying periods depending on their type:
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Session Cookies: Temporary; expire when you close your browser or end your session.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Persistent Cookies: Stored on your device for a defined period (e.g., 30 days, 12 months) or until you delete them, in line with the storage limitation principle under the NDPA 2023.
                                        </List.Item>
                                    </List>
                                    <Text fw={300} size="sm" lh="2">
                                        Specific retention periods for each category of cookie are disclosed in our Cookie Preference Centre.
                                    </Text>
                                </Stack>
                            </Box>

                            {/** Your Rights as a Data Subject */}

                            <Box ref={rightsEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Your Rights as a Data Subject
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Under the NDPA 2023, you have the following rights in relation to your personal data processed through cookies:
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to be Informed: You have the right to know how and why your data is being collected and used.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right of Access: You may request confirmation of whether we process your personal data and obtain a copy of that data.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to Rectification: You may request correction of inaccurate or incomplete personal data.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to Erasure: You may request deletion of your personal data where there is no lawful basis for continued processing.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to Withdraw Consent: You may withdraw consent to non-essential cookies at any time, without affecting the lawfulness of prior processing.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to Object: You may object to processing based on legitimate interests, including for direct marketing purposes.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right to Data Portability: You may request your personal data in a structured, commonly used format.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Right Not to Be Subject to Automated Decisions: You have the right not to be subject to decisions made solely by automated means that significantly affect you.
                                        </List.Item>
                                    </List>
                                    <Text fw={300} size='sm' lh={2}>
                                        To exercise any of these rights, please contact us at privacy@kasuwa.com. We will respond within the timeframe prescribed by the NDPA 2023 and applicable NDPC directives.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Managing Your Cookie Choices */}
                            <Box ref={managingCookiesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Managing Your Cookie Choices
                                    </Title>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Cookie Preference Centre: You can manage your cookie preferences at any time through our [Cookie Preference Centre], accessible on the Platform. You may accept or withdraw consent for each category of non-essential cookie independently.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Browser-Level Controls: Most web browsers allow you to block or delete cookies through their settings. Please note that disabling certain cookies may affect the functionality of the Platform. Guidance is available from your browser provider: Google Chrome, Mozilla Firefox, Apple Safari, Microsoft Edge
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Opting Out of Analytics and Advertising
                                            <List type="unordered" spacing="md">
                                                <List.Item fz={14} fw={300} lh="2">Google Analytics: Install the <a href='https://tools.google.com/dlpage/gaoptout' target='_blank'>Google Analytics Opt-out Browser Add-on</a>.</List.Item>
                                                <List.Item fz={14} fw={300} lh="2">Advertising Networks: Visit the <a href='http://www.aboutads.info/choices/' target='_blank'>Digital Advertising Alliance</a> or <a href='http://www.youronlinechoices.com/' target='_blank'>Your Online Choices (EU)</a>.</List.Item>
                                            </List>
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/**Cross-Border Data Transfers */}
                            <Box ref={dataTransferEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Cross-Border Data Transfers
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Some third-party cookies may involve the transfer of personal data outside Nigeria. Under the NDPA 2023, personal data may only be transferred from Nigeria to another country if the recipient is subject to a law, binding corporate rules, contractual clauses, codes of conduct, or certification mechanisms that afford an adequate level of protection.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Where such transfers occur, Agriarche ensures appropriate safeguards are in place, including Standard Contractual Clauses or equivalent mechanisms, in compliance with both the NDPA 2023 and the GDPR.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Data Protection Impact Assessments (DPIAs) */}
                            <Box ref={dataProtectionEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Data Protection Impact Assessments (DPIAs)
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Where cookies involve high-risk processing of personal data — particularly in relation to advertising profiling or large-scale analytics — Agriarche conducts a Data Protection Impact Assessment (DPIA) as required under the NDPA 2023. Where a DPIA indicates a high residual risk, we will consult the NDPC before proceeding.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Termination */}
                            <Box ref={childrenEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Children's Privacy
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        The NDPA 2023 increased the age threshold for a "child" to 18 years, in alignment with the Nigeria Child Rights Act. Our Platform is not directed at persons under the age of 18. We do not knowingly collect personal data from children through cookies. Where parental or guardian consent is required for a minor's use of our Platform, we will implement appropriate age verification measures where feasible.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        If you believe a child's personal data has been collected without appropriate consent, please contact us immediately at privacy@kasuwa.com.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Security of Personal Data */}
                            <Box ref={personalDataEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Security of Personal Data
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Agriarche implements appropriate technical and organisational measures to protect personal data collected through cookies against accidental or unlawful destruction, loss, misuse, alteration, or unauthorised disclosure, in accordance with Section 39 of the NDPA 2023.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Changes to This Cookies Policy */}
                            <Box ref={changesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Changes to This Cookies Policy
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        We may update this Cookies Policy periodically to reflect changes in technology, legislation, NDPC guidance, or our business practices. When material changes are made, we will update the "Last Updated" date at the top of this policy and, where appropriate, notify you via a notice on the Platform or by email.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        We encourage you to review this policy regularly.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Complaints and Regulatory Recourse */}
                            <Box ref={complaintsEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Complaints and Regulatory Recourse
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        If you have concerns about how we handle your personal data or cookies, please contact us first at info@agriarche.com. We will work to address your concern promptly.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        If you remain dissatisfied, you may lodge a complaint with the Nigeria Data Protection Commission (NDPC) under Section 46 of the NDPA 2023, which empowers data subjects aggrieved by a data controller's action or inaction to seek recourse through the Commission. <br /> If you are located in the EU/EEA, you also have the right to lodge a complaint with your local Data Protection Authority (DPA).
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Contact uS */}
                            <Box ref={contactEl.targetRef}>
                                <Stack>
                                    <Title  order={2} fw={600}>
                                        Contact Us
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        For any questions, requests, or concerns about this Cookies Policy or your personal data, please contact our Data Protection Officer or privacy team:
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                       Email: petwilson@agriarche.com or privacy@kasuwa.com <br/>
                                       Website: https://agriarche.com <br/>
                                       Address:  Plot 502, First Floor, Novare Mall, Wuse Zone 5, Wuse - Abuja, Nigeria.
                                    </Text>
                                </Stack>
                            </Box>

                        </Stack>
                    </Paper>
                </Group>
            </section>
        </LandingLayout>
    )
}
