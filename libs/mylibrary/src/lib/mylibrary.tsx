import './mylibrary.module.scss';

/* eslint-disable-next-line */
export interface MylibraryProps {
  cool: boolean;
  test: string;
}

export function Mylibrary(props: MylibraryProps) {
  return (
    <div>
      <h1>Welcome to Mylibrary!</h1>
    </div>
  );
}

export default Mylibrary;
