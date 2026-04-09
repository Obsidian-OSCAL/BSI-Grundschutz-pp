---
tags: det4121-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.12.1 Auslastung des Netzes
parent_control: DET.4.12 Monitoring der Netzverfügbarkeit
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.12.1 - Auslastung des Netzes
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

** Übergeordnetes Control: ** [DET.4.12 Monitoring der Netzverfügbarkeit](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.12%20Monitoring%20der%20Netzverfügbarkeit.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Netze | KANN | die Auslastung des Netzes | anhand von {{Schwellwerten}} | überwachen | Detektions-Konzept | >Detektion für Netze KANN die Auslastung des Netzes anhand von {{ insert: param, det.4.12.1-prm1 }} überwachen.

> [!info]- Guidance
>Die Überwachung der Netzauslastung ermöglicht eine schnelle Reaktion bei Verfügbarkeitsproblemen. Wichtige Indikatoren sind Auslastung der verfügbaren Bandbreite, Netzlatenz und Packverluste. Unerwartet hoher Datenverkehr kann auch ein Indiz für einen unautorisierten Zugriff auf große Datenmengen sein. Zur Umsetzung ist es zweckmäßig zunächst Normwerte zu ermitteln (Baselining).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c17dd877-0922-4ca8-a38b-1d2f9ae04f0d |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | c17dd877-0922-4ca8-a38b-1d2f9ae04f0d |
