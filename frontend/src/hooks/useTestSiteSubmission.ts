import { useState } from 'react';
import { useActor } from './useActor';
import { PropertyType, EnergySource } from '@/backend';

interface TestSiteSubmissionData {
  name: string;
  email: string;
  phone: string | null;
  location: string;
  propertyType: PropertyType;
  energySources: EnergySource[];
  message: string;
}

export function useTestSiteSubmission() {
  const { actor } = useActor();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submit = async (data: TestSiteSubmissionData) => {
    if (!actor) {
      setIsError(true);
      setErrorMessage('Connection not ready. Please try again.');
      return;
    }

    setIsLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      await actor.submitTestSiteApplication(
        data.name,
        data.email,
        data.phone,
        data.location,
        data.propertyType,
        data.energySources,
        data.message
      );
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setIsError(false);
    setErrorMessage(null);
  };

  return { submit, isLoading, isSuccess, isError, errorMessage, reset };
}
