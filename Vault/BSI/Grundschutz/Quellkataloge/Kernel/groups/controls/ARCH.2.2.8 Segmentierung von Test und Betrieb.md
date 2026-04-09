---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.8 Segmentierung von Test und Betrieb
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.8 - Segmentierung von Test und Betrieb
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | Verbindungen zwischen Testumgebungen und Betrieb |  | einschränken | Netzplan | >Architektur für Netze SOLLTE Verbindungen zwischen Testumgebungen und Betrieb einschränken.

> [!info]- Guidance
>Entwicklungs-, Staging- und Testumgebungen haben oft geringere Sicherheitsvorkehrungen als Produktivsysteme. Eine saubere Trennung zwischen Test- und Produktivumgebung verhindert Übergriffe auf das Produktivsystem und vermeidet Ressourcenkonflikte.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 53ea67c4-1ee1-47f3-abc2-0f2462c57cd1 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 53ea67c4-1ee1-47f3-abc2-0f2462c57cd1 |

> [!info]- Links> > related: [TEST.3.1.4 Testumgebung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.3.1.4%20Testumgebung.md)
