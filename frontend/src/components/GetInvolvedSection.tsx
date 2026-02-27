import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useContactSubmissions } from '@/hooks/useContactSubmissions';
import { InvestmentRange, PartnershipType } from '@/backend';

interface InvestorForm {
  name: string;
  email: string;
  company: string;
  investmentRange: InvestmentRange | '';
  message: string;
}

interface PartnerForm {
  name: string;
  email: string;
  organization: string;
  partnershipType: PartnershipType | '';
  message: string;
}

const initialInvestorForm: InvestorForm = {
  name: '',
  email: '',
  company: '',
  investmentRange: '',
  message: '',
};

const initialPartnerForm: PartnerForm = {
  name: '',
  email: '',
  organization: '',
  partnershipType: '',
  message: '',
};

export function GetInvolvedSection() {
  const [investorForm, setInvestorForm] = useState<InvestorForm>(initialInvestorForm);
  const [partnerForm, setPartnerForm] = useState<PartnerForm>(initialPartnerForm);
  const [investorErrors, setInvestorErrors] = useState<Partial<Record<keyof InvestorForm, string>>>({});
  const [partnerErrors, setPartnerErrors] = useState<Partial<Record<keyof PartnerForm, string>>>({});

  const {
    submitInvestor,
    submitPartner,
    investorLoading,
    investorSuccess,
    investorError,
    investorErrorMessage,
    partnerLoading,
    partnerSuccess,
    partnerError,
    partnerErrorMessage,
    resetInvestor,
    resetPartner,
  } = useContactSubmissions();

  const validateInvestor = (): boolean => {
    const errs: Partial<Record<keyof InvestorForm, string>> = {};
    if (!investorForm.name.trim()) errs.name = 'Name is required';
    if (!investorForm.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(investorForm.email)) errs.email = 'Valid email required';
    if (!investorForm.investmentRange) errs.investmentRange = 'Please select a range';
    setInvestorErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validatePartner = (): boolean => {
    const errs: Partial<Record<keyof PartnerForm, string>> = {};
    if (!partnerForm.name.trim()) errs.name = 'Name is required';
    if (!partnerForm.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(partnerForm.email)) errs.email = 'Valid email required';
    if (!partnerForm.partnershipType) errs.partnershipType = 'Please select a type';
    setPartnerErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInvestor()) return;
    await submitInvestor({
      name: investorForm.name,
      email: investorForm.email,
      company: investorForm.company || null,
      investmentRange: investorForm.investmentRange as InvestmentRange,
      message: investorForm.message,
    });
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePartner()) return;
    await submitPartner({
      name: partnerForm.name,
      email: partnerForm.email,
      organization: partnerForm.organization || null,
      partnershipType: partnerForm.partnershipType as PartnershipType,
      message: partnerForm.message,
    });
  };

  const inputClass = "bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50";

  return (
    <section id="get-involved" className="py-20 px-4 bg-deep-space-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            GET INVOLVED
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-2xl mx-auto text-sm md:text-base">
            Whether you're an investor, technology partner, researcher, or media contact — we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Investor Inquiry Form */}
          <div className="bg-dark-card border border-nova-gold/20 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-nova-gold/10 rounded-lg flex items-center justify-center">
                <Send className="h-4 w-4 text-nova-gold" />
              </div>
              <h3 className="text-nova-gold font-bold uppercase tracking-wider font-heading text-base">
                INVESTOR INQUIRY
              </h3>
            </div>

            {investorSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-nova-gold mx-auto mb-3" />
                <h4 className="text-nova-gold font-bold uppercase mb-2 font-heading">INQUIRY SENT!</h4>
                <p className="text-liquid-silver/60 text-sm mb-4">We'll be in touch within 48 hours.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-nova-gold/40 text-nova-gold hover:bg-nova-gold/10 uppercase text-xs tracking-wider font-heading"
                  onClick={() => { setInvestorForm(initialInvestorForm); setInvestorErrors({}); resetInvestor(); }}
                >
                  SEND ANOTHER
                </Button>
              </div>
            ) : (
              <form onSubmit={handleInvestorSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    NAME <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    value={investorForm.name}
                    onChange={(e) => setInvestorForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {investorErrors.name && <p className="text-red-400 text-xs">{investorErrors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    EMAIL <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    type="email"
                    value={investorForm.email}
                    onChange={(e) => setInvestorForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                  {investorErrors.email && <p className="text-red-400 text-xs">{investorErrors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    COMPANY <span className="text-liquid-silver/40">(OPTIONAL)</span>
                  </Label>
                  <Input
                    value={investorForm.company}
                    onChange={(e) => setInvestorForm((p) => ({ ...p, company: e.target.value }))}
                    placeholder="Your company or fund"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    INVESTMENT RANGE <span className="text-nova-gold">*</span>
                  </Label>
                  <Select
                    value={investorForm.investmentRange}
                    onValueChange={(v) => setInvestorForm((p) => ({ ...p, investmentRange: v as InvestmentRange }))}
                  >
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Select range..." />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-liquid-silver/20">
                      <SelectItem value={InvestmentRange.under10k} className="text-liquid-silver">Under $10K</SelectItem>
                      <SelectItem value={InvestmentRange.range_10k_50k} className="text-liquid-silver">$10K – $50K</SelectItem>
                      <SelectItem value={InvestmentRange.range_50k_250k} className="text-liquid-silver">$50K – $250K</SelectItem>
                      <SelectItem value={InvestmentRange.over250k} className="text-liquid-silver">$250K+</SelectItem>
                    </SelectContent>
                  </Select>
                  {investorErrors.investmentRange && <p className="text-red-400 text-xs">{investorErrors.investmentRange}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    MESSAGE
                  </Label>
                  <Textarea
                    value={investorForm.message}
                    onChange={(e) => setInvestorForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Tell us about your investment interests..."
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {investorError && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <p className="text-red-400 text-xs">{investorErrorMessage || 'Submission failed. Please try again.'}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={investorLoading}
                  className="w-full bg-nova-gold hover:bg-nova-gold/90 text-deep-space-black font-bold py-5 text-xs uppercase tracking-wider shadow-nova-gold font-heading disabled:opacity-60"
                >
                  {investorLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />SENDING...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" />SEND INQUIRY</>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Partnership Form */}
          <div className="bg-dark-card border border-cosmic-blue/20 rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-cosmic-blue/10 rounded-lg flex items-center justify-center">
                <Send className="h-4 w-4 text-cosmic-blue" />
              </div>
              <h3 className="text-cosmic-blue font-bold uppercase tracking-wider font-heading text-base">
                GENERAL PARTNERSHIP
              </h3>
            </div>

            {partnerSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="h-12 w-12 text-cosmic-blue mx-auto mb-3" />
                <h4 className="text-cosmic-blue font-bold uppercase mb-2 font-heading">MESSAGE SENT!</h4>
                <p className="text-liquid-silver/60 text-sm mb-4">We'll review your inquiry and respond shortly.</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-cosmic-blue/40 text-cosmic-blue hover:bg-cosmic-blue/10 uppercase text-xs tracking-wider font-heading"
                  onClick={() => { setPartnerForm(initialPartnerForm); setPartnerErrors({}); resetPartner(); }}
                >
                  SEND ANOTHER
                </Button>
              </div>
            ) : (
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    NAME <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    value={partnerForm.name}
                    onChange={(e) => setPartnerForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {partnerErrors.name && <p className="text-red-400 text-xs">{partnerErrors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    EMAIL <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    type="email"
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                  {partnerErrors.email && <p className="text-red-400 text-xs">{partnerErrors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    ORGANIZATION <span className="text-liquid-silver/40">(OPTIONAL)</span>
                  </Label>
                  <Input
                    value={partnerForm.organization}
                    onChange={(e) => setPartnerForm((p) => ({ ...p, organization: e.target.value }))}
                    placeholder="Your organization"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    PARTNERSHIP TYPE <span className="text-nova-gold">*</span>
                  </Label>
                  <Select
                    value={partnerForm.partnershipType}
                    onValueChange={(v) => setPartnerForm((p) => ({ ...p, partnershipType: v as PartnershipType }))}
                  >
                    <SelectTrigger className={inputClass}>
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-liquid-silver/20">
                      <SelectItem value={PartnershipType.technology} className="text-liquid-silver">Technology</SelectItem>
                      <SelectItem value={PartnershipType.distribution} className="text-liquid-silver">Distribution</SelectItem>
                      <SelectItem value={PartnershipType.research} className="text-liquid-silver">Research</SelectItem>
                      <SelectItem value={PartnershipType.media} className="text-liquid-silver">Media</SelectItem>
                      <SelectItem value={PartnershipType.other} className="text-liquid-silver">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {partnerErrors.partnershipType && <p className="text-red-400 text-xs">{partnerErrors.partnershipType}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    MESSAGE
                  </Label>
                  <Textarea
                    value={partnerForm.message}
                    onChange={(e) => setPartnerForm((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Describe your partnership interest..."
                    rows={3}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {partnerError && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <p className="text-red-400 text-xs">{partnerErrorMessage || 'Submission failed. Please try again.'}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={partnerLoading}
                  className="w-full bg-cosmic-blue hover:bg-cosmic-blue/90 text-solar-white font-bold py-5 text-xs uppercase tracking-wider font-heading disabled:opacity-60"
                >
                  {partnerLoading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />SENDING...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" />SEND MESSAGE</>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
