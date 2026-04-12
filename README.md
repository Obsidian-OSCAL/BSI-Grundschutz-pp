# BSI Grundschutz++ für Obsidian

<img src="https://github.com/Obsidian-OSCAL/BSI-Grundschutz-pp/blob/a1c1aa7a434da08af20f2f96284af9a3e7fc3d51/obsidian_net.png" align="right" width="200" />

Das [Bundesamt für Sicherheit in der Informationstechnik (BSI)](https://www.bsi.bund.de/) hat mit dem Grundschutz++ einen maschinenlesbaren Grundschutzkatalog in OSCAL veröffentlicht. Dieses Vault stellt eine automatisch generierte Darstellung des Katalogs für [Obsidian](https://obsidian.md/) bereit.

Obsidian ist eine Software für Wissensmanagement basierend auf Notizen, vergleichbar mit einem privaten Wiki mit Zusatzfunktionen. Ich nutze diese Software privat seit mehreren Jahren zur persönlichen Dokumentation von regulatorischen Anforderungen, daher wollte ich auch den neuen BSI Grundschutz++ einbinden. Da dieser netterweise ein OSCAL Format hat, kann man dies auch automatisieren ... was hier geschehen ist.

**Status (9.4.2026)** : Ein erster veröffentlicher Stand, der bereits die grundlegende Struktur der Kataloge/Gruppen/Controls abbildet.

<br clear="right"/>

## Hinweise zur Nutzung
Die Inhalte befinden sich im Unterordner "Vault", um diese zu nutzen: einfach die Inhalte des Ordners in einen eigenen Obsidian Vault kopieren.
Die Inhalte sind für Obsidian aufbereitet und nutzen spezielle Funktionen, dazu gehört auch der Einsatz von Plugins, die installiert und aktiviert werden müssen. Die aktuell notwendigen Plugins finden Sie in der folgenden Liste:
* [Dataview](https://obsidian.md/plugins?id=dataview) <br> Zusätzlich muss in der Konfiguration des Plugins Javascript aktiviert sein (dataviesjs)
* [Enhanced Tables](https://obsidian.md/plugins?id=enhanced-tables)

## Lizenzinformationen
Dieses Vault basiert auf Inhalten des Bundesamt für Sicherheit in der Informationstechnik (BSI) aus dem Projekt „Stand der Technik Bibliothek“ (Grundschutz++).  
Originalquelle: [https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek](https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek)

Verwendete Bestandteile:
- Anwendungskatalog (OSCAL)
- zugehörige Namespace-Definitionen
- Quellkataloge

Die konkret verwendeten Dateien sind innerhalb dieses Vaults enthalten.  
Zu jeder Datei sind – soweit verfügbar – die jeweilige Originalquelle (Pfad im Repository) sowie das Downloaddatum dokumentiert.

Die Originalinhalte stehen unter der Lizenz **CC BY-SA 4.0**:  
- im Repository: https://github.com/BSI-Bund/Stand-der-Technik-Bibliothek?tab=readme-ov-file#
- Original: [https://creativecommons.org/licenses/by-sa/4.0/](https://creativecommons.org/licenses/by-sa/4.0/)

### Bearbeitungshinweis

Die Inhalte wurden automatisiert aus dem OSCAL-Format (JSON) in ein menschenlesbares Markdown-Format für die Nutzung in Obsidian konvertiert sowie strukturell aufbereitet (z. B. Aufteilung in einzelne Dateien, Verlinkung, Formatierung).

Dabei wurden:

- keine inhaltlichen Änderungen vorgenommen,
- keine fachlichen Aussagen verändert,
- lediglich Darstellung und Struktur angepasst.

Abweichungen hiervon sind explizit gekennzeichnet.

### Lizenz der abgeleiteten Inhalte

Die in diesem Vault bereitgestellte aufbereitete Version stellt eine Bearbeitung im Sinne der Lizenz dar und wird daher ebenfalls unter der **Creative Commons Attribution-ShareAlike 4.0 International License** veröffentlicht.

### Screenshots 
**Einstieg über Katalog und Gruppen**
<img src="obsidian_window.png"/>

**Darstellung eines Control**
<img src="obsidian_control.png"/>

**Darstellung der Verlinkung der Notizen im Vault**
<img src="obsidian_graph.png"/>
</div>
