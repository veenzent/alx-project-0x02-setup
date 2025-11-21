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