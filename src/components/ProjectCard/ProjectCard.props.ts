export interface ProjectLinks {
  appStore?: string;
  googlePlay?: string;
  web?: string;
  route?: string;
  name?: string;
}

export interface ProjectCardProps {
  logo: string;
  stack: string;
  links: ProjectLinks;
  external: boolean;
  description: string;
  linkName?: string;
}
