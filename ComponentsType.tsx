
 type ButtonStyle = 'defaultButtons' | 'roundedButtons' | 'softButtons' | 'ghostButtons' | 'gradientButtons' |
    'borderButtons';

 type ButtonContent = 'iconButton' | 'labelButton';

 type ButtonType = 'submit' | 'button' | 'reset'

export interface ButtonProps {
    buttonStyle: ButtonStyle;
    buttonContent: ButtonContent;
    buttonType?: ButtonType;
    onClick?: () => void;
    onMouseOver?: () => void;
    key?: string;
    disabled?: boolean;
    outline?: boolean;
    // style?: React.CSSProperties;

}

 type LoadingType = 'rotate' | 'grow'

export interface LoadingButtonProps {
    color?: string
    onClick?: () => void;
    onMouseOver?: () => void;
    key?: string;
    disabled?: boolean;
    loadingType?: LoadingType;
    text?: string;
    outline?: boolean;

    // style?: React.CSSProperties;

}