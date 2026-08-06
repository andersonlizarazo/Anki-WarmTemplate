import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main>
        <h1>Hi 👋</h1>
        <p> This is a work in progress... </p>
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
