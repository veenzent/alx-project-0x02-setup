export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  onCloseModal: (arg0: { title: string; content: string; }) => void;
}