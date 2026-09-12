import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Send, Mail, Phone, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  AGENCY_INFO,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from '../data/agencyData';

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState(BUDGET_OPTIONS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedServices([preselectedService]);
    }
  }, [preselectedService]);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D7F000', '#FFFFFF', '#8E8E8A']
      });
    } catch {
      // safe fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Headline & Studio Direct Contacts */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-accent uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>09 // INQUIRIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight text-text-primary">
              <span>LET'S </span>
              <br />
              <span className="font-serif-italic font-normal text-accent lowercase">
                talk.
              </span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-text-secondary font-normal leading-relaxed">
            Tell us about your brand vision, project objectives, or desired delivery timeline. We review every brief thoroughly and reply within 24 hours.
          </p>

          <div className="p-6 rounded-2xl bg-card border border-white/[0.08] space-y-5">
            <div className="flex items-center gap-3 text-xs font-mono text-text-secondary">
              <Mail className="w-4 h-4 text-accent" />
              <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-accent transition-colors font-medium">
                {AGENCY_INFO.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-text-secondary">
              <Phone className="w-4 h-4 text-accent" />
              <a href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors font-medium">
                {AGENCY_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-text-secondary">
              <Clock className="w-4 h-4 text-accent" />
              <span>Response SLA: Within 24 Business Hours</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase block mb-1">
              CURRENT CAPACITY:
            </span>
            <div className="flex items-center gap-2 text-xs text-text-primary">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="font-semibold text-accent">Accepting 2 Selected Q3/Q4 Studio Sprints</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Inquiry Form */}
        <div className="lg:col-span-7 bg-card border border-white/[0.1] rounded-2xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-text-primary">
                PROJECT INQUIRY RECEIVED.
              </h3>

              <p className="text-sm text-text-secondary max-w-md font-normal leading-relaxed">
                Thank you, <span className="text-text-primary font-semibold">{name}</span>. Hitarth and the WSAGE production team are reviewing your project scope and will respond within 24 hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${AGENCY_INFO.email}?subject=WSAGE Project Inquiry - ${encodeURIComponent(company || name)}&body=Hi WSAGE Team,%0D%0A%0D%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})%0D%0ACompany: ${encodeURIComponent(company)}%0D%0AServices: ${encodeURIComponent(selectedServices.join(', '))}%0D%0ABudget: ${encodeURIComponent(budget)}%0D%0ATimeline: ${encodeURIComponent(timeline)}%0D%0A%0D%0ADetails:%0D%0A${encodeURIComponent(details)}`}
                  className="px-6 py-3 rounded-full bg-accent text-canvas text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>OPEN IN EMAIL CLIENT</span>
                </a>

                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-white/[0.05] text-text-secondary hover:text-text-primary text-xs font-semibold tracking-wider uppercase border border-white/[0.08] transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Hitarth / Marc..."
                    className="w-full bg-surface border border-white/[0.1] rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-surface border border-white/[0.1] rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Company / Brand */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  BRAND / COMPANY NAME
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Studio, Creator Channel, or Brand"
                  className="w-full bg-surface border border-white/[0.1] rounded-xl px-4 py-3.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Row 3: What do you need? Service Multi-select Chips */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  WHAT DO YOU NEED? (SELECT SERVICES)
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`px-3.5 py-2 rounded-full text-xs font-sans tracking-wide transition-all duration-200 border ${
                          isSelected
                            ? 'bg-accent text-canvas font-semibold border-accent shadow-sm'
                            : 'bg-surface text-text-secondary border-white/[0.08] hover:border-white/[0.2]'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Budget Range */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  APPROXIMATE BUDGET
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center transition-all border ${
                        budget === b
                          ? 'bg-text-primary text-canvas font-bold border-text-primary'
                          : 'bg-surface text-text-muted border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 5: Timeline */}
              <div className="space-y-3">
                <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  DELIVERY TIMELINE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIMELINE_OPTIONS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-sans text-center transition-all border ${
                        timeline === t
                          ? 'bg-text-primary text-canvas font-bold border-text-primary'
                          : 'bg-surface text-text-muted border-white/[0.08] hover:border-white/[0.2]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Tell us about the project */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest text-text-muted uppercase block">
                  TELL US ABOUT THE PROJECT / AMBITIONS
                </label>
                <textarea
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Describe your project, reference links, current bottlenecks, or goals..."
                  className="w-full bg-surface border border-white/[0.1] rounded-xl p-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-accent hover:bg-white text-canvas font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-xl shadow-accent/20 transition-all duration-300 group"
              >
                <span>SEND PROJECT INQUIRY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
