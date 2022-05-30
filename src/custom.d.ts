declare module '*.svg' {
  const React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const content: string;
  export default content;
}
