---
tags:
- det612-prm1
- det612-prm2
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.6.1.2 Automatische Alarmierung
parent_control: DET.6.1 Beurteilung von Ereignissen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.6.1.2 - Automatische Alarmierung
Gruppe: [DET.6 Vorfallserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.6%20Vorfallserkennung.md)
---

** Übergeordnetes Control: ** [DET.6.1 Beurteilung von Ereignissen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.6.1%20Beurteilung%20von%20Ereignissen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Vorfallserkennung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.6%20Vorfallserkennung.md) *** |  | SOLLTE | bei sicherheitskritischen Ereignissen eine Alarmierung von {{für die Vorfallsbehandlung zuständigen Personen oder Rollen}} | durch {{einen automatisierten Mechanismus}} | ausführen | Detektions-Konzept | >Detektion SOLLTE bei sicherheitskritischen Ereignissen eine Alarmierung von {{ insert: param, det.6.1.2-prm1 }} durch {{ insert: param, det.6.1.2-prm2 }} ausführen.

> [!info]- Guidance
>Für die Definition eines sicherheitskritischen Ereignisses, siehe Glossar (Namensräume des Grundschutz++). Bewährt hat sich hierzu der Einsatz eines Security Information and Event Management Systems (SIEM), das die Audit Logs verschiedener Hersteller auf Ereignisse überprüfen und diese korrelieren kann. Passen Sie Schwellwerte und Kriterien so an, dass keine Alarmmüdigkeit (alert fatigue) beim Personal aufkommt.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | f45e08b7-8f42-469a-aa22-63b93daba60e |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | f45e08b7-8f42-469a-aa22-63b93daba60e |

> [!info]- Links> > required: [DET.6.1.1 Automatisierte Feststellung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.6.1.1%20Automatisierte%20Feststellung.md)
