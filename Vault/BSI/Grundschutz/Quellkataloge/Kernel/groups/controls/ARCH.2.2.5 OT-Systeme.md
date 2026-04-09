---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.5 OT-Systeme
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.5 - OT-Systeme
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | Verbindungen zwischen OT-Systemen und anderen IT-Systemen |  | einschränken | Netzplan | >Architektur für Netze SOLLTE Verbindungen zwischen OT-Systemen und anderen IT-Systemen einschränken.

> [!info]- Guidance
>IT- und OT-Systeme haben typischerweise sehr unterschiedliche Risikoprofile (IT: Schnelllebig, viele Cybersicherheitsmechanismen, OT: Stabilität, weniger Cybersicherheitsmechanismen, beispielsweise industrielle Steuerungssysteme und Gebäudeautomationstechnik). Insbesondere der Zugriff auf OT-Funktionen (z. B. Öffnung zentraler Schließanlage) ist mit erhöhtem Risiko verbunden und könnte auch versehentlich z.B. durch Portscanner ausgelöst werden. Stattdessen ist es empfehlenswert, den Zugriff zu solchen Netzen nur über dafür vorgesehene Quellen zu ermöglichen (z. B. Sprungserver, bestimmte auslösende OT-Systeme).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 43badc07-0172-4666-9a72-0c0289b7f540 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 43badc07-0172-4666-9a72-0c0289b7f540 |
