### ohne gültige Verlinkung

```dataview
table without id
  uuid as "UUID",
  type as "Typ"
where type = "url-entry-reference"
  and !original
sort uuid asc


```

### komplette Liste

```dataviewjs
const rows = dv.pages()
  .where(p => p.type === "url-entry-reference")
  .sort(p => p.uuid)
  .map(p => {
    const original = p.original ? String(p.original) : null;
    const target = original ? dv.page(original) : null;

    return [
      p.uuid ?? "",
      original ? dv.fileLink(original) : "",
      target?.bsi_type ?? ""
    ];
  });

dv.table(["UUID", "Originaldatei", "Typ"], rows);
```