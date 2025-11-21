export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onCloseModal: (arg0: { title: string; content: string; }) => void;
}

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserProps {
  id?: number;
  name: string;
  username?: string;
  email: string;
  address: Address;
  phone?: string;
  website?: string;
  company?: Company;
}