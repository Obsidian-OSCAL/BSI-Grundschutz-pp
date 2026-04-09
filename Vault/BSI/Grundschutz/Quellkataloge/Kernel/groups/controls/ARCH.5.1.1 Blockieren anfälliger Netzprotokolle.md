---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.5.1.1 Blockieren anfälliger Netzprotokolle
parent_control: ARCH.5.1 Einschränkung und Inspektion von Verbindungen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.5.1.1 - Blockieren anfälliger Netzprotokolle
Gruppe: [ARCH.5 Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md)
---

** Übergeordnetes Control: ** [ARCH.5.1 Einschränkung und Inspektion von Verbindungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.5.1%20Einschränkung%20und%20Inspektion%20von%20Verbindungen.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Perimeterschutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.5%20Perimeterschutz.md) *** | Netze | SOLLTE | anfällige Netzwerkprotokolle |  | blockieren | Firewallregeln | >Architektur für Netze SOLLTE anfällige Netzwerkprotokolle blockieren.

> [!info]- Guidance
>Anfällig sind Netzprotokolle, wenn sie veraltete oder gar keine Algorithmen zur Verschlüsselung oder Integritätsprüfung verwenden. Hierzu gehören Protokolle wie Telnet, SMB v1, SNMP v1/v2c. Für aktuelle Verschlüsselungsalgorithmen siehe BSI TR 02102.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b4977fc1-727c-41c8-a397-f84ba68fc11a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | b4977fc1-727c-41c8-a397-f84ba68fc11a |
