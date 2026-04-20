# Exports

Dieser Ordner enthält die aus dem Obsidian-/OSCAL-Bestand abgeleiteten Veröffentlichungsformate des Projekts.  
Ziel ist es, die Inhalte des BSI-Grundschutz++ nicht nur im Obsidian Vault, sondern auch in direkt nutzbaren Leseformaten bereitzustellen.

## Struktur

## Verzeichnisstruktur

```text
exports/
├── html/
└── pdf/
```

### `html/`
Enthält die HTML-Versionen der generierten Dokumente.

Vorhandene Inhalte:

- `Anwenderkatalog Grundschutz++ Gesamt.html`
- `Anwenderkatalog Grundschutz++ Gesamt kurz.html`
- `BSI Anforderungen zum Risikomanagement Gesamt.html`
- `BSI Anforderungen zum Risikomanagement Gesamt kurz.html`
- `BSI Methodik Grundschutz++ Gesamt.html`
- `BSI Methodik Grundschutz++ Gesamt kurz.html`
- `BSI Stand der Technik Kernel Gesamt.html`
- `BSI Stand der Technik Kernel Gesamt kurz.html`
- `bsi-grundschutz-styles.css` 
- `toc.js` 

Hinweis:
- Die HTML-Dateien sind für die direkte Ansicht im Browser gedacht.
- `bsi-grundschutz-styles.css` enthält die gemeinsame Formatierung.
- `toc.js` unterstützt die Navigation, z. B. über Inhaltsverzeichnisse.

### `pdf/`
Enthält die PDF-Versionen der generierten Dokumente.

Vorhandene Inhalte:

- `Anwenderkatalog Grundschutz++ Gesamt.pdf`
- `Anwenderkatalog Grundschutz++ Gesamt kurz.pdf`
- `BSI Anforderungen zum Risikomanagement Gesamt.pdf`
- `BSI Anforderungen zum Risikomanagement Gesamt kurz.pdf`
- `BSI Methodik Grundschutz++ Gesamt.pdf`
- `BSI Methodik Grundschutz++ Gesamt kurz.pdf`
- `BSI Stand der Technik Kernel Gesamt.pdf`
- `BSI Stand der Technik Kernel Gesamt kurz.pdf`
- `Grundschutz++ Namespaces x Controls.pdf`

## Inhaltliche Einordnung

Die Exporte bilden lesbare, verteilbare Artefakte aus den im Repository gepflegten und aufbereiteten Grundschutz++-Inhalten.  
Während der Obsidian Vault vor allem für Navigation, Verlinkung und tägliche Arbeit geeignet ist, sind die Exporte für folgende Zwecke hilfreich:

- Weitergabe ohne Obsidian
- Lesefassungen für Review und Abstimmung
- Druck- oder Archivversionen
- Referenzdokumente für Audits, Analysen und Dokumentation

## Namenskonvention

Die Dateinamen folgen einer einfachen Systematik:

- **Gesamt** = vollständige Fassung des jeweiligen Dokuments
- **kurz** = verkürzte bzw. kompaktere Fassung
- thematische Präfixe wie **Anwenderkatalog**, **Methodik**, **Risikomanagement** oder **Stand der Technik Kernel** kennzeichnen den jeweiligen Dokumenttyp

## Beziehung zum restlichen Repository

Dieses Verzeichnis enthält nur die erzeugten Ausgabeformate.  
Die eigentliche inhaltliche Aufbereitung für Obsidian befindet sich im übrigen Repository, insbesondere im Vault-Bereich.  
Die Exporte sind damit als abgeleitete Artefakte der zugrunde liegenden OSCAL-/Obsidian-Aufbereitung zu verstehen.

## Lizenz und Herkunft

Die Inhalte dieses Projekts basieren auf den vom BSI veröffentlichten Grundschutz++-Beständen im OSCAL-Format.  
Bitte beachten Sie für Herkunft, Bearbeitung und Lizenz die Hinweise im Haupt-README des Repositorys.


