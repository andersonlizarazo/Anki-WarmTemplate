import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Preview } from "~/components/Preview/Preview";

export default component$(() => {
  const fields: AnkiField[] = [
    {
      name: "phrase",
      side: "both",
      type: "text",
      style: { purpose: "general", size: "regular" },
    },
  ];
  return (
    <>
      <main>
        <h1>Hi 👋</h1>
        <p> This is a work in progress... </p>
        <Preview fields={fields} />
      </main>
    </>
  );
});

export const head: DocumentHead = {
  title: "Anki Warm Template",
  meta: [
    {
      name: "description",
      content:
        "An Anki template generator that allows you to apply a warm-themed template to your cards",
    },
  ],
};
