import Typewriter from 'typewriter-effect';
import { ITypewriterProps } from './Typewriter.props';

export const Typewriters = ({ strings, className }: ITypewriterProps) => {
  return (
    <Typewriter
      options={{
        strings,
        autoStart: true,
        loop: true,
        wrapperClassName: className,
        cursorClassName: className,
      }}
    />
  );
};
