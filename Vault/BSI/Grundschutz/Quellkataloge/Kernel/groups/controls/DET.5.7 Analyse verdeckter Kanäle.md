---
tags:
- Pentest_Advanced_Persistent_Threats_APT
- det57-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.7 Analyse verdeckter Kanäle
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.7 - Analyse verdeckter Kanäle
Tags: "[Pentest](tags_Pentest)" "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))"
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *** |  | KANN | den Informationsverbund auf verdeckte Kommunikationskanäle | {{regelmäßig}} | überprüfen | Detektions-Konzept | >Detektion KANN den Informationsverbund auf verdeckte Kommunikationskanäle {{ insert: param, det.5.7-prm1 }} überprüfen.

> [!info]- Guidance
>Ein verdeckter Kanal (Covert Channel) ist ein heimlicher Kommunikationskanal, mit dem Angreifer legitime Verbindungen ausnutzen, um verdeckt Daten zu übertragen. Viele dieser verdeckten Kanäle können durch darauf spezialisierte Erkennungswerkzeuge (sog. Warden) erkannt werden. Aufgrund der Vielzahl denkbarer verdeckter Kommunikationswege können solche Kanäle jedoch kaum vollständig verhindert werden. Ergänzende Maßnahmen wie Traffic Normalization können sie jedoch ausbremsen oder unerkannt eliminieren. Relevant sind dabei sowohl Speicherkanäle (Storage Channel) als auch Zeitkanäle (Timing Channel).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8f64e735-9870-4a8d-8b7b-220b93baddba |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 8f64e735-9870-4a8d-8b7b-220b93baddba |

> [!info]- Links> > related: [DET.5.6 Threat Hunting](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.6%20Threat%20Hunting.md)
