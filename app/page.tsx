'use client';

import { Hero } from '@/components/home/Hero';
import { AboutSnapshot } from '@/components/home/AboutSnapshot';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { DetailedServices } from '@/components/home/DetailedServices';
import { DentistServices } from '@/components/home/DentistServices';
import { OrthodontistServices } from '@/components/home/OrthodontistServices';
import { DentalRadiology } from '@/components/home/DentalRadiology';
import { DentalImplantsPeriodontist } from '@/components/home/DentalImplantsPeriodontist';
import { TrustSection } from '@/components/home/TrustSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { LocationSection } from '@/components/home/LocationSection';
import { CtaBanner } from '@/components/home/CtaBanner';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSnapshot />
      <ServicesGrid />
      <DetailedServices />
      <DentistServices />
      <OrthodontistServices />
      <DentalRadiology />
      <DentalImplantsPeriodontist />
      <TrustSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaBanner />
      <Contact />
    </main>
  );
}
