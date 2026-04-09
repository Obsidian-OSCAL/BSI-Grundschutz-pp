---
tags: Hochverfügbarkeit_Failover
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.8.3 Redundante Server
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.8.3 - Redundante Server
Tags: "[Hochverfügbarkeit](tags_Hochverfügbarkeit)" "[Failover](tags_Failover)"
Gruppe: [ARCH.8 Ausfallsicherheit](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.8%20Ausfallsicherheit.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Ausfallsicherheit](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.8%20Ausfallsicherheit.md) *** | Anwendungen | KANN | für die Funktionsfähigkeit der Anwendung erforderliche Hostsysteme redundant |  | installieren | Konfigurationshistorie | >Architektur für Anwendungen KANN für die Funktionsfähigkeit der Anwendung erforderliche Hostsysteme redundant installieren.

> [!info]- Guidance
>Redundanz ist gegeben, wenn sowohl das System als auch seine Netzanbindung redundant vorhanden sind. Das System selbst ist nur redundant, wenn auch seine Datenspeicher und Stromversorgung redundant ausgelegt sind. Automatische Umschaltung meint das Failover. Die Anforderung kann durch netzbasierte Load Balancer oder serverseitige automatisch Umschaltung umgesetzt werden (z.B. durch Hello-Pakete).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d1a0c0ac-dc2e-4d90-b67d-b76eec256915 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | d1a0c0ac-dc2e-4d90-b67d-b76eec256915 |
