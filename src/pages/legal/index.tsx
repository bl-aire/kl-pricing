import { useScrollIntoView } from '@mantine/hooks';
import { Stack, Group, Box, Paper, Title, Text, List } from "@mantine/core";

import styles from "./legal.module.scss";

import Banner from '@/components/ui/banner';
import LandingLayout from "@/components/base/layout";

const title = "Legal";
const subtitle = "Last updated: April 2022";

export default function LegalPolicies() {
    const definationEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const acknowledgementEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const registrationAccountEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const privacyEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const confidentialityEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const buyersEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const agentsEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const aggregatorsEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const paymentsEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const dueDeligenceEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const copyrightEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const otherSitesEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const terminationEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });
    const liabilityEl = useScrollIntoView<HTMLDivElement>({ offset: 60 });

    return (
        <LandingLayout>
            <Banner title={title} subtitle={subtitle} />

            <section className={styles.legal}>
                <Group align="flex-start" justify="space-between">
                    <Box className={styles.legal__panel}>
                        <List spacing="xs" listStyleType="none">
                            <List.Item fz={12} fw={500} tt="uppercase">On this page</List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => definationEl.scrollIntoView()}>
                                Definations
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => acknowledgementEl.scrollIntoView()}>
                                Acknowledgement
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => registrationAccountEl.scrollIntoView()}>
                                Registration & Account
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => privacyEl.scrollIntoView()}>
                                Privacy
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => confidentialityEl.scrollIntoView()}>
                                Confidentiality of Account Details
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => buyersEl.scrollIntoView()}>
                                Buyers
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => agentsEl.scrollIntoView()}>
                                Agents
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => aggregatorsEl.scrollIntoView()}>
                                Aggregators & Farmer Influencers
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => paymentsEl.scrollIntoView()}>
                                Payments
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => dueDeligenceEl.scrollIntoView()}>
                                Due Diligence
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => copyrightEl.scrollIntoView()}>
                                Copyright & Trademarks
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => otherSitesEl.scrollIntoView()}>
                                Links to Other Websites
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => terminationEl.scrollIntoView()}>
                                Termination
                            </List.Item>
                            <List.Item fz={14} fw={300} style={{ cursor: "pointer" }} onClick={() => liabilityEl.scrollIntoView()}>
                                Limitation of Liability
                            </List.Item>
                        </List>
                    </Box>

                    <Paper className={styles.legal__paper}>
                        <Stack gap="xl">
                            {/* Introduction */} 
                            <Stack>
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
                            </Stack>

                            {/* Definations */}
                            <Box ref={definationEl.targetRef}>
                                <Stack>
                                    <Stack gap="sm">
                                        <Title order={2} fw={600}>Definations</Title>
                                        <Text fw={300} size="sm">
                                            For the purposes of these Terms and Conditions:
                                        </Text>
                                    </Stack>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Agents</Text> means
                                            the <Text size="sm" span td="underline" component="a">https://www.kasuwa.agriarche.com</Text> website
                                            operated by Agriarche
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Aggregator/Farmer Influencers</Text> means individuals or
                                            companies who want to sell agricultural commodities.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Buyers/Industrial Processors/Food Processors</Text> are processors or
                                            companies in the agriculture space that buy commodities
                                            and/or sell finished products
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            <Text fw={500} size="sm" span>Application</Text> means the software program named Kasuwa provided
                                            by the Company and downloaded by You on any electronic device
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Acknowledgement */}
                            <Box ref={acknowledgementEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Acknowledgement
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Agriarche Limited ("Agriarche" “We”, “Us” or "Our") operates a platform
                                        consisting of a website and mobile application ("Kasuwa"), together with
                                        supporting logistics and payment infrastructure, for the sale and purchase of
                                        agricultural products in Nigeria.
                                        The terms and conditions which appear below govern the use of this Service
                                        and the agreement that operates between You and the Company. These “Terms and Conditions”
                                        set out the rights and obligations of all users regarding
                                        the use of the Service.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Your access to and use of the Service is conditioned on your
                                        acceptance of and compliance with these “Terms and Conditions”.
                                        These “Terms and Conditions” apply to all visitors, users and
                                        others who access or use the Service.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        By accessing or using the Service You agree to be bound
                                        by these “Terms and Conditions”. If You disagree with any
                                        part of these Terms and Conditions then You may not
                                        access the Service.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        If you use Kasuwa in the course of a business or other
                                        organizational project, then by so doing you:
                                    </Text>

                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            Certify that you have the required authority to accept these terms and conditions;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Agree to these “Terms and Conditions” on behalf of yourself and the person, company, or other legal entity that operates that business or organizational initiative
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Registration and account */}
                            <Box ref={registrationAccountEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Registration and Account
                                    </Title>
                                    <List type="ordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            You may not register with Kasuwa - the agriculture marketplace
                                            if you are under 18 years of age (by using the Kasuwa platform or
                                            agreeing to these terms and conditions, you warrant and represent to
                                            us that you are at least 18 years of age).

                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You may register for an account on the Kasuwa platform by
                                            completing and submitting the registration form on the Kasuwa
                                            platform.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You represent and warrant that all information provided
                                            in the registration form is complete and accurate.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh={2}>
                                            If you register for an account on Kasuwa, You will be asked
                                            to provide an email address, password, full name,
                                            residential and/or business addresses, phone number,
                                            bank account number, bank verification number (BVN) and/or
                                            national identity number (NIN), means of identification
                                            (National ID, Driver's License, International Passport) and you
                                            agree to:
                                            <List type="unordered" spacing="md">
                                                <List.Item fz={14} fw={300} lh="2">
                                                    Keep your password confidential
                                                </List.Item>
                                                <List.Item fz={14} fw={300} lh="2">
                                                    Notify us in writing immediately (using our contact details provided at the
                                                    contact us section of this terms and conditions) if you become aware of
                                                    any disclosure of your password.
                                                </List.Item>
                                                <List.Item fz={14} fw={300} lh="2">
                                                    be responsible for any activity on Kasuwa arising out of
                                                    any failure to keep your password confidential, and that
                                                    You may be held liable for any losses arising out of
                                                    such a failure
                                                </List.Item>
                                            </List>
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            Your account shall be used exclusively by You and You shall not
                                            transfer your account to any third party. If You authorize any
                                            third party to manage your account on your behalf
                                            this shall be at your own risk.
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You represent to us that You have the relevant competency,
                                            pedigree, experience, and integrity to operate as the
                                            actor You are choosing to register as
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You may cancel your account on Kasuwa by contacting us
                                            as provided at the contact-us section of these terms
                                            and conditions
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Privacy */}
                            <Box ref={privacyEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Privacy
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        The Company's Privacy Policy, which govern her online security
                                        measures and practices shall apply to use of the Site. The
                                        Privacy policy may be viewed here.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Given that we do not own or manage such third-party
                                        sites, we have no control over and assume no responsibility
                                        for their content, privacy policies, or practices.
                                    </Text>
                                    <Text fw={300} size='sm' lh={2}>
                                        You acknowledge that, in your use of the Site or the Content it
                                        bears, it is impossible to guarantee completely private and secure
                                        Internet communications or transmissions. In this connection,
                                        You understand that such communications may be liable to being
                                        read or intercepted by others, even where measures have been
                                        taken to undertake encryption of a particular transmission or
                                        communication.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Buyers*/}
                            <Box ref={buyersEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Buyers
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Buyers must...
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Agents*/}
                            <Box ref={agentsEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Agents
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        As an Agent:
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to execute Our Agent agreement designed for this purpose;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to produce two credible guarantors with valid ID
                                            (National Identity Card, Voters Card, Driver's License or International Passport)
                                            that will indemnify the company in the event that You
                                            default in the discharge of your obligations;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to undergo periodic financial literacy and business
                                            management sessions to help keep You relevant in the field;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to commit upfront at least 30% of the total commodity
                                            fund before the Company releases the balance required;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to bear the risks of any delay in delivery and
                                            defect in the quality of goods delivered
                                        </List.Item>

                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to dispatch a truck within a maximum of seven
                                            (7) days after disbursement of funds by the Company;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to provide Us with your Bank Verification
                                            Number (BVN) and National Identity Number (NIN) for
                                            identity verification purposes;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to pay an activation fee of #10,000 only
                                            that covers details of identity verification;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to provide security i.e., an asset, for the
                                            Company's exposure to You in a value of at least
                                            N2,000,000.00 (Two Million Naira only)
                                            supported by its title documents.
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/*Aggregators/Farmers Influencers*/}
                            <Box ref={aggregatorsEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Aggregators
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        As an Aggregator:
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to produce two credible guarantors
                                            (with proof of financial capacity to indemnify the Company
                                            to the tune of the commodity value involved) with
                                            valid ID (National Identity Card, Voters Card, Driver's
                                            License or International Passport) that will indemnify
                                            the Company in the event that You default in the discharge
                                            of your obligations;
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            You agree to provide us with your Bank Verification
                                            Number (BVN) and National identity Number (NIN) for
                                            identity verification purposes;
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/**Confidentiality of account details */}

                            <Box ref={confidentialityEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Confidentiality of Account details
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        The Site has been configured to require the opening of an
                                        account to enable you access certain Services or features;
                                        this may include setting up a username and password to access
                                        an account online. All users are required to be responsible
                                        for and to exercise special care in maintaining the
                                        confidentiality of their account information, including
                                        usernames and passwords, and for any and all activities
                                        carried on through their accounts.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        You undertake to create commercially reasonable security measures
                                        and controls to protect your confidential information.
                                        In the event of any breach of those security measures or
                                        unauthorized use of your account details, including password
                                        or username, you shall notify the Company immediately.
                                        Nevertheless, being primarily responsible for protecting
                                        your account details, you may be held liable for any such
                                        breach and the resulting damage or loss incurred by the Company
                                    </Text>
                                    <Text fw={300} size='sm' lh={2}>
                                        Conversely, you are not permitted to use anyone else's username,
                                        password or other account details for the purpose of accessing
                                        the Site or the Content it bears without the express authorization
                                        of the owner of such username, password or other account details.
                                        Any damage or loss resulting therefrom shall not be attributable
                                        to or borne by the Company
                                    </Text>
                                    <Text fw={300} size='sm' lh={2}>
                                        The Company shall not request you to convey confidential
                                        information to her over the Internet and you are encouraged
                                        to avoid doing so under any guise whatsoever. The consequences
                                        of any failure on your part to abide by this provision shall
                                        not be borne by the Company
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Payments */}
                            <Box ref={paymentsEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Payments
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        You are required to make payments due under these Terms
                                        in accordance with the payment information and
                                        procedures on the Kasuwa platform.
                                    </Text>
                                </Stack>
                            </Box>

                            {/**Due deligence */}
                            <Box ref={dueDeligenceEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Due Deligence
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        We have an anti-money laundering compliance program in place,
                                        and We reserve the right to conduct due diligence checks on
                                        all Kasuwa users towards ensuring strict observance with
                                        regulatory requirements in this regard.
                                        In furtherance of the above, You agree to give Us all necessary
                                        information, documents, data and access
                                    </Text>
                                    <List type="unordered" spacing="md">
                                        <List.Item fz={14} fw={300} lh="2">
                                            in order to ensure that you are adhering to and
                                            fulfilling your obligations under the Terms
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh="2">
                                            for the purpose of making disclosures in response
                                            to a valid court or other governmental body's order; or
                                        </List.Item>
                                        <List.Item fz={14} fw={300} lh={2}>
                                            as may be required by law or regulation
                                        </List.Item>
                                    </List>
                                </Stack>
                            </Box>

                            {/* Copyright and Trademarks */}
                            <Box ref={copyrightEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Copyright and Trademarks
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        All copyright and other intellectual property rights on
                                        Our website and the material on Our website are owned and
                                        controlled by us and our licensors, subject to the express
                                        provisions of these terms and conditions; and all copyright
                                        and other intellectual property rights on our website and
                                        the material on our website are reserved
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Kasuwa's logos, as well as our other registered and
                                        unregistered trademarks are our property; we do not grant
                                        permission for their use, and such usage will be considered
                                        an infringement of our rights
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        The registered and unregistered trademarks and service marks
                                        of third parties that appear on our website are the property
                                        of their respective owners, and we do not endorse or have
                                        any affiliation with any of the holders, as a result, we
                                        are unable to offer any authorization to exercise such rights
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Termination */}
                            <Box ref={terminationEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Termination
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        We may terminate or suspend Your access immediately, without
                                        prior notice or liability, for any reason whatsoever,
                                        including without limitation if You breach
                                        these Terms and Conditions.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Upon termination, Your right to use the Service will cease immediately.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Limitation of Liability */}
                            <Box ref={liabilityEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Limitation of Liability
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Notwithstanding any damages that You might incur, the entire
                                        liability of the Company and any of its suppliers under any
                                        provision of this Terms and Your exclusive remedy for all of
                                        the foregoing shall be limited to the amount actually paid by
                                        You through the Service or the equivalent of 100 USD if You haven't
                                        purchased anything through the Service
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        To the maximum extent permitted by applicable law, in no event
                                        shall the Company or its suppliers be liable for any special,
                                        incidental, indirect, or consequential damages
                                        whatsoever (including, but not limited to, damages for loss of
                                        profits, loss of data or other information, for business
                                        interruption, for personal injury, loss of privacy arising
                                        out of or in any way related to the use of or inability to
                                        use the Service, third-party software and/or third-party
                                        hardware used with the Service, or otherwise in connection
                                        with any provision of these Terms), even if the Company or any
                                        supplier has been advised of the possibility of such damages
                                        and even if the remedy fails of its essential purpose
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Some states do not allow the exclusion of implied warranties or
                                        limitation of liability for incidental or consequential damages,
                                        which means that some of the above limitations may not apply.
                                        In these states, each party's liability will be limited to the
                                        greatest extent permitted by law.
                                    </Text>
                                </Stack>
                            </Box>

                            {/* Links to other sites */}
                            <Box ref={otherSitesEl.targetRef}>
                                <Stack>
                                    <Title order={2} fw={600}>
                                        Links to Other sites
                                    </Title>
                                    <Text fw={300} size="sm" lh="2">
                                        Our Service may contain links to other websites that are not
                                        operated by us. If you click a third party link, you will be
                                        directed to that third party's site. In that event, we advise
                                        that you review the Privacy Policy of every site you visit.
                                    </Text>
                                    <Text fw={300} size="sm" lh="2">
                                        Given that we do not own or manage such third-party
                                        sites, we have no control over and assume no responsibility
                                        for their content, privacy policies, or practices.
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
