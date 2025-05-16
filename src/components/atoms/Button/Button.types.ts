export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    rounded?: string;
    width?: string;
    height?: string;
    obfuscate?: boolean;
}

export interface AnchorButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    rounded?: string;
    width?: string;
    height?: string;
}

export type AtomButtonProps = ButtonProps | AnchorButtonProps;