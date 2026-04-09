---
tags: Error_Handling
class: BSI-Stand-der-Technik-Kernel
type: control
control: TEST.3.1.8 Fuzzing
parent_control: TEST.3.1 Sicherheitstest
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# TEST.3.1.8 - Fuzzing
Tags: "[Error Handling](tags_Error Handling)"
Gruppe: [TEST.3 Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md)
---

** Übergeordnetes Control: ** [TEST.3.1 Sicherheitstest](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.3.1%20Sicherheitstest.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Änderungen und Tests (TEST)](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST%20Änderungen%20und%20Tests.md)**<br> ***  &rarr; [Tests](BSI/Grundschutz/Quellkataloge/Kernel/groups/TEST.3%20Tests.md) *** |  | KANN | die Stabilität gegen Fehlerzustände oder Abstürze bei der Eingabe großer Mengen an Zufallsdaten |  | testen | Freigabeplan | >Änderungen und Tests KANN die Stabilität gegen Fehlerzustände oder Abstürze bei der Eingabe großer Mengen an Zufallsdaten testen.

> [!info]- Guidance
>Fuzzing ist eine automatisierte Softwaretestmethode, mit der unerwartete Schwachstellen und Fehler in Anwendungen durch Eingabe zufälliger, unerwarteter oder ungültiger Daten aufgedeckt werden können. Der Hauptzweck besteht darin, Grenzbedingungen zu prüfen und Programmabstürze, Speicherlecks oder sicherheitskritische Fehler wie Buffer Overflows zu identifizieren, bevor Angreifer diese ausnutzen können. Kann durch spezialisierte Tools oder kontinuierliches Fuzzing in der CI/CD-Pipeline umgesetzt werden. Für einen effektiven Einsatz empfiehlt es sich, mit strukturiertem Fuzzing zu beginnen, das auf bekannten Protokollspezifikationen oder Datenformaten basiert, Fuzzing-Tests in die frühen Phasen des Entwicklungszyklus zu integrieren, alle gefundenen Fehler systematisch zu dokumentieren und zu beheben, sowie regelmäßig neue Testfälle auf Basis entdeckter Schwachstellen zu entwickeln, um die Testabdeckung kontinuierlich zu verbessern.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5bd70855-3756-4f70-b5d5-98e5211cd1ed |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 5bd70855-3756-4f70-b5d5-98e5211cd1ed |
