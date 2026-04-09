---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.3 Segmentierung von Servern und Clients
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.3 - Segmentierung von Servern und Clients
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | Verbindungen zwischen Hostsystemen und Clients |  | einschränken | Netzplan | >Architektur für Netze SOLLTE Verbindungen zwischen Hostsystemen und Clients einschränken.

> [!info]- Guidance
>Die Anforderung gilt auch, wenn die IT-Systeme nur noch als VMs oder Container existieren. Die Segmentierung kann hier in die virtuelle Netzwerk‑Ebene verlagert werden, sodass die Segmentierung weder vom Hypervisor noch von den Workloads umgangen wird. Die Anforderung kann auch physisch durch dedizierte Infrastruktur für VDI/Client‑VMs umgesetzt werden. Um die klare Trennung sicherzustellen, wird empfohlen kein Bridging zwischen Port‑Groups sowie auf dem virtuellen Switch keinen promiscuous Mode zu verwenden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8af42e9e-5340-4690-9567-88a5309aee3a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 8af42e9e-5340-4690-9567-88a5309aee3a |
