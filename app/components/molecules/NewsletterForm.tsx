'use client'

import React, { useState } from 'react';
import { InputField } from '../atoms/InputField';
import { Button } from '../atoms/Button';

interface NewsletterFormProps {
  onSubmit?: (email: string) => void;
  placeholder?: string;
  buttonLabel?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  onSubmit,
  placeholder = 'Masukkan email Anda',
  buttonLabel = 'Langganan',
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      onSubmit?.(email);
      setEmail('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 flex-col sm:flex-row w-full">
      <InputField
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button
        type="submit"
        variant="secondary"
        disabled={loading}
        className="whitespace-nowrap"
      >
        {loading ? 'Mengirim...' : buttonLabel}
      </Button>
    </form>
  );
};
