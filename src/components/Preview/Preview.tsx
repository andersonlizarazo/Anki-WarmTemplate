import {
  component$,
  useSignal,
  useComputed$,
  useVisibleTask$,
} from "@builder.io/qwik";

export interface PreviewProps {
  fields: AnkiField[];
}

export const Preview = component$<PreviewProps>((props) => {
  const cardMarkup = useComputed$(() =>
    props.fields
      .map((field) => makeFragment([field.type], "Example text"))
      .join(" "),
  );

  const url = useSignal("");

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => cardMarkup.value);

    const blob = new Blob([cardMarkup.value], {
      type: "text/html;charset=utf-8",
    });
    url.value = URL.createObjectURL(blob);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <iframe src={url.value} />
      <button
        type="button"
        onClick$={() => {
          copyHtml(cardMarkup.value);
        }}
      >
        Copy Markup
      </button>
      <button
        type="button"
        onClick$={() => {
          downloadHtml(url.value);
        }}
      >
        Download
      </button>
    </div>
  );
});

function makeFragment(classes: string[], text: string) {
  return `<span class="${classes.join(" ")}">${text}</span>`;
}

function downloadHtml(url: string) {
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "card-markup.html";

  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

async function copyHtml(html: string) {
  try {
    await navigator.clipboard.writeText(html);
  } catch (err) {
    // TODO: Show message to user.
    console.error("Error copying to clipboard:", err);
  }
}
