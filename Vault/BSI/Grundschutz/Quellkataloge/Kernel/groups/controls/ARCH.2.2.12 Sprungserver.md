---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.12 Sprungserver
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.12 - Sprungserver
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.2%20Netzdesign.md) *** |  | KANN | Sprungserver |  | installieren | Netzplan | >Architektur KANN Sprungserver installieren.

> [!info]- Guidance
>Ein Sprungserver (englisch „jump server“ oder „jump host“) ist ein speziell abgesicherter Server, der als einzig vorgesehener Einstiegspunkt in ein Verwaltungsnetz oder zu administrierten Systemen dient. Alle administrativen Sitzungen laufen über diesen zentralen Knotenpunkt, wodurch die Angriffsfläche reduziert und die Nachvollziehbarkeit erhöht wird. Ohne Sprungserver könnte ein Angreifer beispielsweise über kompromittierte Administrator-Notebooks unbemerkt direkt auf zentrale Systeme zugreifen und dort Manipulationen durchführen. Ein Sprungserver kann hingegen alle Management-Zugriffe zentral kanalisieren, sodass verdächtige Aktivitäten leichter erkannt und im Nachhinein nachvollzogen werden können. Praktische Umsetzungen können sein: (1) der Einsatz eines dedizierten, gehärteten Servers mit restriktiven Firewall-Regeln, (2) die Nutzung von Mehrfaktor-Authentisierung und zentralem Benutzer-Management auf dem Sprungserver, (3) eine verpflichtende Session-Aufzeichnung oder Protokollierung sämtlicher Administrationsvorgänge.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c907e5e0-bccc-4467-9962-7f4972b0ad8f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | c907e5e0-bccc-4467-9962-7f4972b0ad8f |
