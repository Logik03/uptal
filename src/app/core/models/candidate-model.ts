export interface Candidate {
    id: number;
    name: string;
    location: string;
    phone: string;
    rating: number;
    status: 'applied' | 'shortlisted' | 'interview';
    isNew: boolean;
    image?: string;
  }
  