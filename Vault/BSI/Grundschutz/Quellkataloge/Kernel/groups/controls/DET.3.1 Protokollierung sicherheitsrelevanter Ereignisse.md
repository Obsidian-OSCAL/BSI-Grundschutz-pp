---
tags: det31-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1 - Protokollierung sicherheitsrelevanter Ereignisse
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

> [!info]- Untergeordnete Controls
> [DET.3.1.1 Authentifizierungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.1%20Authentifizierungen.md)> [DET.3.1.2 Ausgeführte Kommandozeilenbefehle](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.2%20Ausgeführte%20Kommandozeilenbefehle.md)> [DET.3.1.3 Anbindung von Peripheriegeräten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.3%20Anbindung%20von%20Peripheriegeräten.md)> [DET.3.1.4 Systemfehler](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.4%20Systemfehler.md)> [DET.3.1.5 Störungen der Netzerreichbarkeit](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.5%20Störungen%20der%20Netzerreichbarkeit.md)> [DET.3.1.6 Systemspezifische Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.6%20Systemspezifische%20Ereignisse.md)> [DET.3.1.7 Was, Wann, Wo](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.7%20Was,%20Wann,%20Wo.md)> [DET.3.1.8 Privilegierte Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.8%20Privilegierte%20Ereignisse.md)> [DET.3.1.9 Fehler der Anwendung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.9%20Fehler%20der%20Anwendung.md)> [DET.3.1.10 Nutzungsstatistik](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.10%20Nutzungsstatistik.md)> [DET.3.1.11 Anwendungsspezifische Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.11%20Anwendungsspezifische%20Ereignisse.md)> [DET.3.1.12 Datenverarbeitungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.12%20Datenverarbeitungen.md)> [DET.3.1.13 Integration von Cloud-Diensten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.13%20Integration%20von%20Cloud-Diensten.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *** | Anwendungen | SOLLTE | Sicherheitsrelevante Ereignisse | mindestens für {{eine bestimmte Frist}} | protokollieren | Detektions-Konzept | >Detektion für Anwendungen SOLLTE Sicherheitsrelevante Ereignisse mindestens für {{ insert: param, det.3.1-prm1 }} protokollieren.

> [!info]- Guidance
>Für die Definition eines Sicherheitsrelevanten Ereignisses, siehe Glossar (Namensräume des Grundschutz++). Relevant sind hierbei insbesondere die Protokollierung auf zentralen Diensten und Servern. Dazu gehören auch vorhandene Cloud-Anwendungen oder -Dienste.  Hier besteht ein enger Bezug zur Praktik Änderungen und Tests.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | dc58d353-86e1-4070-9f86-b7f0e0f93305 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | dc58d353-86e1-4070-9f86-b7f0e0f93305 |
