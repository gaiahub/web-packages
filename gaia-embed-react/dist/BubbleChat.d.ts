/// <reference types="react" />
import type { BubbleProps } from '@gaiahub/gaia-embed';
type Props = BubbleProps;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'flowise-chatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}
export declare const BubbleChat: (props: Props) => null;
export {};
//# sourceMappingURL=BubbleChat.d.ts.map