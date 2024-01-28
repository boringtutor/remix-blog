import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello tailwind!</h1>
      <div className="text-secondary-foreground">testing calsls</div>
    </>
  );
}
