---
tags: Security_by_Design
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.2.3 Ausführbarkeit mit minimalen Rechten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.2.3 - Ausführbarkeit mit minimalen Rechten
Tags: "[Security by Design](tags_Security by Design)"
Gruppe: [DEV.2 Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Security by Design](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.2%20Softwareentwicklung%20-%20Security%20by%20Design.md) *** | Anwendungen | SOLLTE | die fehlerfreie Ausführung mit den geringst möglichen Berechtigungen |  | verankern | Freigabeplan | >Entwicklung für Anwendungen SOLLTE die fehlerfreie Ausführung mit den geringst möglichen Berechtigungen verankern.

> [!info]- Guidance
>Die Anwendung ermöglicht die Ausführung mit den geringst möglichen Berechtigungen, wenn sie nur die Berechtigungen benötigt, die für die gerade intendierte Funktionalität erforderlich sind (also z.B. auch ohne Kamerazugriff funktioniert, wenn Nutzende nur vorhandene Bilder betrachten möchten). Sind einzelne Berechtigungen nicht vorhanden, so funktioniert die Anwendung mit entsprechenden Einschränkungen weiterhin (Graceful Degradation).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 88b87ec7-be5f-4740-a226-6b23994f86b4 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 88b87ec7-be5f-4740-a226-6b23994f86b4 |
