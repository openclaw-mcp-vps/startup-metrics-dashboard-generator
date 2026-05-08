export default function Home() {
  const faqs = [
    {
      q: "Which data sources does MetricsDash support?",
      a: "We connect to Stripe for revenue metrics, Google Analytics for traffic data, and popular databases (PostgreSQL, MySQL) via secure read-only credentials."
    },
    {
      q: "How are the dashboards delivered?",
      a: "Dashboards are available as live web views and exportable PDFs. You can schedule automated email reports weekly or monthly."
    },
    {
      q: "Is my data secure?",
      a: "All connections use OAuth or read-only API keys. We never store raw credentials and all data is encrypted at rest and in transit."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Startup Growth Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Generate investor-ready metrics dashboards from raw data
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect Stripe, Google Analytics, and your database in minutes. MetricsDash auto-generates professional dashboards so you can focus on growth, not spreadsheets.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $49/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Cancel anytime.</p>
      </section>

      {/* Metrics preview strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "MRR", value: "$24,800" },
            { label: "Churn Rate", value: "1.8%" },
            { label: "LTV", value: "$1,240" },
            { label: "CAC", value: "$310" }
          ].map((m) => (
            <div key={m.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{m.value}</div>
              <div className="text-xs text-[#8b949e] mt-1 uppercase tracking-wide">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$49</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Stripe + Google Analytics + DB integrations",
              "Unlimited dashboard snapshots",
              "PDF export & scheduled email reports",
              "Investor-ready chart templates",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} MetricsDash. All rights reserved.
      </footer>
    </main>
  );
}
