
## Dokumente mit DORA Bezug

``` dataviewjs
const BASE_PATH = "Nicht normativ/Bibliothek/Dateien/";

const ref = dv.page("Nicht normativ/Bibliothek/Dateien/Index");
// const docs = ref?.dokumente ?? [];
const docs = (ref?.dokumente ?? [])
  .filter(doc => doc.topic === "DORA");
  
dv.table(
  ["Dokument", "Typ", "UUID", "Version", "Stand"],
  docs.map(doc => {
    const fullPath = BASE_PATH + doc.file;
    const exists = app.vault.getAbstractFileByPath(fullPath);

    const mainLink = exists
      ? dv.fileLink(fullPath, false, doc.name)
      : `[${doc.name}](${doc.url})`;

	const subLink = doc.subtitle
	  ? dv.el("div",
	      exists
	        ? `[[${fullPath}|${doc.subtitle}]]`
	        : `[${doc.subtitle}](${doc.url})`,
	      { attr: { style: "font-size: 0.85em; opacity: 0.8;" } }
	    )
	  : null;

    const dokument = subLink
      ? [mainLink, subLink]
      : mainLink;

    const controls = (doc.controls ?? [])
      .map(c => `[[BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/${c}|${c}]]`)
      .join("  \n");

	const version = doc.version?.toString?.() ?? "";

    return [
      dokument,
      doc.type ?? "",
      doc.uuid ?? "",
      version,
      doc.stand ?? "",
      controls
    ];
  })
);

```

