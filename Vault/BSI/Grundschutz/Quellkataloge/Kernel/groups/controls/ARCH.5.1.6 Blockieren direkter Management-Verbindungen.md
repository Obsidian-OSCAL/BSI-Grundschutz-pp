---
tags: Internet_Exposure
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.6 Blockieren direkter Management-Verbindungen
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.6 - Blockieren direkter Management-Verbindungen
Tags: "[Internet Exposure](tags_Internet Exposure)"
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Externe Netzanschlüsse | SOLLTE | Verbindungen zu Management-Schnittstellen |  | blockieren | Firewallregeln | >Architektur für Externe Netzanschlüsse SOLLTE Verbindungen zu Management-Schnittstellen blockieren.

> [!info]- Guidance
>Zum Internet offene Management-Schnittstellen werden von Angreifern durch Scans leicht gefunden und sind häufig Ziel von Angriffen. Deshalb ist es sinnvoll, alle eingehenden Verbindungen zu Management-Schnittstellen aus externen Netzen zu blockieren, einschließlich der Verwaltung von VPN- und Firewallsystemen selbst. Wenn eine Administration dieser Systeme aus der Ferne erforderlich ist, so kann dieser Zugriff stattdessen über ein VPN in das interne Netz hergestellt werden, wobei auch hiermit ein erhöhten Risiko für Angriffe einhergeht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 9e1420ba-9cc0-4d0d-a127-36881c1b90e5 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 9e1420ba-9cc0-4d0d-a127-36881c1b90e5 |
