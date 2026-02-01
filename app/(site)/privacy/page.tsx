import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Louie Bernstein",
  description: "Privacy Policy for louiebernstein.com - Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-neutral-900 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-neutral-600">
          Last updated: February 1, 2026
        </p>

        <div className="mt-12 prose prose-lg prose-neutral max-w-none">
          <h2>Introduction</h2>
          <p>
            Louie Bernstein (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website louiebernstein.com.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us when you:
          </p>
          <ul>
            <li>Fill out a contact form</li>
            <li>Subscribe to our newsletter</li>
            <li>Schedule a consultation</li>
            <li>Send us an email</li>
          </ul>
          <p>
            This information may include your name, email address, phone number, company name, and any other information you choose to provide.
          </p>

          <h2>Automatically Collected Information</h2>
          <p>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
          </ul>
          <p>
            This information is collected through cookies and similar tracking technologies to help us improve our website and your experience.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Respond to your inquiries and provide requested services</li>
            <li>Send you newsletters and marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Analyze website usage and trends</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
          </p>
          <ul>
            <li>To trusted service providers who assist us in operating our website and conducting our business (e.g., email service providers, analytics tools)</li>
            <li>When required by law or to protect our rights</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            Our website may use third-party services including:
          </p>
          <ul>
            <li><strong>Calendly:</strong> For scheduling consultations</li>
            <li><strong>YouTube:</strong> For embedded video content</li>
            <li><strong>Analytics services:</strong> To understand website usage</li>
          </ul>
          <p>
            These services have their own privacy policies governing the use of your information.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:Louie@LouieBernstein.com" className="text-[#0966c2] hover:underline">
              Louie@LouieBernstein.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
