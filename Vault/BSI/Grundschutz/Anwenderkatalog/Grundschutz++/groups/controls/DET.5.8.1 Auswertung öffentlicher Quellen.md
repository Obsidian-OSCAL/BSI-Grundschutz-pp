---
tags:
- Data_Leak
- det581-prm1
- det581-prm2
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.8.1 Auswertung öffentlicher Quellen
parent_control: DET.5.8 Bedrohungsanalyse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.8.1 - Auswertung öffentlicher Quellen
Tags: "[Data Leak](tags_Data Leak)"
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.8 Bedrohungsanalyse](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.5.8%20Bedrohungsanalyse.md)
> [!info]- Untergeordnete Controls
> [DET.5.8.1.1 Unautorisierte Publikation](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.5.8.1.1%20Unautorisierte%20Publikation.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.5%20Management%20von%20Schwachstellen.md) *** |  | KANN | öffentliche Quellen auf Hinweise zu eigenen Schwachstellen | anhand von {{Kriterien zur Suche}} {{regelmäßig}} | überprüfen | Detektions-Konzept | >Detektion KANN öffentliche Quellen auf Hinweise zu eigenen Schwachstellen anhand von {{ insert: param, det.5.8.1-prm1 }} {{ insert: param, det.5.8.1-prm2 }} überprüfen.

> [!info]- Guidance
>Öffentliche Quellen können Hinweise zu aktuellen Schwachstellen geben oder sogar auf die Vorbereitung von Angriffen geben, beispielsweise auf die Nachahmung von Webseiten oder Marken, sowie Typosquatting. Auch Datenleaks wie API-Keys oder falsch konfigurierte Cloud-Systeme können hierüber aufgedeckt werden.  Relevante öffentliche Quellen können z.B. Schwachstellendatenbanken, Fachmedien, Security Mailing Listen, Dark Web Foren, Code Repositories, Suchmaschinen oder Soziale Medien sein. Als Kriterien zur Auswahl können verschiedene Suchbegriffe oder Suchmuster herangezogen werden, z.B. Bezeichnungen verwendeter Betriebssysteme oder Komponenten, eigene DNS-Domains, E-Mailadressen, API-Schnittstellen, Markennamen.  Die Umsetzung kann durch eigenes Personal oder Threat Intelligence Dienstleister erfolgen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 42bf3e91-d270-4a79-8ae9-a22918f94ad7 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 42bf3e91-d270-4a79-8ae9-a22918f94ad7 |
