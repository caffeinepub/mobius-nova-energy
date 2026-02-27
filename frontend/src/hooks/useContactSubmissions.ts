import { useState } from 'react';
import { useActor } from './useActor';
import { InvestmentRange, PartnershipType } from '@/backend';

interface InvestorSubmissionData {
  name: string;
  email: string;
  company: string | null;
  investmentRange: InvestmentRange;
  message: string;
}

interface PartnerSubmissionData {
  name: string;
  email: string;
  organization: string | null;
  partnershipType: PartnershipType;
  message: string;
}

export function useContactSubmissions() {
  const { actor } = useActor();

  const [investorLoading, setInvestorLoading] = useState(false);
  const [investorSuccess, setInvestorSuccess] = useState(false);
  const [investorError, setInvestorError] = useState(false);
  const [investorErrorMessage, setInvestorErrorMessage] = useState<string | null>(null);

  const [partnerLoading, setPartnerLoading] = useState(false);
  const [partnerSuccess, setPartnerSuccess] = useState(false);
  const [partnerError, setPartnerError] = useState(false);
  const [partnerErrorMessage, setPartnerErrorMessage] = useState<string | null>(null);

  const submitInvestor = async (data: InvestorSubmissionData) => {
    if (!actor) {
      setInvestorError(true);
      setInvestorErrorMessage('Connection not ready. Please try again.');
      return;
    }

    setInvestorLoading(true);
    setInvestorError(false);
    setInvestorErrorMessage(null);

    try {
      await actor.submitInvestorInquiry(
        data.name,
        data.email,
        data.company,
        data.investmentRange,
        data.message
      );
      setInvestorSuccess(true);
    } catch (err) {
      setInvestorError(true);
      setInvestorErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setInvestorLoading(false);
    }
  };

  const submitPartner = async (data: PartnerSubmissionData) => {
    if (!actor) {
      setPartnerError(true);
      setPartnerErrorMessage('Connection not ready. Please try again.');
      return;
    }

    setPartnerLoading(true);
    setPartnerError(false);
    setPartnerErrorMessage(null);

    try {
      await actor.submitPartnershipInquiry(
        data.name,
        data.email,
        data.organization,
        data.partnershipType,
        data.message
      );
      setPartnerSuccess(true);
    } catch (err) {
      setPartnerError(true);
      setPartnerErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setPartnerLoading(false);
    }
  };

  const resetInvestor = () => {
    setInvestorLoading(false);
    setInvestorSuccess(false);
    setInvestorError(false);
    setInvestorErrorMessage(null);
  };

  const resetPartner = () => {
    setPartnerLoading(false);
    setPartnerSuccess(false);
    setPartnerError(false);
    setPartnerErrorMessage(null);
  };

  return {
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
  };
}
