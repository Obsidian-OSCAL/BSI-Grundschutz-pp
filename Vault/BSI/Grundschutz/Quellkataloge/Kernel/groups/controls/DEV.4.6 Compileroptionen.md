---
tags: Secure_Compiling_Practices
class: BSI-Stand-der-Technik-Kernel
type: control
control: DEV.4.6 Compileroptionen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DEV.4.6 - Compileroptionen
Tags: "[Secure Compiling Practices](tags_Secure Compiling Practices)"
Gruppe: [DEV.4 Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Entwicklung (DEV)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV%20Entwicklung.md)**<br> ***  &rarr; [Softwareentwicklung - Code](BSI/Grundschutz/Quellkataloge/Kernel/groups/DEV.4%20Softwareentwicklung%20-%20Code.md) *** | Anwendungen | SOLLTE | Compileroptionen für Sicherheitsfunktionen | vor dem Release | aktivieren | Freigabeplan | >Entwicklung für Anwendungen SOLLTE Compileroptionen für Sicherheitsfunktionen vor dem Release aktivieren.

> [!info]- Guidance
>Compileroptionen wie Stack Canaries, PIE, PIE, CFI können automatisch Schutzmechanismen in Programme einbauen. Bewährte Praxis ist es, diese Compileroptionen zu aktivieren, sofern es keine entgegenstehenden besonderen Gründe gibt, darauf im Einzelfall zu verzichten. Werden interpretierte Programmiersprachen verwendet, so ist die Anforderung analog auf die Interpreter-Optionen anzuwenden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 615f77e2-9734-4778-ba5a-95a6b80a92d9 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 615f77e2-9734-4778-ba5a-95a6b80a92d9 |
