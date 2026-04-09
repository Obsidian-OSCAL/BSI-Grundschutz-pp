---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.9 Journaling
parent_control: KONF.12.1 Eingabevalidierung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.9 - Journaling
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *** | Dateiserver | SOLLTE | Dateisystem-Journaling |  | aktivieren | Konfigurationshistorie | >Konfiguration für Dateiserver SOLLTE Dateisystem-Journaling aktivieren.

> [!info]- Guidance
>Beim Journaling werden Änderungen an Dateien zunächst in einem speziellen Protokoll (Journal) aufgezeichnet, bevor sie tatsächlich geschrieben werden, um Datenintegrität und Konsistenz sicherzustellen. Auf einem Dateiserver ist dies besonders wichtig, da es das Risiko von Datenverlusten bei plötzlichen Abstürzen oder Stromausfällen minimiert und eine schnelle Wiederherstellung ermöglicht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 87ccf38b-ac1d-4e14-a599-b536321b0f75 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 87ccf38b-ac1d-4e14-a599-b536321b0f75 |
