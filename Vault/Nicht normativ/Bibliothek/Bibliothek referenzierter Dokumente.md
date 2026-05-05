Die folgende Tabelle enthält eine Liste externer Dokumente, die im Anforderungskatalog des Grundschutz++ referenziert werden.
Die Liste wird manuell gepflegt und erhebt keinen Anspruch auf Aktualität und Vollständigkeit.

Hinweise zur Nutzung:
Die Liste wird dynamisch generiert, wenn ein Dokument lokal im Vault vorhanden ist, wird die Datei direkt angezeigt, ansonsten wird ein Link zu der Datei angezeigt. Bei häufiger Nutzung empfiehlt es sich die Dateien lokal im Ordner /Nicht normativ/Bibliothek/Dateien abzuspeichern. Aus rechtlichen Gründen werden die Dokumente selber nicht im Repository abgelegt.

Wenn zu einem Standard mehrere Dokumente vorhanden sind und es sich aus dem Text nicht direkt ergibt, welches Dokument referenziert wird, werden alle Dokumente aufgelistet.

## BSI Technische Richtlinien

``` dataviewjs
const BASE_PATH = "Nicht normativ/Bibliothek/Dateien/";

const ref = dv.page("Nicht normativ/Bibliothek/Dateien/Index");
// const docs = ref?.dokumente ?? [];
const docs = (ref?.dokumente ?? [])
  .filter(doc => doc.type === "BSI – Technische Richtlinie");
  
dv.table(
  ["Dokument", "Typ", "UUID", "Version", "Stand", "Controls"],
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

