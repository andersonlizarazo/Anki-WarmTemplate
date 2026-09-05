

type Metadata = {
    name: string,
    side: "front" | "back" | "both"
}

type AnkiField = 
    | (Metadata & { type: "text"; style: TextStyle })
    | (Metadata & { type: "audio"})
    | (Metadata & { type: "image"})

type TextStyle = {
    purpose: "general"| "emphasis"| "ipa";
    size: "small" | "regular" | "large";
}
