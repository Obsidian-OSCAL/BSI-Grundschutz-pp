---
tags: Lateral_Movement_Separation_of_Concerns
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.2.2.7 Management-Netz
parent_control: ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.2.2.7 - Management-Netz
Tags: "[Lateral Movement](tags_Lateral Movement)" "[Separation of Concerns](tags_Separation of Concerns)"
Gruppe: [ARCH.2 Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md)
---

** Übergeordnetes Control: ** [ARCH.2.2 Einschränkung von Verbindungen zwischen Segmenten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.2.2%20Einschränkung%20von%20Verbindungen%20zwischen%20Segmenten.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Netzdesign](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.2%20Netzdesign.md) *** | Netze | SOLLTE | ein oder mehrere Management-Netze |  | installieren | Netzplan | >Architektur für Netze SOLLTE ein oder mehrere Management-Netze installieren.

> [!info]- Guidance
>Ein Management-Netz ist ein physisch oder durch Netzfilter separiertes Netzsegment, das dediziert für die Überwachung, Verwaltung und Wartung von IT-Systemen bestimmt ist. Es ist von anderen Produktions- und Datennetzen getrennt, um den Zugriff auf kritische Verwaltungsfunktionen zu schützen und die Verfügbarkeit dieser Zugänge auch bei Problemen im restlichen Netz zu sichern. Dies gilt auch für virtualisierte Systeme. Im Kontext der Containerisierung empfiehlt es sich, administrative Zugänge auf Applikations-Container immer über die Container-Runtime erfolgen zu lassen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | d02f23d0-9c15-4811-838f-6440ee744334 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | d02f23d0-9c15-4811-838f-6440ee744334 |
