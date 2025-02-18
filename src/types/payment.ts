/* eslint-disable @typescript-eslint/no-explicit-any */
export type Payment = {
  sessionId: string;
  customer_details: {
    address: {
      city: string | null;
      country: string;
      line1: string | null;
      line2: string | null;
      postal_code: string | null;
      state: string | null;
    };
    email: string;
    name: string;
    phone: string | null;
    tax_exempt: string;
    tax_ids: any[];
  };
  cardInfo: {
    brand: string;
    checks: {
      address_line1_check: string | null;
      address_postal_code_check: string | null;
      cvc_check: string;
    };
    country: string;
    display_brand: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: any | null;
    last4: string;
    networks: {
      available: string[];
      preferred: string | null;
    };
    three_d_secure_usage: {
      supported: boolean;
    };
    wallet: any | null;
  };
  purchasedProducts: {
    name: string;
    amount: number;
    currency: string;
    quantity: number;
  }[];
};
