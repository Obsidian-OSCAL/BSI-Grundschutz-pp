---
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.1.7 Was, Wann, Wo
parent_control: DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.1.7 - Was, Wann, Wo
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

** Übergeordnetes Control: ** [DET.3.1 Protokollierung sicherheitsrelevanter Ereignisse](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1%20Protokollierung%20sicherheitsrelevanter%20Ereignisse.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *** | Anwendungen | SOLLTE | zu jedem sicherheitsrelevanten Ereignis | mindestens Zeitpunkt, die Quelle und das Zielobjekt | protokollieren | Audit Log | >Detektion für Anwendungen SOLLTE zu jedem sicherheitsrelevanten Ereignis mindestens Zeitpunkt, die Quelle und das Zielobjekt protokollieren.

> [!info]- Guidance
>Für die Definition eines Sicherheitsrelevanten Ereignisses, siehe Glossar (Namensräume des Grundschutz++). Damit einem Ereignis zuverlässig ein bestimmter Zeitpunkt zugewiesen werden kann, ist eine einheitliche Zeitquelle für die Systemuhr (meist über NTP oder PTP) als Voraussetzung erforderlich.  Bei der Protokollierung der Herkunft oder Quelle (z.B. Gerätenamen, IP-Adresse) besteht ein enger Zusammenhang zu Compliance-Anforderungen, etwa zum Datenschutz.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c4cb825e-c401-44a5-8ecf-de12b33e6a16 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | c4cb825e-c401-44a5-8ecf-de12b33e6a16 |

> [!info]- Links> > required: [KONF.4.5 Zeitquellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.4.5%20Zeitquellen.md)
