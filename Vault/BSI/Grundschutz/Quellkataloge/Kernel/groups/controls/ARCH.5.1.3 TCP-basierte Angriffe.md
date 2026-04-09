---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.3 TCP-basierte Angriffe
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.3 - TCP-basierte Angriffe
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Netze | SOLLTE | bekannte TCP-basierte Angriffsmethoden |  | blockieren | Firewallregeln | >Architektur für Netze SOLLTE bekannte TCP-basierte Angriffsmethoden blockieren.

> [!info]- Guidance
>TCP ist das am meisten verwendete Protokoll für die zuverlässige Datenübertragung. Durch TCP-basierte Angriffe können IT-Systeme gehackt oder Daten unbemerkt ausgeleitet werden. Beispiele sind TCP Session Hijacking (ACK-number guessing), Overlapping-Segment Attacks, TCP Reset (RST) Injection, Xmas-tree Scanning. Die Anforderung kann durch Blockieren solcher Verbindungen oder nur bestimmter Mechanismen umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | cc1cf52d-6be3-4e7d-a5c0-6ecce6c282b1 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | cc1cf52d-6be3-4e7d-a5c0-6ecce6c282b1 |
