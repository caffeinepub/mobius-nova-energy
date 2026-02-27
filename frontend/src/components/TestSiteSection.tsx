import { useState } from 'react';
import { MapPin, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTestSiteSubmission } from '@/hooks/useTestSiteSubmission';
import { PropertyType, EnergySource } from '@/backend';

interface FormState {
  name: string;
  email: string;
  phone: string;
  location: string;
  propertyType: PropertyType | '';
  energySources: EnergySource[];
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  location: '',
  propertyType: '',
  energySources: [],
  message: '',
};

export function TestSiteSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const { submit, isLoading, isSuccess, isError, errorMessage, reset } = useTestSiteSubmission();

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.location.trim()) newErrors.location = 'Location is required';
    if (!form.propertyType) newErrors.propertyType = 'Property type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEnergySourceToggle = (source: EnergySource) => {
    setForm((prev) => ({
      ...prev,
      energySources: prev.energySources.includes(source)
        ? prev.energySources.filter((s) => s !== source)
        : [...prev.energySources, source],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await submit({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      location: form.location,
      propertyType: form.propertyType as PropertyType,
      energySources: form.energySources,
      message: form.message,
    });
  };

  const handleReset = () => {
    setForm(initialForm);
    setErrors({});
    reset();
  };

  return (
    <section id="test-site" className="py-20 px-4 bg-dark-bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-cosmic-blue/10 border border-cosmic-blue/30 rounded-full px-4 py-1 mb-4">
            <span className="text-cosmic-blue text-xs font-bold uppercase tracking-widest font-heading">
              EARLY ADOPTER PROGRAM
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-liquid-silver uppercase tracking-wider font-heading mb-4">
            BECOME A TEST SITE
          </h2>
          <div className="w-24 h-1 bg-nova-gold mx-auto mb-6" />
          <p className="text-liquid-silver/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We're seeking early test sites and location partners to validate the MOBIUS-NOVA system in real-world conditions. 
            Be among the first to host this technology and help shape the future of distributed energy.
          </p>
        </div>

        {/* Benefits of being a test site */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { title: 'FREE INSTALLATION', desc: 'No cost for early test site partners' },
            { title: 'ENERGY SAVINGS', desc: 'Benefit from generated power during testing' },
            { title: 'PIONEER STATUS', desc: 'Recognition as a founding test partner' },
          ].map((b) => (
            <div key={b.title} className="bg-dark-card border border-cosmic-blue/20 rounded-lg p-4 text-center">
              <div className="text-cosmic-blue font-bold text-xs uppercase tracking-wider mb-1 font-heading">{b.title}</div>
              <div className="text-liquid-silver/60 text-xs">{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-dark-card border border-liquid-silver/10 rounded-xl p-6 md:p-8">
          {isSuccess ? (
            <div className="text-center py-10">
              <CheckCircle className="h-16 w-16 text-nova-gold mx-auto mb-4" />
              <h3 className="text-nova-gold font-bold uppercase text-xl mb-3 font-heading">APPLICATION RECEIVED!</h3>
              <p className="text-liquid-silver/70 text-sm mb-6 max-w-md mx-auto">
                Thank you for applying as a test site partner. We'll review your application and reach out within 5–7 business days.
              </p>
              <Button
                variant="outline"
                className="border-nova-gold/40 text-nova-gold hover:bg-nova-gold/10 uppercase text-xs tracking-wider font-heading"
                onClick={handleReset}
              >
                SUBMIT ANOTHER APPLICATION
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    FULL NAME <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Your full name"
                    className="bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50"
                  />
                  {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    EMAIL ADDRESS <span className="text-nova-gold">*</span>
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    placeholder="your@email.com"
                    className="bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50"
                  />
                  {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    PHONE NUMBER <span className="text-liquid-silver/40">(OPTIONAL)</span>
                  </Label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+1 (555) 000-0000"
                    className="bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                    PROPERTY TYPE <span className="text-nova-gold">*</span>
                  </Label>
                  <Select
                    value={form.propertyType}
                    onValueChange={(v) => setForm((p) => ({ ...p, propertyType: v as PropertyType }))}
                  >
                    <SelectTrigger className="bg-dark-bg border-liquid-silver/20 text-liquid-silver focus:border-nova-gold/50">
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent className="bg-dark-card border-liquid-silver/20">
                      <SelectItem value={PropertyType.residential} className="text-liquid-silver hover:text-nova-gold">Residential</SelectItem>
                      <SelectItem value={PropertyType.farmAgricultural} className="text-liquid-silver hover:text-nova-gold">Farm / Agricultural</SelectItem>
                      <SelectItem value={PropertyType.commercial} className="text-liquid-silver hover:text-nova-gold">Commercial</SelectItem>
                      <SelectItem value={PropertyType.industrial} className="text-liquid-silver hover:text-nova-gold">Industrial</SelectItem>
                      <SelectItem value={PropertyType.remoteOffGrid} className="text-liquid-silver hover:text-nova-gold">Remote / Off-Grid</SelectItem>
                      <SelectItem value={PropertyType.other} className="text-liquid-silver hover:text-nova-gold">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.propertyType && <p className="text-red-400 text-xs">{errors.propertyType}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                  LOCATION / ADDRESS <span className="text-nova-gold">*</span>
                </Label>
                <Input
                  value={form.location}
                  onChange={(e) => setForm((p) => ({ ...p, location: e.target.value }))}
                  placeholder="City, State, Country"
                  className="bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50"
                />
                {errors.location && <p className="text-red-400 text-xs">{errors.location}</p>}
              </div>

              <div className="space-y-2">
                <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                  AVAILABLE ENERGY SOURCES
                </Label>
                <div className="flex flex-wrap gap-4">
                  {[
                    { value: EnergySource.wind, label: 'Wind' },
                    { value: EnergySource.waterStream, label: 'Water / Stream' },
                    { value: EnergySource.both, label: 'Both' },
                  ].map((src) => (
                    <div key={src.value} className="flex items-center gap-2">
                      <Checkbox
                        id={`energy-${src.value}`}
                        checked={form.energySources.includes(src.value)}
                        onCheckedChange={() => handleEnergySourceToggle(src.value)}
                        className="border-liquid-silver/30 data-[state=checked]:bg-nova-gold data-[state=checked]:border-nova-gold"
                      />
                      <label
                        htmlFor={`energy-${src.value}`}
                        className="text-liquid-silver/80 text-sm cursor-pointer"
                      >
                        {src.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-liquid-silver text-xs font-bold uppercase tracking-wider font-heading">
                  MESSAGE / NOTES
                </Label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Tell us about your property, energy needs, or any questions..."
                  rows={4}
                  className="bg-dark-bg border-liquid-silver/20 text-liquid-silver placeholder:text-liquid-silver/30 focus:border-nova-gold/50 resize-none"
                />
              </div>

              {isError && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 text-xs">{errorMessage || 'Submission failed. Please try again.'}</p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-nova-gold hover:bg-nova-gold/90 text-deep-space-black font-bold py-6 text-sm uppercase tracking-wider shadow-nova-gold font-heading disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    <MapPin className="mr-2 h-4 w-4" />
                    APPLY AS TEST SITE
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
