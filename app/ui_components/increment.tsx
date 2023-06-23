"use client";

type Props = {
  count: number;
  increment: () => void;
};

export default function Increment({ count, increment }: Props) {
  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        onClick={async () => {
          await increment();
        }}
      >
        Click me
      </button>
    </div>
  );
}
