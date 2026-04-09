---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.4 UDP-basierte Angriffe
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.4 - UDP-basierte Angriffe
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Netze | SOLLTE | bekannte UDP-basierte Angriffsmethoden |  | blockieren | Firewallregeln | >Architektur für Netze SOLLTE bekannte UDP-basierte Angriffsmethoden blockieren.

> [!info]- Guidance
>UDP-basierte Angriffsmethoden (englisch: known UDP-based attack vectors) sind hierbei Techniken zu verstehen, die das User Datagram Protocol (UDP) ausnutzen. UDP ist das am meisten verwendete Protokoll für die Übertragung von Datenstreams. Aufgrund seiner verbindungslosen Eigenschaft ermöglicht UDP eine sehr schnelle Datenübertragung und wird daher oft für zeitkritische Anwendungen wie Videostreaming, VoIP oder DNS-Anfragen verwendet. Genau diese Eigenschaft macht es jedoch anfällig für Missbrauch, da die Absenderadresse leicht gefälscht werden kann (IP-Spoofing).  Beispiele für Angriffe sind Sequence Number Guessing, DHCP Starvation und UDP Hole-Punching Abuse. Die Anforderung kann durch Blockieren solcher Verbindungen oder nur bestimmter Mechanismen umgesetzt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d2b4e523-ee05-47ae-8d5e-95f30015dce2 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | d2b4e523-ee05-47ae-8d5e-95f30015dce2 |
