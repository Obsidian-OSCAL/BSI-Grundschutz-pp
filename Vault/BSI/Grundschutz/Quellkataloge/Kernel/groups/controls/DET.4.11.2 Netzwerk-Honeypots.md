---
tags: Zero_Trust_Advanced_Persistent_Threats_APT_Honeypot
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.11.2 Netzwerk-Honeypots
parent_control: DET.4.11 Anomalien in Netzen und am Perimeter
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.11.2 - Netzwerk-Honeypots
Tags: "[Zero Trust](tags_Zero Trust)" "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))" "[Honeypot](tags_Honeypot)"
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

** Übergeordnetes Control: ** [DET.4.11 Anomalien in Netzen und am Perimeter](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.11%20Anomalien%20in%20Netzen%20und%20am%20Perimeter.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Netze | KANN | Netzwerk-Honeypots |  | installieren | Detektions-Konzept | >Detektion für Netze KANN Netzwerk-Honeypots installieren.

> [!info]- Guidance
>Honeypots sind Systeme, die das Verhalten eines Betriebsservers simulieren, um bei netzbasierten Angriffen Informationen über den Angriff zu erhalten. Geeignet sind z.B. vermeintliche Rechnungsbearbeitungssysteme oder Datenbank-Server. Alarmierungsereignisse können hier z.B. Login-Versuche oder unerwartete API-Abfragen sein. Allerdings kann es hierbei zu falsch-positiv Vorfallsmeldungen kommen, insbesondere wenn die Honeypots dort platziert werden, wo sie für legitime Nutzende leicht zugänglich sind, oder wenn legitime Netzwerkscans bereits eine Alarmierung auslösen. Daher ist es sinnvoll, die konkreten Einsatzgegebenheiten in einer Risikoanalyse zu betrachten und den möglichen Detektionsmehrwert mit den potenziellen Risiken solcher falsch-positiv Meldungen abzuwägen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 7715c6ec-8cf9-446c-807a-783d61ebd539 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 7715c6ec-8cf9-446c-807a-783d61ebd539 |

> [!info]- Links> > related: [DET.4.10 Host-basierte Köder](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.4.10%20Host-basierte%20Köder.md)
